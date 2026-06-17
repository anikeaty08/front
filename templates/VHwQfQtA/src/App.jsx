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
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Features</a>
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

<section className="py-20">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row items-center">
<div className="md:w-1/2 md:pr-12">
<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Design system for your next SaaS project</h1>
<p className="text-xl text-gray-600 mb-8">A professional kit that comes with ready-to-use components and templates to build your next product with ease.</p>
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700" href="#">
              Get started
            </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-indigo-600 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50" href="#">
              Live demo
            </a>
</div>
</div>
<div className="md:w-1/2 mt-12 md:mt-0">
<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25"></div>
<div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
<img alt="Dashboard Preview" className="w-full" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold mb-4">Everything you need to build modern UI</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">Angle provides all the building blocks you need to create beautiful interfaces.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-lg shadow-sm">
<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
<i className="fas fa-paint-brush text-indigo-600 text-xl"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Beautifully Crafted</h3>
<p className="text-gray-600">Our components are designed with attention to detail and follow the latest design trends.</p>
</div>
<div className="bg-white p-8 rounded-lg shadow-sm">
<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
<i className="fas fa-code text-indigo-600 text-xl"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Developer Friendly</h3>
<p className="text-gray-600">Clean code that's easy to understand and customize to match your project needs.</p>
</div>
<div className="bg-white p-8 rounded-lg shadow-sm">
<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
<i className="fas fa-bolt text-indigo-600 text-xl"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Fast Implementation</h3>
<p className="text-gray-600">Save development time with our pre-built components and templates.</p>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold mb-4">Trusted by developers worldwide</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">See what our customers have to say about their experience.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
<div className="flex items-center mb-6">
<div className="text-yellow-400 flex">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
</div>
</div>
<p className="text-gray-600 mb-6">"Angle has saved us countless hours of work. The components are well designed and the documentation is excellent."</p>
<div className="flex items-center">
<img alt="Customer" className="w-10 h-10 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/32.jpg"/>
<div>
<h4 className="font-medium">Sarah Johnson</h4>
<p className="text-sm text-gray-500">Frontend Developer</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
<div className="flex items-center mb-6">
<div className="text-yellow-400 flex">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
</div>
</div>
<p className="text-gray-600 mb-6">"The quality and flexibility of Angle components allowed us to launch our MVP in just two weeks."</p>
<div className="flex items-center">
<img alt="Customer" className="w-10 h-10 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/46.jpg"/>
<div>
<h4 className="font-medium">Michael Chen</h4>
<p className="text-sm text-gray-500">Product Manager</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
<div className="flex items-center mb-6">
<div className="text-yellow-400 flex">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
</div>
</div>
<p className="text-gray-600 mb-6">"As a designer, I appreciate the attention to detail in Angle. It makes implementing my designs a breeze."</p>
<div className="flex items-center">
<img alt="Customer" className="w-10 h-10 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<div>
<h4 className="font-medium">Emily Rodriguez</h4>
<p className="text-sm text-gray-500">UI/UX Designer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-indigo-600">
<div className="container mx-auto px-6 text-center">
<h2 className="text-3xl font-bold text-white mb-6">Ready to build your next project?</h2>
<p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">Join thousands of developers and designers who are already using Angle to create beautiful user interfaces.</p>
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
