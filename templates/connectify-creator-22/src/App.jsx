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



// Initialize Lucide icons
lucide.createIcons();

// Page navigation
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  lucide.createIcons();
}

// Signup tab switching
function switchSignupTab(type) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.getElementById('signup-' + type).classList.add('active');
  
  document.getElementById('tab-brand').classList.remove('bg-white', 'shadow-sm');
  document.getElementById('tab-creator').classList.remove('bg-white', 'shadow-sm');
  document.getElementById('tab-brand').classList.add('text-gray-600');
  document.getElementById('tab-creator').classList.add('text-gray-600');
  
  document.getElementById('tab-' + type).classList.add('bg-white', 'shadow-sm');
  document.getElementById('tab-' + type).classList.remove('text-gray-600');
}

// Brand onboarding steps
function showBrandStep(step) {
  document.querySelectorAll('[id^="brand-step-"]').forEach(form => form.classList.add('hidden'));
  document.getElementById('brand-step-' + step).classList.remove('hidden');
  
  for(let i = 1; i <= 3; i++) {
    const indicator = document.getElementById('step-indicator-' + i);
    if(i <= step) {
      indicator.classList.add('bg-gray-900', 'text-white');
      indicator.classList.remove('bg-gray-200', 'text-gray-600');
    } else {
      indicator.classList.remove('bg-gray-900', 'text-white');
      indicator.classList.add('bg-gray-200', 'text-gray-600');
    }
  }
}

// Dashboard tab switching
function showDashboardTab(tabName) {
  document.querySelectorAll('.dashboard-tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById('dashboard-' + tabName).classList.add('active');
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('text-gray-900', 'bg-gray-100');
    link.classList.add('text-gray-600');
  });
  
  event.target.closest('.nav-link').classList.add('text-gray-900', 'bg-gray-100');
  event.target.closest('.nav-link').classList.remove('text-gray-600');
  
  lucide.createIcons();
}

// Creator dashboard tab switching
function showCreatorTab(tabName) {
  document.querySelectorAll('.creator-tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById('creator-' + tabName).classList.add('active');
  
  document.querySelectorAll('.creator-nav-link').forEach(link => {
    link.classList.remove('text-gray-900', 'bg-gray-100');
    link.classList.add('text-gray-600');
  });
  
  event.target.closest('.creator-nav-link').classList.add('text-gray-900', 'bg-gray-100');
  event.target.closest('.creator-nav-link').classList.remove('text-gray-600');
  
  lucide.createIcons();
}

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Performance Chart
  const perfCtx = document.getElementById('performanceChart');
  if(perfCtx) {
    new Chart(perfCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Reach',
          data: [1200000, 1450000, 1680000, 1920000, 2150000, 2400000],
          borderColor: 'rgb(17, 24, 39)',
          backgroundColor: 'rgba(17, 24, 39, 0.1)',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { display: false } }
      }
    });
  }
  
  // Engagement Chart
  const engCtx = document.getElementById('engagementChart');
  if(engCtx) {
    new Chart(engCtx, {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Engagement Rate',
          data: [4.2, 5.1, 4.8, 5.5],
          backgroundColor: 'rgb(17, 24, 39)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { display: false } }
      }
    });
  }
  
  // Platform Chart
  const platCtx = document.getElementById('platformChart');
  if(platCtx) {
    new Chart(platCtx, {
      type: 'doughnut',
      data: {
        labels: ['Instagram', 'TikTok', 'YouTube', 'Twitter'],
        datasets: [{
          data: [45, 30, 20, 5],
          backgroundColor: ['#E1306C', '#000000', '#FF0000', '#1DA1F2']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true
      }
    });
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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center space-x-8 lg:space-x-12">
<div className="text-lg font-semibold tracking-tighter cursor-pointer" onclick="showPage('home')">
<span className="text-gray-900">CONNECTIFY</span>
</div>
<div className="hidden md:flex items-center space-x-6 lg:space-x-8">
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#features">Features</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#how-it-works">How It Works</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#for-brands">For Brands</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#for-creators">For Creators</a>
</div>
</div>
<div className="flex items-center space-x-3">
<button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 hidden sm:block" onclick="showPage('login')">Sign In</button>
<button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-200" onclick="showPage('signup')">Get Started</button>
</div>
</div>
</div>
</nav>

<div className="page active" id="home">

<section className="pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
<div className="space-y-6 lg:space-y-8">
<div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-full text-xs sm:text-sm">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span className="text-gray-700">The Creator-Brand Marketplace</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
Connect.<br/>Collaborate.<br/>Create Impact.
</h1>
<p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
Connectify bridges brands and content creators with powerful tools for discovery, campaign management, secure payments, and performance analytics—all in one seamless platform.
</p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
<button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium text-sm" onclick="showPage('signup'); switchSignupTab('brand')">
I'm a Brand
</button>
<button className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-medium text-sm" onclick="showPage('signup'); switchSignupTab('creator')">
I'm a Creator
</button>
</div>
<div className="flex items-center space-x-6 sm:space-x-8 pt-4">
<div>
<div className="text-xl sm:text-2xl font-semibold">10K+</div>
<div className="text-xs sm:text-sm text-gray-600">Creators</div>
</div>
<div className="h-10 sm:h-12 w-px bg-gray-200"></div>
<div>
<div className="text-xl sm:text-2xl font-semibold">5K+</div>
<div className="text-xs sm:text-sm text-gray-600">Brands</div>
</div>
<div className="h-10 sm:h-12 w-px bg-gray-200"></div>
<div>
<div className="text-xl sm:text-2xl font-semibold">50K+</div>
<div className="text-xs sm:text-sm text-gray-600">Campaigns</div>
</div>
</div>
</div>
<div className="relative mt-8 lg:mt-0">
<div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden shadow-xl">
<img alt="Collaboration" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&amp;h=800&amp;fit=crop"/>
</div>
<div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl shadow-xl p-3 sm:p-4 border border-gray-100">
<div className="flex items-center space-x-2 sm:space-x-3">
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center">
<i className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" data-lucide="check"></i>
</div>
<div>
<div className="text-xs sm:text-sm font-medium">Campaign Approved</div>
<div className="text-xs text-gray-500">2 minutes ago</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center space-y-3 sm:space-y-4 mb-12 lg:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Everything You Need to Succeed</h2>
<p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Powerful features designed for seamless creator-brand collaboration</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
<div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
<div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" data-lucide="search" strokeWidth="1.5"></i>
</div>
<h3 className="text-base sm:text-lg font-semibold mb-2">Advanced Creator Discovery</h3>
<p className="text-gray-600 text-sm leading-relaxed">Smart search with filters for niche, platform, audience size, demographics, engagement rates, and location.</p>
</div>
<div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
<div className="w-11 h-11 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-base sm:text-lg font-semibold mb-2">Campaign Management</h3>
<p className="text-gray-600 text-sm leading-relaxed">Create detailed briefs, track progress, manage content submissions, and approve deliverables from one dashboard.</p>
</div>
<div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
<div className="w-11 h-11 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" data-lucide="message-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-base sm:text-lg font-semibold mb-2">Real-Time Chat</h3>
<p className="text-gray-600 text-sm leading-relaxed">Built-in messaging system for direct communication with instant notifications for updates and responses.</p>
</div>
<div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
<div className="w-11 h-11 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-base sm:text-lg font-semibold mb-2">Secure Transactions</h3>
<p className="text-gray-600 text-sm leading-relaxed">Protected payment workflow ensuring safe and transparent transactions between all parties.</p>
</div>
<div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
<div className="w-11 h-11 sm:w-12 sm:h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<h3 className="text-base sm:text-lg font-semibold mb-2">Analytics &amp; Reporting</h3>
<p className="text-gray-600 text-sm leading-relaxed">Comprehensive dashboards tracking campaign performance, engagement metrics, and ROI calculations.</p>
</div>
<div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
<div className="w-11 h-11 sm:w-12 sm:h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" data-lucide="star" strokeWidth="1.5"></i>
</div>
<h3 className="text-base sm:text-lg font-semibold mb-2">Reviews &amp; Ratings</h3>
<p className="text-gray-600 text-sm leading-relaxed">Two-way rating system building trust and credibility for both creators and brands.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center space-y-3 sm:space-y-4 mb-12 lg:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">How Connectify Works</h2>
<p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Simple steps to successful collaborations</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
<div className="text-center">
<div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-semibold mx-auto mb-4">1</div>
<h3 className="text-base sm:text-lg font-semibold mb-2">Create Profile</h3>
<p className="text-sm text-gray-600">Sign up and build your brand or creator profile with portfolio and services</p>
</div>
<div className="text-center">
<div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-semibold mx-auto mb-4">2</div>
<h3 className="text-base sm:text-lg font-semibold mb-2">Discover &amp; Connect</h3>
<p className="text-sm text-gray-600">Use advanced search to find perfect matches or browse available campaigns</p>
</div>
<div className="text-center">
<div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-semibold mx-auto mb-4">3</div>
<h3 className="text-base sm:text-lg font-semibold mb-2">Collaborate</h3>
<p className="text-sm text-gray-600">Manage campaigns, submit content, communicate, and track progress</p>
</div>
<div className="text-center">
<div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-semibold mx-auto mb-4">4</div>
<h3 className="text-base sm:text-lg font-semibold mb-2">Grow Together</h3>
<p className="text-sm text-gray-600">Analyze results, exchange reviews, and build long-term partnerships</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white" id="for-brands">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
<div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">Built for Brands</h2>
<p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">Find the perfect creators for your campaigns with intelligent matching and comprehensive management tools.</p>
<div className="space-y-5 sm:space-y-6">
<div className="flex items-start space-x-3 sm:space-x-4">
<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-blue-600" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-semibold mb-1">Smart Creator Matching</h3>
<p className="text-sm text-gray-600">AI-powered recommendations based on your campaign goals and audience</p>
</div>
</div>
<div className="flex items-start space-x-3 sm:space-x-4">
<div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-purple-600" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-semibold mb-1">Performance Tracking</h3>
<p className="text-sm text-gray-600">Monitor campaign metrics and ROI with detailed analytics dashboards</p>
</div>
</div>
<div className="flex items-start space-x-3 sm:space-x-4">
<div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-green-600" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-semibold mb-1">Streamlined Workflow</h3>
<p className="text-sm text-gray-600">Manage briefs, approvals, and payments all in one centralized platform</p>
</div>
</div>
</div>
<button className="mt-6 sm:mt-8 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium text-sm" onclick="showPage('signup'); switchSignupTab('brand')">
Start as a Brand
</button>
</div>
<div className="relative mt-8 lg:mt-0">
<img alt="Brands" className="rounded-2xl shadow-2xl w-full" src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&amp;h=600&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" id="for-creators">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
<div className="order-2 lg:order-1 relative">
<img alt="Creators" className="rounded-2xl shadow-2xl w-full" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&amp;h=600&amp;fit=crop"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">Empowering Creators</h2>
<p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">Showcase your work, connect with top brands, and grow your creator business with professional tools.</p>
<div className="space-y-5 sm:space-y-6">
<div className="flex items-start space-x-3 sm:space-x-4">
<div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-orange-600" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-semibold mb-1">Professional Portfolio</h3>
<p className="text-sm text-gray-600">Display your best work, metrics, and services to attract premium brands</p>
</div>
</div>
<div className="flex items-start space-x-3 sm:space-x-4">
<div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-pink-600" data-lucide="dollar-sign" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-semibold mb-1">Fair Pricing &amp; Payments</h3>
<p className="text-sm text-gray-600">Set your rates and receive secure payments for completed work</p>
</div>
</div>
<div className="flex items-start space-x-3 sm:space-x-4">
<div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-yellow-600" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-semibold mb-1">Campaign Opportunities</h3>
<p className="text-sm text-gray-600">Browse and apply to campaigns that match your niche and audience</p>
</div>
</div>
</div>
<button className="mt-6 sm:mt-8 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium text-sm" onclick="showPage('signup'); switchSignupTab('creator')">
Join as a Creator
</button>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">Ready to Transform Your Collaborations?</h2>
<p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">Join thousands of brands and creators already using Connectify</p>
<button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium text-base sm:text-lg" onclick="showPage('signup')">
Get Started Free
</button>
</div>
</section>

<footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<div className="text-lg font-semibold tracking-tighter mb-4">CONNECTIFY</div>
<p className="text-sm text-gray-600">Connecting brands with creators for impactful collaborations.</p>
</div>
<div>
<h3 className="font-semibold mb-4 text-sm">Product</h3>
<ul className="space-y-2 text-sm text-gray-600">
<li><a className="hover:text-gray-900 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold mb-4 text-sm">Company</h3>
<ul className="space-y-2 text-sm text-gray-600">
<li><a className="hover:text-gray-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold mb-4 text-sm">Legal</h3>
<ul className="space-y-2 text-sm text-gray-600">
<li><a className="hover:text-gray-900 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
© 2024 Connectify. All rights reserved.
</div>
</div>
</footer>
</div>

<div className="page" id="login">
<div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-gray-50">
<div className="max-w-md w-full">
<div className="text-center mb-8">
<div className="text-xl font-semibold tracking-tighter mb-2">CONNECTIFY</div>
<h1 className="text-3xl font-semibold tracking-tight mb-2">Welcome back</h1>
<p className="text-gray-600">Sign in to your account</p>
</div>
<div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
<form className="space-y-5 sm:space-y-6" onsubmit="event.preventDefault(); showPage('dashboard');">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<label className="block text-sm font-medium text-gray-700">Password</label>
<a className="text-sm text-gray-600 hover:text-gray-900" href="#">Forgot?</a>
</div>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium text-sm" type="submit">
Sign In
</button>
</form>
<p className="text-center text-sm text-gray-600 mt-6">
Don't have an account? <button className="text-gray-900 font-medium hover:underline" onclick="showPage('signup')">Sign up</button>
</p>
</div>
<div className="text-center mt-6">
<button className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center space-x-1" onclick="showPage('home')">
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i>
<span>Back to home</span>
</button>
</div>
</div>
</div>
</div>

<div className="page" id="signup">
<div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-gray-50">
<div className="max-w-md w-full">
<div className="text-center mb-8">
<div className="text-xl font-semibold tracking-tighter mb-2">CONNECTIFY</div>
<h1 className="text-3xl font-semibold tracking-tight mb-2">Create your account</h1>
<p className="text-gray-600">Join the collaboration platform</p>
</div>
<div className="flex space-x-2 mb-6 bg-gray-100 p-1 rounded-lg">
<button className="flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 bg-white shadow-sm" id="tab-brand" onclick="switchSignupTab('brand')">
For Brands
</button>
<button className="flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 text-gray-600 hover:text-gray-900" id="tab-creator" onclick="switchSignupTab('creator')">
For Creators
</button>
</div>
<div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">

<div className="tab-content active" id="signup-brand">
<form className="space-y-4" onsubmit="event.preventDefault(); showPage('onboarding-brand');">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Brand Name</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm" placeholder="Your brand name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm" placeholder="you@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium text-sm" type="submit">
Create Brand Account
</button>
</form>
</div>

<div className="tab-content" id="signup-creator">
<form className="space-y-4" onsubmit="event.preventDefault(); showPage('onboarding-creator');">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm" placeholder="Your full name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium text-sm" type="submit">
Create Creator Account
</button>
</form>
</div>
<p className="text-center text-sm text-gray-600 mt-6">
Already have an account? <button className="text-gray-900 font-medium hover:underline" onclick="showPage('login')">Sign in</button>
</p>
</div>
<div className="text-center mt-6">
<button className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center space-x-1" onclick="showPage('home')">
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i>
<span>Back to home</span>
</button>
</div>
</div>
</div>
</div>

<div className="page" id="onboarding-brand">
<div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-gray-50">
<div className="max-w-2xl w-full">
<div className="text-center mb-8">
<h1 className="text-3xl font-semibold tracking-tight mb-2">Tell us about your brand</h1>
<p className="text-gray-600">Help us match you with the right creators</p>
</div>
<div className="flex items-center justify-center mb-8">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-medium" id="step-indicator-1">1</div>
<div className="w-12 sm:w-16 h-1 bg-gray-200"></div>
<div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium" id="step-indicator-2">2</div>
<div className="w-12 sm:w-16 h-1 bg-gray-200"></div>
<div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium" id="step-indicator-3">3</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
<form className="space-y-6" id="brand-step-1" onsubmit="event.preventDefault(); showBrandStep(2);">
<div>
<label className="block text-sm font-medium text-gray-700 mb-3">Select Platforms</label>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<label className="relative flex items-center p-3 sm:p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-2 sm:mr-3" name="platform" type="checkbox" value="instagram"/>
<i className="w-4 h-4 sm:w-5 sm:h-5 mr-2" data-lucide="instagram" strokeWidth="1.5"></i>
<span className="text-xs sm:text-sm font-medium">Instagram</span>
</label>
<label className="relative flex items-center p-3 sm:p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-2 sm:mr-3" name="platform" type="checkbox" value="tiktok"/>
<i className="w-4 h-4 sm:w-5 sm:h-5 mr-2" data-lucide="music" strokeWidth="1.5"></i>
<span className="text-xs sm:text-sm font-medium">TikTok</span>
</label>
<label className="relative flex items-center p-3 sm:p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-2 sm:mr-3" name="platform" type="checkbox" value="youtube"/>
<i className="w-4 h-4 sm:w-5 sm:h-5 mr-2" data-lucide="youtube" strokeWidth="1.5"></i>
<span className="text-xs sm:text-sm font-medium">YouTube</span>
</label>
<label className="relative flex items-center p-3 sm:p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-2 sm:mr-3" name="platform" type="checkbox" value="twitter"/>
<i className="w-4 h-4 sm:w-5 sm:h-5 mr-2" data-lucide="twitter" strokeWidth="1.5"></i>
<span className="text-xs sm:text-sm font-medium">Twitter/X</span>
</label>
<label className="relative flex items-center p-3 sm:p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-2 sm:mr-3" name="platform" type="checkbox" value="facebook"/>
<i className="w-4 h-4 sm:w-5 sm:h-5 mr-2" data-lucide="facebook" strokeWidth="1.5"></i>
<span className="text-xs sm:text-sm font-medium">Facebook</span>
</label>
<label className="relative flex items-center p-3 sm:p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-2 sm:mr-3" name="platform" type="checkbox" value="linkedin"/>
<i className="w-4 h-4 sm:w-5 sm:h-5 mr-2" data-lucide="linkedin" strokeWidth="1.5"></i>
<span className="text-xs sm:text-sm font-medium">LinkedIn</span>
</label>
</div>
</div>
<button className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium text-sm" type="submit">Continue</button>
</form>
<form className="space-y-6 hidden" id="brand-step-2" onsubmit="event.preventDefault(); showBrandStep(3);">
<div>
<label className="block text-sm font-medium text-gray-700 mb-3">Select Categories</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="relative flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-3" name="category" type="checkbox" value="fashion"/>
<span className="text-sm font-medium">Fashion &amp; Beauty</span>
</label>
<label className="relative flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-3" name="category" type="checkbox" value="tech"/>
<span className="text-sm font-medium">Tech &amp; Gaming</span>
</label>
<label className="relative flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-3" name="category" type="checkbox" value="food"/>
<span className="text-sm font-medium">Food &amp; Beverage</span>
</label>
<label className="relative flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-3" name="category" type="checkbox" value="fitness"/>
<span className="text-sm font-medium">Fitness &amp; Wellness</span>
</label>
<label className="relative flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-3" name="category" type="checkbox" value="travel"/>
<span className="text-sm font-medium">Travel &amp; Lifestyle</span>
</label>
<label className="relative flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-3" name="category" type="checkbox" value="business"/>
<span className="text-sm font-medium">Business &amp; Finance</span>
</label>
</div>
</div>
<div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
<button className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium text-sm" onclick="showBrandStep(1)" type="button">Back</button>
<button className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium text-sm" type="submit">Continue</button>
</div>
</form>
<form className="space-y-6 hidden" id="brand-step-3" onsubmit="event.preventDefault(); showPage('dashboard');">
<div>
<label className="block text-sm font-medium text-gray-700 mb-3">Campaign Budget Range</label>
<div className="space-y-3">
<label className="relative flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-3" name="budget" type="radio" value="small"/>
<div>
<div className="text-sm font-medium">Small Budget</div>
<div className="text-xs text-gray-500">$500 - $2,500 per campaign</div>
</div>
</label>
<label className="relative flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-3" name="budget" type="radio" value="medium"/>
<div>
<div className="text-sm font-medium">Medium Budget</div>
<div className="text-xs text-gray-500">$2,500 - $10,000 per campaign</div>
</div>
</label>
<label className="relative flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-3" name="budget" type="radio" value="large"/>
<div>
<div className="text-sm font-medium">Large Budget</div>
<div className="text-xs text-gray-500">$10,000+ per campaign</div>
</div>
</label>
</div>
</div>
<div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
<button className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium text-sm" onclick="showBrandStep(2)" type="button">Back</button>
<button className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium text-sm" type="submit">Complete Setup</button>
</div>
</form>
</div>
</div>
</div>
</div>

<div className="page" id="onboarding-creator">
<div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-gray-50">
<div className="max-w-2xl w-full">
<div className="text-center mb-8">
<h1 className="text-3xl font-semibold tracking-tight mb-2">Build your creator profile</h1>
<p className="text-gray-600">Showcase your talent and reach to brands</p>
</div>
<div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
<form className="space-y-6" onsubmit="event.preventDefault(); showPage('dashboard-creator');">
<div className="flex items-center space-x-4">
<div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
<i className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500" data-lucide="camera" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium mb-1">Profile Photo</div>
<div className="text-xs text-gray-500">Upload a professional photo</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm" placeholder="@yourhandle" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
<textarea className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm" placeholder="Tell brands about yourself..." required="" rows="3"></textarea>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-3">Content Categories</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="relative flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-3" name="category" type="checkbox" value="fashion"/>
<span className="text-sm font-medium">Fashion &amp; Beauty</span>
</label>
<label className="relative flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-3" name="category" type="checkbox" value="tech"/>
<span className="text-sm font-medium">Tech &amp; Gaming</span>
</label>
<label className="relative flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-3" name="category" type="checkbox" value="food"/>
<span className="text-sm font-medium">Food &amp; Beverage</span>
</label>
<label className="relative flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-200">
<input className="mr-3" name="category" type="checkbox" value="fitness"/>
<span className="text-sm font-medium">Fitness &amp; Wellness</span>
</label>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-3">Social Media Accounts</label>
<div className="space-y-3">
<div className="flex items-center space-x-3">
<i className="w-5 h-5 text-gray-400" data-lucide="instagram" strokeWidth="1.5"></i>
<input className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm" placeholder="Instagram handle" type="text"/>
</div>
<div className="flex items-center space-x-3">
<i className="w-5 h-5 text-gray-400" data-lucide="youtube" strokeWidth="1.5"></i>
<input className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm" placeholder="YouTube channel" type="text"/>
</div>
<div className="flex items-center space-x-3">
<i className="w-5 h-5 text-gray-400" data-lucide="twitter" strokeWidth="1.5"></i>
<input className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm" placeholder="Twitter/X handle" type="text"/>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm" placeholder="City, Country" required="" type="text"/>
</div>
<button className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium text-sm" type="submit">Complete Profile</button>
</form>
</div>
</div>
</div>
</div>

<div className="page" id="dashboard">
<div className="flex h-screen bg-gray-50">

<aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col">
<div className="p-6 border-b border-gray-200">
<div className="text-lg font-semibold tracking-tighter">CONNECTIFY</div>
<div className="text-xs text-gray-500 mt-1">Brand Dashboard</div>
</div>
<nav className="flex-1 p-4 space-y-1 overflow-y-auto">
<a className="nav-link flex items-center space-x-3 px-4 py-2.5 text-gray-900 bg-gray-100 rounded-lg transition-colors" href="#" onclick="showDashboardTab('overview'); return false;">
<i className="w-5 h-5" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Overview</span>
</a>
<a className="nav-link flex items-center space-x-3 px-4 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" href="#" onclick="showDashboardTab('campaigns'); return false;">
<i className="w-5 h-5" data-lucide="target" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Campaigns</span>
</a>
<a className="nav-link flex items-center space-x-3 px-4 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" href="#" onclick="showDashboardTab('discover'); return false;">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Discover Creators</span>
</a>
<a className="nav-link flex items-center space-x-3 px-4 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" href="#" onclick="showDashboardTab('messages'); return false;">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Messages</span>
<span className="ml-auto px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full font-medium">3</span>
</a>
<a className="nav-link flex items-center space-x-3 px-4 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" href="#" onclick="showDashboardTab('analytics'); return false;">
<i className="w-5 h-5" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Analytics</span>
</a>
<a className="nav-link flex items-center space-x-3 px-4 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" href="#" onclick="showDashboardTab('payments'); return false;">
<i className="w-5 h-5" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Payments</span>
</a>
<a className="nav-link flex items-center space-x-3 px-4 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" href="#" onclick="showDashboardTab('settings'); return false;">
<i className="w-5 h-5" data-lucide="settings" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Settings</span>
</a>
</nav>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center space-x-3 px-4 py-2.5">
<img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&amp;h=40&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-gray-900 truncate">Brand Account</div>
<div className="text-xs text-gray-500 truncate">brand@company.com</div>
</div>
<button className="text-gray-400 hover:text-gray-600 transition-colors" onclick="showPage('home')">
<i className="w-5 h-5" data-lucide="log-out" strokeWidth="1.5"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto">

<div className="dashboard-tab active" id="dashboard-overview">
<div className="p-4 sm:p-6 lg:p-8">
<div className="mb-6 sm:mb-8">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Welcome back!</h1>
<p className="text-gray-600 text-sm sm:text-base">Here's what's happening with your campaigns today.</p>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" data-lucide="target" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">+12%</span>
</div>
<div className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">24</div>
<div className="text-xs sm:text-sm text-gray-600">Active Campaigns</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" data-lucide="users" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">+8%</span>
</div>
<div className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">156</div>
<div className="text-xs sm:text-sm text-gray-600">Collaborations</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">+24%</span>
</div>
<div className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">2.4M</div>
<div className="text-xs sm:text-sm text-gray-600">Total Reach</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" data-lucide="dollar-sign" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">+16%</span>
</div>
<div className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">$48.5K</div>
<div className="text-xs sm:text-sm text-gray-600">Total Invested</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8">
<div className="flex items-center justify-between mb-4 sm:mb-6">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Recent Campaigns</h2>
<button className="text-sm text-gray-600 hover:text-gray-900" onclick="showDashboardTab('campaigns'); return false;">View all</button>
</div>
<div className="space-y-3 sm:space-y-4">
<div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
<img className="w-full sm:w-16 h-40 sm:h-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=80&amp;h=80&amp;fit=crop"/>
<div className="flex-1">
<h3 className="font-semibold mb-1">Summer Collection Launch</h3>
<p className="text-sm text-gray-600 mb-2">Instagram &amp; TikTok • 12 creators</p>
<div className="flex items-center space-x-4 text-xs text-gray-600">
<span>850K reach</span>
<span>•</span>
<span>5.2% engagement</span>
</div>
</div>
<div className="text-left sm:text-right">
<div className="text-sm font-medium text-green-600 mb-1">Active</div>
<div className="text-xs text-gray-500">Ends in 5 days</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
<img className="w-full sm:w-16 h-40 sm:h-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&amp;h=80&amp;fit=crop"/>
<div className="flex-1">
<h3 className="font-semibold mb-1">Product Review Campaign</h3>
<p className="text-sm text-gray-600 mb-2">YouTube • 8 creators</p>
<div className="flex items-center space-x-4 text-xs text-gray-600">
<span>420K reach</span>
<span>•</span>
<span>6.8% engagement</span>
</div>
</div>
<div className="text-left sm:text-right">
<div className="text-sm font-medium text-blue-600 mb-1">In Review</div>
<div className="text-xs text-gray-500">3 pending</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight mb-4 sm:mb-6">Campaign Performance</h2>
<div><canvas id="performanceChart"></canvas></div>
</div>
</div>
</div>

<div className="dashboard-tab" id="dashboard-campaigns">
<div className="p-4 sm:p-6 lg:p-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
<div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Campaigns</h1>
<p className="text-gray-600 text-sm sm:text-base">Manage all your marketing campaigns</p>
</div>
<button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium text-sm inline-flex items-center justify-center">
<i className="w-5 h-5 mr-2" data-lucide="plus" strokeWidth="1.5"></i>New Campaign
</button>
</div>

<div className="flex space-x-1 mb-6 border-b border-gray-200 overflow-x-auto">
<button className="px-4 py-2 text-sm font-medium border-b-2 border-gray-900 text-gray-900 whitespace-nowrap">All (57)</button>
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">Active (24)</button>
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">In Review (8)</button>
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">Completed (22)</button>
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">Drafts (3)</button>
</div>

<div className="space-y-4">
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-4 sm:space-y-0">
<div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
<img className="w-full sm:w-20 h-48 sm:h-20 rounded-lg object-cover" src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=80&amp;h=80&amp;fit=crop"/>
<div>
<h3 className="text-base sm:text-lg font-semibold mb-2">Summer Collection Launch</h3>
<div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-3">
<span className="flex items-center"><i className="w-4 h-4 mr-1" data-lucide="calendar" strokeWidth="1.5"></i> Jun 15 - Jun 30</span>
<span className="flex items-center"><i className="w-4 h-4 mr-1" data-lucide="users" strokeWidth="1.5"></i> 12 creators</span>
<span className="flex items-center"><i className="w-4 h-4 mr-1" data-lucide="dollar-sign" strokeWidth="1.5"></i> $8,400</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Instagram</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">TikTok</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Fashion</span>
</div>
</div>
</div>
<div className="text-left sm:text-right">
<span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full mb-2">Active</span>
<div className="text-sm text-gray-600">Ends in 5 days</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-200 space-y-4 sm:space-y-0">
<div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:space-x-6 text-sm">
<div>
<div className="text-gray-600 text-xs sm:text-sm">Reach</div>
<div className="font-semibold text-gray-900">850K</div>
</div>
<div>
<div className="text-gray-600 text-xs sm:text-sm">Engagement</div>
<div className="font-semibold text-gray-900">5.2%</div>
</div>
<div>
<div className="text-gray-600 text-xs sm:text-sm">Submissions</div>
<div className="font-semibold text-gray-900">8/12</div>
</div>
</div>
<button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">View Details</button>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-4 sm:space-y-0">
<div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
<img className="w-full sm:w-20 h-48 sm:h-20 rounded-lg object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&amp;h=80&amp;fit=crop"/>
<div>
<h3 className="text-base sm:text-lg font-semibold mb-2">Product Review Campaign</h3>
<div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-3">
<span className="flex items-center"><i className="w-4 h-4 mr-1" data-lucide="calendar" strokeWidth="1.5"></i> Jun 10 - Jun 25</span>
<span className="flex items-center"><i className="w-4 h-4 mr-1" data-lucide="users" strokeWidth="1.5"></i> 8 creators</span>
<span className="flex items-center"><i className="w-4 h-4 mr-1" data-lucide="dollar-sign" strokeWidth="1.5"></i> $5,200</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">YouTube</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Tech</span>
</div>
</div>
</div>
<div className="text-left sm:text-right">
<span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full mb-2">In Review</span>
<div className="text-sm text-gray-600">3 pending approval</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-200 space-y-4 sm:space-y-0">
<div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:space-x-6 text-sm">
<div>
<div className="text-gray-600 text-xs sm:text-sm">Reach</div>
<div className="font-semibold text-gray-900">420K</div>
</div>
<div>
<div className="text-gray-600 text-xs sm:text-sm">Engagement</div>
<div className="font-semibold text-gray-900">6.8%</div>
</div>
<div>
<div className="text-gray-600 text-xs sm:text-sm">Submissions</div>
<div className="font-semibold text-gray-900">5/8</div>
</div>
</div>
<button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">View Details</button>
</div>
</div>
</div>
</div>
</div>

<div className="dashboard-tab" id="dashboard-discover">
<div className="p-4 sm:p-6 lg:p-8">
<div className="mb-6 sm:mb-8">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Discover Creators</h1>
<p className="text-gray-600 text-sm sm:text-base">Find the perfect creators for your brand campaigns</p>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 mb-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm">
<option>All Platforms</option>
<option>Instagram</option>
<option>TikTok</option>
<option>YouTube</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm">
<option>All Categories</option>
<option>Fashion &amp; Beauty</option>
<option>Tech &amp; Gaming</option>
<option>Food &amp; Beverage</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Followers</label>
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm">
<option>Any Size</option>
<option>1K - 10K (Nano)</option>
<option>10K - 50K (Micro)</option>
<option>50K - 500K (Mid)</option>
<option>500K+ (Macro)</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
<input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm" placeholder="Enter location" type="text"/>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-200 space-y-3 sm:space-y-0">
<div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
<label className="flex items-center text-sm">
<input className="mr-2" type="checkbox"/>
<span className="text-gray-700">Verified only</span>
</label>
<label className="flex items-center text-sm">
<input className="mr-2" type="checkbox"/>
<span className="text-gray-700">High engagement (5%+)</span>
</label>
</div>
<button className="text-sm text-gray-600 hover:text-gray-900">Clear filters</button>
</div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
<div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
<img alt="Creator" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&amp;h=300&amp;fit=crop"/>
<div className="p-4 sm:p-6">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="font-semibold text-base sm:text-lg mb-1">Sarah Johnson</h3>
<p className="text-sm text-gray-600">@sarahjohnson</p>
</div>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Verified</span>
</div>
<p className="text-sm text-gray-600 mb-4">Fashion &amp; Lifestyle creator passionate about sustainable fashion.</p>
<div className="flex items-center justify-between text-sm mb-4">
<div>
<div className="font-semibold text-gray-900">250K</div>
<div className="text-xs text-gray-500">Followers</div>
</div>
<div>
<div className="font-semibold text-gray-900">4.8%</div>
<div className="text-xs text-gray-500">Engagement</div>
</div>
<div>
<div className="font-semibold text-gray-900">5.0</div>
<div className="text-xs text-gray-500">Rating</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Fashion</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Beauty</span>
</div>
<button className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm font-medium">
View Profile
</button>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
<img alt="Creator" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&amp;h=300&amp;fit=crop"/>
<div className="p-4 sm:p-6">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="font-semibold text-base sm:text-lg mb-1">Mike Chen</h3>
<p className="text-sm text-gray-600">@miketech</p>
</div>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Verified</span>
</div>
<p className="text-sm text-gray-600 mb-4">Tech reviewer and gaming enthusiast. Unboxing the latest gadgets.</p>
<div className="flex items-center justify-between text-sm mb-4">
<div>
<div className="font-semibold text-gray-900">500K</div>
<div className="text-xs text-gray-500">Followers</div>
</div>
<div>
<div className="font-semibold text-gray-900">6.2%</div>
<div className="text-xs text-gray-500">Engagement</div>
</div>
<div>
<div className="font-semibold text-gray-900">4.8</div>
<div className="text-xs text-gray-500">Rating</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Tech</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Gaming</span>
</div>
<button className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm font-medium">
View Profile
</button>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
<img alt="Creator" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&amp;h=300&amp;fit=crop"/>
<div className="p-4 sm:p-6">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="font-semibold text-base sm:text-lg mb-1">Emma Davis</h3>
<p className="text-sm text-gray-600">@emmadavis</p>
</div>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Verified</span>
</div>
<p className="text-sm text-gray-600 mb-4">Beauty guru sharing makeup tutorials and skincare routines.</p>
<div className="flex items-center justify-between text-sm mb-4">
<div>
<div className="font-semibold text-gray-900">180K</div>
<div className="text-xs text-gray-500">Followers</div>
</div>
<div>
<div className="font-semibold text-gray-900">5.4%</div>
<div className="text-xs text-gray-500">Engagement</div>
</div>
<div>
<div className="font-semibold text-gray-900">5.0</div>
<div className="text-xs text-gray-500">Rating</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Beauty</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Wellness</span>
</div>
<button className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm font-medium">
View Profile
</button>
</div>
</div>
</div>
</div>
</div>

<div className="dashboard-tab" id="dashboard-messages">
<div className="h-full flex">

<div className="w-full sm:w-80 bg-white border-r border-gray-200">
<div className="p-4 border-b border-gray-200">
<input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm" placeholder="Search messages..." type="text"/>
</div>
<div className="overflow-y-auto">
<div className="p-4 border-b border-gray-200 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
<div className="flex items-start space-x-3">
<img className="w-10 h-10 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&amp;h=40&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<div className="font-medium text-sm truncate">Sarah Johnson</div>
<div className="text-xs text-gray-500">2m</div>
</div>
<div className="text-sm text-gray-600 truncate">Thanks for the opportunity! I'd love to...</div>
</div>
<div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
</div>
</div>
<div className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
<div className="flex items-start space-x-3">
<img className="w-10 h-10 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&amp;h=40&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<div className="font-medium text-sm truncate">Mike Chen</div>
<div className="text-xs text-gray-500">1h</div>
</div>
<div className="text-sm text-gray-600 truncate">Just submitted the final draft for review</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex-col hidden sm:flex">
<div className="p-4 border-b border-gray-200 bg-white">
<div className="flex items-center space-x-3">
<img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&amp;h=40&amp;fit=crop"/>
<div>
<div className="font-medium">Sarah Johnson</div>
<div className="text-xs text-gray-500">Active now</div>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-4">
<div className="flex items-start space-x-3">
<img className="w-8 h-8 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&amp;h=32&amp;fit=crop"/>
<div className="bg-gray-100 rounded-lg px-4 py-2 max-w-md">
<p className="text-sm">Hi! I'm interested in collaborating on the Summer Collection campaign. Can you tell me more about the requirements?</p>
<div className="text-xs text-gray-500 mt-1">10:30 AM</div>
</div>
</div>
<div className="flex items-start space-x-3 justify-end">
<div className="bg-gray-900 text-white rounded-lg px-4 py-2 max-w-md">
<p className="text-sm">Hello Sarah! Great to hear from you. The campaign focuses on our new summer line. We're looking for 3 Instagram posts and 5 story slides over a 2-week period.</p>
<div className="text-xs text-gray-300 mt-1">10:32 AM</div>
</div>
</div>
</div>
<div className="p-4 border-t border-gray-200 bg-white">
<div className="flex items-center space-x-3">
<input className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm" placeholder="Type your message..." type="text"/>
<button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">Send</button>
</div>
</div>
</div>
</div>
</div>

<div className="dashboard-tab" id="dashboard-analytics">
<div className="p-4 sm:p-6 lg:p-8">
<div className="mb-6 sm:mb-8">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Analytics</h1>
<p className="text-gray-600 text-sm sm:text-base">Track your campaign performance and ROI</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
<h3 className="text-base sm:text-lg font-semibold mb-4">Engagement Over Time</h3>
<div><canvas id="engagementChart"></canvas></div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
<h3 className="text-base sm:text-lg font-semibold mb-4">Platform Distribution</h3>
<div><canvas id="platformChart"></canvas></div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
<h3 className="text-base sm:text-lg font-semibold mb-4">Campaign ROI</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">Total Investment</div>
<div className="font-semibold">$48,500</div>
</div>
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">Generated Revenue</div>
<div className="font-semibold">$124,300</div>
</div>
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">Cost Per Engagement</div>
<div className="font-semibold">$0.42</div>
</div>
<div className="pt-4 border-t border-gray-200">
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">Overall ROI</div>
<div className="font-semibold text-green-600 text-xl">256%</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
<h3 className="text-base sm:text-lg font-semibold mb-4">Top Performing Content</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
<div className="flex items-center space-x-3">
<img className="w-12 h-12 rounded object-cover" src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=50&amp;h=50&amp;fit=crop"/>
<div>
<div className="font-medium text-sm">Summer Dress Unboxing</div>
<div className="text-xs text-gray-500">@sarahjohnson • Instagram</div>
</div>
</div>
<div className="text-right">
<div className="font-semibold text-sm">8.4%</div>
<div className="text-xs text-gray-500">Engagement</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="dashboard-tab" id="dashboard-payments">
<div className="p-4 sm:p-6 lg:p-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
<div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Payments</h1>
<p className="text-gray-600 text-sm sm:text-base">Manage your transactions and invoices</p>
</div>
<button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium text-sm">
Add Payment Method
</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
<div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl p-6 text-white">
<div className="text-sm opacity-80 mb-2">Available Balance</div>
<div className="text-2xl sm:text-3xl font-semibold mb-4">$12,450</div>
<button className="px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
Withdraw
</button>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-6">
<div className="text-sm text-gray-600 mb-2">Pending Payments</div>
<div className="text-2xl sm:text-3xl font-semibold mb-4">$5,200</div>
<div className="text-sm text-gray-600">8 transactions</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-6">
<div className="text-sm text-gray-600 mb-2">Total Spent (30 days)</div>
<div className="text-2xl sm:text-3xl font-semibold mb-4">$18,300</div>
<div className="text-sm text-green-600">↓ 12% from last month</div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200">
<div className="p-4 sm:p-6 border-b border-gray-200">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Recent Transactions</h2>
</div>
<div className="divide-y divide-gray-200">
<div className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3 sm:space-x-4">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-green-600" data-lucide="arrow-down-left" strokeWidth="1.5"></i>
</div>
<div>
<div className="font-medium text-sm sm:text-base">Payment to Sarah Johnson</div>
<div className="text-xs sm:text-sm text-gray-600">Summer Collection Campaign</div>
</div>
</div>
<div className="text-right">
<div className="font-semibold text-sm sm:text-base">-$850.00</div>
<div className="text-xs sm:text-sm text-gray-600">Jun 18, 2024</div>
</div>
</div>
</div>
<div className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3 sm:space-x-4">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-green-600" data-lucide="arrow-down-left" strokeWidth="1.5"></i>
</div>
<div>
<div className="font-medium text-sm sm:text-base">Payment to Mike Chen</div>
<div className="text-xs sm:text-sm text-gray-600">Product Review Campaign</div>
</div>
</div>
<div className="text-right">
<div className="font-semibold text-sm sm:text-base">-$650.00</div>
<div className="text-xs sm:text-sm text-gray-600">Jun 15, 2024</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="dashboard-tab" id="dashboard-settings">
<div className="p-4 sm:p-6 lg:p-8 max-w-4xl">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 sm:mb-8">Settings</h1>

<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 mb-6">
<h2 className="text-lg sm:text-xl font-semibold mb-6">Profile Information</h2>
<div className="space-y-6">
<div className="flex items-center space-x-4 sm:space-x-6">
<img className="w-16 h-16 sm:w-20 sm:h-20 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&amp;h=80&amp;fit=crop"/>
<div>
<button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium mr-2">Change Photo</button>
<button className="px-4 py-2 text-sm text-red-600 hover:text-red-700">Remove</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Brand Name</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm" type="text" value="TrendStyle Co."/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
<select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm">
<option>Fashion &amp; Beauty</option>
<option>Tech &amp; Gaming</option>
<option>Food &amp; Beverage</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
<input className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm" type="email" value="brand@company.com"/>
</div>
<div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
<button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">Cancel</button>
<button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm">Save Changes</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
<h2 className="text-lg sm:text-xl font-semibold mb-6">Notifications</h2>
<div className="space-y-4">
<label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
<div>
<div className="font-medium text-sm sm:text-base">Campaign Updates</div>
<div className="text-xs sm:text-sm text-gray-600">Get notified about campaign status changes</div>
</div>
<input checked="" className="w-5 h-5" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
<div>
<div className="font-medium text-sm sm:text-base">New Messages</div>
<div className="text-xs sm:text-sm text-gray-600">Receive alerts for new messages from creators</div>
</div>
<input checked="" className="w-5 h-5" type="checkbox"/>
</label>
</div>
</div>
</div>
</div>
</main>
</div>
</div>

<div className="page" id="dashboard-creator">
<div className="flex h-screen bg-gray-50">

<aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col">
<div className="p-6 border-b border-gray-200">
<div className="text-lg font-semibold tracking-tighter">CONNECTIFY</div>
<div className="text-xs text-gray-500 mt-1">Creator Dashboard</div>
</div>
<nav className="flex-1 p-4 space-y-1 overflow-y-auto">
<a className="creator-nav-link flex items-center space-x-3 px-4 py-2.5 text-gray-900 bg-gray-100 rounded-lg transition-colors" href="#" onclick="showCreatorTab('overview'); return false;">
<i className="w-5 h-5" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Overview</span>
</a>
<a className="creator-nav-link flex items-center space-x-3 px-4 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" href="#" onclick="showCreatorTab('my-campaigns'); return false;">
<i className="w-5 h-5" data-lucide="briefcase" strokeWidth="1.5"></i>
<span className="text-sm font-medium">My Campaigns</span>
</a>
<a className="creator-nav-link flex items-center space-x-3 px-4 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" href="#" onclick="showCreatorTab('browse'); return false;">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Browse Campaigns</span>
</a>
<a className="creator-nav-link flex items-center space-x-3 px-4 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" href="#" onclick="showCreatorTab('messages'); return false;">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Messages</span>
<span className="ml-auto px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full font-medium">2</span>
</a>
<a className="creator-nav-link flex items-center space-x-3 px-4 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" href="#" onclick="showCreatorTab('analytics'); return false;">
<i className="w-5 h-5" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Analytics</span>
</a>
<a className="creator-nav-link flex items-center space-x-3 px-4 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" href="#" onclick="showCreatorTab('earnings'); return false;">
<i className="w-5 h-5" data-lucide="dollar-sign" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Earnings</span>
</a>
<a className="creator-nav-link flex items-center space-x-3 px-4 py-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" href="#" onclick="showCreatorTab('profile'); return false;">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Profile</span>
</a>
</nav>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center space-x-3 px-4 py-2.5">
<img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&amp;h=40&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-gray-900 truncate">Sarah Johnson</div>
<div className="text-xs text-gray-500 truncate">@sarahjohnson</div>
</div>
<button className="text-gray-400 hover:text-gray-600 transition-colors" onclick="showPage('home')">
<i className="w-5 h-5" data-lucide="log-out" strokeWidth="1.5"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto">

<div className="creator-tab active" id="creator-overview">
<div className="p-4 sm:p-6 lg:p-8">
<div className="mb-6 sm:mb-8">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Welcome back, Sarah!</h1>
<p className="text-gray-600 text-sm sm:text-base">Here's your creator dashboard</p>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
</div>
<div className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">8</div>
<div className="text-xs sm:text-sm text-gray-600">Active Campaigns</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" data-lucide="dollar-sign" strokeWidth="1.5"></i>
</div>
</div>
<div className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">$12,450</div>
<div className="text-xs sm:text-sm text-gray-600">Total Earnings</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
</div>
<div className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">4.8%</div>
<div className="text-xs sm:text-sm text-gray-600">Avg Engagement</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
<div className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">5.0</div>
<div className="text-xs sm:text-sm text-gray-600">Rating (203)</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8">
<div className="flex items-center justify-between mb-4 sm:mb-6">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Active Campaigns</h2>
<button className="text-sm text-gray-600 hover:text-gray-900" onclick="showCreatorTab('my-campaigns'); return false;">View all</button>
</div>
<div className="space-y-4">
<div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 border border-gray-200 rounded-lg">
<img className="w-full sm:w-14 h-40 sm:h-14 rounded-lg object-cover" src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=60&amp;h=60&amp;fit=crop"/>
<div className="flex-1">
<h3 className="font-semibold mb-1">Summer Collection Launch</h3>
<p className="text-sm text-gray-600 mb-2">TrendStyle Co. • Instagram Post &amp; Stories</p>
<div className="flex items-center space-x-4 text-xs text-gray-600">
<span>Due: Jun 30</span>
<span>•</span>
<span>$850</span>
</div>
</div>
<div className="text-left sm:text-right">
<span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full mb-2">In Progress</span>
<button className="block text-sm text-gray-600 hover:text-gray-900">View Details</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
<div className="flex items-center justify-between mb-4 sm:mb-6">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Recommended Campaigns</h2>
<button className="text-sm text-gray-600 hover:text-gray-900" onclick="showCreatorTab('browse'); return false;">Browse all</button>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="font-semibold mb-1">Product Unboxing Video</h3>
<p className="text-sm text-gray-600">Tech Brand</p>
</div>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">$1,200</span>
</div>
<p className="text-sm text-gray-600 mb-3">Looking for tech creators to create unboxing and review content...</p>
<button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
Apply Now
</button>
</div>
<div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="font-semibold mb-1">Fashion Collaboration</h3>
<p className="text-sm text-gray-600">StyleHub</p>
</div>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">$950</span>
</div>
<p className="text-sm text-gray-600 mb-3">Seeking fashion influencers for our spring collection launch...</p>
<button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
Apply Now
</button>
</div>
</div>
</div>
</div>
</div>

<div className="creator-tab" id="creator-my-campaigns">
<div className="p-4 sm:p-6 lg:p-8">
<div className="mb-6 sm:mb-8">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">My Campaigns</h1>
<p className="text-gray-600 text-sm sm:text-base">Manage your active and completed campaigns</p>
</div>

<div className="flex space-x-1 mb-6 border-b border-gray-200 overflow-x-auto">
<button className="px-4 py-2 text-sm font-medium border-b-2 border-gray-900 text-gray-900 whitespace-nowrap">Active (8)</button>
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">Pending (3)</button>
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">In Review (2)</button>
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">Completed (45)</button>
</div>

<div className="space-y-4">
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 space-y-4 lg:space-y-0">
<div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
<img className="w-full sm:w-20 h-48 sm:h-20 rounded-lg object-cover" src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=80&amp;h=80&amp;fit=crop"/>
<div>
<h3 className="text-base sm:text-lg font-semibold mb-1">Summer Collection Launch</h3>
<p className="text-sm text-gray-600 mb-2">TrendStyle Co.</p>
<div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-3">
<span className="flex items-center"><i className="w-4 h-4 mr-1" data-lucide="calendar" strokeWidth="1.5"></i> Due: Jun 30</span>
<span className="flex items-center"><i className="w-4 h-4 mr-1" data-lucide="instagram" strokeWidth="1.5"></i> Instagram</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">3 Posts</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">5 Stories</span>
</div>
</div>
</div>
<div className="text-left lg:text-right">
<div className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">$850</div>
<span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full mb-2">In Progress</span>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-200 space-y-4 sm:space-y-0">
<div className="flex items-center space-x-4 text-sm">
<div>
<div className="text-gray-600 text-xs sm:text-sm">Deliverables</div>
<div className="font-semibold text-gray-900">3/8 submitted</div>
</div>
</div>
<div className="flex space-x-3">
<button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">Submit Content</button>
<button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">View Brief</button>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 space-y-4 lg:space-y-0">
<div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
<img className="w-full sm:w-20 h-48 sm:h-20 rounded-lg object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&amp;h=80&amp;fit=crop"/>
<div>
<h3 className="text-base sm:text-lg font-semibold mb-1">Product Review Video</h3>
<p className="text-sm text-gray-600 mb-2">TechGear Plus</p>
<div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-3">
<span className="flex items-center"><i className="w-4 h-4 mr-1" data-lucide="calendar" strokeWidth="1.5"></i> Due: Jul 5</span>
<span className="flex items-center"><i className="w-4 h-4 mr-1" data-lucide="youtube" strokeWidth="1.5"></i> YouTube</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">1 Video</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Unboxing</span>
</div>
</div>
</div>
<div className="text-left lg:text-right">
<div className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">$1,200</div>
<span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full mb-2">In Review</span>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-200 space-y-4 sm:space-y-0">
<div className="flex items-center space-x-4 text-sm">
<div>
<div className="text-gray-600 text-xs sm:text-sm">Status</div>
<div className="font-semibold text-gray-900">Awaiting brand approval</div>
</div>
</div>
<button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">View Submission</button>
</div>
</div>
</div>
</div>
</div>

<div className="creator-tab" id="creator-browse">
<div className="p-4 sm:p-6 lg:p-8">
<div className="mb-6 sm:mb-8">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Browse Campaigns</h1>
<p className="text-gray-600 text-sm sm:text-base">Discover new collaboration opportunities</p>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 mb-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm">
<option>All Platforms</option>
<option>Instagram</option>
<option>TikTok</option>
<option>YouTube</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm">
<option>All Categories</option>
<option>Fashion &amp; Beauty</option>
<option>Tech &amp; Gaming</option>
<option>Food &amp; Beverage</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm">
<option>Any Budget</option>
<option>$500 - $1,000</option>
<option>$1,000 - $2,500</option>
<option>$2,500+</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
<input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm" placeholder="Search campaigns..." type="text"/>
</div>
</div>
</div>

<div className="space-y-4">
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:border-gray-300 hover:shadow-lg transition-all cursor-pointer">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-4 sm:space-y-0">
<div className="flex-1">
<div className="flex items-center space-x-3 mb-3">
<img className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&amp;h=50&amp;fit=crop"/>
<div>
<h3 className="text-base sm:text-lg font-semibold">Product Unboxing Series</h3>
<p className="text-sm text-gray-600">TechGear Plus</p>
</div>
</div>
<p className="text-sm text-gray-600 mb-4">Looking for tech creators to create engaging unboxing and review content for our new product line. Must have experience with tech reviews.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">YouTube</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Tech</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">1 Video Required</span>
</div>
<div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
<span className="flex items-center"><i className="w-4 h-4 mr-1" data-lucide="calendar" strokeWidth="1.5"></i> Due: Jul 15</span>
<span className="flex items-center"><i className="w-4 h-4 mr-1" data-lucide="users" strokeWidth="1.5"></i> 5 spots left</span>
</div>
</div>
<div className="text-left sm:text-right">
<div className="text-2xl font-semibold text-gray-900 mb-2">$1,200</div>
<button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">Apply Now</button>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:border-gray-300 hover:shadow-lg transition-all cursor-pointer">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-4 sm:space-y-0">
<div className="flex-1">
<div className="flex items-center space-x-3 mb-3">
<img className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=50&amp;h=50&amp;fit=crop"/>
<div>
<h3 className="text-base sm:text-lg font-semibold">Fashion Collection Showcase</h3>
<p className="text-sm text-gray-600">StyleHub</p>
</div>
</div>
<p className="text-sm text-gray-600 mb-4">Seeking fashion influencers for our spring collection launch. Create content featuring our latest designs with your unique style perspective.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Instagram</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Fashion</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">3 Posts + Stories</span>
</div>
<div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
<span className="flex items-center"><i className="w-4 h-4 mr-1" data-lucide="calendar" strokeWidth="1.5"></i> Due: Jul 20</span>
<span className="flex items-center"><i className="w-4 h-4 mr-1" data-lucide="users" strokeWidth="1.5"></i> 8 spots left</span>
</div>
</div>
<div className="text-left sm:text-right">
<div className="text-2xl font-semibold text-gray-900 mb-2">$950</div>
<button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">Apply Now</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="creator-tab" id="creator-messages">
<div className="p-4 sm:p-6 lg:p-8">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Messages</h1>
<p className="text-gray-600 text-sm sm:text-base mb-6">Communication with brands</p>
<div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
<i className="w-12 h-12 text-gray-400 mx-auto mb-4" data-lucide="message-circle" strokeWidth="1.5"></i>
<p className="text-gray-600">Messages feature coming soon</p>
</div>
</div>
</div>
<div className="creator-tab" id="creator-analytics">
<div className="p-4 sm:p-6 lg:p-8">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Analytics</h1>
<p className="text-gray-600 text-sm sm:text-base mb-6">Track your performance metrics</p>
<div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
<i className="w-12 h-12 text-gray-400 mx-auto mb-4" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
<p className="text-gray-600">Analytics feature coming soon</p>
</div>
</div>
</div>
<div className="creator-tab" id="creator-earnings">
<div className="p-4 sm:p-6 lg:p-8">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Earnings</h1>
<p className="text-gray-600 text-sm sm:text-base mb-6">Manage your payments and withdrawals</p>
<div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
<i className="w-12 h-12 text-gray-400 mx-auto mb-4" data-lucide="dollar-sign" strokeWidth="1.5"></i>
<p className="text-gray-600">Earnings feature coming soon</p>
</div>
</div>
</div>
<div className="creator-tab" id="creator-profile">
<div className="p-4 sm:p-6 lg:p-8">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Profile</h1>
<p className="text-gray-600 text-sm sm:text-base mb-6">Manage your creator profile</p>
<div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
<i className="w-12 h-12 text-gray-400 mx-auto mb-4" data-lucide="user" strokeWidth="1.5"></i>
<p className="text-gray-600">Profile management coming soon</p>
</div>
</div>
</div>
</main>
</div>
</div>


    </>
  );
}
