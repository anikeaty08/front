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
      
<div className="fixed inset-0 bg-gradient-to-br from-cyan-800 via-teal-700 to-cyan-900 z-0"></div>
<div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVCbGVuZCBtb2RlPSJzY3JlZW4iLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-40 z-0"></div>
<div className="relative z-10 w-full min-h-screen">

<div className="w-full max-w-6xl mx-auto text-center py-16 px-4">
<h1 className="text-[42px] md:text-[56px] lg:text-[64px] font-[200] leading-tight tracking-[-0.03em] gradient-text bg-gradient-to-r from-white via-cyan-100 to-teal-100">
        Flexible AI Solutions
      </h1>
<p className="mt-4 text-[16px] md:text-[18px] text-white/70 max-w-2xl mx-auto">
        Choose the plan that works for your workflow. All plans include core features with flexible scaling options.
      </p>
</div>

<div className="w-full max-w-7xl mx-auto px-4 pb-24">

<div className="flex flex-col md:flex-row gap-6 mb-6">

<div className="w-full md:w-1/3 glass-effect rounded-2xl p-8 border border-neutral-200/20 shadow-2xl">
<div className="icon-circle mb-4">
<i className="fas fa-brain text-white"></i>
</div>
<h3 className="text-2xl text-white mb-3">Advanced AI Models</h3>
<p className="text-neutral-200/70">Access state-of-the-art language models trained on diverse datasets for optimal performance.</p>
</div>

<div className="w-full md:w-2/3 glass-effect rounded-2xl p-8 border border-neutral-200/20 flex flex-col md:flex-row items-center shadow-2xl">
<div className="flex-1 mb-6 md:mb-0 md:mr-6">
<h3 className="text-2xl text-white mb-3">Multi-modal Capabilities</h3>
<p className="text-neutral-200/70">Process and generate content across text, images, and structured data with a single unified API.</p>
<ul className="mt-4 space-y-2">
<li className="flex items-center text-neutral-200/80 text-sm">
<i className="fas fa-check text-white mr-3 w-4"></i>
<span>Natural language processing</span>
</li>
<li className="flex items-center text-neutral-200/80 text-sm">
<i className="fas fa-check text-white mr-3 w-4"></i>
<span>Image generation and analysis</span>
</li>
<li className="flex items-center text-neutral-200/80 text-sm">
<i className="fas fa-check text-white mr-3 w-4"></i>
<span>Structured data extraction</span>
</li>
</ul>
</div>
<div className="w-full md:w-64 h-48 bg-black/10 rounded-xl flex items-center justify-center border border-neutral-200/10">
<i className="fas fa-diagram-project text-5xl text-white/40"></i>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse gap-6 mb-6">

<div className="w-full md:w-1/3 glass-effect rounded-2xl p-8 border border-neutral-200/20 shadow-2xl">
<div className="icon-circle mb-4">
<i className="fas fa-shield-alt text-white"></i>
</div>
<h3 className="text-2xl text-white mb-3">Enterprise Security</h3>
<p className="text-neutral-200/70">End-to-end encryption, compliance certifications, and secure data handling for sensitive applications.</p>
</div>

<div className="w-full md:w-2/3 glass-effect rounded-2xl p-8 border border-neutral-200/20 flex flex-col md:flex-row items-center shadow-2xl">
<div className="flex-1 mb-6 md:mb-0 md:mr-6">
<h3 className="text-2xl text-white mb-3">Customizable Training</h3>
<p className="text-neutral-200/70">Fine-tune models on your proprietary data to create domain-specific AI solutions that match your exact needs.</p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="bg-black/10 rounded-lg p-3 text-center">
<div className="text-xl font-[300] text-white">10x</div>
<div className="text-xs text-neutral-200/60 mt-1">Performance</div>
</div>
<div className="bg-black/10 rounded-lg p-3 text-center">
<div className="text-xl font-[300] text-white">95%</div>
<div className="text-xs text-neutral-200/60 mt-1">Accuracy</div>
</div>
</div>
</div>
<div className="w-full md:w-64 h-48 bg-black/10 rounded-xl flex items-center justify-center border border-neutral-200/10">
<i className="fas fa-sliders text-5xl text-white/40"></i>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6">

<div className="w-full md:w-1/3 glass-effect rounded-2xl p-8 border border-neutral-200/20 shadow-2xl">
<div className="icon-circle mb-4">
<i className="fas fa-bolt text-white"></i>
</div>
<h3 className="text-2xl text-white mb-3">Lightning Fast</h3>
<p className="text-neutral-200/70">High-performance infrastructure with global edge deployment for minimal latency responses.</p>
</div>

<div className="w-full md:w-2/3 glass-effect rounded-2xl p-8 border border-neutral-200/20 shadow-2xl">
<h3 className="text-2xl text-white mb-3">Seamless Integration</h3>
<p className="text-neutral-200/70 mb-6">Connect with your existing tools and workflows through our comprehensive API and SDK ecosystem.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-4 bg-black/10 rounded-lg flex flex-col items-center justify-center">
<i className="fab fa-python text-2xl text-white/70 mb-2"></i>
<span className="text-sm text-neutral-200/60">Python</span>
</div>
<div className="p-4 bg-black/10 rounded-lg flex flex-col items-center justify-center">
<i className="fab fa-js text-2xl text-white/70 mb-2"></i>
<span className="text-sm text-neutral-200/60">JavaScript</span>
</div>
<div className="p-4 bg-black/10 rounded-lg flex flex-col items-center justify-center">
<i className="fab fa-java text-2xl text-white/70 mb-2"></i>
<span className="text-sm text-neutral-200/60">Java</span>
</div>
<div className="p-4 bg-black/10 rounded-lg flex flex-col items-center justify-center">
<i className="fas fa-code text-2xl text-white/70 mb-2"></i>
<span className="text-sm text-neutral-200/60">REST API</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full max-w-6xl mx-auto px-4 pb-24">
<h2 className="text-3xl md:text-4xl text-white text-center mb-12">Choose Your Plan</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-effect rounded-2xl shadow-2xl p-6 flex flex-col h-full relative border border-neutral-200/20">

<div className="flex items-center mb-4">
<div className="icon-circle">
<i className="fas fa-rocket text-white text-xs"></i>
</div>
<h3 className="ml-3 text-xl text-white">Starter</h3>
</div>

<div className="mt-2 mb-6">
<div className="flex items-baseline">
<span className="text-4xl font-[200] text-white">$19</span>
<span className="text-sm text-neutral-200/60 ml-2">/month</span>
</div>
<p className="text-neutral-200/60 text-sm mt-1">Perfect for individuals and small projects</p>
</div>
<div className="card-divider w-full mb-6"></div>

<ul className="space-y-3 mb-8">
<li className="flex items-center text-neutral-200/80 text-sm">
<i className="fas fa-check text-white mr-3 w-4"></i>
<span>1 million tokens/month</span>
</li>
<li className="flex items-center text-neutral-200/80 text-sm">
<i className="fas fa-check text-white mr-3 w-4"></i>
<span>5 custom AI models</span>
</li>
<li className="flex items-center text-neutral-200/80 text-sm">
<i className="fas fa-check text-white mr-3 w-4"></i>
<span>Basic API access</span>
</li>
<li className="flex items-center text-neutral-200/80 text-sm">
<i className="fas fa-check text-white mr-3 w-4"></i>
<span>Email support</span>
</li>
</ul>

<div className="mt-auto pt-4">
<button className="w-full py-3 rounded-xl bg-black/20 hover:bg-black/30 text-white text-sm font-medium transition-all duration-200 border border-neutral-200/20">
              Start Free Trial
            </button>
</div>
</div>

<div className="glass-effect rounded-2xl shadow-2xl p-6 flex flex-col h-full relative z-10 transform scale-105 border border-neutral-200/30">

<div className="pricing-badge">MOST POPULAR</div>

<div className="flex items-center mb-4">
<div className="icon-circle bg-black/20">
<i className="fas fa-bolt text-white text-xs"></i>
</div>
<h3 className="ml-3 text-xl text-white">Professional</h3>
</div>

<div className="mt-2 mb-6">
<div className="flex items-baseline">
<span className="text-4xl font-[200] text-white">$49</span>
<span className="text-sm text-neutral-200/60 ml-2">/month</span>
</div>
<p className="text-neutral-200/60 text-sm mt-1">For teams with advanced AI needs</p>
</div>
<div className="card-divider w-full mb-6"></div>

<ul className="space-y-3 mb-8">
<li className="flex items-center text-neutral-200/80 text-sm">
<i className="fas fa-check text-white mr-3 w-4"></i>
<span>10 million tokens/month</span>
</li>
<li className="flex items-center text-neutral-200/80 text-sm">
<i className="fas fa-check text-white mr-3 w-4"></i>
<span>20 custom AI models</span>
</li>
<li className="flex items-center text-neutral-200/80 text-sm">
<i className="fas fa-check text-white mr-3 w-4"></i>
<span>Advanced API access</span>
</li>
<li className="flex items-center text-neutral-200/80 text-sm">
<i className="fas fa-check text-white mr-3 w-4"></i>
<span>Priority support</span>
</li>
</ul>

<div className="mt-auto pt-4">
<button className="w-full py-3 rounded-xl bg-black text-white text-sm font-medium transition-all duration-200 hover:bg-black/80">
              Get Started
            </button>
</div>
</div>

<div className="glass-effect rounded-2xl shadow-2xl p-6 flex flex-col h-full relative border border-neutral-200/20">

<div className="flex items-center mb-4">
<div className="icon-circle">
<i className="fas fa-building text-white text-xs"></i>
</div>
<h3 className="ml-3 text-xl text-white">Enterprise</h3>
</div>

<div className="mt-2 mb-6">
<div className="flex items-baseline">
<span className="text-4xl font-[200] text-white">$199</span>
<span className="text-sm text-neutral-200/60 ml-2">/month</span>
</div>
<p className="text-neutral-200/60 text-sm mt-1">For organizations with advanced requirements</p>
</div>
<div className="card-divider w-full mb-6"></div>

<ul className="space-y-3 mb-8">
<li className="flex items-center text-neutral-200/80 text-sm">
<i className="fas fa-check text-white mr-3 w-4"></i>
<span>Unlimited tokens</span>
</li>
<li className="flex items-center text-neutral-200/80 text-sm">
<i className="fas fa-check text-white mr-3 w-4"></i>
<span>Unlimited custom AI models</span>
</li>
<li className="flex items-center text-neutral-200/80 text-sm">
<i className="fas fa-check text-white mr-3 w-4"></i>
<span>Full API ecosystem</span>
</li>
<li className="flex items-center text-neutral-200/80 text-sm">
<i className="fas fa-check text-white mr-3 w-4"></i>
<span>24/7 dedicated support</span>
</li>
</ul>

<div className="mt-auto pt-4">
<button className="w-full py-3 rounded-xl bg-black/20 hover:bg-black/30 text-white text-sm font-medium transition-all duration-200 border border-neutral-200/20">
              Contact Sales
            </button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
