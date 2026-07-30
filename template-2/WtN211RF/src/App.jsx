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
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
        },
      },
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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
<div className="container mx-auto px-4 py-4 flex justify-between items-center">
<a className="text-xl font-semibold tracking-tight" href="#">
<span className="text-blue-400">Alex</span>Design
      </a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#work">Work</a>
<a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#about">About</a>
<a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#contact">Contact</a>
<button className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          Hire Me
        </button>
</div>
<button className="md:hidden text-gray-300">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</nav>

<main className="container mx-auto pt-24 pb-16 px-4">

<section className="py-16 md:py-24">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
<div className="lg:col-span-2">
<span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 text-xs font-medium rounded-full mb-4">Product Designer</span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Creating digital experiences that matter</h1>
<p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">I design and build digital products that help businesses connect with their customers in meaningful ways.</p>
<div className="flex flex-wrap gap-4">
<a className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors" href="#work">
              View My Work
            </a>
<a className="px-6 py-3 border border-gray-700 hover:border-blue-500 text-gray-200 font-medium rounded-lg transition-colors" href="#contact">
              Get in Touch
            </a>
</div>
</div>
<div className="relative">
<div className="aspect-square bg-gray-800 rounded-xl overflow-hidden">
<img alt="Designer portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
</div>
<div className="absolute -bottom-4 -left-4 bg-gray-800 p-4 rounded-lg shadow-lg">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
<span className="text-sm font-medium">Available for projects</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="work">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
<div className="lg:col-span-2">
<h2 className="text-3xl font-bold mb-8">Selected Work</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="portfolio-item bg-gray-800 rounded-xl overflow-hidden">
<div className="aspect-video bg-gray-700">
<img alt="Project 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
</div>
<div className="p-5">
<span className="text-xs font-medium text-blue-400">UX DESIGN</span>
<h3 className="text-xl font-bold mt-1 mb-2">Finance Dashboard</h3>
<p className="text-sm text-gray-400 mb-4">A comprehensive analytics platform for financial data visualization.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-400 hover:underline" href="#">
                  View Case Study
                  <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="portfolio-item bg-gray-800 rounded-xl overflow-hidden">
<div className="aspect-video bg-gray-700">
<img alt="Project 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
</div>
<div className="p-5">
<span className="text-xs font-medium text-blue-400">MOBILE APP</span>
<h3 className="text-xl font-bold mt-1 mb-2">Wellness Tracker</h3>
<p className="text-sm text-gray-400 mb-4">A health monitoring app with personalized insights and goals.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-400 hover:underline" href="#">
                  View Case Study
                  <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</div>
</div>

<div className="lg:sticky lg:top-24 lg:self-start">
<div className="bg-gray-800/50 rounded-xl p-6">
<h3 className="text-xl font-bold mb-4">Services</h3>
<ul className="space-y-3">
<li><a className="text-gray-300 hover:text-blue-400 transition-colors" href="#">UX Design</a></li>
<li><a className="text-gray-300 hover:text-blue-400 transition-colors" href="#">UI Design</a></li>
<li><a className="text-gray-300 hover:text-blue-400 transition-colors" href="#">Brand Identity</a></li>
<li><a className="text-gray-300 hover:text-blue-400 transition-colors" href="#">Web Development</a></li>
<li><a className="text-gray-300 hover:text-blue-400 transition-colors" href="#">Design Systems</a></li>
</ul>
</div>
<div className="mt-6 bg-blue-900/20 rounded-xl p-6">
<h3 className="text-xl font-bold mb-4">Let's work together</h3>
<p className="text-sm text-gray-400 mb-4">Looking for a designer to help with your next project? I'm currently available for freelance work.</p>
<a className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-center font-medium rounded-lg transition-colors" href="#contact">
              Contact Me
            </a>
</div>
</div>
</div>
</section>

<section className="py-16" id="about">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
<div className="lg:col-span-2">
<h2 className="text-3xl font-bold mb-8">About Me</h2>
<div className="space-y-4 text-gray-400">
<p>I'm a product designer with over 8 years of experience creating digital experiences for startups and established companies alike. My approach combines user-centered design principles with strategic business thinking to deliver solutions that are both beautiful and effective.</p>
<p>Having worked with clients across various industries including finance, healthcare, and education, I bring a diverse perspective to every project.</p>
</div>
</div>
</div>
</section>

<section className="py-16" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
<div className="lg:col-span-2">
<h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
<form className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="md:col-span-2">
<label className="block text-sm font-medium mb-2" htmlFor="name">Your Name</label>
<input className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" id="name" placeholder="John Doe" type="text" />
</div>
<div>
<label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" id="email" placeholder="john@example.com" type="email" />
</div>
<div>
<label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
<input className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" id="subject" placeholder="Project Inquiry" type="text" />
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" id="message" placeholder="Tell me about your project..." rows="5"></textarea>
</div>
<div className="md:col-span-2">
<button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors" type="submit">
                Send Message
              </button>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-gray-800/50 py-12">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="mb-6 md:mb-0">
<a className="text-xl font-semibold tracking-tight" href="#">
<span className="text-blue-400">Alex</span>Design
          </a>
<p className="mt-2 text-sm text-gray-400">Creating digital experiences since 2015</p>
</div>
<div className="flex space-x-6">
<a className="text-gray-400 hover:text-blue-400" href="#">
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
<path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd"></path>
</svg>
</a>
<a className="text-gray-400 hover:text-blue-400" href="#">
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
<a className="text-gray-400 hover:text-blue-400" href="#">
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
</svg>
</a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-gray-700 text-center">
<p className="text-sm text-gray-400">© 2023 AlexDesign. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
