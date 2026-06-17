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
            theme: {
                extend: {
                    fontFamily: {
                        'manrope': ['Manrope', 'sans-serif'],
                        'inter': ['Inter', 'sans-serif'],
                        'satoshi': ['Satoshi', 'sans-serif']
                    },
                    animation: {
                        'fade-in-up': 'fadeInUp 1s ease-out',
                        'fade-in-delay': 'fadeInUp 1s ease-out 0.3s both',
                        'fade-in-delay-2': 'fadeInUp 1s ease-out 0.6s both',
                        'progress-fill': 'progressFill 1.2s ease-out',
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        fadeInUp: {
                            '0%': { opacity: 0, transform: 'translateY(30px)' },
                            '100%': { opacity: 1, transform: 'translateY(0)' }
                        },
                        progressFill: {
                            '0%': { width: '0%' },
                            '100%': { width: '33.33%' }
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' }
                        }
                    }
                }
            }
        }
    
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
      

<nav className="fixed top-0 left-0 right-0 z-20 p-6 lg:px-16 xl:px-24 2xl:px-32">
<div className="max-w-8xl mx-auto">
<div className="glass rounded-2xl border border-white/10 px-6 py-4 inner-glow">
<div className="flex items-center justify-between">
<div className="flex items-center">
<span className="text-white font-manrope font-bold text-xl tracking-wider">ZORA</span>
</div>
<div className="flex items-center space-x-4">
<span className="hidden sm:block text-white/60 text-sm font-inter">Need help?</span>
<a className="text-white/80 hover:text-white transition-colors text-sm font-inter" href="#">Support</a>
</div>
</div>
</div>
</div>
</nav>

<div className="relative z-10 min-h-screen pt-32 pb-16 px-6 lg:px-16 xl:px-24 2xl:px-32">
<div className="max-w-8xl mx-auto">

<div className="mb-16 animate-fade-in-up">
<div className="glass rounded-3xl border border-white/10 p-8 xl:p-10 inner-glow">
<div className="flex items-center justify-between mb-6">
<h2 className="text-white font-manrope font-semibold text-xl xl:text-2xl">Getting Started</h2>
<span className="text-white/60 text-sm xl:text-base font-inter">Step 1 of 3</span>
</div>
<div className="w-full bg-white/10 rounded-full h-3">
<div className="bg-gradient-to-r from-indigo-600 to-blue-600 h-3 rounded-full animate-progress-fill" style={{width: '33.33%'}}></div>
</div>
<div className="flex justify-between mt-4 text-sm font-inter">
<span className="text-white/90 font-medium">Setup</span>
<span className="text-white/40">Connect</span>
<span className="text-white/40">Configure</span>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

<div className="space-y-8 animate-fade-in-delay">
<div className="space-y-6">
<h1 className="text-[48px] sm:text-[56px] lg:text-[64px] xl:text-[72px] font-normal font-satoshi text-white leading-none tracking-tight">
<span className="text-white">Welcome to</span><br/>
<span className="schema-gradient">ZORA</span>
</h1>
<p className="text-base lg:text-lg xl:text-xl text-white/70 leading-relaxed max-w-xl font-inter">
                            Let's set up your database management workspace. This will only take a few minutes.
                        </p>
</div>

<div className="relative">
<div className="relative glass rounded-3xl border border-white/10 backdrop-blur-3xl p-8 xl:p-10 inner-glow">
<h3 className="text-xl xl:text-2xl font-manrope font-semibold text-white mb-8">Create Your Workspace</h3>
<div className="space-y-6">
<div>
<label className="block text-sm xl:text-base font-medium text-white/80 mb-3 font-inter">Workspace Name</label>
<input className="input-field w-full px-6 py-4 glass rounded-xl border border-white/20 text-white placeholder-white/40 transition-all duration-300 font-inter text-base" placeholder="My Company Database" type="text"/>
</div>
<div>
<label className="block text-sm xl:text-base font-medium text-white/80 mb-3 font-inter">Your Role</label>
<select className="input-field w-full px-6 py-4 glass rounded-xl border border-white/20 text-white transition-all duration-300 font-inter text-base">
<option className="bg-gray-900" value="">Select your role</option>
<option className="bg-gray-900" value="developer">Developer</option>
<option className="bg-gray-900" value="dba">Database Administrator</option>
<option className="bg-gray-900" value="architect">Data Architect</option>
<option className="bg-gray-900" value="analyst">Data Analyst</option>
<option className="bg-gray-900" value="other">Other</option>
</select>
</div>
<div>
<label className="block text-sm xl:text-base font-medium text-white/80 mb-3 font-inter">Team Size</label>
<div className="grid grid-cols-2 gap-4">
<button className="px-6 py-4 glass rounded-xl border border-white/20 text-white/80 hover:text-white hover:border-indigo-400/60 transition-all duration-300 font-inter text-base font-medium">1-10</button>
<button className="px-6 py-4 glass rounded-xl border border-white/20 text-white/80 hover:text-white hover:border-indigo-400/60 transition-all duration-300 font-inter text-base font-medium">11-50</button>
<button className="px-6 py-4 glass rounded-xl border border-white/20 text-white/80 hover:text-white hover:border-indigo-400/60 transition-all duration-300 font-inter text-base font-medium">51-200</button>
<button className="px-6 py-4 glass rounded-xl border border-white/20 text-white/80 hover:text-white hover:border-indigo-400/60 transition-all duration-300 font-inter text-base font-medium">200+</button>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-8">
<a className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-base font-inter" href="#">
                                    Continue
                                </a>
<a className="px-8 py-4 gradient-stroke text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-base font-inter" href="#">
                                    Skip for now
                                </a>
</div>
</div>
</div>
</div>

<div className="space-y-8 animate-fade-in-delay-2">

<div className="glass rounded-3xl border border-white/10 p-8 xl:p-10 inner-glow">
<h3 className="text-xl xl:text-2xl font-manrope font-semibold text-white mb-8">What's Next</h3>

<div className="space-y-6">
<div className="step-card glass rounded-2xl gradient-border p-6 xl:p-8 inner-glow animate-float">
<div className="flex items-start space-x-4">
<div className="flex-shrink-0 w-10 h-10 xl:w-12 xl:h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-base xl:text-lg">1</div>
<div>
<h4 className="text-white font-semibold mb-2 font-inter text-base xl:text-lg">Setup Workspace</h4>
<p className="text-white/60 text-sm xl:text-base font-inter leading-relaxed">Configure your workspace settings and team information.</p>
</div>
</div>
</div>
<div className="step-card glass rounded-2xl border border-white/20 p-6 xl:p-8 inner-glow">
<div className="flex items-start space-x-4">
<div className="flex-shrink-0 w-10 h-10 xl:w-12 xl:h-12 bg-white/20 rounded-xl flex items-center justify-center text-white/60 font-bold text-base xl:text-lg">2</div>
<div>
<h4 className="text-white/60 font-semibold mb-2 font-inter text-base xl:text-lg">Connect Database</h4>
<p className="text-white/40 text-sm xl:text-base font-inter leading-relaxed">Link your existing databases or create new connections.</p>
</div>
</div>
</div>
<div className="step-card glass rounded-2xl border border-white/20 p-6 xl:p-8 inner-glow">
<div className="flex items-start space-x-4">
<div className="flex-shrink-0 w-10 h-10 xl:w-12 xl:h-12 bg-white/20 rounded-xl flex items-center justify-center text-white/60 font-bold text-base xl:text-lg">3</div>
<div>
<h4 className="text-white/60 font-semibold mb-2 font-inter text-base xl:text-lg">Configure Settings</h4>
<p className="text-white/40 text-sm xl:text-base font-inter leading-relaxed">Set up your preferences and start managing schemas.</p>
</div>
</div>
</div>
</div>
</div>

<div className="glass rounded-3xl border border-white/10 p-8 xl:p-10 inner-glow">
<h4 className="text-xl xl:text-2xl font-manrope font-semibold text-white mb-8">You'll get access to:</h4>
<div className="space-y-6">
<div className="flex items-center space-x-4">
<div className="w-4 h-4 bg-green-400 rounded-full flex-shrink-0 animate-pulse"></div>
<span className="text-white/70 text-base font-inter">Real-time schema visualization</span>
</div>
<div className="flex items-center space-x-4">
<div className="w-4 h-4 bg-blue-400 rounded-full flex-shrink-0 animate-pulse" style={{animationDelay: '0.2s'}}></div>
<span className="text-white/70 text-base font-inter">AI-powered migration suggestions</span>
</div>
<div className="flex items-center space-x-4">
<div className="w-4 h-4 bg-purple-400 rounded-full flex-shrink-0 animate-pulse" style={{animationDelay: '0.4s'}}></div>
<span className="text-white/70 text-base font-inter">Team collaboration tools</span>
</div>
<div className="flex items-center space-x-4">
<div className="w-4 h-4 bg-orange-400 rounded-full flex-shrink-0 animate-pulse" style={{animationDelay: '0.6s'}}></div>
<span className="text-white/70 text-base font-inter">Advanced analytics dashboard</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
