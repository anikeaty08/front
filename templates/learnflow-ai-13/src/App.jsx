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
        
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });
        
        // Smooth scroll for navigation links
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
      

<div className="fixed inset-0 pointer-events-none overflow-hidden">
<div className="particle" style={{left: '10%', animationDelay: '0s'}}></div>
<div className="particle" style={{left: '20%', animationDelay: '2s'}}></div>
<div className="particle" style={{left: '30%', animationDelay: '4s'}}></div>
<div className="particle" style={{left: '40%', animationDelay: '1s'}}></div>
<div className="particle" style={{left: '50%', animationDelay: '3s'}}></div>
<div className="particle" style={{left: '60%', animationDelay: '5s'}}></div>
<div className="particle" style={{left: '70%', animationDelay: '2.5s'}}></div>
<div className="particle" style={{left: '80%', animationDelay: '4.5s'}}></div>
<div className="particle" style={{left: '90%', animationDelay: '1.5s'}}></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex items-center space-x-2">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-orbitron font-bold text-lg font-quicksand" style={{letterSpacing: '-0.05em'}}>LF</div>
<span className="font-orbitron font-semibold text-xl tracking-tight font-quicksand" style={{}}>LearnFlow</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="nav-link text-sm font-medium text-gray-300 hover:text-white font-quicksand" href="#home" style={{}}>Home</a>
<a className="nav-link text-sm font-medium text-gray-300 hover:text-white font-quicksand" href="#how-it-works" style={{}}>How It Works</a>
<a className="nav-link text-sm font-medium text-gray-300 hover:text-white font-quicksand" href="#features" style={{}}>Features</a>
<a className="nav-link text-sm font-medium text-gray-300 hover:text-white font-quicksand" href="#pricing" style={{}}>Pricing</a>
<button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm font-medium pulse-glow hover:scale-105 transition-transform font-quicksand" style={{}}>
                        Start Free
                    </button>
</div>

<button className="md:hidden p-2">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">

<div className="absolute inset-0 grid-bg opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-purple-300 border border-purple-500/30 font-quicksand" style={{}}>
                        🚀 AI-Powered Learning Platform
                    </div>
<h1 className="lg:text-7xl leading-tight text-5xl font-bold tracking-tight font-space-grotesk" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Turn YouTube into <span className="gradient-text font-space-grotesk" style={{}}>Structured Learning</span> Courses
                    </h1>
<p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl font-quicksand" style={{}}>
                        Stop wasting time searching — LearnFlow transforms videos into interactive, personalized learning paths with quizzes and progress tracking.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg pulse-glow hover:scale-105 transition-transform flex items-center justify-center space-x-2">
<span className="font-quicksand" style={{}}>Try It Free</span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="px-8 py-4 glass border-2 border-purple-500/50 rounded-lg font-semibold text-lg hover-glow flex items-center justify-center space-x-2">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span className="font-quicksand" style={{}}>Watch Demo</span>
</button>
</div>
<div className="flex items-center space-x-8 pt-4">
<div>
<div className="text-3xl font-bold gradient-text font-space-grotesk" style={{}}>10K+</div>
<div className="text-sm text-gray-500 font-quicksand" style={{}}>Courses Created</div>
</div>
<div className="h-12 w-px bg-gray-700"></div>
<div>
<div className="text-3xl font-bold gradient-text font-space-grotesk" style={{}}>2M+</div>
<div className="text-sm text-gray-500 font-quicksand" style={{}}>Videos Analyzed</div>
</div>
<div className="h-12 w-px bg-gray-700"></div>
<div>
<div className="text-3xl font-bold gradient-text font-space-grotesk" style={{}}>5x</div>
<div className="text-sm text-gray-500 font-quicksand" style={{}}>Faster Learning</div>
</div>
</div>
</div>

<div className="relative hidden lg:block">
<div className="relative floating">

<div className="glass-light rounded-2xl p-6 space-y-4 glow-purple">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-gray-400 font-quicksand" style={{}}>Course Progress</span>
<span className="text-sm font-semibold text-purple-400 font-quicksand" style={{}}>68%</span>
</div>
<div className="h-2 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
</div>

<div className="space-y-3 pt-4">
<div className="glass rounded-lg p-4 flex items-center space-x-4 hover-glow">
<div className="w-16 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded flex items-center justify-center">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div className="flex-1">
<div className="font-medium text-sm font-quicksand" style={{}}>Introduction to AI</div>
<div className="text-xs text-gray-500 font-quicksand" style={{}}>12:34 • Completed</div>
</div>
<svg className="lucide lucide-check-circle w-5 h-5 text-green-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div className="glass rounded-lg p-4 flex items-center space-x-4 border-2 border-purple-500/50 glow-purple">
<div className="w-16 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded flex items-center justify-center">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div className="flex-1">
<div className="font-medium text-sm font-quicksand" style={{}}>Neural Networks Basics</div>
<div className="text-xs text-gray-500 font-quicksand" style={{}}>18:45 • In Progress</div>
</div>
<div className="w-8 h-8 rounded-full border-2 border-purple-500 border-t-transparent animate-spin"></div>
</div>
<div className="glass rounded-lg p-4 flex items-center space-x-4 opacity-50">
<div className="w-16 h-12 bg-gray-700 rounded flex items-center justify-center">
<svg className="lucide lucide-lock w-5 h-5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="flex-1">
<div className="font-medium text-sm font-quicksand" style={{}}>Deep Learning Projects</div>
<div className="text-xs text-gray-500 font-quicksand" style={{}}>25:10 • Locked</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-8 top-1/2 glass-light rounded-xl p-4 w-64 glow-blue floating" style={{animationDelay: '1s'}}>
<div className="flex items-center space-x-2 mb-3">
<svg className="lucide lucide-brain w-5 h-5 text-blue-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
<span className="font-medium text-sm font-quicksand" style={{}}>Quick Quiz</span>
</div>
<p className="text-xs text-gray-400 mb-3 font-quicksand" style={{}}>What is a neural network?</p>
<div className="space-y-2">
<div className="glass rounded px-3 py-2 text-xs hover:border-purple-500 border border-transparent transition-colors cursor-pointer font-quicksand" style={{}}>A) A type of algorithm</div>
<div className="glass rounded px-3 py-2 text-xs bg-purple-600/20 border border-purple-500 font-quicksand" style={{}}>B) Computing system inspired by brain</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
<svg className="lucide lucide-chevron-down w-8 h-8 text-purple-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</section>

<section className="relative py-32 overflow-hidden" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-purple-300 border border-purple-500/30 mb-6 font-quicksand" style={{}}>
                    How It Works
                </div>
<h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 font-space-grotesk" style={{}}>
                    Your Journey to <span className="gradient-text font-space-grotesk" style={{}}>Mastery</span>
</h2>
<p className="text-xl text-gray-400 max-w-2xl mx-auto font-quicksand" style={{}}>
                    Three simple steps to transform scattered YouTube videos into structured learning paths
                </p>
</div>

<div className="relative max-w-5xl mx-auto">

<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 timeline-connector transform -translate-y-1/2"></div>
<div className="grid lg:grid-cols-3 gap-8 relative z-10">

<div className="glass-light rounded-2xl p-8 hover-glow space-y-6 group">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="lucide lucide-search w-8 h-8" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<div>
<div className="text-sm font-semibold text-purple-400 mb-2 font-quicksand" style={{}}>STEP 1</div>
<h3 className="text-2xl font-bold mb-3 font-space-grotesk" style={{}}>Input a Skill</h3>
<p className="text-gray-400 leading-relaxed font-quicksand" style={{}}>Tell LearnFlow what you want to master. Our AI understands your learning goals.</p>
</div>
<div className="pt-4">
<div className="glass rounded-lg p-3 text-sm font-mono text-purple-300 font-quicksand" style={{}}>
                                "Learn Machine Learning"
                            </div>
</div>
</div>

<div className="glass-light rounded-2xl p-8 hover-glow space-y-6 group lg:mt-12">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="lucide lucide-sparkles w-8 h-8" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div>
<div className="text-sm font-semibold text-blue-400 mb-2 font-quicksand" style={{}}>STEP 2</div>
<h3 className="text-2xl font-bold mb-3 font-space-grotesk" style={{}}>AI Curates Courses</h3>
<p className="text-gray-400 leading-relaxed font-quicksand" style={{}}>Our AI searches YouTube, ranks videos, and builds a structured curriculum tailored for you.</p>
</div>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
<div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
<span className="text-xs text-gray-500 ml-2 font-quicksand" style={{}}>Analyzing 1,000+ videos</span>
</div>
</div>

<div className="glass-light rounded-2xl p-8 hover-glow space-y-6 group">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="lucide lucide-graduation-cap w-8 h-8" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<div>
<div className="text-sm font-semibold text-green-400 mb-2 font-quicksand" style={{}}>STEP 3</div>
<h3 className="text-2xl font-bold mb-3 font-space-grotesk" style={{}}>Learn &amp; Test</h3>
<p className="text-gray-400 leading-relaxed font-quicksand" style={{}}>Watch, learn, and take auto-generated quizzes. Track your progress in real-time.</p>
</div>
<div className="flex items-center space-x-2">
<div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
</div>
<span className="text-xs font-semibold text-green-400 font-quicksand" style={{}}>75%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden" id="features">
<div className="absolute inset-0 grid-bg opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center mb-20">
<div className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-purple-300 border border-purple-500/30 mb-6 font-quicksand" style={{}}>
                    Platform Features
                </div>
<h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 font-space-grotesk" style={{}}>
                    Your Course. Your Pace. <span className="gradient-text font-space-grotesk" style={{}}>Your AI Mentor</span>
</h2>
<p className="text-xl text-gray-400 max-w-2xl mx-auto font-quicksand" style={{}}>
                    Experience personalized learning powered by cutting-edge AI technology
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-light rounded-2xl p-8 hover-glow space-y-4 group">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="lucide lucide-book-open w-7 h-7 text-purple-400" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h3 className="text-xl font-semibold font-quicksand" style={{}}>Structured Learning Paths</h3>
<p className="text-gray-400 text-sm leading-relaxed font-quicksand" style={{}}>AI organizes videos into logical sequences, ensuring you build knowledge progressively.</p>
</div>

<div className="glass-light rounded-2xl p-8 hover-glow space-y-4 group">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="lucide lucide-clipboard-check w-7 h-7 text-blue-400" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold font-quicksand" style={{}}>Auto-Generated Quizzes</h3>
<p className="text-gray-400 text-sm leading-relaxed font-quicksand" style={{}}>Test your knowledge with AI-created quizzes after each video to reinforce learning.</p>
</div>

<div className="glass-light rounded-2xl p-8 hover-glow space-y-4 group">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="lucide lucide-trending-up w-7 h-7 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-xl font-semibold font-quicksand" style={{}}>Smart Progress Tracking</h3>
<p className="text-gray-400 text-sm leading-relaxed font-quicksand" style={{}}>Visual dashboards show exactly where you are and what to tackle next.</p>
</div>

<div className="glass-light rounded-2xl p-8 hover-glow space-y-4 group">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-600/20 to-pink-800/20 border border-pink-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="lucide lucide-youtube w-7 h-7 text-pink-400" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</div>
<h3 className="text-xl font-semibold font-quicksand" style={{}}>Integrated YouTube Player</h3>
<p className="text-gray-400 text-sm leading-relaxed font-quicksand" style={{}}>Watch seamlessly without leaving the platform. All learning in one place.</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 font-space-grotesk" style={{}}>
                    Built for <span className="gradient-text font-space-grotesk" style={{}}>Modern Learners</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="stat-card glass-light rounded-2xl p-10 text-center space-y-6 border-2 border-purple-500/20">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600/30 to-purple-800/30 border border-purple-500/50 flex items-center justify-center mx-auto glow-purple">
<svg className="lucide lucide-zap w-10 h-10 text-purple-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<div className="text-5xl font-bold gradient-text mb-2 font-space-grotesk" style={{}}>80%</div>
<div className="text-xl font-semibold mb-3 font-quicksand" style={{}}>Efficiency</div>
<p className="text-gray-400 text-sm font-quicksand" style={{}}>Reduce search time by 80%. No more endless scrolling through YouTube.</p>
</div>
</div>

<div className="stat-card glass-light rounded-2xl p-10 text-center space-y-6 border-2 border-blue-500/20">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-800/30 border border-blue-500/50 flex items-center justify-center mx-auto glow-blue">
<svg className="lucide lucide-target w-10 h-10 text-blue-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div>
<div className="text-5xl font-bold gradient-text mb-2 font-space-grotesk" style={{}}>50%</div>
<div className="text-xl font-semibold mb-3 font-quicksand" style={{}}>Engagement</div>
<p className="text-gray-400 text-sm font-quicksand" style={{}}>50% higher course completion rate with structured paths and quizzes.</p>
</div>
</div>

<div className="stat-card glass-light rounded-2xl p-10 text-center space-y-6 border-2 border-green-500/20">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-600/30 to-green-800/30 border border-green-500/50 flex items-center justify-center mx-auto" style={{boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'}}>
<svg className="lucide lucide-brain w-10 h-10 text-green-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<div>
<div className="text-5xl font-bold gradient-text mb-2 font-space-grotesk" style={{}}>100%</div>
<div className="text-xl font-semibold mb-3 font-quicksand" style={{}}>Assessment</div>
<p className="text-gray-400 text-sm font-quicksand" style={{}}>Instant AI-generated quizzes for every video you complete.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 font-space-grotesk" style={{}}>
                    Inside the <span className="gradient-text font-space-grotesk" style={{}}>Platform</span>
</h2>
<p className="text-xl text-gray-400 font-quicksand" style={{}}>AI-structured learning you can see</p>
</div>

<div className="relative max-w-6xl mx-auto">
<div className="glass-light rounded-3xl p-8 glow-purple">

<div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-700">
<div>
<h3 className="text-2xl font-bold mb-1 font-space-grotesk" style={{}}>Machine Learning Fundamentals</h3>
<p className="text-sm text-gray-400 font-quicksand" style={{}}>12 videos • 8 hours • AI Curated</p>
</div>
<div className="glass rounded-lg px-4 py-2">
<span className="text-sm font-semibold text-purple-400 font-quicksand" style={{}}>68% Complete</span>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="glass rounded-xl p-5 space-y-3 border border-green-500/50 glow-blue">
<div className="flex items-center justify-between">
<svg className="lucide lucide-check-circle w-5 h-5 text-green-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-xs text-gray-500 font-quicksand" style={{}}>Completed</span>
</div>
<div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-play-circle w-12 h-12 opacity-80" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<h4 className="font-semibold text-sm mb-1 font-quicksand" style={{}}>What is Machine Learning?</h4>
<p className="text-xs text-gray-500 font-quicksand" style={{}}>15:30 • By Andrew Ng</p>
</div>
<div className="h-1 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full w-full bg-green-500 rounded-full"></div>
</div>
</div>
<div className="glass rounded-xl p-5 space-y-3 border-2 border-purple-500 pulse-glow">
<div className="flex items-center justify-between">
<svg className="lucide lucide-play w-5 h-5 text-purple-400" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span className="text-xs text-purple-400 font-semibold font-quicksand" style={{}}>Current</span>
</div>
<div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center relative">
<svg className="lucide lucide-play-circle w-12 h-12 opacity-80" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
</div>
<div>
<h4 className="font-semibold text-sm mb-1 font-quicksand" style={{}}>Supervised Learning</h4>
<p className="text-xs text-gray-500 font-quicksand" style={{}}>22:45 • By Stanford</p>
</div>
<div className="h-1 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-purple-500 rounded-full"></div>
</div>
</div>
<div className="glass rounded-xl p-5 space-y-3 opacity-60">
<div className="flex items-center justify-between">
<svg className="lucide lucide-lock w-5 h-5 text-gray-600" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-xs text-gray-600 font-quicksand" style={{}}>Locked</span>
</div>
<div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-lock w-8 h-8 text-gray-700" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div>
<h4 className="font-semibold text-sm mb-1 font-quicksand" style={{}}>Neural Networks Intro</h4>
<p className="text-xs text-gray-500 font-quicksand" style={{}}>18:20 • By MIT</p>
</div>
<div className="h-1 bg-gray-800 rounded-full"></div>
</div>
</div>

<div className="mt-8 pt-6 border-t border-gray-700">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-gray-400 font-quicksand" style={{}}>Overall Progress</span>
<span className="text-sm font-semibold gradient-text font-quicksand" style={{}}>8 of 12 modules</span>
</div>
<div className="h-3 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-purple-500/30 rounded-full glow-purple hidden lg:block"></div>
<div className="absolute -bottom-10 -left-10 w-24 h-24 border-2 border-blue-500/30 rounded-full glow-blue hidden lg:block"></div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 font-space-grotesk" style={{}}>
                    Trusted by <span className="gradient-text font-space-grotesk" style={{}}>Thousands</span>
</h2>
</div>

<div className="grid md:grid-cols-3 gap-8 mb-20">
<div className="glass-light rounded-2xl p-10 text-center hover-glow">
<div className="text-6xl font-bold gradient-text mb-3 font-space-grotesk" style={{}}>10K+</div>
<div className="text-xl font-semibold mb-2 font-quicksand" style={{}}>Courses Generated</div>
<p className="text-sm text-gray-500 font-quicksand" style={{}}>AI-powered learning paths created</p>
</div>
<div className="glass-light rounded-2xl p-10 text-center hover-glow">
<div className="text-6xl font-bold gradient-text mb-3 font-space-grotesk" style={{}}>2M+</div>
<div className="text-xl font-semibold mb-2 font-quicksand" style={{}}>Videos Analyzed</div>
<p className="text-sm text-gray-500 font-quicksand" style={{}}>YouTube content processed by our AI</p>
</div>
<div className="glass-light rounded-2xl p-10 text-center hover-glow">
<div className="text-6xl font-bold gradient-text mb-3 font-space-grotesk" style={{}}>5x</div>
<div className="text-xl font-semibold mb-2 font-quicksand" style={{}}>Faster Skill Mastery</div>
<p className="text-sm text-gray-500 font-quicksand" style={{}}>Compared to traditional learning</p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
<div className="glass-light rounded-2xl p-8 space-y-4 border border-purple-500/20 hover-glow">
<div className="flex items-center space-x-1 mb-4">
<svg className="lucide lucide-star w-5 h-5 fill-yellow-500 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-500 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-500 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-500 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-500 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-300 leading-relaxed font-quicksand" style={{}}>"LearnFlow transformed how I learn. The structured paths make complex topics digestible. I've completed 3 courses in a month!"</p>
<div className="flex items-center space-x-3 pt-4">
<img alt="User" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-semibold text-sm font-quicksand" style={{}}>Alex Chen</div>
<div className="text-xs text-gray-500 font-quicksand" style={{}}>Software Engineer</div>
</div>
</div>
</div>
<div className="glass-light rounded-2xl p-8 space-y-4 border border-blue-500/20 hover-glow">
<div className="flex items-center space-x-1 mb-4">
<svg className="lucide lucide-star w-5 h-5 fill-yellow-500 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-500 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-500 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-500 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-500 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-300 leading-relaxed font-quicksand" style={{}}>"The AI-generated quizzes are incredible. They really test my understanding and help me retain information better than passive watching."</p>
<div className="flex items-center space-x-3 pt-4">
<img alt="User" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-semibold text-sm font-quicksand" style={{}}>Sarah Johnson</div>
<div className="text-xs text-gray-500 font-quicksand" style={{}}>Data Scientist</div>
</div>
</div>
</div>
<div className="glass-light rounded-2xl p-8 space-y-4 border border-green-500/20 hover-glow">
<div className="flex items-center space-x-1 mb-4">
<svg className="lucide lucide-star w-5 h-5 fill-yellow-500 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-500 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-500 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-500 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-yellow-500 text-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-300 leading-relaxed font-quicksand" style={{}}>"No more random YouTube rabbit holes. LearnFlow keeps me focused and tracks my progress. Game changer for self-learners!"</p>
<div className="flex items-center space-x-3 pt-4">
<img alt="User" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-semibold text-sm font-quicksand" style={{}}>Michael Park</div>
<div className="text-xs text-gray-500 font-quicksand" style={{}}>UX Designer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-40 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-purple-900/20"></div>
<div className="absolute inset-0 grid-bg opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
<div className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-purple-300 border border-purple-500/30 mb-8 font-quicksand" style={{}}>
                🎓 Join the Future of Learning
            </div>
<h2 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 font-space-grotesk" style={{}}>
                Transform Your Learning — <span className="gradient-text font-space-grotesk" style={{}}>Start with LearnFlow AI</span>
</h2>
<p className="text-xl lg:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto font-space-grotesk" style={{}}>
                Build your personalized course in seconds. The future of learning is here.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
<button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-xl pulse-glow hover:scale-105 transition-transform flex items-center space-x-3">
<span className="font-quicksand" style={{}}>Start Free</span>
<svg className="lucide lucide-arrow-right w-6 h-6" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="px-12 py-5 glass border-2 border-white/30 rounded-xl font-semibold text-xl hover-glow flex items-center space-x-3">
<svg className="lucide lucide-calendar w-6 h-6" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-quicksand" style={{}}>Request Demo</span>
</button>
</div>
<div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-quicksand" style={{}}>No credit card required</span>
</div>
<div className="h-4 w-px bg-gray-700"></div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-quicksand" style={{}}>Free 14-day trial</span>
</div>
<div className="h-4 w-px bg-gray-700"></div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-quicksand" style={{}}>Cancel anytime</span>
</div>
</div>
</div>

<div className="absolute top-20 left-20 w-20 h-20 border border-purple-500/30 rounded-full glow-purple floating hidden lg:block"></div>
<div className="absolute bottom-20 right-20 w-16 h-16 border border-blue-500/30 rounded-full glow-blue floating hidden lg:block" style={{animationDelay: '1s'}}></div>
</section>

<footer className="relative border-t border-gray-800 py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<div className="flex items-center space-x-2">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-orbitron font-bold text-lg font-quicksand" style={{letterSpacing: '-0.05em'}}>LF</div>
<span className="font-orbitron font-semibold text-xl tracking-tight font-quicksand" style={{}}>LearnFlow</span>
</div>
<p className="text-sm text-gray-500 font-quicksand" style={{}}>Transform YouTube into structured learning courses with AI.</p>
<div className="flex items-center space-x-3">
<a className="w-10 h-10 glass rounded-lg flex items-center justify-center hover-glow" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 glass rounded-lg flex items-center justify-center hover-glow" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 glass rounded-lg flex items-center justify-center hover-glow" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-4 font-quicksand" style={{}}>Product</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors font-quicksand" href="#" style={{}}>Features</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#" style={{}}>Pricing</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#" style={{}}>How It Works</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#" style={{}}>Roadmap</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4 font-quicksand" style={{}}>Company</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors font-quicksand" href="#" style={{}}>About</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#" style={{}}>Blog</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#" style={{}}>Careers</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#" style={{}}>Contact</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4 font-quicksand" style={{}}>Legal</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors font-quicksand" href="#" style={{}}>Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#" style={{}}>Terms of Service</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#" style={{}}>Cookie Policy</a></li>
<li><a className="hover:text-white transition-colors font-quicksand" href="#" style={{}}>Licenses</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
<p className="text-sm text-gray-500 font-quicksand" style={{}}>© 2024 LearnFlow AI. All rights reserved.</p>
<p className="text-sm text-gray-500 font-quicksand" style={{}}>Built with AI • Powered by Innovation</p>
</div>
</div>
</footer>

<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
