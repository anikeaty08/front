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
      
<div className="fixed inset-0 w-full h-screen"><iframe frameborder="0" height="100%" src="https://my.spline.design/unchained-d3hHCgdWho7a8ATGzKtB11TU/" width="100%"></iframe></div>
<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="opacity-0 animate-fade-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium mb-6 opacity-0 animate-fade-up delay-100 font-sans text-blue-400" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          New: Real-time collaboration
        </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-up delay-200 font-manrope font-semibold tracking-tighter text-white" style={{}}>
          Built for seamless
          <span className="text-transparent bg-gradient-to-r bg-clip-text font-manrope font-semibold tracking-tighter from-blue-400 to-purple-400" style={{}}>collaboration</span>
</h2>
<p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed opacity-0 animate-fade-up delay-300 font-sans text-neutral-400" style={{transition: `outline 0.1s ease-in-out`}}>
          Empower your development team with intelligent workflows that adapt to your preferred tools—from Git synchronization to visual editors and everything in between.
        </p>

<div className="mt-12 opacity-0 animate-fade-up delay-400">
<div className="space-y-1">
<button className="w-full group flex items-center gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-left transition-all duration-200 hover:bg-blue-500/15 hover:border-blue-500/30">
<div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
<svg className="lucide lucide-git-branch w-4 h-4 text-blue-400" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<div>
<h3 className="font-medium font-sans text-white" style={{transition: `outline 0.1s ease-in-out`}}>Git-native synchronization</h3>
<p className="text-sm mt-1 font-sans text-neutral-400" style={{transition: `outline 0.1s ease-in-out`}}>Automatic sync with GitHub, GitLab, and Bitbucket repositories</p>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 ml-auto text-blue-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="w-full group flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 border-neutral-800 hover:bg-neutral-900/50 hover:border-neutral-700">
<div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-800">
<svg className="lucide lucide-edit-3 w-4 h-4 text-neutral-400" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path></svg>
</div>
<div>
<h3 className="font-medium font-sans text-white" style={{transition: `outline 0.1s ease-in-out`}}>Visual web editor</h3>
<p className="text-sm mt-1 font-sans text-neutral-400" style={{transition: `outline 0.1s ease-in-out`}}>WYSIWYG editing with live preview and instant publishing</p>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-neutral-500 ml-auto group-hover:text-neutral-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="w-full group flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 border-neutral-800 hover:bg-neutral-900/50 hover:border-neutral-700">
<div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-800">
<svg className="lucide lucide-rocket w-4 h-4 text-neutral-400" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<div>
<h3 className="font-medium font-sans text-white" style={{transition: `outline 0.1s ease-in-out`}}>Preview deployments</h3>
<p className="text-sm mt-1 font-sans text-neutral-400" style={{transition: `outline 0.1s ease-in-out`}}>Instant staging environments for every pull request</p>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-neutral-500 ml-auto group-hover:text-neutral-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="mt-12 grid grid-cols-3 gap-6 opacity-0 animate-fade-up delay-500">
<div className="text-center">
<div className="text-2xl font-manrope font-semibold tracking-tighter text-white" style={{}}>99.9%</div>
<div className="text-sm text-neutral-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Uptime</div>
</div>
<div className="text-center">
<div className="text-2xl font-manrope font-semibold tracking-tighter text-white" style={{}}>50k+</div>
<div className="text-sm text-neutral-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Developers</div>
</div>
<div className="text-center">
<div className="text-2xl font-manrope font-semibold tracking-tighter text-white" style={{}}>2.5M</div>
<div className="text-sm text-neutral-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Deployments</div>
</div>
</div>
</div>

<div className="relative opacity-0 animate-fade-right delay-300">
<div className="absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-20 from-blue-600 to-purple-600"></div>
<div className="relative border backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden bg-neutral-900/90 border-neutral-800/80">

<div className="absolute left-0 top-0 bottom-0 w-12 border-r flex flex-col items-center gap-4 pt-16 bg-neutral-900/50 border-neutral-800">
<button className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center hover:bg-blue-500/30 transition-colors">
<svg className="lucide lucide-folder w-4 h-4 text-blue-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-neutral-800">
<svg className="lucide lucide-search w-4 h-4 text-neutral-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-neutral-800">
<svg className="lucide lucide-git-branch w-4 h-4 text-neutral-500" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-neutral-800">
<svg className="lucide lucide-bug w-4 h-4 text-neutral-500" data-lucide="bug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 2 1.88 1.88"></path><path d="M14.12 3.88 16 2"></path><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"></path><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"></path><path d="M12 20v-9"></path><path d="M6.53 9C4.6 8.8 3 7.1 3 5"></path><path d="M6 13H2"></path><path d="M3 21c0-2.1 1.7-3.9 3.8-4"></path><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"></path><path d="M22 13h-4"></path><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"></path></svg>
</button>
</div>

<div className="pl-12 pr-4 py-3 border-b flex items-center bg-neutral-900/80 border-neutral-800">
<div className="flex items-center space-x-2">
<span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
<span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
<span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
</div>
<div className="ml-6 flex items-center gap-2">
<svg className="lucide lucide-file-text w-4 h-4 text-blue-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-sm font-medium font-sans text-neutral-200" style={{transition: `outline 0.1s ease-in-out`}}>api-configuration.mdx</span>
<div className="w-2 h-2 rounded-full bg-blue-500 ml-1"></div>
</div>
<div className="ml-auto flex items-center gap-2">
<button className="p-1 rounded transition-colors hover:bg-neutral-800">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-neutral-500" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
<button className="p-1 rounded transition-colors hover:bg-neutral-800">
<svg className="lucide lucide-x w-4 h-4 text-neutral-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="pl-12 pr-4 py-2 border-b flex items-center text-xs bg-neutral-900/40 border-neutral-800/50">
<span className="text-neutral-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>docs</span>
<svg className="lucide lucide-chevron-right w-3 h-3 mx-1 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-neutral-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>api</span>
<svg className="lucide lucide-chevron-right w-3 h-3 mx-1 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="font-sans text-neutral-300" style={{transition: `outline 0.1s ease-in-out`}}>configuration</span>
</div>

<div className="pl-12 pr-4 py-6 text-sm leading-6 overflow-x-auto max-h-96 overflow-y-auto text-neutral-300">
<pre><code className="font-sans" style={{transition: `outline 0.1s ease-in-out`}}><span className="text-neutral-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>---</span>
<span className="font-sans text-blue-400" style={{transition: `outline 0.1s ease-in-out`}}>title</span><span className="text-neutral-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>:</span> <span className="font-sans text-green-400" style={{transition: `outline 0.1s ease-in-out`}}>"API Configuration Guide"</span>
<span className="font-sans text-blue-400" style={{transition: `outline 0.1s ease-in-out`}}>description</span><span className="text-neutral-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>:</span> <span className="font-sans text-green-400" style={{transition: `outline 0.1s ease-in-out`}}>"Comprehensive guide to configuring
your API endpoints with DevSync platform"</span>
<span className="font-sans text-blue-400" style={{transition: `outline 0.1s ease-in-out`}}>icon</span><span className="text-neutral-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>:</span> <span className="font-sans text-green-400" style={{transition: `outline 0.1s ease-in-out`}}>"settings"</span>
<span className="font-sans text-blue-400" style={{transition: `outline 0.1s ease-in-out`}}>version</span><span className="text-neutral-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>:</span> <span className="font-sans text-orange-400" style={{transition: `outline 0.1s ease-in-out`}}>2.1</span>
<span className="text-neutral-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>---</span>

<span className="font-sans text-purple-400" style={{transition: `outline 0.1s ease-in-out`}}>## Authentication Setup</span>

DevSync integrates seamlessly with popular
version control systems through secure API
connections. This integration enables:

<span className="font-sans text-purple-400" style={{transition: `outline 0.1s ease-in-out`}}>### GitHub Integration</span>
- Real-time repository synchronization
- Automated webhook configuration  
- Branch protection rules
- Pull request automation

<span className="font-sans text-purple-400" style={{transition: `outline 0.1s ease-in-out`}}>### Advanced Features</span>
- <span className="font-sans text-yellow-400" style={{transition: `outline 0.1s ease-in-out`}}>**Auto-deployment**</span>: Push to deploy
- <span className="font-sans text-yellow-400" style={{transition: `outline 0.1s ease-in-out`}}>**Rollback**</span>: One-click version control
- <span className="font-sans text-yellow-400" style={{transition: `outline 0.1s ease-in-out`}}>**Monitoring**</span>: Real-time performance</code></pre>
</div>

<div className="pl-12 pr-4 py-2 border-t flex items-center justify-between text-xs bg-neutral-900/60 border-neutral-800/50">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="font-sans text-neutral-400" style={{transition: `outline 0.1s ease-in-out`}}>Connected to GitHub</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-git-branch w-3 h-3 text-neutral-500" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
<span className="font-sans text-neutral-400" style={{transition: `outline 0.1s ease-in-out`}}>main</span>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-neutral-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Line 24, Col 16</span>
<span className="text-neutral-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>MDX</span>
</div>
</div>
</div>
</div>
</section>

<section className="mt-24 border-t pt-16 border-neutral-800/50">
<div className="text-center mb-12 opacity-0 animate-fade-up delay-600">
<h3 className="text-2xl sm:text-3xl font-manrope font-semibold tracking-tighter text-white" style={{}}>Everything you need to ship faster</h3>
<p className="mt-4 text-lg max-w-2xl mx-auto font-sans text-neutral-400" style={{transition: `outline 0.1s ease-in-out`}}>Powerful features designed for modern development workflows</p>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
<div className="group p-6 rounded-2xl border transition-all duration-300 opacity-0 animate-fade-up delay-700 border-neutral-800/50 hover:border-neutral-700 hover:bg-neutral-900/30">
<div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
<svg className="lucide lucide-play-circle w-6 h-6 text-blue-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
</div>
<h4 className="font-medium mb-2 font-sans text-white" style={{transition: `outline 0.1s ease-in-out`}}>Interactive API Playground</h4>
<p className="text-sm leading-relaxed font-sans text-neutral-400" style={{transition: `outline 0.1s ease-in-out`}}>Test and explore your APIs directly within documentation with live examples and real-time responses.</p>
</div>
<div className="group p-6 rounded-2xl border transition-all duration-300 opacity-0 animate-fade-up delay-700 border-neutral-800/50 hover:border-neutral-700 hover:bg-neutral-900/30" style={{animationDelay: `0.75s`}}>
<div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
<svg className="lucide lucide-shield-check w-6 h-6 text-green-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h4 className="font-medium mb-2 font-sans text-white" style={{transition: `outline 0.1s ease-in-out`}}>Enterprise Authentication</h4>
<p className="text-sm leading-relaxed font-sans text-neutral-400" style={{transition: `outline 0.1s ease-in-out`}}>Secure your documentation with SSO, RBAC, and custom access controls for team collaboration.</p>
</div>
<div className="group p-6 rounded-2xl border transition-all duration-300 opacity-0 animate-fade-up delay-800 border-neutral-800/50 hover:border-neutral-700 hover:bg-neutral-900/30">
<div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
<svg className="lucide lucide-message-circle w-6 h-6 text-purple-400" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</div>
<h4 className="font-medium mb-2 font-sans text-white" style={{transition: `outline 0.1s ease-in-out`}}>Smart Feedback System</h4>
<p className="text-sm leading-relaxed font-sans text-neutral-400" style={{transition: `outline 0.1s ease-in-out`}}>Collect contextual feedback and suggestions to continuously improve your documentation quality.</p>
</div>
<div className="group p-6 rounded-2xl border transition-all duration-300 opacity-0 animate-fade-up delay-800 border-neutral-800/50 hover:border-neutral-700 hover:bg-neutral-900/30" style={{animationDelay: `0.85s`}}>
<div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
<svg className="lucide lucide-palette w-6 h-6 text-orange-400" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h4 className="font-medium mb-2 font-sans text-white" style={{transition: `outline 0.1s ease-in-out`}}>Fully Customizable</h4>
<p className="text-sm leading-relaxed font-sans text-neutral-400" style={{transition: `outline 0.1s ease-in-out`}}>Brand your docs with custom themes, components, and advanced styling with CSS and JavaScript.</p>
</div>
</div>
</section>
</main>



    </>
  );
}
