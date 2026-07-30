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

<aside className="hidden md:block w-64 border-r border-gray-200 p-6 overflow-y-auto">
<div className="mb-10">
<a className="flex items-center" href="#">
<span className="text-xl font-semibold text-rose-500">Docs</span>
</a>
</div>
<nav className="space-y-8">
<div>
<div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Getting Started</div>
<ul className="space-y-2">
<li>
<a className="nav-link active block pl-3 py-1.5 text-sm font-medium text-gray-900" href="#">Introduction</a>
</li>
<li>
<a className="nav-link block pl-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Installation</a>
</li>
<li>
<a className="nav-link block pl-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Quick Start</a>
</li>
</ul>
</div>
<div>
<div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Core Concepts</div>
<ul className="space-y-2">
<li>
<a className="nav-link block pl-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Architecture</a>
</li>
<li>
<a className="nav-link block pl-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Components</a>
</li>
<li>
<a className="nav-link block pl-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900" href="#">State Management</a>
</li>
<li>
<a className="nav-link block pl-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Styling</a>
</li>
</ul>
</div>
<div>
<div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Advanced</div>
<ul className="space-y-2">
<li>
<a className="nav-link block pl-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Configuration</a>
</li>
<li>
<a className="nav-link block pl-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Performance</a>
</li>
<li>
<a className="nav-link block pl-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Security</a>
</li>
<li>
<a className="nav-link block pl-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900" href="#">API Reference</a>
</li>
</ul>
</div>
</nav>
</aside>

<main className="flex-1 overflow-y-auto">
<div className="max-w-3xl mx-auto px-6 py-10">

<div className="flex items-center justify-between mb-12">
<button className="md:hidden text-gray-500" type="button">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<div className="relative w-full max-w-xs">
<input className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500" placeholder="Search docs..." type="text" />
<svg className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex items-center space-x-3">
<a className="text-gray-500 hover:text-gray-700" href="#">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
<a className="text-gray-500 hover:text-gray-700" href="#">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
<a className="text-gray-500 hover:text-gray-700" href="#">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
</div>

<article className="prose max-w-none">
<h1 className="text-3xl font-semibold mb-6 text-gray-900">Introduction</h1>
<p className="text-gray-600 mb-6">
            Welcome to our documentation. This guide will help you get familiar with our platform and its features. You'll learn how to set up your environment, implement basic functionality, and explore advanced capabilities.
          </p>
<div className="flex p-4 bg-rose-50 rounded-lg mb-8">
<div className="flex-shrink-0 text-rose-500 mt-0.5">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-3">
<h3 className="text-sm font-medium text-rose-800">Note</h3>
<div className="mt-1 text-sm text-rose-700">
                This documentation is currently in beta. Some features may change before the final release.
              </div>
</div>
</div>
<h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900">Key Concepts</h2>
<p className="text-gray-600 mb-6">
            Before diving into the implementation details, it's important to understand some key concepts that form the foundation of our platform:
          </p>
<h3 className="text-xl font-medium mt-8 mb-3 text-gray-900">Components</h3>
<p className="text-gray-600 mb-4">
            Components are the building blocks of our framework. They are reusable, self-contained pieces of code that can be composed to build complex UIs. Each component has its own state, properties, and lifecycle methods.
          </p>
<pre><code>// Example component
import {"{"} Component {"}"} from '@framework/core';

export class Button extends Component {"{"}
  render() {"{"}
    return `<button className="${this.props.variant || 'primary'}">${"{"}this.props.label{"}"}</button>`;
  {"}"}
{"}"}</code></pre>
<h3 className="text-xl font-medium mt-8 mb-3 text-gray-900">State Management</h3>
<p className="text-gray-600 mb-4">
            State management is crucial for building dynamic applications. Our framework provides a simple yet powerful state management solution that allows components to react to data changes.
          </p>
<pre><code>// Example state management
import {"{"} createStore {"}"} from '@framework/state';

const store = createStore({"{"}
  count: 0,
  increment: (state) ={">"} ({"{"} count: state.count + 1 {"}"}),
  decrement: (state) ={">"} ({"{"} count: state.count - 1 {"}"}),
{"}"});</code></pre>
<h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900">Getting Started</h2>
<p className="text-gray-600 mb-6">
            To start using our framework, you'll need to install it first. You can do this using npm or yarn:
          </p>
<pre><code>npm install @framework/core @framework/components
# or
yarn add @framework/core @framework/components</code></pre>
<p className="text-gray-600 mt-6 mb-4">
            Once installed, you can import and use it in your project:
          </p>
<pre><code>import {"{"} createApp {"}"} from '@framework/core';
import {"{"} Button, Card {"}"} from '@framework/components';

const app = createApp({"{"}
  components: {"{"} Button, Card {"}"},
{"}"});

app.mount('#app');</code></pre>
<h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900">Next Steps</h2>
<p className="text-gray-600 mb-6">
            Now that you have a basic understanding of our framework, you can explore the following topics to deepen your knowledge:
          </p>
<ul className="space-y-3 text-gray-600 list-disc pl-6 mb-8">
<li><a className="text-rose-500 hover:underline" href="#">Component Lifecycle</a> - Learn how components initialize, update, and clean up.</li>
<li><a className="text-rose-500 hover:underline" href="#">Event Handling</a> - Understand how to respond to user interactions.</li>
<li><a className="text-rose-500 hover:underline" href="#">Advanced State Management</a> - Explore techniques for managing complex application state.</li>
<li><a className="text-rose-500 hover:underline" href="#">Performance Optimization</a> - Tips and best practices for building high-performance applications.</li>
</ul>
</article>

<div className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
<a className="inline-flex items-center text-sm font-medium text-rose-500 hover:text-rose-700" href="#">
<svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
            Previous: Overview
          </a>
<a className="inline-flex items-center text-sm font-medium text-rose-500 hover:text-rose-700" href="#">
            Next: Installation
            <svg className="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>

<footer className="mt-16 pt-8 border-t border-gray-200">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="text-sm text-gray-500">
              © 2023 Framework Documentation. All rights reserved.
            </div>
<div className="flex items-center space-x-4 mt-4 md:mt-0">
<a className="text-gray-400 hover:text-gray-600" href="#">
<span className="sr-only">GitHub</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
<path clip-rule="evenodd" fillRule="evenodd"></path>
</svg>
</a>
<a className="text-gray-400 hover:text-gray-600" href="#">
<span className="sr-only">Twitter</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
<path></path>
</svg>
</a>
<a className="text-gray-400 hover:text-gray-600" href="#">
<span className="sr-only">Discord</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
<path></path>
</svg>
</a>
</div>
</div>
</footer>
</div>
</main>

<aside className="hidden lg:block w-56 border-l border-gray-200 p-6 overflow-y-auto">
<div className="sticky top-6">
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">On This Page</h3>
<nav className="space-y-2">
<a className="block text-sm font-medium text-rose-500 hover:text-rose-600" href="#">Key Concepts</a>
<div className="pl-3 space-y-2">
<a className="block text-xs text-gray-500 hover:text-gray-900" href="#">Components</a>
<a className="block text-xs text-gray-500 hover:text-gray-900" href="#">State Management</a>
</div>
<a className="block text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Getting Started</a>
<a className="block text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Next Steps</a>
</nav>
<div className="mt-12 pt-6 border-t border-gray-200">
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Contribute</h3>
<a className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900" href="#">
<svg className="h-4 w-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
            Edit this page
          </a>
</div>
<div className="mt-8 pt-6 border-t border-gray-200">
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Was this helpful?</h3>
<div className="flex space-x-3">
<button className="inline-flex items-center text-sm px-3 py-1.5 border border-gray-200 rounded-md text-gray-500 hover:text-gray-900 hover:border-gray-300" type="button">
<svg className="h-4 w-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
              Yes
            </button>
<button className="inline-flex items-center text-sm px-3 py-1.5 border border-gray-200 rounded-md text-gray-500 hover:text-gray-900 hover:border-gray-300" type="button">
<svg className="h-4 w-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
              No
            </button>
</div>
</div>
</div>
</aside>
</div>

    </>
  );
}
