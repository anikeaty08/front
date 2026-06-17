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



        // Initialize Feather icons
        document.addEventListener('DOMContentLoaded', function() {
            feather.replace();
        });
        
        // Modal functions
        function openModal() {
            document.getElementById('projectModal').classList.remove('hidden');
        }
        
        function closeModal() {
            document.getElementById('projectModal').classList.add('hidden');
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
      

<div className="fixed inset-0 -z-10 gradient-bg opacity-20"></div>

<div className="fixed top-20 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 blob -z-10"></div>
<div className="fixed top-40 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 blob -z-10" style={{animationDelay: '2s'}}></div>
<div className="fixed -bottom-20 left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 blob -z-10" style={{animationDelay: '4s'}}></div>

<header className="w-full backdrop-blur-md bg-white/70 fixed top-0 z-50 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center">
<div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl">P</div>
<span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">Portfolix</span>
</div>

<nav className="hidden md:flex">
<a className="px-3 py-2 text-gray-600 hover:text-pink-500 transition-colors" href="#">Home</a>
<a className="px-3 py-2 text-gray-600 hover:text-pink-500 transition-colors" href="#">About</a>
<a className="px-3 py-2 text-gray-600 hover:text-pink-500 transition-colors" href="#">Services</a>
<a className="px-3 py-2 text-pink-500 border-b-2 border-pink-500" href="#">Portfolio</a>
<a className="px-3 py-2 text-gray-600 hover:text-pink-500 transition-colors" href="#">Contact</a>
</nav>

<div className="flex items-center space-x-4">
<a className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200" href="#">Contact Me</a>
<button className="md:hidden text-gray-600">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</header>

<section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

<div className="text-center mb-16">
<div className="inline-block px-3 py-1 bg-gradient-to-r from-pink-500/10 to-orange-400/10 rounded-full mb-4">
<span className="text-sm font-medium text-pink-700">My Work</span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Signature <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Projects</span>
</h2>
<p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                A showcase of my most impactful and creative work across various disciplines
            </p>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-12">
<button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200">All Projects</button>
<button className="px-4 py-2 bg-white text-gray-700 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:text-pink-500">Branding</button>
<button className="px-4 py-2 bg-white text-gray-700 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:text-pink-500">UI Design</button>
<button className="px-4 py-2 bg-white text-gray-700 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:text-pink-500">Photography</button>
<button className="px-4 py-2 bg-white text-gray-700 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:text-pink-500">3D Modeling</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="project-card rounded-xl overflow-hidden shadow-md relative group" href="#">
<div className="relative h-72 overflow-hidden">
<img alt="Harmony Brand Identity" className="w-full h-full object-cover project-image" src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="project-overlay absolute inset-0 flex flex-col justify-end p-6">
<span className="project-category bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">Branding</span>
<h3 className="text-xl font-bold text-white">Harmony Brand Identity</h3>
<p className="text-white/80 text-sm mt-1">Complete brand refresh for a music streaming platform</p>
</div>
</div>
</a>

<a className="project-card rounded-xl overflow-hidden shadow-md relative group" href="#">
<div className="relative h-72 overflow-hidden">
<img alt="Eco Dashboard UI" className="w-full h-full object-cover project-image" src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="project-overlay absolute inset-0 flex flex-col justify-end p-6">
<span className="project-category bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">UI Design</span>
<h3 className="text-xl font-bold text-white">Eco Dashboard UI</h3>
<p className="text-white/80 text-sm mt-1">Monitoring interface for environmental data tracking</p>
</div>
</div>
</a>

<a className="project-card rounded-xl overflow-hidden shadow-md relative group" href="#">
<div className="relative h-72 overflow-hidden">
<img alt="Urban Perspectives" className="w-full h-full object-cover project-image" src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="project-overlay absolute inset-0 flex flex-col justify-end p-6">
<span className="project-category bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">Photography</span>
<h3 className="text-xl font-bold text-white">Urban Perspectives</h3>
<p className="text-white/80 text-sm mt-1">Photo series exploring city architecture and patterns</p>
</div>
</div>
</a>

<a className="project-card rounded-xl overflow-hidden shadow-md relative group" href="#">
<div className="relative h-72 overflow-hidden">
<img alt="Neo Space 3D Environment" className="w-full h-full object-cover project-image" src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="project-overlay absolute inset-0 flex flex-col justify-end p-6">
<span className="project-category bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">3D Modeling</span>
<h3 className="text-xl font-bold text-white">Neo Space 3D Environment</h3>
<p className="text-white/80 text-sm mt-1">Futuristic space station concept for gaming environment</p>
</div>
</div>
</a>

<a className="project-card rounded-xl overflow-hidden shadow-md relative group" href="#">
<div className="relative h-72 overflow-hidden">
<img alt="Nomad Travel App" className="w-full h-full object-cover project-image" src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="project-overlay absolute inset-0 flex flex-col justify-end p-6">
<span className="project-category bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">UI Design</span>
<h3 className="text-xl font-bold text-white">Nomad Travel App</h3>
<p className="text-white/80 text-sm mt-1">Mobile application for digital nomads and remote workers</p>
</div>
</div>
</a>

<a className="project-card rounded-xl overflow-hidden shadow-md relative group" href="#">
<div className="relative h-72 overflow-hidden">
<img alt="Pulse Motion Graphics" className="w-full h-full object-cover project-image" src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="project-overlay absolute inset-0 flex flex-col justify-end p-6">
<span className="project-category bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">Motion Graphics</span>
<h3 className="text-xl font-bold text-white">Pulse Motion Graphics</h3>
<p className="text-white/80 text-sm mt-1">Animated intro sequence for a health tech startup</p>
</div>
</div>
</a>
</div>

<div className="mt-12 text-center">
<button className="px-6 py-3 bg-white border border-pink-500 text-pink-500 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-pink-50">
                Load More Projects
            </button>
</div>
</section>

<div className="modal fixed inset-0 z-50 flex items-center justify-center hidden" id="projectModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeModal()"></div>
<div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-auto relative z-10 mx-4">
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors" onclick="closeModal()">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="p-6">
<div className="modal-content">

</div>
</div>
</div>
</div>


    </>
  );
}
