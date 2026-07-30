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



        document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
            const tabIndicator = document.querySelector('.tab-indicator');
            
            // Set initial indicator position and width
            const activeTab = document.querySelector('.tab-btn');
            setIndicator(activeTab);
            
            // Add click event listeners to tab buttons
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons and contents
                    tabButtons.forEach(btn => {
                        btn.classList.remove('text-blue-400');
                        btn.classList.add('text-slate-400');
                    });
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                    });
                    
                    // Add active class to clicked button and corresponding content
                    this.classList.add('text-blue-400');
                    this.classList.remove('text-slate-400');
                    
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(`${tabId}-content`).classList.add('active');
                    
                    // Update indicator position
                    setIndicator(this);
                });
            });
            
            // Function to set indicator position and width
            function setIndicator(element) {
                const width = element.offsetWidth;
                const left = element.offsetLeft;
                
                tabIndicator.style.width = `${width}px`;
                tabIndicator.style.left = `${left}px`;
            }
            
            // Update indicator position on window resize
            window.addEventListener('resize', function() {
                const activeTab = document.querySelector('.tab-btn.text-blue-400');
                setIndicator(activeTab);
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
      
<div className="max-w-md w-full">

<div className="mb-6">
<div className="tab-menu flex border-b border-slate-800">
<button className="tab-btn px-4 py-3 text-blue-400 font-medium flex-1 text-center relative" data-tab="signup">Sign Up</button>
<button className="tab-btn px-4 py-3 text-slate-400 font-medium flex-1 text-center relative" data-tab="features">Features</button>
<button className="tab-btn px-4 py-3 text-slate-400 font-medium flex-1 text-center relative" data-tab="pricing">Pricing</button>
<div className="tab-indicator"></div>
</div>
</div>

<div className="tab-content active" id="signup-content">

<div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden mb-6">
<div className="p-6">
<div className="flex items-center mb-6">
<span className="text-blue-400 heading mr-3">01</span>
<h3 className="text-base text-slate-200 font-semibold">Account Information</h3>
</div>

<form>
<div className="space-y-4">
<div>
<label className="block text-sm text-slate-400 mb-1" htmlFor="email">Email</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white" id="email" placeholder="your@email.com" required type="email" />
</div>
<div>
<label className="block text-sm text-slate-400 mb-1" htmlFor="password">Password</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white" id="password" placeholder="••••••••" required type="password" />
<p className="text-xs text-slate-500 mt-1">Must be at least 8 characters</p>
</div>
<div>
<label className="block text-sm text-slate-400 mb-1" htmlFor="confirm-password">Confirm Password</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white" id="confirm-password" placeholder="••••••••" required type="password" />
</div>
</div>
</form>
</div>
<div className="px-6 py-3 bg-slate-800/30 border-t border-slate-800">
<div className="text-xs text-slate-400">
                        All fields are required to create your account
                    </div>
</div>
</div>

<div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden mb-6">
<div className="p-6">
<div className="flex items-center mb-6">
<span className="text-blue-400 heading mr-3">02</span>
<h3 className="text-base text-slate-200 font-semibold">Connect to Figma</h3>
</div>
<p className="text-sm text-slate-400 mb-6">
                        You'll need to connect your Figma account to use Aura.
                        This will be done after registration.
                    </p>
<div className="bg-slate-800/50 rounded-md border border-slate-700 p-3 flex items-center">
<div className="w-6 h-6 rounded bg-blue-500/20 mr-3"></div>
<div className="text-xs text-slate-300">
                            Figma authentication will be requested after sign up
                        </div>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-start mb-4">
<div className="flex items-center h-5">
<input className="w-4 h-4 bg-slate-800 border-slate-600 rounded focus:ring-blue-600" id="terms" required type="checkbox" />
</div>
<label className="ml-2 text-sm text-slate-400" htmlFor="terms">
                        I agree to the <a className="text-blue-400 hover:underline" href="#">Terms of Service</a> and <a className="text-blue-400 hover:underline" href="#">Privacy Policy</a>
</label>
</div>
<div className="flex items-start">
<div className="flex items-center h-5">
<input className="w-4 h-4 bg-slate-800 border-slate-600 rounded focus:ring-blue-600" id="newsletter" type="checkbox" />
</div>
<label className="ml-2 text-sm text-slate-400" htmlFor="newsletter">
                        Send me occasional product updates and news
                    </label>
</div>
</div>

<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition-colors" type="submit">
                Create Account
            </button>

<p className="text-center mt-6 text-sm text-slate-400">
                Already have an account? <a className="text-blue-400 hover:underline" href="#">Sign in</a>
</p>
</div>

<div className="tab-content" id="features-content">
<div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden mb-6 p-6">
<h2 className="text-xl font-semibold mb-4">Aura Features</h2>
<ul className="space-y-4">
<li className="flex">
<div className="mr-3 text-blue-400">✓</div>
<div>
<h3 className="font-medium">AI-Powered Design Transformations</h3>
<p className="text-sm text-slate-400">Convert your Figma mockups into production-ready code</p>
</div>
</li>
<li className="flex">
<div className="mr-3 text-blue-400">✓</div>
<div>
<h3 className="font-medium">Design System Integration</h3>
<p className="text-sm text-slate-400">Automatically apply your design system tokens</p>
</div>
</li>
<li className="flex">
<div className="mr-3 text-blue-400">✓</div>
<div>
<h3 className="font-medium">Responsive Layouts</h3>
<p className="text-sm text-slate-400">Generate fully responsive designs that work on all devices</p>
</div>
</li>
<li className="flex">
<div className="mr-3 text-blue-400">✓</div>
<div>
<h3 className="font-medium">Code Export</h3>
<p className="text-sm text-slate-400">Export to React, Vue, or plain HTML/CSS</p>
</div>
</li>
</ul>
</div>
</div>

<div className="tab-content" id="pricing-content">
<div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden mb-6">
<div className="p-6">
<h2 className="text-xl font-semibold mb-4">Pricing Plans</h2>
<div className="space-y-6">
<div className="border border-slate-700 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<h3 className="font-semibold">Free</h3>
<span className="text-slate-400">$0/month</span>
</div>
<p className="text-sm text-slate-400 mb-3">Perfect for trying out Aura</p>
<ul className="text-sm space-y-2">
<li className="text-slate-300">5 design exports/month</li>
<li className="text-slate-300">Basic components only</li>
<li className="text-slate-300">Community support</li>
</ul>
</div>
<div className="border border-blue-600 rounded-lg p-4 bg-blue-900/10">
<div className="flex justify-between items-center mb-2">
<h3 className="font-semibold">Pro</h3>
<span className="text-slate-300">$19/month</span>
</div>
<p className="text-sm text-slate-400 mb-3">For serious designers</p>
<ul className="text-sm space-y-2">
<li className="text-slate-300">Unlimited exports</li>
<li className="text-slate-300">All components</li>
<li className="text-slate-300">Priority support</li>
<li className="text-slate-300">Custom code options</li>
</ul>
</div>
<div className="border border-slate-700 rounded-lg p-4">
<div className="flex justify-between items-center mb-2">
<h3 className="font-semibold">Team</h3>
<span className="text-slate-400">$49/month</span>
</div>
<p className="text-sm text-slate-400 mb-3">For design teams</p>
<ul className="text-sm space-y-2">
<li className="text-slate-300">Everything in Pro</li>
<li className="text-slate-300">5 team members</li>
<li className="text-slate-300">Team workspace</li>
<li className="text-slate-300">API access</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<p className="text-center mt-8 text-xs text-slate-500">
            No credit card required. Start transforming your Figma designs with AI.
        </p>
</div>


    </>
  );
}
