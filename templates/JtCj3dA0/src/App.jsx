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
      
<div className="container mx-auto px-4 py-16">
<h2 className="text-3xl font-bold text-center mb-3">Our Amazing Features</h2>
<p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">Discover why our platform stands out from the competition with these powerful capabilities</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">

<div className="p-6 rounded-xl bg-black border border-zinc-800 relative group overflow-hidden">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
<div className="mb-4 text-blue-400">
<i className="ti ti-terminal-2 text-2xl"></i>
</div>
<div className="text-lg font-bold mb-2 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 group-hover:h-8 w-1 rounded-full bg-blue-500 transition-all duration-200"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block pl-3">
            Built for developers
          </span>
</div>
<p className="text-sm text-zinc-400 mt-2">
          Built for engineers, developers, dreamers, thinkers and doers.
        </p>
</div>

<div className="p-6 rounded-xl bg-black border border-zinc-800 relative group overflow-hidden">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
<div className="mb-4 text-purple-400">
<i className="ti ti-ease-in-out text-2xl"></i>
</div>
<div className="text-lg font-bold mb-2 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 group-hover:h-8 w-1 rounded-full bg-purple-500 transition-all duration-200"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block pl-3">
            Ease of use
          </span>
</div>
<p className="text-sm text-zinc-400 mt-2">
          It's as easy as using an Apple, and as expensive as buying one.
        </p>
</div>

<div className="p-6 rounded-xl bg-black border border-zinc-800 relative group overflow-hidden">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
<div className="mb-4 text-green-400">
<i className="ti ti-currency-dollar text-2xl"></i>
</div>
<div className="text-lg font-bold mb-2 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 group-hover:h-8 w-1 rounded-full bg-green-500 transition-all duration-200"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block pl-3">
            Pricing like no other
          </span>
</div>
<p className="text-sm text-zinc-400 mt-2">
          Our prices are best in the market. No cap, no lock, no credit card required.
        </p>
</div>

<div className="p-6 rounded-xl bg-black border border-zinc-800 relative group overflow-hidden">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
<div className="mb-4 text-cyan-400">
<i className="ti ti-cloud text-2xl"></i>
</div>
<div className="text-lg font-bold mb-2 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 group-hover:h-8 w-1 rounded-full bg-cyan-500 transition-all duration-200"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block pl-3">
            100% Uptime guarantee
          </span>
</div>
<p className="text-sm text-zinc-400 mt-2">
          We just cannot be taken down by anyone.
        </p>
</div>

<div className="p-6 rounded-xl bg-black border border-zinc-800 relative group overflow-hidden">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
<div className="mb-4 text-amber-400">
<i className="ti ti-route-alt-left text-2xl"></i>
</div>
<div className="text-lg font-bold mb-2 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 group-hover:h-8 w-1 rounded-full bg-amber-500 transition-all duration-200"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block pl-3">
            Multi-tenant Architecture
          </span>
</div>
<p className="text-sm text-zinc-400 mt-2">
          You can simply share passwords instead of buying new seats.
        </p>
</div>

<div className="p-6 rounded-xl bg-black border border-zinc-800 relative group overflow-hidden">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
<div className="mb-4 text-pink-400">
<i className="ti ti-help text-2xl"></i>
</div>
<div className="text-lg font-bold mb-2 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 group-hover:h-8 w-1 rounded-full bg-pink-500 transition-all duration-200"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block pl-3">
            24/7 Customer Support
          </span>
</div>
<p className="text-sm text-zinc-400 mt-2">
          We are available a 100% of the time. Atleast our AI Agents are.
        </p>
</div>

<div className="p-6 rounded-xl bg-black border border-zinc-800 relative group overflow-hidden">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent"></div>
<div className="mb-4 text-red-400">
<i className="ti ti-adjustments-bolt text-2xl"></i>
</div>
<div className="text-lg font-bold mb-2 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 group-hover:h-8 w-1 rounded-full bg-red-500 transition-all duration-200"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block pl-3">
            Money back guarantee
          </span>
</div>
<p className="text-sm text-zinc-400 mt-2">
          If you do not like our product, we will convince you to like us.
        </p>
</div>

<div className="p-6 rounded-xl bg-black border border-zinc-800 relative group overflow-hidden">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
<div className="mb-4 text-indigo-400">
<i className="ti ti-heart text-2xl"></i>
</div>
<div className="text-lg font-bold mb-2 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 group-hover:h-8 w-1 rounded-full bg-indigo-500 transition-all duration-200"></div>
<span className="group-hover:translate-x-2 transition duration-200 inline-block pl-3">
            And everything else
          </span>
</div>
<p className="text-sm text-zinc-400 mt-2">
          I just ran out of copy ideas. Accept my sincere apologies.
        </p>
</div>
</div>
</div>

    </>
  );
}
