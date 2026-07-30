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
                    colors: {
                        'dark-bg': '#0D1117',
                        'dark-secondary': '#161B22',
                        'dark-accent': '#21262D',
                        'purple-accent': '#8B5CF6',
                        'green-accent': '#10B981'
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
      

<nav className="bg-dark-secondary border-b border-gray-800 px-6 py-3">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-gradient-to-r from-purple-accent to-green-accent rounded-lg flex items-center justify-center">
<span className="text-white font-bold text-sm">AI</span>
</div>
<span className="text-xl font-semibold">SiteBuilder</span>
</div>
<div className="text-sm text-gray-400">Project: Landing Page</div>
</div>
<div className="flex items-center space-x-4">
<button className="bg-dark-accent hover:bg-gray-700 px-3 py-2 rounded-lg text-sm transition-colors">
<span>🌙</span>
</button>
<button className="bg-green-accent hover:bg-green-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Save Project
                </button>
<button className="bg-purple-accent hover:bg-purple-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Export Code
                </button>
</div>
</div>
</nav>

<div className="flex h-screen">

<div className="w-1/2 bg-dark-secondary border-r border-gray-800 flex flex-col">

<div className="px-6 py-4 border-b border-gray-800">
<h2 className="text-lg font-semibold">AI Assistant</h2>
<p className="text-sm text-gray-400">Describe your website idea and I'll build it for you</p>
</div>

<div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-purple-accent rounded-full flex items-center justify-center flex-shrink-0">
<span className="text-xs">🤖</span>
</div>
<div className="bg-dark-accent rounded-lg p-3 max-w-md">
<p className="text-sm">Hi! I'm your AI web developer. Tell me what kind of website you'd like to create and I'll build it in real-time!</p>
</div>
</div>
<div className="flex items-start space-x-3 justify-end">
<div className="bg-purple-accent rounded-lg p-3 max-w-md">
<p className="text-sm">I need a modern landing page for a SaaS product with a hero section, features, and pricing</p>
</div>
<div className="w-8 h-8 bg-green-accent rounded-full flex items-center justify-center flex-shrink-0">
<span className="text-xs">👤</span>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-purple-accent rounded-full flex items-center justify-center flex-shrink-0">
<span className="text-xs">🤖</span>
</div>
<div className="bg-dark-accent rounded-lg p-3 max-w-md">
<p className="text-sm">Perfect! I'm creating a modern SaaS landing page for you. Check the preview on the right - I've added a hero section with gradient background, feature cards, and a pricing table. What do you think?</p>
<div className="mt-2 flex flex-wrap gap-2">
<span className="bg-purple-accent/20 text-purple-300 px-2 py-1 rounded text-xs">Hero Section</span>
<span className="bg-green-accent/20 text-green-300 px-2 py-1 rounded text-xs">Features</span>
<span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">Pricing</span>
</div>
</div>
</div>
</div>

<div className="px-6 py-4 border-t border-gray-800">
<div className="flex items-center space-x-3">
<input className="flex-1 bg-dark-accent border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-accent transition-colors" placeholder="Describe changes or new features..." type="text" />
<button className="bg-purple-accent hover:bg-purple-600 p-3 rounded-lg transition-colors">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="w-1/2 bg-dark-bg flex flex-col">

<div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
<div className="flex items-center space-x-4">
<h2 className="text-lg font-semibold">Live Preview</h2>
<div className="flex items-center space-x-2">
<button className="bg-dark-accent hover:bg-gray-700 p-2 rounded text-xs transition-colors">Desktop</button>
<button className="bg-dark-secondary hover:bg-gray-700 p-2 rounded text-xs transition-colors">Mobile</button>
</div>
</div>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-red-500 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
</div>
</div>

<div className="flex-1 overflow-auto bg-white">
<div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-8 text-center">
<h1 className="text-5xl font-bold mb-4">Build Amazing Products</h1>
<p className="text-xl mb-8 opacity-90">The ultimate SaaS solution for modern businesses</p>
<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Get Started
                    </button>
</div>
<div className="py-16 px-8">
<h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Features</h2>
<div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
<div className="text-center">
<div className="w-16 h-16 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
<span className="text-2xl">⚡</span>
</div>
<h3 className="font-semibold mb-2 text-gray-800">Fast Performance</h3>
<p className="text-gray-600 text-sm">Lightning-fast processing for all your needs</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
<span className="text-2xl">🔒</span>
</div>
<h3 className="font-semibold mb-2 text-gray-800">Secure</h3>
<p className="text-gray-600 text-sm">Enterprise-grade security you can trust</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
<span className="text-2xl">📊</span>
</div>
<h3 className="font-semibold mb-2 text-gray-800">Analytics</h3>
<p className="text-gray-600 text-sm">Detailed insights and reporting</p>
</div>
</div>
</div>
<div className="bg-gray-50 py-16 px-8">
<h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Pricing</h2>
<div className="flex justify-center space-x-8 max-w-4xl mx-auto">
<div className="bg-white rounded-lg p-8 shadow-lg flex-1 max-w-sm">
<h3 className="text-xl font-semibold mb-4 text-gray-800">Starter</h3>
<div className="text-3xl font-bold mb-4 text-gray-800">$9<span className="text-lg text-gray-600">/mo</span></div>
<button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                                Choose Plan
                            </button>
</div>
<div className="bg-white rounded-lg p-8 shadow-lg flex-1 max-w-sm border-2 border-purple-600">
<h3 className="text-xl font-semibold mb-4 text-gray-800">Pro</h3>
<div className="text-3xl font-bold mb-4 text-gray-800">$29<span className="text-lg text-gray-600">/mo</span></div>
<button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                                Choose Plan
                            </button>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
