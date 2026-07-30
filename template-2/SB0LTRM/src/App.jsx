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



    lucide.createIcons();
    // Card lift effect z-index fix
    document.querySelectorAll('.hover-lift').forEach(card => {
      card.addEventListener('mouseenter', () => card.style.zIndex = '10');
      card.addEventListener('mouseleave', () => card.style.zIndex = 'auto');
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
      
<section className="relative px-4 sm:px-8 lg:px-16 py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-12 text-center">
<span className="inline-block px-4 py-1 bg-brand-900/60 border border-brand-800/40 text-brand-300 rounded-full text-sm font-medium tracking-tight mb-4">Platform Features</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-satoshi tracking-tight text-white mb-4">Supercharge your workflow</h2>
<p className="mx-auto max-w-2xl text-base text-gray-400 leading-relaxed">
          Automate, connect, and scale with FlowSync Pro. Discover how our integration platform powers high-performing teams.
        </p>
</div>
<div className="grid gap-8 md:grid-cols-3">

<div className="group bg-gray-900/60 border border-gray-800 rounded-2xl p-8 text-left hover:border-brand-500/40 hover:bg-gray-900/80 transition-shadow duration-300 hover:shadow-2xl hover:shadow-brand-500/20 hover-lift">
<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-200">
<i className="w-6 h-6 text-white" data-lucide="bot"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2 group-hover:text-brand-400 transition-colors duration-200">Intelligent Automation</h3>
<p className="text-gray-400 text-base mb-4">
            Automate repetitive tasks across tools like Slack, Notion, GitHub, and Figma with AI-powered triggers and actions—no code required.
          </p>
<div className="flex items-center gap-2 text-sm text-brand-400 group-hover:underline transition-all duration-200 font-medium cursor-pointer">
<span>Learn more</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group bg-gray-900/60 border border-gray-800 rounded-2xl p-8 text-left hover:border-green-500/40 hover:bg-gray-900/80 transition-shadow duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover-lift">
<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-200">
<i className="w-6 h-6 text-white" data-lucide="link"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2 group-hover:text-green-400 transition-colors duration-200">Unified Integrations</h3>
<p className="text-gray-400 text-base mb-4">
            Connect 300+ apps into one seamless workspace. Sync files, messages, and tasks instantly between your favorite tools.
          </p>
<div className="flex items-center gap-2 text-sm text-green-400 group-hover:underline transition-all duration-200 font-medium cursor-pointer">
<span>View integrations</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group bg-gray-900/60 border border-gray-800 rounded-2xl p-8 text-left hover:border-blue-500/40 hover:bg-gray-900/80 transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover-lift">
<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-200">
<i className="w-6 h-6 text-white" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors duration-200">Real-Time Insights</h3>
<p className="text-gray-400 text-base mb-4">
            Monitor productivity, track KPIs, and visualize workflow ROI with live dashboards and actionable analytics.
          </p>
<div className="flex items-center gap-2 text-sm text-blue-400 group-hover:underline transition-all duration-200 font-medium cursor-pointer">
<span>See analytics</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="mt-16 border-t border-gray-800/60"></div>
</div>
</section>


    </>
  );
}
