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
                    colors: {
                        pastel: {
                            lightest: '#fdf6f0',
                            light: '#ffe8d9',
                            primary: '#ff8c69',
                            primaryHover: '#ff7043',
                            secondary: '#ffd8cc',
                            accent1: '#ffb5a7',
                            accent2: '#fec89a',
                            text: '#6d5d52',
                            textLight: '#938278',
                            heading: '#5c4d44'
                        }
                    },
                    fontFamily: {
                        sans: ['Nunito Sans', 'sans-serif'],
                        serif: ['Lora', 'serif']
                    }
                }
            }
        };
    


        // Scroll reveal animation
        document.addEventListener('DOMContentLoaded', function() {
            const revealElements = document.querySelectorAll('.scroll-reveal');
            
            function checkReveal() {
                revealElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementTop < windowHeight - 100) {
                        element.classList.add('active');
                    }
                });
            }
            
            // Initial check
            checkReveal();
            
            // Check on scroll
            window.addEventListener('scroll', checkReveal);
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
      

<section className="py-20 px-4 md:px-8 overflow-hidden" id="features">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-16 scroll-reveal">
<span className="inline-block px-4 py-1 bg-pastel-light text-pastel-primary rounded-full text-sm font-medium mb-4">Our Features</span>
<h2 className="font-serif text-3xl md:text-4xl font-semibold text-pastel-heading mb-4">Peaceful Digital Experience</h2>
<p className="max-w-2xl mx-auto text-pastel-textLight">Discover how our thoughtfully designed features create harmony and simplicity in your digital life.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

<div className="feature-card bg-white rounded-2xl p-8 border border-pastel-light shadow-md transition-all duration-300 scroll-reveal" style={{transitionDelay: `0.1s`}}>
<div className="w-14 h-14 bg-pastel-lightest rounded-full flex items-center justify-center mb-6">
<svg className="feature-icon w-7 h-7 text-pastel-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
</svg>
</div>
<h3 className="font-serif text-xl font-medium text-pastel-heading mb-3">Intuitive Design</h3>
<p className="text-pastel-textLight mb-4">Our clean, thoughtful interface reduces cognitive load and creates a sense of calm.</p>
<a className="inline-flex items-center text-pastel-primary font-medium hover:underline" href="#">
                        Learn more
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="feature-card bg-white rounded-2xl p-8 border border-pastel-light shadow-md transition-all duration-300 scroll-reveal" style={{transitionDelay: `0.2s`}}>
<div className="w-14 h-14 bg-pastel-lightest rounded-full flex items-center justify-center mb-6">
<svg className="feature-icon w-7 h-7 text-pastel-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
</svg>
</div>
<h3 className="font-serif text-xl font-medium text-pastel-heading mb-3">Mindful Organization</h3>
<p className="text-pastel-textLight mb-4">Effortlessly organize your content with our thoughtful categorization system.</p>
<a className="inline-flex items-center text-pastel-primary font-medium hover:underline" href="#">
                        Learn more
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="feature-card bg-white rounded-2xl p-8 border border-pastel-light shadow-md transition-all duration-300 scroll-reveal" style={{transitionDelay: `0.3s`}}>
<div className="w-14 h-14 bg-pastel-lightest rounded-full flex items-center justify-center mb-6">
<svg className="feature-icon w-7 h-7 text-pastel-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
</svg>
</div>
<h3 className="font-serif text-xl font-medium text-pastel-heading mb-3">Gentle Notifications</h3>
<p className="text-pastel-textLight mb-4">Stay informed without feeling overwhelmed with our balanced notification system.</p>
<a className="inline-flex items-center text-pastel-primary font-medium hover:underline" href="#">
                        Learn more
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 mt-20 scroll-reveal">

<div className="lg:w-1/2 relative">
<div className="relative z-10 rounded-2xl overflow-hidden shadow-lg">
<img alt="Cherry blossom trees" className="w-full h-auto" src="https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" />
</div>

<div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-pastel-accent1 opacity-20"></div>
<div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border-4 border-pastel-light opacity-40"></div>
</div>

<div className="lg:w-1/2">
<span className="inline-block px-4 py-1 bg-pastel-light text-pastel-primary rounded-full text-sm font-medium mb-4">Featured Highlight</span>
<h2 className="font-serif text-3xl font-semibold text-pastel-heading mb-4">Create Your Serene Digital Space</h2>
<p className="text-pastel-textLight mb-6">Our platform helps you build a personalized digital environment that promotes focus, creativity, and well-being. Customize your workspace to reflect your unique style and needs.</p>

<div className="space-y-4 mb-8">
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<svg className="w-5 h-5 text-pastel-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
</div>
<div className="ml-3">
<h4 className="text-pastel-heading font-medium">Customizable Themes</h4>
<p className="text-pastel-textLight text-sm">Choose from a variety of calming color palettes and layouts.</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<svg className="w-5 h-5 text-pastel-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
</div>
<div className="ml-3">
<h4 className="text-pastel-heading font-medium">Focus Timer</h4>
<p className="text-pastel-textLight text-sm">Enhance productivity with gentle, timed work sessions.</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<svg className="w-5 h-5 text-pastel-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
</div>
<div className="ml-3">
<h4 className="text-pastel-heading font-medium">Ambient Soundscapes</h4>
<p className="text-pastel-textLight text-sm">Immerse yourself in calming background sounds for better concentration.</p>
</div>
</div>
</div>
<a className="inline-block px-6 py-3 bg-pastel-primary text-white font-semibold rounded-full shadow transition-all duration-300 hover:bg-pastel-primaryHover hover:shadow-lg" href="#">
                        Explore Features
                    </a>
</div>
</div>
</div>
</section>


    </>
  );
}
