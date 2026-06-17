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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-slate-900 font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
                RITAJ GUL
                <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded-full font-medium tracking-normal border border-slate-200">AI WALI</span>
</a>
<div className="flex gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
</div>
</nav>
<main className="flex-grow pt-32 pb-16 px-6">

<section className="max-w-3xl mx-auto mb-24">
<div className="bg-grid absolute top-0 left-0 w-full h-[50vh] -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="flex flex-col items-start gap-6">
<div className="inline-flex items-center gap-2 text-slate-500 text-sm font-medium border border-slate-200 bg-slate-50/50 px-3 py-1 rounded-full">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                    Available for projects
                </div>
<h1 className="text-5xl sm:text-6xl text-slate-900 tracking-tighter leading-[1.1] font-semibold">
                    Digital solutions for<br/>
<span className="text-slate-400">business growth.</span>
</h1>
<p className="text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                    My name is Ritaj Gul, and I provide creative and digital services to help businesses grow online. I specialize in turning complex ideas into simple, effective results.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all hover:translate-y-[-1px]" href="#contact">
                        Get in touch
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors" href="#services">
                        View services
                    </a>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto mb-24" id="services">
<h2 className="text-2xl text-slate-900 tracking-tight mb-8 font-semibold">Skills &amp; Services</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="group hover:border-slate-300 transition-all hover:shadow-sm bg-white border-slate-200 border rounded-xl p-6">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-700 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="lucide:pen-tool" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">Graphic Designing</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        I design creative posters, flyers, logos, and social media graphics that help brands look professional and attractive.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-700 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="lucide:share-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">Social Media Management</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        I manage social media pages, upload posts, handle comments, and help businesses stay active and connected with their audience.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-700 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="lucide:megaphone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">Ad Creation</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        I create simple and effective ads for social media to promote products, services, and businesses in a better way.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-700 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="lucide:layout-template" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">Page Management</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        I set up, organize, and professionally manage social media pages so clients can grow their presence and reach more people.
                    </p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto mb-24">
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center">
<div className="mx-auto w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center mb-4 text-slate-600">
<iconify-icon icon="lucide:heart-handshake" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">My Commitment</h3>
<p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                    My goal is to provide reliable, friendly, and professional services so that clients can easily understand my work and contact me for projects. I believe in clear communication and quality results.
                </p>
</div>
</section>

<section className="max-w-3xl mx-auto" id="contact">
<h2 className="text-2xl text-slate-900 tracking-tight mb-8 font-semibold">Let's work together</h2>
<p className="text-slate-600 mb-8 max-w-lg">
                Ready to start your project or have questions about my services? Feel free to contact me via Email or WhatsApp.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<a className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all group" href="mailto:ritajgul54@gmail.com">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-200 transition-colors">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-400">Email</span>
<span className="text-sm font-semibold text-slate-900">ritajgul54@gmail.com</span>
</div>
</div>
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/30 transition-all group" href="https://wa.me/923109880793" target="_blank">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-100 transition-colors">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-400 group-hover:text-cyan-600/70">WhatsApp</span>
<span className="text-sm font-semibold text-slate-900">+92 310 9880793</span>
</div>
</div>
<iconify-icon className="text-slate-400 group-hover:text-cyan-600 transition-colors" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</section>
</main>
<footer className="border-t border-slate-100 py-12 mt-auto">
<div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 Ritaj Gul. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-slate-600 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-600 transition-colors" href="#contact">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
