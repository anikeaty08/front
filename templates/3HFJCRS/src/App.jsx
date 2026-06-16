import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();

    // Mobile menu functionality
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    menuBtn?.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
    closeMenu?.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    mobileMenu?.addEventListener('click', (e) => { 
      if(e.target === mobileMenu) mobileMenu.classList.add('hidden');
    });

    // Animation on scroll/load
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .blur-in').forEach(el => {
      observer.observe(el);
    });

    // Trigger animations on load
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .blur-in').forEach(el => {
          el.classList.add('active');
        });
      }, 100);
    });

    // Form submission
    document.getElementById('accessForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const email = e.target.querySelector('input[type="email"]').value;
      const name = e.target.querySelector('input[type="text"]').value;
      
      if(email && name) {
        alert(`Welcome ${name}! We'll send trading details to ${email}`);
        e.target.reset();
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/bganimation-xIKR0ZTWWoifZLAKROH7y9YL" width="100%"></iframe></div>

<section className="relative min-h-screen overflow-hidden flex flex-col">

<header className="relative z-20 fade-in active">
<nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-6">

<a className="flex items-center space-x-2 group" href="#">
<span className="text-xl tracking-tight font-geist font-light" style={{}}>NEXUS</span>
</a>

<div className="hidden lg:flex items-center space-x-8">
<div className="flex backdrop-blur-sm rounded-full p-1 border bg-white/5 border-white/10">
<a className="px-4 py-2 rounded-full text-sm transition-all duration-300 font-geist font-light text-gray-300 hover:bg-white/10 hover:text-white" href="#" style={{}}>Products</a>
<a className="px-4 py-2 rounded-full text-sm transition-all duration-300 font-geist font-light text-gray-300 hover:bg-white/10 hover:text-white" href="#" style={{}}>Analytics</a>
<a className="px-4 py-2 rounded-full text-sm transition-all duration-300 font-geist font-light text-gray-300 hover:bg-white/10 hover:text-white" href="#" style={{}}>Research</a>
<a className="px-4 py-2 rounded-full text-sm transition-all duration-300 font-geist font-light text-gray-300 hover:bg-white/10 hover:text-white" href="#" style={{}}>Support</a>
</div>
<a className="inline-flex items-center px-6 py-2.5 rounded-lg text-sm bg-gradient-to-r hover:from-violet-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/25 font-geist font-light from-violet-600 to-purple-600" href="#" style={{}}>
<svg className="lucide lucide-log-in w-4 h-4 mr-2" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
            Sign In
          </a>
</div>

<button className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-300 hover:bg-white/10" id="menuBtn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</nav>

<div className="lg:hidden fixed inset-0 backdrop-blur-lg z-40 hidden bg-gray-950/95" id="mobileMenu">
<div className="absolute top-4 right-4">
<button className="h-10 w-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-white/10" id="closeMenu">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-medium">
<a className="transition-colors duration-300 font-geist font-light hover:text-violet-400" href="#" style={{}}>Products</a>
<a className="transition-colors duration-300 font-geist font-light hover:text-violet-400" href="#" style={{}}>Analytics</a>
<a className="transition-colors duration-300 font-geist font-light hover:text-violet-400" href="#" style={{}}>Research</a>
<a className="transition-colors duration-300 font-geist font-light hover:text-violet-400" href="#" style={{}}>Support</a>
<a className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r hover:from-violet-500 hover:to-purple-500 transition-all duration-300 font-geist font-light from-violet-600 to-purple-600" href="#" style={{}}>
<svg className="lucide lucide-log-in w-4 h-4 mr-2" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
            Sign In
          </a>
</div>
</div>
</header>

<div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">

<div className="relative z-10 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="text-center lg:text-left">
<h1 className="slide-in-left text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-6 active" style={{animationDelay: '0.4s'}}>
<span className="bg-gradient-to-r bg-clip-text text-transparent font-jakarta font-light from-white via-gray-200 to-gray-400" style={{}}>ADVANCED</span>
<span className="bg-gradient-to-r bg-clip-text text-transparent font-jakarta font-light from-violet-400 via-purple-400 to-pink-400" style={{}}>TRADING</span>
<span className="bg-gradient-to-r bg-clip-text text-transparent font-jakarta font-light from-white via-gray-200 to-gray-400" style={{}}>ECOSYSTEM</span>
</h1>
<p className="slide-in-left text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0 active font-geist font-light text-gray-300" style={{animationDelay: '0.6s'}}>
              Professional-grade trading platform with advanced analytics, algorithmic execution, and institutional-level security for modern investors.
            </p>

<div className="slide-in-left flex flex-wrap gap-3 justify-center lg:justify-start mb-8 active" style={{animationDelay: '0.8s'}}>
<div className="flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm border bg-white/10 border-white/20">
<svg className="lucide lucide-shield-check w-4 h-4 text-green-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-geist font-light" style={{}}>Bank-Grade Security</span>
</div>
<div className="flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm border bg-white/10 border-white/20">
<svg className="lucide lucide-zap w-4 h-4 text-yellow-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-geist font-light" style={{}}>Lightning Fast</span>
</div>
<div className="flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm border bg-white/10 border-white/20">
<svg className="lucide lucide-trending-up w-4 h-4 text-blue-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-sm font-geist font-light" style={{}}>AI-Powered Analytics</span>
</div>
</div>
</div>

<div className="slide-in-right active" style={{animationDelay: '1s'}}>
<div className="backdrop-blur-sm rounded-2xl p-6 sm:p-8 border shadow-2xl bg-white/5 border-white/10">
<h2 className="text-2xl mb-2 text-center font-jakarta font-light" style={{}}>Start Trading Today</h2>
<p className="text-center mb-6 font-geist font-light text-gray-400" style={{}}>Join thousands of traders already using Nexus</p>
<form className="space-y-4" id="accessForm">
<div className="">
<input className="w-full placeholder-gray-400 px-4 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 border transition-all duration-300 bg-white/10 text-white border-white/20" placeholder="Enter your email address" required="" type="email"/>
</div>
<div className="">
<input className="w-full placeholder-gray-400 px-4 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 border transition-all duration-300 bg-white/10 text-white border-white/20" placeholder="Full name" required="" type="text"/>
</div>
<button className="w-full inline-flex items-center justify-center px-6 py-3 text-sm bg-gradient-to-r hover:from-violet-500 hover:to-purple-500 rounded-lg transition-all duration-300 shadow-lg hover:shadow-violet-500/25 font-geist font-light from-violet-600 to-purple-600" style={{}} type="submit">
                  Get Started Now
                  <svg className="lucide lucide-arrow-right ml-2 w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
<div className="mt-6 pt-6 border-t border-white/10">
<div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-geist font-light" style={{}}>50K+ Active Users</span>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-geist font-light" style={{}}>4.8/5 Rating</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative z-20 px-4 sm:px-6 lg:px-8 pb-8">
<div className="fade-in max-w-7xl mx-auto active" style={{animationDelay: '1.2s'}}>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-white/10">
<div className="text-center">
<div className="text-2xl sm:text-3xl font-jakarta font-light text-violet-400" style={{}}>$2.5B+</div>
<div className="text-sm mt-1 font-geist font-light text-gray-400" style={{}}>Trading Volume</div>
</div>
<div className="text-center">
<div className="text-2xl sm:text-3xl font-jakarta font-light text-purple-400" style={{}}>150+</div>
<div className="text-sm mt-1 font-geist font-light text-gray-400" style={{}}>Markets Available</div>
</div>
<div className="text-center">
<div className="text-2xl sm:text-3xl font-jakarta font-light text-pink-400" style={{}}>99.9%</div>
<div className="text-sm mt-1 font-geist font-light text-gray-400" style={{}}>Uptime</div>
</div>
<div className="text-center">
<div className="text-2xl sm:text-3xl font-jakarta font-light text-blue-400" style={{}}>24/7</div>
<div className="text-sm mt-1 font-geist font-light text-gray-400" style={{}}>Support</div>
</div>
</div>
</div>
</div>
</section>




    </>
  );
}
