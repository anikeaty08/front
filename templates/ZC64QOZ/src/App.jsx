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
      <iframe className="fixed w-full h-screen" frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/nexbotrobotcharacterconcept-kLwr8f6hgKgaa5gmU6oB00Si" width="100%"></iframe>

<nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/80 backdrop-blur-xl border-b border-stone-700/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center space-x-3 opacity-0 animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
<div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-cpu w-4 h-4 text-white" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<span className="text-lg font-semibold tracking-tight font-sans">Neural Robotics</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
<a className="text-stone-400 hover:text-stone-100 transition-colors font-sans" href="#">Products</a>
<a className="text-stone-400 hover:text-stone-100 transition-colors font-sans" href="#">Technology</a>
<a className="text-stone-400 hover:text-stone-100 transition-colors font-sans" href="#">Contact</a>
</div>
</div>
</div>
</nav>
<main className="relative z-10 min-h-screen flex pt-16 px-6 items-center justify-center">
<div className="max-w-7xl w-full mx-auto px-8 py-8">
<div className="flex flex-col lg:flex-row gap-12 items-center justify-between">

<div className="flex-1 max-w-xl lg:pr-8">
<div className="flex items-center space-x-2 mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
<div className="w-2 h-2 bg-red-400 rounded-full robot-pulse"></div>
<p className="text-sm uppercase tracking-widest text-stone-400 font-medium font-sans">Neural Robotics • Est. 2021 • 15K+ Robots Deployed</p>
</div>
<div className="mb-8 opacity-0 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
<h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-4">
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-stone-100 to-stone-300 font-manrope font-light" style={{}}>
                Next-Generation
              </span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 font-manrope font-light" style={{}}>
                AI Robotics
              </span>
</h1>
<p className="text-lg text-stone-300 leading-relaxed font-sans">
              Revolutionizing automation with intelligent robots powered by advanced neural networks and computer vision
            </p>
</div>

<div className="space-y-4 text-sm text-stone-400 opacity-0 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-orange-400 rounded-full"></div>
<span className="font-sans">Advanced computer vision &amp; object recognition</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-pink-400 rounded-full"></div>
<span className="font-sans">Real-time decision making with neural networks</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-orange-400 rounded-full"></div>
<span className="font-sans">Seamless human-robot collaboration</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-red-400 rounded-full"></div>
<span className="font-sans">99.7% operational uptime guarantee</span>
</div>
</div>
</div>

<div className="flex flex-col space-y-8 items-center">
<section className="card-1-active" id="cards-container" style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}>

<article className="relative h-[36rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-eye w-5 h-5 text-cyan-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-xs font-medium text-stone-400 uppercase tracking-wider font-sans">Computer Vision</span>
</div>
<span className="text-sm font-bold text-red-400 font-sans">Active</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<svg className="lucide lucide-scan-line w-12 h-12 text-white" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
</div>
<h3 className="text-3xl tracking-tight mb-2 font-manrope font-light" style={{}}>VisionBot Pro</h3>
<p className="text-sm text-stone-400 mb-8 font-sans">Advanced Visual Recognition System</p>
<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-stone-400 font-sans">Recognition Accuracy</span>
<span className="font-semibold font-sans">99.2%</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-stone-400 font-sans">Processing Speed</span>
<span className="font-semibold text-orange-400 font-sans">240 FPS</span>
</div>
<div className="w-full bg-stone-700 rounded-full h-2">
<div className="bg-gradient-to-r from-orange-500 to-pink-600 h-2 rounded-full transition-all duration-500" style={{width: '99%'}}></div>
</div>
<div className="text-xs text-stone-500 space-y-2">
<div className="font-sans">• Object detection &amp; classification</div>
<div className="font-sans">• Real-time depth mapping</div>
<div className="font-sans">• Facial recognition capabilities</div>
</div>
</div>
</div>
<button className="w-full py-3 px-4 glass rounded-xl text-stone-100 hover:bg-stone-700/50 transition-all duration-300 font-medium font-sans">
                  View Specifications
                </button>
</div>
</article>

<article className="relative h-[36rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-wrench w-5 h-5 text-orange-400" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
<span className="text-xs font-medium text-stone-400 uppercase tracking-wider font-sans">Manufacturing</span>
</div>
<span className="text-sm font-bold text-red-400 font-sans">Active</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<svg className="lucide lucide-settings w-12 h-12 text-white" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-3xl tracking-tight mb-2 font-manrope font-light" style={{}}>AssemblyBot X7</h3>
<p className="text-sm text-stone-400 mb-8 font-sans">Precision Manufacturing Assistant</p>
<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-stone-400 font-sans">Assembly Precision</span>
<span className="font-semibold font-sans">±0.1mm</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-stone-400 font-sans">Production Rate</span>
<span className="font-semibold text-orange-400 font-sans">2400/hr</span>
</div>
<div className="w-full bg-stone-700 rounded-full h-2">
<div className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full transition-all duration-500" style={{width: '96%'}}></div>
</div>
<div className="text-xs text-stone-500 space-y-2">
<div className="font-sans">• 6-axis articulated arm</div>
<div className="font-sans">• Force-sensitive feedback</div>
<div className="font-sans">• Quality control integration</div>
</div>
</div>
</div>
<button className="w-full py-3 px-4 glass rounded-xl text-stone-100 hover:bg-stone-700/50 transition-all duration-300 font-medium font-sans">
                  Production Demo
                </button>
</div>
</article>

<article className="relative h-[36rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-navigation w-5 h-5 text-green-400" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
<span className="text-xs font-medium text-stone-400 uppercase tracking-wider font-sans">Autonomous</span>
</div>
<span className="text-sm font-bold text-red-400 font-sans">Active</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-24 h-24 bg-gradient-to-br from-red-500 to-stone-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<svg className="lucide lucide-map w-12 h-12 text-white" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<h3 className="text-3xl tracking-tight mb-2 font-manrope font-light" style={{}}>NaviBot Elite</h3>
<p className="text-sm text-stone-400 mb-8 font-sans">Autonomous Navigation System</p>
<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-stone-400 font-sans">Navigation Accuracy</span>
<span className="font-semibold font-sans">±2cm</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-stone-400 font-sans">Max Speed</span>
<span className="font-semibold text-red-400 font-sans">3.5 m/s</span>
</div>
<div className="w-full bg-stone-700 rounded-full h-2">
<div className="bg-gradient-to-r from-red-500 to-stone-600 h-2 rounded-full transition-all duration-500" style={{width: '94%'}}></div>
</div>
<div className="text-xs text-stone-500 space-y-2">
<div className="font-sans">• LIDAR-based mapping</div>
<div className="font-sans">• Dynamic obstacle avoidance</div>
<div className="font-sans">• Multi-floor navigation</div>
</div>
</div>
</div>
<button className="w-full py-3 px-4 glass rounded-xl text-stone-100 hover:bg-stone-700/50 transition-all duration-300 font-medium font-sans">
                  Path Planning Demo
                </button>
</div>
</article>

<article className="relative h-[36rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-users w-5 h-5 text-purple-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-xs font-medium text-stone-400 uppercase tracking-wider font-sans">Collaborative</span>
</div>
<span className="text-sm font-bold text-red-400 font-sans">Active</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<svg className="lucide lucide-handshake w-12 h-12 text-white" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
</div>
<h3 className="text-3xl tracking-tight mb-2 font-manrope font-light" style={{}}>CoBot Partner</h3>
<p className="text-sm text-stone-400 mb-8 font-sans">Human-Robot Collaboration</p>
<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-stone-400 font-sans">Safety Rating</span>
<span className="font-semibold font-sans">ISO 10218</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-stone-400 font-sans">Response Time</span>
<span className="font-semibold text-orange-400 font-sans">12ms</span>
</div>
<div className="w-full bg-stone-700 rounded-full h-2">
<div className="bg-gradient-to-r from-orange-500 to-pink-600 h-2 rounded-full transition-all duration-500" style={{width: '98%'}}></div>
</div>
<div className="text-xs text-stone-500 space-y-2">
<div className="font-sans">• Natural language processing</div>
<div className="font-sans">• Gesture recognition</div>
<div className="font-sans">• Adaptive learning algorithms</div>
</div>
</div>
</div>
<button className="w-full py-3 px-4 glass rounded-xl text-stone-100 hover:bg-stone-700/50 transition-all duration-300 font-medium font-sans">
                  Interaction Demo
                </button>
</div>
</article>
</section>

<div className="flex space-x-3 opacity-0 animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
<button className="w-2 h-2 rounded-full bg-orange-400 transition-all duration-300 scale-125" id="dot-1"></button>
<button className="w-2 h-2 rounded-full bg-stone-500 hover:bg-stone-400 transition-all duration-300" id="dot-2"></button>
<button className="w-2 h-2 rounded-full bg-stone-500 hover:bg-stone-400 transition-all duration-300" id="dot-3"></button>
<button className="w-2 h-2 rounded-full bg-stone-500 hover:bg-stone-400 transition-all duration-300" id="dot-4"></button>
</div>
</div>
</div>

<div className="opacity-0 animate-fade-in text-center mt-16" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}>
<div className="space-y-6">
<h2 className="text-2xl text-stone-100 font-manrope font-light" style={{}}>Ready to Transform Your Operations?</h2>
<p className="text-stone-300 max-w-2xl mx-auto font-sans">
            Experience the future of automation with our AI-powered robotics solutions. 
            Join leading companies who have already revolutionized their workflows.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl text-white font-medium hover:from-orange-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl font-sans">
              Schedule Demo
            </button>
<button className="px-8 py-3 glass rounded-xl text-stone-100 hover:bg-stone-700/50 transition-all duration-300 font-medium font-sans">
              Download Specs
            </button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
