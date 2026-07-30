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
      

<header className="border-b border-gray-100">
<div className="container mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center">
<a className="text-2xl font-bold text-indigo-600" href="#">angle</a>
<nav className="hidden ml-10 md:flex space-x-8">
<a className="text-sm font-medium text-indigo-600 border-b-2 border-indigo-600" href="#">Features</a>
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Components</a>
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Pricing</a>
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Documentation</a>
</nav>
</div>
<div className="flex items-center space-x-4">
<a className="hidden md:inline-block text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Sign in</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700" href="#">Get started</a>
</div>
</div>
</div>
</header>

<section className="bg-gray-50 py-20">
<div className="container mx-auto px-6">
<div className="text-center max-w-3xl mx-auto">
<h1 className="text-4xl font-bold mb-6">Powerful features to build better products</h1>
<p className="text-xl text-gray-600 mb-10">Everything you need to create beautiful user interfaces and deliver exceptional user experiences.</p>
</div>
</div>
</section>

<section className="py-12 border-b border-gray-100">
<div className="container mx-auto px-6">
<div className="flex flex-wrap justify-center gap-4">
<a className="px-5 py-2 bg-indigo-50 text-indigo-600 rounded-full font-medium text-sm hover:bg-indigo-100" href="#ui-components">UI Components</a>
<a className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-200" href="#design-system">Design System</a>
<a className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-200" href="#templates">Templates</a>
<a className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-200" href="#customization">Customization</a>
<a className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-200" href="#developer-tools">Developer Tools</a>
</div>
</div>
</section>

<section className="py-20" id="ui-components">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="lg:w-1/2">
<h2 className="text-3xl font-bold mb-6">Comprehensive UI Components</h2>
<p className="text-gray-600 mb-8">Over 200+ professionally designed components that work seamlessly together to help you build robust interfaces.</p>
<div className="space-y-4">
<div className="flex items-start">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-4">
<i className="fas fa-check text-green-600 text-sm"></i>
</div>
<div>
<h3 className="font-medium">Responsive by design</h3>
<p className="text-gray-600 text-sm">Every component adapts perfectly to any screen size.</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-4">
<i className="fas fa-check text-green-600 text-sm"></i>
</div>
<div>
<h3 className="font-medium">Accessibility built-in</h3>
<p className="text-gray-600 text-sm">WCAG 2.1 compliant components with proper ARIA attributes.</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-4">
<i className="fas fa-check text-green-600 text-sm"></i>
</div>
<div>
<h3 className="font-medium">Dark mode support</h3>
<p className="text-gray-600 text-sm">All components support light and dark modes out of the box.</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2">
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
<i className="fas fa-layer-group text-indigo-600"></i>
</div>
<h3 className="font-medium mb-1">Navigation</h3>
<p className="text-sm text-gray-600">15+ components</p>
</div>
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
<i className="fas fa-table-cells text-indigo-600"></i>
</div>
<h3 className="font-medium mb-1">Layout</h3>
<p className="text-sm text-gray-600">20+ components</p>
</div>
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
<i className="fas fa-input-text text-indigo-600"></i>
</div>
<h3 className="font-medium mb-1">Forms</h3>
<p className="text-sm text-gray-600">25+ components</p>
</div>
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
<i className="fas fa-bell text-indigo-600"></i>
</div>
<h3 className="font-medium mb-1">Feedback</h3>
<p className="text-sm text-gray-600">18+ components</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50" id="design-system">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row-reverse items-center gap-12">
<div className="lg:w-1/2">
<h2 className="text-3xl font-bold mb-6">Complete Design System</h2>
<p className="text-gray-600 mb-8">A thoughtfully crafted design system that ensures consistency across your product.</p>
<div className="space-y-6">
<div>
<h3 className="font-medium mb-3">Color System</h3>
<div className="flex space-x-2">
<div className="w-8 h-8 rounded-full bg-indigo-600"></div>
<div className="w-8 h-8 rounded-full bg-indigo-500"></div>
<div className="w-8 h-8 rounded-full bg-indigo-400"></div>
<div className="w-8 h-8 rounded-full bg-indigo-300"></div>
<div className="w-8 h-8 rounded-full bg-indigo-200"></div>
<div className="w-8 h-8 rounded-full bg-indigo-100"></div>
</div>
</div>
<div>
<h3 className="font-medium mb-3">Typography</h3>
<div className="space-y-2">
<p className="text-3xl font-bold">Heading 1</p>
<p className="text-2xl font-bold">Heading 2</p>
<p className="text-xl font-medium">Heading 3</p>
<p className="text-base">Body Text</p>
</div>
</div>
<div>
<h3 className="font-medium mb-3">Spacing</h3>
<div className="flex items-end space-x-2">
<div className="h-4 w-4 bg-gray-300"></div>
<div className="h-6 w-6 bg-gray-300"></div>
<div className="h-8 w-8 bg-gray-300"></div>
<div className="h-10 w-10 bg-gray-300"></div>
<div className="h-12 w-12 bg-gray-300"></div>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2">
<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25"></div>
<div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
<img alt="Design System" className="w-full" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" />
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" id="templates">
<div className="container mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-bold mb-6">Ready-to-use Templates</h2>
<p className="text-xl text-gray-600">Jumpstart your project with our pre-built page templates for common use cases.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition">
<div className="aspect-video bg-gray-100 relative overflow-hidden">
<img alt="Dashboard Template" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
</div>
<div className="p-6">
<h3 className="font-medium text-lg mb-2">Dashboard</h3>
<p className="text-gray-600 mb-4">Complete admin dashboard with analytics, charts, and data tables.</p>
<a className="text-indigo-600 font-medium text-sm hover:text-indigo-700" href="#">View template →</a>
</div>
</div>
<div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition">
<div className="aspect-video bg-gray-100 relative overflow-hidden">
<img alt="Landing Page Template" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" />
</div>
<div className="p-6">
<h3 className="font-medium text-lg mb-2">Landing Page</h3>
<p className="text-gray-600 mb-4">Conversion-focused landing page with hero, features, and CTA sections.</p>
<a className="text-indigo-600 font-medium text-sm hover:text-indigo-700" href="#">View template →</a>
</div>
</div>
<div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition">
<div className="aspect-video bg-gray-100 relative overflow-hidden">
<img alt="Authentication Template" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2136&q=80" />
</div>
<div className="p-6">
<h3 className="font-medium text-lg mb-2">Authentication</h3>
<p className="text-gray-600 mb-4">Sign in, sign up, password reset, and account verification pages.</p>
<a className="text-indigo-600 font-medium text-sm hover:text-indigo-700" href="#">View template →</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-indigo-600">
<div className="container mx-auto px-6 text-center">
<h2 className="text-3xl font-bold text-white mb-6">Ready to transform your development workflow?</h2>
<p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">Start building beautiful interfaces in minutes instead of hours.</p>
<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-indigo-600 bg-white rounded-md shadow-sm hover:bg-gray-50" href="#">
          Get started
        </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-700 rounded-md shadow-sm hover:bg-indigo-800" href="#">
          View documentation
        </a>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white py-12">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h3 className="text-lg font-semibold mb-4">Product</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">Features</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Pricing</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Changelog</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Roadmap</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Resources</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">Documentation</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Tutorials</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Blog</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Support</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Company</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">About</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Careers</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Contact</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Partners</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Legal</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">Privacy</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Terms</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">License</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400">© 2023 Angle. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-twitter"></i></a>
<a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-github"></i></a>
<a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-linkedin"></i></a>
<a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-dribbble"></i></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
