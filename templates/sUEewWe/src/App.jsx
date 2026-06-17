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
      
<div className="min-h-screen flex flex-col">

<nav className="px-4 py-5 md:px-8">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
<svg className="w-5 h-5" fill="white" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
</svg>
</div>
<span className="text-white font-semibold text-xl">DevConnect</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-white/70 hover:text-white transition-colors" href="#">Features</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Resources</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">About</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-white bg-transparent border border-white/10 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">
            Sign In
          </button>
<button className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
<button className="md:hidden text-white">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>
</nav>

<div className="flex-grow flex items-center">
<div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="flex flex-col gap-6">
<div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 self-start">
<span className="text-blue-400 text-sm font-medium">New Feature</span>
<span className="text-white/70 text-sm">AI-Powered Matching</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Connect with top tech talent worldwide
            </h1>
<p className="text-white/70 text-lg md:text-xl max-w-xl">
              Join our community of developers, designers, and product managers to collaborate on groundbreaking projects.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mt-4">
<button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Find Collaborators
              </button>
<button className="bg-transparent border border-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors">
                Learn More
              </button>
</div>
<div className="mt-8">
<p className="text-white/50 text-sm mb-4">Trusted by teams from:</p>
<div className="flex flex-wrap gap-6 items-center">
<img alt="Google" className="h-6 opacity-70 hover:opacity-100 transition-opacity" src="https://placehold.co/100x30/2563eb/FFFFFF?text=Google"/>
<img alt="Microsoft" className="h-6 opacity-70 hover:opacity-100 transition-opacity" src="https://placehold.co/100x30/2563eb/FFFFFF?text=Microsoft"/>
<img alt="Adobe" className="h-6 opacity-70 hover:opacity-100 transition-opacity" src="https://placehold.co/100x30/2563eb/FFFFFF?text=Adobe"/>
<img alt="Stripe" className="h-6 opacity-70 hover:opacity-100 transition-opacity" src="https://placehold.co/100x30/2563eb/FFFFFF?text=Stripe"/>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
<div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>

<div className="bg-[#111827] rounded-xl border border-white/10 shadow-xl relative z-10 transform transition-transform hover:-translate-y-2">
<div className="p-6">
<div className="flex items-center gap-4 mb-6">
<div className="relative">
<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
<img alt="Featured developer" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=32"/>
</div>
<div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#111827]"></div>
</div>
<div>
<h3 className="text-xl font-semibold text-white">Sophia Lee</h3>
<p className="text-white/60">Senior UX Designer</p>
</div>
</div>
<div className="flex items-center gap-2 mb-4">
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<span className="text-sm text-white/60">Available for work</span>
</div>
</div>
<div className="space-y-3 mb-6">
<div className="flex justify-between items-center">
<span className="text-white/60 text-sm">Experience</span>
<span className="text-white text-sm font-medium">8+ years</span>
</div>
<div className="h-px bg-white/10"></div>
<div className="flex justify-between items-center">
<span className="text-white/60 text-sm">Projects</span>
<span className="text-white text-sm font-medium">78 completed</span>
</div>
<div className="h-px bg-white/10"></div>
<div className="flex justify-between items-center">
<span className="text-white/60 text-sm">Success Rate</span>
<span className="text-white text-sm font-medium">98%</span>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">Connect</button>
<button className="flex-1 bg-transparent border border-white/10 text-white py-2 rounded-lg font-medium hover:bg-white/5 transition-colors">View Profile</button>
</div>
</div>
</div>

<div className="absolute top-8 -right-6 w-64 h-64 bg-[#111827] rounded-xl border border-white/10 rotate-6 z-0 opacity-60"></div>
<div className="absolute -bottom-4 -left-6 w-64 h-64 bg-[#111827] rounded-xl border border-white/10 -rotate-6 z-0 opacity-60"></div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
