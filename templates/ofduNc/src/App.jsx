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
      
<section className="container mx-auto px-6 pt-16 pb-24 md:pt-28 md:pb-32">
<div className="flex flex-col items-center justify-center mb-16">
<div className="max-w-4xl">
<h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8 text-center">
          About <span className="text-white">Codeon</span>
</h1>
<p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 text-center">
          We're on a mission to help developers build better applications faster, with less code and more creativity.
        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
<div className="card-container">
<div className="card-content p-8">
<h2 className="text-2xl font-medium mb-4">Our Story</h2>
<p className="text-gray-400 mb-4">
            Founded in 2021, Codeon was born from a simple frustration: building web applications was taking too much time, with too much boilerplate code.
          </p>
<p className="text-gray-400">
            Our team of developers and designers came together with a vision to create a platform that would simplify the development process while maintaining flexibility and performance.
          </p>
</div>
</div>
<div className="card-container">
<div className="card-content p-8">
<h2 className="text-2xl font-medium mb-4">Our Mission</h2>
<p className="text-gray-400 mb-4">
            We believe that developers should spend their time solving unique problems, not rewriting the same code patterns over and over again.
          </p>
<p className="text-gray-400">
            Codeon empowers developers to focus on what matters: creating exceptional user experiences and solving real business problems.
          </p>
</div>
</div>
</div>
<div className="mb-24">
<h2 className="text-3xl font-medium text-center mb-12">Our Values</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
<div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium mb-2">Innovation</h3>
<p className="text-gray-400">We constantly push the boundaries of what's possible in web development.</p>
</div>
<div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
<div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium mb-2">Security</h3>
<p className="text-gray-400">We prioritize the security and reliability of all applications built with our platform.</p>
</div>
<div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
<div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-medium mb-2">Community</h3>
<p className="text-gray-400">We foster a supportive community of developers who share knowledge and best practices.</p>
</div>
</div>
</div>
<div className="mb-24">
<h2 className="text-3xl font-medium text-center mb-4">Meet Our Team</h2>
<p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">The talented individuals behind Codeon who are passionate about creating the best development tools for our community.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="team-member-card bg-gray-900/20 rounded-lg overflow-hidden">
<div className="img-gradient-mask">
<img alt="Alex Johnson" className="w-full h-72 object-cover" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="p-5">
<h3 className="text-xl font-medium">Alex Johnson</h3>
<div className="role-tag">Founder &amp; CEO</div>
<p className="text-gray-400 text-sm mt-3">Visionary leader with 15+ years in software development and product management.</p>
</div>
<div className="overlay">
<div className="social-links text-center">
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fab fa-github"></i></a>
<a href="#"><i className="fas fa-envelope"></i></a>
</div>
</div>
</div>
<div className="team-member-card bg-gray-900/20 rounded-lg overflow-hidden">
<div className="img-gradient-mask">
<img alt="Sarah Chen" className="w-full h-72 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="p-5">
<h3 className="text-xl font-medium">Sarah Chen</h3>
<div className="role-tag">CTO</div>
<p className="text-gray-400 text-sm mt-3">Engineering leader with expertise in scalable architecture and cloud infrastructure.</p>
</div>
<div className="overlay">
<div className="social-links text-center">
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fab fa-github"></i></a>
<a href="#"><i className="fas fa-envelope"></i></a>
</div>
</div>
</div>
<div className="team-member-card bg-gray-900/20 rounded-lg overflow-hidden">
<div className="img-gradient-mask">
<img alt="David Kim" className="w-full h-72 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="p-5">
<h3 className="text-xl font-medium">David Kim</h3>
<div className="role-tag">Lead Developer</div>
<p className="text-gray-400 text-sm mt-3">Full-stack developer with a passion for creating elegant solutions to complex problems.</p>
</div>
<div className="overlay">
<div className="social-links text-center">
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fab fa-github"></i></a>
<a href="#"><i className="fas fa-envelope"></i></a>
</div>
</div>
</div>
<div className="team-member-card bg-gray-900/20 rounded-lg overflow-hidden">
<div className="img-gradient-mask">
<img alt="Emma Wilson" className="w-full h-72 object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="p-5">
<h3 className="text-xl font-medium">Emma Wilson</h3>
<div className="role-tag">UX Designer</div>
<p className="text-gray-400 text-sm mt-3">Award-winning designer focused on creating intuitive and delightful user experiences.</p>
</div>
<div className="overlay">
<div className="social-links text-center">
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fab fa-dribbble"></i></a>
<a href="#"><i className="fas fa-envelope"></i></a>
</div>
</div>
</div>
</div>
</div>
<div className="card-container max-w-3xl mx-auto">
<div className="card-content p-8 text-center">
<h2 className="text-2xl font-medium mb-6">Ready to join us?</h2>
<p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Start building better applications today with Codeon's powerful development platform.
        </p>
<a className="inline-block px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all button-glow" href="#">
          Get started
        </a>
</div>
</div>
</section>

    </>
  );
}
