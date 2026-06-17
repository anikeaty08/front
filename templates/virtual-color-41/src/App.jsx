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
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-[#F2DDD3]/90 backdrop-blur-md border-b border-[#4A4A4A]/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">

<div className="w-8 h-8 rounded-full bg-[#8FAF9A] flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="chef-hat"></i>
</div>
<span className="font-serif text-xl font-medium tracking-tight text-[#4A4A4A]">The Color Kitchen</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A4A4A]/80">
<a className="hover:text-[#8FAF9A] transition-colors" href="#curriculum">Curriculum</a>
<a className="hover:text-[#8FAF9A] transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-[#8FAF9A] transition-colors" href="#pricing">Enroll</a>
</div>
<a className="bg-[#8FAF9A] hover:bg-[#7E9F8A] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300" href="#waitlist">
                Join Waitlist
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<span className="inline-block py-1 px-4 rounded-full border border-[#8FAF9A]/30 bg-white/40 text-[#4A4A4A] text-xs font-medium tracking-wide mb-6">
                Virtual Certification Program
            </span>
<h1 className="font-serif text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-4 text-[#4A4A4A]">
                The Color Kitchen
            </h1>
<p className="font-script text-3xl lg:text-5xl text-[#B07A8F] mb-8 transform -rotate-2 origin-center">
                Where “Recipes” come to life!
            </p>
<p className="text-lg lg:text-xl leading-relaxed text-[#4A4A4A]/90 max-w-2xl mx-auto mb-10 font-light">
                A fun, engaging online certification where I teach you how to confidently virtually analyze anyone and everyone using a practical, client-ready system. 
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-[#8FAF9A] hover:bg-[#7E9F8A] text-white px-8 py-4 rounded-lg text-base font-medium transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                    Join Waitlist
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto bg-white hover:bg-[#fafafa] text-[#4A4A4A] border border-[#4A4A4A]/10 px-8 py-4 rounded-lg text-base font-medium transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4 text-[#8FAF9A]" data-lucide="book-open"></i>
                    See Curriculum
                </button>
</div>
</div>

<div className="absolute top-1/4 left-10 opacity-20 hidden lg:block">
<div className="grid grid-cols-3 gap-2 w-32 rotate-12">
<div className="h-8 w-8 rounded bg-[#8FAF9A]"></div>
<div className="h-8 w-8 rounded bg-[#B07A8F]"></div>
<div className="h-8 w-8 rounded bg-[#4A4A4A]"></div>
<div className="h-8 w-8 rounded bg-[#F2DDD3]"></div>
<div className="h-8 w-8 rounded bg-[#8FAF9A]"></div>
<div className="h-8 w-8 rounded bg-white"></div>
</div>
</div>
</header>

<section className="py-20 px-6 bg-white rounded-t-[3rem] shadow-sm relative z-20">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight text-[#4A4A4A]">
                        What You’ll Learn in <span className="italic text-[#8FAF9A]">The Color Kitchen</span>
</h2>
<p className="text-lg text-[#4A4A4A]/80 leading-relaxed">
                        Discover the fundamentals of color theory plus credible systems for identifying undertone, value, and intensity — all taught in a virtual format you can complete at your pace.
                    </p>
<p className="text-lg text-[#4A4A4A]/80 leading-relaxed">
                        The brand feels like a beautiful, light‑filled kitchen where everything is thoughtfully prepared. No trends, just warm expertise.
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-[#8FAF9A] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-[#4A4A4A]">Understanding human coloring basics</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-[#8FAF9A] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-[#4A4A4A]">Assessing clients virtually with real tools</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-[#8FAF9A] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-[#4A4A4A]">Applying color theory to wardrobe &amp; beauty</span>
</li>
</ul>
</div>

<div className="bg-[#F9F9F9] p-8 lg:p-10 rounded-2xl border border-gray-100 rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="flex justify-between items-baseline mb-6 border-b border-gray-200 pb-4">
<h3 className="font-serif text-3xl text-[#4A4A4A]">Your Best Colors</h3>
<span className="font-script text-2xl text-[#8FAF9A]">Fresh &amp; Cool</span>
</div>
<div className="flex gap-8">

<div className="grid grid-cols-4 gap-2 flex-1">

<div className="aspect-square bg-[#E8E8E8] rounded-sm"></div>
<div className="aspect-square bg-[#Dcdcdc] rounded-sm"></div>
<div className="aspect-square bg-[#B0B0C0] rounded-sm"></div>
<div className="aspect-square bg-[#9CA3AF] rounded-sm"></div>

<div className="aspect-square bg-[#8FAF9A] rounded-sm"></div>
<div className="aspect-square bg-[#7E9F8A] rounded-sm"></div>
<div className="aspect-square bg-[#5F7A6A] rounded-sm"></div>
<div className="aspect-square bg-[#2C3E50] rounded-sm"></div>

<div className="aspect-square bg-[#89CFF0] rounded-sm"></div>
<div className="aspect-square bg-[#4682B4] rounded-sm"></div>
<div className="aspect-square bg-[#5F9EA0] rounded-sm"></div>
<div className="aspect-square bg-[#483D8B] rounded-sm"></div>

<div className="aspect-square bg-[#B07A8F] rounded-sm"></div>
<div className="aspect-square bg-[#D8BFD8] rounded-sm"></div>
<div className="aspect-square bg-[#DDA0DD] rounded-sm"></div>
<div className="aspect-square bg-[#800080] rounded-sm"></div>
</div>

<div className="w-1/3 hidden sm:block">
<h4 className="font-serif text-lg mb-2 border-b border-black pb-1">Ingredients</h4>
<ul className="text-sm space-y-2 text-[#4A4A4A]/70">
<li>Raspberry</li>
<li>True Rose</li>
<li>Periwinkle</li>
<li>Lavender</li>
<li>Soft Turquoise</li>
<li>Cool Grey</li>
<li>Icy White</li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-gray-200 text-center">
<p className="font-serif italic text-[#4A4A4A]">Directions: Use for best results</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F2DDD3]">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<span className="text-[#B07A8F] font-medium tracking-wide text-sm uppercase">Certification Outcomes</span>
<h2 className="font-serif text-4xl lg:text-5xl mt-3 mb-6 text-[#4A4A4A]">You’ll Be Able To…</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-[#8FAF9A]/20 flex items-center justify-center text-[#8FAF9A] mb-6">
<i className="w-6 h-6" data-lucide="scan-face"></i>
</div>
<h3 className="font-serif text-xl mb-3">Professional Analysis</h3>
<p className="text-[#4A4A4A]/80 text-sm leading-relaxed">Conduct professional virtual color analyses with consistent accuracy from day one.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-[#8FAF9A]/20 flex items-center justify-center text-[#8FAF9A] mb-6">
<i className="w-6 h-6" data-lucide="eye"></i>
</div>
<h3 className="font-serif text-xl mb-3">Distinguish Nuance</h3>
<p className="text-[#4A4A4A]/80 text-sm leading-relaxed">Distinguish undertone, value, and chroma all from your phone with trained eyes.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-[#8FAF9A]/20 flex items-center justify-center text-[#8FAF9A] mb-6">
<i className="w-6 h-6" data-lucide="palette"></i>
</div>
<h3 className="font-serif text-xl mb-3">Personalized Palettes</h3>
<p className="text-[#4A4A4A]/80 text-sm leading-relaxed">Develop and present custom color palettes that make your clients glow.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-[#8FAF9A]/20 flex items-center justify-center text-[#8FAF9A] mb-6">
<i className="w-6 h-6" data-lucide="message-circle-heart"></i>
</div>
<h3 className="font-serif text-xl mb-3">Client Confidence</h3>
<p className="text-[#4A4A4A]/80 text-sm leading-relaxed">Build confidence in delivering virtual consultations that feel personal and high-touch.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-[#8FAF9A]/20 flex items-center justify-center text-[#8FAF9A] mb-6">
<i className="w-6 h-6" data-lucide="repeat"></i>
</div>
<h3 className="font-serif text-xl mb-3">Repeatable Method</h3>
<p className="text-[#4A4A4A]/80 text-sm leading-relaxed">Use a structured methodology that has landed 100s of success stories.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300 border-2 border-[#B07A8F]/30">
<div className="w-12 h-12 rounded-full bg-[#B07A8F]/20 flex items-center justify-center text-[#B07A8F] mb-6">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<h3 className="font-serif text-xl mb-3">Business Ready</h3>
<p className="text-[#4A4A4A]/80 text-sm leading-relaxed">Build your own color analysis business or add it as a supplement to your current work!</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="curriculum">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl lg:text-5xl mb-4 text-[#4A4A4A]">Your Step-by-Step Learning Path</h2>
<p className="font-script text-3xl text-[#8FAF9A]">The Recipe for Success</p>
</div>
<div className="space-y-4">

<div className="group border border-gray-100 hover:border-[#8FAF9A]/50 rounded-2xl p-6 transition-all hover:shadow-md bg-[#F9F9F9]/50">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="w-14 h-14 shrink-0 rounded-full bg-[#F2DDD3] flex items-center justify-center font-serif text-xl text-[#4A4A4A]">1</div>
<div className="flex-1">
<h3 className="text-xl font-medium text-[#4A4A4A] mb-1">Color Foundations</h3>
<p className="text-[#4A4A4A]/70">Hue, value, intensity, perception, and undertone explained simply.</p>
</div>
</div>
</div>

<div className="group border border-gray-100 hover:border-[#8FAF9A]/50 rounded-2xl p-6 transition-all hover:shadow-md bg-[#F9F9F9]/50">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="w-14 h-14 shrink-0 rounded-full bg-[#F2DDD3] flex items-center justify-center font-serif text-xl text-[#4A4A4A]">2</div>
<div className="flex-1">
<h3 className="text-xl font-medium text-[#4A4A4A] mb-1">Virtual Assessment Techniques</h3>
<p className="text-[#4A4A4A]/70">How to assess accurately from photos &amp; video vs in-person methods.</p>
</div>
</div>
</div>

<div className="group border border-gray-100 hover:border-[#8FAF9A]/50 rounded-2xl p-6 transition-all hover:shadow-md bg-[#F9F9F9]/50">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="w-14 h-14 shrink-0 rounded-full bg-[#F2DDD3] flex items-center justify-center font-serif text-xl text-[#4A4A4A]">3</div>
<div className="flex-1">
<h3 className="text-xl font-medium text-[#4A4A4A] mb-1">Seasonal Color Systems Simplified</h3>
<p className="text-[#4A4A4A]/70">How to work with seasons without overwhelming your clients.</p>
</div>
</div>
</div>

<div className="group border border-gray-100 hover:border-[#8FAF9A]/50 rounded-2xl p-6 transition-all hover:shadow-md bg-[#F9F9F9]/50">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="w-14 h-14 shrink-0 rounded-full bg-[#F2DDD3] flex items-center justify-center font-serif text-xl text-[#4A4A4A]">4</div>
<div className="flex-1">
<h3 className="text-xl font-medium text-[#4A4A4A] mb-1">Client Workflow &amp; Consult Structure</h3>
<p className="text-[#4A4A4A]/70">A complete step-by-step virtual session guide.</p>
</div>
</div>
</div>

<div className="group border border-gray-100 hover:border-[#8FAF9A]/50 rounded-2xl p-6 transition-all hover:shadow-md bg-[#F9F9F9]/50">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="w-14 h-14 shrink-0 rounded-full bg-[#F2DDD3] flex items-center justify-center font-serif text-xl text-[#4A4A4A]">5</div>
<div className="flex-1">
<h3 className="text-xl font-medium text-[#4A4A4A] mb-1">Applied Practice &amp; Case Studies</h3>
<p className="text-[#4A4A4A]/70">Real client examples you dissect with feedback.</p>
</div>
</div>
</div>

<div className="group border-2 border-[#B07A8F]/20 rounded-2xl p-6 transition-all hover:shadow-md bg-white">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="w-14 h-14 shrink-0 rounded-full bg-[#B07A8F] flex items-center justify-center font-serif text-xl text-white">6</div>
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<h3 className="text-xl font-medium text-[#4A4A4A]">Tools, Templates &amp; Playbooks</h3>
<span className="bg-[#B07A8F]/10 text-[#B07A8F] text-[10px] uppercase font-bold px-2 py-1 rounded tracking-wide">$3000 Value</span>
</div>
<p className="text-[#4A4A4A]/70">Client worksheets, draping guides, palette deliverables to start your business.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F2DDD3]" id="how-it-works">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

<div>
<h3 className="font-serif text-3xl mb-8 text-[#4A4A4A]">Your Virtual Learning Journey</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm">
<i className="w-5 h-5 text-[#8FAF9A]" data-lucide="monitor-play"></i>
</div>
<div>
<h4 className="font-medium text-lg">Self-paced Modules</h4>
<p className="text-sm text-[#4A4A4A]/70 mt-1">Watch high-quality videos on your own schedule.</p>
</div>
</div>
<div className="flex gap-4">
<div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm">
<i className="w-5 h-5 text-[#8FAF9A]" data-lucide="scissors"></i>
</div>
<div>
<h4 className="font-medium text-lg">Practical Assignments</h4>
<p className="text-sm text-[#4A4A4A]/70 mt-1">Real homework with client examples to test your eye.</p>
</div>
</div>
<div className="flex gap-4">
<div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm">
<i className="w-5 h-5 text-[#8FAF9A]" data-lucide="users"></i>
</div>
<div>
<h4 className="font-medium text-lg">Virtual Practice Labs</h4>
<p className="text-sm text-[#4A4A4A]/70 mt-1">Group calls and office hours for live feedback.</p>
</div>
</div>
<div className="flex gap-4">
<div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm">
<i className="w-5 h-5 text-[#8FAF9A]" data-lucide="award"></i>
</div>
<div>
<h4 className="font-medium text-lg">Certification Exams</h4>
<p className="text-sm text-[#4A4A4A]/70 mt-1">2 exams to ensure you are ready for paying clients.</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-10 rounded-2xl shadow-sm">
<h3 className="font-serif text-3xl mb-6 text-[#4A4A4A]">Perfect For...</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-[#4A4A4A]">
<span className="w-2 h-2 rounded-full bg-[#B07A8F]"></span>
                        Aspiring Virtual Color Consultants
                    </li>
<li className="flex items-center gap-3 text-[#4A4A4A]">
<span className="w-2 h-2 rounded-full bg-[#B07A8F]"></span>
                        Entrepreneurs passionate about Color
                    </li>
<li className="flex items-center gap-3 text-[#4A4A4A]">
<span className="w-2 h-2 rounded-full bg-[#B07A8F]"></span>
                        Hair Stylists &amp; Makeup Artists
                    </li>
<li className="flex items-center gap-3 text-[#4A4A4A]">
<span className="w-2 h-2 rounded-full bg-[#B07A8F]"></span>
                        Personal Stylists adding digital offers
                    </li>
<li className="flex items-center gap-3 text-[#4A4A4A]">
<span className="w-2 h-2 rounded-full bg-[#B07A8F]"></span>
                        Brand Professionals
                    </li>
</ul>
<div className="mt-8 pt-8 border-t border-gray-100">
<p className="font-script text-2xl text-[#8FAF9A]">"Anyone helping others feel confident!"</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-4xl mx-auto text-center">
<h2 className="font-serif text-4xl lg:text-5xl mb-12 text-[#4A4A4A]">What Makes This Different?</h2>
<div className="grid md:grid-cols-2 gap-8 text-left">
<div className="p-6 bg-[#F9F9F9] rounded-xl border border-transparent hover:border-[#8FAF9A]/30 transition-colors">
<h4 className="font-serif text-xl mb-2 text-[#4A4A4A]">Designed for Virtual</h4>
<p className="text-[#4A4A4A]/80 text-sm">Most courses teach draping in person. We focus specifically on the nuances of screens, photos, and digital delivery.</p>
</div>
<div className="p-6 bg-[#F9F9F9] rounded-xl border border-transparent hover:border-[#8FAF9A]/30 transition-colors">
<h4 className="font-serif text-xl mb-2 text-[#4A4A4A]">No Guesswork</h4>
<p className="text-[#4A4A4A]/80 text-sm">Focus on sustainable, human-centered color confidence using science, not just intuition.</p>
</div>
<div className="p-6 bg-[#F9F9F9] rounded-xl border border-transparent hover:border-[#8FAF9A]/30 transition-colors">
<h4 className="font-serif text-xl mb-2 text-[#4A4A4A]">Ready-to-Use Tools</h4>
<p className="text-[#4A4A4A]/80 text-sm">Templates, scripts, and digital assets you can apply immediately to start recouping your investment.</p>
</div>
<div className="p-6 bg-[#F9F9F9] rounded-xl border border-transparent hover:border-[#8FAF9A]/30 transition-colors">
<h4 className="font-serif text-xl mb-2 text-[#4A4A4A]">Simple Workflows</h4>
<p className="text-[#4A4A4A]/80 text-sm">We strip away the intimidation and complexity, leaving you with a warm, expert process.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#4A4A4A] text-white" id="pricing">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl lg:text-5xl mb-4">Choose Your Enrollment Path</h2>
<p className="text-white/70">Invest in your career with a skill that pays for itself.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
<h3 className="font-serif text-2xl mb-2">Payment Plan</h3>
<p className="text-white/60 text-sm mb-8">Flexible monthly payments to get started.</p>
<div className="text-4xl font-serif mb-6">$397 <span className="text-lg font-sans text-white/50">/ month</span></div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex gap-2 items-center text-sm text-white/80"><i className="w-4 h-4 text-[#8FAF9A]" data-lucide="check"></i> Full Certification Access</li>
<li className="flex gap-2 items-center text-sm text-white/80"><i className="w-4 h-4 text-[#8FAF9A]" data-lucide="check"></i> 6 Monthly Payments</li>
<li className="flex gap-2 items-center text-sm text-white/80"><i className="w-4 h-4 text-[#8FAF9A]" data-lucide="check"></i> All Bonuses Included</li>
</ul>
<a className="w-full block text-center bg-transparent border border-white/20 hover:bg-white/10 text-white py-3 rounded-lg font-medium transition-colors" href="#waitlist">
                        Join Waitlist
                    </a>
</div>

<div className="bg-[#F2DDD3] text-[#4A4A4A] rounded-2xl p-8 relative overflow-hidden flex flex-col transform md:-translate-y-4">
<div className="absolute top-0 right-0 bg-[#B07A8F] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">BEST VALUE</div>
<h3 className="font-serif text-2xl mb-2">Full Certification</h3>
<p className="text-[#4A4A4A]/70 text-sm mb-8">One-time payment for instant savings.</p>
<div className="text-4xl font-serif mb-6">$1,997 <span className="text-lg font-sans text-[#4A4A4A]/50">one-time</span></div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex gap-2 items-center text-sm"><i className="w-4 h-4 text-[#8FAF9A]" data-lucide="check"></i> Full Certification Access</li>
<li className="flex gap-2 items-center text-sm"><i className="w-4 h-4 text-[#8FAF9A]" data-lucide="check"></i> Lifetime Updates</li>
<li className="flex gap-2 items-center text-sm"><i className="w-4 h-4 text-[#8FAF9A]" data-lucide="check"></i> <strong>Bonus:</strong> 1:1 Strategy Call</li>
</ul>
<a className="w-full block text-center bg-[#8FAF9A] hover:bg-[#7E9F8A] text-white py-3 rounded-lg font-medium transition-colors shadow-lg" href="#waitlist">
                        Join Waitlist
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-3xl mx-auto">
<h2 className="font-serif text-4xl text-center mb-12 text-[#4A4A4A]">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-[#F9F9F9] rounded-lg overflow-hidden transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer text-lg font-medium text-[#4A4A4A]">
                        Is this 100% virtual?
                        <span className="transform group-open:rotate-180 transition-transform"><i className="w-5 h-5 text-[#8FAF9A]" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 text-[#4A4A4A]/80 leading-relaxed">
                        Yes! It is all self-paced. You can finish it in a week, or take a year. The entire system is built for virtual application.
                    </div>
</details>
<details className="group bg-[#F9F9F9] rounded-lg overflow-hidden transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer text-lg font-medium text-[#4A4A4A]">
                        Do I need prior experience?
                        <span className="transform group-open:rotate-180 transition-transform"><i className="w-5 h-5 text-[#8FAF9A]" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 text-[#4A4A4A]/80 leading-relaxed">
                        None at all! We start from the very beginning of color theory.
                    </div>
</details>
<details className="group bg-[#F9F9F9] rounded-lg overflow-hidden transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer text-lg font-medium text-[#4A4A4A]">
                        What tools do I need?
                        <span className="transform group-open:rotate-180 transition-transform"><i className="w-5 h-5 text-[#8FAF9A]" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 text-[#4A4A4A]/80 leading-relaxed">
                        Just a phone! Ideally a computer is helpful for easier viewing, plus we recommend some software tools (like Canva), but the core requirement is just an internet connection.
                    </div>
</details>
<details className="group bg-[#F9F9F9] rounded-lg overflow-hidden transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer text-lg font-medium text-[#4A4A4A]">
                        Can I start doing client work after completion?
                        <span className="transform group-open:rotate-180 transition-transform"><i className="w-5 h-5 text-[#8FAF9A]" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 text-[#4A4A4A]/80 leading-relaxed">
                        Yes, absolutely. The course includes business modules to help you launch your offering immediately.
                    </div>
</details>
<details className="group bg-[#F9F9F9] rounded-lg overflow-hidden transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer text-lg font-medium text-[#4A4A4A]">
                        Is there a certificate I can display?
                        <span className="transform group-open:rotate-180 transition-transform"><i className="w-5 h-5 text-[#8FAF9A]" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 text-[#4A4A4A]/80 leading-relaxed">
                        Yes, upon passing the exams, you’ll receive a digital certificate and badge for your website and LinkedIn.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F2DDD3] text-center" id="waitlist">
<div className="max-w-2xl mx-auto">
<h2 className="font-serif text-4xl lg:text-5xl mb-6 text-[#4A4A4A]">Yes, I am ready to Become Certified!</h2>
<p className="text-xl text-[#4A4A4A]/80 mb-10 font-light">Join the new wave of approachable, expert color consultants.</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
<input className="flex-1 px-5 py-4 rounded-lg border border-[#4A4A4A]/10 focus:outline-none focus:ring-2 focus:ring-[#8FAF9A]" placeholder="Enter your email address" type="email"/>
<button className="bg-[#8FAF9A] hover:bg-[#7E9F8A] text-white px-8 py-4 rounded-lg font-medium whitespace-nowrap transition-colors" type="button">
                    Join Waitlist
                </button>
</form>
<p className="text-xs text-[#4A4A4A]/50 mt-4">We respect your privacy. No spam, just color.</p>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-[#8FAF9A] flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="chef-hat"></i>
</div>
<span className="font-serif text-lg font-medium text-[#4A4A4A]">The Color Kitchen</span>
</div>
<div className="flex gap-8 text-sm text-[#4A4A4A]/60">
<a className="hover:text-[#8FAF9A]" href="#">Terms</a>
<a className="hover:text-[#8FAF9A]" href="#">Privacy</a>
<a className="hover:text-[#8FAF9A]" href="#">Contact</a>
</div>
<div className="text-sm text-[#4A4A4A]/40">
                © 2023 The Color Kitchen. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
