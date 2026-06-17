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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-rose-200/40 rounded-full blur-3xl opacity-60 mix-blend-multiply filter"></div>
<div className="absolute top-[20%] right-[0%] w-[40%] h-[40%] bg-amber-100/50 rounded-full blur-3xl opacity-50 mix-blend-multiply filter"></div>
<div className="absolute bottom-[0%] left-[20%] w-[60%] h-[40%] bg-white/60 rounded-full blur-3xl opacity-70"></div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/60 border-b border-white/40">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-400 to-amber-200 flex items-center justify-center text-white font-display font-semibold text-xs shadow-lg shadow-rose-200/50">IA</div>
<span className="font-display font-semibold text-lg tracking-widest text-rose-950 group-hover:opacity-80 transition-opacity">INTIMACY ACADEMY</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-rose-600 transition-colors" href="#about">Philosophy</a>
<a className="hover:text-rose-600 transition-colors" href="#courses">Courses</a>
<a className="hover:text-rose-600 transition-colors" href="#testimonials">Stories</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-rose-600 transition-colors" href="#login">Log In</a>
<a className="relative overflow-hidden glossy-btn bg-gradient-to-r from-rose-500 to-rose-400 text-white text-xs font-semibold uppercase tracking-wider py-2.5 px-6 rounded-full shadow-lg shadow-rose-300/40 hover:shadow-rose-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all border border-white/20" href="#join">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-rose-100 shadow-sm mb-8 backdrop-blur-sm">
<iconify-icon className="text-amber-500" icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-rose-800 uppercase tracking-wide">Redefine Your Connection</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-rose-950 tracking-tight leading-[1.1] mb-6">
            The Art of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-600 to-amber-600 italic pr-2">Modern Intimacy</span>
</h1>
<p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-500 font-light leading-relaxed mb-10">
            A premium sanctuary for women to explore confidence, cultivate magnetism, and master the language of deeper connection.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
<a className="w-full sm:w-auto glossy-btn bg-rose-900 text-rose-50 text-sm font-semibold py-4 px-8 rounded-full shadow-xl shadow-rose-900/20 hover:bg-rose-800 transition-all text-center" href="#courses">
                Explore Programs
            </a>
<a className="w-full sm:w-auto bg-white/50 backdrop-blur-md text-rose-900 border border-white text-sm font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-white/80 transition-all flex items-center justify-center gap-2 group" href="#about">
<iconify-icon className="group-hover:text-rose-500 transition-colors" icon="solar:play-circle-linear" width="20"></iconify-icon>
                Watch Manifesto
            </a>
</div>

<div className="absolute top-1/2 left-10 hidden lg:block animate-[bounce_3s_infinite]">
<div className="bg-white/40 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-xl shadow-rose-100/50 transform -rotate-6">
<iconify-icon className="text-rose-500" icon="solar:heart-angle-linear" width="32"></iconify-icon>
</div>
</div>
<div className="absolute bottom-20 right-10 hidden lg:block animate-[bounce_4s_infinite]">
<div className="bg-white/40 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-xl shadow-rose-100/50 transform rotate-6">
<iconify-icon className="text-amber-500" icon="solar:cup-first-linear" width="32"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative group">

<div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-rose-200 aspect-[4/5] bg-stone-200">
<div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-stone-200"></div>
<img alt="Elegant woman" className="object-cover w-full h-full opacity-90 mix-blend-overlay hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-2xl">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span className="text-xs font-semibold text-white tracking-wider uppercase">Live Session</span>
</div>
<p className="text-white font-display text-lg">"Vulnerability is the truest measure of courage."</p>
</div>
</div>

<div className="absolute -inset-4 bg-gradient-to-tr from-rose-200 to-amber-100 rounded-[3rem] -z-10 opacity-60 blur-lg group-hover:opacity-80 transition-opacity"></div>
</div>
<div className="space-y-8">
<h2 className="text-4xl md:text-5xl font-display text-rose-950 tracking-tight leading-tight">
                        Unveil your <span className="italic text-rose-600">feminine power</span>.
                    </h2>
<p className="text-stone-600 leading-relaxed text-lg">
                        At Intimacy Academy, we believe that true elegance begins with self-knowledge. Our curriculum blends modern psychology, somatic practices, and timeless feminine wisdom to help you cultivate magnetic relationships.
                    </p>
<div className="space-y-6 pt-4">
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
<iconify-icon icon="solar:shield-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-rose-900 mb-1">Radiant Confidence</h3>
<p className="text-stone-500 text-sm leading-relaxed">Build unshakeable self-worth that naturally attracts the right connections.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-rose-900 mb-1">Deep Connection</h3>
<p className="text-stone-500 text-sm leading-relaxed">Master the subtle arts of communication and emotional intelligence.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-rose-100 text-rose-500 flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:rose-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-rose-900 mb-1">Sensual Awakening</h3>
<p className="text-stone-500 text-sm leading-relaxed">Reconnect with your body and embrace your innate sensual energy.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/30 backdrop-blur-sm relative" id="courses">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-amber-600 font-semibold tracking-wider text-xs uppercase mb-2 block">Curated Curriculum</span>
<h2 className="text-4xl font-display text-rose-950 tracking-tight">Signature Programs</h2>
</div>
<a className="group flex items-center gap-2 text-rose-700 font-medium text-sm hover:gap-3 transition-all" href="#">
                    View all courses <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative bg-white rounded-[2rem] p-2 shadow-xl shadow-stone-200/40 hover:shadow-2xl hover:shadow-rose-200/40 transition-all duration-500 hover:-translate-y-1">
<div className="relative h-56 rounded-[1.5rem] overflow-hidden mb-4">
<img alt="Course" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold text-rose-900 py-1.5 px-3 rounded-full shadow-sm">
                            4 Weeks
                        </div>
</div>
<div className="px-4 pb-6">
<div className="flex items-center gap-1 mb-2 text-amber-500">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-stone-400 text-xs ml-1">(120 reviews)</span>
</div>
<h3 className="text-xl font-display font-semibold text-rose-950 mb-2">Feminine Magnetism</h3>
<p className="text-stone-500 text-sm mb-6 line-clamp-2">Learn the secrets of attraction and how to embody your most radiant self.</p>
<div className="flex items-center justify-between border-t border-stone-100 pt-4">
<span className="text-lg font-semibold text-rose-900">$297</span>
<button className="bg-rose-50 text-rose-700 p-2.5 rounded-full hover:bg-rose-500 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative bg-white rounded-[2rem] p-2 shadow-xl shadow-stone-200/40 hover:shadow-2xl hover:shadow-rose-200/40 transition-all duration-500 hover:-translate-y-1 ring-2 ring-rose-100">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-rose-400 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg z-10">
                        Most Popular
                    </div>
<div className="relative h-56 rounded-[1.5rem] overflow-hidden mb-4">
<img alt="Course" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold text-rose-900 py-1.5 px-3 rounded-full shadow-sm">
                            6 Weeks
                        </div>
</div>
<div className="px-4 pb-6">
<div className="flex items-center gap-1 mb-2 text-amber-500">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-stone-400 text-xs ml-1">(315 reviews)</span>
</div>
<h3 className="text-xl font-display font-semibold text-rose-950 mb-2">Sacred Self-Love</h3>
<p className="text-stone-500 text-sm mb-6 line-clamp-2">A deep dive into healing your inner child and establishing boundaries.</p>
<div className="flex items-center justify-between border-t border-stone-100 pt-4">
<span className="text-lg font-semibold text-rose-900">$397</span>
<button className="bg-rose-500 text-white p-2.5 rounded-full hover:bg-rose-600 shadow-lg shadow-rose-200 transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative bg-white rounded-[2rem] p-2 shadow-xl shadow-stone-200/40 hover:shadow-2xl hover:shadow-rose-200/40 transition-all duration-500 hover:-translate-y-1">
<div className="relative h-56 rounded-[1.5rem] overflow-hidden mb-4">
<img alt="Course" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold text-rose-900 py-1.5 px-3 rounded-full shadow-sm">
                            Self-Paced
                        </div>
</div>
<div className="px-4 pb-6">
<div className="flex items-center gap-1 mb-2 text-amber-500">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" width="14"></iconify-icon>
<span className="text-stone-400 text-xs ml-1">(84 reviews)</span>
</div>
<h3 className="text-xl font-display font-semibold text-rose-950 mb-2">The Art of Conversation</h3>
<p className="text-stone-500 text-sm mb-6 line-clamp-2">Master verbal and non-verbal communication for deeper intimacy.</p>
<div className="flex items-center justify-between border-t border-stone-100 pt-4">
<span className="text-lg font-semibold text-rose-900">$197</span>
<button className="bg-rose-50 text-rose-700 p-2.5 rounded-full hover:bg-rose-500 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="testimonials">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-display text-rose-950 tracking-tight mb-4">Transformations</h2>
<p className="text-stone-500 max-w-xl mx-auto">Join thousands of women who have reclaimed their radiance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-gradient-to-b from-white to-rose-50/50 p-8 rounded-3xl shadow-lg border border-white/60 relative">
<div className="absolute -top-4 left-8 bg-rose-200 text-rose-600 w-10 h-10 flex items-center justify-center rounded-full shadow-inner">
<iconify-icon icon="solar:quote-up-bold" width="20"></iconify-icon>
</div>
<p className="text-stone-600 italic leading-relaxed mb-6 pt-2">"This academy changed how I view myself. I walked in feeling invisible and left feeling like a queen. The community is unmatched."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<h4 className="font-semibold text-rose-900 text-sm">Sarah Jenkins</h4>
<p className="text-xs text-stone-400">Marketing Executive</p>
</div>
</div>
</div>

<div className="bg-gradient-to-b from-white to-rose-50/50 p-8 rounded-3xl shadow-lg border border-white/60 relative mt-4 md:mt-0">
<div className="absolute -top-4 left-8 bg-rose-200 text-rose-600 w-10 h-10 flex items-center justify-center rounded-full shadow-inner">
<iconify-icon icon="solar:quote-up-bold" width="20"></iconify-icon>
</div>
<p className="text-stone-600 italic leading-relaxed mb-6 pt-2">"I never realized how much I was holding back until I took the Feminine Magnetism course. It’s elegant, practical, and deeply moving."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<h4 className="font-semibold text-rose-900 text-sm">Elena Rodriguez</h4>
<p className="text-xs text-stone-400">Entrepreneur</p>
</div>
</div>
</div>

<div className="bg-gradient-to-b from-white to-rose-50/50 p-8 rounded-3xl shadow-lg border border-white/60 relative mt-4 md:mt-0">
<div className="absolute -top-4 left-8 bg-rose-200 text-rose-600 w-10 h-10 flex items-center justify-center rounded-full shadow-inner">
<iconify-icon icon="solar:quote-up-bold" width="20"></iconify-icon>
</div>
<p className="text-stone-600 italic leading-relaxed mb-6 pt-2">"Finally, a space that feels premium and safe. The attention to detail in the course materials and the support is incredible."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<h4 className="font-semibold text-rose-900 text-sm">Michelle Tan</h4>
<p className="text-xs text-stone-400">Creative Director</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden">
<div className="absolute inset-0 bg-rose-900">
<div className="absolute inset-0 bg-gradient-to-br from-rose-800 to-rose-950 opacity-90"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500 rounded-full blur-[100px] opacity-30 mix-blend-screen"></div>
</div>
<div className="relative z-10 text-center py-20 px-8">
<iconify-icon className="text-amber-300 mb-6" icon="solar:crown-linear" width="40"></iconify-icon>
<h2 className="text-4xl md:text-6xl font-display text-white mb-6">Start Your Journey Today</h2>
<p className="text-rose-100 text-lg max-w-2xl mx-auto mb-10 font-light">
                    Join the waitlist for our next enrollment cycle and receive a free "Morning Radiance" audio guide.
                </p>
<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white/10 border border-white/20 text-white placeholder-rose-200/60 rounded-full px-6 py-4 outline-none focus:bg-white/20 focus:border-rose-300 transition-all text-sm" placeholder="Your email address" type="email"/>
<button className="bg-gradient-to-r from-amber-200 to-amber-400 text-rose-950 font-semibold px-8 py-4 rounded-full shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-transform text-sm uppercase tracking-wide" type="button">
                        Join Now
                    </button>
</form>
<p className="mt-6 text-xs text-rose-300/60">No spam. Unsubscribe anytime.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-rose-100">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-display text-rose-950 mb-12">Get in Touch</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
<div className="space-y-6">
<p className="text-stone-500">Have questions about our programs or need support? Fill out the form and our team will get back to you within 24 hours.</p>
<div className="flex items-center gap-4 text-stone-600">
<div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center text-rose-500">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<span className="text-sm">hello@intimacyacademy.com</span>
</div>
<div className="flex items-center gap-4 text-stone-600">
<div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center text-rose-500">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<span className="text-sm">Los Angeles, CA</span>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-1">
<label className="text-xs font-semibold text-stone-400 uppercase tracking-wide">First Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-200 transition-all" type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Last Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-200 transition-all" type="text"/>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Message</label>
<textarea className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-200 transition-all" rows="4"></textarea>
</div>
<button className="w-full bg-rose-900 text-white font-medium py-3 rounded-xl hover:bg-rose-800 transition-colors shadow-lg shadow-rose-200">Send Message</button>
</form>
</div>
</div>
</section>

<footer className="bg-rose-50 pt-20 pb-10 px-6 border-t border-rose-200">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<div className="mb-8">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-500 to-amber-300 flex items-center justify-center text-white font-display font-bold text-lg shadow-lg">IA</div>
</div>
<div className="flex gap-8 mb-8 text-sm font-medium text-stone-500">
<a className="hover:text-rose-600 transition-colors" href="#">Courses</a>
<a className="hover:text-rose-600 transition-colors" href="#">About</a>
<a className="hover:text-rose-600 transition-colors" href="#">Testimonials</a>
<a className="hover:text-rose-600 transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-6 mb-10">
<a className="text-rose-400 hover:text-rose-600 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon></a>
<a className="text-rose-400 hover:text-rose-600 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon></a>
<a className="text-rose-400 hover:text-rose-600 transition-colors" href="#"><iconify-icon icon="solar:video-frame-linear" width="24"></iconify-icon></a>
</div>
<p className="text-xs text-stone-400">© 2023 Intimacy Academy. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
