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
      

<section className="relative py-20 overflow-hidden bg-pastel-lightest" id="about">

<div className="absolute inset-0 z-0 overflow-hidden">
<div className="absolute top-20 right-[10%] w-96 h-96 rounded-full bg-pastel-accent1 opacity-10 blur-3xl blob-animation"></div>
<div className="absolute bottom-40 left-[15%] w-80 h-80 rounded-full bg-pastel-accent2 opacity-10 blur-3xl blob-animation" style={{animationDelay: '2s'}}></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-pastel-secondary opacity-5 blur-3xl blob-animation" style={{animationDelay: '4s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

<div className="text-center mb-16 scroll-reveal">
<span className="inline-block px-4 py-1 bg-pastel-light text-pastel-primary rounded-full text-sm font-medium mb-4">Our Story</span>
<h2 className="font-serif text-3xl md:text-4xl font-semibold text-pastel-heading mb-4">The Team Behind Serene</h2>
<p className="max-w-2xl mx-auto text-pastel-textLight">We're a passionate group of designers and developers dedicated to creating digital spaces that promote peace and well-being.</p>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 mb-20 scroll-reveal">
<div className="lg:w-1/2">
<h3 className="font-serif text-2xl font-medium text-pastel-heading mb-4">Our Mission</h3>
<p className="text-pastel-textLight mb-6">In today's fast-paced digital world, we believe that technology should enhance our lives, not complicate them. We started Serene with a simple vision: to create digital spaces that feel as peaceful and rejuvenating as a walk through a cherry blossom garden.</p>
<p className="text-pastel-textLight mb-6">Our team combines expertise in design, psychology, and technology to craft experiences that reduce digital anxiety and promote mindfulness. We're committed to helping you find moments of calm in your online journey.</p>
<div className="flex items-center space-x-4 mt-8">
<div className="h-0.5 w-12 bg-pastel-primary"></div>
<p className="text-pastel-primary font-medium italic">"Technology should feel like a gentle breeze, not a storm."</p>
</div>
</div>
<div className="lg:w-1/2 relative">
<div className="relative z-10 rounded-2xl overflow-hidden shadow-lg">
<img alt="Team working together" className="w-full h-auto" src="https://images.unsplash.com/photo-1595064085577-7c2ef98ec311?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>

<div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-pastel-accent2 opacity-20"></div>
<div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-4 border-pastel-light opacity-40"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
<div className="bg-white p-8 rounded-2xl shadow-md border border-pastel-light scroll-reveal" style={{transitionDelay: '0.1s'}}>
<div className="w-14 h-14 bg-pastel-lightest rounded-full flex items-center justify-center mb-6">
<svg className="w-7 h-7 text-pastel-primary" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" fill-rule="evenodd"></path>
</svg>
</div>
<h3 className="font-serif text-xl font-medium text-pastel-heading mb-3">Mindfulness</h3>
<p className="text-pastel-textLight">We design with intention, considering how each element affects your mental state and digital experience.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-md border border-pastel-light scroll-reveal" style={{transitionDelay: '0.2s'}}>
<div className="w-14 h-14 bg-pastel-lightest rounded-full flex items-center justify-center mb-6">
<svg className="w-7 h-7 text-pastel-primary" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
</svg>
</div>
<h3 className="font-serif text-xl font-medium text-pastel-heading mb-3">Community</h3>
<p className="text-pastel-textLight">We believe in creating spaces that foster genuine connection and shared experiences among users.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-md border border-pastel-light scroll-reveal" style={{transitionDelay: '0.3s'}}>
<div className="w-14 h-14 bg-pastel-lightest rounded-full flex items-center justify-center mb-6">
<svg className="w-7 h-7 text-pastel-primary" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" fill-rule="evenodd"></path>
</svg>
</div>
<h3 className="font-serif text-xl font-medium text-pastel-heading mb-3">Simplicity</h3>
<p className="text-pastel-textLight">We embrace elegant simplicity, removing unnecessary complexity to create intuitive experiences.</p>
</div>
</div>

<h3 className="font-serif text-2xl font-medium text-pastel-heading text-center mb-10 scroll-reveal">Meet Our Team</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="team-member text-center scroll-reveal" style={{transitionDelay: '0.1s'}}>
<div className="relative mb-4 rounded-2xl overflow-hidden group aspect-w-1 aspect-h-1">
<div className="w-full h-64 bg-pastel-light">
<img alt="Emma Chen" className="w-full h-full object-cover transition-transform duration-300" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-pastel-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
<div className="flex space-x-3">
<a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-pastel-primary" href="#">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path></svg>
</a>
<a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-pastel-primary" href="#">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
</div>
</div>
</div>
<h4 className="font-serif text-lg font-medium text-pastel-heading">Emma Chen</h4>
<p className="text-sm text-pastel-textLight">Founder &amp; Design Lead</p>
</div>
<div className="team-member text-center scroll-reveal" style={{transitionDelay: '0.2s'}}>
<div className="relative mb-4 rounded-2xl overflow-hidden group aspect-w-1 aspect-h-1">
<div className="w-full h-64 bg-pastel-light">
<img alt="Marcus Kim" className="w-full h-full object-cover transition-transform duration-300" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-pastel-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
<div className="flex space-x-3">
<a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-pastel-primary" href="#">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path></svg>
</a>
<a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-pastel-primary" href="#">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
</div>
</div>
</div>
<h4 className="font-serif text-lg font-medium text-pastel-heading">Marcus Kim</h4>
<p className="text-sm text-pastel-textLight">Lead Developer</p>
</div>
<div className="team-member text-center scroll-reveal" style={{transitionDelay: '0.3s'}}>
<div className="relative mb-4 rounded-2xl overflow-hidden group aspect-w-1 aspect-h-1">
<div className="w-full h-64 bg-pastel-light">
<img alt="Sophia Lee" className="w-full h-full object-cover transition-transform duration-300" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-pastel-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
<div className="flex space-x-3">
<a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-pastel-primary" href="#">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path></svg>
</a>
<a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-pastel-primary" href="#">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
</div>
</div>
</div>
<h4 className="font-serif text-lg font-medium text-pastel-heading">Sophia Lee</h4>
<p className="text-sm text-pastel-textLight">UX Researcher</p>
</div>
<div className="team-member text-center scroll-reveal" style={{transitionDelay: '0.4s'}}>
<div className="relative mb-4 rounded-2xl overflow-hidden group aspect-w-1 aspect-h-1">
<div className="w-full h-64 bg-pastel-light">
<img alt="James Rivera" className="w-full h-full object-cover transition-transform duration-300" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-pastel-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
<div className="flex space-x-3">
<a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-pastel-primary" href="#">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path></svg>
</a>
<a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-pastel-primary" href="#">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
</div>
</div>
</div>
<h4 className="font-serif text-lg font-medium text-pastel-heading">James Rivera</h4>
<p className="text-sm text-pastel-textLight">Product Manager</p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0">
<svg className="w-full" viewbox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
<path d="M0,128L60,117.3C120,107,240,85,360,90.7C480,96,600,128,720,133.3C840,139,960,117,1080,106.7C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="#ffffff" fillOpacity="1"></path>
</svg>
</div>
</section>


    </>
  );
}
