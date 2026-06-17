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
                        primary: '#FF3B9A',
                        secondary: '#7928CA',
                        dark: '#111827',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                }
            }
        }
    


        // Initialize Vanta.js BIRDS effect for hero 3D
        VANTA.BIRDS({
            el: "#hero-3d",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xf5f3ff,
            color1: 0xff3b9a,
            color2: 0x7928ca,
            birdSize: 1.50,
            wingSpan: 20.00,
            speedLimit: 4.00,
            separation: 60.00,
            quantity: 3.00
        });
        
        // Initialize Vanta.js for cards
        VANTA.BIRDS({
            el: "#card-bg-1",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xf5f3ff,
            color1: 0xa78bfa,
            color2: 0xc084fc,
            birdSize: 1.00,
            quantity: 2.00,
            speedLimit: 2.00
        });
        
        VANTA.BIRDS({
            el: "#card-bg-2",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xf0f9ff,
            color1: 0x60a5fa,
            color2: 0x93c5fd,
            birdSize: 1.00,
            quantity: 2.00,
            speedLimit: 2.00
        });
        
        VANTA.BIRDS({
            el: "#card-bg-3",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xfdf2f8,
            color1: 0xec4899,
            color2: 0xf472b6,
            birdSize: 1.00,
            quantity: 2.00,
            speedLimit: 2.00
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
      
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<header className="flex items-center justify-between py-6">
<div className="flex items-center">
<div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
<div className="h-2 w-2 rounded-full bg-white"></div>
</div>
<span className="ml-2 text-xl font-semibold">Serendipity</span>
</div>
<div className="flex items-center space-x-8">
<nav className="hidden md:flex space-x-8">
<a className="text-gray-800 hover:text-primary font-medium" href="#">Home</a>
<a className="text-gray-800 hover:text-primary font-medium" href="#">Browse</a>
<a className="text-gray-800 hover:text-primary font-medium" href="#">Updates</a>
<a className="text-gray-800 hover:text-primary font-medium" href="#">Pricing</a>
</nav>
<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300">
                    Sign up
                </button>
</div>
</header>

<div className="mt-16 grid grid-cols-1 lg:grid-cols-1 gap-12 relative">
<div className="rounded-2xl overflow-hidden h-[600px] relative" id="hero-3d">
<div className="absolute inset-0 flex items-center justify-center">
<div className="max-w-3xl mx-auto text-center px-6 z-10">
<h1 className="text-5xl md:text-6xl font-bold leading-tight">
<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Imagine</span>
<span className="text-gray-800">with</span>
<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Serendipity</span>
</h1>
<p className="mt-6 text-lg text-gray-700 leading-relaxed backdrop-blur-sm bg-white/30 p-4 rounded-lg">
                            Join our community of creators on Serendipity. Collaborate on 
                            storytelling, bring your text descriptions to life, and explore 
                            the possibilities of AI-generated imagery in a supportive environment.
                        </p>
<button className="mt-8 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            Generate Images
                        </button>
</div>
</div>

<div className="absolute top-10 right-10 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 w-64 z-20">
<h3 className="font-semibold text-lg mb-4">Updates</h3>
<div className="space-y-4">
<div className="flex items-start">
<div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-3">
<p className="text-sm font-medium">Upload Image</p>
<p className="text-xs text-gray-500">New Feature – April 21, 2023</p>
</div>
</div>
<div className="flex items-start">
<div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-3">
<p className="text-sm font-medium">Permutation</p>
<p className="text-xs text-gray-500">New Feature – April 19, 2023</p>
</div>
</div>
<div className="flex items-start">
<div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-3">
<p className="text-sm font-medium">Status Page</p>
<p className="text-xs text-gray-500">New Feature – April 16, 2023</p>
</div>
</div>
</div>
<button className="mt-6 w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-lg border border-gray-200 flex items-center justify-center">
                        Join Discord
                        <svg className="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="mt-24 mb-16 bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white/70 rounded-xl p-6 shadow-sm relative overflow-hidden h-[300px]">
<div className="absolute inset-0 -z-10" id="card-bg-1"></div>
<div className="relative z-10">
<h3 className="text-lg font-bold">Using Discord</h3>
<p className="text-sm font-medium text-gray-700 mt-1">Mastering the Art of Prompt Writing</p>
<p className="text-sm text-gray-600 mt-3">Learn how to craft clear, effective prompts and use reference images for better visual representation in your creations.</p>
<button className="mt-4 bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-lg border border-gray-200 shadow-sm">
                            Join Discord
                        </button>
</div>
</div>

<div className="bg-white/70 rounded-xl p-6 shadow-sm relative overflow-hidden h-[300px]">
<div className="absolute inset-0 -z-10" id="card-bg-2"></div>
<div className="relative z-10">
<h3 className="text-lg font-bold">Getting Started</h3>
<p className="text-sm font-medium text-gray-700 mt-1">Streamlining Collaborative Workflows</p>
<p className="text-sm text-gray-600 mt-3">Discover how to use our platform to easily generate designs and artwork for your projects and collaborate with others.</p>
<button className="mt-4 bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-lg border border-gray-200 shadow-sm">
                            Explore Now
                        </button>
</div>
</div>

<div className="bg-white/70 rounded-xl p-6 shadow-sm relative overflow-hidden h-[300px]">
<div className="absolute inset-0 -z-10" id="card-bg-3"></div>
<div className="relative z-10">
<h3 className="text-lg font-bold">User Guide</h3>
<p className="text-sm font-medium text-gray-700 mt-1">Mastering the Art of Prompt Writing</p>
<p className="text-sm text-gray-600 mt-3">Learn about key concepts like versions, parameters, and best practices to get the most out of our platform.</p>
<button className="mt-4 bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-lg border border-gray-200 shadow-sm">
                            View Documents
                        </button>
</div>
</div>
</div>
</div>
</div>

<footer className="bg-gray-50 border-t border-gray-200 mt-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center">
<div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
<div className="h-2 w-2 rounded-full bg-white"></div>
</div>
<span className="ml-2 text-xl font-semibold">Serendipity</span>
</div>
<p className="mt-4 text-sm text-gray-600">
                        Empowering creativity through AI-generated imagery and collaborative storytelling.
                    </p>
<div className="mt-6 flex space-x-4">
<a className="text-gray-400 hover:text-gray-500" href="#">
<span className="sr-only">Twitter</span>
<svg className="h-6 w-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
<a className="text-gray-400 hover:text-gray-500" href="#">
<span className="sr-only">GitHub</span>
<svg className="h-6 w-6" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path>
</svg>
</a>
<a className="text-gray-400 hover:text-gray-500" href="#">
<span className="sr-only">Discord</span>
<svg className="h-6 w-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
</svg>
</a>
</div>
</div>
<div className="col-span-1">
<h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Resources</h3>
<ul className="mt-4 space-y-2">
<li><a className="text-gray-600 hover:text-gray-900" href="#">Documentation</a></li>
<li><a className="text-gray-600 hover:text-gray-900" href="#">Tutorials</a></li>
<li><a className="text-gray-600 hover:text-gray-900" href="#">Blog</a></li>
<li><a className="text-gray-600 hover:text-gray-900" href="#">Community</a></li>
</ul>
</div>
<div className="col-span-1">
<h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Company</h3>
<ul className="mt-4 space-y-2">
<li><a className="text-gray-600 hover:text-gray-900" href="#">About</a></li>
<li><a className="text-gray-600 hover:text-gray-900" href="#">Careers</a></li>
<li><a className="text-gray-600 hover:text-gray-900" href="#">Privacy</a></li>
<li><a className="text-gray-600 hover:text-gray-900" href="#">Terms</a></li>
</ul>
</div>
<div className="col-span-1">
<h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Subscribe</h3>
<p className="mt-4 text-sm text-gray-600">Get the latest updates and news directly to your inbox.</p>
<form className="mt-4">
<div className="flex">
<input className="min-w-0 flex-1 bg-white border border-gray-300 rounded-l-md py-2 px-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Enter your email" type="email"/>
<button className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary border border-transparent rounded-r-md py-2 px-4 text-sm font-medium text-white hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" type="submit">
                                Subscribe
                            </button>
</div>
</form>
</div>
</div>
<div className="mt-12 border-t border-gray-200 pt-8">
<p className="text-sm text-gray-500 text-center">© 2023 Serendipity. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
