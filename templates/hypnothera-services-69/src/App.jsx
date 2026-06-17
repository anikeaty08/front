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
      

<nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-white transition-transform group-hover:scale-105">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="power"></i>
</div>
<span className="hidden md:block font-medium text-lg tracking-tight text-slate-800">Quit It Now</span>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="text-cyan-500" href="#">HOME</a>
<a className="hover:text-cyan-500 transition-colors" href="#">ABOUT</a>
<a className="hover:text-cyan-500 transition-colors" href="#">SERVICES</a>
<a className="hover:text-cyan-500 transition-colors" href="#">PRODUCTS</a>
<a className="hover:text-cyan-500 transition-colors" href="#">MEDIA</a>
<a className="hover:text-cyan-500 transition-colors" href="#">CONTACT</a>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-cyan-500 font-medium text-sm tracking-wide" href="tel:2157828414">215.782.8414</a>
<div className="flex items-center gap-3">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><i className="w-5 h-5 stroke-[1.5]" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-sky-400 transition-colors" href="#"><i className="w-5 h-5 stroke-[1.5]" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-pink-600 transition-colors" href="#"><i className="w-5 h-5 stroke-[1.5]" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-red-500 transition-colors" href="#"><i className="w-5 h-5 stroke-[1.5]" data-lucide="youtube"></i></a>
</div>
</div>

<button className="lg:hidden text-slate-500">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Woman looking at sky" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent h-32 bottom-0"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-[-5vh]">
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-white font-light drop-shadow-sm mb-6">
                QUIT IT <span className="font-semibold">NOW!</span>
</h1>
<p className="text-2xl md:text-4xl text-white/90 font-light tracking-tight mb-10">
                AWAKEN TO A <span className="font-medium">NEW YOU.</span>
</p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-lg font-medium tracking-wide hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" href="#appointment">
                Schedule an Appointment
            </a>
</div>
</header>

<section className="w-full relative z-20 -mt-20 px-6 max-w-7xl mx-auto pb-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-2xl rounded-2xl overflow-hidden">

<div className="relative h-96 group overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-blue-600/80 group-hover:bg-blue-600/90 transition-colors"></div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between text-center text-white">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">QUIT SMOKING</h3>
<p className="text-lg opacity-90 font-light leading-relaxed">You've tried patches, lozenges, pills. You're still smoking. We'll ensure you don't give up.</p>
</div>
<button className="w-full py-3 border border-white/30 rounded text-sm font-medium tracking-wide hover:bg-white hover:text-blue-600 transition-all">LEARN MORE</button>
</div>
</div>

<div className="bg-white p-8 h-96 flex flex-col justify-between text-center border-r border-slate-100">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-800 mb-4">WEIGHT LOSS</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed">The latest data from National Center for Health Statistics indicates 30 percent of adults are obese. You are not alone.</p>
</div>
<button className="w-full py-3 bg-cyan-500 text-white rounded text-sm font-medium tracking-wide hover:bg-cyan-600 transition-all shadow-md shadow-cyan-500/20">LEARN MORE</button>
</div>

<div className="relative h-96 group overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-sky-500/80 group-hover:bg-sky-500/90 transition-colors"></div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between text-center text-white">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">STRESS MGMT</h3>
<p className="text-lg opacity-90 font-light leading-relaxed">Limitless stressors, limited solutions. Regain control of your life through our programs.</p>
</div>
<button className="w-full py-3 border border-white/30 rounded text-sm font-medium tracking-wide hover:bg-white hover:text-sky-500 transition-all">LEARN MORE</button>
</div>
</div>

<div className="bg-white p-8 h-96 flex flex-col justify-between text-center">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-800 mb-4">GROUP HYPNOSIS</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed">Group hypnosis is a way to kick a habit, shed pounds, or fix conflicts alongside others sharing the same goal.</p>
</div>
<button className="w-full py-3 bg-cyan-500 text-white rounded text-sm font-medium tracking-wide hover:bg-cyan-600 transition-all shadow-md shadow-cyan-500/20">LEARN MORE</button>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="appointment">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-cyan-500 mb-4">MAKE AN APPOINTMENT</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">Questions about hypnosis? Schedule an appointment with Philadelphia's leading hypnotherapist today.</p>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative hidden lg:block">
<div className="absolute -inset-4 bg-gradient-to-tr from-cyan-100 to-white rounded-2xl opacity-50 blur-xl"></div>
<img alt="Doctor Writing" className="relative rounded-2xl shadow-2xl border border-white" src="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<form className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
<div className="grid grid-cols-2 gap-6 mb-6">
<div className="col-span-1">
<label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">First Name <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-base" type="text"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Last Name <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-base" type="text"/>
</div>
</div>
<div className="mb-6">
<label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-base" type="email"/>
</div>
<div className="mb-6">
<label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Phone <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-base" type="tel"/>
</div>
<div className="mb-6">
<label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Preferred Date</label>
<div className="relative">
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-base text-slate-600" type="date"/>
<i className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" data-lucide="calendar"></i>
</div>
</div>
<div className="mb-6">
<label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-base resize-none" rows="4"></textarea>
</div>
<div className="flex items-center gap-3 mb-8 p-4 bg-slate-50 rounded border border-slate-200">
<input className="w-5 h-5 text-cyan-500 rounded border-slate-300 focus:ring-cyan-500" type="checkbox"/>
<span className="text-sm text-slate-500">I am not a robot</span>
</div>
<button className="w-full py-4 bg-cyan-400 text-white rounded-lg font-semibold tracking-wide hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-400/30">SUBMIT REQUEST</button>
</form>
</div>
</div>
</section>

<section className="py-16 bg-blue-500 text-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold tracking-tight opacity-90 mb-12 uppercase letter-spacing-2">As Featured On</h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

<div className="font-bold text-xl italic">Philadelphia</div>
<div className="font-bold text-xl">WMMR</div>
<div className="font-serif text-3xl">GQ</div>
<div className="font-medium text-xl">philly.com</div>
<div className="font-bold text-xl tracking-tighter">CBS</div>
<div className="font-bold text-2xl rounded-full border-2 border-white w-12 h-12 flex items-center justify-center mx-auto">6</div>
</div>
<div className="mt-16">
<button className="px-8 py-3 border border-white/40 rounded-full hover:bg-white hover:text-blue-600 font-medium transition-all text-sm">DOWNLOAD OUR PRESS KIT</button>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<div className="flex items-baseline gap-2 mb-8 border-b border-slate-100 pb-4">
<h2 className="text-3xl font-light tracking-tight text-cyan-400">IN THE <span className="font-semibold text-cyan-500">MEDIA</span></h2>
</div>
<div className="space-y-12">

<div className="group cursor-pointer">
<div className="relative rounded-xl overflow-hidden aspect-video shadow-lg mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-white fill-current ml-1" data-lucide="play"></i>
</div>
</div>
</div>
<h3 className="text-2xl font-semibold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors">Quit It Now News Clips</h3>
<p className="text-lg text-slate-500 leading-relaxed">Watch a compilation of Dr. Rosenberg's TV &amp; News appearances where he discusses hypnosis, how hypnotherapy can help, and more!</p>
<button className="mt-6 px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors">VIEW ALL CLIPS</button>
</div>

<div className="group cursor-pointer">
<div className="relative rounded-xl overflow-hidden aspect-video shadow-lg mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-white fill-current ml-1" data-lucide="play"></i>
</div>
</div>
</div>
<h3 className="text-2xl font-semibold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors">Dr. Rosenberg on Philly's Preston &amp; Steve</h3>
<p className="text-lg text-slate-500 leading-relaxed">Discussing Hypnosis and breaking habits with the morning show crew.</p>
</div>
</div>
</div>

<div>
<div className="flex items-baseline gap-2 mb-8 border-b border-slate-100 pb-4">
<h2 className="text-3xl font-light tracking-tight text-cyan-400">MEET <span className="font-semibold text-cyan-500">DR. ROSENBERG</span></h2>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
<div className="flex justify-center mb-8">
<div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-50 shadow-lg">
<img alt="Dr. Steven Rosenberg" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
</div>
<h3 className="text-center text-3xl font-semibold text-slate-800 tracking-tight mb-1">Dr. Steven Rosenberg</h3>
<p className="text-center text-sm font-medium text-slate-400 uppercase tracking-widest mb-8">Ph.D.</p>
<div className="prose prose-slate prose-lg text-slate-500 mb-8 font-light">
<p className="mb-4">Dr. Steven Rosenberg is Philadelphia's foremost hypnotist. Over the last 30 years, his hypnotherapy programs have helped TENS OF THOUSANDS of Philly residents to lose weight, quit smoking, and achieve other healthy goals!</p>
<p className="mb-4">It is Dr. Rosenberg's goal to improve the quality of life for as many people as possible. Through education, research and experience, Dr. Rosenberg designs programs to help each individual find enjoyment and fulfillment.</p>
</div>
<blockquote className="bg-slate-50 p-6 rounded-xl border-l-4 border-cyan-400 italic text-slate-600 mb-8 text-lg">
                        "I've had the pleasure of working with Dr. Steven Rosenberg during his association with the Philadelphia Flyers Hockey Club. I have worked with Steve on relaxation, visualization, mind clearing, and other mind conditioning."
                        <footer className="mt-4 text-sm font-semibold not-italic text-slate-900">— Mark Howe, Former Philadelphia Flyer</footer>
</blockquote>
<button className="w-full py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-all text-sm uppercase tracking-wide">View all of Quit It Now's TV Spots</button>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-blue-600 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
<svg className="absolute w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 L20 80 L40 90 L60 20 L100 0" fill="none" stroke="white" strokeWidth="0.5"></path>
<circle cx="20" cy="80" fill="white" r="1"></circle>
<circle cx="60" cy="20" fill="white" r="1"></circle>
</svg>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
<h2 className="text-2xl font-semibold tracking-wide uppercase opacity-80 mb-12">What our patients say about us</h2>
<p className="text-2xl md:text-3xl font-light leading-relaxed mb-12">"Since using Quit It Now, I feel healthier. I can breathe better. I accomplish more. My physical endurance is greater. I feel more in control of myself. I don't have a habit that rules me."</p>
<div className="flex flex-col items-center">
<div className="w-20 h-20 rounded-full border-2 border-white/50 p-1 mb-4">
<img className="w-full h-full rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<h4 className="text-lg font-medium">Susan Smith</h4>
<p className="text-blue-200 text-sm">Quit Smoking Patient</p>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1">
<div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-white mb-6">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="power"></i>
</div>
<nav className="space-y-3">
<a className="block text-slate-500 hover:text-cyan-500 transition-colors" href="#">Home</a>
<a className="block text-slate-500 hover:text-cyan-500 transition-colors" href="#">About</a>
<a className="block text-slate-500 hover:text-cyan-500 transition-colors" href="#">Services</a>
<a className="block text-slate-500 hover:text-cyan-500 transition-colors" href="#">Products</a>
<a className="block text-slate-500 hover:text-cyan-500 transition-colors" href="#">Media</a>
<a className="block text-slate-500 hover:text-cyan-500 transition-colors" href="#">Contact</a>
</nav>
</div>

<div className="col-span-1 md:col-span-2">
<h3 className="text-2xl font-semibold text-slate-800 tracking-tight mb-6">GET IN TOUCH</h3>
<p className="text-lg text-slate-500 mb-8 max-w-md">Questions about hypnosis, hypnotherapy, or any of our programs? Contact Philadelphia's leading hypnotherapist today!</p>
<div className="space-y-4 text-slate-600 mb-8">
<p>3080 Old York Road #225 Elkins Park, PA. 19027</p>
<p className="font-medium">P: 215.782.8414</p>
<p>F: 215.782.8801</p>
<p className="text-cyan-600">E: drsmrosenberg@aol.com</p>
</div>
<div className="flex gap-4 mb-8">
<a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-sky-400 hover:text-white transition-all" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-pink-600 hover:text-white transition-all" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-700 hover:text-white transition-all" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
<button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded font-medium text-sm transition-colors shadow-lg shadow-cyan-500/20">LEAVE A REVIEW</button>
</div>

<div className="col-span-1">
<div className="w-full h-64 bg-slate-200 rounded-lg overflow-hidden">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.8863673752046!2d-75.1278!3d40.0789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA0JzQ0LjAiTiA3NcKwMDcnNDAuMSJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
<div className="border-t border-slate-200 pt-8 text-center text-slate-400 text-sm">
<p>© 2025 Quit It Now | Site by beMarketing | Site Map</p>
</div>
</div>
</footer>


    </>
  );
}
