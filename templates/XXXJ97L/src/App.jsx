import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();
    
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, index * 150);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card').forEach(card => {
      observer.observe(card);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="graduation-cap"></i>
</div>
<span className="sf-display text-xl font-semibold">LearnSpace</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#features">Features</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#courses">Courses</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#pricing">Pricing</a>
<a className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-all hover:scale-105" href="#">Get Started</a>
</div>
<button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-20 pb-32 hero-gradient overflow-hidden">
<div className="absolute inset-0 bg-black/10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
<div className="text-white space-y-8">
<h1 className="sf-display text-5xl md:text-7xl font-bold tracking-tight leading-none opacity-0 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Learning <br/>
<span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Reimagined</span>
</h1>
<p className="text-xl md:text-2xl text-white/90 leading-relaxed opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            Interactive videos, adaptive quizzes, and hands-on courses that make learning irresistible.
          </p>
<div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
<button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 flex items-center justify-center space-x-2">
<i className="w-5 h-5" data-lucide="play"></i>
<span>Start Learning</span>
</button>
<button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Explore Courses
            </button>
</div>
</div>
<div className="relative opacity-0 animate-scale-in" style={{animationDelay: '0.4s'}}>
<div className="relative animate-float">
<img alt="Students learning" className="rounded-3xl shadow-2xl w-full" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-pulse-glow">
<i className="w-8 h-8 text-yellow-500" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="opacity-0 animate-scale-in" style={{animationDelay: '0.1s'}}>
<div className="text-3xl md:text-4xl font-bold sf-display text-blue-600 mb-2">1M+</div>
<div className="text-gray-600">Active Learners</div>
</div>
<div className="opacity-0 animate-scale-in" style={{animationDelay: '0.2s'}}>
<div className="text-3xl md:text-4xl font-bold sf-display text-purple-600 mb-2">50K+</div>
<div className="text-gray-600">Video Lessons</div>
</div>
<div className="opacity-0 animate-scale-in" style={{animationDelay: '0.3s'}}>
<div className="text-3xl md:text-4xl font-bold sf-display text-green-600 mb-2">95%</div>
<div className="text-gray-600">Success Rate</div>
</div>
<div className="opacity-0 animate-scale-in" style={{animationDelay: '0.4s'}}>
<div className="text-3xl md:text-4xl font-bold sf-display text-orange-600 mb-2">24/7</div>
<div className="text-gray-600">Support</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gray-50" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="sf-display text-4xl md:text-5xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up">
          Everything you need to <span className="text-blue-600">excel</span>
</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          From interactive videos to offline courses, we've built the complete learning ecosystem.
        </p>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
<div className="space-y-8">
<div className="feature-card">
<div className="flex items-center space-x-4 mb-6">
<div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="play-circle"></i>
</div>
<div>
<h3 className="sf-display text-2xl font-semibold">Interactive Videos</h3>
<p className="text-gray-600">Engaging content that adapts to your pace</p>
</div>
</div>
</div>
<div className="feature-card">
<div className="flex items-center space-x-4 mb-6">
<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="brain"></i>
</div>
<div>
<h3 className="sf-display text-2xl font-semibold">Smart Quizzes</h3>
<p className="text-gray-600">AI-powered assessments that help you learn</p>
</div>
</div>
</div>
<div className="feature-card">
<div className="flex items-center space-x-4 mb-6">
<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="users"></i>
</div>
<div>
<h3 className="sf-display text-2xl font-semibold">Offline Classes</h3>
<p className="text-gray-600">Connect with instructors in person</p>
</div>
</div>
</div>
</div>
<div className="relative opacity-0 animate-slide-in-right">
<img alt="Learning interface" className="rounded-3xl shadow-2xl" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 glass-effect rounded-xl p-4">
<div className="flex items-center space-x-2 text-white">
<i className="w-5 h-5" data-lucide="trending-up"></i>
<span className="font-semibold">Progress: 89%</span>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative opacity-0 animate-slide-in-left">
<img alt="Marketplace" className="rounded-3xl shadow-2xl" src="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 glass-effect rounded-xl p-4">
<div className="flex items-center space-x-2 text-white">
<i className="w-5 h-5" data-lucide="wallet"></i>
<span className="font-semibold">Balance: 2,450 credits</span>
</div>
</div>
</div>
<div className="space-y-8">
<div className="feature-card">
<div className="flex items-center space-x-4 mb-6">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="shopping-bag"></i>
</div>
<div>
<h3 className="sf-display text-2xl font-semibold">Course Marketplace</h3>
<p className="text-gray-600">Discover thousands of expert-led courses</p>
</div>
</div>
</div>
<div className="feature-card">
<div className="flex items-center space-x-4 mb-6">
<div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="credit-card"></i>
</div>
<div>
<h3 className="sf-display text-2xl font-semibold">Digital Wallet</h3>
<p className="text-gray-600">Seamless payments and reward system</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="sf-display text-4xl md:text-5xl font-bold tracking-tight mb-6">How it works</h2>
<p className="text-xl text-gray-600">Three simple steps to transform your learning journey</p>
</div>
<div className="grid md:grid-cols-3 gap-12">
<div className="text-center feature-card">
<div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-10 h-10 text-white" data-lucide="search"></i>
</div>
<h3 className="sf-display text-xl font-semibold mb-4">Discover</h3>
<p className="text-gray-600">Browse our curated collection of courses and find what sparks your interest</p>
</div>
<div className="text-center feature-card">
<div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-10 h-10 text-white" data-lucide="play"></i>
</div>
<h3 className="sf-display text-xl font-semibold mb-4">Learn</h3>
<p className="text-gray-600">Engage with interactive content, take quizzes, and track your progress</p>
</div>
<div className="text-center feature-card">
<div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-10 h-10 text-white" data-lucide="trophy"></i>
</div>
<h3 className="sf-display text-xl font-semibold mb-4">Achieve</h3>
<p className="text-gray-600">Earn certificates, build skills, and unlock new opportunities</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gray-50" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="sf-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Simple pricing</h2>
<p className="text-xl text-gray-600">Choose the plan that fits your learning goals</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
<div className="bg-white rounded-3xl p-8 shadow-lg feature-card hover:shadow-2xl transition-all hover:scale-105">
<h3 className="sf-display text-2xl font-bold mb-4">Starter</h3>
<div className="text-4xl font-bold mb-6">$9<span className="text-lg text-gray-600">/month</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center"><i className="w-5 h-5 text-green-500 mr-3" data-lucide="check"></i>100+ Video courses</li>
<li className="flex items-center"><i className="w-5 h-5 text-green-500 mr-3" data-lucide="check"></i>Basic quizzes</li>
<li className="flex items-center"><i className="w-5 h-5 text-green-500 mr-3" data-lucide="check"></i>Mobile access</li>
</ul>
<button className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">Get Started</button>
</div>
<div className="bg-blue-600 text-white rounded-3xl p-8 shadow-2xl feature-card hover:shadow-3xl transition-all hover:scale-105 relative">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </div>
<h3 className="sf-display text-2xl font-bold mb-4">Pro</h3>
<div className="text-4xl font-bold mb-6">$29<span className="text-lg opacity-80">/month</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center"><i className="w-5 h-5 text-yellow-400 mr-3" data-lucide="check"></i>Unlimited courses</li>
<li className="flex items-center"><i className="w-5 h-5 text-yellow-400 mr-3" data-lucide="check"></i>AI-powered quizzes</li>
<li className="flex items-center"><i className="w-5 h-5 text-yellow-400 mr-3" data-lucide="check"></i>Offline classes</li>
<li className="flex items-center"><i className="w-5 h-5 text-yellow-400 mr-3" data-lucide="check"></i>Digital wallet</li>
</ul>
<button className="w-full bg-white text-blue-600 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">Get Started</button>
</div>
<div className="bg-white rounded-3xl p-8 shadow-lg feature-card hover:shadow-2xl transition-all hover:scale-105">
<h3 className="sf-display text-2xl font-bold mb-4">Enterprise</h3>
<div className="text-4xl font-bold mb-6">$99<span className="text-lg text-gray-600">/month</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center"><i className="w-5 h-5 text-green-500 mr-3" data-lucide="check"></i>Everything in Pro</li>
<li className="flex items-center"><i className="w-5 h-5 text-green-500 mr-3" data-lucide="check"></i>Team management</li>
<li className="flex items-center"><i className="w-5 h-5 text-green-500 mr-3" data-lucide="check"></i>Custom courses</li>
<li className="flex items-center"><i className="w-5 h-5 text-green-500 mr-3" data-lucide="check"></i>Priority support</li>
</ul>
<button className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
<h2 className="sf-display text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in-up">
        Ready to transform your learning?
      </h2>
<p className="text-xl mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        Join millions of learners who are already advancing their careers with LearnSpace.
      </p>
<button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 opacity-0 animate-scale-in" style={{animationDelay: '0.4s'}}>
        Start Your Journey Today
      </button>
</div>
</section>

<footer className="bg-gray-900 text-gray-300 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div>
<div className="flex items-center space-x-3 mb-4">
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="graduation-cap"></i>
</div>
<span className="sf-display text-xl font-semibold text-white">LearnSpace</span>
</div>
<p className="text-gray-400">Transforming education through technology and innovation.</p>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Product</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Courses</a></li>
<li><a className="hover:text-white transition-colors" href="#">Quizzes</a></li>
<li><a className="hover:text-white transition-colors" href="#">Certificates</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Support</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
        © 2024 LearnSpace. All rights reserved.
      </div>
</div>
</footer>


    </>
  );
}
