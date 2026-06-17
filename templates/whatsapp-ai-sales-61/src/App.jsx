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
      

<nav className="border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<span className="text-xl font-semibold tracking-tight">BYAPARI</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#features">Features</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#how-it-works">How it works</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:block text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Sign in</button>
<button className="bg-neutral-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors">Get started</button>
</div>
</div>
</div>
</nav>

<section className="relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-32">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-3 py-1 mb-8">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-xs font-medium text-neutral-700">AI-powered sales assistant for Nepal</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                    Close more sales on WhatsApp with AI
                </h1>
<p className="text-lg sm:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
                    Byapari automates your e-commerce customer conversations on WhatsApp, responds instantly in Nepali and English, and converts more visitors into paying customers.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-neutral-900 text-white text-base font-medium px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
<span>Start free trial</span>
<iconify-icon height="20" icon="lucide:arrow-right" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
</button>
<button className="w-full sm:w-auto border border-neutral-300 text-neutral-900 text-base font-medium px-6 py-3 rounded-lg hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon height="20" icon="lucide:play-circle" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
<span>Watch demo</span>
</button>
</div>
</div>

<div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
<div className="relative rounded-xl border border-neutral-200 bg-neutral-50 shadow-2xl p-2">
<div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
<div className="border-b border-neutral-200 px-4 py-3 flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-neutral-300"></div>
<div className="w-3 h-3 rounded-full bg-neutral-300"></div>
<div className="w-3 h-3 rounded-full bg-neutral-300"></div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
<div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
<div className="text-xs text-neutral-600 mb-1">Messages handled</div>
<div className="text-2xl font-semibold tracking-tight">2,847</div>
<div className="text-xs text-green-600 mt-1">+23% this week</div>
</div>
<div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
<div className="text-xs text-neutral-600 mb-1">Conversion rate</div>
<div className="text-2xl font-semibold tracking-tight">34.2%</div>
<div className="text-xs text-green-600 mt-1">+12% this week</div>
</div>
<div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
<div className="text-xs text-neutral-600 mb-1">Response time</div>
<div className="text-2xl font-semibold tracking-tight">1.2s</div>
<div className="text-xs text-neutral-600 mt-1">Average</div>
</div>
</div>
<div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
<iconify-icon className="text-green-600" height="20" icon="lucide:message-circle" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
<div className="flex-1">
<div className="text-sm font-medium text-green-900 mb-1">New customer inquiry</div>
<div className="text-sm text-green-700">म iPhone 14 को बारेमा जान्न चाहन्छु। कति पर्छ?</div>
<div className="text-xs text-green-600 mt-2">Responded in 0.8s • Nepali</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-32 bg-neutral-50" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
                    Everything you need to sell smarter
                </h2>
<p className="text-lg text-neutral-600">
                    Powerful AI capabilities designed specifically for Nepali e-commerce businesses
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white rounded-xl border border-neutral-200 p-6">
<div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-white" height="20" icon="lucide:message-square" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Bilingual support</h3>
<p className="text-sm text-neutral-600">
                        Fluently converses in both Nepali and English, understanding local context and shopping preferences.
                    </p>
</div>
<div className="bg-white rounded-xl border border-neutral-200 p-6">
<div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-white" height="20" icon="lucide:zap" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Instant responses</h3>
<p className="text-sm text-neutral-600">
                        Answer customer queries 24/7 in seconds, no matter what time they reach out.
                    </p>
</div>
<div className="bg-white rounded-xl border border-neutral-200 p-6">
<div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-white" height="20" icon="lucide:shopping-bag" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Product recommendations</h3>
<p className="text-sm text-neutral-600">
                        Smart AI suggests relevant products based on customer preferences and browsing history.
                    </p>
</div>
<div className="bg-white rounded-xl border border-neutral-200 p-6">
<div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-white" height="20" icon="lucide:package" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Order tracking</h3>
<p className="text-sm text-neutral-600">
                        Customers can check order status, delivery updates, and shipping info instantly through chat.
                    </p>
</div>
<div className="bg-white rounded-xl border border-neutral-200 p-6">
<div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-white" height="20" icon="lucide:trending-up" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Sales analytics</h3>
<p className="text-sm text-neutral-600">
                        Track conversations, conversion rates, and customer insights with detailed dashboards.
                    </p>
</div>
<div className="bg-white rounded-xl border border-neutral-200 p-6">
<div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-white" height="20" icon="lucide:wallet" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Payment integration</h3>
<p className="text-sm text-neutral-600">
                        Connect with eSewa, Khalti, and other local payment gateways for seamless checkout.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-32" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
                    Get started in minutes
                </h2>
<p className="text-lg text-neutral-600">
                    Three simple steps to transform your WhatsApp into a powerful sales channel
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
<div className="relative">
<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xl font-semibold mb-4">1</div>
<h3 className="text-xl font-semibold mb-2">Connect WhatsApp</h3>
<p className="text-sm text-neutral-600">
                            Link your WhatsApp Business account to Byapari with our simple integration wizard. Takes less than 5 minutes.
                        </p>
</div>
<div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-neutral-200" style={{width: 'calc(100% - 3rem)', marginLeft: '1.5rem'}}></div>
</div>
<div className="relative">
<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xl font-semibold mb-4">2</div>
<h3 className="text-xl font-semibold mb-2">Train your AI</h3>
<p className="text-sm text-neutral-600">
                            Upload your product catalog, set your brand voice, and customize responses. Our AI learns your business instantly.
                        </p>
</div>
<div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-neutral-200" style={{width: 'calc(100% - 3rem)', marginLeft: '1.5rem'}}></div>
</div>
<div className="relative">
<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xl font-semibold mb-4">3</div>
<h3 className="text-xl font-semibold mb-2">Start selling</h3>
<p className="text-sm text-neutral-600">
                            Your AI assistant is ready! Watch it handle customer inquiries, recommend products, and close sales 24/7.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-32 bg-neutral-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<p className="text-sm text-neutral-600 mb-8">Trusted by leading e-commerce businesses across Nepal</p>
<div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60">
<div className="text-xl font-semibold tracking-tight">DARAZ</div>
<div className="text-xl font-semibold tracking-tight">SASTODEAL</div>
<div className="text-xl font-semibold tracking-tight">HAMROBAZAAR</div>
<div className="text-xl font-semibold tracking-tight">THULO.COM</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
<div className="bg-white rounded-xl border border-neutral-200 p-6">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-yellow-400" height="16" icon="lucide:star" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" height="16" icon="lucide:star" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" height="16" icon="lucide:star" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" height="16" icon="lucide:star" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" height="16" icon="lucide:star" style={{fontSize: '1rem'}} width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 mb-4">
                        "Byapari transformed our customer service. We're handling 3x more inquiries with the same team size, and our conversion rate jumped by 40%."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
<div>
<div className="text-sm font-medium">Ramesh Sharma</div>
<div className="text-xs text-neutral-600">Owner, Electronics Store</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-neutral-200 p-6">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-yellow-400" height="16" icon="lucide:star" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" height="16" icon="lucide:star" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" height="16" icon="lucide:star" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" height="16" icon="lucide:star" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" height="16" icon="lucide:star" style={{fontSize: '1rem'}} width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 mb-4">
                        "The Nepali language support is incredible. Our customers love getting instant responses in their preferred language. Highly recommended!"
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
<div>
<div className="text-sm font-medium">Srijana Thapa</div>
<div className="text-xs text-neutral-600">Founder, Fashion Boutique</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-neutral-200 p-6">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-yellow-400" height="16" icon="lucide:star" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" height="16" icon="lucide:star" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" height="16" icon="lucide:star" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" height="16" icon="lucide:star" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" height="16" icon="lucide:star" style={{fontSize: '1rem'}} width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 mb-4">
                        "Game changer for our business. The AI handles routine questions perfectly, letting our team focus on complex customer needs and closing bigger deals."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
<div>
<div className="text-sm font-medium">Bikash Maharjan</div>
<div className="text-xs text-neutral-600">Director, Home Appliances</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-32" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
                    Simple, transparent pricing
                </h2>
<p className="text-lg text-neutral-600">
                    Start free, scale as you grow. No hidden fees.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
<div className="bg-white rounded-xl border border-neutral-200 p-8">
<div className="text-sm font-medium text-neutral-600 mb-2">Starter</div>
<div className="mb-4">
<span className="text-4xl font-semibold tracking-tight">Free</span>
</div>
<p className="text-sm text-neutral-600 mb-6">Perfect for trying out Byapari</p>
<button className="w-full border border-neutral-300 text-neutral-900 text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-50 transition-colors mb-6">
                        Get started
                    </button>
<div className="space-y-3">
<div className="flex items-start gap-2">
<iconify-icon className="text-neutral-900 mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-700">Up to 100 messages/month</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-neutral-900 mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-700">Bilingual support</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-neutral-900 mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-700">Basic analytics</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-neutral-900 mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-700">1 WhatsApp number</span>
</div>
</div>
</div>
<div className="bg-neutral-900 text-white rounded-xl border-2 border-neutral-900 p-8 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-900 px-3 py-1 rounded-full border-2 border-white">
<span className="text-xs font-medium">Most popular</span>
</div>
<div className="text-sm font-medium text-neutral-400 mb-2">Professional</div>
<div className="mb-1">
<span className="text-4xl font-semibold tracking-tight">₨4,999</span>
</div>
<p className="text-sm text-neutral-400 mb-6">per month</p>
<button className="w-full bg-white text-neutral-900 text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-100 transition-colors mb-6">
                        Start free trial
                    </button>
<div className="space-y-3">
<div className="flex items-start gap-2">
<iconify-icon className="text-white mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-300">Up to 5,000 messages/month</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-white mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-300">Everything in Starter</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-white mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-300">Advanced analytics</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-white mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-300">Payment integration</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-white mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-300">Up to 3 numbers</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-white mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-300">Priority support</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-neutral-200 p-8">
<div className="text-sm font-medium text-neutral-600 mb-2">Enterprise</div>
<div className="mb-4">
<span className="text-4xl font-semibold tracking-tight">Custom</span>
</div>
<p className="text-sm text-neutral-600 mb-6">For large businesses</p>
<button className="w-full bg-neutral-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors mb-6">
                        Contact sales
                    </button>
<div className="space-y-3">
<div className="flex items-start gap-2">
<iconify-icon className="text-neutral-900 mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-700">Unlimited messages</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-neutral-900 mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-700">Everything in Professional</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-neutral-900 mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-700">Custom integrations</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-neutral-900 mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-700">Unlimited numbers</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-neutral-900 mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-700">Dedicated account manager</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-neutral-900 mt-0.5" height="16" icon="lucide:check" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span className="text-sm text-neutral-700">24/7 phone support</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-32 bg-neutral-50">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
                Ready to transform your sales?
            </h2>
<p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of Nepali businesses using Byapari to sell more on WhatsApp
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-neutral-900 text-white text-base font-medium px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors">
                    Start your free trial
                </button>
<button className="w-full sm:w-auto border border-neutral-300 text-neutral-900 text-base font-medium px-6 py-3 rounded-lg hover:bg-neutral-50 transition-colors">
                    Schedule a demo
                </button>
</div>
<p className="text-xs text-neutral-500 mt-4">No credit card required • 14-day free trial</p>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 py-12" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-sm font-semibold mb-4">Product</h4>
<ul className="space-y-2">
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Features</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Pricing</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Security</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Roadmap</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">About</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Blog</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Careers</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Resources</h4>
<ul className="space-y-2">
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Documentation</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Help Center</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">API Reference</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Privacy</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Terms</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Cookie Policy</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900" href="#">Licenses</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tight">BYAPARI</span>
</div>
<p className="text-sm text-neutral-600">© 2024 Byapari. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon height="20" icon="lucide:facebook" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon height="20" icon="lucide:twitter" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon height="20" icon="lucide:linkedin" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon height="20" icon="lucide:instagram" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
