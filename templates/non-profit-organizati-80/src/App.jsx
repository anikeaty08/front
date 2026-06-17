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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="https://oadaf.org/">
<span className="text-xl font-semibold tracking-tighter text-white group-hover:text-emerald-400 transition-colors">OADAF</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="https://oadaf.org/">Home</a>
<a className="hover:text-white transition-colors" href="#who-we-are">Who We Are</a>
<a className="hover:text-white transition-colors" href="https://oadaf.org/projects/">Projects</a>
<a className="hover:text-white transition-colors" href="https://oadaf.org/our-staff/">Staff</a>
<a className="hover:text-white transition-colors" href="https://oadaf.org/contact-us/">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 hover:border-emerald-500/50 transition-all focus:ring-2 focus:ring-emerald-500/20" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=ECQEAMC8JUMAE&amp;source=url" target="_blank">
<span>Donate</span>
<span className="iconify" data-icon="lucide:heart" data-width="14"></span>
</a>

<button className="md:hidden text-zinc-400 hover:text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>
<div className="absolute inset-0 bg-[url('https://oadaf.org/wp-content/themes/charityhope/images/pattern.png')] opacity-[0.03]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Non-Profit &amp; Non-Governmental
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                OADAF <span className="text-zinc-500">for the</span><br/>
<span className="text-gradient">Future of Africa</span>
</h1>
<p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed font-light mb-10">
                Dedicated to Health, Education, Technology, Economic Development, and the Promotion of Democracy for children in need.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=ECQEAMC8JUMAE&amp;source=url" target="_blank">
                    Make a Donation
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg text-sm font-medium transition-all flex items-center justify-center" href="#who-we-are">
                    Learn More
                </a>
</div>
</div>
</header>

<section className="py-24 border-t border-white/5 relative" id="who-we-are">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                        Who <span className="text-emerald-500">We Are</span>
</h2>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                        The Organization for Authentic Development of Africa (OADAF) is a non-profit organization committed to creating sustainable change. We focus on creating conditions for positive changes and fostering human development across the continent.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 p-1 rounded bg-emerald-500/10 text-emerald-500">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</div>
<p className="text-sm text-zinc-300">Legally established and transparent operations.</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 p-1 rounded bg-emerald-500/10 text-emerald-500">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</div>
<p className="text-sm text-zinc-300">Focused on retention of African scholars and entrepreneurs.</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 p-1 rounded bg-emerald-500/10 text-emerald-500">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</div>
<p className="text-sm text-zinc-300">Facilitating the transfer of knowledge.</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative group">
<div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
<img alt="Children in Africa" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://oadaf.org/wp-content/uploads/2018/10/slide-5.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-white text-sm font-medium">Helping improve living conditions</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-[#0A0A0C] border border-white/5 p-8 rounded-xl hover-card relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="iconify text-emerald-500" data-icon="lucide:target" data-width="120"></span>
</div>
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
<span className="iconify" data-icon="lucide:flag" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Our Mission</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                        To facilitate the transfer of knowledge, improve living conditions, and stem the flow of Africa's brain drain.
                    </p>
<a className="text-xs font-medium text-emerald-500 hover:text-emerald-400 flex items-center gap-1" href="https://oadaf.org/intro/where-we-work-4/">
                        Read More <span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
</a>
</div>

<div className="group bg-[#0A0A0C] border border-white/5 p-8 rounded-xl hover-card relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="iconify text-blue-500" data-icon="lucide:eye" data-width="120"></span>
</div>
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
<span className="iconify" data-icon="lucide:eye" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Our Vision</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                        Lending Africa a hand to fill gaps in health, education, and technology through strategic trainings and programs.
                    </p>
<a className="text-xs font-medium text-blue-500 hover:text-blue-400 flex items-center gap-1" href="https://oadaf.org/intro/where-we-work-3/">
                        Read More <span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
</a>
</div>

<div className="group bg-[#0A0A0C] border border-white/5 p-8 rounded-xl hover-card relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="iconify text-purple-500" data-icon="lucide:heart-handshake" data-width="120"></span>
</div>
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
<span className="iconify" data-icon="lucide:heart-handshake" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Our Values</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                        We believe that together we can put Africa on the path for auto-sufficiency, sustainability, and breakthrough.
                    </p>
<a className="text-xs font-medium text-purple-500 hover:text-purple-400 flex items-center gap-1" href="https://oadaf.org/intro/where-we-work-2/">
                        Read More <span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12">

<div className="bg-gradient-to-b from-white/5 to-transparent p-[1px] rounded-2xl">
<div className="bg-black rounded-2xl p-8 h-full">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-emerald-500" data-icon="lucide:users" data-width="20"></span>
<h3 className="text-xl font-semibold text-white tracking-tight">Membership</h3>
</div>
<ul className="space-y-4">
<li className="flex gap-4 group">
<span className="flex-shrink-0 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center text-transparent group-hover:text-emerald-500 group-hover:border-emerald-500 transition-all">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
<span className="text-sm text-zinc-400">Membership is free and voluntary.</span>
</li>
<li className="flex gap-4 group">
<span className="flex-shrink-0 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center text-transparent group-hover:text-emerald-500 group-hover:border-emerald-500 transition-all">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
<span className="text-sm text-zinc-400">Open to individuals, groups, or associations sharing our core values.</span>
</li>
<li className="flex gap-4 group">
<span className="flex-shrink-0 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center text-transparent group-hover:text-emerald-500 group-hover:border-emerald-500 transition-all">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
<span className="text-sm text-zinc-400">Individual members must be at least 18 years old.</span>
</li>
</ul>
</div>
</div>

<div className="bg-gradient-to-b from-white/5 to-transparent p-[1px] rounded-2xl">
<div className="bg-black rounded-2xl p-8 h-full">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-emerald-500" data-icon="lucide:shield-check" data-width="20"></span>
<h3 className="text-xl font-semibold text-white tracking-tight">Our Principles</h3>
</div>
<ul className="space-y-4">
<li className="flex gap-4 group">
<span className="flex-shrink-0 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center text-transparent group-hover:text-emerald-500 group-hover:border-emerald-500 transition-all">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
<span className="text-sm text-zinc-400">Adherence to core principles: Trust, Accountability, and Transparency (TAT).</span>
</li>
<li className="flex gap-4 group">
<span className="flex-shrink-0 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center text-transparent group-hover:text-emerald-500 group-hover:border-emerald-500 transition-all">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
<span className="text-sm text-zinc-400">Members support the organization financially through fundraising events.</span>
</li>
<li className="flex gap-4 group">
<span className="flex-shrink-0 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center text-transparent group-hover:text-emerald-500 group-hover:border-emerald-500 transition-all">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
<span className="text-sm text-zinc-400">No minimum annual fee required for general membership.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-900/20 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div className="max-w-md">
<a className="inline-block mb-6" href="#">
<img alt="OADAF Logo" className="h-16 w-auto opacity-90" src="https://oadaf.org/wp-content/uploads/2017/08/150-logo.png"/>
</a>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Organization for Authentic Development of Africa (OADAF) is a non-profit and non-governmental organization working towards a self-sufficient Africa.
                    </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-white">Contact</h4>
<a className="text-sm text-zinc-400 hover:text-emerald-500 transition-colors flex items-center gap-2" href="mailto:info@oadaf.org">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                        info@oadaf.org
                    </a>
<div className="flex gap-4 mt-2">
<a className="text-zinc-500 hover:text-white transition-colors" href="http://facebook.com">
<span className="iconify" data-icon="lucide:facebook" data-width="18"></span>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="http://twitter.com">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">
                    © 2024 Organization for Authentic Development of Africa. All rights reserved.
                </p>
<div className="flex gap-6">
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
