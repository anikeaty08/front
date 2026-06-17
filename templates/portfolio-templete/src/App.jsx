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
      

<div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-6">
<a className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-amber-400 hover:scale-110 transition-transform" href="#home"><i className="w-4 h-4" data-lucide="home"></i></a>
<a className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-amber-400 hover:scale-110 transition-transform" href="#about"><i className="w-4 h-4" data-lucide="user"></i></a>
<a className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-amber-400 hover:scale-110 transition-transform" href="#resume"><i className="w-4 h-4" data-lucide="briefcase"></i></a>
<a className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-amber-400 hover:scale-110 transition-transform" href="#portfolio"><i className="w-4 h-4" data-lucide="image"></i></a>
<a className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-amber-400 hover:scale-110 transition-transform" href="#testimonials"><i className="w-4 h-4" data-lucide="message-square"></i></a>
<a className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-amber-400 hover:scale-110 transition-transform" href="#contact"><i className="w-4 h-4" data-lucide="send"></i></a>
</div>

<section className="relative w-full min-h-screen bg-white flex items-center justify-center px-6 lg:px-20 overflow-hidden pt-10 pb-20 lg:py-0" id="home">

<div className="absolute top-0 right-0 w-2/3 h-full bg-slate-50 rounded-l-[200px] -z-10 translate-x-1/3 skew-x-6 hidden lg:block"></div>
<div className="absolute top-20 right-20 w-[600px] h-[600px] bg-cyan-700/10 rounded-full blur-3xl -z-10"></div>
<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="space-y-6 lg:pl-10">
<div className="inline-block bg-amber-400 px-3 py-1 -skew-x-6">
<h3 className="font-heading font-semibold text-lg lg:text-xl uppercase tracking-widest text-white skew-x-6">Hi There!</h3>
</div>
<div className="leading-none">
<h1 className="font-heading font-light text-6xl lg:text-8xl tracking-tighter text-outline">I'M SARITA</h1>
<div className="bg-black text-amber-400 inline-block px-4 py-2 mt-4 transform -skew-x-6">
<p className="font-sans font-semibold text-sm lg:text-base tracking-widest uppercase skew-x-6">Graphic Designer / Photographer</p>
</div>
</div>
<div className="bg-black text-white inline-block px-4 py-1 transform -skew-x-6">
<p className="font-heading font-semibold text-xs uppercase tracking-widest skew-x-6">Ready to handle your new project</p>
</div>
<p className="text-lg lg:text-xl text-slate-500 max-w-md leading-relaxed">
                    Veriatis erroris eserum fuga. Pa cusaper rovitin nonsequos aceate cus veribearum intur? Quis et eos arumquae periae nonet apeltiore comnim volore reptus undebitas.
                </p>
<a className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors group" href="#about">
                    More About Me
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="relative flex justify-center lg:justify-end">
<div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
<img alt="Sarita" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-10 right-10 w-full h-full rounded-full border-[20px] border-amber-400/20 -z-0 scale-110"></div>

<div className="absolute bottom-10 left-0 bg-black p-3 rounded-full text-amber-400 shadow-lg animate-bounce hidden lg:block">
<i className="w-6 h-6" data-lucide="camera"></i>
</div>
</div>
</div>
</section>

<div className="flex flex-col lg:flex-row w-full min-h-screen">

<aside className="w-full lg:w-72 bg-amber-400 flex flex-col items-center py-12 lg:sticky lg:top-0 lg:h-screen z-40 shadow-lg lg:shadow-none">
<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-10">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<nav className="flex flex-col items-center gap-6 w-full">
<a className="font-heading font-semibold text-lg tracking-widest uppercase hover:text-white transition-colors" href="#home">Home</a>
<a className="font-heading font-semibold text-lg tracking-widest uppercase hover:text-white transition-colors" href="#about">About Me</a>
<a className="font-heading font-semibold text-lg tracking-widest uppercase hover:text-white transition-colors" href="#resume">Resume</a>
<a className="font-heading font-semibold text-lg tracking-widest uppercase hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="font-heading font-semibold text-lg tracking-widest uppercase hover:text-white transition-colors" href="#testimonials">Testimonials</a>
<a className="font-heading font-semibold text-lg tracking-widest uppercase hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="mt-auto hidden lg:flex flex-col items-center gap-2 text-slate-800 opacity-60">
<div className="h-12 w-[1px] bg-slate-800 border-l border-dashed border-black"></div>
<i className="w-5 h-5" data-lucide="arrow-down"></i>
</div>
</aside>

<main className="flex-1 bg-slate-100 p-6 lg:p-20 lg:pr-32 overflow-hidden">

<section className="mb-32 scroll-mt-20" id="about">
<div className="flex items-center gap-6 mb-8">
<div className="h-[2px] w-16 bg-black"></div>
<h2 className="font-heading font-bold text-5xl uppercase tracking-tighter text-slate-900">About Me</h2>
</div>
<h3 className="font-medium text-2xl text-slate-600 mb-6">I'm Sarita Smith, Graphic Designer / Photographer</h3>
<p className="text-lg text-slate-500 leading-relaxed mb-16 max-w-4xl">
                    Veriatio erioris eserum fuga. Pa cusaper rovitin nonsequos aceate cus veribearum intur? Quis et eos arumquae periae nonet apeltiore comnim volore reptus undebitas si cus estem hariaeped quosaere vitemqu isquam facest quia volupta cum sus. Volo res ea vellaborror sum voluptia dolum dipsanis doluptures quam evellab orehent unioriorios eicab.
                </p>
<div className="grid grid-cols-1 xl:grid-cols-2 gap-12">

<div>
<div className="inline-block bg-amber-400 px-4 py-1 rounded-full mb-8">
<span className="font-heading font-semibold uppercase tracking-wide text-sm">What I Do?</span>
</div>
<div className="space-y-8">
<div className="flex gap-6 items-start">
<div className="w-14 h-14 shrink-0 rounded-full border-2 border-amber-400 flex items-center justify-center text-amber-500 bg-white">
<i className="w-7 h-7" data-lucide="pen-tool"></i>
</div>
<div>
<h4 className="font-heading font-semibold text-xl uppercase mb-2">Print Design</h4>
<p className="text-slate-500 text-base leading-relaxed">Veriatio erioris eserum fuga. Pa cusaper rovitin nonsequos aceate cus.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-14 h-14 shrink-0 rounded-full border-2 border-amber-400 flex items-center justify-center text-amber-500 bg-white">
<i className="w-7 h-7" data-lucide="monitor"></i>
</div>
<div>
<h4 className="font-heading font-semibold text-xl uppercase mb-2">Web Design</h4>
<p className="text-slate-500 text-base leading-relaxed">Veriatio erioris eserum fuga. Pa cusaper rovitin nonsequos aceate cus.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-14 h-14 shrink-0 rounded-full border-2 border-amber-400 flex items-center justify-center text-amber-500 bg-white">
<i className="w-7 h-7" data-lucide="camera"></i>
</div>
<div>
<h4 className="font-heading font-semibold text-xl uppercase mb-2">Photography</h4>
<p className="text-slate-500 text-base leading-relaxed">Veriatio erioris eserum fuga. Pa cusaper rovitin nonsequos aceate cus.</p>
</div>
</div>
</div>
</div>

<div>
<div className="inline-block bg-amber-400 px-4 py-1 rounded-full mb-8">
<span className="font-heading font-semibold uppercase tracking-wide text-sm">Fun Facts</span>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="bg-black rounded-full aspect-square flex flex-col items-center justify-center p-6 text-center shadow-xl hover:scale-105 transition-transform">
<span className="font-heading font-bold text-4xl text-amber-400 block mb-1">10+</span>
<span className="text-white text-xs uppercase tracking-widest">Years Experience</span>
</div>
<div className="bg-black rounded-full aspect-square flex flex-col items-center justify-center p-6 text-center shadow-xl hover:scale-105 transition-transform">
<span className="font-heading font-bold text-4xl text-amber-400 block mb-1">450</span>
<span className="text-white text-xs uppercase tracking-widest">Projects Done</span>
</div>
<div className="bg-black rounded-full aspect-square flex flex-col items-center justify-center p-6 text-center shadow-xl hover:scale-105 transition-transform">
<span className="font-heading font-bold text-4xl text-amber-400 block mb-1">300+</span>
<span className="text-white text-xs uppercase tracking-widest">Happy Clients</span>
</div>
<div className="bg-black rounded-full aspect-square flex flex-col items-center justify-center p-6 text-center shadow-xl hover:scale-105 transition-transform">
<span className="font-heading font-bold text-4xl text-amber-400 block mb-1">650K</span>
<span className="text-white text-xs uppercase tracking-widest">Satisfied Followers</span>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 scroll-mt-20" id="resume">
<div className="flex items-center gap-6 mb-12">
<div className="h-[2px] w-16 bg-black"></div>
<h2 className="font-heading font-bold text-5xl uppercase tracking-tighter text-slate-900">Resume</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<div className="inline-block bg-amber-400 px-4 py-1 rounded-full mb-10">
<span className="font-heading font-semibold uppercase tracking-wide text-sm">Education</span>
</div>
<div className="relative pl-8 space-y-12">
<div className="timeline-line left-2"></div>

<div className="relative">
<div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-white ring-2 ring-slate-200"></div>
<span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded mb-2 inline-block">2000-2005</span>
<h4 className="font-heading font-bold text-xl uppercase">Computer Science</h4>
<span className="text-amber-500 font-medium text-sm block mb-2">International University</span>
<p className="text-slate-500 text-base">Veriatio erioris eserum fuga. Pa cusaper rovitin nonsequos aceate cus.</p>
</div>

<div className="relative">
<div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-white ring-2 ring-slate-200"></div>
<span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded mb-2 inline-block">2005-2008</span>
<h4 className="font-heading font-bold text-xl uppercase">Graphic Design</h4>
<span className="text-amber-500 font-medium text-sm block mb-2">School of Arts</span>
<p className="text-slate-500 text-base">Veriatio erioris eserum fuga. Pa cusaper rovitin nonsequos aceate cus.</p>
</div>

<div className="relative">
<div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-white ring-2 ring-slate-200"></div>
<span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded mb-2 inline-block">2008-2012</span>
<h4 className="font-heading font-bold text-xl uppercase">Web Development</h4>
<span className="text-amber-500 font-medium text-sm block mb-2">Tech Institute</span>
<p className="text-slate-500 text-base">Veriatio erioris eserum fuga. Pa cusaper rovitin nonsequos aceate cus.</p>
</div>
</div>
</div>

<div>
<div className="inline-block bg-amber-400 px-4 py-1 rounded-full mb-10">
<span className="font-heading font-semibold uppercase tracking-wide text-sm">Experience</span>
</div>
<div className="relative pl-8 space-y-12">
<div className="timeline-line left-2"></div>

<div className="relative">
<div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-white ring-2 ring-slate-200"></div>
<span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded mb-2 inline-block">2012-2015</span>
<h4 className="font-heading font-bold text-xl uppercase">Junior Designer</h4>
<span className="text-amber-500 font-medium text-sm block mb-2">Creative Agency</span>
<p className="text-slate-500 text-base">Veriatio erioris eserum fuga. Pa cusaper rovitin nonsequos aceate cus.</p>
</div>

<div className="relative">
<div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-white ring-2 ring-slate-200"></div>
<span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded mb-2 inline-block">2015-2018</span>
<h4 className="font-heading font-bold text-xl uppercase">Senior Developer</h4>
<span className="text-amber-500 font-medium text-sm block mb-2">Web Solutions</span>
<p className="text-slate-500 text-base">Veriatio erioris eserum fuga. Pa cusaper rovitin nonsequos aceate cus.</p>
</div>

<div className="relative">
<div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-white ring-2 ring-slate-200"></div>
<span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded mb-2 inline-block">2018-Present</span>
<h4 className="font-heading font-bold text-xl uppercase">Art Director</h4>
<span className="text-amber-500 font-medium text-sm block mb-2">Design Studio</span>
<p className="text-slate-500 text-base">Veriatio erioris eserum fuga. Pa cusaper rovitin nonsequos aceate cus.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 scroll-mt-20" id="portfolio">
<div className="flex items-center gap-6 mb-8">
<div className="h-[2px] w-16 bg-black"></div>
<h2 className="font-heading font-bold text-5xl uppercase tracking-tighter text-slate-900">Portfolio</h2>
</div>

<div className="flex flex-wrap gap-6 mb-12">
<button className="font-heading font-semibold text-sm uppercase tracking-widest text-black border-b-2 border-amber-400 pb-1">All</button>
<button className="font-heading font-semibold text-sm uppercase tracking-widest text-slate-400 hover:text-black transition-colors pb-1">Print Design</button>
<button className="font-heading font-semibold text-sm uppercase tracking-widest text-slate-400 hover:text-black transition-colors pb-1">Web Design</button>
<button className="font-heading font-semibold text-sm uppercase tracking-widest text-slate-400 hover:text-black transition-colors pb-1">Photography</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
<img alt="Project" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-amber-400/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<h4 className="font-heading font-bold text-xl uppercase text-white mb-2">Magazine Layout</h4>
<span className="text-black text-xs font-semibold uppercase tracking-widest">Print Design</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
<img alt="Project" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-amber-400/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<h4 className="font-heading font-bold text-xl uppercase text-white mb-2">Website Mockup</h4>
<span className="text-black text-xs font-semibold uppercase tracking-widest">Web Design</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
<img alt="Project" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-amber-400/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<h4 className="font-heading font-bold text-xl uppercase text-white mb-2">Portrait Session</h4>
<span className="text-black text-xs font-semibold uppercase tracking-widest">Photography</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
<img alt="Project" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-amber-400/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<h4 className="font-heading font-bold text-xl uppercase text-white mb-2">Brand Identity</h4>
<span className="text-black text-xs font-semibold uppercase tracking-widest">Print Design</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
<img alt="Project" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-amber-400/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<h4 className="font-heading font-bold text-xl uppercase text-white mb-2">App Interface</h4>
<span className="text-black text-xs font-semibold uppercase tracking-widest">Web Design</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
<img alt="Project" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-amber-400/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<h4 className="font-heading font-bold text-xl uppercase text-white mb-2">Product Shot</h4>
<span className="text-black text-xs font-semibold uppercase tracking-widest">Photography</span>
</div>
</div>
</div>
</section>

<section className="mb-32 scroll-mt-20" id="testimonials">
<div className="flex items-center gap-6 mb-12">
<div className="h-[2px] w-16 bg-black"></div>
<h2 className="font-heading font-bold text-5xl uppercase tracking-tighter text-slate-900">Testimonials</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-0 shadow-lg group">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 text-white">
<h4 className="font-heading font-bold text-xl">Oliver</h4>
<span className="text-amber-400 text-xs font-semibold uppercase">Marketing Director</span>
</div>
</div>
<div className="p-8">
<div className="flex text-amber-400 mb-4 gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-500 italic leading-relaxed">"Veriatio erioris eserum fuga. Pa cusaper rovitin nonsequos aceate cus veribearum intur. Quis et eos arumquae periae."</p>
</div>
</div>

<div className="bg-white p-0 shadow-lg group">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 text-white">
<h4 className="font-heading font-bold text-xl">Janny</h4>
<span className="text-amber-400 text-xs font-semibold uppercase">CEO, TechStart</span>
</div>
</div>
<div className="p-8">
<div className="flex text-amber-400 mb-4 gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-500 italic leading-relaxed">"Veriatio erioris eserum fuga. Pa cusaper rovitin nonsequos aceate cus veribearum intur. Quis et eos arumquae periae."</p>
</div>
</div>
</div>
</section>

<section className="mb-20 scroll-mt-20" id="contact">
<div className="flex items-center gap-6 mb-12">
<div className="h-[2px] w-16 bg-black"></div>
<h2 className="font-heading font-bold text-5xl uppercase tracking-tighter text-slate-900">Contact</h2>
</div>
<div className="bg-white p-12 shadow-xl border-t-8 border-amber-400">
<h3 className="font-medium text-2xl text-slate-700 mb-8 text-center">Feel free to contact me!</h3>
<div className="flex flex-col md:flex-row justify-center gap-12 items-center mb-16">
<div className="flex flex-col items-center text-center gap-4 group">
<div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="globe"></i>
</div>
<div>
<p className="font-heading font-bold uppercase text-slate-900">Website</p>
<p className="text-slate-500">www.example.com</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-4 group">
<div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="phone"></i>
</div>
<div>
<p className="font-heading font-bold uppercase text-slate-900">Phone</p>
<p className="text-slate-500">+01234567890</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-4 group">
<div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="mail"></i>
</div>
<div>
<p className="font-heading font-bold uppercase text-slate-900">Email</p>
<p className="text-slate-500">info@example.com</p>
</div>
</div>
</div>
<div className="text-center border-t border-slate-200 pt-8">
<h4 className="font-heading font-bold text-2xl uppercase tracking-widest text-slate-800">Thanks for Patience!</h4>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
