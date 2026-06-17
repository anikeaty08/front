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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<div className="text-xl font-semibold tracking-tight text-blue-600" style={{letterSpacing: '-0.05em'}}>YUANTA<span className="text-gray-900">DCA</span></div>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="#learn">Learn</a>
<a className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="#choices">DCA Choices</a>
<a className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="#tools">Tools</a>
<a className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="#campaigns">Campaigns</a>
<a className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="#get-started">Get Started</a>
</div>
<button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm">
                    Start DCA Now
                </button>
</div>
</div>
</nav>

<section className="relative overflow-hidden" id="home">

<div className="relative bg-gradient-to-br from-blue-50 via-white to-green-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
                            Invest Smart, Grow Steady
                        </h1>
<p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Build your wealth gradually through Dollar-Cost Averaging with Yuanta. Start investing with confidence today.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-sm">
                                Start DCA Now
                            </button>
<button className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all border border-gray-300">
                                Learn How DCA Works
                            </button>
</div>
</div>
<div className="relative">
<div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-gray-900">Investment Growth Comparison</h3>
<div className="flex gap-4 text-xs">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-blue-600"></div>
<span className="text-gray-600">DCA</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-gray-400"></div>
<span className="text-gray-600">Lump Sum</span>
</div>
</div>
</div>
<div className="relative h-64">
<svg className="w-full h-full" viewbox="0 0 400 200">

<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="400" y1="50" y2="50"></line>
<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="400" y1="100" y2="100"></line>
<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="400" y1="150" y2="150"></line>

<polyline fill="none" points="0,180 80,165 160,145 240,120 320,85 400,60" stroke="#2563eb" strokeWidth="3"></polyline>

<polyline fill="none" points="0,180 80,140 160,155 240,130 320,145 400,100" stroke="#9ca3af" stroke-dasharray="5,5" strokeWidth="3"></polyline>
</svg>
</div>
<div className="mt-6 pt-6 border-t border-gray-200">
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-2xl font-semibold text-blue-600">+42%</div>
<div className="text-sm text-gray-600">DCA Average Return</div>
</div>
<div>
<div className="text-2xl font-semibold text-gray-400">±38%</div>
<div className="text-sm text-gray-600">Lump Sum Volatility</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Why Choose DCA?</h2>
<p className="text-lg text-gray-600">Smart investing made simple for everyone</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-blue-600" data-lucide="trending-down"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Reduce Market Timing Risk</h3>
<p className="text-gray-600 leading-relaxed">Stop worrying about perfect entry points. DCA spreads your investment across different market conditions.</p>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-green-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-green-600" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Grow Wealth Gradually</h3>
<p className="text-gray-600 leading-relaxed">Build your portfolio steadily over time with consistent monthly investments that compound.</p>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-purple-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-purple-600" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Suitable for All Markets</h3>
<p className="text-gray-600 leading-relaxed">Whether markets go up or down, DCA helps you stay disciplined and focused on long-term goals.</p>
</div>
</div>
</div>

<div className="bg-gray-50 py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Choose Your DCA Path</h2>
<p className="text-lg text-gray-600">Select the investment type that fits your goals</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all cursor-pointer group">
<div className="text-4xl mb-4">📊</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Mutual Funds</h3>
<p className="text-gray-600 mb-4">Diversified portfolios managed by professionals</p>
<div className="flex items-center text-blue-600 text-sm font-medium">
                            Explore Funds
                            <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</div>
</div>
<div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all cursor-pointer group">
<div className="text-4xl mb-4">💰</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Dividend Stocks</h3>
<p className="text-gray-600 mb-4">Regular income plus growth potential</p>
<div className="flex items-center text-blue-600 text-sm font-medium">
                            View Stocks
                            <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</div>
</div>
<div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all cursor-pointer group">
<div className="text-4xl mb-4">🌍</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Depository Receipts</h3>
<p className="text-gray-600 mb-4">Access global markets and international growth</p>
<div className="flex items-center text-blue-600 text-sm font-medium">
                            See Options
                            <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Compare Investment Options</h2>
<p className="text-lg text-gray-600">Find the right fit for your risk tolerance and goals</p>
</div>
<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
<table className="w-full">
<thead className="bg-gray-50">
<tr>
<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Investment Type</th>
<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Potential Return</th>
<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Risk Level</th>
<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Time Horizon</th>
<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best For</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-gray-900">Mutual Funds</td>
<td className="px-6 py-4 text-sm text-gray-600">8-12% annually</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Medium</span>
</td>
<td className="px-6 py-4 text-sm text-gray-600">3-5 years</td>
<td className="px-6 py-4 text-sm text-gray-600">Beginners</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-gray-900">Dividend Stocks</td>
<td className="px-6 py-4 text-sm text-gray-600">5-8% + dividends</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Low-Medium</span>
</td>
<td className="px-6 py-4 text-sm text-gray-600">5-10 years</td>
<td className="px-6 py-4 text-sm text-gray-600">Income Seekers</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-gray-900">Depository Receipts</td>
<td className="px-6 py-4 text-sm text-gray-600">10-15% annually</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Medium-High</span>
</td>
<td className="px-6 py-4 text-sm text-gray-600">5-10 years</td>
<td className="px-6 py-4 text-sm text-gray-600">Growth Focused</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-gradient-to-br from-blue-600 to-blue-700 py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Start Investing Today</h2>
<p className="text-lg text-blue-100">Choose your preferred platform to begin your DCA journey</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-xl p-8 text-center hover:shadow-2xl transition-all">
<div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-semibold" style={{letterSpacing: '-0.05em'}}>ST</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Streaming</h3>
<p className="text-sm text-gray-600 mb-6">Trade stocks and DRs with advanced tools</p>
<button className="w-full px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                            Open App
                        </button>
</div>
<div className="bg-white rounded-xl p-8 text-center hover:shadow-2xl transition-all">
<div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-semibold" style={{letterSpacing: '-0.05em'}}>YS</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">YSinvest</h3>
<p className="text-sm text-gray-600 mb-6">Mutual funds made simple and accessible</p>
<button className="w-full px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                            Open App
                        </button>
</div>
<div className="bg-white rounded-xl p-8 text-center hover:shadow-2xl transition-all">
<div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-semibold" style={{letterSpacing: '-0.05em'}}>AW</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">AomWise</h3>
<p className="text-sm text-gray-600 mb-6">Smart investment advice and planning</p>
<button className="w-full px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                            Open App
                        </button>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Trusted by Thousands</h2>
<p className="text-lg text-gray-600">Real stories from DCA investors</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white border border-gray-200 rounded-xl p-8">
<div className="flex items-center mb-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div className="ml-4">
<div className="font-semibold text-gray-900">Sarah Chen</div>
<div className="text-sm text-gray-600">Marketing Manager</div>
</div>
</div>
<p className="text-gray-600 leading-relaxed">"DCA helped me start investing without the fear of market timing. After 3 years, my portfolio has grown steadily."</p>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-8">
<div className="flex items-center mb-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div className="ml-4">
<div className="font-semibold text-gray-900">James Wong</div>
<div className="text-sm text-gray-600">Software Engineer</div>
</div>
</div>
<p className="text-gray-600 leading-relaxed">"The automated monthly investments through Yuanta made it so easy. I don't even think about it anymore!"</p>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-8">
<div className="flex items-center mb-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div className="ml-4">
<div className="font-semibold text-gray-900">Linda Park</div>
<div className="text-sm text-gray-600">Teacher</div>
</div>
</div>
<p className="text-gray-600 leading-relaxed">"Starting with just 3,000 baht per month, I've built a solid retirement fund. DCA is perfect for regular savers."</p>
</div>
</div>
</div>

<div className="bg-gray-50 py-16">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Get Monthly DCA Insights</h2>
<p className="text-gray-600 mb-8">Market updates, investment tips, and DCA strategies delivered to your inbox</p>
<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
<input className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Enter your email" type="email"/>
<button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Subscribe
                    </button>
</div>
</div>
</div>
</section>

<section className="bg-white py-20" id="learn">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-20">
<h1 className="text-5xl font-semibold tracking-tight text-gray-900 mb-6">What is Dollar-Cost Averaging?</h1>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">A proven investment strategy that helps you build wealth consistently, regardless of market conditions</p>
</div>

<div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-12 mb-20">
<div className="max-w-4xl mx-auto">
<div className="bg-white rounded-xl p-8 shadow-lg">
<h3 className="text-lg font-semibold text-gray-900 mb-6">How DCA Smooths Your Investment Journey</h3>
<div className="relative h-72">
<svg className="w-full h-full" viewbox="0 0 600 250">

<polyline fill="none" points="0,120 100,80 200,140 300,60 400,110 500,90 600,70" stroke="#cbd5e1" stroke-dasharray="5,5" strokeWidth="2"></polyline>

<circle cx="100" cy="80" fill="#3b82f6" r="6"></circle>
<circle cx="200" cy="140" fill="#3b82f6" r="6"></circle>
<circle cx="300" cy="60" fill="#3b82f6" r="6"></circle>
<circle cx="400" cy="110" fill="#3b82f6" r="6"></circle>
<circle cx="500" cy="90" fill="#3b82f6" r="6"></circle>

<line stroke="#10b981" strokeWidth="3" x1="0" x2="600" y1="96" y2="96"></line>

<text fill="#10b981" fontSize="12" font-weight="600" x="10" y="90">Average Cost</text>
</svg>
</div>
<div className="mt-6 flex items-center justify-center gap-8 text-sm">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-gray-400"></div>
<span className="text-gray-600">Market Price</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-blue-600"></div>
<span className="text-gray-600">Your Purchase</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-green-600"></div>
<span className="text-gray-600">Your Average Cost</span>
</div>
</div>
</div>
</div>
</div>

<div className="mb-20">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">How It Works</h2>
<p className="text-lg text-gray-600">Three simple steps to consistent wealth building</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="text-center">
<div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
<div className="text-3xl font-semibold text-blue-600">1</div>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Invest Regularly</h3>
<p className="text-gray-600">Set up automatic monthly investments of a fixed amount</p>
</div>
<div className="text-center">
<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
<div className="text-3xl font-semibold text-green-600">2</div>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Buy at Different Prices</h3>
<p className="text-gray-600">Purchase more shares when prices are low, fewer when high</p>
</div>
<div className="text-center">
<div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
<div className="text-3xl font-semibold text-purple-600">3</div>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Grow Steadily</h3>
<p className="text-gray-600">Build wealth over time with lower average cost per share</p>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 mb-20">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-8">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">DCA Calculator</h2>
<p className="text-gray-600">See how your investment could grow over time</p>
</div>
<div className="bg-white rounded-xl p-8 shadow-lg">
<div className="grid md:grid-cols-2 gap-8 mb-8">
<div>
<label className="block text-sm font-medium text-gray-900 mb-3">Monthly Investment Amount</label>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" max="50000" min="1000" step="1000" type="range" value="5000"/>
<div className="flex justify-between text-sm text-gray-600 mt-2">
<span>฿1,000</span>
<span className="font-semibold text-gray-900">฿5,000</span>
<span>฿50,000</span>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-3">Investment Duration (Years)</label>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" max="30" min="1" step="1" type="range" value="10"/>
<div className="flex justify-between text-sm text-gray-600 mt-2">
<span>1 year</span>
<span className="font-semibold text-gray-900">10 years</span>
<span>30 years</span>
</div>
</div>
</div>
<div className="border-t border-gray-200 pt-8">
<div className="grid grid-cols-3 gap-6 text-center">
<div>
<div className="text-sm text-gray-600 mb-2">Total Investment</div>
<div className="text-3xl font-semibold text-gray-900">฿600,000</div>
</div>
<div>
<div className="text-sm text-gray-600 mb-2">Expected Return (8%)</div>
<div className="text-3xl font-semibold text-blue-600">฿914,473</div>
</div>
<div>
<div className="text-sm text-gray-600 mb-2">Total Gain</div>
<div className="text-3xl font-semibold text-green-600">฿314,473</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mb-20">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">DCA vs Lump Sum Investment</h2>
<p className="text-lg text-gray-600">Understanding the differences</p>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
<div className="flex items-center mb-6">
<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
<i className="w-6 h-6 text-white" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900">Dollar-Cost Averaging</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start">
<i className="w-5 h-5 text-green-600 mr-3 mt-0.5" data-lucide="check"></i>
<span className="text-gray-700">Reduces timing risk</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-green-600 mr-3 mt-0.5" data-lucide="check"></i>
<span className="text-gray-700">Lower average cost in volatile markets</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-green-600 mr-3 mt-0.5" data-lucide="check"></i>
<span className="text-gray-700">Easier to maintain discipline</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-green-600 mr-3 mt-0.5" data-lucide="check"></i>
<span className="text-gray-700">Reduces emotional stress</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-green-600 mr-3 mt-0.5" data-lucide="check"></i>
<span className="text-gray-700">Perfect for regular income earners</span>
</li>
</ul>
</div>
<div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8">
<div className="flex items-center mb-6">
<div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center mr-4">
<i className="w-6 h-6 text-white" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900">Lump Sum</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" data-lucide="alert-circle"></i>
<span className="text-gray-700">High timing risk</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" data-lucide="alert-circle"></i>
<span className="text-gray-700">Potential for immediate gains or losses</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" data-lucide="alert-circle"></i>
<span className="text-gray-700">Requires large capital upfront</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" data-lucide="alert-circle"></i>
<span className="text-gray-700">More emotional pressure</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" data-lucide="alert-circle"></i>
<span className="text-gray-700">Difficult to time the market perfectly</span>
</li>
</ul>
</div>
</div>
</div>

<div className="mb-20">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Which Investor Are You?</h2>
<p className="text-lg text-gray-600">Find your investment profile</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all">
<div className="text-5xl mb-4">🌱</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Beginner</h3>
<p className="text-gray-600 mb-4">New to investing and want to start small with minimal risk</p>
<ul className="space-y-2 text-sm text-gray-600 mb-6">
<li>• Start with ฿1,000-3,000/month</li>
<li>• Focus on mutual funds</li>
<li>• Learn as you grow</li>
</ul>
<button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                            Get Started
                        </button>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-green-300 hover:shadow-lg transition-all">
<div className="text-5xl mb-4">💼</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term Saver</h3>
<p className="text-gray-600 mb-4">Building wealth steadily for future goals over 5-10 years</p>
<ul className="space-y-2 text-sm text-gray-600 mb-6">
<li>• Invest ฿5,000-10,000/month</li>
<li>• Mix of funds and stocks</li>
<li>• Compound your returns</li>
</ul>
<button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                            See Options
                        </button>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-purple-300 hover:shadow-lg transition-all">
<div className="text-5xl mb-4">🎯</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Retirement Planner</h3>
<p className="text-gray-600 mb-4">Preparing for retirement with consistent, disciplined investing</p>
<ul className="space-y-2 text-sm text-gray-600 mb-6">
<li>• Allocate 15-20% of income</li>
<li>• Diversified portfolio</li>
<li>• Focus on dividend income</li>
</ul>
<button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                            Plan Now
                        </button>
</div>
</div>
</div>

<div className="text-center">
<button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white text-lg font-medium rounded-lg hover:from-blue-700 hover:to-green-700 transition-all shadow-lg">
                    See Investment Options
                </button>
</div>
</div>
</section>

<section className="bg-gray-50 py-20" id="choices">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-12">
<h1 className="text-5xl font-semibold tracking-tight text-gray-900 mb-6">Find the Right Investment for Your DCA Plan</h1>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore funds, stocks, and global DRs suitable for long-term, consistent investing</p>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
<div className="grid md:grid-cols-4 gap-4">
<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Product Type</label>
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm">
<option>All Types</option>
<option>Mutual Funds</option>
<option>Dividend Stocks</option>
<option>Depository Receipts</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Risk Level</label>
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm">
<option>All Levels</option>
<option>Low</option>
<option>Medium</option>
<option>High</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Return %</label>
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm">
<option>All Returns</option>
<option>5-10%</option>
<option>10-15%</option>
<option>15%+</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Time Horizon</label>
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm">
<option>All Periods</option>
<option>1-3 years</option>
<option>3-5 years</option>
<option>5+ years</option>
</select>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-12">

<div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Mutual Fund</span>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="info"></i>
</button>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Yuanta Equity Growth Fund</h3>
<div className="h-32 mb-4">
<svg className="w-full h-full" viewbox="0 0 200 100">
<polyline fill="none" points="0,80 40,70 80,55 120,45 160,35 200,25" stroke="#3b82f6" strokeWidth="2"></polyline>
<polyline fill="url(#gradient1)" opacity="0.2" points="0,80 40,70 80,55 120,45 160,35 200,25"></polyline>
<defs>
<lineargradient id="gradient1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
<div>
<div className="text-sm text-gray-600">1Y Return</div>
<div className="text-lg font-semibold text-green-600">+12.5%</div>
</div>
<div>
<div className="text-sm text-gray-600">Risk</div>
<div className="text-lg font-semibold text-yellow-600">Medium</div>
</div>
</div>
<button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Invest via YSinvest
                    </button>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Dividend Stock</span>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="info"></i>
</button>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">PTT PCL</h3>
<div className="h-32 mb-4">
<svg className="w-full h-full" viewbox="0 0 200 100">
<polyline fill="none" points="0,60 40,58 80,62 120,55 160,50 200,48" stroke="#10b981" strokeWidth="2"></polyline>
<polyline fill="url(#gradient2)" opacity="0.2" points="0,60 40,58 80,62 120,55 160,50 200,48"></polyline>
<defs>
<lineargradient id="gradient2" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#10b981', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#10b981', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
<div>
<div className="text-sm text-gray-600">1Y Return</div>
<div className="text-lg font-semibold text-green-600">+8.2%</div>
</div>
<div>
<div className="text-sm text-gray-600">Risk</div>
<div className="text-lg font-semibold text-green-600">Low</div>
</div>
</div>
<button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Buy via Streaming
                    </button>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Depository Receipt</span>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="info"></i>
</button>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">QQQM19</h3>
<div className="h-32 mb-4">
<svg className="w-full h-full" viewbox="0 0 200 100">
<polyline fill="none" points="0,70 40,65 80,50 120,55 160,40 200,30" stroke="#8b5cf6" strokeWidth="2"></polyline>
<polyline fill="url(#gradient3)" opacity="0.2" points="0,70 40,65 80,50 120,55 160,40 200,30"></polyline>
<defs>
<lineargradient id="gradient3" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
<div>
<div className="text-sm text-gray-600">1Y Return</div>
<div className="text-lg font-semibold text-green-600">+15.8%</div>
</div>
<div>
<div className="text-sm text-gray-600">Risk</div>
<div className="text-lg font-semibold text-orange-600">High</div>
</div>
</div>
<button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Invest via AomWise
                    </button>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Mutual Fund</span>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="info"></i>
</button>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Yuanta Balanced Fund</h3>
<div className="h-32 mb-4">
<svg className="w-full h-full" viewbox="0 0 200 100">
<polyline fill="none" points="0,75 40,72 80,68 120,65 160,58 200,52" stroke="#3b82f6" strokeWidth="2"></polyline>
<polyline fill="url(#gradient4)" opacity="0.2" points="0,75 40,72 80,68 120,65 160,58 200,52"></polyline>
<defs>
<lineargradient id="gradient4" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
<div>
<div className="text-sm text-gray-600">1Y Return</div>
<div className="text-lg font-semibold text-green-600">+9.3%</div>
</div>
<div>
<div className="text-sm text-gray-600">Risk</div>
<div className="text-lg font-semibold text-green-600">Low-Med</div>
</div>
</div>
<button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Invest via YSinvest
                    </button>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Dividend Stock</span>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="info"></i>
</button>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">CPALL</h3>
<div className="h-32 mb-4">
<svg className="w-full h-full" viewbox="0 0 200 100">
<polyline fill="none" points="0,65 40,62 80,60 120,58 160,55 200,50" stroke="#10b981" strokeWidth="2"></polyline>
<polyline fill="url(#gradient5)" opacity="0.2" points="0,65 40,62 80,60 120,58 160,55 200,50"></polyline>
<defs>
<lineargradient id="gradient5" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#10b981', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#10b981', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
<div>
<div className="text-sm text-gray-600">1Y Return</div>
<div className="text-lg font-semibold text-green-600">+6.7%</div>
</div>
<div>
<div className="text-sm text-gray-600">Risk</div>
<div className="text-lg font-semibold text-green-600">Low</div>
</div>
</div>
<button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Buy via Streaming
                    </button>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Depository Receipt</span>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="info"></i>
</button>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">SPY500</h3>
<div className="h-32 mb-4">
<svg className="w-full h-full" viewbox="0 0 200 100">
<polyline fill="none" points="0,78 40,72 80,65 120,60 160,50 200,40" stroke="#8b5cf6" strokeWidth="2"></polyline>
<polyline fill="url(#gradient6)" opacity="0.2" points="0,78 40,72 80,65 120,60 160,50 200,40"></polyline>
<defs>
<lineargradient id="gradient6" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
<div>
<div className="text-sm text-gray-600">1Y Return</div>
<div className="text-lg font-semibold text-green-600">+18.2%</div>
</div>
<div>
<div className="text-sm text-gray-600">Risk</div>
<div className="text-lg font-semibold text-yellow-600">Medium</div>
</div>
</div>
<button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Invest via AomWise
                    </button>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
<h3 className="text-xl font-semibold text-gray-900 mb-6">Compare Selected Products</h3>
<div className="h-64 mb-6">
<svg className="w-full h-full" viewbox="0 0 800 200">

<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>
<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="800" y1="100" y2="100"></line>
<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>

<polyline fill="none" points="0,140 200,120 400,90 600,70 800,50" stroke="#3b82f6" strokeWidth="2"></polyline>
<polyline fill="none" points="0,150 200,145 400,130 600,110 800,95" stroke="#10b981" strokeWidth="2"></polyline>
<polyline fill="none" points="0,130 200,110 400,95 600,80 800,60" stroke="#8b5cf6" strokeWidth="2"></polyline>
</svg>
</div>
<div className="flex items-center justify-center gap-8 text-sm">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-blue-600"></div>
<span className="text-gray-600">Yuanta Equity Growth Fund</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-green-600"></div>
<span className="text-gray-600">PTT PCL</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-purple-600"></div>
<span className="text-gray-600">QQQM19</span>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Ready to Start Your DCA?</h2>
<p className="text-lg text-blue-100 mb-8">Choose your platform and begin investing today</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                        Streaming
                    </button>
<button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                        YSinvest
                    </button>
<button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                        AomWise
                    </button>
</div>
</div>
</div>
</section>

<section className="bg-white py-20" id="tools">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-16">
<h1 className="text-5xl font-semibold tracking-tight text-gray-900 mb-6">Master Your DCA Strategy</h1>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to plan and execute your investment journey</p>
</div>

<div className="grid md:grid-cols-2 gap-8 mb-16">

<div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-8 hover:shadow-xl transition-all">
<div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-7 h-7 text-white" data-lucide="book-open"></i>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3">DCA Starter Kit</h3>
<p className="text-gray-600 mb-6">Comprehensive guide covering everything from basics to advanced strategies</p>
<ul className="space-y-2 mb-6 text-sm text-gray-600">
<li className="flex items-center">
<i className="w-4 h-4 text-green-600 mr-2" data-lucide="check"></i>
                            Investment fundamentals
                        </li>
<li className="flex items-center">
<i className="w-4 h-4 text-green-600 mr-2" data-lucide="check"></i>
                            How to set up your first DCA
                        </li>
<li className="flex items-center">
<i className="w-4 h-4 text-green-600 mr-2" data-lucide="check"></i>
                            Risk management tips
                        </li>
</ul>
<button className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center">
<i className="w-4 h-4 mr-2" data-lucide="download"></i>
                        Download PDF
                    </button>
</div>

<div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-8 hover:shadow-xl transition-all">
<div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-7 h-7 text-white" data-lucide="file-text"></i>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3">DCA Planning Worksheet</h3>
<p className="text-gray-600 mb-6">Interactive template to plan your investment strategy and track progress</p>
<ul className="space-y-2 mb-6 text-sm text-gray-600">
<li className="flex items-center">
<i className="w-4 h-4 text-green-600 mr-2" data-lucide="check"></i>
                            Goal setting framework
                        </li>
<li className="flex items-center">
<i className="w-4 h-4 text-green-600 mr-2" data-lucide="check"></i>
                            Budget calculator
                        </li>
<li className="flex items-center">
<i className="w-4 h-4 text-green-600 mr-2" data-lucide="check"></i>
                            Portfolio allocation tool
                        </li>
</ul>
<button className="px-5 py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors flex items-center">
<i className="w-4 h-4 mr-2" data-lucide="edit"></i>
                        Open Template
                    </button>
</div>
</div>

<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">Educational Video Gallery</h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
<div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
<i className="w-8 h-8 text-blue-600" data-lucide="play"></i>
</div>
</div>
<div className="p-6">
<h3 className="font-semibold text-gray-900 mb-2">DCA Basics in 5 Minutes</h3>
<p className="text-sm text-gray-600">Perfect introduction for beginners</p>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
<div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
<i className="w-8 h-8 text-green-600" data-lucide="play"></i>
</div>
</div>
<div className="p-6">
<h3 className="font-semibold text-gray-900 mb-2">Choosing the Right Products</h3>
<p className="text-sm text-gray-600">Compare funds, stocks, and DRs</p>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
<div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
<i className="w-8 h-8 text-purple-600" data-lucide="play"></i>
</div>
</div>
<div className="p-6">
<h3 className="font-semibold text-gray-900 mb-2">Advanced DCA Strategies</h3>
<p className="text-sm text-gray-600">Optimize your investment plan</p>
</div>
</div>
</div>
</div>

<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
<div className="max-w-3xl mx-auto space-y-4">
<div className="bg-white border border-gray-200 rounded-xl">
<button className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-gray-900 text-left">What is the minimum amount to start DCA?</span>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</button>
<div className="px-6 pb-5 text-gray-600">
                            You can start DCA with as little as ฿1,000 per month for mutual funds, or ฿3,000 for stocks and DRs, depending on the platform.
                        </div>
</div>
<div className="bg-white border border-gray-200 rounded-xl">
<button className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-gray-900 text-left">How often should I invest?</span>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</button>
</div>
<div className="bg-white border border-gray-200 rounded-xl">
<button className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-gray-900 text-left">Can I change my monthly investment amount?</span>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</button>
</div>
<div className="bg-white border border-gray-200 rounded-xl">
<button className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-gray-900 text-left">What happens during market downturns?</span>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</button>
</div>
<div className="bg-white border border-gray-200 rounded-xl">
<button className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-gray-900 text-left">When should I stop DCA and take profits?</span>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-2xl p-12">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8 text-center">Investment Glossary</h2>
<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
<div className="bg-white rounded-lg p-6 border border-gray-200">
<h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                            Dollar-Cost Averaging (DCA)
                            <i className="w-4 h-4 text-gray-400 ml-2" data-lucide="info"></i>
</h3>
<p className="text-sm text-gray-600">Strategy of investing fixed amounts at regular intervals regardless of price</p>
</div>
<div className="bg-white rounded-lg p-6 border border-gray-200">
<h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                            Volatility
                            <i className="w-4 h-4 text-gray-400 ml-2" data-lucide="info"></i>
</h3>
<p className="text-sm text-gray-600">Measure of price fluctuations in an investment over time</p>
</div>
<div className="bg-white rounded-lg p-6 border border-gray-200">
<h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                            Dividend Yield
                            <i className="w-4 h-4 text-gray-400 ml-2" data-lucide="info"></i>
</h3>
<p className="text-sm text-gray-600">Annual dividends per share divided by the current stock price</p>
</div>
<div className="bg-white rounded-lg p-6 border border-gray-200">
<h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                            Compound Returns
                            <i className="w-4 h-4 text-gray-400 ml-2" data-lucide="info"></i>
</h3>
<p className="text-sm text-gray-600">Returns earned on both the initial investment and accumulated gains</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-20" id="campaigns">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-12 mb-12 text-center relative overflow-hidden">
<div className="absolute inset-0 opacity-10">
<div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
</div>
<div className="relative z-10">
<div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
<i className="w-4 h-4 mr-2" data-lucide="gift"></i>
                        Limited Time Offer
                    </div>
<h1 className="text-5xl font-semibold tracking-tight text-white mb-4">DCA Top-Up Challenge 2024</h1>
<p className="text-xl text-white/90 mb-8">Invest consistently and win rewards up to ฿50,000</p>
<div className="flex items-center justify-center gap-8 mb-8">
<div className="text-center">
<div className="text-4xl font-semibold text-white">15</div>
<div className="text-sm text-white/80">Days</div>
</div>
<div className="text-3xl text-white">:</div>
<div className="text-center">
<div className="text-4xl font-semibold text-white">08</div>
<div className="text-sm text-white/80">Hours</div>
</div>
<div className="text-3xl text-white">:</div>
<div className="text-center">
<div className="text-4xl font-semibold text-white">42</div>
<div className="text-sm text-white/80">Minutes</div>
</div>
</div>
<button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
                        Join Challenge Now
                    </button>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8 mb-12">
<div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-orange-600" data-lucide="trophy"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Top Rewards</h3>
<div className="text-3xl font-semibold text-orange-600 mb-2">฿50,000</div>
<p className="text-sm text-gray-600">Cash prize for top performers</p>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-blue-600" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Participants</h3>
<div className="text-3xl font-semibold text-blue-600 mb-2">2,847</div>
<p className="text-sm text-gray-600">Investors already joined</p>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-green-600" data-lucide="calendar"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Duration</h3>
<div className="text-3xl font-semibold text-green-600 mb-2">3 Months</div>
<p className="text-sm text-gray-600">Challenge period</p>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-12 mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8 text-center">How to Participate</h2>
<div className="grid md:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-semibold">1</div>
<h3 className="font-semibold text-gray-900 mb-2">Register</h3>
<p className="text-sm text-gray-600">Sign up for the challenge via your app</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-semibold">2</div>
<h3 className="font-semibold text-gray-900 mb-2">Set DCA</h3>
<p className="text-sm text-gray-600">Start monthly investments of ฿5,000+</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-semibold">3</div>
<h3 className="font-semibold text-gray-900 mb-2">Stay Consistent</h3>
<p className="text-sm text-gray-600">Maintain for 3 months minimum</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-semibold">4</div>
<h3 className="font-semibold text-gray-900 mb-2">Win Rewards</h3>
<p className="text-sm text-gray-600">Earn points and prizes</p>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 mb-12 text-white">
<h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">Your Challenge Progress</h2>
<div className="max-w-2xl mx-auto">
<div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
<div className="flex justify-between items-center mb-4">
<span className="text-sm">Months Completed</span>
<span className="text-2xl font-semibold">2/3</span>
</div>
<div className="w-full bg-white/20 rounded-full h-4 mb-6">
<div className="bg-white rounded-full h-4" style={{width: '66.6%'}}></div>
</div>
<div className="grid grid-cols-3 gap-4 text-center">
<div>
<div className="text-2xl font-semibold mb-1">฿15,000</div>
<div className="text-xs text-white/80">Total Invested</div>
</div>
<div>
<div className="text-2xl font-semibold mb-1">850</div>
<div className="text-xs text-white/80">Points Earned</div>
</div>
<div>
<div className="text-2xl font-semibold mb-1">#127</div>
<div className="text-xs text-white/80">Leaderboard Rank</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Ready to Join?</h2>
<p className="text-lg text-white/90 mb-8">Start your DCA journey and compete for amazing rewards</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-6 py-3 bg-white text-orange-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                        Join via YSinvest
                    </button>
<button className="px-6 py-3 bg-white text-orange-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                        Join via AomWise
                    </button>
</div>
</div>
</div>
</section>

<section className="bg-white py-20" id="success-stories">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-16">
<h1 className="text-5xl font-semibold tracking-tight text-gray-900 mb-6">See How DCA Changes Lives</h1>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">Real investors, real results, real inspiration</p>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center mb-20">
<div>
<div className="inline-flex items-center px-3 py-1 bg-blue-100 rounded-full text-sm font-medium text-blue-800 mb-4">
                        5 Years Journey
                    </div>
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">From Zero to Financial Freedom</h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        "I started DCA investing in 2019 with just ฿3,000 per month. As a teacher with a modest salary, I never thought I could build substantial wealth. Today, my portfolio is worth over ฿350,000, and I'm on track to retire comfortably."
                    </p>
<div className="flex items-center mb-6">
<img alt="Linda" className="w-16 h-16 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-semibold text-gray-900">Linda Park</div>
<div className="text-sm text-gray-600">High School Teacher, Age 35</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
<div>
<div className="text-2xl font-semibold text-gray-900">฿180K</div>
<div className="text-sm text-gray-600">Total Invested</div>
</div>
<div>
<div className="text-2xl font-semibold text-green-600">฿350K</div>
<div className="text-sm text-gray-600">Current Value</div>
</div>
<div>
<div className="text-2xl font-semibold text-blue-600">+94%</div>
<div className="text-sm text-gray-600">Total Return</div>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
<div className="bg-white rounded-xl p-6 shadow-lg">
<h3 className="text-sm font-medium text-gray-900 mb-4">5-Year Investment Growth</h3>
<div className="h-64">
<svg className="w-full h-full" viewbox="0 0 400 200">
<defs>
<lineargradient id="areaGradient1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: '0.3'}}></stop>
<stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>

<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="400" y1="50" y2="50"></line>
<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="400" y1="100" y2="100"></line>
<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="400" y1="150" y2="150"></line>

<polyline fill="url(#areaGradient1)" points="0,180 80,160 160,140 240,110 320,70 400,40 400,200 0,200"></polyline>

<polyline fill="none" points="0,180 80,160 160,140 240,110 320,70 400,40" stroke="#3b82f6" strokeWidth="3"></polyline>
</svg>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center mb-20">
<div className="order-2 md:order-1">
<div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
<div className="bg-white rounded-xl p-6 shadow-lg">
<h3 className="text-sm font-medium text-gray-900 mb-4">3-Year Investment Journey</h3>
<div className="h-64">
<svg className="w-full h-full" viewbox="0 0 400 200">
<defs>
<lineargradient id="areaGradient2" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#10b981', stopOpacity: '0.3'}}></stop>
<stop offset="100%" style={{stopColor: '#10b981', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>

<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="400" y1="50" y2="50"></line>
<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="400" y1="100" y2="100"></line>
<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="400" y1="150" y2="150"></line>

<polyline fill="url(#areaGradient2)" points="0,170 100,155 200,130 300,95 400,60 400,200 0,200"></polyline>

<polyline fill="none" points="0,170 100,155 200,130 300,95 400,60" stroke="#10b981" strokeWidth="3"></polyline>
</svg>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="inline-flex items-center px-3 py-1 bg-green-100 rounded-full text-sm font-medium text-green-800 mb-4">
                        3 Years Journey
                    </div>
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Tech Professional's Side Hustle</h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        "Working in tech, I understood compound growth but never applied it to my finances. DCA changed that. I automated ฿10,000 monthly investments and forgot about it. Three years later, I have a solid emergency fund plus growth."
                    </p>
<div className="flex items-center mb-6">
<img alt="James" className="w-16 h-16 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-semibold text-gray-900">James Wong</div>
<div className="text-sm text-gray-600">Software Engineer, Age 29</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
<div>
<div className="text-2xl font-semibold text-gray-900">฿360K</div>
<div className="text-sm text-gray-600">Total Invested</div>
</div>
<div>
<div className="text-2xl font-semibold text-green-600">฿485K</div>
<div className="text-sm text-gray-600">Current Value</div>
</div>
<div>
<div className="text-2xl font-semibold text-blue-600">+35%</div>
<div className="text-sm text-gray-600">Total Return</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center mb-20">
<div>
<div className="inline-flex items-center px-3 py-1 bg-purple-100 rounded-full text-sm font-medium text-purple-800 mb-4">
                        10 Years Journey
                    </div>
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">The Early Bird Advantage</h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        "I started DCA right after college with just ฿2,000 monthly. My friends thought I was crazy. Ten years later, while they're still saving for down payments, I own my first condo and have ฿800K in investments."
                    </p>
<div className="flex items-center mb-6">
<img alt="Sarah" className="w-16 h-16 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-semibold text-gray-900">Sarah Chen</div>
<div className="text-sm text-gray-600">Marketing Manager, Age 32</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
<div>
<div className="text-2xl font-semibold text-gray-900">฿240K</div>
<div className="text-sm text-gray-600">Total Invested</div>
</div>
<div>
<div className="text-2xl font-semibold text-green-600">฿820K</div>
<div className="text-sm text-gray-600">Current Value</div>
</div>
<div>
<div className="text-2xl font-semibold text-blue-600">+242%</div>
<div className="text-sm text-gray-600">Total Return</div>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
<div className="bg-white rounded-xl p-6 shadow-lg">
<h3 className="text-sm font-medium text-gray-900 mb-4">10-Year Compound Growth</h3>
<div className="h-64">
<svg className="w-full h-full" viewbox="0 0 400 200">
<defs>
<lineargradient id="areaGradient3" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: '0.3'}}></stop>
<stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>

<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="400" y1="50" y2="50"></line>
<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="400" y1="100" y2="100"></line>
<line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="400" y1="150" y2="150"></line>

<polyline fill="url(#areaGradient3)" points="0,185 50,180 100,170 150,155 200,135 250,110 300,75 350,45 400,20 400,200 0,200"></polyline>

<polyline fill="none" points="0,185 50,180 100,170 150,155 200,135 250,110 300,75 350,45 400,20" stroke="#8b5cf6" strokeWidth="3"></polyline>
</svg>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Start Your Story Today</h2>
<p className="text-lg text-white/90 mb-8">Join thousands of successful DCA investors building wealth consistently</p>
<button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
                    Begin Your DCA Journey
                </button>
</div>
</div>
</section>

<section className="bg-gray-50 py-20" id="get-started">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-16">
<h1 className="text-5xl font-semibold tracking-tight text-gray-900 mb-6">How to Start DCA with Yuanta</h1>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">Four simple steps to begin your investment journey</p>
</div>

<div className="grid md:grid-cols-4 gap-8 mb-20">
<div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all">
<div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 text-white text-2xl font-semibold">1</div>
<div className="mb-4">
<i className="w-10 h-10 text-blue-600" data-lucide="smartphone"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Download App</h3>
<p className="text-gray-600 mb-4">Choose from Streaming, YSinvest, or AomWise based on your investment preference</p>
<div className="text-sm text-gray-500">2-3 minutes</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all">
<div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 text-white text-2xl font-semibold">2</div>
<div className="mb-4">
<i className="w-10 h-10 text-green-600" data-lucide="user-check"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Open Account</h3>
<p className="text-gray-600 mb-4">Complete KYC verification with your ID card and a quick video call</p>
<div className="text-sm text-gray-500">5-10 minutes</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all">
<div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 text-white text-2xl font-semibold">3</div>
<div className="mb-4">
<i className="w-10 h-10 text-purple-600" data-lucide="search"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Choose Product</h3>
<p className="text-gray-600 mb-4">Browse and select mutual funds, stocks, or DRs suitable for DCA</p>
<div className="text-sm text-gray-500">10-15 minutes</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all">
<div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6 text-white text-2xl font-semibold">4</div>
<div className="mb-4">
<i className="w-10 h-10 text-orange-600" data-lucide="calendar"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Set Monthly Investment</h3>
<p className="text-gray-600 mb-4">Configure automatic monthly investments and relax as your wealth grows</p>
<div className="text-sm text-gray-500">3-5 minutes</div>
</div>
</div>

<div className="mb-20">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8 text-center">Download Our Apps</h2>
<div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
<div className="bg-white rounded-xl border-2 border-gray-200 p-8 text-center hover:border-blue-500 hover:shadow-xl transition-all">
<div className="w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-semibold" style={{letterSpacing: '-0.05em'}}>ST</div>
<h3 className="text-xl font-semibold text-gray-900 mb-4">Streaming</h3>
<div className="bg-gray-100 rounded-lg p-6 mb-4">
<div className="w-32 h-32 mx-auto bg-white rounded-lg border border-gray-300 flex items-center justify-center">
<i className="w-20 h-20 text-gray-400" data-lucide="qr-code"></i>
</div>
</div>
<p className="text-sm text-gray-600">Scan to download</p>
</div>
<div className="bg-white rounded-xl border-2 border-gray-200 p-8 text-center hover:border-green-500 hover:shadow-xl transition-all">
<div className="w-20 h-20 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-semibold" style={{letterSpacing: '-0.05em'}}>YS</div>
<h3 className="text-xl font-semibold text-gray-900 mb-4">YSinvest</h3>
<div className="bg-gray-100 rounded-lg p-6 mb-4">
<div className="w-32 h-32 mx-auto bg-white rounded-lg border border-gray-300 flex items-center justify-center">
<i className="w-20 h-20 text-gray-400" data-lucide="qr-code"></i>
</div>
</div>
<p className="text-sm text-gray-600">Scan to download</p>
</div>
<div className="bg-white rounded-xl border-2 border-gray-200 p-8 text-center hover:border-purple-500 hover:shadow-xl transition-all">
<div className="w-20 h-20 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-semibold" style={{letterSpacing: '-0.05em'}}>AW</div>
<h3 className="text-xl font-semibold text-gray-900 mb-4">AomWise</h3>
<div className="bg-gray-100 rounded-lg p-6 mb-4">
<div className="w-32 h-32 mx-auto bg-white rounded-lg border border-gray-300 flex items-center justify-center">
<i className="w-20 h-20 text-gray-400" data-lucide="qr-code"></i>
</div>
</div>
<p className="text-sm text-gray-600">Scan to download</p>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8 text-center">How to Set Up DCA Orders?</h2>
<div className="space-y-4">
<div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-gray-900 text-left">How do I enable automatic monthly investments?</span>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</button>
<div className="px-6 pb-5 text-gray-600">
                            In your app, go to the product page, select "Set up DCA", choose your monthly amount and date, then link your bank account for auto-debit. That's it!
                        </div>
</div>
<div className="bg-white border border-gray-200 rounded-xl">
<button className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-gray-900 text-left">Can I pause or modify my DCA plan?</span>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</button>
</div>
<div className="bg-white border border-gray-200 rounded-xl">
<button className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-gray-900 text-left">What payment methods are accepted?</span>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</button>
</div>
<div className="bg-white border border-gray-200 rounded-xl">
<button className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-gray-900 text-left">Is there a lock-in period?</span>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Ready to Transform Your Financial Future?</h2>
<p className="text-lg text-white/90 mb-8">Join thousands of investors building wealth through DCA</p>
<button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
                    Start DCA Now
                </button>
</div>
</div>
</section>

<section className="bg-white py-20" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-20">
<h1 className="text-5xl font-semibold tracking-tight text-gray-900 mb-6">Empowering Investors for the Long Run</h1>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">Yuanta's commitment to making consistent investing accessible to everyone</p>
</div>

<div className="grid md:grid-cols-2 gap-16 items-center mb-24">
<div>
<div className="inline-flex items-center px-3 py-1 bg-blue-100 rounded-full text-sm font-medium text-blue-800 mb-6">
                        Our Mission
                    </div>
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">Making DCA Simple and Accessible</h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        At Yuanta, we believe wealth building shouldn't be complicated. Dollar-Cost Averaging is one of the most proven strategies for long-term investment success, and we've made it easier than ever to implement.
                    </p>
<p className="text-lg text-gray-600 leading-relaxed">
                        Our platforms—Streaming, YSinvest, and AomWise—are designed to remove barriers and empower every Thai investor to build their financial future with confidence.
                    </p>
</div>
<div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12 border border-blue-200">
<div className="grid grid-cols-2 gap-8">
<div className="text-center">
<div className="text-4xl font-semibold text-blue-600 mb-2">500K+</div>
<div className="text-sm text-gray-600">Active Investors</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-blue-600 mb-2">฿50B+</div>
<div className="text-sm text-gray-600">Assets Under Management</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-blue-600 mb-2">25+</div>
<div className="text-sm text-gray-600">Years Experience</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-blue-600 mb-2">98%</div>
<div className="text-sm text-gray-600">Satisfaction Rate</div>
</div>
</div>
</div>
</div>

<div className="mb-24">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Global Network, Local Expertise</h2>
<p className="text-lg text-gray-600">Bringing world-class investment opportunities to Thai investors</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="globe"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">International Reach</h3>
<p className="text-gray-600">Part of a global financial network spanning Asia, providing access to diverse investment opportunities across markets.</p>
</div>
<div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
<div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Regulatory Excellence</h3>
<p className="text-gray-600">Fully licensed and regulated by the SEC Thailand, ensuring your investments are secure and compliant.</p>
</div>
<div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
<div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="award"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Award-Winning Service</h3>
<p className="text-gray-600">Recognized for innovation, customer service, and commitment to investor education across Thailand.</p>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Awards &amp; Milestones</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="flex items-start">
<div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-6 h-6 text-white" data-lucide="trophy"></i>
</div>
<div>
<div className="font-semibold text-gray-900 mb-1">Best Digital Platform 2023</div>
<div className="text-sm text-gray-600">Thailand Fintech Awards</div>
</div>
</div>
<div className="flex items-start">
<div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-6 h-6 text-white" data-lucide="star"></i>
</div>
<div>
<div className="font-semibold text-gray-900 mb-1">Top Brokerage Firm 2023</div>
<div className="text-sm text-gray-600">SET Awards</div>
</div>
</div>
<div className="flex items-start">
<div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-6 h-6 text-white" data-lucide="heart"></i>
</div>
<div>
<div className="font-semibold text-gray-900 mb-1">Customer Service Excellence</div>
<div className="text-sm text-gray-600">Thailand Business Awards 2022</div>
</div>
</div>
<div className="flex items-start">
<div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-6 h-6 text-white" data-lucide="zap"></i>
</div>
<div>
<div className="font-semibold text-gray-900 mb-1">Innovation in Wealth Tech</div>
<div className="text-sm text-gray-600">Asian Banking &amp; Finance 2022</div>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Start Your Journey with Yuanta DCA</h2>
<p className="text-lg text-white/90 mb-8">Join a trusted partner in your wealth-building journey</p>
<button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
                    Get Started Today
                </button>
</div>
</div>
</section>

<section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-16">
<h1 className="text-5xl font-semibold tracking-tight text-gray-900 mb-6">We're Here to Help You Invest Better</h1>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">Get in touch with our expert team for personalized support</p>
</div>

<div className="grid md:grid-cols-3 gap-8 mb-16">
<div className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-lg transition-all">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-blue-600" data-lucide="phone"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Call Center</h3>
<p className="text-gray-600 mb-4">Mon-Fri 8:00 AM - 5:00 PM</p>
<a className="text-blue-600 font-semibold text-lg" href="tel:021234567">02-123-4567</a>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-lg transition-all">
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-green-600" data-lucide="mail"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Email Support</h3>
<p className="text-gray-600 mb-4">Response within 24 hours</p>
<a className="text-green-600 font-semibold" href="mailto:dca@yuanta.co.th">dca@yuanta.co.th</a>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-lg transition-all">
<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-purple-600" data-lucide="message-circle"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Live Chat</h3>
<p className="text-gray-600 mb-4">Available 24/7 on our apps</p>
<button className="text-purple-600 font-semibold">Start Chat</button>
</div>
</div>

<div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 p-12 mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8 text-center">Send Us a Message</h2>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Phone Number</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Subject</label>
<select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
<option>General Inquiry</option>
<option>Technical Support</option>
<option>Account Opening</option>
<option>DCA Setup Help</option>
<option>Product Information</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
<textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" rows="5"></textarea>
</div>
<button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors" type="submit">
                        Send Message
                    </button>
</form>
</div>

<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8 text-center">Visit Our Branch Offices</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white rounded-xl border border-gray-200 p-8">
<h3 className="text-xl font-semibold text-gray-900 mb-4">Bangkok Headquarters</h3>
<div className="space-y-3 text-gray-600">
<div className="flex items-start">
<i className="w-5 h-5 text-blue-600 mr-3 mt-0.5" data-lucide="map-pin"></i>
<span>99 Wireless Road, Lumpini, Pathumwan, Bangkok 10330</span>
</div>
<div className="flex items-start">
<i className="w-5 h-5 text-blue-600 mr-3 mt-0.5" data-lucide="clock"></i>
<span>Mon-Fri: 8:30 AM - 5:00 PM</span>
</div>
<div className="flex items-start">
<i className="w-5 h-5 text-blue-600 mr-3 mt-0.5" data-lucide="phone"></i>
<span>02-123-4567</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8">
<h3 className="text-xl font-semibold text-gray-900 mb-4">Chiang Mai Branch</h3>
<div className="space-y-3 text-gray-600">
<div className="flex items-start">
<i className="w-5 h-5 text-blue-600 mr-3 mt-0.5" data-lucide="map-pin"></i>
<span>123 Nimmanhemin Road, Suthep, Mueang, Chiang Mai 50200</span>
</div>
<div className="flex items-start">
<i className="w-5 h-5 text-blue-600 mr-3 mt-0.5" data-lucide="clock"></i>
<span>Mon-Fri: 9:00 AM - 5:00 PM</span>
</div>
<div className="flex items-start">
<i className="w-5 h-5 text-blue-600 mr-3 mt-0.5" data-lucide="phone"></i>
<span>053-987-6543</span>
</div>
</div>
</div>
</div>
</div>

<div className="text-center">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Follow Us on Social Media</h2>
<div className="flex items-center justify-center gap-6">
<a className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="facebook"></i>
</a>
<a className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="instagram"></i>
</a>
<a className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="twitter"></i>
</a>
<a className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="youtube"></i>
</a>
<a className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-5 gap-12 mb-12">
<div className="md:col-span-2">
<div className="text-2xl font-semibold tracking-tight mb-4" style={{letterSpacing: '-0.05em'}}>
                        YUANTA<span className="text-blue-400">DCA</span>
</div>
<p className="text-gray-400 mb-6">Building wealth through consistent, disciplined investing. Start your DCA journey with Thailand's trusted investment partner.</p>
<div className="flex gap-4">
<a className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="youtube"></i>
</a>
</div>
</div>
<div>
<h3 className="font-semibold text-white mb-4">Learn</h3>
<ul className="space-y-3 text-gray-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#learn">What is DCA?</a></li>
<li><a className="hover:text-white transition-colors" href="#learn">How It Works</a></li>
<li><a className="hover:text-white transition-colors" href="#tools">DCA Calculator</a></li>
<li><a className="hover:text-white transition-colors" href="#tools">Video Tutorials</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold text-white mb-4">Invest</h3>
<ul className="space-y-3 text-gray-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#choices">Mutual Funds</a></li>
<li><a className="hover:text-white transition-colors" href="#choices">Dividend Stocks</a></li>
<li><a className="hover:text-white transition-colors" href="#choices">Depository Receipts</a></li>
<li><a className="hover:text-white transition-colors" href="#campaigns">Promotions</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold text-white mb-4">Company</h3>
<ul className="space-y-3 text-gray-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">News</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
<p className="mb-4">© 2024 Yuanta Securities (Thailand) Co., Ltd. All rights reserved.</p>
<p className="text-xs">Investment involves risk. Past performance does not guarantee future returns. Please read prospectus carefully before investing.</p>
</div>
</div>
</footer>



    </>
  );
}
