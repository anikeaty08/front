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
      

<nav className="bg-white border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center">
<div className="font-instrument text-xl tracking-tight font-semibold text-gray-900">Omnipresence</div>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#results">Results</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#contact">Contact</a>
<a className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors" href="#contact">
                        Get Started
                    </a>
</div>
<button className="md:hidden">
<i className="w-6 h-6 text-gray-600" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="bg-white border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="fade-in">
<div className="inline-flex items-center px-3 py-1 bg-sky-50 border border-sky-200 rounded-full mb-6">
<span className="text-xs font-medium text-sky-700 tracking-wide">AI-POWERED SEARCH OPTIMIZATION</span>
</div>
<h1 className="font-instrument text-4xl lg:text-5xl tracking-tight text-gray-900 mb-6 leading-tight">
                        Rank #1 in AI Search Results &amp; Never Miss a Customer Again
                    </h1>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        We help small businesses dominate AI-powered search engines with AI Sight, automate repetitive workflows, and ensure every call and email gets an instant response—so you can focus on what matters most.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors" href="#contact">
                            Start Growing Today
                            <i className="w-5 h-5 ml-2" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50 rounded-lg transition-colors" href="#results">
                            View Case Studies
                        </a>
</div>
<div className="grid grid-cols-3 gap-6 lg:gap-8 pt-8 border-t border-gray-200">
<div>
<div className="font-instrument text-3xl lg:text-4xl text-gray-900 mb-1">98%</div>
<div className="text-sm text-gray-600">Response Rate</div>
</div>
<div>
<div className="font-instrument text-3xl lg:text-4xl text-gray-900 mb-1">3.2x</div>
<div className="text-sm text-gray-600">Lead Growth</div>
</div>
<div>
<div className="font-instrument text-3xl lg:text-4xl text-gray-900 mb-1">24/7</div>
<div className="text-sm text-gray-600">Automation</div>
</div>
</div>
</div>
<div className="fade-in-delay-1 relative">
<div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-xl">
<img alt="Team collaboration" className="w-full h-auto" src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&amp;h=600&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-gray-200 p-4 max-w-xs">
<div className="flex items-start gap-3">
<div className="bg-green-100 rounded-lg p-2">
<i className="w-5 h-5 text-green-600" data-lucide="check-circle"></i>
</div>
<div>
<div className="text-sm font-medium text-gray-900">AI Search Ranked</div>
<div className="text-xs text-gray-600">Your business now appears #1</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 border-b border-gray-200" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
<div className="text-center mb-16 fade-in-delay-2">
<h2 className="font-instrument text-3xl lg:text-4xl tracking-tight text-gray-900 mb-4">
                    What We Do Best
                </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Three core services designed to transform how customers find and interact with your business
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 fade-in-delay-3">
<div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-sky-300 hover:shadow-lg transition-all">
<div className="bg-sky-50 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-sky-600" data-lucide="sparkles"></i>
</div>
<h3 className="font-instrument text-xl text-gray-900 mb-3">AI Sight Optimization</h3>
<p className="text-gray-600 leading-relaxed mb-4">
                        Get your business ranked #1 on ChatGPT, Perplexity, and other AI search engines where your customers are looking with our proprietary AI Sight tool.
                    </p>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span>AI Sight strategy &amp; implementation</span>
</li>
<li className="flex items-start gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span>Content optimization for AI</span>
</li>
<li className="flex items-start gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span>Monthly ranking reports</span>
</li>
</ul>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-sky-300 hover:shadow-lg transition-all">
<div className="bg-sky-50 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-sky-600" data-lucide="zap"></i>
</div>
<h3 className="font-instrument text-xl text-gray-900 mb-3">Workflow Automation</h3>
<p className="text-gray-600 leading-relaxed mb-4">
                        Eliminate repetitive tasks with intelligent automation that saves hours every week and reduces human error.
                    </p>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span>Custom automation setup</span>
</li>
<li className="flex items-start gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span>CRM &amp; tool integration</span>
</li>
<li className="flex items-start gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span>Process documentation</span>
</li>
</ul>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-sky-300 hover:shadow-lg transition-all">
<div className="bg-sky-50 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-sky-600" data-lucide="phone-call"></i>
</div>
<h3 className="font-instrument text-xl text-gray-900 mb-3">24/7 Response System</h3>
<p className="text-gray-600 leading-relaxed mb-4">
                        Never miss a lead again with AI-powered systems that respond to calls and emails instantly, any time of day.
                    </p>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span>AI phone answering</span>
</li>
<li className="flex items-start gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span>Email auto-response</span>
</li>
<li className="flex items-start gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span>Lead qualification &amp; routing</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-white border-b border-gray-200" id="process">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
<div className="text-center mb-16">
<h2 className="font-instrument text-3xl lg:text-4xl tracking-tight text-gray-900 mb-4">
                    How It Works
                </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    A proven process to get your business AI-ready in weeks, not months
                </p>
</div>
<div className="grid md:grid-cols-4 gap-8">
<div className="relative">
<div className="bg-sky-100 text-sky-600 rounded-full w-12 h-12 flex items-center justify-center font-semibold mb-4 font-instrument text-xl">1</div>
<h3 className="font-instrument text-lg text-gray-900 mb-2">Discovery Call</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                        We analyze your current presence and identify optimization opportunities in AI search.
                    </p>
</div>
<div className="relative">
<div className="bg-sky-100 text-sky-600 rounded-full w-12 h-12 flex items-center justify-center font-semibold mb-4 font-instrument text-xl">2</div>
<h3 className="font-instrument text-lg text-gray-900 mb-2">Custom Strategy</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                        Receive a tailored plan for AI Sight, automation, and response systems built for your business.
                    </p>
</div>
<div className="relative">
<div className="bg-sky-100 text-sky-600 rounded-full w-12 h-12 flex items-center justify-center font-semibold mb-4 font-instrument text-xl">3</div>
<h3 className="font-instrument text-lg text-gray-900 mb-2">Implementation</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                        Our team deploys all systems, integrations, and optimizations with minimal disruption.
                    </p>
</div>
<div className="relative">
<div className="bg-sky-100 text-sky-600 rounded-full w-12 h-12 flex items-center justify-center font-semibold mb-4 font-instrument text-xl">4</div>
<h3 className="font-instrument text-lg text-gray-900 mb-2">Growth &amp; Support</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                        Continuous monitoring, optimization, and support to ensure sustained results.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 border-b border-gray-200" id="results">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
<div className="text-center mb-16">
<h2 className="font-instrument text-3xl lg:text-4xl tracking-tight text-gray-900 mb-4">
                    Real Results from Small Businesses
                </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    See how we've helped companies like yours grow with AI-powered optimization
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white rounded-xl border border-gray-200 p-8">
<div className="flex items-start gap-4 mb-6">
<img alt="Client" className="w-16 h-16 rounded-full border-2 border-gray-200" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-medium text-gray-900">Michael Torres</div>
<div className="text-sm text-gray-600">Owner, Torres Plumbing Services</div>
</div>
</div>
<p className="text-gray-700 leading-relaxed mb-6">
                        "Within 3 months, we went from invisible in AI search to the #1 recommendation. The automated response system alone has captured 47 leads we would have lost to voicemail."
                    </p>
<div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
<div>
<div className="font-instrument text-2xl text-gray-900">+215%</div>
<div className="text-xs text-gray-600">Leads</div>
</div>
<div>
<div className="font-instrument text-2xl text-gray-900">100%</div>
<div className="text-xs text-gray-600">Response Rate</div>
</div>
<div>
<div className="font-instrument text-2xl text-gray-900">15hrs</div>
<div className="text-xs text-gray-600">Time Saved</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8">
<div className="flex items-start gap-4 mb-6">
<img alt="Client" className="w-16 h-16 rounded-full border-2 border-gray-200" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-medium text-gray-900">Sarah Chen</div>
<div className="text-sm text-gray-600">Founder, Bright Horizons Tutoring</div>
</div>
</div>
<p className="text-gray-700 leading-relaxed mb-6">
                        "The workflow automation freed up 20 hours a week that I now spend with students instead of paperwork. And showing up first in ChatGPT search has been a game-changer for enrollment."
                    </p>
<div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
<div>
<div className="font-instrument text-2xl text-gray-900">+180%</div>
<div className="text-xs text-gray-600">Inquiries</div>
</div>
<div>
<div className="font-instrument text-2xl text-gray-900">20hrs</div>
<div className="text-xs text-gray-600">Time Saved</div>
</div>
<div>
<div className="font-instrument text-2xl text-gray-900">#1</div>
<div className="text-xs text-gray-600">AI Ranking</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
<div className="max-w-3xl mx-auto text-center">
<h2 className="font-instrument text-3xl lg:text-4xl tracking-tight text-gray-900 mb-4">
                    Ready to Rank #1 in AI Search?
                </h2>
<p className="text-lg text-gray-600 mb-8">
                    Schedule a free consultation to discover how we can help your business capture more leads, automate operations, and never miss another opportunity.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors" href="#">
                        Book Your Free Consultation
                        <i className="w-5 h-5 ml-2" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-5 h-5 mr-2" data-lucide="mail"></i>
                        contact@omnipresence.com
                    </a>
</div>
<p className="text-sm text-gray-500">No commitment required • 30-minute session • Get your AI readiness score</p>
</div>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div>
<div className="font-instrument text-lg tracking-tight font-semibold text-gray-900 mb-4">Omnipresence</div>
<p className="text-sm text-gray-600 leading-relaxed">
                        Helping small businesses thrive in the age of AI-powered search.
                    </p>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4 text-sm">Services</h4>
<ul className="space-y-2">
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">AI Sight Optimization</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Workflow Automation</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Response Systems</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2">
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Case Studies</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-2">
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-600">© 2025 Omnipresence. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
