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
      
        lucide.createIcons();
        
        // Add custom animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes fadeInDown {
                from {
                    opacity: 0;
                    transform: translateY(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    
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
      

<nav className="fixed w-full top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 opacity-0 animate-pulse" style={{animation: `fadeInDown 0.8s ease-out 0.2s forwards`, opacity: `0`}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<div className="text-xl font-semibold tracking-tight text-gray-900">PredictStreet</div>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#features">Features</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#accuracy">Accuracy</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#pricing">Pricing</a>
<button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200 hover:scale-105">
                        Get Started
                    </button>
</div>
<div className="md:hidden">
<i className="w-6 h-6 text-gray-600" data-lucide="menu"></i>
</div>
</div>
</div>
</nav>

<section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center opacity-0" style={{animation: `fadeInUp 1s ease-out 0.4s forwards`, opacity: `0`}}>
<div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700 border border-blue-200 mb-8">
<i className="w-4 h-4 mr-2 stroke-[1.5]" data-lucide="trending-up"></i>
                    80% more accurate than human analysts
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
                    Earnings predictions<br />
<span className="text-blue-600">powered by AI</span>
</h1>
<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                    AI analysts watch company developments in real time, and deliver instant, explainable earnings estimates, based on watching the market in real time
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
<button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                        Start Free Trial
                    </button>
<button className="text-gray-600 hover:text-gray-900 flex items-center transition-colors duration-200">
<i className="w-4 h-4 mr-2 stroke-[1.5]" data-lucide="play"></i>
                        Watch Demo
                    </button>
</div>
</div>

<div className="relative opacity-0" style={{animation: `fadeInUp 1s ease-out 0.6s forwards`, opacity: `0`}}>
<div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 shadow-xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="space-y-6">
<div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-blue-600 stroke-[1.5]" data-lucide="building"></i>
</div>
<div>
<div className="font-medium text-gray-900">AAPL</div>
<div className="text-sm text-gray-500">Apple Inc.</div>
</div>
</div>
<div className="text-right">
<div className="font-medium text-gray-900">$1.89 EPS</div>
<div className="text-sm text-green-600">+12% confidence</div>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-green-600 stroke-[1.5]" data-lucide="building"></i>
</div>
<div>
<div className="font-medium text-gray-900">MSFT</div>
<div className="text-sm text-gray-500">Microsoft Corp.</div>
</div>
</div>
<div className="text-right">
<div className="font-medium text-gray-900">$2.45 EPS</div>
<div className="text-sm text-green-600">+8% confidence</div>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-purple-600 stroke-[1.5]" data-lucide="building"></i>
</div>
<div>
<div className="font-medium text-gray-900">GOOGL</div>
<div className="text-sm text-gray-500">Alphabet Inc.</div>
</div>
</div>
<div className="text-right">
<div className="font-medium text-gray-900">$1.34 EPS</div>
<div className="text-sm text-green-600">+15% confidence</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-6">
<h3 className="font-medium text-gray-900 mb-4">Real-time Analysis</h3>
<div className="space-y-4">
<div className="flex items-start space-x-3">
<div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
<div className="text-sm text-gray-600">iPhone 15 sales data suggests 8% revenue beat</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
<div className="text-sm text-gray-600">Supply chain optimization reducing costs by 3%</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
<div className="text-sm text-gray-600">Currency headwinds in emerging markets</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
<div className="text-sm text-gray-600">Services revenue acceleration continuing</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 opacity-0" style={{animation: `fadeInUp 1s ease-out 0.8s forwards`, opacity: `0`}}>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Get the signal sooner
                </h2>
<p className="text-xl text-gray-600">
                    With confidence bands, scenarios, and the why behind every call
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 opacity-0" style={{animation: `fadeInUp 1s ease-out 1s forwards`, opacity: `0`}}>
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-blue-600 stroke-[1.5]" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-4">Instant Updates</h3>
<p className="text-gray-600 leading-relaxed">
                        Real-time monitoring of company developments, market signals, and industry trends that impact earnings before anyone else notices.
                    </p>
</div>
<div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 opacity-0" style={{animation: `fadeInUp 1s ease-out 1.2s forwards`, opacity: `0`}}>
<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-green-600 stroke-[1.5]" data-lucide="target"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-4">Confidence Bands</h3>
<p className="text-gray-600 leading-relaxed">
                        Every prediction comes with statistical confidence intervals and scenario analysis to help you understand the range of possible outcomes.
                    </p>
</div>
<div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 opacity-0" style={{animation: `fadeInUp 1s ease-out 1.4s forwards`, opacity: `0`}}>
<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-purple-600 stroke-[1.5]" data-lucide="lightbulb"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-4">Explainable AI</h3>
<p className="text-gray-600 leading-relaxed">
                        Understand exactly why our AI made each prediction with detailed explanations of the key factors and data points driving each estimate.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 sm:px-6 lg:px-8" id="accuracy">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 opacity-0" style={{animation: `fadeInUp 1s ease-out 1.6s forwards`, opacity: `0`}}>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Proven accuracy advantage
                </h2>
<p className="text-xl text-gray-600">
                    Our AI consistently outperforms human analysts across all sectors
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
<div className="text-center opacity-0" style={{animation: `fadeInUp 1s ease-out 1.8s forwards`, opacity: `0`}}>
<div className="text-5xl font-semibold text-blue-600 mb-2">80%</div>
<div className="text-gray-600">More accurate than analysts</div>
</div>
<div className="text-center opacity-0" style={{animation: `fadeInUp 1s ease-out 2s forwards`, opacity: `0`}}>
<div className="text-5xl font-semibold text-green-600 mb-2">24/7</div>
<div className="text-gray-600">Real-time monitoring</div>
</div>
<div className="text-center opacity-0" style={{animation: `fadeInUp 1s ease-out 2.2s forwards`, opacity: `0`}}>
<div className="text-5xl font-semibold text-purple-600 mb-2">500+</div>
<div className="text-gray-600">Companies tracked</div>
</div>
</div>
<div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 opacity-0" style={{animation: `fadeInUp 1s ease-out 2.4s forwards`, opacity: `0`}}>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-2xl font-medium text-gray-900 mb-4">Why we're more accurate</h3>
<div className="space-y-4">
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 stroke-[1.5] mt-0.5" data-lucide="check-circle"></i>
<div className="text-gray-600">Process thousands of data points simultaneously</div>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 stroke-[1.5] mt-0.5" data-lucide="check-circle"></i>
<div className="text-gray-600">No cognitive bias or emotional decision making</div>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 stroke-[1.5] mt-0.5" data-lucide="check-circle"></i>
<div className="text-gray-600">Continuous learning from market outcomes</div>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 stroke-[1.5] mt-0.5" data-lucide="check-circle"></i>
<div className="text-gray-600">Real-time adjustment to new information</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-6 border border-gray-200">
<div className="text-center mb-6">
<div className="text-lg font-medium text-gray-900 mb-2">Accuracy Comparison</div>
<div className="text-sm text-gray-500">Last 12 months</div>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-gray-600">PredictStreet AI</span>
<span className="text-sm font-medium text-gray-900">89%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-blue-600 h-2 rounded-full" style={{width: `89%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-gray-600">Human Analysts</span>
<span className="text-sm font-medium text-gray-900">49%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-gray-400 h-2 rounded-full" style={{width: `49%`}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
<div className="max-w-4xl mx-auto text-center opacity-0" style={{animation: `fadeInUp 1s ease-out 2.6s forwards`, opacity: `0`}}>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Ready to get ahead of the market?
            </h2>
<p className="text-xl text-gray-300 mb-8">
                Join thousands of investors making better decisions with AI-powered earnings predictions
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-105">
                    Start Free Trial
                </button>
<button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200">
                    Request Demo
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="opacity-0" style={{animation: `fadeInUp 1s ease-out 2.8s forwards`, opacity: `0`}}>
<div className="text-xl font-semibold tracking-tight text-gray-900 mb-4">PredictStreet</div>
<p className="text-gray-600 text-sm">
                        AI-powered earnings predictions that outperform human analysts by 80%.
                    </p>
</div>
<div className="opacity-0" style={{animation: `fadeInUp 1s ease-out 3s forwards`, opacity: `0`}}>
<h3 className="font-medium text-gray-900 mb-4">Product</h3>
<ul className="space-y-2 text-sm">
<li><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Features</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Accuracy</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">API</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Pricing</a></li>
</ul>
</div>
<div className="opacity-0" style={{animation: `fadeInUp 1s ease-out 3.2s forwards`, opacity: `0`}}>
<h3 className="font-medium text-gray-900 mb-4">Company</h3>
<ul className="space-y-2 text-sm">
<li><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">About</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Blog</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Careers</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Contact</a></li>
</ul>
</div>
<div className="opacity-0" style={{animation: `fadeInUp 1s ease-out 3.4s forwards`, opacity: `0`}}>
<h3 className="font-medium text-gray-900 mb-4">Support</h3>
<ul className="space-y-2 text-sm">
<li><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Help Center</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Documentation</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Status</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 mt-12 pt-8 opacity-0" style={{animation: `fadeInUp 1s ease-out 3.6s forwards`, opacity: `0`}}>
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="text-sm text-gray-600">
                        © 2024 PredictStreet. All rights reserved.
                    </div>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-gray-400 hover:text-gray-600 transition-colors duration-200" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="twitter"></i>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors duration-200" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="linkedin"></i>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors duration-200" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="github"></i>
</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
