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



        const syncPointer = ({ x: pointerX, y: pointerY }) => {
            const x = pointerX.toFixed(2);
            const y = pointerY.toFixed(2);
            const xp = (pointerX / window.innerWidth).toFixed(2);
            const yp = (pointerY / window.innerHeight).toFixed(2);
            
            document.documentElement.style.setProperty('--x', x);
            document.documentElement.style.setProperty('--xp', xp);
            document.documentElement.style.setProperty('--y', y);
            document.documentElement.style.setProperty('--yp', yp);
        };

        function startTrial() {
            alert('Starting your free trial! Redirecting to sign up...');
            console.log('Free trial started');
        }

        document.body.addEventListener('pointermove', syncPointer);
    
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
      
<div className="container mx-auto px-4 py-16">

<div className="text-center mb-20">
<h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Powerful Features
            </h1>
<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Discover the cutting-edge tools and capabilities that make our platform the perfect choice for modern businesses and creative professionals.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

<div className="glow-card backdrop-blur-sm border border-white/10 p-8 floating-animation group">
<div className="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
<svg className="w-8 h-8" fill="currentColor" viewbox="0 0 24 24">
<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm5-18v4h3V3h-3z"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4 text-center group-hover:text-white transition-colors">AI-Powered Analytics</h3>
<p className="text-gray-400 text-center leading-relaxed">
                    Get deep insights with machine learning algorithms that analyze your data patterns and provide actionable recommendations in real-time.
                </p>
</div>

<div className="glow-card backdrop-blur-sm border border-white/10 p-8 floating-animation group">
<div className="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
<svg className="w-8 h-8" fill="currentColor" viewbox="0 0 24 24">
<path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7H17c-.8 0-1.5.7-1.5 1.5v3.5H14v-3.5C14 7.7 13.3 7 12.5 7H11c-.63 0-1.16.38-1.41.93L7.05 14.5H9.5v6H4v-6h2.95l2.55-6.52A3.5 3.5 0 0 1 11 6h1.5c.85 0 1.6.36 2.14.93.54-.57 1.29-.93 2.14-.93H18c1.38 0 2.54.94 2.86 2.26L23.5 16H20v6h-4z"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4 text-center group-hover:text-white transition-colors">Real-Time Collaboration</h3>
<p className="text-gray-400 text-center leading-relaxed">
                    Work seamlessly with your team across the globe. Share, edit, and collaborate on projects with instant synchronization and conflict resolution.
                </p>
</div>

<div className="glow-card backdrop-blur-sm border border-white/10 p-8 floating-animation group">
<div className="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
<svg className="w-8 h-8" fill="currentColor" viewbox="0 0 24 24">
<path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V18H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4 text-center group-hover:text-white transition-colors">Advanced Security</h3>
<p className="text-gray-400 text-center leading-relaxed">
                    Enterprise-grade security with end-to-end encryption, multi-factor authentication, and compliance with industry standards like SOC 2 and GDPR.
                </p>
</div>

<div className="glow-card backdrop-blur-sm border border-white/10 p-8 floating-animation group">
<div className="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
<svg className="w-8 h-8" fill="currentColor" viewbox="0 0 24 24">
<path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4 text-center group-hover:text-white transition-colors">Cloud Infrastructure</h3>
<p className="text-gray-400 text-center leading-relaxed">
                    Scale effortlessly with our global cloud infrastructure. 99.9% uptime guaranteed with automatic backups and disaster recovery built-in.
                </p>
</div>

<div className="glow-card backdrop-blur-sm border border-white/10 p-8 floating-animation group">
<div className="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
<svg className="w-8 h-8" fill="currentColor" viewbox="0 0 24 24">
<path d="M7.07 8.5l2.43 2.43-2.43 2.43L8.5 14.79l3.86-3.86L8.5 7.07 7.07 8.5zm6.36 6.36l2.43-2.43-2.43-2.43L14.86 8.5l3.86 3.86-3.86 3.86-1.43-1.43zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4 text-center group-hover:text-white transition-colors">API Integration</h3>
<p className="text-gray-400 text-center leading-relaxed">
                    Connect with over 1000+ apps and services through our robust REST API. Build custom integrations with comprehensive documentation and SDKs.
                </p>
</div>

<div className="glow-card backdrop-blur-sm border border-white/10 p-8 floating-animation group">
<div className="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
<svg className="w-8 h-8" fill="currentColor" viewbox="0 0 24 24">
<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4 text-center group-hover:text-white transition-colors">Smart Automation</h3>
<p className="text-gray-400 text-center leading-relaxed">
                    Automate repetitive tasks with intelligent workflows. Set triggers, conditions, and actions to streamline your business processes effortlessly.
                </p>
</div>
</div>

<div className="text-center mt-20">
<p className="text-lg text-gray-300 mb-8">
                Ready to experience these powerful features?
            </p>
<button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" onclick="startTrial()">
                Start Free Trial
            </button>
</div>
</div>


    </>
  );
}
