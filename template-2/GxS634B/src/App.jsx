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
      
<section className="py-20 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
<div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
<p className="text-lg text-white/70 max-w-2xl mx-auto">
          Discover how FlowUI has helped teams around the world build better products faster.
        </p>
</div>

<div className="glass-card rounded-2xl p-8 md:p-10 mb-16 relative overflow-hidden">
<div className="absolute -top-6 -left-6 text-8xl font-bold quote-mark opacity-20">"</div>
<div className="relative z-10">
<p className="text-xl md:text-2xl text-white/90 italic mb-8 max-w-4xl">
            FlowUI has completely transformed how we build interfaces. What used to take weeks now takes days, and the quality of our output has improved dramatically. The components are intuitive, the documentation is excellent, and the support team is responsive.
          </p>
<div className="flex items-center">
<img alt="Sarah Johnson" className="w-14 h-14 rounded-full mr-4 border-2 border-cyan-400" src="https://randomuser.me/api/portraits/women/32.jpg" />
<div>
<h4 className="font-semibold text-lg">Sarah Johnson</h4>
<p className="text-white/70">Lead Designer, Acme Inc.</p>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
<div className="text-4xl font-bold quote-mark mb-4">"</div>
<p className="text-white/80 mb-6">The animation library is second to none. Our app feels so much more polished and professional since we started using FlowUI.</p>
<div className="flex items-center">
<img alt="Michael Torres" className="w-10 h-10 rounded-full mr-3 border border-cyan-400" src="https://randomuser.me/api/portraits/men/54.jpg" />
<div>
<h4 className="font-medium">Michael Torres</h4>
<p className="text-white/60 text-sm">Frontend Developer</p>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
<div className="text-4xl font-bold quote-mark mb-4">"</div>
<p className="text-white/80 mb-6">We've reduced our design-to-development time by 40% since adopting FlowUI. The theming system is incredibly powerful.</p>
<div className="flex items-center">
<img alt="Rebecca Chen" className="w-10 h-10 rounded-full mr-3 border border-cyan-400" src="https://randomuser.me/api/portraits/women/45.jpg" />
<div>
<h4 className="font-medium">Rebecca Chen</h4>
<p className="text-white/60 text-sm">Product Manager</p>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
<div className="text-4xl font-bold quote-mark mb-4">"</div>
<p className="text-white/80 mb-6">The accessibility features have allowed us to reach more users without additional development effort. It's been a game-changer.</p>
<div className="flex items-center">
<img alt="David Washington" className="w-10 h-10 rounded-full mr-3 border border-cyan-400" src="https://randomuser.me/api/portraits/men/22.jpg" />
<div>
<h4 className="font-medium">David Washington</h4>
<p className="text-white/60 text-sm">CTO, Startup Labs</p>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
<div className="text-4xl font-bold quote-mark mb-4">"</div>
<p className="text-white/80 mb-6">The data visualization components have made our analytics dashboard so much more intuitive. Our clients love the interactivity.</p>
<div className="flex items-center">
<img alt="Alicia Patel" className="w-10 h-10 rounded-full mr-3 border border-cyan-400" src="https://randomuser.me/api/portraits/women/67.jpg" />
<div>
<h4 className="font-medium">Alicia Patel</h4>
<p className="text-white/60 text-sm">Data Scientist</p>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
<div className="text-4xl font-bold quote-mark mb-4">"</div>
<p className="text-white/80 mb-6">As a solo developer, FlowUI has been like having a design team in my pocket. I can build beautiful UIs without being a design expert.</p>
<div className="flex items-center">
<img alt="James Rodriguez" className="w-10 h-10 rounded-full mr-3 border border-cyan-400" src="https://randomuser.me/api/portraits/men/35.jpg" />
<div>
<h4 className="font-medium">James Rodriguez</h4>
<p className="text-white/60 text-sm">Indie Developer</p>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
<div className="text-4xl font-bold quote-mark mb-4">"</div>
<p className="text-white/80 mb-6">The responsive components have eliminated countless hours of debugging across different devices. Everything just works.</p>
<div className="flex items-center">
<img alt="Emily Tanaka" className="w-10 h-10 rounded-full mr-3 border border-cyan-400" src="https://randomuser.me/api/portraits/women/28.jpg" />
<div>
<h4 className="font-medium">Emily Tanaka</h4>
<p className="text-white/60 text-sm">UX Engineer</p>
</div>
</div>
</div>
</div>

<div className="mt-20 text-center">
<p className="text-white/50 mb-8">Trusted by innovative teams at</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
<img alt="Dropbox" className="h-8 opacity-50 hover:opacity-80 transition" src="https://logo.clearbit.com/dropbox.com" />
<img alt="Slack" className="h-8 opacity-50 hover:opacity-80 transition" src="https://logo.clearbit.com/slack.com" />
<img alt="Netflix" className="h-8 opacity-50 hover:opacity-80 transition" src="https://logo.clearbit.com/netflix.com" />
<img alt="Shopify" className="h-8 opacity-50 hover:opacity-80 transition" src="https://logo.clearbit.com/shopify.com" />
<img alt="Adobe" className="h-8 opacity-50 hover:opacity-80 transition" src="https://logo.clearbit.com/adobe.com" />
</div>
</div>
</div>
</section>

    </>
  );
}
