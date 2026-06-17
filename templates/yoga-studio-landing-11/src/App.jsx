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
      

<nav className="fixed w-full top-0 z-50 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-[#e7e5e4]/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-serif text-xl tracking-tighter text-[#0f766e]" href="#">ALAYA.</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-[#57534e]">
<a className="hover:text-[#0f766e] transition-colors" href="#about">About</a>
<a className="hover:text-[#0f766e] transition-colors" href="#services">Programs</a>
<a className="hover:text-[#0f766e] transition-colors" href="#schedule">Schedule</a>
<a className="hover:text-[#0f766e] transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button aria-label="Toggle Dark Mode" className="text-[#78716c] hover:text-[#0f766e] transition-colors flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f5f5f4]">
<iconify-icon icon="solar:moon-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
<a className="hidden md:inline-flex bg-[#0f766e] text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-[#115e59] transition-all shadow-sm hover:shadow-md" href="#contact">
                    Book a Class
                </a>
<button className="md:hidden text-[#292524] flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Peaceful Yoga" className="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&amp;w=2920&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#1c1917]/40 via-[#1c1917]/20 to-[#FAFAF9]"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-20">
<span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-light tracking-wide mb-6">
                Holistic Wellness Academy
            </span>
<h1 className="font-serif text-5xl md:text-7xl tracking-tight font-medium text-white mb-6 leading-tight drop-shadow-sm">
                Find Your Balance.<br/>Transform Your Life.
            </h1>
<p className="text-base md:text-lg text-[#f5f5f4] font-light max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
                Discover peace through mindful movement. Join our sanctuary for holistic wellness, designed to align your body, mind, and spirit.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-[#0f766e] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#f5f5f4] transition-all shadow-sm" href="#schedule">
                    Join a Class
                </a>
<a className="w-full sm:w-auto bg-[#0f766e]/20 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#0f766e]/40 transition-all" href="#contact">
                    Book a Free Session
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#FAFAF9]" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -inset-4 bg-[#e6ecea] rounded-[2.5rem] transform -rotate-2"></div>
<img alt="Yoga Instructor" className="relative z-10 w-full h-auto aspect-[4/5] object-cover rounded-3xl shadow-xl" src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg z-20 flex items-center gap-4">
<div className="bg-[#f0fdf4] text-[#15803d] w-12 h-12 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:leaf-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-xs text-[#78716c] font-light">Certified Experience</p>
<p className="text-lg font-serif font-medium tracking-tight text-[#292524]">10+ Years</p>
</div>
</div>
</div>
<div className="md:pl-8">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-[#292524] mb-6">
                    Guiding you towards inner harmony.
                </h2>
<p className="text-base text-[#57534e] font-light leading-relaxed mb-6">
                    Hi, I'm Elena. My journey with yoga began over a decade ago as a quest for physical healing, but it quickly evolved into a profound spiritual awakening. I believe that yoga is not about touching your toes, but what you learn on the way down.
                </p>
<p className="text-base text-[#57534e] font-light leading-relaxed mb-8">
                    Registered with Yoga Alliance (E-RYT 500), I blend ancient traditions with modern biomechanics to create a safe, transformative experience for practitioners of all levels.
                </p>
<div className="grid grid-cols-2 gap-4 mb-10">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#0f766e]" icon="solar:check-circle-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-light text-[#292524]">Hatha &amp; Vinyasa</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#0f766e]" icon="solar:check-circle-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-light text-[#292524]">Meditation</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#0f766e]" icon="solar:check-circle-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-light text-[#292524]">Pranayama</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#0f766e]" icon="solar:check-circle-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-light text-[#292524]">Sound Healing</span>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#0f766e] hover:text-[#115e59] transition-colors pb-1 border-b border-[#0f766e]/30 hover:border-[#0f766e]" href="#contact">
                    Read Full Story
                    <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-[#292524] mb-4">
                    Programs &amp; Offerings
                </h2>
<p className="text-sm text-[#78716c] font-light">
                    Tailored experiences designed to support your unique journey towards wellness, mindfulness, and strength.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#FAFAF9] rounded-3xl p-8 border border-[#f5f5f4] hover:shadow-md hover:border-[#e7e5e4] transition-all duration-300 group">
<div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#0f766e] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-linear" style={{fontSize: '1.75rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#292524] mb-3">Group Yoga Classes</h3>
<p className="text-sm text-[#78716c] font-light mb-6 leading-relaxed">
                        Join our community in studio. Classes range from gentle restorative flows to dynamic vinyasa sequences.
                    </p>
<a className="text-xs font-medium text-[#0f766e] flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-[#FAFAF9] rounded-3xl p-8 border border-[#f5f5f4] hover:shadow-md hover:border-[#e7e5e4] transition-all duration-300 group">
<div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#0f766e] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:laptop-minimalistic-linear" style={{fontSize: '1.75rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#292524] mb-3">Online Sessions</h3>
<p className="text-sm text-[#78716c] font-light mb-6 leading-relaxed">
                        Practice from the comfort of your home. Live-streamed and on-demand classes to fit your schedule.
                    </p>
<a className="text-xs font-medium text-[#0f766e] flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-[#FAFAF9] rounded-3xl p-8 border border-[#f5f5f4] hover:shadow-md hover:border-[#e7e5e4] transition-all duration-300 group">
<div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#0f766e] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:diploma-linear" style={{fontSize: '1.75rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#292524] mb-3">Teacher Training</h3>
<p className="text-sm text-[#78716c] font-light mb-6 leading-relaxed">
                        Deepen your practice with our Yoga Alliance certified 200-Hour and 300-Hour training programs.
                    </p>
<a className="text-xs font-medium text-[#0f766e] flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-[#FAFAF9] rounded-3xl p-8 border border-[#f5f5f4] hover:shadow-md hover:border-[#e7e5e4] transition-all duration-300 group">
<div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#0f766e] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:moon-stars-linear" style={{fontSize: '1.75rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#292524] mb-3">Meditation &amp; Breath</h3>
<p className="text-sm text-[#78716c] font-light mb-6 leading-relaxed">
                        Guided mindfulness and pranayama sessions to reduce stress and improve mental clarity.
                    </p>
<a className="text-xs font-medium text-[#0f766e] flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-[#FAFAF9] rounded-3xl p-8 border border-[#f5f5f4] hover:shadow-md hover:border-[#e7e5e4] transition-all duration-300 group md:col-span-2 lg:col-span-2 flex flex-col md:flex-row gap-6 items-center">
<div className="flex-1">
<div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#0f766e] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:buildings-2-linear" style={{fontSize: '1.75rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#292524] mb-3">Corporate Wellness</h3>
<p className="text-sm text-[#78716c] font-light mb-6 leading-relaxed max-w-md">
                            Elevate your team's wellbeing with customized on-site or virtual yoga and mindfulness programs designed for the modern workplace.
                        </p>
<a className="text-xs font-medium text-[#0f766e] flex items-center gap-1 hover:gap-2 transition-all" href="#">
                            Request a Proposal <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="w-full md:w-64 h-40 rounded-2xl overflow-hidden shadow-inner">
<img alt="Corporate" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF9]" id="schedule">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-[#292524] mb-3">
                        Class Schedule
                    </h2>
<p className="text-sm text-[#78716c] font-light">
                        Find a time that flows with your day.
                    </p>
</div>

<div className="bg-white p-1 rounded-full border border-[#e7e5e4] inline-flex shadow-sm">
<button className="px-5 py-1.5 rounded-full text-xs font-medium bg-[#0f766e] text-white transition-colors">All</button>
<button className="px-5 py-1.5 rounded-full text-xs font-medium text-[#78716c] hover:text-[#292524] transition-colors">Studio</button>
<button className="px-5 py-1.5 rounded-full text-xs font-medium text-[#78716c] hover:text-[#292524] transition-colors">Online</button>
</div>
</div>
<div className="bg-white rounded-3xl border border-[#f5f5f4] shadow-sm overflow-hidden">

<div className="border-b border-[#f5f5f4] last:border-0">
<div className="bg-[#FAFAF9] px-6 py-3 border-b border-[#f5f5f4]">
<h3 className="text-sm font-medium text-[#292524]">Monday</h3>
</div>
<div className="divide-y divide-[#f5f5f4]">

<div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#fafaf9]/50 transition-colors">
<div className="flex items-start sm:items-center gap-6">
<div className="text-[#292524] font-medium text-lg w-24">07:00 AM</div>
<div>
<div className="flex items-center gap-3 mb-1">
<h4 className="text-base font-medium tracking-tight text-[#292524]">Morning Vinyasa Flow</h4>
<span className="bg-[#fef08a]/40 text-[#a16207] text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full">Popular</span>
</div>
<p className="text-xs text-[#78716c] font-light flex items-center gap-2">
<iconify-icon icon="solar:user-linear"></iconify-icon> Elena
                                        <span className="w-1 h-1 rounded-full bg-[#d6d3d1]"></span>
                                        60 min
                                    </p>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0">
<span className="bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0] px-3 py-1 rounded-full text-[11px] font-medium flex items-center gap-1">
<iconify-icon icon="solar:buildings-2-linear"></iconify-icon> Studio
                                </span>
<button className="text-xs font-medium text-[#0f766e] hover:bg-[#0f766e]/10 px-4 py-2 rounded-full transition-colors border border-[#0f766e]/20">
                                    Book
                                </button>
</div>
</div>

<div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#fafaf9]/50 transition-colors">
<div className="flex items-start sm:items-center gap-6">
<div className="text-[#292524] font-medium text-lg w-24">06:30 PM</div>
<div>
<div className="flex items-center gap-3 mb-1">
<h4 className="text-base font-medium tracking-tight text-[#292524]">Restorative &amp; Yin</h4>
</div>
<p className="text-xs text-[#78716c] font-light flex items-center gap-2">
<iconify-icon icon="solar:user-linear"></iconify-icon> Sarah
                                        <span className="w-1 h-1 rounded-full bg-[#d6d3d1]"></span>
                                        75 min
                                    </p>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0">
<span className="bg-[#eff6ff] text-[#1d4ed8] border border-[#bfdbfe] px-3 py-1 rounded-full text-[11px] font-medium flex items-center gap-1">
<iconify-icon icon="solar:laptop-minimalistic-linear"></iconify-icon> Online
                                </span>
<button className="text-xs font-medium text-[#0f766e] hover:bg-[#0f766e]/10 px-4 py-2 rounded-full transition-colors border border-[#0f766e]/20">
                                    Book
                                </button>
</div>
</div>
</div>
</div>

<div className="border-b border-[#f5f5f4] last:border-0">
<div className="bg-[#FAFAF9] px-6 py-3 border-b border-[#f5f5f4]">
<h3 className="text-sm font-medium text-[#292524]">Tuesday</h3>
</div>
<div className="divide-y divide-[#f5f5f4]">

<div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#fafaf9]/50 transition-colors">
<div className="flex items-start sm:items-center gap-6">
<div className="text-[#292524] font-medium text-lg w-24">08:00 AM</div>
<div>
<div className="flex items-center gap-3 mb-1">
<h4 className="text-base font-medium tracking-tight text-[#292524]">Hatha Foundations</h4>
</div>
<p className="text-xs text-[#78716c] font-light flex items-center gap-2">
<iconify-icon icon="solar:user-linear"></iconify-icon> Elena
                                        <span className="w-1 h-1 rounded-full bg-[#d6d3d1]"></span>
                                        60 min
                                    </p>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0">
<span className="bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0] px-3 py-1 rounded-full text-[11px] font-medium flex items-center gap-1">
<iconify-icon icon="solar:buildings-2-linear"></iconify-icon> Studio
                                </span>
<button className="text-xs font-medium text-[#0f766e] hover:bg-[#0f766e]/10 px-4 py-2 rounded-full transition-colors border border-[#0f766e]/20">
                                    Book
                                </button>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="text-sm font-medium text-[#0f766e] hover:text-[#115e59] underline underline-offset-4 decoration-[#0f766e]/30 hover:decoration-[#0f766e] transition-all" href="#">
                    View Full Weekly Schedule
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-[#292524] mb-4">
                    Simple, Transparent Pricing
                </h2>
<p className="text-sm text-[#78716c] font-light">
                    Choose the plan that fits your practice and commitment.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-[#FAFAF9] rounded-3xl p-8 border border-[#f5f5f4] shadow-sm relative">
<h3 className="text-base font-medium tracking-tight text-[#292524] mb-2">Beginner Pass</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-serif font-medium text-[#292524]">$49</span>
<span className="text-xs text-[#78716c] font-light">/ 3 classes</span>
</div>
<p className="text-xs text-[#78716c] font-light mb-8 h-10">Perfect for those starting their journey and exploring different styles.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-[#57534e] font-light">
<iconify-icon className="text-[#0f766e] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Access to any beginner class
                        </li>
<li className="flex items-start gap-3 text-sm text-[#57534e] font-light">
<iconify-icon className="text-[#0f766e] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Valid for 30 days
                        </li>
<li className="flex items-start gap-3 text-sm text-[#57534e] font-light">
<iconify-icon className="text-[#0f766e] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Free mat rental
                        </li>
</ul>
<button className="w-full py-3 rounded-full border border-[#0f766e] text-[#0f766e] text-sm font-medium hover:bg-[#0f766e] hover:text-white transition-colors">
                        Get Started
                    </button>
</div>

<div className="bg-[#0f766e] rounded-3xl p-8 shadow-xl relative md:scale-105 z-10">
<div className="absolute top-0 right-6 transform -translate-y-1/2">
<span className="bg-[#ccfbf1] text-[#115e59] text-[10px] font-medium uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">Most Popular</span>
</div>
<h3 className="text-base font-medium tracking-tight text-white/90 mb-2">Monthly Unlimited</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-serif font-medium text-white">$129</span>
<span className="text-xs text-white/70 font-light">/ month</span>
</div>
<p className="text-xs text-white/80 font-light mb-8 h-10">Total commitment to your practice. Best value for regular students.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-white/90 font-light">
<iconify-icon className="text-[#5eead4] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Unlimited studio classes
                        </li>
<li className="flex items-start gap-3 text-sm text-white/90 font-light">
<iconify-icon className="text-[#5eead4] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Full access to online library
                        </li>
<li className="flex items-start gap-3 text-sm text-white/90 font-light">
<iconify-icon className="text-[#5eead4] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 1 guest pass per month
                        </li>
<li className="flex items-start gap-3 text-sm text-white/90 font-light">
<iconify-icon className="text-[#5eead4] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 10% off workshops
                        </li>
</ul>
<button className="w-full py-3 rounded-full bg-white text-[#0f766e] text-sm font-medium hover:bg-[#f5f5f4] transition-colors shadow-sm">
                        Subscribe Now
                    </button>
</div>

<div className="bg-[#FAFAF9] rounded-3xl p-8 border border-[#f5f5f4] shadow-sm relative">
<h3 className="text-base font-medium tracking-tight text-[#292524] mb-2">Teacher Training</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-serif font-medium text-[#292524]">$2,400</span>
<span className="text-xs text-[#78716c] font-light">/ 200hr program</span>
</div>
<p className="text-xs text-[#78716c] font-light mb-8 h-10">Transform your passion into a profession with our certified program.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-[#57534e] font-light">
<iconify-icon className="text-[#0f766e] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Yoga Alliance Certified
                        </li>
<li className="flex items-start gap-3 text-sm text-[#57534e] font-light">
<iconify-icon className="text-[#0f766e] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Comprehensive manual
                        </li>
<li className="flex items-start gap-3 text-sm text-[#57534e] font-light">
<iconify-icon className="text-[#0f766e] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Mentorship sessions
                        </li>
</ul>
<button className="w-full py-3 rounded-full border border-[#0f766e] text-[#0f766e] text-sm font-medium hover:bg-[#0f766e] hover:text-white transition-colors">
                        Apply Now
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF9] overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-[#292524] mb-12 text-center">
                Student Stories
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-[#f5f5f4]">
<div className="flex text-[#fbbf24] mb-4 gap-1">
<iconify-icon className="fill-current" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="fill-current" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="fill-current" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="fill-current" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="fill-current" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-[#57534e] font-light italic leading-relaxed mb-6">
                        "Elena's classes have completely transformed my approach to stress. The studio is a sanctuary, and her guidance is deeply intuitive. I've never felt more grounded."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#e7e5e4] flex items-center justify-center text-sm font-medium text-[#78716c]">MJ</div>
<div>
<p className="text-xs font-medium text-[#292524]">Maria Johnson</p>
<p className="text-[10px] text-[#a8a29e]">Monthly Member</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-[#f5f5f4]">
<div className="flex text-[#fbbf24] mb-4 gap-1">
<iconify-icon className="fill-current" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="fill-current" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="fill-current" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="fill-current" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="fill-current" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-[#57534e] font-light italic leading-relaxed mb-6">
                        "The 200-Hour Teacher Training was rigorous but incredibly rewarding. The curriculum bridges anatomy and philosophy perfectly. Highly recommend to anyone serious about yoga."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#e7e5e4] flex items-center justify-center text-sm font-medium text-[#78716c]">DT</div>
<div>
<p className="text-xs font-medium text-[#292524]">David Thompson</p>
<p className="text-[10px] text-[#a8a29e]">YTT Graduate</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-[#f5f5f4]">
<div className="flex text-[#fbbf24] mb-4 gap-1">
<iconify-icon className="fill-current" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="fill-current" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="fill-current" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="fill-current" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="fill-current" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-[#57534e] font-light italic leading-relaxed mb-6">
                        "Joining the online sessions was the best decision I made this year. The audio and video quality are great, and Elena still manages to give personal cues even through a screen."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#e7e5e4] flex items-center justify-center text-sm font-medium text-[#78716c]">SK</div>
<div>
<p className="text-xs font-medium text-[#292524]">Sarah Klein</p>
<p className="text-[10px] text-[#a8a29e]">Online Practitioner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-2 bg-white">
<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
<a className="relative group aspect-square overflow-hidden bg-[#f5f5f4]" href="#">
<img alt="Yoga Studio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<iconify-icon className="text-white text-2xl" icon="solar:maximize-linear"></iconify-icon>
</div>
</a>
<a className="relative group aspect-square overflow-hidden bg-[#f5f5f4]" href="#">
<img alt="Yoga Pose" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<iconify-icon className="text-white text-2xl" icon="solar:maximize-linear"></iconify-icon>
</div>
</a>
<a className="relative group aspect-square overflow-hidden bg-[#f5f5f4]" href="#">
<img alt="Meditation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<iconify-icon className="text-white text-2xl" icon="solar:maximize-linear"></iconify-icon>
</div>
</a>
<a className="relative group aspect-square overflow-hidden bg-[#f5f5f4]" href="#">
<img alt="Group Yoga" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<iconify-icon className="text-white text-2xl" icon="solar:maximize-linear"></iconify-icon>
</div>
</a>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

<div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-[#292524] mb-4">
                    Get in Touch
                </h2>
<p className="text-sm text-[#78716c] font-light mb-8">
                    Have a question about our classes or looking to book a private session? We'd love to hear from you.
                </p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="sr-only" htmlFor="first-name">First Name</label>
<input className="w-full bg-[#FAFAF9] border border-[#e7e5e4] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30 focus:border-[#0f766e] transition-all font-light placeholder:text-[#a8a29e]" id="first-name" placeholder="First Name" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="last-name">Last Name</label>
<input className="w-full bg-[#FAFAF9] border border-[#e7e5e4] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30 focus:border-[#0f766e] transition-all font-light placeholder:text-[#a8a29e]" id="last-name" placeholder="Last Name" type="text"/>
</div>
</div>
<div>
<label className="sr-only" htmlFor="email">Email Address</label>
<input className="w-full bg-[#FAFAF9] border border-[#e7e5e4] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30 focus:border-[#0f766e] transition-all font-light placeholder:text-[#a8a29e]" id="email" placeholder="Email Address" type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="message">Message</label>
<textarea className="w-full bg-[#FAFAF9] border border-[#e7e5e4] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30 focus:border-[#0f766e] transition-all font-light placeholder:text-[#a8a29e] resize-none" id="message" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full bg-[#292524] text-white px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-[#1c1917] transition-colors shadow-sm" type="submit">
                        Send Message
                    </button>
</form>
</div>

<div className="flex flex-col justify-between">
<div className="space-y-6 mb-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#f0fdf4] text-[#0f766e] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-[#292524]">Studio Location</h4>
<p className="text-sm text-[#78716c] font-light mt-1">123 Tranquil Lane, Suite 200<br/>Mindful City, MC 90210</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#f0fdf4] text-[#0f766e] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:letter-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-[#292524]">Email Us</h4>
<p className="text-sm text-[#78716c] font-light mt-1">hello@alayayoga.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#f0fdf4] text-[#0f766e] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:phone-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-[#292524]">Call Us</h4>
<p className="text-sm text-[#78716c] font-light mt-1">+1 (555) 123-4567</p>
</div>
</div>
</div>

<div className="w-full h-48 bg-[#e7e5e4] rounded-2xl relative overflow-hidden group">
<img alt="Map Area" className="w-full h-full object-cover opacity-60 mix-blend-multiply" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="bg-white/90 backdrop-blur-sm text-[#292524] px-4 py-2 rounded-full text-xs font-medium shadow-sm hover:scale-105 transition-transform flex items-center gap-2">
<iconify-icon icon="solar:routing-linear"></iconify-icon> Get Directions
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1c1917] pt-20 pb-10 border-t border-[#292524]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1">
<a className="font-serif text-2xl tracking-tighter text-white mb-6 inline-block" href="#">ALAYA.</a>
<p className="text-xs text-[#a8a29e] font-light leading-relaxed mb-6 max-w-xs">
                        A sanctuary for holistic wellness, mindful movement, and spiritual growth. Find your balance with us.
                    </p>
<div className="flex items-center gap-4 text-[#a8a29e]">
<a aria-label="Instagram" className="hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a aria-label="Facebook" className="hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:users-group-two-rounded-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a aria-label="YouTube" className="hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:play-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-6">Explore</h4>
<ul className="space-y-3">
<li><a className="text-xs text-[#a8a29e] hover:text-white transition-colors font-light" href="#about">About Elena</a></li>
<li><a className="text-xs text-[#a8a29e] hover:text-white transition-colors font-light" href="#services">Programs</a></li>
<li><a className="text-xs text-[#a8a29e] hover:text-white transition-colors font-light" href="#schedule">Class Schedule</a></li>
<li><a className="text-xs text-[#a8a29e] hover:text-white transition-colors font-light" href="#pricing">Pricing</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-6">Support</h4>
<ul className="space-y-3">
<li><a className="text-xs text-[#a8a29e] hover:text-white transition-colors font-light" href="#">FAQ</a></li>
<li><a className="text-xs text-[#a8a29e] hover:text-white transition-colors font-light" href="#contact">Contact Us</a></li>
<li><a className="text-xs text-[#a8a29e] hover:text-white transition-colors font-light" href="#">Privacy Policy</a></li>
<li><a className="text-xs text-[#a8a29e] hover:text-white transition-colors font-light" href="#">Terms of Service</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-6">Stay Connected</h4>
<p className="text-xs text-[#a8a29e] font-light mb-4">Subscribe for monthly mindfulness tips and studio updates.</p>
<form className="relative">
<input className="w-full bg-[#292524] border border-[#44403c] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#0f766e] transition-colors font-light placeholder:text-[#78716c] pr-12" placeholder="Your email address" type="email"/>
<button className="absolute right-1 top-1 bottom-1 bg-[#44403c] hover:bg-[#0f766e] text-white w-8 rounded-lg flex items-center justify-center transition-colors" type="submit">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#292524] text-[10px] text-[#78716c] font-light">
<p>© 2026 Alaya Yoga Academy. All rights reserved.</p>
<p className="mt-2 md:mt-0">Designed thoughtfully for mindful living.</p>
</div>
</div>
</footer>

<a aria-label="Contact on WhatsApp" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform hover:shadow-xl" href="https://wa.me/15551234567" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" style={{fontSize: '1.75rem', strokeWidth: '1.5'}}></iconify-icon>
</a>

    </>
  );
}
