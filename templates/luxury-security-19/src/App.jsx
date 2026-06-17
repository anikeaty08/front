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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-2xl font-semibold tracking-tighter text-slate-900">TRUSSIER</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-amber-700 transition-colors" href="#reservation">
<i className="w-4 h-4 text-amber-600" data-lucide="lock"></i>
                Client Access
            </a>
</div>
</nav>

<header className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-slate-900 text-white" id="hero">

<div className="absolute inset-0 z-0 opacity-60">
<img alt="Secure Vault Environment" className="w-full h-full object-cover bg-zoom grayscale mix-blend-overlay" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

<h1 className="text-[12vw] md:text-[8vw] leading-none font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 opacity-0 animate-fade-in mb-8">
                TRUSSIER
            </h1>
<div className="space-y-4 md:space-y-6">
<p className="text-2xl md:text-4xl font-light text-slate-200 tracking-tight opacity-0 animate-fade-in-delay-1">
                    Maximum Security.
                </p>
<p className="text-2xl md:text-4xl font-light text-slate-200 tracking-tight opacity-0 animate-fade-in-delay-2">
                    Complete Anonymity.
                </p>
<p className="text-2xl md:text-4xl font-light text-amber-500 tracking-tight opacity-0 animate-fade-in-delay-3">
                    Robust Supervision.
                </p>
</div>
<div className="mt-16 flex justify-center opacity-0 animate-fade-in-delay-3">
<i className="w-8 h-8 text-white/30 animate-bounce" data-lucide="chevron-down"></i>
</div>
</div>
</header>

<section className="py-32 px-6 max-w-4xl mx-auto text-center" id="intro">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-8 tracking-tight leading-tight">
            TRUSSIER offers a safe deposit box in Monaco.
        </h2>
<p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            As a customer you receive unlimited, anonymous, and fully private storage at our secure vault in Monaco.
        </p>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="services_overview">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

<div className="group cursor-default">
<div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
<h3 className="text-lg font-medium text-slate-900">Secure Vault Storage</h3>
<i className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" data-lucide="shield-check"></i>
</div>
<p className="text-slate-500 leading-relaxed text-lg">
                    State-of-the-art vaults with reinforced construction and continuous surveillance.
                </p>
</div>

<div className="group cursor-default">
<div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
<h3 className="text-lg font-medium text-slate-900">Anonymous Storage Services</h3>
<i className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" data-lucide="eye-off"></i>
</div>
<p className="text-slate-500 leading-relaxed text-lg">
                    Complete anonymity without personal identification requirements.
                </p>
</div>

<div className="group cursor-default">
<div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
<h3 className="text-lg font-medium text-slate-900">Framework Insurance Policy</h3>
<i className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" data-lucide="file-check"></i>
</div>
<p className="text-slate-500 leading-relaxed text-lg">
                    Insurance coverage aligned with international security standards.
                </p>
</div>
</div>
</section>

<section className="py-32 bg-slate-50" id="why_trussier">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 mb-16 tracking-tight text-center">Why TRUSSIER</h2>
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 py-6 px-8">
<div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Features</div>
<div className="text-sm font-semibold text-amber-700 uppercase tracking-wider text-center">TRUSSIER</div>
<div className="text-sm font-semibold text-slate-400 uppercase tracking-wider text-center">Traditional Banks</div>
</div>

<div className="grid grid-cols-3 py-6 px-8 border-b border-slate-100 items-center hover:bg-slate-50/50 transition-colors">
<div className="text-slate-900 font-medium">Security</div>
<div className="text-amber-500 flex justify-center gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<div className="text-slate-300 flex justify-center gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>

<div className="grid grid-cols-3 py-6 px-8 border-b border-slate-100 items-center hover:bg-slate-50/50 transition-colors">
<div className="text-slate-900 font-medium">Insurance Coverage</div>
<div className="text-amber-500 flex justify-center gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<div className="text-slate-300 flex justify-center gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>

<div className="grid grid-cols-3 py-6 px-8 items-center hover:bg-slate-50/50 transition-colors">
<div className="text-slate-900 font-medium">Anonymity</div>
<div className="text-amber-500 flex justify-center gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<div className="text-slate-300 flex justify-center gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-0 flex flex-col md:flex-row h-auto md:h-[600px] border-y border-slate-200" id="news">
<div className="w-full md:w-1/2 bg-slate-900 relative overflow-hidden">
<img alt="Vault Tech" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
</div>
<div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-white">
<div className="max-w-md">
<span className="inline-block py-1 px-3 bg-amber-50 text-amber-700 text-xs font-semibold tracking-wider uppercase rounded mb-6">News</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">BREAKING NEWS</h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                    International coverage highlighting the importance of secure, anonymous asset protection in modern environments.
                </p>
<button className="flex items-center text-slate-900 font-medium hover:text-amber-700 transition-colors">
                    Read Coverage <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-32 max-w-7xl mx-auto px-6" id="our_services">
<div className="grid md:grid-cols-3 gap-16">

<div className="space-y-6">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-slate-900" data-lucide="lock"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900">Secure Vault Storage</h3>
<ul className="space-y-4">
<li className="flex items-start text-slate-600">
<i className="w-5 h-5 text-amber-500 mr-3 mt-0.5" data-lucide="check"></i>
                        High-level physical security
                    </li>
<li className="flex items-start text-slate-600">
<i className="w-5 h-5 text-amber-500 mr-3 mt-0.5" data-lucide="check"></i>
                        Continuous monitoring
                    </li>
<li className="flex items-start text-slate-600">
<i className="w-5 h-5 text-amber-500 mr-3 mt-0.5" data-lucide="check"></i>
                        Controlled access
                    </li>
</ul>
</div>

<div className="space-y-6">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-slate-900" data-lucide="user-x"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900">Anonymous Storage Services</h3>
<ul className="space-y-4">
<li className="flex items-start text-slate-600">
<i className="w-5 h-5 text-amber-500 mr-3 mt-0.5" data-lucide="check"></i>
                        No identity disclosure
                    </li>
<li className="flex items-start text-slate-600">
<i className="w-5 h-5 text-amber-500 mr-3 mt-0.5" data-lucide="check"></i>
                        Discreet access procedures
                    </li>
<li className="flex items-start text-slate-600">
<i className="w-5 h-5 text-amber-500 mr-3 mt-0.5" data-lucide="check"></i>
                        Privacy-first design
                    </li>
</ul>
</div>

<div className="space-y-6">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-slate-900" data-lucide="shield"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900">Framework Insurance Policy</h3>
<ul className="space-y-4">
<li className="flex items-start text-slate-600">
<i className="w-5 h-5 text-amber-500 mr-3 mt-0.5" data-lucide="check"></i>
                        Risk assessment
                    </li>
<li className="flex items-start text-slate-600">
<i className="w-5 h-5 text-amber-500 mr-3 mt-0.5" data-lucide="check"></i>
                        Insurance-backed storage
                    </li>
<li className="flex items-start text-slate-600">
<i className="w-5 h-5 text-amber-500 mr-3 mt-0.5" data-lucide="check"></i>
                        International compliance
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 mb-12 tracking-tight text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-lg border border-slate-200 open:border-amber-200 open:ring-1 open:ring-amber-100 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none font-medium text-slate-900">
                        What services do you offer?
                        <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed">
                        We offer secure and anonymous storage of valuables in high-security vaults.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 open:border-amber-200 open:ring-1 open:ring-amber-100 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none font-medium text-slate-900">
                        How is my safe deposit box protected?
                        <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed">
                        Through reinforced vault construction, supervision, and insurance frameworks.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 open:border-amber-200 open:ring-1 open:ring-amber-100 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none font-medium text-slate-900">
                        Can I remain anonymous?
                        <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed">
                        Yes, TRUSSIER prioritizes complete anonymity for its clients.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 open:border-amber-200 open:ring-1 open:ring-amber-100 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none font-medium text-slate-900">
                        What is the workflow?
                        <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed">
                        Clients reserve, access, and manage storage through discreet and secure processes.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6" id="reservation">
<div className="max-w-7xl mx-auto">
<div className="bg-slate-900 rounded-2xl overflow-hidden relative">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-600 via-slate-900 to-slate-900"></div>
<div className="relative z-10 p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="text-left max-w-xl">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Reserve your safe deposit</h2>
<p className="text-xl text-slate-400 mb-8 flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="phone"></i>
                            Call for reservation
                        </p>
<div className="inline-flex items-center text-amber-500 font-medium border-b border-amber-500/30 pb-1 cursor-pointer hover:text-amber-400 transition-colors">
                            Contact Support
                        </div>
</div>
<div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-xl min-w-[300px] text-center shadow-2xl">
<div className="text-slate-300 text-sm uppercase tracking-wider font-medium mb-2">Safe deposit box DIN A4</div>
<div className="text-5xl font-semibold text-white mb-2">1.900€</div>
<div className="text-slate-400 text-sm">per year</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-xl mx-auto px-6" id="contact">
<div className="space-y-8">
<div className="grid gap-6">
<div className="relative">
<label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400" type="text"/>
</div>
<div className="relative">
<label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400" type="email"/>
</div>
<div className="relative">
<label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400 resize-none" rows="4"></textarea>
</div>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-4 rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                Send Message
                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<footer className="border-t border-slate-200 bg-white py-12 px-6" id="footer">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<div className="text-xl font-semibold text-slate-900 mb-2">TRUSSIER</div>
<div className="text-slate-400 text-sm">© 2024 Trussier. All rights reserved.</div>
</div>
<div className="flex gap-12 text-sm text-slate-500">
<div className="flex flex-col gap-2">
<span className="font-semibold text-slate-900">Location</span>
<span>Monaco</span>
</div>
<div className="flex flex-col gap-2">
<span className="font-semibold text-slate-900">Contact</span>
<span>info@trussier.com</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
