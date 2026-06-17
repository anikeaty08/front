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
      
<main className="min-h-screen">
<div className="px-6 md:px-12 lg:px-24 py-12 max-w-6xl mx-auto">

<div className="mb-16 pb-12 border-b border-slate-200 dark:border-slate-800">
<h1 className="font-['Manrope'] font-black text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-tight">
                    Why Your First 5 Seconds Matter
                </h1>
<p className="font-['Inter'] text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mb-8">
                    The science behind first impressions in digital interfaces and how to make them count
                </p>
<div className="flex items-center mb-8 text-sm text-slate-500 dark:text-slate-400 font-['Inter']">
<img alt="Author" className="w-10 h-10 rounded-full mr-3" src="https://i.pravatar.cc/40"/>
<div>
<div>Alex Morgan</div>
<div>May 15, 2023 · 8 min read</div>
</div>
</div>
<div className="bg-slate-50 dark:bg-zinc-800 rounded-xl p-6">
<p className="font-['Inter'] text-base leading-relaxed">
                        In the digital world, you have approximately 5 seconds to make a first impression. That's all the time users give your interface before deciding whether to stay or leave. This critical window determines not just initial engagement, but often the entire relationship a user will have with your product.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
<div>
<h2 className="font-['Manrope'] font-black text-2xl md:text-3xl mb-6 tracking-tight">
                        The Psychology of First Impressions
                    </h2>
<p className="font-['Inter'] text-base leading-relaxed mb-4">
                        Research shows that users form an initial opinion about a website in just 50 milliseconds. This snap judgment is primarily visual and emotional rather than logical.
                    </p>
<p className="font-['Inter'] text-base leading-relaxed">
                        The implications are profound: before users read a single word of your carefully crafted content, they've already formed an opinion based on your layout, color scheme, and visual hierarchy.
                    </p>
</div>
<div>
<h2 className="font-['Manrope'] font-black text-2xl md:text-3xl mb-6 tracking-tight">
                        Key Elements of the First 5 Seconds
                    </h2>
<ul className="font-['Inter'] text-base space-y-4">
<li>
<strong>Visual Clarity:</strong>
<p className="mt-1">Can users immediately understand what your product offers?</p>
</li>
<li>
<strong>Value Proposition:</strong>
<p className="mt-1">Is your unique value clear within seconds?</p>
</li>
<li>
<strong>Navigation:</strong>
<p className="mt-1">Can users easily find what they're looking for?</p>
</li>
<li>
<strong>Trust Signals:</strong>
<p className="mt-1">Do elements of your design convey professionalism?</p>
</li>
</ul>
</div>
</div>

<div className="my-16">
<h2 className="font-['Manrope'] font-black text-2xl md:text-3xl mb-6 tracking-tight">
                    Designing for Immediate Impact
                </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-slate-50 dark:bg-zinc-800 p-5 rounded-lg">
<h3 className="font-['Manrope'] font-black text-lg mb-3">1. Simplify</h3>
<p className="font-['Inter'] text-sm text-slate-600 dark:text-slate-400">
                            Remove unnecessary elements that don't contribute to your core message. Every additional component requires cognitive processing from your users.
                        </p>
</div>
<div className="bg-slate-50 dark:bg-zinc-800 p-5 rounded-lg">
<h3 className="font-['Manrope'] font-black text-lg mb-3">2. Create Visual Hierarchy</h3>
<p className="font-['Inter'] text-sm text-slate-600 dark:text-slate-400">
                            Guide users' attention to what matters most through size, color, contrast, and positioning.
                        </p>
</div>
<div className="bg-slate-50 dark:bg-zinc-800 p-5 rounded-lg">
<h3 className="font-['Manrope'] font-black text-lg mb-3">3. Optimize Load Time</h3>
<p className="font-['Inter'] text-sm text-slate-600 dark:text-slate-400">
                            Compress images, leverage browser caching, and minimize HTTP requests. Every millisecond counts.
                        </p>
</div>
</div>
</div>

<div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
<h3 className="font-['Manrope'] font-black text-xl mb-6 tracking-tight">More articles you might enjoy</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group">
<img alt="Color Psychology" className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<h4 className="font-['Manrope'] font-black text-lg group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">Color Psychology in UI Design</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-2">How colors influence user decisions and emotions</p>
</div>
<div className="group">
<img alt="Micro-interactions" className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<h4 className="font-['Manrope'] font-black text-lg group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">Micro-interactions That Delight</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Small details that create memorable experiences</p>
</div>
<div className="group">
<img alt="Accessibility" className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<h4 className="font-['Manrope'] font-black text-lg group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">Accessibility as a Design Principle</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Why inclusive design creates better products for everyone</p>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
