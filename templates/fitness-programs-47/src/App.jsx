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
      

<nav className="sticky top-0 z-50 bg-[#FDFCF8]/90 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="bg-[#8B1A1A] text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold tracking-tighter text-base shadow-sm shrink-0" href="#">
                    KTC
                </a>

<div className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-600">
<a className="hover:text-[#8B1A1A] transition-colors" href="#">Services</a>
<a className="text-[#8B1A1A] transition-colors" href="#">Programs</a>
<a className="hover:text-[#8B1A1A] transition-colors" href="#">About</a>
<a className="hover:text-[#8B1A1A] transition-colors" href="#">Contact</a>
</div>
</div>
<div className="hidden lg:flex items-center gap-5">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Sign In</a>
<a className="bg-[#8B1A1A] hover:bg-[#701515] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors shadow-sm" href="#">
                    Enquire Now
                </a>
</div>

<button className="lg:hidden text-neutral-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative bg-neutral-900 pt-24 pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grain pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-8 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Home</a>
<iconify-icon height="14" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="text-white">Programs</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl mb-6">
                Programs Built on Structure, Not Just Energy
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-normal leading-relaxed mb-12">
                Whether you're a corporate team, a school group, or an individual chasing performance — KTC has a structured program designed for you.
            </p>
<div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs font-medium text-neutral-300 uppercase tracking-widest">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#8B1A1A]" height="18" icon="solar:verified-check-linear" width="18"></iconify-icon>
                    10+ Years Experience
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#8B1A1A]" height="18" icon="solar:layers-linear" width="18"></iconify-icon>
                    3 Program Streams
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#8B1A1A]" height="18" icon="solar:ruler-pen-linear" width="18"></iconify-icon>
                    100% Structured Approach
                </div>
</div>
</div>
</header>

<div className="sticky top-20 z-40 bg-[#FDFCF8]/95 backdrop-blur-xl border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-8 overflow-x-auto hide-scrollbar text-sm font-medium">
<a className="py-4 whitespace-nowrap text-[#8B1A1A] border-b-2 border-[#8B1A1A] transition-colors" href="#corporate">Corporate Wellness</a>
<a className="py-4 whitespace-nowrap text-neutral-500 hover:text-neutral-900 border-b-2 border-transparent transition-colors" href="#schools">School Fitness Program</a>
<a className="py-4 whitespace-nowrap text-neutral-500 hover:text-neutral-900 border-b-2 border-transparent transition-colors" href="#personal-training">Personal Training</a>
</div>
</div>
</div>

<section className="py-24 scroll-mt-24" id="corporate">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
<div>
<span className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-widest mb-4 block">Corporate Programs</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                        Built for Teams That Need More Than a Fun Day Out
                    </h2>
<p className="text-base text-neutral-600 leading-relaxed max-w-lg">
                        Corporate teams don't need more energy. They need structure, shared experience, and a system that translates into real performance back at the office.
                    </p>
</div>
<div className="aspect-[4/3] bg-neutral-200 rounded-3xl flex items-center justify-center text-neutral-500 text-sm font-medium border border-neutral-300 border-dashed relative overflow-hidden">
<span className="px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full shadow-sm">Insert: Corporate Team Session Photo</span>
</div>
</div>

<div className="mb-32">
<span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest mb-3 block">What We Deliver</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-12">Every Session Is Custom-Designed</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-neutral-100 border-b-2 border-b-[#8B1A1A]">
<div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mb-6 text-neutral-700">
<iconify-icon height="24" icon="solar:dumbbell-large-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Team Fitness Challenges</h4>
<p className="text-sm text-neutral-600 leading-relaxed">High-energy group challenges designed to push teams together, not against each other.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-neutral-100 border-b-2 border-b-[#8B1A1A]">
<div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mb-6 text-neutral-700">
<iconify-icon height="24" icon="solar:lightbulb-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Performance Workshops</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Structured sessions on mindset, focus and team dynamics — facilitated by Kgwahla Masipa.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-neutral-100 border-b-2 border-b-[#8B1A1A]">
<div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mb-6 text-neutral-700">
<iconify-icon height="24" icon="solar:running-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Group Bootcamp Sessions</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Physically engaging bootcamps tailored to mixed fitness levels — inclusive by design.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-neutral-100 border-b-2 border-b-[#8B1A1A]">
<div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mb-6 text-neutral-700">
<iconify-icon height="24" icon="solar:handshake-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Leadership &amp; Movement</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Activities that build communication and leadership through physical challenge.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-neutral-100 border-b-2 border-b-[#8B1A1A]">
<div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mb-6 text-neutral-700">
<iconify-icon height="24" icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Wellness Strategy</h4>
<p className="text-sm text-neutral-600 leading-relaxed">We help organizations build a long-term wellness culture, not just a one-day event.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-neutral-100 border-b-2 border-b-[#8B1A1A]">
<div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mb-6 text-neutral-700">
<iconify-icon height="24" icon="solar:settings-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Custom Event Design</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Every program is tailored to your team size, goals and company culture.</p>
</div>
</div>
</div>

<div className="mb-20">
<span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest mb-3 block">What Your Team Gains</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-12">What Changes After Working With KTC</h3>
<div className="flex flex-col lg:flex-row gap-6">
<div className="flex-1 bg-white rounded-3xl p-10 border border-neutral-100">
<iconify-icon className="text-neutral-400 mb-6" height="32" icon="solar:link-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight mb-3">Better Collaboration</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Teams that move together build trust faster. Our sessions create shared experiences that carry back into the workplace.</p>
</div>
<div className="flex-1 bg-neutral-900 text-white rounded-3xl p-10 shadow-lg relative overflow-hidden">
<div className="absolute inset-0 bg-grain pointer-events-none"></div>
<iconify-icon className="text-[#8B1A1A] mb-6 relative z-10" height="32" icon="solar:bolt-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight mb-3 relative z-10">Higher Energy &amp; Focus</h4>
<p className="text-sm text-neutral-400 leading-relaxed relative z-10">Structured physical activity resets the team mentally. Expect sharper focus and renewed motivation post-session.</p>
</div>
<div className="flex-1 bg-white rounded-3xl p-10 border border-neutral-100">
<iconify-icon className="text-neutral-400 mb-6" height="32" icon="solar:crown-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight mb-3">Stronger Leadership</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Movement-based challenges reveal natural leaders and build confidence across all levels.</p>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 md:p-12 border-l-4 border-[#8B1A1A] shadow-sm mb-32">
<p className="text-xl md:text-2xl font-medium tracking-tight text-neutral-800 leading-relaxed mb-6">
                    "You shouldn't have to choose between a fun team day and a productive one. We design both."
                </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-500 text-xs font-semibold">KM</div>
<div>
<p className="text-sm font-semibold">Kgwahla Masipa</p>
<p className="text-xs text-neutral-500">Founder KTC Events</p>
</div>
</div>
</div>

<div className="mb-32">
<span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest mb-3 block">Designed For</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-12">Is This Program Right for You?</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex gap-4 p-6 rounded-2xl border border-neutral-100 bg-white">
<div className="shrink-0 text-neutral-400 mt-1">
<iconify-icon height="24" icon="solar:buildings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight mb-1">HR Managers</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Planning team engagement that actually delivers results, not just a day off.</p>
</div>
</div>
<div className="flex gap-4 p-6 rounded-2xl border border-neutral-100 bg-white">
<div className="shrink-0 text-neutral-400 mt-1">
<iconify-icon height="24" icon="solar:user-id-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight mb-1">Business Owners</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Building a high-performance culture in a fast-paced company environment.</p>
</div>
</div>
<div className="flex gap-4 p-6 rounded-2xl border border-neutral-100 bg-white">
<div className="shrink-0 text-neutral-400 mt-1">
<iconify-icon height="24" icon="solar:widget-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight mb-1">Operations Leaders</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Reducing burnout through structured wellness that fits your team calendar.</p>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-grain pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Ready to Invest in Your Team?</h3>
<p className="text-base text-neutral-400 mb-10">Let's design a session around your team's specific goals.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#8B1A1A] hover:bg-[#701515] text-white text-sm font-medium px-8 py-3.5 rounded-full transition-colors" href="#">
                            Book a Corporate Session
                        </a>
<a className="w-full sm:w-auto bg-transparent border border-neutral-600 text-white hover:bg-neutral-800 text-sm font-medium px-8 py-3.5 rounded-full transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon height="18" icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
                            WhatsApp Us Directly
                        </a>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6"><hr className="border-neutral-200"/></div>

<section className="py-24 bg-white scroll-mt-24" id="schools">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
<div className="order-2 lg:order-1 aspect-[4/3] bg-neutral-100 rounded-3xl flex items-center justify-center text-neutral-500 text-sm font-medium border border-neutral-200 border-dashed relative overflow-hidden">
<span className="px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full shadow-sm text-center">Insert: School Program /<br/>Youth Fitness Session Photo</span>
</div>
<div className="order-1 lg:order-2">
<div className="flex items-center gap-4 mb-4">
<span className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-widest block">School Programs</span>
<span className="px-2.5 py-1 bg-neutral-100 text-neutral-600 rounded-md text-[10px] font-semibold tracking-wider uppercase">Launching 2025 — Term 2</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                        Getting Grade 11 &amp; 12 Learners Active — Even During Exam Season
                    </h2>
<p className="text-base text-neutral-600 leading-relaxed max-w-lg">
                        Academic pressure is real. But inactivity makes it worse. KTC's school program gives learners a structured physical outlet that improves focus, discipline and overall wellbeing.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
<div className="lg:col-span-4 lg:sticky lg:top-48 h-fit">
<span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest mb-3 block">Program Structure</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-6">How the School Program Works</h3>
</div>
<div className="lg:col-span-8 relative">

<div className="absolute left-[19px] md:left-[27px] top-0 bottom-0 w-[2px] bg-neutral-100"></div>
<div className="space-y-12">

<div className="relative flex gap-6 md:gap-8 items-start">
<div className="w-10 h-10 md:w-14 md:h-14 shrink-0 bg-[#FDFCF8] border-2 border-[#8B1A1A] text-[#8B1A1A] rounded-full flex items-center justify-center font-semibold text-sm md:text-base relative z-10">01</div>
<div className="pt-1 md:pt-3">
<h4 className="text-lg font-semibold tracking-tight mb-2">School Enrolment</h4>
<p className="text-sm text-neutral-600 leading-relaxed">School principal or sports coordinator contacts KTC Events to discuss program fit and scheduling.</p>
</div>
</div>

<div className="relative flex gap-6 md:gap-8 items-start">
<div className="w-10 h-10 md:w-14 md:h-14 shrink-0 bg-[#FDFCF8] border-2 border-neutral-200 text-neutral-500 rounded-full flex items-center justify-center font-semibold text-sm md:text-base relative z-10">02</div>
<div className="pt-1 md:pt-3">
<h4 className="text-lg font-semibold tracking-tight mb-2">Program Customization</h4>
<p className="text-sm text-neutral-600 leading-relaxed">We design a structured fitness curriculum tailored to Grade 11 &amp; 12 learners — balanced with academic calendar.</p>
</div>
</div>

<div className="relative flex gap-6 md:gap-8 items-start">
<div className="w-10 h-10 md:w-14 md:h-14 shrink-0 bg-[#FDFCF8] border-2 border-neutral-200 text-neutral-500 rounded-full flex items-center justify-center font-semibold text-sm md:text-base relative z-10">03</div>
<div className="pt-1 md:pt-3">
<h4 className="text-lg font-semibold tracking-tight mb-2">Program Delivery</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Kgwahla and the KTC team facilitate structured sessions at your school — inclusive for all fitness levels.</p>
</div>
</div>

<div className="relative flex gap-6 md:gap-8 items-start">
<div className="w-10 h-10 md:w-14 md:h-14 shrink-0 bg-[#FDFCF8] border-2 border-neutral-200 text-neutral-500 rounded-full flex items-center justify-center font-semibold text-sm md:text-base relative z-10">04</div>
<div className="pt-1 md:pt-3">
<h4 className="text-lg font-semibold tracking-tight mb-2">Progress Tracking</h4>
<p className="text-sm text-neutral-600 leading-relaxed">We measure learner engagement and activity levels throughout the term — reporting back to the school.</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-stone-50 rounded-[2.5rem] p-8 md:p-16 mb-32 border border-neutral-100">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest mb-3 block">Program Objectives</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">What We Are Building</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">

<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#8B1A1A] shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-700">Encourage physical activity in non-sporty learners</span>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#8B1A1A] shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-700">Build discipline and focus through structured movement</span>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#8B1A1A] shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-700">Reduce stress and anxiety during exam periods</span>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#8B1A1A] shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-700">Create healthy lifestyle habits early</span>
</div>
</div>

<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#8B1A1A] shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-700">Improve team dynamics and peer relationships</span>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#8B1A1A] shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-700">Build confidence in Grade 11 &amp; 12 learners</span>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#8B1A1A] shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-700">Prepare learners for active adult lives</span>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#8B1A1A] shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-neutral-700">Complement school sport without competing with it</span>
</div>
</div>
</div>
</div>

<div className="mb-32">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5">
<span className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-widest mb-3 block">Partnership Opportunity</span>
<h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">Help Us Reach More Schools</h3>
<p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-8">
                            The KTC School Program is designed to grow with sponsor support. By partnering with us, your brand directly impacts youth wellness and active lifestyle development across South Africa.
                        </p>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-stone-50 p-6 rounded-2xl border border-neutral-100">
<iconify-icon className="text-neutral-900 mb-4 block" height="24" icon="solar:target-linear" width="24"></iconify-icon>
<h4 className="text-sm font-semibold tracking-tight mb-2">Brand Visibility</h4>
<p className="text-xs text-neutral-600 leading-relaxed">Your brand featured in program materials, school sessions and KTC event coverage.</p>
</div>
<div className="bg-stone-50 p-6 rounded-2xl border border-neutral-100">
<iconify-icon className="text-neutral-900 mb-4 block" height="24" icon="solar:handshake-linear" width="24"></iconify-icon>
<h4 className="text-sm font-semibold tracking-tight mb-2">Community Impact</h4>
<p className="text-xs text-neutral-600 leading-relaxed">Directly contribute to youth wellness and active school culture.</p>
</div>
<div className="bg-stone-50 p-6 rounded-2xl border border-neutral-100 sm:col-span-2">
<iconify-icon className="text-neutral-900 mb-4 block" height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
<h4 className="text-sm font-semibold tracking-tight mb-2">CSR Alignment</h4>
<p className="text-xs text-neutral-600 leading-relaxed">Perfect for companies with Corporate Social Responsibility mandates in health and education.</p>
</div>
</div>
</div>
</div>

<div className="mb-32">
<span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest mb-3 block text-center">For Schools</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-16 text-center">Simple Enrolment Process</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
<div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-[1px] bg-neutral-200 z-0"></div>
<div className="relative z-10 bg-white pt-2 text-center">
<div className="w-12 h-12 mx-auto bg-stone-50 border border-neutral-200 text-neutral-900 rounded-full flex items-center justify-center font-semibold text-sm mb-6">1</div>
<h4 className="text-base font-semibold tracking-tight mb-2">Contact KTC</h4>
<p className="text-sm text-neutral-500 px-4">Reach out via the form or WhatsApp to express interest.</p>
</div>
<div className="relative z-10 bg-white pt-2 text-center">
<div className="w-12 h-12 mx-auto bg-stone-50 border border-neutral-200 text-neutral-900 rounded-full flex items-center justify-center font-semibold text-sm mb-6">2</div>
<h4 className="text-base font-semibold tracking-tight mb-2">Discovery Meeting</h4>
<p className="text-sm text-neutral-500 px-4">We meet with your principal or coordinator to align on schedule and objectives.</p>
</div>
<div className="relative z-10 bg-white pt-2 text-center">
<div className="w-12 h-12 mx-auto bg-[#FDFCF8] border-2 border-[#8B1A1A] text-[#8B1A1A] rounded-full flex items-center justify-center font-semibold text-sm mb-6">3</div>
<h4 className="text-base font-semibold tracking-tight mb-2">Program Starts</h4>
<p className="text-sm text-neutral-500 px-4">We handle everything. You just give us the learners and the time slot.</p>
</div>
</div>
</div>

<div className="bg-neutral-900 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-grain pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-4">Partner With KTC Events on the School Fitness Program</h3>
<p className="text-base text-neutral-400 mb-10">Available for Term 2, 2025. Limited school slots available.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
<a className="w-full sm:w-auto bg-[#8B1A1A] hover:bg-[#701515] text-white text-sm font-medium px-8 py-3.5 rounded-full transition-colors" href="#">
                            Partner With Us
                        </a>
<a className="w-full sm:w-auto bg-transparent border border-neutral-600 text-white hover:bg-neutral-800 text-sm font-medium px-8 py-3.5 rounded-full transition-colors" href="#">
                            Download Program Overview
                        </a>
</div>
<p className="text-xs text-neutral-500 font-medium">Sponsor inquiries welcome. Contact us to discuss partnership packages.</p>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6"><hr className="border-neutral-200"/></div>

<section className="py-24 scroll-mt-24" id="personal-training">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
<div>
<span className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-widest mb-4 block">Personal Training</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                        Train With a System. Not Just a Feeling.
                    </h2>
<p className="text-base text-neutral-600 leading-relaxed max-w-lg mb-8">
                        Over 17 years at Virgin Active Hazeldean, Kgwahla has specialized in weight loss, toning, pre &amp; post natal training and sports-specific performance. Every program is built on structure that delivers results.
                    </p>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1.5 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-700">Weight Loss</span>
<span className="px-3 py-1.5 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-700">Pre &amp; Post Natal</span>
<span className="px-3 py-1.5 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-700">Sports Specific</span>
</div>
</div>
<div className="aspect-[4/5] md:aspect-[4/3] bg-neutral-200 rounded-3xl flex items-center justify-center text-neutral-500 text-sm font-medium border border-neutral-300 border-dashed relative overflow-hidden">
<span className="px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full shadow-sm">Insert: Kgwahla PT Action Shot / 1-on-1 Training Photo</span>
</div>
</div>

<div className="mb-32">
<span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest mb-3 block text-center">Training Options</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-12 text-center">Choose Your Program</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

<div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-neutral-400" height="20" icon="solar:dumbbell-large-linear" width="20"></iconify-icon>
<h4 className="text-sm font-semibold tracking-wide uppercase text-neutral-900">In-Person Training</h4>
</div>
<hr className="border-neutral-100 mb-6"/>
<p className="text-sm text-neutral-600 mb-8 flex-grow">One-on-one personal training sessions at Virgin Active Hazeldean, Pretoria East.</p>
<div className="space-y-3 mb-8">
<span className="text-xs font-semibold text-neutral-900 block mb-4">Includes:</span>
<div className="flex items-start gap-3"><iconify-icon className="text-[#8B1A1A] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-xs text-neutral-600">Full fitness assessment</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-[#8B1A1A] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-xs text-neutral-600">Custom training program</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-[#8B1A1A] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-xs text-neutral-600">Nutrition guidance</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-[#8B1A1A] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-xs text-neutral-600">Weekly progress tracking</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-[#8B1A1A] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-xs text-neutral-600">Functional &amp; boxing training</span></div>
</div>
<div className="bg-stone-50 p-4 rounded-xl mb-8">
<span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider block mb-1">Best For:</span>
<span className="text-xs text-neutral-800 font-medium">Weight loss, toning, sports-specific, pre/post natal</span>
</div>
<a className="block w-full text-center bg-transparent border border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white text-sm font-medium py-3 rounded-full transition-colors mt-auto" href="#">
                            Enquire About PT →
                        </a>
</div>

<div className="bg-neutral-900 text-white rounded-3xl p-8 shadow-xl flex flex-col h-full relative overflow-hidden md:scale-105 z-10">
<div className="absolute inset-0 bg-grain pointer-events-none"></div>
<div className="relative z-10">
<span className="inline-block bg-[#8B1A1A] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4">⭐ Most Popular</span>
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-neutral-400" height="20" icon="solar:laptop-linear" width="20"></iconify-icon>
<h4 className="text-sm font-semibold tracking-wide uppercase">Online Challenges</h4>
</div>
<hr className="border-neutral-800 mb-6"/>
<p className="text-sm text-neutral-300 mb-8 flex-grow">Structured fitness challenges you can join from anywhere — built for consistency and results.</p>
<div className="space-y-3 mb-8">
<span className="text-xs font-semibold text-white block mb-4">Includes:</span>
<div className="flex items-start gap-3"><iconify-icon className="text-[#8B1A1A] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-xs text-neutral-300">Structured challenge program</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-[#8B1A1A] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-xs text-neutral-300">Daily/weekly check-ins</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-[#8B1A1A] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-xs text-neutral-300">Community group support</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-[#8B1A1A] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-xs text-neutral-300">Progress milestones</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-[#8B1A1A] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-xs text-neutral-300">Kgwahla's direct coaching</span></div>
</div>
<div className="bg-white/5 border border-white/10 p-4 rounded-xl mb-8">
<span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1">Best For:</span>
<span className="text-xs text-white font-medium">Remote participants, busy professionals, groups</span>
</div>
<a className="block w-full text-center bg-[#8B1A1A] hover:bg-[#701515] text-white text-sm font-medium py-3 rounded-full transition-colors mt-auto" href="#">
                                Join Next Challenge →
                            </a>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-neutral-400" height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<h4 className="text-sm font-semibold tracking-wide uppercase text-neutral-900">Small Group &amp; Bootcamp</h4>
</div>
<hr className="border-neutral-100 mb-6"/>
<p className="text-sm text-neutral-600 mb-8 flex-grow">High-energy group training sessions — inclusive for all fitness levels.</p>
<div className="space-y-3 mb-8">
<span className="text-xs font-semibold text-neutral-900 block mb-4">Includes:</span>
<div className="flex items-start gap-3"><iconify-icon className="text-[#8B1A1A] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-xs text-neutral-600">Structured bootcamp sessions</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-[#8B1A1A] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-xs text-neutral-600">Mixed fitness level design</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-[#8B1A1A] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-xs text-neutral-600">Boxing &amp; functional training</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-[#8B1A1A] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-xs text-neutral-600">Community accountability</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-[#8B1A1A] mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon><span className="text-xs text-neutral-600">Flexible scheduling</span></div>
</div>
<div className="bg-stone-50 p-4 rounded-xl mb-8">
<span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider block mb-1">Best For:</span>
<span className="text-xs text-neutral-800 font-medium">Those who train better in a group environment</span>
</div>
<a className="block w-full text-center bg-transparent border border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white text-sm font-medium py-3 rounded-full transition-colors mt-auto" href="#">
                            Join a Bootcamp →
                        </a>
</div>
</div>
</div>

<div className="mb-32">
<span className="text-neutral-500 text-xs font-semibold uppercase tracking-widest mb-3 block">The Process</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-16">Simple. Structured. Effective.</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
<div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-neutral-200 z-0"></div>
<div className="relative z-10 flex flex-col md:items-center md:text-center">
<div className="w-16 h-16 bg-white border border-neutral-200 rounded-2xl flex items-center justify-center text-neutral-600 mb-6 shadow-sm">
<iconify-icon height="28" icon="solar:clipboard-text-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-2 md:justify-center">
<span className="text-xs font-semibold text-neutral-400">01</span>
<h4 className="text-base font-semibold tracking-tight">Free Consultation</h4>
</div>
<p className="text-sm text-neutral-500 md:px-4">We start with a discovery call or WhatsApp chat to understand your goals, current fitness level and specific needs.</p>
</div>
<div className="relative z-10 flex flex-col md:items-center md:text-center mt-8 md:mt-0">
<div className="w-16 h-16 bg-white border border-neutral-200 rounded-2xl flex items-center justify-center text-neutral-600 mb-6 shadow-sm">
<iconify-icon height="28" icon="solar:folder-with-files-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-2 md:justify-center">
<span className="text-xs font-semibold text-neutral-400">02</span>
<h4 className="text-base font-semibold tracking-tight">Custom Program Design</h4>
</div>
<p className="text-sm text-neutral-500 md:px-4">Kgwahla designs a structured program built specifically around your goals — no generic plans.</p>
</div>
<div className="relative z-10 flex flex-col md:items-center md:text-center mt-8 md:mt-0">
<div className="w-16 h-16 bg-[#8B1A1A] border border-[#8B1A1A] rounded-2xl flex items-center justify-center text-white mb-6 shadow-md shadow-[#8B1A1A]/20">
<iconify-icon height="28" icon="solar:chart-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-2 md:justify-center">
<span className="text-xs font-semibold text-[#8B1A1A]">03</span>
<h4 className="text-base font-semibold tracking-tight">Train, Track &amp; Progress</h4>
</div>
<p className="text-sm text-neutral-500 md:px-4">You train with a system. We track your progress and adjust as needed to keep results coming.</p>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] border border-neutral-100 overflow-hidden mb-32 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
<div className="grid grid-cols-1 md:grid-cols-12">
<div className="md:col-span-4 lg:col-span-5 bg-neutral-200 aspect-square md:aspect-auto flex items-center justify-center text-neutral-500 text-sm font-medium border-r border-neutral-100">
                        Insert: Professional Kgwahla Headshot
                    </div>
<div className="md:col-span-8 lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
<span className="text-neutral-400 text-xs font-semibold uppercase tracking-widest mb-2 block">Your Coach</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-1">Kgwahla Masipa</h3>
<p className="text-sm text-[#8B1A1A] font-medium mb-6">Personal Trainer &amp; Coach | Founder, KTC Events</p>
<p className="text-sm text-neutral-600 leading-relaxed mb-8 max-w-lg">
                            17+ years at Virgin Active Hazeldean. Degree in Sports &amp; Exercise Technology, Tshwane University of Technology. Certified in functional training, boxing, bootcamp and group instruction. Passionate about building systems that outlast motivation.
                        </p>
<div className="flex flex-wrap gap-3">
<div className="flex items-center gap-2 px-3 py-2 bg-stone-50 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-700">
<iconify-icon icon="solar:diploma-verified-linear" width="16"></iconify-icon> BSc Sports Tech — TUT
                            </div>
<div className="flex items-center gap-2 px-3 py-2 bg-stone-50 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-700">
<iconify-icon icon="solar:hand-fists-linear" width="16"></iconify-icon> Certified Boxing Inst.
                            </div>
<div className="flex items-center gap-2 px-3 py-2 bg-stone-50 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-700">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon> 17 Yrs Virgin Active
                            </div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-grain pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Stop Relying on Motivation.<br/>Start Training With a System.</h3>
<p className="text-base text-neutral-400 mb-10">Whether in-person, online or in a group — there is a KTC program for you.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#8B1A1A] hover:bg-[#701515] text-white text-sm font-medium px-8 py-3.5 rounded-full transition-colors" href="#">
                            Start Your Program
                        </a>
<a className="w-full sm:w-auto bg-transparent border border-neutral-600 text-white hover:bg-neutral-800 text-sm font-medium px-8 py-3.5 rounded-full transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon height="18" icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
                            Chat With Kgwahla
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-grain pointer-events-none opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Not Sure Which Program Is Right for You?</h2>
<p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">Send us a message and we'll recommend the best fit for your goals.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#8B1A1A] hover:bg-[#701515] text-white text-base font-medium px-8 py-4 rounded-full transition-colors" href="#">
                    Contact KTC Events
                </a>
<a className="w-full sm:w-auto bg-transparent border border-neutral-600 text-white hover:bg-neutral-800 text-base font-medium px-8 py-4 rounded-full transition-colors" href="#">
                    View 2025 Events Calendar
                </a>
</div>
</div>
</section>

<footer className="bg-[#171717] text-neutral-400 py-12 border-t border-neutral-800 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
<div className="flex flex-wrap justify-center md:justify-start gap-6 font-medium">
<a className="hover:text-white transition-colors" href="#">Corporate Wellness</a>
<a className="hover:text-white transition-colors" href="#">School Fitness 11-12</a>
<a className="hover:text-white transition-colors" href="#">Performance Coaching</a>
<a className="hover:text-white transition-colors" href="#">Communities</a>
</div>
<div className="flex items-center gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="ri:instagram-line" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="ri:tiktok-line" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="ri:youtube-line" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="ri:facebook-fill" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="ri:linkedin-fill" width="20"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2025 KTC Events | Kgwahla Masipa</p>
<p>Designed by [Your Agency]</p>
</div>
</div>
</footer>

    </>
  );
}
