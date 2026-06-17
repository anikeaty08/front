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



        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar background on scroll
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-zinc-950/95');
            } else {
                nav.classList.remove('bg-zinc-950/95');
            }
        });
    
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
      

<nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
<span className="text-sm font-semibold tracking-tighter text-white">TZ</span>
</div>
<span className="text-lg font-semibold tracking-tight">TaskZero</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:block text-sm text-zinc-300 hover:text-white transition-colors">Log in</button>
<button className="bg-emerald-500 hover:bg-emerald-400 text-zinc-900 text-sm font-medium px-4 py-2 rounded-lg transition-colors">Get Started</button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 mb-6">
<div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
<span className="text-xs text-zinc-400">Now serving 500+ Nepali businesses</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                    Your AI assistant for
                    <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">WhatsApp Business</span>
</h1>
<p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                    TaskZero handles customer queries, takes orders, and manages your business conversations in Nepali and English — 24/7, automatically.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:message-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                        Start Free Trial
                    </button>
<button className="w-full sm:w-auto border border-zinc-700 hover:border-zinc-600 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play" data-width="20" style={{strokeWidth: '1.5'}}></span>
                        Watch Demo
                    </button>
</div>
</div>

<div className="mt-16 relative">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 pointer-events-none"></div>
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-8 max-w-4xl mx-auto">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:bot" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-sm font-medium">TaskZero Bot</p>
<p className="text-xs text-zinc-500">Online</p>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-end">
<div className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                                मलाई मोमो अर्डर गर्नु छ
                            </div>
</div>
<div className="flex justify-start">
<div className="bg-zinc-800 text-white text-sm px-4 py-2 rounded-2xl rounded-bl-md max-w-sm">
                                नमस्ते! 🙏 मोमो अर्डर गर्न चाहनुहुन्छ? कृपया quantity र delivery address दिनुहोस्।
                            </div>
</div>
<div className="flex justify-end">
<div className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                                2 plate chicken momo, Lazimpat</div>
</div>
<div className="flex justify-start">
<div className="bg-zinc-800 text-white text-sm px-4 py-2 rounded-2xl rounded-bl-md max-w-sm">
                                ठीक छ! ✅ 2 plate chicken momo, Lazimpat मा delivery। Total: Rs. 400। Confirm गर्नुहोस्?
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 border-y border-zinc-800/50">
<div className="max-w-6xl mx-auto">
<p className="text-center text-sm text-zinc-500 mb-8">Trusted by leading businesses across Nepal</p>
<div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-50">
<div className="text-xl font-semibold text-zinc-400">Foodmandu</div>
<div className="text-xl font-semibold text-zinc-400">Daraz</div>
<div className="text-xl font-semibold text-zinc-400">Sastodeal</div>
<div className="text-xl font-semibold text-zinc-400">Khalti</div>
<div className="text-xl font-semibold text-zinc-400">Pathao</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="features">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-emerald-400 text-sm font-medium mb-4 block">Features</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Everything you need to automate</h2>
<p className="text-zinc-400 max-w-xl mx-auto">Powerful features designed specifically for Nepali businesses to streamline customer communication.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
<span className="iconify text-emerald-400" data-icon="lucide:languages" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Nepali &amp; English Support</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Fluently responds in both Nepali and English, understanding context and local expressions perfectly.</p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
<span className="iconify text-emerald-400" data-icon="lucide:shopping-cart" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Order Management</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Automatically takes orders, confirms details, and sends notifications to your dashboard in real-time.</p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
<span className="iconify text-emerald-400" data-icon="lucide:clock" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">24/7 Availability</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Never miss a customer message. TaskZero responds instantly, any time of day or night.</p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
<span className="iconify text-emerald-400" data-icon="lucide:bar-chart-3" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Analytics Dashboard</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Track conversations, orders, and customer insights with beautiful, actionable analytics.</p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
<span className="iconify text-emerald-400" data-icon="lucide:zap" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Instant Setup</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Connect your WhatsApp Business in minutes. No coding required, just simple configuration.</p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
<span className="iconify text-emerald-400" data-icon="lucide:shield-check" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Human Handoff</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Complex queries are seamlessly transferred to your team with full conversation context.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-zinc-900/30" id="how-it-works">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-emerald-400 text-sm font-medium mb-4 block">How it Works</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Get started in 3 simple steps</h2>
<p className="text-zinc-400 max-w-xl mx-auto">From signup to your first automated conversation in under 10 minutes.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-zinc-900 font-semibold">1</div>
<div className="hidden md:block flex-1 h-px bg-gradient-to-r from-emerald-500 to-zinc-700"></div>
</div>
<h3 className="text-lg font-medium mb-2">Connect WhatsApp</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Link your WhatsApp Business account using our secure QR code connection process.</p>
</div>

<div className="relative">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-zinc-900 font-semibold">2</div>
<div className="hidden md:block flex-1 h-px bg-gradient-to-r from-emerald-500 to-zinc-700"></div>
</div>
<h3 className="text-lg font-medium mb-2">Train Your Bot</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Upload your menu, FAQ, or product catalog. Our AI learns your business in minutes.</p>
</div>

<div className="relative">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-zinc-900 font-semibold">3</div>
</div>
<h3 className="text-lg font-medium mb-2">Go Live</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Start receiving orders and handling customer queries automatically, 24/7.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<p className="text-4xl sm:text-5xl font-semibold text-emerald-400 mb-2">500+</p>
<p className="text-sm text-zinc-400">Active Businesses</p>
</div>
<div className="text-center">
<p className="text-4xl sm:text-5xl font-semibold text-emerald-400 mb-2">2M+</p>
<p className="text-sm text-zinc-400">Messages Handled</p>
</div>
<div className="text-center">
<p className="text-4xl sm:text-5xl font-semibold text-emerald-400 mb-2">98%</p>
<p className="text-sm text-zinc-400">Response Accuracy</p>
</div>
<div className="text-center">
<p className="text-4xl sm:text-5xl font-semibold text-emerald-400 mb-2">&lt;2s</p>
<p className="text-sm text-zinc-400">Avg Response Time</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-zinc-900/30" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-emerald-400 text-sm font-medium mb-4 block">Pricing</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Simple, transparent pricing</h2>
<p className="text-zinc-400 max-w-xl mx-auto">Choose the plan that fits your business. All plans include a 14-day free trial.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
<h3 className="text-lg font-medium mb-2">Starter</h3>
<p className="text-sm text-zinc-400 mb-6">For small businesses just getting started</p>
<div className="mb-6">
<span className="text-4xl font-semibold">Rs. 2,999</span>
<span className="text-zinc-400">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '2'}}></span>
                            Up to 1,000 messages/month
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '2'}}></span>
                            1 WhatsApp number
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '2'}}></span>
                            Basic analytics
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '2'}}></span>
                            Email support
                        </li>
</ul>
<button className="w-full border border-zinc-700 hover:border-zinc-600 text-white font-medium py-3 rounded-lg transition-colors">
                        Start Free Trial
                    </button>
</div>

<div className="bg-zinc-900 border-2 border-emerald-500 rounded-2xl p-6 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2">
<span className="bg-emerald-500 text-zinc-900 text-xs font-medium px-3 py-1 rounded-full">Most Popular</span>
</div>
<h3 className="text-lg font-medium mb-2">Pro</h3>
<p className="text-sm text-zinc-400 mb-6">For growing businesses with more demand</p>
<div className="mb-6">
<span className="text-4xl font-semibold">Rs. 7,999</span>
<span className="text-zinc-400">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '2'}}></span>
                            Up to 10,000 messages/month
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '2'}}></span>
                            3 WhatsApp numbers
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '2'}}></span>
                            Advanced analytics
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '2'}}></span>
                            Priority support
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '2'}}></span>
                            Custom training
                        </li>
</ul>
<button className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-medium py-3 rounded-lg transition-colors">
                        Start Free Trial
                    </button>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
<h3 className="text-lg font-medium mb-2">Enterprise</h3>
<p className="text-sm text-zinc-400 mb-6">For large businesses with custom needs</p>
<div className="mb-6">
<span className="text-4xl font-semibold">Custom</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '2'}}></span>
                            Unlimited messages
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '2'}}></span>
                            Unlimited WhatsApp numbers
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '2'}}></span>
                            Custom integrations
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '2'}}></span>
                            Dedicated account manager
                        
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '2'}}></span>
                            SLA guarantee
                        </li>
</ul>
<button className="w-full border border-zinc-700 hover:border-zinc-600 text-white font-medium py-3 rounded-lg transition-colors">
                        Contact Sales
                    </button>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-emerald-400 text-sm font-medium mb-4 block">Testimonials</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Loved by Nepali businesses</h2>
<p className="text-zinc-400 max-w-xl mx-auto">See what our customers have to say about TaskZero.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
<div className="flex items-center gap-1 mb-4">
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
                        yellow-400" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}&gt;
</div>
<p className="text-sm text-zinc-300 mb-6 leading-relaxed">"TaskZero ले हाम्रो order management लाई completely automate गरिदियो। अब म रातको order miss गर्दिन।"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-sm font-medium">RK</div>
<div>
<p className="text-sm font-medium">Rajesh Karki</p>
<p className="text-xs text-zinc-500">Owner, Momo House Kathmandu</p>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
<div className="flex items-center gap-1 mb-4">
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
</div>
<p className="text-sm text-zinc-300 mb-6 leading-relaxed">"Customer inquiries 70% कम भयो because bot ले सबै common questions answer गर्छ। Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-sm font-medium">SS</div>
<div>
<p className="text-sm font-medium">Sunita Shrestha</p>
<p className="text-xs text-zinc-500">CEO, StyleNP Boutique</p>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
<div className="flex items-center gap-1 mb-4">
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
</div>
<p className="text-sm text-zinc-300 mb-6 leading-relaxed">"Setup was incredibly easy. Within 30 minutes, we had a fully functional AI bot handling our delivery orders."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-sm font-medium">AP</div>
<div>
<p className="text-sm font-medium">Anil Pradhan</p>
<p className="text-xs text-zinc-500">Founder, QuickBite Delivery</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-zinc-900/30" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<span className="text-emerald-400 text-sm font-medium mb-4 block">FAQ</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Frequently asked questions</h2>
<p className="text-zinc-400">Everything you need to know about TaskZero.</p>
</div>
<div className="space-y-4">

<details className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium">के TaskZero ले Nepali language बुझ्छ?</span>
<span className="iconify text-zinc-400 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                        हो, TaskZero ले Nepali, English, र mixed (Nepanglish) messages पनि perfectly बुझ्छ र respond गर्छ। हाम्रो AI specifically Nepali context मा trained छ।
                    </div>
</summary></details>

<details className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium">How long does setup take?</span>
<span className="iconify text-zinc-400 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                        Most businesses are up and running within 10-15 minutes. Just connect your WhatsApp, upload your business information, and you're ready to go. No technical expertise required.
                    </div>
</details>

<details className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium">Can I take over conversations manually?</span>
<span className="iconify text-zinc-400 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                        Absolutely! You can take over any conversation at any time. The bot can also automatically hand off complex queries to your human team with full context preserved.
                    </div>
</details>

<details className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium">Is my customer data secure?</span>
<span className="iconify text-zinc-400 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                        Yes, we take security very seriously. All data is encrypted in transit and at rest. We're compliant with international data protection standards and never share your data with third parties.
                    </div>
</details>

<details className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium">What payment methods do you accept?</span>
<span className="iconify text-zinc-400 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                        We accept eSewa, Khalti, bank transfers, and all major credit/debit cards. For Enterprise plans, we also offer invoice-based payment options.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-4xl mx-auto">
<div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Ready to automate your WhatsApp?</h2>
<p className="text-zinc-400 mb-8 max-w-xl mx-auto">Join 500+ Nepali businesses already using TaskZero to handle customer conversations automatically.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-medium px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:rocket" data-width="20" style={{strokeWidth: '1.5'}}></span>
                            Start 14-Day Free Trial
                        </button>
<button className="w-full sm:w-auto border border-zinc-700 hover:border-zinc-600 text-white font-medium px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:calendar" data-width="20" style={{strokeWidth: '1.5'}}></span>
                            Schedule Demo
                        </button>
</div>
<p className="text-xs text-zinc-500 mt-6">No credit card required • Setup in under 10 minutes</p>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-zinc-800/50">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
<span className="text-sm font-semibold tracking-tighter text-white">TZ</span>
</div>
<span className="text-lg font-semibold tracking-tight">TaskZero</span>
</div>
<p className="text-sm text-zinc-400 mb-4">AI-powered WhatsApp automation for Nepali businesses.</p>
<div className="flex items-center gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
<div>
<h4 className="font-medium mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#features">Features</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#pricing">Pricing</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">API Docs</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-zinc-500">© 2024 TaskZero. All rights reserved.</p>
<p className="text-sm text-zinc-500">Made with ❤️ in Nepal</p>
</div>
</div>
</footer>



    </>
  );
}
