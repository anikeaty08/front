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
      
<section className="max-w-7xl mx-auto px-4 py-20">
<div className="max-w-2xl mb-14 text-center mx-auto">
<span className="inline-block mb-5 rounded-lg" style={{padding: '8px', border: '1px solid rgba(255,255,255,0.1)'}}>
<span className="uppercase tracking-widest text-xs font-bold text-blue-400" style={{letterSpacing: '0.1em'}}>
          Explore Features
        </span>
</span>
<h2 className="headline mb-3 text-white font-normal">
        Unlock <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 bg-clip-text text-transparent">AI superpowers</span>
</h2>
<p className="text-lg text-gray-200">
        Accelerate your workflow with innovative tools designed for modern creators, powered by next-generation AI.
      </p>
</div>
<div className="grid md:grid-cols-3 grid-cols-1 gap-6">

<div className="group rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 p-8 hover:shadow-xl transition flex flex-col">
<div className="mb-5 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-purple-400 via-pink-300 to-orange-300 shadow-lg">
<svg className="w-6 h-6" fill="none" stroke="#000" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Rapid Prototyping</h3>
<p className="text-gray-300 mb-4 flex-grow">Go from concept to interactive prototype in minutes. Let AI generate interfaces and logic tailored to your ideas.</p>
<span className="inline-block text-blue-400 font-bold text-xs uppercase tracking-wide">Lightning Fast</span>
</div>

<div className="group rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 p-8 hover:shadow-xl transition flex flex-col">
<div className="mb-5 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-green-300 via-teal-400 to-blue-300 shadow-lg">
<svg className="w-6 h-6" fill="none" stroke="#000" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="7" r="4"></circle><path d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Real-time Collaboration</h3>
<p className="text-gray-300 mb-4 flex-grow">Work seamlessly with your team. Share, review, and build together, powered by smart AI suggestions.</p>
<span className="inline-block text-green-300 font-bold text-xs uppercase tracking-wide">Team Ready</span>
</div>

<div className="group rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 p-8 hover:shadow-xl transition flex flex-col">
<div className="mb-5 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-200 via-orange-200 to-pink-300 shadow-lg">
<svg className="w-6 h-6" fill="none" stroke="#000" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z"></path><path d="M12 12V4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Smart Feedback</h3>
<p className="text-gray-300 mb-4 flex-grow">Instant, actionable feedback from AI to refine your designs and user flows, so you always ship your best work.</p>
<span className="inline-block text-orange-300 font-bold text-xs uppercase tracking-wide">Actionable Insights</span>
</div>

<div className="group rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 p-8 hover:shadow-xl transition flex flex-col md:col-span-2 md:row-start-2">
<div className="mb-5 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-300 via-purple-200 to-pink-200 shadow-lg">
<svg className="w-6 h-6" fill="none" stroke="#000" strokeWidth="2" viewbox="0 0 24 24"><rect height="7" width="7" x="3" y="3"></rect><rect height="7" width="7" x="14" y="14"></rect><rect height="7" width="7" x="14" y="3"></rect><rect height="7" width="7" x="3" y="14"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Seamless Integrations</h3>
<p className="text-gray-300 mb-4 flex-grow">Connect with a wide variety of tools and platforms. Integrate your prototypes with your existing workflow without friction.</p>
<span className="inline-block text-purple-400 font-bold text-xs uppercase tracking-wide">Works Everywhere</span>
</div>

<div className="group rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 p-8 hover:shadow-xl transition flex flex-col">
<div className="mb-5 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-pink-400 via-orange-300 to-yellow-200 shadow-lg">
<svg className="w-6 h-6" fill="none" stroke="#000" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Visual Customization</h3>
<p className="text-gray-300 mb-4 flex-grow">Fine-tune every element with pixel-perfect controls or let AI suggest optimal layouts that match your brand.</p>
<span className="inline-block text-pink-300 font-bold text-xs uppercase tracking-wide">Flexible Design</span>
</div>
</div>
</section>

    </>
  );
}
