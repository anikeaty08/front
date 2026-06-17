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
      

<div className="bg-slate-950 text-white text-xs py-2.5 px-4 text-center">
<p><span className="font-medium text-slate-300">[Offer]:</span> With every AI Conversion Video System™, we'll give you €400 in ad credits – for even faster results!</p>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-lg font-semibold tracking-tighter text-slate-900" href="#">MAXIMUS</a>
</div>

<div className="hidden md:flex items-center space-x-6 text-xs font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">First-Class Partnership</a>
<a className="hover:text-slate-900 transition-colors" href="#">Speakers</a>
<a className="hover:text-slate-900 transition-colors" href="#">Events</a>
<a className="hover:text-slate-900 transition-colors" href="#">YouTube</a>
<span className="text-slate-300">|</span>
<a className="hover:text-slate-900 transition-colors" href="tel:+492519811567158">+49 251 981 156 7158</a>
<a className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-all shadow-sm" href="#consultation">Request a consultation</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</nav>

<header className="relative pt-20 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 mb-8">
<span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                For providers of high-priced services
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tighter mb-6 max-w-4xl mx-auto leading-tight">
                Ready for your next <br className="hidden sm:block"/> growth spurt?
            </h1>
<p className="text-lg sm:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                We'll build you an <span className="text-slate-900 font-medium">AI Conversion Video System™</span> that will provide the foundation for €100k/month. Whether starting, scaling, or looking for agency services.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
<a className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-lg font-medium text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:shadow-xl flex items-center justify-center gap-2" href="#consultation">
                    Request a vision call now
                    <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium text-sm hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-height="16" data-icon="lucide:play-circle" data-width="16" style={{strokeWidth: '1.5'}}></span>
                    Watch strategy video (8 min)
                </button>
</div>
<p className="text-sm text-slate-400">
                Benefit now, like <span className="text-slate-900 font-medium">302+ enthusiastic participants</span>, from the first holistic entrepreneurial partnership.
            </p>
</div>
</header>

<section className="border-y border-slate-100 bg-slate-50/50 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">302+</span>
<span className="text-xs text-slate-500 mt-2 uppercase tracking-wide">Systems Built</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">2.9x</span>
<span className="text-xs text-slate-500 mt-2 uppercase tracking-wide">Rev Increase</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">7M</span>
<span className="text-xs text-slate-500 mt-2 uppercase tracking-wide">Total Revenue</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">95%</span>
<span className="text-xs text-slate-500 mt-2 uppercase tracking-wide">Success Rate</span>
</div>
<div className="col-span-2 lg:col-span-1 flex flex-col items-center">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">3.3x</span>
<span className="text-xs text-slate-500 mt-2 uppercase tracking-wide">More Inquiries</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-8">More customers. More revenue. More independence.</h2>
<div className="space-y-6 text-base text-slate-600">
<p>Why should you request a no-obligation vision call now? <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">Limited Offer!</span></p>
<p>In a personal vision call, you'll work with one of our trained consultants to develop your individual AI Conversion Video System™. Build a stable and freely scalable system for high five-figure monthly revenues.</p>
<ul className="space-y-4 mt-8">
<li className="flex items-start gap-3">
<span className="flex-shrink-0 mt-1 text-slate-900"><span className="iconify" data-height="20" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span></span>
<span><strong className="text-slate-900 font-medium">Clarity instead of confusion:</strong> Understand what it REALLY takes to break your revenue barrier.</span>
</li>
<li className="flex items-start gap-3">
<span className="flex-shrink-0 mt-1 text-slate-900"><span className="iconify" data-height="20" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span></span>
<span><strong className="text-slate-900 font-medium">Individuality instead of mass production:</strong> Discover specifically what's holding you back.</span>
</li>
<li className="flex items-start gap-3">
<span className="flex-shrink-0 mt-1 text-slate-900"><span className="iconify" data-height="20" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span></span>
<span><strong className="text-slate-900 font-medium">Strategy instead of trial and error:</strong> Develop your personal strategic roadmap.</span>
</li>
<li className="flex items-start gap-3">
<span className="flex-shrink-0 mt-1 text-slate-900"><span className="iconify" data-height="20" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span></span>
<span><strong className="text-slate-900 font-medium">Implementation instead of theory:</strong> Turn knowledge into reality.</span>
</li>
<li className="flex items-start gap-3">
<span className="flex-shrink-0 mt-1 text-slate-900"><span className="iconify" data-height="20" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span></span>
<span><strong className="text-slate-900 font-medium">The secret to high-priced customers:</strong> Learn the system Sebastian uses to consistently acquire high-paying clients with just one video.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">3 Reasons Why Entrepreneurs Fail</h2>
<p className="text-slate-500">The problem isn't your effort. It's the approach.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-slate-900">
<span className="iconify" data-height="20" data-icon="lucide:puzzle" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">No Holistic System</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                        You're buying partial solutions. Marketing works, then sales collapse. Or vice versa. You optimize parts but never the whole, keeping you stuck at the same plateau.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-slate-900">
<span className="iconify" data-height="20" data-icon="lucide:bar-chart-2" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">No Predictable Funnel</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                        Without a predictable funnel, there is no peace of mind. Even if you know the theory, technical issues and lack of seamless integration cause failure.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-slate-900">
<span className="iconify" data-height="20" data-icon="lucide:users" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">No Experienced Partner</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                        You lack a sparring partner who has walked the path. Someone to take responsibility and ensure strategy translates into results, not just explanations.
                    </p>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-lg text-slate-900 font-medium mb-6">What if a system could simply solve all these problems?</p>
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-colors" href="#consultation">
                    Request a Vision Call Now
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<span className="text-blue-600 font-medium text-sm tracking-wide uppercase">Solution</span>
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mt-2">Your 7 Steps to Success</h2>
</div>
<div className="relative space-y-12">

<div className="absolute left-4 top-4 bottom-4 w-px bg-slate-100 md:left-1/2 md:-ml-px"></div>

<div className="relative z-10 space-y-12">

<div className="md:flex md:justify-between items-center group">
<div className="md:w-5/12 md:text-right order-1">
<h3 className="text-lg font-medium text-slate-900">1. Scalable Architecture</h3>
<p className="mt-2 text-sm text-slate-500">Identify bottlenecks and design a holistic architecture for seven-figure revenues.</p>
</div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-medium border-4 border-white shadow-sm order-2 mx-auto md:mx-0">1</div>
<div className="md:w-5/12 order-3 hidden md:block"></div>
</div>

<div className="md:flex md:justify-between items-center group">
<div className="md:w-5/12 order-1 hidden md:block"></div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-slate-900 text-xs font-medium border border-slate-200 shadow-sm order-2 mx-auto md:mx-0">2</div>
<div className="md:w-5/12 order-3">
<h3 className="text-lg font-medium text-slate-900">2. Irresistible Offer</h3>
<p className="mt-2 text-sm text-slate-500">AI-driven product design that makes your offer irresistible. Customers line up for you.</p>
</div>
</div>

<div className="md:flex md:justify-between items-center group">
<div className="md:w-5/12 md:text-right order-1">
<h3 className="text-lg font-medium text-slate-900">3. AI Conversion System</h3>
<p className="mt-2 text-sm text-slate-500">20-50 leads/week. Installed in 14 days. Visually premium brand elevation.</p>
</div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-slate-900 text-xs font-medium border border-slate-200 shadow-sm order-2 mx-auto md:mx-0">3</div>
<div className="md:w-5/12 order-3 hidden md:block"></div>
</div>

<div className="md:flex md:justify-between items-center group">
<div className="md:w-5/12 order-1 hidden md:block"></div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-slate-900 text-xs font-medium border border-slate-200 shadow-sm order-2 mx-auto md:mx-0">4</div>
<div className="md:w-5/12 order-3">
<h3 className="text-lg font-medium text-slate-900">4. Selling with Ease</h3>
<p className="mt-2 text-sm text-slate-500">No pushy tactics. Just clear decisions and order taking.</p>
</div>
</div>

<div className="md:flex md:justify-between items-center group">
<div className="md:w-5/12 md:text-right order-1">
<h3 className="text-lg font-medium text-slate-900">5. 1M+ Systems</h3>
<p className="mt-2 text-sm text-slate-500">Systematize processes so knowledge is stored within the business, not people.</p>
</div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-slate-900 text-xs font-medium border border-slate-200 shadow-sm order-2 mx-auto md:mx-0">5</div>
<div className="md:w-5/12 order-3 hidden md:block"></div>
</div>

<div className="md:flex md:justify-between items-center group">
<div className="md:w-5/12 order-1 hidden md:block"></div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-slate-900 text-xs font-medium border border-slate-200 shadow-sm order-2 mx-auto md:mx-0">6</div>
<div className="md:w-5/12 order-3">
<h3 className="text-lg font-medium text-slate-900">6. Scaling to 100k+</h3>
<p className="mt-2 text-sm text-slate-500">Recruit team, increase budgets. Invest more, achieve more, without chaos.</p>
</div>
</div>

<div className="md:flex md:justify-between items-center group">
<div className="md:w-5/12 md:text-right order-1">
<h3 className="text-lg font-medium text-slate-900">7. Entrepreneurial Identity</h3>
<p className="mt-2 text-sm text-slate-500">Work on leadership, focus, and energy to become the person who fuels growth.</p>
</div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-slate-900 text-xs font-medium border border-slate-200 shadow-sm order-2 mx-auto md:mx-0">7</div>
<div className="md:w-5/12 order-3 hidden md:block"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight mb-12">The Complete First-Class Mentoring</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
<div className="text-blue-400 mb-4"><span className="iconify" data-height="24" data-icon="lucide:layout-dashboard" data-width="24"></span></div>
<h3 className="text-base font-medium mb-2">Holistic Business System</h3>
<p className="text-sm text-slate-400">Comprehensive mentoring tailored to your business. No group lectures, just clear implementation.</p>
</div>
<div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
<div className="text-blue-400 mb-4"><span className="iconify" data-height="24" data-icon="lucide:book-open" data-width="24"></span></div>
<h3 className="text-base font-medium mb-2">Maximus Academy</h3>
<p className="text-sm text-slate-400">All frameworks and systems in one place. Knowledge stored in a structured way.</p>
</div>
<div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
<div className="text-blue-400 mb-4"><span className="iconify" data-height="24" data-icon="lucide:settings" data-width="24"></span></div>
<h3 className="text-base font-medium mb-2">Agency Services</h3>
<p className="text-sm text-slate-400">We plan, build, and implement your entire funnel from architecture to conversion.</p>
</div>
<div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
<div className="text-blue-400 mb-4"><span className="iconify" data-height="24" data-icon="lucide:video" data-width="24"></span></div>
<h3 className="text-base font-medium mb-2">AI Conversion Video</h3>
<p className="text-sm text-slate-400">No DIY. You receive a ready-to-use asset that generates leads.</p>
</div>
<div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
<div className="text-blue-400 mb-4"><span className="iconify" data-height="24" data-icon="lucide:check-square" data-width="24"></span></div>
<h3 className="text-base font-medium mb-2">Technical Acceptance</h3>
<p className="text-sm text-slate-400">Tracking, automation, systems – we check everything. You don't worry about tech.</p>
</div>
<div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
<div className="text-blue-400 mb-4"><span className="iconify" data-height="24" data-icon="lucide:users" data-width="24"></span></div>
<h3 className="text-base font-medium mb-2">VIP Support &amp; Partnership</h3>
<p className="text-sm text-slate-400">We share responsibility. We work as if it were our own business.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">What our participants say</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<div className="mb-4">
<h3 className="font-medium text-slate-900">Alexandra &amp; Christian</h3>
<p className="text-xs text-slate-500">Coaches</p>
</div>
<div className="mb-4 py-2 border-y border-slate-50">
<p className="text-sm font-semibold text-blue-600">€103,000 in 12 weeks</p>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Replaced €300-€500 courses with a premium offer. Without additional ads, they utilized their existing network and resources to scale rapidly.
                    </p>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<div className="mb-4">
<h3 className="font-medium text-slate-900">Angela</h3>
<p className="text-xs text-slate-500">Entrepreneur</p>
</div>
<div className="mb-4 py-2 border-y border-slate-50">
<p className="text-sm font-semibold text-blue-600">€45,000 in 30 days</p>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Was stagnating despite success. Regained structure, clarity, and team building. The seven-figure vision is now within reach.
                    </p>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<div className="mb-4">
<h3 className="font-medium text-slate-900">Kristina</h3>
<p className="text-xs text-slate-500">Service Provider</p>
</div>
<div className="mb-4 py-2 border-y border-slate-50">
<p className="text-sm font-semibold text-blue-600">Record revenue in Month 1</p>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Ads had failed previously. With the High-Price Evergreen System, she stabilized revenues and is now scaling further.
                    </p>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<div className="mb-4">
<h3 className="font-medium text-slate-900">Sebastian</h3>
<p className="text-xs text-slate-500">Coach</p>
</div>
<div className="mb-4 py-2 border-y border-slate-50">
<p className="text-sm font-semibold text-blue-600">From Idea to 10 Clients</p>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Had no product. Created one in 14 days. Webinar attracted 50+ participants and 10+ initial high-ticket sales.
                    </p>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<div className="mb-4">
<h3 className="font-medium text-slate-900">Susanne</h3>
<p className="text-xs text-slate-500">Consultant</p>
</div>
<div className="mb-4 py-2 border-y border-slate-50">
<p className="text-sm font-semibold text-blue-600">Tripled Revenue in 30 days</p>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Was stuck at a plateau. Implemented a strategy aligned with her values. Tripled revenue and began building a personal brand.
                    </p>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<div className="mb-4">
<h3 className="font-medium text-slate-900">Frank Herzberg</h3>
<p className="text-xs text-slate-500">Musician/Educator</p>
</div>
<div className="mb-4 py-2 border-y border-slate-50">
<p className="text-sm font-semibold text-blue-600">Revenue Doubled</p>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Transformed low-ticket courses into group coaching. Doubled sales with 34% less time investment.
                    </p>
</div>
</div>
<div className="mt-12 text-center">
<a className="text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors" href="#">Watch 22+ More Videos</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-8">Do you meet the requirements?</h2>
<div className="space-y-6">
<div className="flex gap-4">
<span className="text-slate-400 font-mono text-sm">01</span>
<p className="text-sm text-slate-600">You are ambitious, take responsibility, and are the architect of your own future.</p>
</div>
<div className="flex gap-4">
<span className="text-slate-400 font-mono text-sm">02</span>
<p className="text-sm text-slate-600">You sell products/services starting at €1,500 (or are willing to develop one).</p>
</div>
<div className="flex gap-4">
<span className="text-slate-400 font-mono text-sm">03</span>
<p className="text-sm text-slate-600">You are prepared to commit to implementing the system.</p>
</div>
<div className="flex gap-4">
<span className="text-slate-400 font-mono text-sm">04</span>
<p className="text-sm text-slate-600">You want to achieve new sales records.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2">
<div className="bg-slate-200 h-96 w-full rounded-lg flex items-center justify-center text-slate-400">

<span className="text-sm font-medium tracking-widest uppercase">Sebastian Skalski</span>
</div>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">About Sebastian Skalski and the Maximus System</h2>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    As a business consultant, marketing expert, and speaker, Sebastian delivers faster, measurable, and sustainable growth to entrepreneurs. With the help of his team, companies not only increase visibility, brand awareness, and profits, but also save hundreds of hours of their time.
                </p>
<a className="text-sm font-medium text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 transition-all" href="#consultation">Read more</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-16">Take the next step now</h2>
<div className="grid md:grid-cols-3 gap-12">
<div className="flex flex-col items-center">
<span className="text-5xl font-light text-slate-100 mb-6">01</span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Apply now!</h3>
<p className="text-xs text-slate-500 max-w-xs">Click the button below and request your exclusive initial consultation.</p>
</div>
<div className="flex flex-col items-center">
<span className="text-5xl font-light text-slate-100 mb-6">02</span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Receive invitation</h3>
<p className="text-xs text-slate-500 max-w-xs">If we see potential, you'll receive a personal invitation.</p>
</div>
<div className="flex flex-col items-center">
<span className="text-5xl font-light text-slate-100 mb-6">03</span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Celebrate success</h3>
<p className="text-xs text-slate-500 max-w-xs">86% of participants acquire their first inquiries in less than 29 days.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="consultation">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-8">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-lg border border-slate-200 p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900 text-sm">
                                What is the Maximus Profit &amp; Expansion System™?
                                <span className="transition group-open:rotate-180"><span className="iconify" data-icon="lucide:chevron-down"></span></span>
</summary>
<p className="text-slate-500 text-xs mt-3 leading-relaxed">It is a holistic growth system combining marketing, sales, and operations.</p>
</details>
<details className="group bg-white rounded-lg border border-slate-200 p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900 text-sm">
                                Who is it suitable for?
                                <span className="transition group-open:rotate-180"><span className="iconify" data-icon="lucide:chevron-down"></span></span>
</summary>
<p className="text-slate-500 text-xs mt-3 leading-relaxed">Providers of high-priced services looking to scale to 5 or 6 figure monthly revenues.</p>
</details>
<details className="group bg-white rounded-lg border border-slate-200 p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900 text-sm">
                                Do I need followers for this?
                                <span className="transition group-open:rotate-180"><span className="iconify" data-icon="lucide:chevron-down"></span></span>
</summary>
<p className="text-slate-500 text-xs mt-3 leading-relaxed">No. Our system is designed to generate leads without a massive organic following.</p>
</details>
<details className="group bg-white rounded-lg border border-slate-200 p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900 text-sm">
                                Does this also work for B2B?
                                <span className="transition group-open:rotate-180"><span className="iconify" data-icon="lucide:chevron-down"></span></span>
</summary>
<p className="text-slate-500 text-xs mt-3 leading-relaxed">Yes, many of our most successful clients operate in the B2B sector.</p>
</details>
</div>
</div>

<div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8">
<div className="mb-6">
<span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Application</span>
<h3 className="text-xl font-semibold text-slate-900 mt-1">We see potential in you!</h3>
<p className="text-sm text-slate-500 mt-2">Book an expansion call now.</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Your Name</label>
<input className="custom-input" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Your Email</label>
<input className="custom-input" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Phone Number</label>
<input className="custom-input" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div className="flex items-start gap-3 mt-4">
<div className="flex items-center h-5">
<input className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" id="consent" type="checkbox"/>
</div>
<div className="text-xs text-slate-500">
                                By submitting my information, I consent to being contacted by Maximus.
                            </div>
</div>
<button className="w-full bg-slate-900 text-white py-3 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200" type="submit">
                            Book an expansion call now
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-12 text-sm text-slate-500">
<div>
<h4 className="font-semibold text-slate-900 mb-4">Maximus</h4>
<p className="text-xs mb-2">Accelerate your success. We. Deliver. Results.</p>
<p className="text-xs">211+ successful participants</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-slate-900" href="#">Imprint</a></li>
<li><a className="hover:text-slate-900" href="#">Data protection</a></li>
<li><a className="hover:text-slate-900" href="#">Terms and Conditions</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Links</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-slate-900" href="#">Speaker</a></li>
<li><a className="hover:text-slate-900" href="#">Mallorca</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Social</h4>
<div className="flex gap-4">
<a className="hover:text-slate-900" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="hover:text-slate-900" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="hover:text-slate-900" href="#"><span className="iconify" data-icon="lucide:youtube" data-width="20"></span></a>
<a className="hover:text-slate-900" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 text-xs text-slate-400 text-center">
<p className="mb-2">Disclaimer: All case studies mentioned here are from real participants who share their genuine opinions. No one was compensated in any way for these videos!</p>
<p>© 2023 Maximus. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
