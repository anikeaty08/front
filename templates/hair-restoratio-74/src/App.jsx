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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-100 glass-panel transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="flex flex-col">
<span className="leading-none group-hover:text-zinc-600 transition-colors text-sm font-semibold text-zinc-900 tracking-tight uppercase">
              Northwestern Hair
            </span>
<span className="text-[10px] text-zinc-400 font-medium tracking-widest uppercase mt-0.5">
              Restoration
            </span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#specialties">
            Specialties
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#philosophy">
            Our Philosophy
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#reviews">
            Patient Stories
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#financing">
            Financing
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-zinc-500 text-xs font-medium hover:text-zinc-900 transition-colors" href="tel:+13122666240">
<iconify-icon height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
            (312) 266-6240
          </a>
<a className="hidden md:flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-5 py-2.5 rounded-full transition-all tracking-wide shadow-lg shadow-zinc-200 hover:shadow-xl hover:shadow-zinc-300/50 group" href="#contact">
<span className="">Book Consultation</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-zinc-900 p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-52 md:pb-32 overflow-hidden pt-40 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-100 rounded-full blur-[120px] opacity-60"></div>
<div className="absolute top-[10%] right-[-5%] w-[30%] h-[30%] bg-zinc-50 rounded-full blur-[100px] opacity-60"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>
<div className="text-center max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div className="fade-enter" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm mb-8 shadow-sm hover:border-zinc-300 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600 tracking-wide uppercase">
              Chicago's Hair Loss &amp; Hair Transplant Expert
            </span>
</div>
</div>
<h1 className="fade-enter md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-medium text-zinc-900 tracking-tight mb-8" style={{animationDelay: '0.2s'}}>
          Dr. Vinay Personally Designs
          <br/>
          Every Single Procedure
          <br/>
</h1>
<p className="fade-enter md:text-xl leading-relaxed text-lg font-light text-zinc-500 max-w-2xl mr-auto mb-12 ml-auto" style={{animationDelay: '0.3s'}}>
          No more goop, foam, or hats in public. Get your hair back. Get your
          life back.
        </p>
<div className="fade-enter flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center" style={{animationDelay: '0.4s'}}>
<a className="sm:w-auto hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-zinc-200 hover:shadow-2xl hover:shadow-zinc-300 hover:-translate-y-0.5 text-sm font-medium text-white bg-zinc-900 w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl" href="#contact">
            Start Your Journey
            <iconify-icon className="" height="18" icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 text-zinc-700 rounded-full font-medium text-sm hover:border-zinc-300 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2 shadow-sm" href="#results">
            View Gallery
            <iconify-icon height="18" icon="solar:gallery-linear" width="18"></iconify-icon>
</a>
</div>
<div className="fade-enter flex flex-wrap md:gap-16 text-zinc-400 border-zinc-100/50 border-t mt-16 pt-8 gap-x-8 gap-y-8 items-center justify-center" style={{animationDelay: '0.5s'}}>
<div className="flex flex-col items-center gap-1">
<span className="text-2xl font-semibold text-zinc-900 tracking-tight">
              200+
            </span>
<span className="text-xs font-medium tracking-wide uppercase">
              5-Star Reviews
            </span>
<div className="flex gap-1 text-zinc-900 mt-1">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="pb-32 px-4 md:px-6" id="philosophy">
<div className="max-w-6xl mx-auto">
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200 border border-zinc-200 group cursor-pointer bg-zinc-100">

<img alt="Dr. Vinay Consultation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[20%]" src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 to-transparent transition-colors duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-20">
<div className="max-w-lg text-left">
<div className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 shadow-lg mb-4">
<span className="text-white text-[0.625rem] font-bold tracking-wider uppercase">
                  The Doctor Difference
                </span>
</div>
<h3 className="md:text-4xl text-2xl font-medium text-white tracking-tight mb-4">
                "I'm not just your surgeon.
                <br/>
                I'm a patient."
              </h3>
<p className="text-zinc-200 font-light text-base md:text-lg leading-relaxed">
                Dr. Vinay understands the anxiety of hair loss because he has
                been in your shoes. That's why he dedicates his entire day to a
                single patient—you.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50 border-t border-zinc-200 relative" id="specialties">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
<div className="">
<h2 className="md:text-4xl text-3xl font-medium text-zinc-900 tracking-tight mb-4" style={{}}>
              Specialized Expertise
            </h2>
<p className="text-zinc-500 font-light max-w-xl text-lg">
              Beyond basic restoration. We specialize in complex cases, artistic
              hairline design, and dense packing.
            </p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-900 border-b border-zinc-300 pb-0.5 hover:border-zinc-900 transition-colors" href="#contact">
            Get an Evaluation
            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-zinc-400" height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon height="28" icon="solar:pen-new-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3 tracking-tight">
              Timeless Hairline Design
            </h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
              Dr. Vinay treats the hairline as art. We specialize in designing
              age-appropriate, undetectable hairlines for men, especially those
              under 25 who require future-proofing.
            </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-zinc-400" height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon height="28" icon="solar:user-heart-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3 tracking-tight">
              Women's Hair Restoration
            </h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
              Female hair loss requires a delicate, specific approach. We are
              experts in diffuse thinning solutions and non-shaven procedures
              that maximize density without disruption.
            </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-zinc-400" height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon height="28" icon="solar:layers-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3 tracking-tight">
              Mega Sessions &amp; Diffuse
            </h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
              Because we take only one patient a day, we can perform "Mega
              Sessions" safely, moving more grafts in a single sitting for
              maximum impact on diffuse thinning.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-16 justify-between">
<div>
<span className="text-zinc-500 text-sm font-medium tracking-wider uppercase mb-2 block">
              Real Results
            </span>
<h2 className="md:text-4xl text-3xl font-medium text-zinc-900 tracking-tight">
              See the Northwestern Difference
            </h2>
</div>
<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-colors">
              View Full Gallery
            </span>
<div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-all">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="w-full flex justify-center">
<div className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200 border border-zinc-100 group">
<img alt="Smiling patient showing successful hair transplant results with before photo inset" className="bg-zinc-100 w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7020bfd5-57c5-40d9-adb1-84ca4b246056_3840w.webp"/>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 pt-32 pb-32" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="md:text-4xl text-3xl font-medium text-zinc-900 tracking-tight text-center mb-20">
          200+ 5-Star Reviews
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 bg-white rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
<div>
<div className="flex gap-1 text-zinc-900 mb-6">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed text-base text-zinc-600 mb-8 font-light">
                “Exceptional results! I received my hair transplant about 6
                months ago and the results are just amazing. Dr. Vinay and the
                staff were very knowledgeable. I loved that I was the only
                patient there all day. Northwestern Hair is by far the best in
                every aspect!”
              </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-zinc-100">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-semibold text-xs">
                JR
              </div>
<div>
<p className="text-sm font-semibold text-zinc-900">JAIME R.</p>
<p className="text-xs text-zinc-400">
                  Men’s Hair Restoration Patient
                </p>
</div>
</div>
</div>

<div className="p-8 bg-white rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
<div className="">
<div className="flex gap-1 text-zinc-900 mb-6">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed text-base text-zinc-600 mb-8 font-light">
                “I’ve been a hairdresser for thirty years and Dr. Vinay is the
                ONLY hair transplant doctor I refer my clients too. Everyone
                that has gone to him is obsessed with having hair again!! For my
                female clients I recommend ACS injections. Vinay is the best if
                you want your hair to look like it did 15 years ago 👍🏼”
              </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-zinc-100">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-semibold text-xs">
                JS
              </div>
<div>
<p className="text-sm font-semibold text-zinc-900">JILLIAN S.</p>
<p className="text-xs text-zinc-400">
                  Women’s Hair Restoration Patient
                </p>
</div>
</div>
</div>

<div className="p-8 bg-white rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
<div className="">
<div className="flex gap-1 text-zinc-900 mb-6">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed text-base text-zinc-600 mb-8 font-light">
                “Most helpful and honest consultation. Dr. Vinay was very clear
                about options. Knowing he had the procedure himself made me
                trust him instantly. Finally seeing the results and I am very
                happy with them!”
              </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-zinc-100">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-semibold text-xs">
                LW
              </div>
<div>
<p className="text-sm font-semibold text-zinc-900">LISA W.</p>
<p className="text-xs text-zinc-400">
                  Women’s Hair Program Patient
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-zinc-950 pt-32 pb-32 relative" id="contact">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-zinc-800 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zinc-900 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
            Confidence starts here.
          </h2>
<p className="text-zinc-400 font-light text-lg">
            Schedule your consultation with Dr. Vinay.
          </p>
</div>
<form className="bg-zinc-900/50 backdrop-blur border border-zinc-800/80 p-8 md:p-12 rounded-[2rem] shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest ml-1">
                First Name
              </label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-base text-zinc-200 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest ml-1">
                Last Name
              </label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-base text-zinc-200 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest ml-1">
                Email Address
              </label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-base text-zinc-200 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest ml-1">
                Phone Number
              </label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-base text-zinc-200 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-2 mb-10">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest ml-1">
              Tell us about your goals
            </label>
<textarea className="focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700 resize-none text-base bg-zinc-900 text-zinc-200 w-full h-32 border-zinc-800 border rounded-xl p-4" placeholder="I am interested in restoring my hairline..."></textarea>
</div>
<button className="group w-full bg-white text-zinc-950 font-semibold py-4 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5 active:scale-[0.99]" type="button">
            Request Consultation
            <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:plain-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-white py-16 border-t border-zinc-100">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="bg-zinc-900 text-white w-8 h-8 flex items-center justify-center rounded-lg">
<span className="font-bold text-xs">N</span>
</div>
<span className="text-sm font-semibold text-zinc-900">
                Northwestern Hair Restoration
              </span>
</div>
<p className="leading-relaxed text-sm font-light text-zinc-500 max-w-sm">
              Chicago's hair loss and hair transplant expert. 1 Patient a Day.
            </p>
</div>
<div className="">
<h4 className="font-semibold text-zinc-900 text-sm mb-4">Expertise</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li className="">
<a className="hover:text-zinc-900 transition-colors" href="#">
                  Timeless Hairlines
                </a>
</li>
<li className="">
<a className="hover:text-zinc-900 transition-colors" href="#">
                  Women's Restoration
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors" href="#">
                  Diffuse Thinning
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 text-sm mb-4">Clinic</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li>
<a className="hover:text-zinc-900 transition-colors" href="#">
                  About Dr. Vinay
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors" href="#">
                  Reviews
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors" href="#">
                  Results Gallery
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-zinc-400 font-light">
            © 2024 Northwestern Hair Restoration. All rights reserved.
          </div>
<div className="flex gap-6 text-xs text-zinc-400 font-light">
<a className="hover:text-zinc-600 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-zinc-600 transition-colors" href="#">
              Terms of Service
            </a>
<a className="hover:text-zinc-600 transition-colors" href="#">
              Sitemap
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
