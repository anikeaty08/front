import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();

    // Animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .scale-in').forEach(el => {
      observer.observe(el);
    });

    // Trigger initial animations
    setTimeout(() => {
      document.querySelectorAll('.slide-in-left, .fade-in, .scale-in').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate');
        }, index * 100);
      });
    }, 100);

    // Enhanced form handler
    document.getElementById('subscribeForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const submitBtn = this.querySelector('button[type="submit"]');
      
      if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        // Loading state
        submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i><span>Joining...</span>';
        lucide.createIcons();
        
        setTimeout(() => {
          document.getElementById('msg').classList.remove('hidden');
          this.reset();
          submitBtn.innerHTML = '<span>Join Mindloop</span><i data-lucide="arrow-right" class="w-4 h-4"></i>';
          lucide.createIcons();
        }, 1500);
      }
    });

    // Download functionality
    document.getElementById('downloadBtn').addEventListener('click', () => {
      const blob = new Blob([document.documentElement.outerHTML], {type: 'text/html'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'mindloop-enhanced.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative flex flex-col min-h-screen">

<iframe className="fixed w-full h-screen" frameborder="0" height="100%" src="https://my.spline.design/freeiphone16promockup-OzLACnwnBaBIGbYyAkiSuBJv/" width="100%"></iframe>

<header className="relative z-10 slide-in-left animate">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
<a className="flex items-center space-x-3 text-white group" href="#">
<div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient-to-tr from-teal-400 to-blue-500">
<svg className="lucide lucide-brain-circuit w-4 h-4 text-white" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<span className="text-xl font-semibold tracking-tight font-sans">Mindloop</span>
</a>
<div className="hidden lg:flex items-center space-x-8 text-sm text-gray-200">
<a className="hover:text-white transition-colors duration-200 flex items-center space-x-1" href="#home">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="font-sans">Home</span>
</a>
<a className="hover:text-white transition-colors duration-200 flex items-center space-x-1" href="#features">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="font-sans">Features</span>
</a>
<a className="hover:text-white transition-colors duration-200 flex items-center space-x-1" href="#philosophy">
<svg className="lucide lucide-compass w-4 h-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-sans">Philosophy</span>
</a>
<a className="hover:text-white transition-colors duration-200 flex items-center space-x-1" href="#community">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-sans">Community</span>
</a>
<a className="hover:text-white transition-colors duration-200 flex items-center space-x-1" href="#insights">
<svg className="lucide lucide-lightbulb w-4 h-4" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<span className="font-sans">Insights</span>
</a>
</div>
<div className="flex items-center space-x-3">
<button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</button>
<button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</button>
<button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</button>
<button className="lg:hidden w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center">
<svg className="lucide lucide-menu w-4 h-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</nav>
</header>

<main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">

<div className="flex flex-col items-center space-y-6 fade-in animate" style={{animationDelay: '0.2s'}}>
<div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
<div className="flex -space-x-2">
<img alt="Sarah M." className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="David K." className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&amp;h=150&amp;fit=crop&amp;crop=face"/>
<img alt="Maria L." className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&amp;h=150&amp;fit=crop&amp;crop=face"/>
<img alt="Alex R." className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&amp;h=150&amp;fit=crop&amp;crop=face"/>
</div>
<div className="text-sm text-gray-300 font-sans">
<span className="font-medium text-white font-sans">12,847</span> mindful individuals
          </div>
</div>
<div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-sans">4.9/5 rating</span>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-globe w-4 h-4 text-blue-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="font-sans">47 countries</span>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-trending-up w-4 h-4 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-sans">Growing daily</span>
</div>
</div>
</div>

<div className="fade-in animate text-center bg-black/30 border-white/10 border rounded-3xl mt-12 mb-8 pt-8 pr-12 pb-8 pl-12 backdrop-blur-sm" style={{animationDelay: '0.4s'}}>
<h1 className="sm:text-6xl lg:text-8xl leading-tight text-4xl text-white tracking-tight font-instrument-serif font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
          Transform Your
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 pt-2 pb-2 font-instrument-serif font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
            Digital Wellbeing
          </span>
</h1>
<p className="max-w-xl sm:text-3xl leading-relaxed text-lg text-gray-300 mt-6 mr-auto ml-auto font-instrument-serif font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>
          Join our community of mindful innovators exploring the intersection of technology, consciousness, and human potential. Get curated insights, research findings, and practical wisdom delivered weekly.
        </p>
</div>

<div className="w-full max-w-2xl mt-8 scale-in animate" style={{animationDelay: '0.6s'}}>
<form className="relative" id="subscribeForm">
<div className="flex flex-col sm:flex-row rounded-2xl border border-white/20 overflow-hidden backdrop-blur-md bg-white/5 shadow-2xl">
<div className="flex-1 relative">
<svg className="lucide lucide-mail absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-14 pr-6 py-5 bg-transparent placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-2xl sm:rounded-r-none" id="email" name="email" placeholder="Enter your email address" required="" type="email"/>
</div>
<button className="hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover:scale-105 flex sm:rounded-l-none font-medium text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-2xl pt-5 pr-8 pb-5 pl-8 space-x-2 items-center justify-center" type="submit">
<span className="font-sans">Join Mindloop</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
<div className="mt-4 text-center">
<p className="text-sm text-green-400 hidden flex items-center justify-center space-x-2" id="msg">
<svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="font-sans">Welcome to the Mindloop community! Check your inbox.</span>
</p>
<p className="text-xs text-gray-400 mt-2 font-sans">
            Free forever. Unsubscribe anytime. No spam, we promise.
          </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl w-full fade-in animate" style={{animationDelay: '0.8s'}}>
<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-brain w-6 h-6 text-white" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-sans">Mindful Technology</h3>
<p className="text-sm text-gray-300 font-sans">Explore how technology can enhance rather than diminish human consciousness and wellbeing.</p>
</div>
<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-users w-6 h-6 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-sans">Global Community</h3>
<p className="text-sm text-gray-300 font-sans">Connect with like-minded individuals from around the world sharing similar values and aspirations.</p>
</div>
<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-lightbulb w-6 h-6 text-white" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-sans">Weekly Insights</h3>
<p className="text-sm text-gray-300 font-sans">Curated research, philosophical perspectives, and practical tools for conscious living in the digital age.</p>
</div>
</div>
</main>

<footer className="relative z-10 py-8 border-t border-white/10 fade-in animate" style={{animationDelay: '1s'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
<div className="flex items-center space-x-6">
<button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-all duration-200 hover:scale-105" id="downloadBtn">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="font-sans">Download Source</span>
</button>
<div className="text-xs text-gray-400 font-sans">
              © 2024 Mindloop. Crafted with intention.
            </div>
</div>
<div className="flex items-center space-x-4 text-xs text-gray-400">
<a className="hover:text-white transition-colors font-sans" href="#">Privacy Policy</a>
<span className="font-sans">•</span>
<a className="hover:text-white transition-colors font-sans" href="#">Terms of Service</a>
<span className="font-sans">•</span>
<a className="hover:text-white transition-colors font-sans" href="#">Contact</a>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
