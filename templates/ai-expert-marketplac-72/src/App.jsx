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



        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // FAQ toggle
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.iconify');
            
            content.classList.toggle('hidden');
            icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        }
        
        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-sm');
            } else {
                navbar.classList.remove('shadow-sm');
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-18">

<div className="flex items-center">
<a className="text-xl font-semibold tracking-tight text-gray-900" href="#">iGOT<span className="text-blue-500">.AI</span></a>
</div>

<div className="hidden lg:flex items-center space-x-8">
<div className="relative group">
<button className="flex items-center text-gray-600 hover:text-blue-500 text-sm font-medium transition-colors">
                            Products
                            <span className="iconify ml-1 w-4 h-4" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>

<div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4">
<div className="space-y-1">
<a className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<span className="iconify w-5 h-5 text-blue-500 mr-3" data-icon="lucide:tag" style={{strokeWidth: '1.5'}}></span>
<div>
<div className="text-sm font-medium text-gray-900">Data Labeling</div>
<div className="text-xs text-gray-500">AI-assisted annotation tools</div>
</div>
</a>
<a className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<span className="iconify w-5 h-5 text-blue-500 mr-3" data-icon="lucide:brain" style={{strokeWidth: '1.5'}}></span>
<div>
<div className="text-sm font-medium text-gray-900">Model Training</div>
<div className="text-xs text-gray-500">Fine-tune custom SLMs</div>
</div>
</a>
<a className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<span className="iconify w-5 h-5 text-blue-500 mr-3" data-icon="lucide:bot" style={{strokeWidth: '1.5'}}></span>
<div>
<div className="text-sm font-medium text-gray-900">Agent Builder</div>
<div className="text-xs text-gray-500">Deploy AI agents at scale</div>
</div>
</a>
</div>
</div>
</div>
<a className="text-gray-600 hover:text-blue-500 text-sm font-medium transition-colors" href="#">For Experts</a>
<a className="text-gray-600 hover:text-blue-500 text-sm font-medium transition-colors" href="#">Pricing</a>
<a className="text-gray-600 hover:text-blue-500 text-sm font-medium transition-colors" href="#">Docs</a>
</div>

<div className="hidden lg:flex items-center space-x-4">
<a className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors" href="#">Log in</a>
<a className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors" href="#">Get Started</a>
</div>

<button className="lg:hidden p-2 text-gray-600" id="mobile-menu-btn">
<span className="iconify w-6 h-6" data-icon="lucide:menu" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="lg:hidden hidden bg-white border-t border-gray-100" id="mobile-menu">
<div className="px-4 py-6 space-y-4">
<a className="block text-gray-600 hover:text-blue-500 text-base font-medium" href="#">Products</a>
<a className="block text-gray-600 hover:text-blue-500 text-base font-medium" href="#">For Experts</a>
<a className="block text-gray-600 hover:text-blue-500 text-base font-medium" href="#">Pricing</a>
<a className="block text-gray-600 hover:text-blue-500 text-base font-medium" href="#">Docs</a>
<div className="pt-4 border-t border-gray-100 space-y-3">
<a className="block text-gray-600 text-base font-medium" href="#">Log in</a>
<a className="block bg-blue-500 text-white text-center text-base font-medium px-4 py-3 rounded-lg" href="#">Get Started</a>
</div>
</div>
</div>
</nav>

<section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-white"></div>
<div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
<div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center max-w-4xl mx-auto">

<div className="inline-flex items-center bg-blue-50 text-blue-600 text-xs font-medium px-4 py-2 rounded-full mb-8">
<span className="iconify w-4 h-4 mr-2" data-icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></span>
                    Earn $15-50/hour labeling data as a domain expert
                </div>

<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-tight mb-6">
                    Turn Your Expertise Into
                    <span className="text-blue-500"> Secondary Income</span>
</h1>

<p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Join thousands of experts earning flexible income by training AI models. Work remotely, set your own hours, and help build the future of AI.
                </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center" href="#">
                        Start Earning Today
                        <span className="iconify ml-2 w-5 h-5" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 font-medium px-8 py-4 rounded-lg border border-gray-200 transition-colors flex items-center justify-center" href="#">
<span className="iconify mr-2 w-5 h-5" data-icon="lucide:play-circle" style={{strokeWidth: '1.5'}}></span>
                        See How It Works
                    </a>
</div>

<div className="flex flex-col items-center">
<p className="text-sm text-gray-500 mb-6">Trusted by 10,000+ experts worldwide</p>
<div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale">
<span className="text-lg font-semibold tracking-tight text-gray-400">Stanford</span>
<span className="text-lg font-semibold tracking-tight text-gray-400">MIT</span>
<span className="text-lg font-semibold tracking-tight text-gray-400">Google</span>
<span className="text-lg font-semibold tracking-tight text-gray-400">Meta</span>
<span className="text-lg font-semibold tracking-tight text-gray-400">OpenAI</span>
</div>
</div>
</div>

<div className="mt-16 lg:mt-20 relative">
<div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">

<div className="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
<div className="flex space-x-2">
<div className="w-3 h-3 bg-red-400 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
<div className="w-3 h-3 bg-green-400 rounded-full"></div>
</div>
<div className="flex-1 text-center">
<span className="text-xs text-gray-400">iGOT.AI Labeling Platform</span>
</div>
</div>

<div className="p-6 lg:p-8">
<div className="grid grid-cols-12 gap-4">

<div className="col-span-3 hidden lg:block">
<div className="space-y-3">
<div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg text-sm font-medium flex items-center">
<span className="iconify w-4 h-4 mr-2" data-icon="lucide:layout-dashboard" style={{strokeWidth: '1.5'}}></span>
                                        Dashboard
                                    </div>
<div className="text-gray-400 px-4 py-2 text-sm flex items-center hover:bg-gray-700/50 rounded-lg cursor-pointer">
<span className="iconify w-4 h-4 mr-2" data-icon="lucide:folder" style={{strokeWidth: '1.5'}}></span>
                                        Projects
                                    </div>
<div className="text-gray-400 px-4 py-2 text-sm flex items-center hover:bg-gray-700/50 rounded-lg cursor-pointer">
<span className="iconify w-4 h-4 mr-2" data-icon="lucide:wallet" style={{strokeWidth: '1.5'}}></span>
                                        Earnings
                                    </div>
<div className="text-gray-400 px-4 py-2 text-sm flex items-center hover:bg-gray-700/50 rounded-lg cursor-pointer">
<span className="iconify w-4 h-4 mr-2" data-icon="lucide:trophy" style={{strokeWidth: '1.5'}}></span>
                                        Leaderboard
                                    </div>
</div>
</div>

<div className="col-span-12 lg:col-span-9">
<div className="bg-gray-700/50 rounded-xl p-4 lg:p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white font-medium">Available Tasks</h3>
<span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">12 new tasks</span>
</div>
<div className="space-y-3">
<div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
<span className="iconify w-5 h-5 text-blue-400" data-icon="lucide:file-text" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<div className="text-white text-sm font-medium">Medical Document Classification</div>
<div className="text-gray-400 text-xs">Healthcare • $0.45/task • ~2 min</div>
</div>
</div>
<span className="bg-blue-500 text-white text-xs px-3 py-1.5 rounded-lg">Start</span>
</div>
<div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
<span className="iconify w-5 h-5 text-purple-400" data-icon="lucide:code" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<div className="text-white text-sm font-medium">Code Review &amp; Quality Check</div>
<div className="text-gray-400 text-xs">Engineering • $0.75/task • ~5 min</div>
</div>
</div>
<span className="bg-blue-500 text-white text-xs px-3 py-1.5 rounded-lg">Start</span>
</div>
<div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
<span className="iconify w-5 h-5 text-orange-400" data-icon="lucide:scale" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<div className="text-white text-sm font-medium">Legal Contract Analysis</div>
<div className="text-gray-400 text-xs">Legal • $1.20/task • ~8 min</div>
</div>
</div>
<span className="bg-blue-500 text-white text-xs px-3 py-1.5 rounded-lg">Start</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">$12M+</div>
<div className="text-sm text-gray-500 mt-1">Paid to Experts</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">10,000+</div>
<div className="text-sm text-gray-500 mt-1">Active Experts</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">50+</div>
<div className="text-sm text-gray-500 mt-1">Domain Categories</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">4.8★</div>
<div className="text-sm text-gray-500 mt-1">Expert Rating</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4">How It Works</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Start earning in three simple steps. No experience required—just your expertise.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 lg:gap-12">

<div className="relative">
<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
<span className="text-blue-500 font-semibold text-lg">1</span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Create Your Profile</h3>
<p className="text-gray-600 leading-relaxed">Sign up and tell us about your expertise. We match you with relevant projects in your domain.</p>
<div className="mt-6 flex flex-wrap gap-2">
<span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Medicine</span>
<span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Law</span>
<span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Finance</span>
<span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Engineering</span>
</div>
</div>
</div>

<div className="relative">
<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
<span className="text-blue-500 font-semibold text-lg">2</span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Complete Tasks</h3>
<p className="text-gray-600 leading-relaxed">Review AI outputs, label data, and provide expert feedback. Work at your own pace, anywhere.</p>
<div className="mt-6 space-y-2">
<div className="flex items-center text-sm text-gray-600">
<span className="iconify w-4 h-4 text-green-500 mr-2" data-icon="lucide:check" style={{strokeWidth: '1.5'}}></span>
                                Flexible scheduling
                            </div>
<div className="flex items-center text-sm text-gray-600">
<span className="iconify w-4 h-4 text-green-500 mr-2" data-icon="lucide:check" style={{strokeWidth: '1.5'}}></span>
                                Work from anywhere
                            </div>
<div className="flex items-center text-sm text-gray-600">
<span className="iconify w-4 h-4 text-green-500 mr-2" data-icon="lucide:check" style={{strokeWidth: '1.5'}}></span>
                                Clear instructions
                            </div>
</div>
</div>
</div>

<div className="relative">
<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
<span className="text-blue-500 font-semibold text-lg">3</span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Get Paid Weekly</h3>
<p className="text-gray-600 leading-relaxed">Receive payments directly to your bank or PayPal. Track earnings in real-time on your dashboard.</p>
<div className="mt-6 flex items-center justify-between bg-gray-50 rounded-lg p-4">
<div>
<div className="text-xs text-gray-500">Avg. Weekly Earnings</div>
<div className="text-xl font-semibold text-gray-900">$450-$1,200</div>
</div>
<span className="iconify w-8 h-8 text-green-500" data-icon="lucide:trending-up" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4">We Need Your Expertise</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Whatever your background, there's a project waiting for you.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
<span className="iconify w-6 h-6 text-red-500" data-icon="lucide:heart-pulse" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="bg-green-50 text-green-600 text-xs font-medium px-2 py-1 rounded-full">High Demand</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare &amp; Medical</h3>
<p className="text-sm text-gray-600 mb-4">Medical professionals reviewing clinical data, diagnoses, and treatment plans.</p>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-500">$25-50/hr</span>
<span className="text-blue-500 font-medium group-hover:underline">View Projects →</span>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
<span className="iconify w-6 h-6 text-purple-500" data-icon="lucide:scale" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="bg-green-50 text-green-600 text-xs font-medium px-2 py-1 rounded-full">High Demand</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Legal &amp; Compliance</h3>
<p className="text-sm text-gray-600 mb-4">Lawyers and paralegals analyzing contracts, case law, and regulatory documents.</p>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-500">$30-60/hr</span>
<span className="text-blue-500 font-medium group-hover:underline">View Projects →</span>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
<span className="iconify w-6 h-6 text-blue-500" data-icon="lucide:code-2" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">120 Projects</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Software Engineering</h3>
<p className="text-sm text-gray-600 mb-4">Developers reviewing code quality, debugging, and technical documentation.</p>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-500">$20-45/hr</span>
<span className="text-blue-500 font-medium group-hover:underline">View Projects →</span>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
<span className="iconify w-6 h-6 text-green-500" data-icon="lucide:trending-up" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">85 Projects</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Finance &amp; Banking</h3>
<p className="text-sm text-gray-600 mb-4">Financial analysts evaluating market data, risk assessments, and reports.</p>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-500">$25-50/hr</span>
<span className="text-blue-500 font-medium group-hover:underline">View Projects →</span>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
<span className="iconify w-6 h-6 text-orange-500" data-icon="lucide:flask-conical" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">65 Projects</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Science &amp; Research</h3>
<p className="text-sm text-gray-600 mb-4">Researchers validating scientific papers, experiments, and data analysis.</p>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-500">$20-40/hr</span>
<span className="text-blue-500 font-medium group-hover:underline">View Projects →</span>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center">
<span className="iconify w-6 h-6 text-pink-500" data-icon="lucide:pen-tool" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">200+ Projects</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Writing &amp; Content</h3>
<p className="text-sm text-gray-600 mb-4">Writers and editors improving AI-generated content and evaluating quality.</p>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-500">$15-35/hr</span>
<span className="text-blue-500 font-medium group-hover:underline">View Projects →</span>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600" href="#">
                    View all 50+ categories
                    <span className="iconify ml-2 w-4 h-4" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</section>

<section className="py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Loved by Experts Worldwide</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Join thousands of professionals earning on their own terms.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white border border-gray-200 rounded-2xl p-8">
<div className="flex items-center mb-4">
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">"As a part-time radiologist, I earn an extra $2,000/month reviewing medical imaging AI. The flexibility is perfect for my schedule."</p>
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<span className="text-blue-600 font-semibold text-sm">SK</span>
</div>
<div>
<div className="font-medium text-gray-900 text-sm">Dr. Sarah Kim</div>
<div className="text-gray-500 text-xs">Radiologist, Boston</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-8">
<div className="flex items-center mb-4">
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">"I transitioned from full-time law to freelance consulting. iGOT.AI helps me stay sharp and earn while building my practice."</p>
<div className="flex items-center">
<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
<span className="text-purple-600 font-semibold text-sm">MC</span>
</div>
<div>
<div className="font-medium text-gray-900 text-sm">Marcus Chen</div>
<div className="text-gray-500 text-xs">Attorney, San Francisco</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-8">
<div className="flex items-center mb-4">
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">"As a PhD student, this is the perfect side income. I work on AI research tasks that actually align with my thesis work."</p>
<div className="flex items-center">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
<span className="text-green-600 font-semibold text-sm">EP</span>
</div>
<div>
<div className="font-medium text-gray-900 text-sm">Elena Petrova</div>
<div className="text-gray-500 text-xs">PhD Candidate, MIT</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-gray-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-6">Why Experts Choose iGOT.AI</h2>
<p className="text-lg text-gray-400 mb-10">We're building the future of AI together—and we believe the experts who train these models deserve to be compensated fairly.</p>
<div className="space-y-6">
<div className="flex items-start">
<div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<span className="iconify w-5 h-5 text-blue-400" data-icon="lucide:banknote" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-white font-medium mb-1">Competitive Pay</h3>
<p className="text-gray-400 text-sm">Earn $15-60/hour based on your expertise. Top performers earn bonuses and priority access to high-paying projects.</p>
</div>
</div>
<div className="flex items-start">
<div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<span className="iconify w-5 h-5 text-blue-400" data-icon="lucide:clock" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-white font-medium mb-1">Total Flexibility</h3>
<p className="text-gray-400 text-sm">Work when you want, where you want. No minimum hours, no schedules. Perfect as a side gig or primary income.</p>
</div>
</div>
<div className="flex items-start">
<div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<span className="iconify w-5 h-5 text-blue-400" data-icon="lucide:rocket" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-white font-medium mb-1">Meaningful Work</h3>
<p className="text-gray-400 text-sm">Your expertise directly improves AI models used by millions. Be part of the AI revolution.</p>
</div>
</div>
<div className="flex items-start">
<div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<span className="iconify w-5 h-5 text-blue-400" data-icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-white font-medium mb-1">Reliable Payments</h3>
<p className="text-gray-400 text-sm">Weekly payouts via bank transfer, PayPal, or Wise. No chasing invoices—we pay on time, every time.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
<div className="text-center mb-8">
<div className="text-sm text-gray-400 mb-2">Your potential earnings</div>
<div className="text-5xl font-semibold text-white tracking-tight">$4,800</div>
<div className="text-gray-400 text-sm mt-1">per month (20 hrs/week)</div>
</div>
<div className="space-y-4 mb-8">
<div className="bg-gray-700/50 rounded-lg p-4 flex items-center justify-between">
<span className="text-gray-300 text-sm">Hours per week</span>
<span className="text-white font-medium">20 hours</span>
</div>
<div className="bg-gray-700/50 rounded-lg p-4 flex items-center justify-between">
<span className="text-gray-300 text-sm">Your expertise level</span>
<span className="text-white font-medium">Professional</span>
</div>
<div className="bg-gray-700/50 rounded-lg p-4 flex items-center justify-between">
<span className="text-gray-300 text-sm">Average rate</span>
<span className="text-white font-medium">$60/hour</span>
</div>
</div>
<a className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 rounded-lg text-center transition-colors" href="#">
                            Calculate Your Earnings
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Frequently Asked Questions</h2>
<p className="text-lg text-gray-600">Everything you need to know about becoming an expert.</p>
</div>
<div className="space-y-4">

<div className="border border-gray-200 rounded-xl overflow-hidden" data-faq="">
<button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-gray-900">What qualifications do I need?</span>
<span className="iconify w-5 h-5 text-gray-400 transition-transform" data-icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="px-6 pb-5 hidden">
<p className="text-gray-600">We look for domain expertise rather than specific degrees. If you have professional experience in fields like medicine, law, software engineering, finance, or research, you're likely a great fit. We also value advanced students (PhD, medical residents, etc.).</p>
</div>
</div>

<div className="border border-gray-200 rounded-xl overflow-hidden" data-faq="">
<button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-gray-900">How much can I realistically earn?</span>
<span className="iconify w-5 h-5 text-gray-400 transition-transform" data-icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="px-6 pb-5 hidden">
<p className="text-gray-600">Earnings vary based on your expertise and time commitment. Most experts earn $15-50/hour, with specialized domains (medical, legal) paying up to $60/hour. Working 10-20 hours per week, you can expect $600-$4,800 monthly.</p>
</div>
</div>

<div className="border border-gray-200 rounded-xl overflow-hidden" data-faq="">
<button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-gray-900">How flexible is the work?</span>
<span className="iconify w-5 h-5 text-gray-400 transition-transform" data-icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="px-6 pb-5 hidden">
<p className="text-gray-600">Completely flexible. There are no minimum hours, set schedules, or mandatory shifts. Log in when you have time, complete tasks at your own pace. Many experts work early mornings, late nights, or weekends—whatever fits their life.</p>
</div>
</div>

<div className="border border-gray-200 rounded-xl overflow-hidden" data-faq="">
<button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-gray-900">When and how do I get paid?</span>
<span className="iconify w-5 h-5 text-gray-400 transition-transform" data-icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="px-6 pb-5 hidden">
<p className="text-gray-600">We process payments weekly every Friday. You can receive funds via direct bank transfer (US, EU, UK), PayPal, or Wise for international transfers. Minimum payout is $25. You can track earnings in real-time on your dashboard.</p>
</div>
</div>

<div className="border border-gray-200 rounded-xl overflow-hidden" data-faq="">
<button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-gray-900">What kind of tasks will I do?</span>
<span className="iconify w-5 h-5 text-gray-400 transition-transform" data-icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="px-6 pb-5 hidden">
<p className="text-gray-600">Tasks vary by domain but typically include: reviewing AI-generated responses for accuracy, labeling/classifying data, providing expert feedback, evaluating content quality, and creating training examples. Each task has clear instructions and examples.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-gradient-to-br from-blue-500 to-blue-600">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-6">Ready to Start Earning?</h2>
<p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Join 10,000+ experts who are already earning flexible income while shaping the future of AI.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white hover:bg-gray-50 text-blue-600 font-medium px-8 py-4 rounded-lg transition-colors flex items-center justify-center" href="#">
                    Apply as an Expert
                    <span className="iconify ml-2 w-5 h-5" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg border border-blue-400 transition-colors flex items-center justify-center" href="#">
<span className="iconify mr-2 w-5 h-5" data-icon="lucide:building-2" style={{strokeWidth: '1.5'}}></span>
                    For Enterprises
                </a>
</div>
<p className="text-blue-200 text-sm mt-6">No experience required • Get paid weekly • Work from anywhere</p>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

<div className="col-span-2 md:col-span-4 lg:col-span-1">
<a className="text-xl font-semibold tracking-tight text-gray-900" href="#">iGOT<span className="text-blue-500">.AI</span></a>
<p className="text-gray-500 text-sm mt-3 max-w-xs">Transform raw data into production-ready AI with expert human feedback.</p>
<div className="flex items-center space-x-4 mt-6">
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:twitter" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:linkedin" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:github" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>

<div>
<h4 className="font-medium text-gray-900 text-sm mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Data Labeling</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Model Training</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Agent Builder</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Evaluation</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Pricing</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-gray-900 text-sm mb-4">For Experts</h4>
<ul className="space-y-3">
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">How It Works</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Browse Projects</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Expert FAQ</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Success Stories</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Apply Now</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-gray-900 text-sm mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">About Us</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Careers</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Blog</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Contact</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Press Kit</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-gray-900 text-sm mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Documentation</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">API Reference</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Help Center</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Status</a></li>
<li><a className="text-gray-500 hover:text-gray-700 text-sm transition-colors" href="#">Changelog</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
<p className="text-gray-400 text-sm">© 2025 iGOT.AI. All rights reserved.</p>
<div className="flex items-center space-x-6 mt-4 md:mt-0">
<a className="text-gray-400 hover:text-gray-600 text-sm transition-colors" href="#">Privacy Policy</a>
<a className="text-gray-400 hover:text-gray-600 text-sm transition-colors" href="#">Terms of Service</a>
<a className="text-gray-400 hover:text-gray-600 text-sm transition-colors" href="#">Security</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
