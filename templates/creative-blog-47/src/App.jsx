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
      
<div className="max-w-2xl mx-auto bg-white shadow-lg">

<div className="border-b border-purple-100 px-6 py-8 sm:px-8 sm:py-10 bg-purple-600">
<div className="text-center">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">The Visual Forge</h1>
<p className="text-purple-100 text-sm sm:text-base">Unleash your creative potential and sharpen your design skills.</p>
</div>
</div>

<div className="px-6 py-10 sm:px-8 sm:py-12 border-b border-neutral-200 bg-rose-50">
<div className="mb-3">
<span className="inline-block text-xs font-medium tracking-wide uppercase text-orange-600 mb-4">Today's Main Story</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 mb-5 leading-tight">The Art of Writing Blog Headlines That Convert Clicks into Readers</h2>
<p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-8 italic border-l-4 border-orange-500 pl-4 bg-white/60 py-3">"Content creation is only as good as the headline that promotes it. This deep dive explores the psychological triggers used in successful blog titles—from using power words to creating an intentional curiosity gap—guaranteeing your next post gets the attention it deserves."</p>
<a className="block w-full bg-purple-600 text-white text-center py-3.5 px-6 font-medium text-sm hover:bg-purple-700 hover:outline hover:outline-2 hover:outline-purple-200/60 transition-all" href="#">Read the Full Story</a>
</div>

<div className="px-6 py-10 sm:px-8 sm:py-12 border-b border-neutral-200">
<h3 className="text-xs font-medium tracking-wide uppercase text-purple-600 mb-6">What You Might Have Missed</h3>
<p className="text-neutral-600 text-sm mb-8">Here are a few other stories you may find interesting from the archives or earlier this week.</p>

<div className="mb-8 pb-8 border-b border-neutral-100">
<div className="flex items-start gap-3 mb-2">
<div className="flex-shrink-0 mt-1 bg-amber-400 p-2 rounded-lg">
<i className="w-5 h-5 text-white" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<h4 className="text-base font-semibold text-neutral-900 mb-2">Creative Fuel: Tool Spotlight</h4>
<p className="text-neutral-600 text-sm leading-relaxed mb-3"><span className="font-medium text-purple-700">Tool of the Week: Figma Prototyping.</span> See how this browser-based tool is revolutionizing collaborative design workflows for beginners and pros alike.</p>
<a className="text-sm text-purple-600 font-medium hover:text-purple-700 hover:underline hover:underline-offset-4 transition-colors inline-flex items-center gap-1" href="#">
                            Learn More
                            <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>

<div>
<div className="flex items-start gap-3 mb-2">
<div className="flex-shrink-0 mt-1 bg-rose-600 p-2 rounded-lg">
<i className="w-5 h-5 text-white" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<h4 className="text-base font-semibold text-neutral-900 mb-2">Design Breakdown: Why Authenticity Is Replacing Polished Ads</h4>
<p className="text-neutral-600 text-sm leading-relaxed mb-3">We analyze current branding trends to show why raw, authentic content is generating higher engagement rates than expensive, overly produced studio shoots.</p>
<a className="text-sm text-pink-600 font-medium hover:text-pink-700 hover:underline hover:underline-offset-4 transition-colors inline-flex items-center gap-1" href="#">
                            Read More
                            <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</div>

<div className="px-6 py-10 sm:px-8 sm:py-12 bg-pink-50 border-b border-purple-200">
<h3 className="text-xs font-medium tracking-wide uppercase text-purple-700 mb-4">Community Check-In</h3>
<h4 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Your Voice Matters: Help Us Improve</h4>
<p className="text-neutral-700 text-sm leading-relaxed mb-5">We're always working to bring you the best content for your creative journey. Let us know what you'd like to see next!</p>
<a className="text-sm text-purple-700 font-medium hover:text-purple-800 hover:underline hover:underline-offset-4 transition-colors inline-flex items-center gap-1" href="#">
                Take Our 1-Minute Survey →
            </a>
</div>

<div className="px-6 py-10 sm:px-8 sm:py-12 bg-white">
<div className="text-center">

<div className="flex items-center justify-center gap-5 mb-8">
<a className="text-pink-600 hover:text-pink-700 transition-colors bg-pink-50 p-2 rounded-lg hover:bg-pink-100 hover:outline hover:outline-2 hover:outline-pink-200/70" href="#">
<i className="w-5 h-5" data-lucide="instagram" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="text-purple-600 hover:text-purple-700 transition-colors bg-purple-50 p-2 rounded-lg hover:bg-purple-100 hover:outline hover:outline-2 hover:outline-purple-200/70" href="#">
<i className="w-5 h-5" data-lucide="layout" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="text-orange-600 hover:text-orange-700 transition-colors bg-orange-50 p-2 rounded-lg hover:bg-orange-100 hover:outline hover:outline-2 hover:outline-orange-200/70" href="#">
<i className="w-5 h-5" data-lucide="pin" style={{strokeWidth: '1.5'}}></i>
</a>
</div>

<div className="text-neutral-600 text-xs leading-relaxed space-y-3">
<p className="font-medium text-neutral-900 text-sm tracking-tight">The Visual Forge</p>
<p>Our mailing address is: 321 Palette Lane, Los Angeles, CA 90048</p>
<p>You are receiving this email because you subscribed on our website.</p>
<p className="space-x-2">
<a className="text-purple-600 hover:text-purple-700 transition-colors underline" href="#">Unsubscribe</a>
<span className="text-neutral-400">|</span>
<a className="text-purple-600 hover:text-purple-700 transition-colors underline" href="#">Update Preferences</a>
</p>
<p className="text-neutral-500 pt-4">Copyright © 2025 The Visual Forge. All rights reserved.</p>
</div>
</div>
</div>
</div>


    </>
  );
}
