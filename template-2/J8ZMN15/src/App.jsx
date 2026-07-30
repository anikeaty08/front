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



        particlesJS('particles-js', {
            particles: {
                number: { value: 120, density: { enable: true, value_area: 800 } },
                color: { value: "#d4d4d8" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#a1a1aa", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
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
      

<nav className="bg-white border-b border-neutral-200 px-6 py-4">
<div className="max-w-6xl mx-auto flex items-center justify-between">
<div className="flex items-center">
<span className="px-3 py-1 bg-neutral-700 rounded-full text-xs text-white">NETWORK</span>
<span className="heading-font text-xl text-neutral-800 ml-3">Community</span>
</div>
<div className="flex items-center space-x-6">
<a className="text-sm text-neutral-600 hover:text-neutral-800" href="#">Features</a>
<a className="text-sm text-neutral-600 hover:text-neutral-800" href="#">Pricing</a>
<a className="text-sm text-neutral-600 hover:text-neutral-800" href="#">About</a>
<a className="text-sm text-neutral-600 hover:text-neutral-800" href="#">Contact</a>
<button className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg text-sm transition">Join Now</button>
</div>
</div>
</nav>

<section className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 py-20" id="particles-container">
<div id="particles-js"></div>
<div className="relative z-10 max-w-6xl mx-auto text-center px-4">
<span className="px-4 py-2 bg-neutral-700/80 rounded-full text-sm text-neutral-300 mb-6 inline-block">POWERFUL FEATURES</span>
<h1 className="heading-font text-5xl lg:text-6xl text-white mb-6 leading-tight">Everything You Need<br />To Network Better</h1>
<p className="text-neutral-300 text-xl mb-8 max-w-2xl mx-auto">Discover the tools and features that make professional networking effortless, meaningful, and results-driven.</p>
<div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg px-6 py-4 inline-block border border-neutral-700">
<div className="text-sm text-neutral-400 mb-1">Features Available</div>
<div className="heading-font text-3xl text-neutral-200">25+</div>
</div>
</div>
</section>

<section className="py-20 px-4">
<div className="max-w-6xl mx-auto">

<div className="grid md:grid-cols-3 gap-8 mb-16">

<div className="feature-card bg-white rounded-2xl p-8 beautiful-shadow border border-neutral-200 hover:scale-105 transition-transform duration-300">
<div className="feature-icon w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
<svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="heading-font text-2xl text-neutral-800 mb-4">Smart Connections</h3>
<p className="text-neutral-600 mb-6">AI-powered matching algorithm connects you with professionals who share your interests, goals, and industry focus.</p>
<ul className="space-y-2 text-sm text-neutral-500">
<li>• Intelligent matching system</li>
<li>• Industry-based suggestions</li>
<li>• Mutual interest detection</li>
</ul>
</div>

<div className="feature-card bg-white rounded-2xl p-8 beautiful-shadow border border-neutral-200 hover:scale-105 transition-transform duration-300">
<div className="feature-icon w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
<svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="heading-font text-2xl text-neutral-800 mb-4">Advanced Messaging</h3>
<p className="text-neutral-600 mb-6">Rich messaging experience with video calls, file sharing, and conversation templates for professional interactions.</p>
<ul className="space-y-2 text-sm text-neutral-500">
<li>• HD video conferencing</li>
<li>• File & document sharing</li>
<li>• Message templates</li>
</ul>
</div>

<div className="feature-card bg-white rounded-2xl p-8 beautiful-shadow border border-neutral-200 hover:scale-105 transition-transform duration-300">
<div className="feature-icon w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
<svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="heading-font text-2xl text-neutral-800 mb-4">Analytics Dashboard</h3>
<p className="text-neutral-600 mb-6">Track your networking performance with detailed insights on connections, engagement, and growth opportunities.</p>
<ul className="space-y-2 text-sm text-neutral-500">
<li>• Connection growth tracking</li>
<li>• Engagement metrics</li>
<li>• Industry insights</li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
<div className="bg-white rounded-xl p-6 beautiful-shadow border border-neutral-200">
<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15 17h5l-5 5v-5zM21 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h4 className="heading-font text-lg text-neutral-800 mb-2">Event Discovery</h4>
<p className="text-neutral-600 text-sm">Find and join networking events in your area or industry.</p>
</div>
<div className="bg-white rounded-xl p-6 beautiful-shadow border border-neutral-200">
<div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h4 className="heading-font text-lg text-neutral-800 mb-2">Privacy Controls</h4>
<p className="text-neutral-600 text-sm">Advanced privacy settings to control your visibility and data.</p>
</div>
<div className="bg-white rounded-xl p-6 beautiful-shadow border border-neutral-200">
<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h4 className="heading-font text-lg text-neutral-800 mb-2">Quick Actions</h4>
<p className="text-neutral-600 text-sm">Streamlined workflows for common networking tasks.</p>
</div>
<div className="bg-white rounded-xl p-6 beautiful-shadow border border-neutral-200">
<div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h4 className="heading-font text-lg text-neutral-800 mb-2">Global Reach</h4>
<p className="text-neutral-600 text-sm">Connect with professionals across 190+ countries worldwide.</p>
</div>
</div>

<div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 text-center text-white mb-16">
<h2 className="heading-font text-4xl mb-6">AI-Powered Recommendations</h2>
<p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">Our advanced machine learning algorithms analyze your profile, interests, and networking patterns to suggest the most relevant connections and opportunities.</p>
<div className="grid md:grid-cols-3 gap-8">
<div className="text-center">
<div className="text-3xl heading-font mb-2">89%</div>
<div className="text-green-100">Match Accuracy</div>
</div>
<div className="text-center">
<div className="text-3xl heading-font mb-2">2.3x</div>
<div className="text-green-100">Faster Connections</div>
</div>
<div className="text-center">
<div className="text-3xl heading-font mb-2">94%</div>
<div className="text-green-100">User Satisfaction</div>
</div>
</div>
</div>

<div className="text-center mb-16">
<h2 className="heading-font text-4xl text-neutral-800 mb-6">Seamless Integrations</h2>
<p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto">Connect with the tools you already use to streamline your workflow and maximize productivity.</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
<div className="flex items-center justify-center p-6 bg-white rounded-xl beautiful-shadow border border-neutral-200">
<span className="text-lg font-medium text-neutral-700">Slack</span>
</div>
<div className="flex items-center justify-center p-6 bg-white rounded-xl beautiful-shadow border border-neutral-200">
<span className="text-lg font-medium text-neutral-700">Teams</span>
</div>
<div className="flex items-center justify-center p-6 bg-white rounded-xl beautiful-shadow border border-neutral-200">
<span className="text-lg font-medium text-neutral-700">Zoom</span>
</div>
<div className="flex items-center justify-center p-6 bg-white rounded-xl beautiful-shadow border border-neutral-200">
<span className="text-lg font-medium text-neutral-700">Calendar</span>
</div>
<div className="flex items-center justify-center p-6 bg-white rounded-xl beautiful-shadow border border-neutral-200">
<span className="text-lg font-medium text-neutral-700">LinkedIn</span>
</div>
<div className="flex items-center justify-center p-6 bg-white rounded-xl beautiful-shadow border border-neutral-200">
<span className="text-lg font-medium text-neutral-700">Salesforce</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200">
<div className="max-w-6xl mx-auto px-4 py-16">

<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">

<div className="lg:col-span-2">
<div className="flex items-center mb-6">
<span className="px-3 py-1 bg-neutral-700 rounded-full text-xs text-white">NETWORK</span>
<span className="heading-font text-xl text-neutral-800 ml-3">Community</span>
</div>
<p className="text-neutral-600 mb-6 leading-relaxed">Building the future of professional networking. Connect, collaborate, and grow with thousands of professionals worldwide.</p>
</div>

<div>
<h3 className="heading-font text-neutral-800 mb-4">Product</h3>
<ul className="space-y-3">
<li><a className="text-neutral-600 hover:text-green-500 transition-colors" href="#">Features</a></li>
<li><a className="text-neutral-600 hover:text-green-500 transition-colors" href="#">Pricing</a></li>
<li><a className="text-neutral-600 hover:text-green-500 transition-colors" href="#">Mobile App</a></li>
</ul>
</div>
<div>
<h3 className="heading-font text-neutral-800 mb-4">Company</h3>
<ul className="space-y-3">
<li><a className="text-neutral-600 hover:text-green-500 transition-colors" href="#">About Us</a></li>
<li><a className="text-neutral-600 hover:text-green-500 transition-colors" href="#">Careers</a></li>
<li><a className="text-neutral-600 hover:text-green-500 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h3 className="heading-font text-neutral-800 mb-4">Support</h3>
<ul className="space-y-3">
<li><a className="text-neutral-600 hover:text-green-500 transition-colors" href="#">Help Center</a></li>
<li><a className="text-neutral-600 hover:text-green-500 transition-colors" href="#">Contact Us</a></li>
<li><a className="text-neutral-600 hover:text-green-500 transition-colors" href="#">Community</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200">
<div className="text-neutral-500 text-sm mb-4 md:mb-0">© 2024 Community Network. All rights reserved.</div>
<div className="flex space-x-6 text-sm">
<a className="text-neutral-500 hover:text-green-500 transition-colors" href="#">Privacy Policy</a>
<a className="text-neutral-500 hover:text-green-500 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
