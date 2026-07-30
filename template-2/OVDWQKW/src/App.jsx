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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

        lucide.createIcons();
    
}
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/particlesmoment-kW3xyVny6weIhXJ3vbs2M2bB" width="100%"></iframe></div>

<div className="fixed inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#1a1a2e] opacity-90"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]"></div>
<div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\" cx="\&quot;30\&quot;" cy="\&quot;30\&quot;" fill="\&quot;none\&quot;" fillOpacity="\&quot;0.03\&quot;%3E%3Ccircle" fillRule="\&quot;evenodd\&quot;" height="\&quot;60\&quot;" viewBox="\&quot;0" xmlns="\&quot;http://www.w3.org/2000/svg\&quot;%3E%3Cg"></div>
</div>

<nav className="relative z-20 animate-slide-up">
<div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-6">
<a className="flex items-center gap-3 group" href="#">
<div className="inline-flex w-9 h-9 group-hover:from-blue-400 group-hover:to-cyan-500 transition-all duration-300 rounded-xl items-center justify-center bg-gradient-to-tr from-blue-500 to-cyan-400">
<svg className="lucide lucide-code w-5 h-5 text-white" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<span className="font-semibold text-xl tracking-tight font-geist" style={{}}>ReactMaster</span>
</a>
<ul className="hidden lg:flex gap-8 text-sm text-slate-300 items-center">
<li><a className="hover:text-white transition-colors duration-200 font-geist" href="#" style={{}}>Courses</a></li>
<li><a className="hover:text-white transition-colors duration-200 font-geist" href="#" style={{}}>Learning Path</a></li>
<li className=""><a className="hover:text-white transition-colors duration-200 flex items-center gap-1 font-geist" href="#" style={{}}>Resources <svg className="lucide lucide-chevron-down w-3 h-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg></a></li>
<li className=""><a className="hover:text-white transition-colors duration-200 font-geist" href="#" style={{}}>Community</a></li>
<li><a className="hover:text-white transition-colors duration-200 font-geist" href="#" style={{}}>Pricing</a></li>
</ul>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors duration-200 font-geist" style={{}}>Sign In</button>
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-200 text-sm font-medium backdrop-blur-sm">
<span className="hidden sm:inline font-geist" style={{}}>Start Learning</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<button className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/10 transition-colors duration-200">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative z-10 flex-grow flex items-center">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
<div className="animate-slide-up animate-delay-100">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-sm font-medium mb-8">
<svg className="lucide lucide-sparkles w-4 h-4 text-blue-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
<span className="font-geist" style={{}}>New: React 18 & Server Components</span>
</div>
</div>
<h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-tight animate-slide-up animate-delay-200 text-4xl tracking-tighter font-space-grotesk" style={{}}>
                Master React
                <br className="hidden sm:block" />
<span className="bg-clip-text text-transparent tracking-tighter font-space-grotesk bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400" style={{}}>Development</span>
</h1>
<p className="sm:text-xl md:text-2xl max-w-3xl leading-relaxed animate-slide-up animate-delay-300 text-lg font-light text-slate-400 font-space-grotesk mt-8 mr-auto ml-auto" style={{}}>
                Build modern, production-ready React applications with our comprehensive course. From fundamentals to advanced patterns, master the skills top companies demand.
            </p>

<div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up animate-delay-400">
<div className="flex items-center gap-3 justify-center sm:justify-start">
<div className="w-8 h-8 flex bg-green-500/20 rounded-xl items-center justify-center">
<svg className="lucide lucide-play-circle w-4 h-4 text-green-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
</div>
<span className="text-sm text-slate-300 font-geist" style={{}}>40+ Hours of Content</span>
</div>
<div className="flex items-center gap-3 justify-center sm:justify-start">
<div className="w-8 h-8 flex bg-blue-400/20 rounded-xl items-center justify-center">
<svg className="lucide lucide-code-2 w-4 h-4 text-blue-400" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist" style={{}}>Hands-on Projects</span>
</div>
<div className="flex items-center gap-3 justify-center sm:justify-start">
<div className="w-8 h-8 flex bg-purple-400/20 rounded-xl items-center justify-center">
<svg className="lucide lucide-award w-4 h-4 text-purple-400" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="8"></circle></svg>
</div>
<span className="text-sm text-slate-300 font-geist" style={{}}>Certificate of Completion</span>
</div>
</div>

<div className="mt-16 max-w-2xl mx-auto animate-slide-up animate-delay-500">
<form className="flex flex-col sm:flex-row gap-4">
<div className="flex-1 relative">
<input className="w-full px-6 py-4 text-base bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-white/20 transition-all duration-200" placeholder="Enter your email address" required type="email" />
</div>
<button className="relative gradient-border-button w-full sm:w-auto" type="submit">
<div className="button-inner inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-geist" style={{'boxShadow': `inset 0 -2px 25px -4px rgba(255, 255, 255, 0.3)`}}>
<span className="font-geist">Start Learning</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>

</button>
</form>
<p className="mt-4 text-sm text-slate-500 font-geist" style={{}}>
                    Free preview lessons • No credit card required • Join 50,000+ developers
                </p>
</div>

<div className="mt-20 relative animate-slide-up animate-delay-600">
<div className="relative mx-auto max-w-6xl">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
<div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
<div className="aspect-video flex bg-[url(/assets/9d25c2d1-8a41-471b-bac8-c69712d13bb1_1600w.jpg)] bg-cover items-center justify-center">
<div className="text-center">
<div className="w-20 h-20 flex bg-blue-500/20 rounded-full mr-auto mb-4 ml-auto backdrop-blur-lg items-center justify-center">
<svg className="lucide lucide-play w-[32px] h-[32px] text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `1.5`, 'width': `32px`, 'height': `32px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-20 h-20 sm:w-24 sm:h-24 flex bg-gradient-to-br from-slate-900 to-slate-700 border-white/10 border rounded-3xl shadow-xl items-center justify-center">
<svg className="lucide lucide-book-open w-8 h-8 text-white" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-20 h-20 sm:w-24 sm:h-24 flex bg-gradient-to-br from-slate-900 to-slate-700 border-white/10 border rounded-3xl shadow-xl items-center justify-center">
<svg className="lucide lucide-trending-up w-8 h-8 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>

<div className="mt-16 animate-slide-up animate-delay-600">
<p className="text-sm text-slate-500 mb-8 font-geist" style={{}}>Developers from these companies trust ReactMaster</p>
<div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-r from-blue-500 to-cyan-500"></div>
<span className="text-sm font-medium font-geist" style={{}}>Microsoft</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-r from-green-500 to-blue-500"></div>
<span className="text-sm font-medium font-geist" style={{}}>Google</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-r from-purple-500 to-pink-500"></div>
<span className="text-sm font-medium font-geist" style={{}}>Meta</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-r from-orange-500 to-red-500"></div>
<span className="text-sm font-medium font-geist" style={{}}>Netflix</span>
</div>
</div>
</div>
</div>
</section><section className="relative z-10 bg-gradient-to-b from-transparent to-slate-900/20 pt-24 pb-24">
<div className="max-w-7xl sm:px-6 mr-auto ml-auto pr-4 pl-4">

<div className="text-center mb-20 animate-slide-up">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-sm font-medium mb-8">
<svg className="w-4 h-4 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
<span className="font-geist">Simple Pricing</span>
</div>
<h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 font-space-grotesk" style={{}}>
                Choose Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 font-space-grotesk" style={{}}>Learning Path</span>
</h2>
<p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-geist">
                Start free and upgrade when you're ready. All plans include lifetime access to purchased courses.
            </p>
</div>

<div className="flex items-center justify-center mb-16 animate-slide-up animate-delay-200">
<div className="bg-white/5 border border-white/10 rounded-2xl p-1 backdrop-blur-sm">
<div className="flex">
<button className="px-6 py-3 text-sm font-medium rounded-xl bg-white text-slate-900 transition-all duration-200 font-geist">
                        Monthly
                    </button>
<button className="px-6 py-3 text-sm font-medium rounded-xl text-slate-400 hover:text-white transition-all duration-200 font-geist">
                        Annual <span className="text-green-400 text-xs ml-1 font-geist">Save 30%</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="relative animate-slide-up animate-delay-300">
<div className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
<div className="text-center mb-8">
<h3 className="text-2xl mb-2 font-space-grotesk" style={{}}>Free</h3>
<div className="mb-4">
<span className="text-4xl font-space-grotesk" style={{}}>$0</span>
<span className="text-slate-400 font-geist">/month</span>
</div>
<p className="text-slate-400 font-geist">Perfect for getting started</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist">3 free preview lessons</span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist">Community access</span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist">Basic project templates</span>
</li>
</ul>
<button className="w-full py-4 px-6 rounded-2xl border border-white/20 text-white hover:bg-white/5 transition-all duration-200 font-medium font-geist">
                        Get Started Free
                    </button>
</div>
</div>

<div className="relative animate-slide-up animate-delay-400 lg:scale-105">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-75"></div>
<div className="relative h-full bg-slate-900 border border-blue-500/50 rounded-3xl p-8 backdrop-blur-sm">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-medium text-white font-geist">
                            Most Popular
                        </div>
</div>
<div className="text-center mb-8">
<h3 className="text-2xl mb-2 font-space-grotesk" style={{}}>Pro</h3>
<div className="mb-4">
<span className="text-4xl font-space-grotesk" style={{}}>$29</span>
<span className="text-slate-400 font-geist">/month</span>
</div>
<p className="text-slate-400 font-geist">Everything you need to master React</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist">All courses & content</span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist">Premium project templates</span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist">Priority support</span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist">Certificates of completion</span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist">Live coding sessions</span>
</li>
</ul>
<button className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-xl hover:scale-[1.02] transition-all duration-200 font-geist">
                        Start Pro Plan
                    </button>
</div>
</div>

<div className="relative animate-slide-up animate-delay-500">
<div className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
<div className="text-center mb-8">
<h3 className="text-2xl mb-2 font-space-grotesk" style={{}}>Enterprise</h3>
<div className="mb-4">
<span className="text-4xl font-space-grotesk" style={{}}>$99</span>
<span className="text-slate-400 font-geist">/month</span>
</div>
<p className="text-slate-400 font-geist">For teams and organizations</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist">Everything in Pro</span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist">Up to 50 team members</span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist">Custom onboarding</span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist">Dedicated account manager</span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist">Advanced analytics</span>
</li>
</ul>
<button className="w-full py-4 px-6 rounded-2xl border border-white/20 text-white hover:bg-white/5 transition-all duration-200 font-medium font-geist">
                        Contact Sales
                    </button>
</div>
</div>
</div>

<div className="mt-32 max-w-4xl mx-auto animate-slide-up animate-delay-600">
<div className="text-center mb-16">
<h3 className="text-3xl tracking-tight mb-4 font-space-grotesk" style={{}}>Frequently Asked Questions</h3>
<p className="text-slate-400 font-geist">Everything you need to know about our pricing and plans.</p>
</div>
<div className="space-y-6">
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
<div className="flex items-center justify-between">
<h4 className="text-lg font-medium font-geist">Can I switch plans anytime?</h4>
<svg className="w-5 h-5 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<p className="text-slate-400 mt-4 font-geist">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any differences.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
<div className="flex items-center justify-between">
<h4 className="text-lg font-medium font-geist">Is there a free trial?</h4>
<svg className="w-5 h-5 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
<div className="flex items-center justify-between">
<h4 className="text-lg font-medium font-geist">What payment methods do you accept?</h4>
<svg className="w-5 h-5 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
<div className="flex flex-col lg:flex-row justify-between gap-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-tr from-blue-500 to-cyan-400">
<svg className="lucide lucide-code w-4 h-4 text-white" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<span className="font-medium text-lg font-geist" style={{}}>ReactMaster</span>
</div>
<div className="text-sm text-slate-400 font-geist" style={{}}>
                        © 2024 ReactMaster. All rights reserved.
                    </div>
</div>
<div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm">
<a className="text-slate-400 hover:text-white transition-colors duration-200 font-geist" href="#" style={{}}>Privacy Policy</a>
<a className="text-slate-400 hover:text-white transition-colors duration-200 font-geist" href="#" style={{}}>Terms of Service</a>
<a className="text-slate-400 hover:text-white transition-colors duration-200 font-geist" href="#" style={{}}>Help Center</a>
<a className="text-slate-400 hover:text-white transition-colors duration-200 font-geist" href="#" style={{}}>Contact</a>
<div className="flex items-center gap-4">
<a className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200" href="#">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
<a className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'strokeWidth': `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
