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
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white">
<span className="font-semibold text-sm">H</span>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">Henric Johansson</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#methodology">Methodology</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#testimonials">Success Stories</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all group" href="#contact">
                Book a Session
                <i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-8">
<span className="w-2 h-2 rounded-full bg-slate-500"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Mental Performance</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-slate-900 leading-[1.1] tracking-tight mb-8">
                    Unlocking the <br/>
<span className="text-slate-500">Elite Mindset.</span>
</h1>
<p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                    Guiding world-class athletes, leaders, and high performers to achieve clarity, resilience, and peak mental strength.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-slate-800 transition-all">
                        Book a Session
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-base font-medium hover:bg-slate-50 transition-all">
                        Explore Academy
                    </button>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-slate-500 font-medium">
<div className="flex -space-x-3">
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<p>Trusted by 500+ High Performers</p>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2rem] overflow-hidden bg-slate-100 aspect-[4/5] lg:aspect-square">
<img alt="Henric Johansson Coaching" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1dce7829-a5d5-41bd-a05f-0415ee0cdf78_1600w.png"/>

<div className="absolute top-10 left-10 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/50 animate-fade-in-up">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-50 rounded-lg text-slate-900">
<i className="w-5 h-5" data-lucide="target"></i>
</div>
<div>
<p className="text-xs text-slate-500 font-medium">Focus</p>
<p className="text-sm font-semibold text-slate-900">Unwavering Clarity</p>
</div>
</div>
</div>
<div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/50">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-50 rounded-lg text-slate-900">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<div>
<p className="text-xs text-slate-500 font-medium">Performance</p>
<p className="text-sm font-semibold text-slate-900">Peak State</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-16">
<div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-white mb-6">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500">About Henric</span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
                    Mental strength isn't just for athletes.<br/>It's the foundation of all success.
                </h2>
<p className="text-lg text-slate-600 leading-relaxed">
                    With over a decade of experience in sports psychology and leadership development, I help individuals bridge the gap between potential and performance.
                </p>
<div className="mt-8">
<a className="inline-flex items-center gap-2 text-slate-900 font-medium hover:opacity-70 transition-opacity" href="#">
                        Read My Full Story <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-slate-200 pt-12">
<div className="text-center lg:text-left">
<p className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-2">15+</p>
<p className="text-sm font-medium text-slate-500">Years Experience</p>
</div>
<div className="text-center lg:text-left">
<p className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-2">1.2k</p>
<p className="text-sm font-medium text-slate-500">Sessions Conducted</p>
</div>
<div className="text-center lg:text-left">
<p className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-2">50+</p>
<p className="text-sm font-medium text-slate-500">Pro Athletes</p>
</div>
<div className="text-center lg:text-left">
<p className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-2">3</p>
<p className="text-sm font-medium text-slate-500">National Titles</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center mb-16">
<div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 mb-6">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Expertise</span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight text-center">Tailored Performance Programs</h2>
<p className="text-lg text-slate-600 mt-4 text-center max-w-2xl">
                    Simple, effective strategies designed to help you move forward.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
<img alt="Sports Psychology" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">Athletes</p>
<h3 className="text-2xl font-semibold text-white mb-2">Sports Psychology</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            Overcome performance anxiety and master flow state.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
<img alt="Executive Coaching" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">Leaders</p>
<h3 className="text-2xl font-semibold text-white mb-2">Executive Mentoring</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            Decision-making clarity for high-stakes environments.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
<img alt="Workshops" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">Teams</p>
<h3 className="text-2xl font-semibold text-white mb-2">Academy Workshops</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            Building culture and collective resilience.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="methodology">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center mb-16 text-center">
<div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-white mb-6">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500">The Method</span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">Real Change. Simple Steps.</h2>
<p className="text-lg text-slate-600 mt-4 max-w-xl">
                    A structured, evidence-based approach to rewiring your mindset for consistent high performance.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-medium mb-6">1</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Assessment</h3>
<p className="text-slate-600 text-base leading-relaxed">We identify the mental blocks and habits currently limiting your potential.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center font-medium mb-6">2</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Strategy</h3>
<p className="text-slate-600 text-base leading-relaxed">Developing a personalized roadmap with actionable mental tools.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center font-medium mb-6">3</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Execution</h3>
<p className="text-slate-600 text-base leading-relaxed">Applying techniques in real-world scenarios with ongoing feedback.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center font-medium mb-6">4</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Mastery</h3>
<p className="text-slate-600 text-base leading-relaxed">Refining skills until they become second nature and automatic.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center mb-16 text-center">
<div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 mb-6">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Clients</span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">Who I Work With</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="flex flex-col">
<div className="h-96 rounded-2xl overflow-hidden bg-slate-100 mb-6">
<img alt="Athlete" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ad9c1c4-8444-4aa5-be98-28f6d30989e6_800w.png"/>
</div>
<h3 className="text-xl font-semibold text-slate-900">Elite Athletes</h3>
<p className="text-slate-500 mt-2">Seeking the competitive edge that physical training alone cannot provide.</p>
</div>

<div className="flex flex-col">
<div className="h-96 rounded-2xl overflow-hidden bg-slate-100 mb-6">
<img alt="Executive" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-xl font-semibold text-slate-900">Business Leaders</h3>
<p className="text-slate-500 mt-2">Managing high-pressure decisions and leading teams with emotional intelligence.</p>
</div>

<div className="flex flex-col">
<div className="h-96 rounded-2xl overflow-hidden bg-slate-100 mb-6">
<img alt="Coach" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-xl font-semibold text-slate-900">Coaches &amp; Trainers</h3>
<p className="text-slate-500 mt-2">Learning to better understand and motivate their own athletes.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center mb-16 text-center">
<div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 mb-6">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500">The Journey</span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">Mindset Made Simple</h2>
<p className="text-lg text-slate-600 mt-4 max-w-xl">
                    How we help you plan, prepare, and move forward in your career and sport.
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="rounded-3xl overflow-hidden h-[600px] shadow-2xl shadow-slate-200/50">
<img alt="Meeting" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="space-y-12">

<div className="flex gap-6 group">
<div className="mt-1">
<span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-medium">Connect</span>
</div>
<div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">Discovery Call</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                                We start with a conversation. No commitments. Just an honest look at where you are and where you want to be.
                            </p>
</div>
</div>

<div className="flex gap-6 group">
<div className="mt-1">
<span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">Plan</span>
</div>
<div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">Mental Mapping</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                                Get a personal roadmap based on your psychology, your stressors, and your specific performance goals.
                            </p>
</div>
</div>

<div className="flex gap-6 group">
<div className="mt-1">
<span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">Guide</span>
</div>
<div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">Guided Support</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                                Consistent mentorship to ensure the tools stick. We analyze results and adjust the strategy in real-time.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-white mb-6">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Testimonials</span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">Trusted by The Elite</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
<i className="w-8 h-8 text-slate-200 mb-6" data-lucide="quote"></i>
<p className="text-xl font-medium text-slate-900 mb-8 leading-relaxed">
                        "I had no idea how much my mindset was holding me back until I met Henric. The clarity I have now on the field is unmatched."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">

<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Marcus Eriksson</p>
<p className="text-xs text-slate-500">Professional Footballer</p>
</div>
</div>
</div>
<div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
<i className="w-8 h-8 text-slate-200 mb-6" data-lucide="quote"></i>
<p className="text-xl font-medium text-slate-900 mb-8 leading-relaxed">
                        "Henric doesn't just give advice; he gives you a system. My leadership style has completely transformed, and my team is thriving."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">

<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah Lindberg</p>
<p className="text-xs text-slate-500">CEO, Tech Innovate</p>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-12 gap-4">
<button className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
<i className="w-5 h-5 text-slate-600" data-lucide="arrow-left"></i>
</button>
<button className="p-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white pt-24 pb-12" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 mb-20">
<div>
<h2 className="text-4xl font-semibold tracking-tight mb-6">Let's Connect</h2>
<p className="text-slate-400 text-lg mb-8 max-w-md">
                        Ready to elevate your game? Book a consultation or join the Johansson Sports Academy today.
                    </p>
<a className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-slate-100 transition-colors" href="#">
                        Book a Free Call
                        <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
<div>
<h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Contact</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">contact@henric.com</a></li>
<li><a className="hover:text-white transition-colors" href="#">+1 (555) 123-4567</a></li>
<li className="pt-4">
<span className="block text-slate-500 text-xs mb-1">Address</span>
                                Stockholm, Sweden
                            </li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Navigation</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Social</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">Twitter</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-slate-900">
<span className="font-bold text-xs">H</span>
</div>
<span className="font-semibold text-sm">Henric Johansson</span>
</div>
<p className="text-xs text-slate-500">© 2024 Johansson Sports Academy. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
