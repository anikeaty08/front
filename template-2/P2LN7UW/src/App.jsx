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



    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'ui-sans-serif', 'system-ui']
          }
        }
      }
    }
  


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
      
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative">

<div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8 sm:mb-12 lg:mb-16 mb-8">
<h1 className="sm:text-3xl lg:text-4xl xl:text-5xl leading-tight max-w-full lg:max-w-lg text-2xl font-semibold text-slate-100 tracking-tight">Design tool evolution timeline and feature releases</h1>
<p className="max-w-full lg:max-w-sm sm:text-base leading-relaxed text-sm text-slate-400">
      Track our continuous improvement journey with detailed release notes, feature additions, bug fixes, and performance enhancements. 
      Stay updated with the latest developments and upcoming features.
    </p>
</div>

<div className="relative mx-auto w-full max-w-4xl xl:max-w-6xl">

<div className="hidden xl:block">
<div className="annotation annotation-left" style={{top: `60px`}}>VERSION<br />TRACKING</div>
<div className="annotation-line" style={{top: `75px`, right: `calc(100% - 20px)`, width: `40px`}}></div>
<div className="annotation annotation-left" style={{top: `250px`}}>VISUAL<br />UPDATES</div>
<div className="annotation-line" style={{top: `265px`, right: `calc(100% - 20px)`, width: `40px`}}></div>
<div className="annotation annotation-left" style={{top: `450px`}}>CATEGORIZED<br />CHANGES</div>
<div className="annotation-line" style={{top: `465px`, right: `calc(100% - 20px)`, width: `40px`}}></div>
</div>
<div className="hidden xl:block">
<div className="annotation annotation-right" style={{top: `20px`}}>RELEASE<br />METADATA</div>
<div className="annotation-line" style={{top: `35px`, left: `calc(100% - 20px)`, width: `40px`}}></div>
<div className="annotation annotation-right" style={{top: `180px`}}>FEATURE<br />SHOWCASE</div>
<div className="annotation-line" style={{top: `195px`, left: `calc(100% - 20px)`, width: `40px`}}></div>
<div className="annotation annotation-right" style={{top: `600px`}}>DEVELOPER<br />ATTRIBUTION</div>
<div className="annotation-line" style={{top: `615px`, left: `calc(100% - 20px)`, width: `40px`}}></div>
</div>

<div className="window sm:p-6 lg:p-8 relative z-10 pt-4 pr-4 pb-4 pl-4">

<div className="border-b border-slate-700/50 pb-4 sm:pb-6 mb-6 sm:mb-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
<h2 className="sm:text-xl flex items-center gap-2 text-lg font-normal text-slate-200">Aura Release History</h2>
<div className="flex items-center gap-2">
<span className="bg-emerald-900 text-emerald-300 px-2 py-1 rounded text-xs flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              v3.2.1
            </span>
</div>
</div>
<p className="text-xs sm:text-sm text-slate-400 mt-2">Complete release history with detailed change tracking</p>
</div>

<div className="relative pl-0 sm:pl-6 md:pl-8">
<div className="timeline-line hidden sm:block"></div>

<div className="relative mb-8 sm:mb-16">
<div className="sm:mb-6 mb-4">
<div className="flex items-center gap-2 relative -left-[19.5px] mb-3">
<div className="version-dot rounded-full"></div>
<span className="text-sm font-medium text-slate-200">v3.2.1</span>
<span className="text-sm text-slate-400">June 4, 2025</span>
</div>
<h3 className="sm:text-xl text-lg font-medium text-slate-100 mb-2">Unsplash images in the design tool</h3>
<p className="sm:text-base text-sm text-slate-300 mb-4">You can now replace any background with an image with Unsplash search, based on tag, colors and relevance.</p>

<div className="images-container mb-6">
<div className="main-image">
<img alt="Layer management interface" className="update-image h-full max-h-[560px] object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&q=80" />
</div>
<div className="side-images">
<img alt="Smart grouping feature" className="side-image md:h-44 object-cover" src="https://images.unsplash.com/photo-1633886038251-66242d6cf688?w=1080&q=80" />
<img alt="Nested layers view" className="side-image md:h-44" src="https://images.unsplash.com/photo-1627637819794-fba32f82be16?w=1080&q=80" />
<img alt="Performance metrics" className="side-image md:h-44 object-cover" src="https://images.unsplash.com/photo-1611262588019-db6cc2032da3?w=1080&q=80" />
</div>
</div>
</div>
<div className="space-y-3 sm:space-y-4">
<div className="change-item">
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
<span className="change-tag">NEW</span>
<div className="flex-1">
<p className="sm:text-base text-sm text-slate-200">Smart layer auto-grouping feature</p>
<p className="text-xs sm:text-sm text-slate-400 mt-1">Automatically organizes layers based on content similarity</p>
</div>
</div>
</div>
<div className="change-item">
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
<span className="change-tag">FEATURE</span>
<div className="flex-1">
<p className="text-sm sm:text-base text-slate-200">Real-time collaboration improvements</p>
<p className="text-xs sm:text-sm text-slate-400 mt-1">Enhanced cursor tracking and live selection indicators</p>
</div>
</div>
</div>
<div className="change-item">
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
<span className="change-tag">FIXES</span>
<div className="flex-1">
<p className="text-sm sm:text-base text-slate-200">Canvas rendering performance issues</p>
<p className="text-xs sm:text-sm text-slate-400 mt-1">Resolved lag when working with large artboards</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative mb-8 sm:mb-16">
<div className="mb-4 sm:mb-6">
<div className="flex items-center gap-2 relative -left-[19.5px] mb-3">
<div className="version-dot bg-blue-500 rounded-full"></div>
<span className="text-sm font-medium text-slate-200">v3.2.0</span>
<span className="text-sm text-slate-400">November 22, 2024</span>
</div>
<h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">AI-Powered Design Assistant</h3>
<p className="text-sm sm:text-base text-slate-300 mb-4">Introducing intelligent design suggestions and automated layout optimization.</p>

<div className="images-container mb-6">
<div className="main-image">
<img alt="AI design assistant interface" className="update-image h-full max-h-[560px]" src="https://images.unsplash.com/photo-1650611250959-1e823abf6841?w=2160&q=80" />
</div>
<div className="side-images">
<img alt="AI color palette" className="side-image md:h-44" src="https://images.unsplash.com/photo-1635268144933-4d6f7a55e0b9?w=1080&q=80" />
<img alt="Layout automation" className="side-image md:h-44" src="https://images.unsplash.com/photo-1634893661513-d6d1f579fc63?w=1080&q=80" />
<img alt="Smart suggestions" className="side-image md:h-44" src="https://images.unsplash.com/photo-1703635531451-2e32420b164d?w=1080&q=80" />
</div>
</div>
</div>
<div className="space-y-3 sm:space-y-4">
<div className="change-item">
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
<span className="change-tag">NEW</span>
<div className="flex-1">
<p className="text-sm sm:text-base text-slate-200">AI color palette generator</p>
<p className="text-xs sm:text-sm text-slate-400 mt-1">Smart color suggestions based on design context</p>
</div>
</div>
</div>
<div className="change-item">
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
<span className="change-tag">FEATURE</span>
<div className="flex-1">
<p className="text-sm sm:text-base text-slate-200">Automated layout alignment</p>
<p className="text-xs sm:text-sm text-slate-400 mt-1">Intelligent element positioning and spacing</p>
</div>
</div>
</div>
<div className="change-item">
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
<span className="change-tag">FIXES</span>
<div className="flex-1">
<p className="text-sm sm:text-base text-slate-200">Text rendering inconsistencies</p>
<p className="text-xs sm:text-sm text-slate-400 mt-1">Fixed font weight variations across different browsers</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="mb-4 sm:mb-6">
<div className="flex items-center gap-2 mb-3 relative -left-[19.5px]">
<div className="version-dot bg-slate-500 rounded-full"></div>
<span className="text-sm font-medium text-slate-200">v3.1.5</span>
<span className="text-sm text-slate-400">November 5, 2024</span>
</div>
<h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Vector Tools Enhancement</h3>
<p className="text-sm sm:text-base text-slate-300 mb-4">Improved vector editing capabilities with advanced path operations.</p>

<div className="images-container mb-6">
<div className="main-image">
<img alt="Vector editing tools" className="update-image h-full max-h-[560px]" src="https://images.unsplash.com/photo-1627637819794-fba32f82be16?w=2160&q=80" />
</div>
<div className="side-images">
<img alt="Bezier curve editor" className="side-image md:h-44" src="https://images.unsplash.com/photo-1717579425304-3329b79030a9?w=1080&q=80" />
<img alt="Boolean operations" className="side-image md:h-44" src="https://images.unsplash.com/photo-1715174539960-6b2f5f279ee5?w=1080&q=80" />
<img alt="Export settings" className="side-image md:h-44" src="https://images.unsplash.com/photo-1690046793092-f8d634523264?w=1080&q=80" />
</div>
</div>
</div>
<div className="space-y-3 sm:space-y-4">
<div className="change-item">
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
<span className="change-tag">NEW</span>
<div className="flex-1">
<p className="text-sm sm:text-base text-slate-200">Advanced bezier curve editor</p>
<p className="text-xs sm:text-sm text-slate-400 mt-1">Precise control over vector path manipulation</p>
</div>
</div>
</div>
<div className="change-item">
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
<span className="change-tag">FEATURE</span>
<div className="flex-1">
<p className="text-sm sm:text-base text-slate-200">Boolean operations toolkit</p>
<p className="text-xs sm:text-sm text-slate-400 mt-1">Union, subtract, intersect, and exclude operations</p>
</div>
</div>
</div>
<div className="change-item">
<div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
<span className="change-tag">FIXES</span>
<div className="flex-1">
<p className="text-sm sm:text-base text-slate-200">Export quality improvements</p>
<p className="text-xs sm:text-sm text-slate-400 mt-1">Enhanced SVG and PDF export with better compression</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 sm:pt-8 border-t border-slate-700/50 mt-8 sm:mt-12">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center bg-purple-600 bg-[url(https://images.unsplash.com/photo-1589525231707-f2de2428f59c?w=1080&q=80)] bg-cover rounded-full">
</div>
<div>
<div className="text-sm font-medium text-slate-200">Sarah Martinez</div>
<div className="text-xs text-slate-400">Product Manager & Release Coordinator</div>
</div>
</div>
<div className="text-left sm:text-right">
<div className="text-xs text-slate-500">Last updated: Dec 8, 2024</div>
<div className="text-xs text-slate-500">Next release: Q1 2025</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
