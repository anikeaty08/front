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
      
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Add focus rings for accessibility
        document.addEventListener('DOMContentLoaded', function() {
            const focusableElements = document.querySelectorAll('a, button');
            focusableElements.forEach(el => {
                el.classList.add('focus:outline-2', 'focus:outline-indigo-500', 'focus:outline-offset-2');
            });
        });
    
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
      
<footer className="relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-blue-500/10"></div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-20"></div>
<div className="relative max-w-7xl mx-auto px-4 md:px-8 pb-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="fade-in lg:col-span-1">
<div className="flex items-center mb-6">
<div className="w-10 h-10 rounded-xl glass-effect flex items-center justify-center mr-3 float-animation">
<i className="w-5 h-5 text-purple-400" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-display font-light text-white/85 tracking-tight" style={{fontFamily: '\'Manrope\', sans-serif'}}>
                            Australian Web <span className="gradient-text">Experts</span>
</h3>
</div>
<p className="text-white/70 mb-6 leading-relaxed">
                        Crafting exceptional digital experiences for Australian businesses. Trusted by 350+ business owners nationwide.
                    </p>
<div className="gradient-border hover-glow hover-lift shine-effect">
<div className="gradient-border-inner px-6 py-3">
<a className="text-white/85 font-medium flex items-center" href="#">
<span>Start Your Project</span>
<i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="fade-in fade-in-delay-1">
<h4 className="text-white/85 font-display font-light text-lg mb-6 tracking-tight" style={{fontFamily: '\'Manrope\', sans-serif'}}>Services</h4>
<ul className="space-y-4">
<li><a className="text-white/70 hover:text-white/85 hover:translate-x-1 transition-all duration-300 flex items-center group" href="#">
<i className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" data-lucide="globe"></i>
                            Web Development
                        </a></li>
<li><a className="text-white/70 hover:text-white/85 hover:translate-x-1 transition-all duration-300 flex items-center group" href="#">
<i className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" data-lucide="smartphone"></i>
                            Mobile Applications
                        </a></li>
<li><a className="text-white/70 hover:text-white/85 hover:translate-x-1 transition-all duration-300 flex items-center group" href="#">
<i className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" data-lucide="search"></i>
                            SEO Optimisation
                        </a></li>
<li><a className="text-white/70 hover:text-white/85 hover:translate-x-1 transition-all duration-300 flex items-center group" href="#">
<i className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" data-lucide="trending-up"></i>
                            Digital Marketing
                        </a></li>
</ul>
</div>

<div className="fade-in fade-in-delay-2">
<h4 className="text-white/85 font-display font-light text-lg mb-6 tracking-tight" style={{fontFamily: '\'Manrope\', sans-serif'}}>Company</h4>
<ul className="space-y-4">
<li><a className="text-white/70 hover:text-white/85 hover:translate-x-1 transition-all duration-300 flex items-center group" href="#">
<i className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" data-lucide="info"></i>
                            About Us
                        </a></li>
<li><a className="text-white/70 hover:text-white/85 hover:translate-x-1 transition-all duration-300 flex items-center group" href="#">
<i className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" data-lucide="briefcase"></i>
                            Case Studies
                        </a></li>
<li><a className="text-white/70 hover:text-white/85 hover:translate-x-1 transition-all duration-300 flex items-center group" href="#">
<i className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" data-lucide="users"></i>
                            Careers
                        </a></li>
<li><a className="text-white/70 hover:text-white/85 hover:translate-x-1 transition-all duration-300 flex items-center group" href="#">
<i className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" data-lucide="mail"></i>
                            Contact
                        </a></li>
</ul>
</div>

<div className="fade-in fade-in-delay-3">
<h4 className="text-white/85 font-display font-light text-lg mb-6 tracking-tight" style={{fontFamily: '\'Manrope\', sans-serif'}}>Connect</h4>
<div className="space-y-4 mb-6">
<a className="text-white/70 hover:text-white/85 hover:translate-x-1 transition-all duration-300 flex items-center group" href="#">
<i className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" data-lucide="phone"></i>
                            +61 2 8123 4567
                        </a>
<a className="text-white/70 hover:text-white/85 hover:translate-x-1 transition-all duration-300 flex items-center group" href="#">
<i className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" data-lucide="mail"></i>
                            hello@auswebexperts.com.au
                        </a>
<div className="text-white/70 flex items-center">
<i className="w-4 h-4 mr-3 opacity-60" data-lucide="map-pin"></i>
                            Sydney, Australia
                        </div>
</div>

<div className="flex space-x-3">
<a className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center hover-lift hover-glow group" href="#">
<i className="w-4 h-4 text-white/70 group-hover:text-white/85" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center hover-lift hover-glow group" href="#">
<i className="w-4 h-4 text-white/70 group-hover:text-white/85" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center hover-lift hover-glow group" href="#">
<i className="w-4 h-4 text-white/70 group-hover:text-white/85" data-lucide="github"></i>
</a>
</div>
</div>
</div>

<div className="fade-in fade-in-delay-4">
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
<div className="text-white/55 text-sm">
                        © 2024 Australian Web Experts. All rights reserved. ABN 12 345 678 901
                    </div>
<div className="flex space-x-6 text-sm">
<a className="text-white/55 hover:text-white/70 transition-colors" href="#">Privacy Policy</a>
<a className="text-white/55 hover:text-white/70 transition-colors" href="#">Terms of Service</a>
<a className="text-white/55 hover:text-white/70 transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
</footer>


    </>
  );
}
