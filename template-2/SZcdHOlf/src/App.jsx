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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    tailwind.config = {
      theme: {
        extend: {
          colors: {
            dark: {
              bg: '#121214',
              sidebar: '#1a1a1d',
              content: '#202024',
              accent: '#4f7cff',
              text: '#e2e2e4',
              subdued: '#a0a0a6',
              code: '#16161a'
            }
          },
          fontFamily: {
            'barlow': ['"Barlow Condensed"', 'sans-serif'],
            'inter': ['Inter', 'sans-serif'],
            'lora': ['Lora', 'serif'],
            'plex': ['"IBM Plex Condensed"', 'sans-serif'],
            'playfair': ['"Playfair Display"', 'serif'],
            'ptserif': ['"PT Serif"', 'serif'],
            'roboto': ['"Roboto Condensed"', 'sans-serif']
          }
        }
      }
    }
  
}
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
      
<div className="flex min-h-screen">

<div className="fixed inset-0 z-40 flex md:hidden" x-cloak="" x-show="sidebarOpen">
<div className="fixed inset-0 bg-black/50" x-show="sidebarOpen" x-transition:enter="transition-opacity ease-linear duration-300" x-transition:enter-end="opacity-100" x-transition:enter-start="opacity-0" x-transition:leave="transition-opacity ease-linear duration-300" x-transition:leave-end="opacity-0" x-transition:leave-start="opacity-100"></div>
<div className="relative flex w-full max-w-xs flex-1 flex-col bg-dark-sidebar" x-show="sidebarOpen" x-transition:enter="transition ease-in-out duration-300 transform" x-transition:enter-end="translate-x-0" x-transition:enter-start="-translate-x-full" x-transition:leave="transition ease-in-out duration-300 transform" x-transition:leave-end="-translate-x-full" x-transition:leave-start="translate-x-0">
<div className="p-6">
<div className="flex items-center justify-between mb-8">
<h2 className="font-barlow text-xl font-semibold tracking-tight">Documentation</h2>
<button className="text-dark-subdued">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<nav className="space-y-6">
<div>
<h3 className="font-roboto text-sm uppercase text-dark-subdued mb-3">Getting Started</h3>
<ul className="space-y-2 text-[15px]">
<li className="pl-2 border-l-2 border-dark-accent font-medium">Introduction</li>
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Quick Start</li>
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Installation</li>
</ul>
</div>
<div>
<h3 className="font-roboto text-sm uppercase text-dark-subdued mb-3">Core Concepts</h3>
<ul className="space-y-2 text-[15px]">
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Architecture</li>
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Components</li>
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Data Flow</li>
</ul>
</div>
<div>
<h3 className="font-roboto text-sm uppercase text-dark-subdued mb-3">API Reference</h3>
<ul className="space-y-2 text-[15px]">
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Endpoints</li>
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Authentication</li>
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Error Handling</li>
</ul>
</div>
</nav>
</div>
</div>
</div>

<div className="hidden md:fixed md:inset-y-0 md:flex md:w-1/3 lg:w-1/4 md:flex-col bg-dark-sidebar">
<div className="p-6 overflow-y-auto">
<h2 className="font-barlow text-xl font-semibold tracking-tight mb-8">Documentation</h2>
<nav className="space-y-6">
<div>
<h3 className="font-roboto text-sm uppercase text-dark-subdued mb-3">Getting Started</h3>
<ul className="space-y-2 text-[15px]">
<li className="pl-2 border-l-2 border-dark-accent font-medium">Introduction</li>
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Quick Start</li>
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Installation</li>
</ul>
</div>
<div>
<h3 className="font-roboto text-sm uppercase text-dark-subdued mb-3">Core Concepts</h3>
<ul className="space-y-2 text-[15px]">
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Architecture</li>
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Components</li>
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Data Flow</li>
</ul>
</div>
<div>
<h3 className="font-roboto text-sm uppercase text-dark-subdued mb-3">API Reference</h3>
<ul className="space-y-2 text-[15px]">
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Endpoints</li>
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Authentication</li>
<li className="pl-2 border-l-2 border-transparent hover:border-dark-accent/50 transition-colors">Error Handling</li>
</ul>
</div>
</nav>
</div>
</div>

<div className="md:pl-[33.333%] lg:pl-1/4 w-full bg-dark-content min-h-screen">

<div className="md:hidden flex items-center justify-between p-4 border-b border-gray-800">
<h2 className="font-barlow text-xl font-semibold tracking-tight">Documentation</h2>
<button className="text-dark-subdued">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="p-6 md:p-10 max-w-4xl mx-auto">

<header className="mb-10">
<h1 className="font-playfair text-4xl md:text-5xl font-medium tracking-tight mb-4">Introduction</h1>
<p className="text-dark-subdued text-lg font-ptserif">Everything you need to know to get started with our platform.</p>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

<div className="bg-dark-sidebar p-6 rounded-xl border border-gray-800">
<h3 className="font-plex text-lg font-medium mb-3">Quick Overview</h3>
<p className="text-[15px] text-dark-subdued">A brief introduction to the core functionality and features.</p>
</div>
<div className="md:col-span-2 bg-dark-sidebar p-6 rounded-xl border border-gray-800">
<h3 className="font-lora text-lg font-medium mb-3">Key Benefits</h3>
<ul className="space-y-2 text-[15px] text-dark-subdued">
<li className="flex items-start">
<span className="text-dark-accent mr-2">•</span>
<span>Streamlined workflow integration with existing tools</span>
</li>
<li className="flex items-start">
<span className="text-dark-accent mr-2">•</span>
<span>Advanced security features with enterprise-grade protection</span>
</li>
<li className="flex items-start">
<span className="text-dark-accent mr-2">•</span>
<span>Intuitive user interface designed for productivity</span>
</li>
</ul>
</div>

<div className="md:col-span-2 bg-dark-sidebar p-6 rounded-xl border border-gray-800">
<h3 className="font-barlow text-lg font-semibold tracking-tight mb-3">Getting Started</h3>
<p className="text-[15px] text-dark-subdued mb-4">Follow these steps to set up your environment:</p>
<div className="bg-dark-code p-4 rounded-lg font-mono text-sm text-dark-text/90">
<code>npm install @platform/core</code><br />
<code>import {"{"} initialize {"}"} from '@platform/core'</code><br />
<code>initialize({"{"} apiKey: 'YOUR_API_KEY' {"}"})</code>
</div>
</div>
<div className="bg-dark-sidebar p-6 rounded-xl border border-gray-800">
<h3 className="font-roboto text-lg font-medium mb-3">Resources</h3>
<ul className="space-y-2 text-[15px] text-dark-subdued">
<li className="flex items-center">
<span className="text-dark-accent mr-2">→</span>
<a className="text-dark-accent hover:underline" href="#">GitHub</a>
</li>
<li className="flex items-center">
<span className="text-dark-accent mr-2">→</span>
<a className="text-dark-accent hover:underline" href="#">Community</a>
</li>
<li className="flex items-center">
<span className="text-dark-accent mr-2">→</span>
<a className="text-dark-accent hover:underline" href="#">Examples</a>
</li>
</ul>
</div>
</div>

<div>
<h2 className="font-lora text-2xl font-medium tracking-tight mb-4">Platform Overview</h2>
<p className="font-ptserif text-[16px] leading-relaxed mb-6">
            Our platform provides a comprehensive solution for managing complex workflows and data processing tasks. Built with scalability in mind, it offers robust tools for developers and business users alike.
          </p>
<h3 className="font-barlow text-xl font-semibold tracking-tight mt-8 mb-3">Core Components</h3>
<p className="font-inter text-[15px] leading-relaxed mb-4">
            The platform consists of several interconnected components that work together to provide a seamless experience:
          </p>
<div className="bg-dark-sidebar p-6 rounded-xl mb-6 border border-gray-800">
<h4 className="font-plex text-lg font-medium mb-3">API Gateway</h4>
<p className="text-[15px] text-dark-subdued">
              The API Gateway serves as the entry point for all requests, handling authentication, rate limiting, and request routing to the appropriate services.
            </p>
</div>
<div className="bg-dark-sidebar p-6 rounded-xl mb-6 border border-gray-800">
<h4 className="font-plex text-lg font-medium mb-3">Data Processing Engine</h4>
<p className="text-[15px] text-dark-subdued">
              Our high-performance data processing engine can handle millions of records with minimal latency, making it ideal for real-time analytics and reporting.
            </p>
</div>
<div className="bg-dark-sidebar p-6 rounded-xl border border-gray-800">
<h4 className="font-plex text-lg font-medium mb-3">Integration Framework</h4>
<p className="text-[15px] text-dark-subdued">
              Connect to existing systems and third-party services with our extensive library of pre-built connectors and customizable integration points.
            </p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
