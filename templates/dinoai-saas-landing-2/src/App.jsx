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
      

<section className="relative min-h-[90vh] flex flex-col bg-gradient-to-br from-[#cce5ff] via-[#fdfbf7] to-[#e6ecf5] overflow-hidden">

<nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
<div className="text-lg font-medium tracking-tight text-slate-900">
                DinoAI
            </div>
<a className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-transparent px-5 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-900/5 backdrop-blur-sm" href="#">
                Sign in
            </a>
</nav>

<div className="relative z-10 flex-grow flex items-center max-w-7xl mx-auto w-full px-6 py-12 md:py-0">
<div className="flex flex-col md:flex-row w-full items-center">

<div className="w-full md:w-[55%] hidden md:block">

<div className="w-full h-[500px] bg-transparent"></div>
</div>

<div className="w-full md:w-[45%] flex flex-col items-start space-y-6 md:pl-12">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                        Turn ideas<br/>
                        into <span className="font-serif-italic italic font-normal tracking-normal text-slate-800">clarity</span>
</h1>
<p className="text-lg text-slate-700 max-w-md leading-relaxed font-normal">
                        Your thoughts deserve a better home. DinoAI handles the groundwork — so you can think clearly and move forward with intention. Spend less time organizing — and more time doing.
                    </p>
<a className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-lg font-medium text-slate-900 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-all hover:shadow-[0_4px_20px_-3px_rgba(6,81,237,0.15)] hover:-translate-y-0.5 mt-2" href="#">
                        Get started
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#c69a7b]/20 to-transparent pointer-events-none"></div>
</section>

<section className="border-y border-slate-100 bg-white py-12">
<div className="mx-auto max-w-7xl px-6">
<p className="text-center text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Trusted by thoughtful teams</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">

<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="triangle" strokeWidth="1.5"></i> <span className="text-xl font-medium tracking-tight">Acme</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="circle" strokeWidth="1.5"></i> <span className="text-xl font-medium tracking-tight">Globex</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="hexagon" strokeWidth="1.5"></i> <span className="text-xl font-medium tracking-tight">Soylent</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="square" strokeWidth="1.5"></i> <span className="text-xl font-medium tracking-tight">Initech</span></div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24 md:py-32">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    Designed for the way your brain actually works.
                </h2>
<p className="text-lg text-slate-600 mb-16">
                    Stop fighting your tools. We built a system that adapts to your thinking process, bringing order to chaos without adding friction.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm transition-shadow hover:shadow-md">
<div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Instant Capture</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        Jot down ideas at the speed of thought. Our intelligent parser instantly categorizes and links concepts before you even finish typing.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm transition-shadow hover:shadow-md">
<div className="h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6 text-orange-600">
<i className="w-6 h-6" data-lucide="git-merge" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Auto-Structuring</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        Watch as unstructured notes organically form into clear outlines, projects, and actionable tasks without manual tagging.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm transition-shadow hover:shadow-md">
<div className="h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6 text-purple-600">
<i className="w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Frictionless Recall</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        Never lose a thought again. Powerful semantic search understands what you mean, not just the exact keywords you used.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative h-[500px] rounded-3xl bg-slate-100 overflow-hidden border border-slate-200 shadow-sm">

<div className="absolute inset-x-4 top-4 bottom-4 rounded-2xl bg-white shadow-sm border border-slate-100 p-6 flex flex-col gap-4">
<div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="h-4 w-24 bg-slate-100 rounded-full"></div>
</div>
<div className="h-8 w-3/4 bg-slate-100 rounded-lg"></div>
<div className="h-4 w-full bg-slate-50 rounded-md mt-4"></div>
<div className="h-4 w-5/6 bg-slate-50 rounded-md"></div>
<div className="h-4 w-4/6 bg-slate-50 rounded-md"></div>
<div className="mt-8 flex gap-4">
<div className="h-20 w-1/2 border border-slate-100 rounded-xl bg-slate-50/50 p-4 flex flex-col gap-2">
<div className="h-3 w-12 bg-blue-100 rounded"></div>
<div className="h-3 w-full bg-slate-100 rounded"></div>
</div>
<div className="h-20 w-1/2 border border-slate-100 rounded-xl bg-slate-50/50 p-4 flex flex-col gap-2">
<div className="h-3 w-16 bg-purple-100 rounded"></div>
<div className="h-3 w-4/5 bg-slate-100 rounded"></div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 flex flex-col items-start">
<div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 mb-6">
                        Seamless workflow
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        From fleeting thought to finished project.
                    </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        We blur the lines between note-taking, task management, and document creation. Everything lives in one fluid workspace that molds to your current objective.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 rounded-full bg-slate-100 p-1 text-slate-600">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-slate-700">Connect ideas bi-directionally.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 rounded-full bg-slate-100 p-1 text-slate-600">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-slate-700">Turn paragraphs into tracked tasks instantly.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 rounded-full bg-slate-100 p-1 text-slate-600">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-slate-700">Collaborate with multiplayer editing.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 py-24 text-center">
<div className="mx-auto max-w-3xl px-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Ready to clear your mind?
            </h2>
<p className="text-xl text-slate-400 mb-10 font-light">
                Join thousands of thinkers who have found a better home for their ideas.
            </p>
<form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
<input className="flex-grow rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Enter your email" required="" type="email"/>
<button className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-lg font-medium text-slate-900 hover:bg-slate-100 transition-colors whitespace-nowrap" type="submit">
                    Start for free
                </button>
</form>
<p className="text-sm text-slate-500 mt-6">No credit card required. 14-day free trial.</p>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 text-lg">
<div className="col-span-2 lg:col-span-2">
<div className="text-xl font-medium tracking-tight text-slate-900 mb-4">DinoAI</div>
<p className="text-slate-500 max-w-xs mb-6 text-base">
                        Building the cognitive infrastructure for the modern knowledge worker.
                    </p>
<div className="flex space-x-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="github" strokeWidth="1.5"></i></a>
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i></a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Product</h4>
<ul className="space-y-3 text-slate-600 text-base">
<li><a className="hover:text-slate-900 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-slate-600 text-base">
<li><a className="hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Legal</h4>
<ul className="space-y-3 text-slate-600 text-base">
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-500">© 2024 DinoAI Inc. All rights reserved.</p>
<div className="flex items-center gap-2 text-sm text-slate-500">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    All systems operational
                </div>
</div>
</div>
</footer>



    </>
  );
}
