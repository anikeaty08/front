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
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'float-delayed': 'float 6s ease-in-out 2s infinite',
                        'fade-in-up': 'fadeInUp 1s ease-out forwards',
                        'fade-in-right': 'fadeInRight 1s ease-out forwards',
                        'fade-in-left': 'fadeInLeft 1s ease-out forwards',
                        'fade-in': 'fadeIn 1.2s ease-out forwards',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                        fadeInUp: {
                            '0%': { opacity: '0', transform: 'translateY(20px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                        fadeInRight: {
                            '0%': { opacity: '0', transform: 'translateX(-20px)' },
                            '100%': { opacity: '1', transform: 'translateX(0)' },
                        },
                        fadeInLeft: {
                            '0%': { opacity: '0', transform: 'translateX(20px)' },
                            '100%': { opacity: '1', transform: 'translateX(0)' },
                        },
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' },
                        },
                    },
                    boxShadow: {
                        'pastel': '0 6px 12px rgba(180, 160, 150, 0.1)',
                        'pastel-lg': '0 10px 25px rgba(180, 160, 150, 0.15)',
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
      

<nav className="w-full py-4 px-4 md:px-8 opacity-0 animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
<div className="max-w-7xl mx-auto flex justify-between items-center">
<a className="flex items-center space-x-2" href="#">
<div className="w-10 h-10 rounded-full bg-pastel-primary flex items-center justify-center text-white font-serif font-semibold text-xl">S</div>
<span className="font-serif text-pastel-heading text-xl">Serene</span>
</a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-pastel-text hover:text-pastel-primary transition-colors" href="#">Home</a>
<a className="text-pastel-text hover:text-pastel-primary transition-colors" href="#">Features</a>
<a className="text-pastel-text hover:text-pastel-primary transition-colors" href="#">About</a>
<a className="text-pastel-text hover:text-pastel-primary transition-colors" href="#">Contact</a>
<a className="px-5 py-2 bg-white border border-pastel-light rounded-full text-pastel-primary hover:bg-pastel-light transition-all" href="#">Sign In</a>
</div>
<button className="md:hidden text-pastel-text">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-pastel-accent1 opacity-20 blur-3xl blob-animation"></div>
<div className="absolute bottom-40 left-[15%] w-80 h-80 rounded-full bg-pastel-accent2 opacity-20 blur-3xl blob-animation" style={{animationDelay: '2s'}}></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-pastel-secondary opacity-10 blur-3xl blob-animation" style={{animationDelay: '4s'}}></div>
</div>
<div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="max-w-xl">
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-pastel-heading leading-tight opacity-0 animate-fade-in-right" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                        Find Peace in <span className="text-pastel-primary">Digital</span> Spaces
                    </h1>
<p className="mt-6 text-lg text-pastel-textLight opacity-0 animate-fade-in-right" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                        Create a harmonious online experience with our thoughtfully designed platform. Simplify your digital life and focus on what truly matters.
                    </p>
<div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in-right" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}>
<a className="btn-hover-effect px-8 py-3 bg-pastel-primary text-white font-semibold rounded-full shadow-pastel transition-all duration-300 hover:bg-pastel-primaryHover hover:transform hover:-translate-y-1 text-center" href="#">
                            Get Started
                        </a>
<a className="px-8 py-3 bg-white border border-pastel-light text-pastel-text font-semibold rounded-full hover:bg-pastel-light transition-all duration-300 flex items-center justify-center space-x-2" href="#">
<span>Watch Demo</span>
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" fill-rule="evenodd"></path>
</svg>
</a>
</div>
<div className="mt-12 flex items-center opacity-0 animate-fade-in" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
<div className="flex -space-x-2">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/43.jpg"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/45.jpg"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/46.jpg"/>
</div>
<div className="ml-4">
<div className="flex items-center">
<svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-sm text-pastel-textLight">Trusted by over <span className="font-semibold">5,000+</span> users</p>
</div>
</div>
</div>

<div className="relative opacity-0 animate-fade-in-left" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
<div className="relative z-10 bg-white p-6 rounded-2xl shadow-pastel-lg border border-pastel-light max-w-md mx-auto lg:ml-auto animate-float">
<img alt="Peaceful workspace" className="w-full h-auto rounded-xl" src="https://images.unsplash.com/photo-1559762705-2123aa9b467f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="mt-4 flex justify-between items-center">
<div>
<h3 className="font-serif text-lg font-medium text-pastel-heading">Mindful Workspace</h3>
<p className="text-sm text-pastel-textLight">Create your perfect environment</p>
</div>
<button className="w-10 h-10 rounded-full bg-pastel-light flex items-center justify-center text-pastel-primary hover:bg-pastel-secondary transition-colors">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path>
</svg>
</button>
</div>
</div>

<div className="absolute top-16 -left-5 w-20 h-20 rounded-full bg-pastel-accent1 opacity-30 animate-float-delayed"></div>
<div className="absolute -bottom-8 right-20 w-16 h-16 rounded-full bg-pastel-accent2 opacity-30 animate-float" style={{animationDelay: '3s'}}></div>
<div className="absolute bottom-32 -right-10 w-24 h-24 rounded-full border-4 border-pastel-light opacity-50"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 opacity-0 animate-fade-in" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
<svg className="w-full" viewbox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
<path d="M0,128L60,117.3C120,107,240,85,360,90.7C480,96,600,128,720,133.3C840,139,960,117,1080,106.7C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="#ffffff" fillOpacity="1"></path>
</svg>
</div>
</section>

    </>
  );
}
