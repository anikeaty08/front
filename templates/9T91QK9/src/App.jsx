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

        function selectPlan(planName) {
            alert(`You selected the ${planName.charAt(0).toUpperCase() + planName.slice(1)} plan! Redirecting to checkout...`);
            // Here you would typically redirect to your payment processor
            console.log(`Selected plan: ${planName}`);
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

<div className="text-center mb-16">
<h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Choose Your Plan
            </h1>
<p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Unlock the full potential of our platform with flexible pricing options designed for every need.
            </p>
</div>

<div className="flex flex-wrap gap-8 items-center justify-center max-w-6xl mx-auto">

<div className="glow-card w-80 backdrop-blur-sm border border-white/10 p-8 relative">
<div className="mb-6">
<h3 className="text-2xl font-semibold mb-2">Starter</h3>
<p className="text-gray-400 mb-4">Perfect for individuals getting started</p>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-bold">$9</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center">
<svg className="check-icon w-5 h-5 mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-300">5 Projects</span>
</li>
<li className="flex items-center">
<svg className="check-icon w-5 h-5 mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-300">10GB Storage</span>
</li>
<li className="flex items-center">
<svg className="check-icon w-5 h-5 mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-300">Basic Support</span>
</li>
</ul>
<button className="glow-button w-full py-3 text-white font-medium" onclick="selectPlan('starter')">
                    Get Started
                </button>
</div>

<div className="glow-card w-80 backdrop-blur-sm border border-white/10 p-8 relative transform scale-105">
<div className="popular-badge absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium text-white">
                    Most Popular
                </div>
<div className="mb-6">
<h3 className="text-2xl font-semibold mb-2">Pro</h3>
<p className="text-gray-400 mb-4">Best for growing businesses</p>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-bold">$29</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center">
<svg className="check-icon w-5 h-5 mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-300">50 Projects</span>
</li>
<li className="flex items-center">
<svg className="check-icon w-5 h-5 mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-300">100GB Storage</span>
</li>
<li className="flex items-center">
<svg className="check-icon w-5 h-5 mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-300">Priority Support</span>
</li>
<li className="flex items-center">
<svg className="check-icon w-5 h-5 mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-300">Team Collaboration</span>
</li>
</ul>
<button className="glow-button w-full py-3 text-white font-medium" onclick="selectPlan('pro')">
                    Start Pro Trial
                </button>
</div>

<div className="glow-card w-80 backdrop-blur-sm border border-white/10 p-8 relative">
<div className="mb-6">
<h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
<p className="text-gray-400 mb-4">For large organizations</p>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-bold">$99</span>
<span className="text-gray-400 ml-2">/month</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center">
<svg className="check-icon w-5 h-5 mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-300">Unlimited Projects</span>
</li>
<li className="flex items-center">
<svg className="check-icon w-5 h-5 mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-300">1TB Storage</span>
</li>
<li className="flex items-center">
<svg className="check-icon w-5 h-5 mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-300">24/7 Dedicated Support</span>
</li>
<li className="flex items-center">
<svg className="check-icon w-5 h-5 mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-300">Advanced Analytics</span>
</li>
<li className="flex items-center">
<svg className="check-icon w-5 h-5 mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-300">Custom Integration</span>
</li>
</ul>
<button className="glow-button w-full py-3 text-white font-medium" onclick="selectPlan('enterprise')">
                    Contact Sales
                </button>
</div>
</div>

<div className="text-center mt-16">
<p className="text-gray-400">
                All plans include a 14-day free trial. No credit card required.
            </p>
</div>
</div>


    </>
  );
}
