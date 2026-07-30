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



    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            inter: ['Inter', 'sans-serif'],
            satoshi: ['Satoshi', 'sans-serif']
          },
          colors: {
            brand: {
              50: '#f0f4ff',
              100: '#e0e7ff', 
              200: '#c7d2fe',
              300: '#a5b4fc',
              400: '#818cf8',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca',
              800: '#3730a3',
              900: '#312e81'
            }
          },
          animation: {
            'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
            'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
            'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
            'blur-in': 'blurIn 1s ease-out forwards',
            'slide-up': 'slideUp 0.6s ease-out forwards',
            'glow': 'glow 2s ease-in-out infinite alternate'
          },
          keyframes: {
            fadeInUp: {
              '0%': { opacity: '0', transform: 'translateY(40px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' }
            },
            fadeInDown: {
              '0%': { opacity: '0', transform: 'translateY(-40px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' }
            },
            fadeInLeft: {
              '0%': { opacity: '0', transform: 'translateX(-40px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' }
            },
            fadeInRight: {
              '0%': { opacity: '0', transform: 'translateX(40px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' }
            },
            blurIn: {
              '0%': { opacity: '0', filter: 'blur(10px)' },
              '100%': { opacity: '1', filter: 'blur(0px)' }
            },
            slideUp: {
              '0%': { opacity: '0', transform: 'translateY(60px) scale(0.95)' },
              '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
            },
            glow: {
              '0%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
              '100%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' }
            }
          }
        }
      }
    }
  


    // Initialize Lucide icons
    lucide.createIcons();
    
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
        }
      });
    }, observerOptions);
    
    // Observe all animated elements
    document.addEventListener('DOMContentLoaded', function() {
      const animatedElements = document.querySelectorAll('[class*="animate-"]');
      animatedElements.forEach(el => observer.observe(el));
      
      // Enhanced card interactions
      const cards = document.querySelectorAll('.hover-lift');
      cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
          this.style.zIndex = '50';
        });
        card.addEventListener('mouseleave', function() {
          this.style.zIndex = 'auto';
        });
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
      
<div className="min-h-screen flex flex-col">

<header className="animate-fade-in-down animate-delay-100 flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-4 lg:py-6 border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
<div className="flex items-center gap-3">
<a className="lg:text-2xl text-xl font-bold text-white tracking-tight font-satoshi hover:text-brand-400 transition-colors duration-300" href="#">FlowSync</a>
</div>
<nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
<a className="hover:text-brand-400 text-gray-400 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:bg-gray-800/30 px-3 py-2 rounded-lg" href="#features">
<i className="w-4 h-4" data-lucide="layers"></i>
<span className="hidden lg:inline">Integrations</span>
</a>
<a className="hover:text-brand-400 text-gray-400 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:bg-gray-800/30 px-3 py-2 rounded-lg" href="#enterprise">
<i className="w-4 h-4" data-lucide="building-2"></i>
<span className="hidden lg:inline">Enterprise</span>
</a>
<a className="hover:text-brand-400 text-gray-400 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:bg-gray-800/30 px-3 py-2 rounded-lg" href="#pricing">
<i className="w-4 h-4" data-lucide="credit-card"></i>
<span className="hidden lg:inline">Pricing</span>
</a>
<a className="hover:text-brand-400 text-gray-400 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:bg-gray-800/30 px-3 py-2 rounded-lg" href="#docs">
<i className="w-4 h-4" data-lucide="file-text"></i>
<span className="hidden lg:inline">API Docs</span>
</a>
</nav>
<div className="flex items-center gap-2 lg:gap-4">
<button className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-800/50 hover:scale-105">
<i className="w-4 h-4" data-lucide="log-in"></i>
          Sign in
        </button>
<button className="flex items-center gap-2 text-xs lg:text-sm font-semibold px-3 lg:px-5 py-2 lg:py-2.5 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-500/50 hover:scale-105 hover:-translate-y-1">
<i className="w-4 h-4" data-lucide="play-circle"></i>
<span className="hidden sm:inline">Start Free Trial</span>
<span className="sm:hidden">Try Free</span>
</button>
</div>
</header>

<section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:py-24">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/20 via-transparent to-transparent"></div>
<div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: `1s`}}></div>
<div className="relative z-10 max-w-7xl mx-auto text-center">

<div className="animate-fade-in-up animate-delay-200 inline-flex items-center gap-2 px-4 py-2 bg-brand-900/50 border border-brand-800/50 text-brand-300 rounded-full text-sm font-medium mb-8 backdrop-blur-sm hover:bg-brand-900/70 hover:border-brand-700/70 transition-all duration-300 hover:scale-105">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span className="hidden sm:inline">Trusted by 125,000+ teams at</span>
<span className="sm:hidden">Used by 125k+ teams</span>
<span className="font-semibold">Microsoft, Spotify, Stripe</span>
</div>

<h1 className="animate-blur-in animate-delay-300 max-w-5xl mx-auto text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight font-satoshi text-white leading-tight lg:leading-[1.1]">
          Connect everything.<br className="hidden sm:block" />
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition-all duration-500">Automate anything.</span><br className="hidden sm:block" />
<span className="text-gray-300">Ship faster.</span>
</h1>

<p className="animate-fade-in-up animate-delay-400 mx-auto mt-6 lg:mt-8 max-w-3xl text-base leading-relaxed text-gray-300">
          FlowSync Pro unifies Slack, Notion, GitHub, Figma, Linear, and 300+ tools with intelligent automation. 
          <span className="text-white font-medium hover:text-brand-400 transition-colors duration-300 cursor-default">Reduce context switching by 78%</span> and ship products 3x faster.
        </p>

<div className="animate-fade-in-up animate-delay-500 flex flex-wrap items-center justify-center gap-4 lg:gap-8 mt-8 text-sm text-gray-400">
<div className="flex items-center gap-2 hover:text-green-400 transition-all duration-300 hover:scale-110">
<i className="w-4 h-4 text-green-400" data-lucide="shield-check"></i>
<span>SOC 2 Type II</span>
</div>
<div className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 hover:scale-110">
<i className="w-4 h-4 text-blue-400" data-lucide="globe"></i>
<span>99.9% uptime SLA</span>
</div>
<div className="flex items-center gap-2 hover:text-purple-400 transition-all duration-300 hover:scale-110">
<i className="w-4 h-4 text-purple-400" data-lucide="clock"></i>
<span>5-min setup</span>
</div>
</div>

<div className="animate-slide-up animate-delay-600 mx-auto mt-10 lg:mt-12 max-w-md lg:max-w-2xl">
<form className="flex flex-col sm:flex-row gap-3 lg:gap-4">
<div className="flex-1 relative group">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 z-10 pointer-events-none group-focus-within:text-brand-400 transition-colors duration-300" data-lucide="mail"></i>
<input className="w-full lg:py-4 lg:text-base focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:outline-none placeholder-gray-500 transition-all duration-300 text-sm text-white bg-gray-800/50 border-gray-700/50 border rounded-xl pt-3 pr-4 pb-3 pl-12 backdrop-blur-sm relative z-0 hover:bg-gray-800/70 hover:border-gray-600/50 focus:scale-105" placeholder="emma.chen@techcorp.com" required type="email" />
</div>
<button className="flex gap-2 lg:px-8 lg:py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/25 lg:text-base group text-sm font-semibold text-white rounded-xl pt-3 pr-6 pb-3 pl-6 items-center justify-center hover:scale-105 hover:-translate-y-1" type="submit">
<span>Get Free Demo</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right"></i>
</button>
</form>
<p className="mt-4 text-xs lg:text-sm text-gray-500 flex flex-wrap items-center justify-center gap-4">
<span className="flex items-center gap-1 hover:text-green-400 transition-colors duration-300">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
              No credit card required
            </span>
<span className="flex items-center gap-1 hover:text-blue-400 transition-colors duration-300">
<i className="w-3 h-3 text-blue-400" data-lucide="calendar"></i>
              14-day free trial
            </span>
<span className="flex items-center gap-1 hover:text-purple-400 transition-colors duration-300">
<i className="w-3 h-3 text-purple-400" data-lucide="users"></i>
              Free for teams under 10
            </span>
</p>
</div>

<div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">

<div className="animate-fade-in-left animate-delay-700 group hover-lift hover:border-green-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 text-left border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm bg-gray-900/30 hover:bg-gray-900/50">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5 text-white" data-lucide="hash"></i>
</div>
<div>
<h3 className="font-semibold text-white group-hover:text-green-400 transition-colors duration-300">Slack</h3>
<p className="text-xs text-gray-400">#product-updates</p>
</div>
</div>
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-xs text-green-400 font-medium">Live</span>
</div>
</div>
<div className="space-y-3">
<div className="flex gap-3 bg-gray-700/20 border border-gray-800 rounded-lg p-3 hover:bg-gray-700/30 hover:border-gray-700 transition-all duration-300">
<div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
<span className="text-xs font-bold text-white">M</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white mb-1">Marcus Rivera</p>
<p className="text-sm text-gray-300">🚀 Product v2.1 deployed successfully!</p>
<div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
<span>2 min ago</span>
<div className="flex items-center gap-1">
<i className="w-3 h-3 text-green-400" data-lucide="check-circle-2"></i>
<span>CI/CD Pipeline</span>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between text-xs text-gray-500 px-1">
<span className="flex items-center gap-1 hover:text-green-400 transition-colors duration-300">
<i className="w-3 h-3" data-lucide="users"></i>
<span>47 online</span>
</span>
<span className="flex items-center gap-1 hover:text-green-400 transition-colors duration-300">
<i className="w-3 h-3" data-lucide="bell"></i>
<span>3 mentions</span>
</span>
</div>
</div>
<button className="w-full mt-4 px-4 py-2.5 bg-green-600/20 hover:bg-green-600/40 border border-green-500/30 hover:border-green-500/60 text-green-400 text-sm font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
<i className="w-4 h-4" data-lucide="message-circle"></i>
              Reply in Thread
            </button>
</div>

<div className="animate-slide-up animate-delay-800 border-brand-500/30 hover:border-brand-500/60 hover-lift hover:shadow-2xl hover:shadow-brand-500/30 transition-all duration-500 text-center bg-gradient-to-t from-indigo-500/20 to-purple-600/10 hover:from-indigo-500/30 hover:to-purple-600/20 border rounded-2xl p-6 backdrop-blur-sm group">
<div className="flex gap-2 mb-6 items-center justify-start">
<div className="w-10 h-10 flex bg-gradient-to-br from-brand-500 to-purple-600 rounded-xl items-center justify-center group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5 text-white" data-lucide="trending-up"></i>
</div>
<div className="text-left">
<h3 className="font-semibold text-white group-hover:text-brand-400 transition-colors duration-300">Productivity Impact</h3>
<p className="text-xs text-gray-400">Last 30 days</p>
</div>
</div>
<div className="space-y-4">
<div>
<div className="text-4xl lg:text-5xl font-bold font-satoshi text-white mb-1 group-hover:text-brand-400 transition-colors duration-500">92%</div>
<p className="text-sm text-gray-300">Time saved on manual tasks</p>
</div>
<div className="grid grid-cols-2 gap-4 text-center">
<div className="bg-white/5 hover:bg-white/10 rounded-lg p-3 transition-all duration-300 hover:scale-105">
<div className="text-xl font-bold text-green-400">+31h</div>
<p className="text-xs text-gray-400">Weekly savings</p>
</div>
<div className="bg-white/5 hover:bg-white/10 rounded-lg p-3 transition-all duration-300 hover:scale-105">
<div className="text-xl font-bold text-blue-400">-67%</div>
<p className="text-xs text-gray-400">Context switches</p>
</div>
</div>
<div className="flex items-center justify-center gap-4 text-xs text-gray-400">
<span className="flex items-center gap-1 hover:text-yellow-400 transition-colors duration-300">
<i className="w-3 h-3 text-yellow-400" data-lucide="clock"></i>
                  Real-time tracking
                </span>
<span className="flex items-center gap-1 hover:text-red-400 transition-colors duration-300">
<i className="w-3 h-3 text-red-400" data-lucide="target"></i>
                  Goal: 95%
                </span>
</div>
</div>
</div>

<div className="animate-fade-in-right animate-delay-700 relative overflow-hidden hover-lift hover:border-green-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm bg-gray-900/30 hover:bg-gray-900/50 group">
<div className="flex items-center justify-between mb-6 relative z-40">
<div>
<h3 className="font-semibold text-white group-hover:text-green-400 transition-colors duration-300">Unified Workspace</h3>
<p className="text-xs text-gray-400">6 tools connected</p>
</div>
<div className="flex items-center gap-1">
<i className="w-4 h-4 text-green-400 group-hover:animate-pulse" data-lucide="zap"></i>
<span className="text-xs text-green-400 font-medium">Auto-sync</span>
</div>
</div>

<div className="absolute top-16 left-4 w-5/6 z-10 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 rounded-lg p-4 shadow-lg rotate-[-4deg] transition-all duration-300 hover:rotate-[-2deg] hover:scale-105">
<div className="flex items-center gap-2 text-xs font-medium text-gray-300 mb-2">
<i className="w-4 h-4 text-gray-400" data-lucide="file-text"></i>
<span>Notion</span>
</div>
<p className="text-sm font-medium text-white mb-1">Sprint Planning Template</p>
<p className="text-xs text-gray-400">Updated from Linear issues</p>
</div>

<div className="absolute top-20 right-4 w-4/5 z-20 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 rounded-lg p-4 shadow-lg rotate-[3deg] transition-all duration-300 hover:rotate-[1deg] hover:scale-105">
<div className="flex items-center gap-2 text-xs font-medium text-gray-300 mb-2">
<i className="w-4 h-4 text-orange-400" data-lucide="git-branch"></i>
<span>GitHub</span>
</div>
<p className="text-sm font-medium text-white text-left mb-1">feat/user-dashboard</p>
<div className="flex items-center gap-2 text-xs text-gray-400">
<i className="w-3 h-3 text-green-400" data-lucide="check-circle"></i>
<span>All checks passed</span>
</div>
</div>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 rotate-[1deg] w-5/6 bg-green-900/30 hover:bg-green-900/50 border border-green-700 hover:border-green-600 rounded-lg p-4 shadow-lg z-30 transition-all duration-300 hover:rotate-0 hover:scale-105">
<div className="flex items-center gap-2 text-xs font-medium text-green-300 mb-2">
<i className="w-4 h-4" data-lucide="figma"></i>
<span>Figma</span>
</div>
<p className="text-sm font-medium text-white mb-1">Mobile App Mockups v3</p>
<div className="flex items-center justify-between text-xs">
<span className="text-green-400">Ready for dev handoff</span>
<i className="w-3 h-3 text-gray-400 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>
</div>


    </>
  );
}
