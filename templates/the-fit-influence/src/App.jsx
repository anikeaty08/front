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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
dark: '#020617',
card: '#0f172a',
border: '#1e293b',
blue: '#0ea5e9',
green: '#22c55e',
orange: '#f97316'
}
}
}
}
}



        // Iconify
        lucide.createIcons();

        // Scroll Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
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
      

<nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white uppercase flex items-center gap-2" href="#">
<span className="bg-gradient-to-br from-cyan-400 to-blue-600 w-8 h-8 rounded flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="dumbbell"></i>
</span>
                The Fit Influence
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#trainers">Trainers</a>
<a className="hover:text-white transition-colors" href="#testimonials">Stories</a>
<a className="px-5 py-2.5 rounded-full bg-white text-brand-dark font-semibold hover:bg-slate-200 transition-colors" href="#contact">
                    Book Free Session
                </a>
</div>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="High energy gym workout" className="w-full h-full object-cover object-center opacity-40" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                New Location Coming Soon to Charlotte
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Elevate Your Fitness <br className="hidden md:block"/> Journey with <span className="text-gradient">The Fit Influence</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Professional Training, Personalized Results. We combine science-based FITT principles with high-energy coaching to unlock your potential. Now in Charlotte, NC.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20" href="#contact">
                    Book a Free Session
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-700 bg-slate-900/50 text-white font-medium hover:bg-slate-800 transition-colors backdrop-blur-sm" href="#services">
                    View Programs
                </a>
</div>
</div>
</header>

<section className="py-24 bg-brand-dark relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center reveal">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                        Science-Based. <span className="text-slate-500">Community Driven.</span>
</h2>
<p className="text-slate-400 mb-6 leading-relaxed">
                        The Fit Influence isn't just a gym; it's a movement in Charlotte. We utilize the FITT principle (Frequency, Intensity, Time, Type) to engineer customized programs that adapt to your biology and lifestyle.
                    </p>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Whether you are an elite athlete or stepping into a gym for the first time, our data-driven approach ensures sustainable progress, preventing burnout while maximizing results.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
<i className="w-6 h-6" data-lucide="award"></i>
</div>
<div>
<h3 className="text-white font-medium mb-1">Expert Trainers</h3>
<p className="text-sm text-slate-500">Certified professionals specializing in biomechanics and nutrition.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<div>
<h3 className="text-white font-medium mb-1">Inclusive Environment</h3>
<p className="text-sm text-slate-500">A supportive space where every body type and fitness level thrives.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<div>
<h3 className="text-white font-medium mb-1">Proven Results</h3>
<p className="text-sm text-slate-500">Trackable metrics and tangible transformations.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl opacity-20 blur-2xl"></div>
<img alt="Trainer helping client" className="relative rounded-2xl border border-white/10 shadow-2xl w-full object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-card border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Our Offerings</h2>
<p className="text-slate-400">Comprehensive fitness solutions designed to fit your unique schedule and goals.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 reveal">

<div className="group relative bg-brand-dark rounded-xl p-1 overflow-hidden hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300">
<div className="absolute inset-0 bg-brand-dark rounded-xl m-[1px]"></div>
<div className="relative p-6 h-full flex flex-col">
<div className="w-full h-48 rounded-lg overflow-hidden mb-6">
<img alt="Personal Training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium text-white mb-2">Personal Training</h3>
<p className="text-slate-400 text-sm mb-6 flex-grow">1-on-1 coaching tailored to your specific goals using advanced FITT metrics.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-cyan-400 text-sm font-medium">From $75/session</span>
<i className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group relative bg-brand-dark rounded-xl p-1 overflow-hidden hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300">
<div className="absolute inset-0 bg-brand-dark rounded-xl m-[1px]"></div>
<div className="relative p-6 h-full flex flex-col">
<div className="w-full h-48 rounded-lg overflow-hidden mb-6">
<img alt="Group Classes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium text-white mb-2">Group Classes</h3>
<p className="text-slate-400 text-sm mb-6 flex-grow">High-energy HIIT, Yoga, and Strength circuits in a motivating team setting.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-orange-400 text-sm font-medium">From $25/class</span>
<i className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group relative bg-brand-dark rounded-xl p-1 overflow-hidden hover:bg-gradient-to-br hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300">
<div className="absolute inset-0 bg-brand-dark rounded-xl m-[1px]"></div>
<div className="relative p-6 h-full flex flex-col">
<div className="w-full h-48 rounded-lg overflow-hidden mb-6">
<img alt="Nutrition Coaching" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium text-white mb-2">Nutrition Coaching</h3>
<p className="text-slate-400 text-sm mb-6 flex-grow">Macro-planning and meal prep guidance to fuel your workouts properly.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-green-400 text-sm font-medium">From $120/mo</span>
<i className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="md:col-span-3 grid md:grid-cols-2 gap-6">
<div className="bg-brand-dark rounded-xl p-6 border border-white/5 flex items-center justify-between group hover:border-white/10 transition-colors">
<div className="flex items-center gap-4">
<div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
<i className="w-6 h-6" data-lucide="laptop"></i>
</div>
<div>
<h3 className="text-white font-medium">Online Programs</h3>
<p className="text-xs text-slate-500">Train from anywhere</p>
</div>
</div>
<i className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</div>
<div className="bg-brand-dark rounded-xl p-6 border border-white/5 flex items-center justify-between group hover:border-white/10 transition-colors">
<div className="flex items-center gap-4">
<div className="p-3 bg-pink-500/10 rounded-lg text-pink-400">
<i className="w-6 h-6" data-lucide="building-2"></i>
</div>
<div>
<h3 className="text-white font-medium">Corporate Wellness</h3>
<p className="text-xs text-slate-500">Team health initiatives</p>
</div>
</div>
<i className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark" id="trainers">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-16 text-center reveal">Meet The Team</h2>
<div className="grid md:grid-cols-3 gap-8 reveal">

<div className="group">
<div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
<img alt="Sarah J." className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div className="text-white">
<p className="font-medium">HIIT &amp; Strength</p>
</div>
</div>
</div>
<h3 className="text-lg font-medium text-white">Sarah Jenkins</h3>
<p className="text-sm text-slate-500 mb-2">Head Trainer, CPT</p>
<p className="text-xs text-slate-400">Specializes in functional movement and high-intensity conditioning.</p>
</div>

<div className="group">
<div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
<img alt="Marcus T." className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div className="text-white">
<p className="font-medium">Hypertrophy</p>
</div>
</div>
</div>
<h3 className="text-lg font-medium text-white">Marcus Thorne</h3>
<p className="text-sm text-slate-500 mb-2">Strength Coach, CSCS</p>
<p className="text-xs text-slate-400">Expert in body composition changes and heavy lifting mechanics.</p>
</div>

<div className="group">
<div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
<img alt="Elena R." className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div className="text-white">
<p className="font-medium">Mobility &amp; Yoga</p>
</div>
</div>
</div>
<h3 className="text-lg font-medium text-white">Elena Rodriguez</h3>
<p className="text-sm text-slate-500 mb-2">Yoga Instructor, RYT-500</p>
<p className="text-xs text-slate-400">Focuses on recovery, flexibility, and mind-body connection.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-brand-card" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Client Stories</h2>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-slate-700 hover:bg-slate-800 text-white transition-colors"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<button className="p-2 rounded-full border border-slate-700 hover:bg-slate-800 text-white transition-colors"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide reveal">

<div className="min-w-[300px] md:min-w-[400px] bg-brand-dark p-8 rounded-2xl border border-white/5 snap-center">
<div className="flex items-center gap-1 text-orange-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 mb-6 leading-relaxed">"The Fit Influence changed my life. I lost 20lbs in 3 months, but more importantly, I learned how to sustain it. The FITT principle really works."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-white font-medium text-sm">David K.</p>
<p className="text-xs text-slate-500">Charlotte, NC</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-brand-dark p-8 rounded-2xl border border-white/5 snap-center">
<div className="flex items-center gap-1 text-orange-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 mb-6 leading-relaxed">"I was intimidated by gyms, but this place is different. The inclusive vibe and expert trainers made me feel at home from day one."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-white font-medium text-sm">Jessica M.</p>
<p className="text-xs text-slate-500">Member since 2022</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-brand-dark p-8 rounded-2xl border border-white/5 snap-center">
<div className="flex items-center gap-1 text-orange-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 mb-6 leading-relaxed">"The group classes are insane energy! I've never pushed myself this hard and actually enjoyed it. Highly recommend."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-white font-medium text-sm">Michael R.</p>
<p className="text-xs text-slate-500">Charlotte, NC</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12 reveal">Latest Insights</h2>
<div className="grid md:grid-cols-3 gap-8 reveal">
<article className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-4 border border-white/10">
<img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-orange-500 text-xs font-semibold mb-2 uppercase tracking-wider">Training</p>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">Mastering the FITT Principle</h3>
<a className="text-sm text-slate-500 hover:text-white inline-flex items-center gap-1" href="#">Read more <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</article>
<article className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-4 border border-white/10">
<img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-green-500 text-xs font-semibold mb-2 uppercase tracking-wider">Lifestyle</p>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">Quick Home Workouts for Busy Dads</h3>
<a className="text-sm text-slate-500 hover:text-white inline-flex items-center gap-1" href="#">Read more <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</article>
<article className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-4 border border-white/10">
<img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&amp;w=1932&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-blue-500 text-xs font-semibold mb-2 uppercase tracking-wider">Nutrition</p>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">Nutrition Tips for Busy Lifestyles</h3>
<a className="text-sm text-slate-500 hover:text-white inline-flex items-center gap-1" href="#">Read more <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</article>
</div>
</div>
</section>

<section className="py-24 bg-brand-card border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 reveal">

<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">Start Your Journey</h2>
<p className="text-slate-400 mb-8">Fill out the form below to book your free intro session or ask any questions.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1 uppercase">First Name</label>
<input className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1 uppercase">Last Name</label>
<input className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1 uppercase">Email Address</label>
<input className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1 uppercase">Goal</label>
<select className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm">
<option>Weight Loss</option>
<option>Muscle Gain</option>
<option>General Health</option>
<option>Athletic Performance</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1 uppercase">Message</label>
<textarea className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600 h-32" placeholder="Tell us about your fitness history..."></textarea>
</div>
<button className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity">
                            Send Message
                        </button>
</form>
</div>

<div className="flex flex-col h-full">
<div className="bg-brand-dark border border-white/10 rounded-2xl p-2 h-64 md:h-80 mb-8 overflow-hidden relative">
<iframe allowfullscreen="" className="rounded-xl opacity-80 hover:opacity-100 transition-opacity" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.672323675685!2d-80.89531592425574!3d35.189659072750035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885698c764955555%3A0x123456789!2s4324%20Revolution%20Park%20Dr%2C%20Charlotte%2C%20NC%2028217!5e0!3m2!1sen!2sus!4v1715421234567!5m2!1sen!2sus" style={{border: '0', filter: 'grayscale(100%) invert(92%) contrast(83%)'}} width="100%">
</iframe>
<div className="absolute bottom-4 left-4 bg-brand-dark/90 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
<p className="text-xs text-white font-medium">New Location Coming Soon</p>
</div>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-white font-medium mb-1">Visit Us</h4>
<p className="text-slate-400 text-sm">4324 Revolution Park Dr<br/>Charlotte, NC 28217</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-green-500/10 rounded-lg text-green-400">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<h4 className="text-white font-medium mb-1">Email Us</h4>
<a className="text-slate-400 text-sm hover:text-white transition-colors" href="mailto:info@thefitinfluence.com">info@thefitinfluence.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<h4 className="text-white font-medium mb-1">Call Us</h4>
<p className="text-slate-400 text-sm">(704) 555-0123</p>
</div>
</div>
</div>
<div className="mt-auto pt-8 flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-brand-dark pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-white uppercase flex items-center gap-2 mb-4" href="#">
<span className="bg-gradient-to-br from-cyan-400 to-blue-600 w-6 h-6 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="dumbbell"></i>
</span>
                        The Fit Influence
                    </a>
<p className="text-slate-500 text-sm max-w-sm mb-6">
                        Empowering the Charlotte community through science-based fitness and nutrition. Your journey to a healthier life starts here.
                    </p>
<div className="flex items-center gap-2">
<input className="bg-brand-card border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors">Subscribe</button>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Programs</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Personal Training</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Group Classes</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Nutrition</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Online Coaching</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Trainers</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
<p>© 2024 The Fit Influence. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
