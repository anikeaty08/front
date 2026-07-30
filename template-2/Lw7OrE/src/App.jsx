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
                        purple: {
                            light: '#b17acc',
                            DEFAULT: '#8a5cf6',
                            dark: '#4c1d95',
                        },
                    },
                    backgroundImage: {
                        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
      

<div className="fixed inset-0 bg-gradient-radial from-purple-900/20 to-transparent opacity-30"></div>
<div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjOGE1Y2Y2IiBmaWxsLW9wYWNpdHk9IjAuMSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
<div className="relative z-10">

<header className="container mx-auto px-6 py-6 flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center mr-2">
<div className="w-6 h-6 rounded-full bg-black/80 flex items-center justify-center">
<div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 opacity-80"></div>
</div>
</div>
<span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">Serendipity</span>
</div>
<nav className="hidden md:flex items-center space-x-8">
<a className="hover:text-purple-400 transition" href="#">Home</a>
<a className="hover:text-purple-400 transition" href="#">Browse</a>
<a className="hover:text-purple-400 transition" href="#">Updates</a>
<a className="hover:text-purple-400 transition" href="#">Pricing</a>
<a className="px-4 py-2 rounded-lg border border-purple-500 bg-black/30 text-white hover:bg-purple-900/30 transition shadow-[0_0_15px_rgba(138,92,246,0.5)]" href="#">Sign Up</a>
</nav>
<button className="md:hidden">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</header>

<main className="container mx-auto px-6 py-12">
<div className="flex flex-col lg:flex-row items-center">

<div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
<div className="inline-block px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-sm text-purple-300 mb-4">
                        Introducing Image Feature
                    </div>
<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500">
                        Imagine with Serendipity
                    </h1>
<p className="text-gray-300 mb-8 text-lg">
                        Join our vibrant community of creators where imagination meets innovation. 
                        Connect through Discord, collaborate on storytelling, and bring your wildest 
                        ideas to life with our powerful generation tools.
                    </p>
<button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg font-medium flex items-center shadow-[0_0_20px_rgba(138,92,246,0.5)] hover:shadow-[0_0_30px_rgba(138,92,246,0.8)] transition">
<span>Generate Images</span>
<svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
</div>

<div className="lg:w-1/2 relative">
<div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-transparent p-1 shadow-[0_0_30px_rgba(138,92,246,0.3)]">
<div className="h-80 md:h-96 bg-gradient-to-br from-purple-900/50 to-black/50 rounded-2xl overflow-hidden flex items-center justify-center">
<div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center animate-pulse">
<div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center">

<div className="text-center">
<div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-br from-purple-600/40 to-pink-600/40"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-1/4 w-72 bg-black/40 backdrop-blur-xl rounded-xl p-4 border border-purple-900/30 shadow-lg hidden lg:block">
<h3 className="text-lg font-semibold mb-4 flex items-center">
<svg className="h-5 w-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fillRule="evenodd"></path>
</svg>
                            Updates
                        </h3>
<div className="space-y-4">
<div className="flex items-start">
<div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-3 flex-shrink-0">
<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" fillRule="evenodd"></path>
</svg>
</div>
<div>
<p className="font-medium">Upload Image</p>
<p className="text-xs text-gray-400">New Feature, Apr 30, 2023</p>
</div>
</div>
<div className="flex items-start">
<div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3 flex-shrink-0">
<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
</svg>
</div>
<div>
<p className="font-medium">Permutation</p>
<p className="text-xs text-gray-400">New Feature, Apr 21, 2023</p>
</div>
</div>
<div className="flex items-start">
<div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3 flex-shrink-0">
<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" fillRule="evenodd"></path>
</svg>
</div>
<div>
<p className="font-medium">V2.1 Release</p>
<p className="text-xs text-gray-400">New Release, Apr 15, 2023</p>
</div>
</div>
</div>
<button className="w-full mt-6 py-2 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
<span>Explore Now</span>
<svg className="h-4 w-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

<div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-900/30 group hover:shadow-[0_0_20px_rgba(138,92,246,0.3)] transition">
<div className="h-40 bg-purple-900/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-purple-600/30"></div>
</div>
</div>
<div className="p-6">
<div className="flex items-center mb-4">
<div className="w-8 h-8 rounded-full bg-purple-600/30 flex items-center justify-center mr-3">
<svg className="h-4 w-4 text-purple-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" fillRule="evenodd"></path>
</svg>
</div>
<h3 className="text-lg font-semibold">Using Discord</h3>
</div>
<h4 className="text-purple-400 mb-3">Mastering the Art of Prompt Writing</h4>
<p className="text-gray-400 text-sm mb-6">
                            Learn how to craft clear and engaging prompts that combine with visual representation for stunning results.
                        </p>
<button className="w-full py-2 border border-purple-500/50 rounded-lg hover:bg-purple-900/30 transition flex items-center justify-center">
<span>Join Discord</span>
<svg className="h-4 w-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
</div>
</div>

<div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-900/30 group hover:shadow-[0_0_20px_rgba(138,92,246,0.3)] transition">
<div className="h-40 bg-purple-900/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-purple-600/30"></div>
</div>
</div>
<div className="p-6">
<div className="flex items-center mb-4">
<div className="w-8 h-8 rounded-full bg-purple-600/30 flex items-center justify-center mr-3">
<svg className="h-4 w-4 text-purple-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" fillRule="evenodd"></path>
</svg>
</div>
<h3 className="text-lg font-semibold">Getting Started</h3>
</div>
<h4 className="text-purple-400 mb-3">Streamlining Collaborative Workflows</h4>
<p className="text-gray-400 text-sm mb-6">
                            Use our powerful Bot on Discord to create designs and artworks with simple commands and intuitive workflows.
                        </p>
<button className="w-full py-2 border border-purple-500/50 rounded-lg hover:bg-purple-900/30 transition flex items-center justify-center">
<span>Explore Now</span>
<svg className="h-4 w-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
</div>
</div>

<div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-900/30 group hover:shadow-[0_0_20px_rgba(138,92,246,0.3)] transition">
<div className="h-40 bg-purple-900/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-purple-600/30"></div>
</div>
</div>
<div className="p-6">
<div className="flex items-center mb-4">
<div className="w-8 h-8 rounded-full bg-purple-600/30 flex items-center justify-center mr-3">
<svg className="h-4 w-4 text-purple-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
</svg>
</div>
<h3 className="text-lg font-semibold">User Guide</h3>
</div>
<h4 className="text-purple-400 mb-3">Unraveling the Mystery of Version</h4>
<p className="text-gray-400 text-sm mb-6">
                            Understand key concepts like software versions and parameters to maximize your creative potential.
                        </p>
<button className="w-full py-2 border border-purple-500/50 rounded-lg hover:bg-purple-900/30 transition flex items-center justify-center">
<span>View Documents</span>
<svg className="h-4 w-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
