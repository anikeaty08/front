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


document.write(new Date().getFullYear())


    lucide.createIcons();

    // Mobile menu toggle
    document.getElementById('menuBtn').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.toggle('hidden');
    });

    // Intersection Observer for fade/slide in
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.remove('opacity-0','translate-y-4');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
  
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
      

<header className="fixed inset-x-0 top-0 bg-white/70 backdrop-blur-md shadow-sm ring-1 ring-gray-200 z-50">
<nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 md:py-5">
<a className="text-xl font-semibold tracking-tight" href="#">Jane Doe</a>
<ul className="hidden md:flex space-x-8 text-sm font-medium">
<li><a className="hover:text-gray-600 transition-colors" href="#work">Work</a></li>
<li><a className="hover:text-gray-600 transition-colors" href="#about">About</a></li>
<li><a className="hover:text-gray-600 transition-colors" href="#contact">Contact</a></li>
</ul>
<button aria-label="open menu" className="md:hidden" id="menuBtn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<div className="md:hidden hidden px-6 pb-6" id="mobileMenu">
<a className="block py-2" href="#work">Work</a>
<a className="block py-2" href="#about">About</a>
<a className="block py-2" href="#contact">Contact</a>
</div>
</header>

<section className="pt-28 md:pt-40 pb-24 px-6 md:px-0 text-center space-y-8">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight opacity-0 translate-y-4 transition-all duration-700" data-animate="">Creating quiet, meaningful design.</h1>
<p className="max-w-xl mx-auto text-gray-600 opacity-0 translate-y-4 transition-all duration-700 delay-100" data-animate="">
      I’m Jane Doe, a visual designer crafting digital experiences with clarity and purpose.
    </p>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors opacity-0 translate-y-4 duration-700 delay-150" data-animate="" href="#work">
      Explore my work <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</section>

<section className="max-w-6xl mx-auto px-6 py-20" id="work">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 opacity-0 translate-y-4 transition-all duration-700" data-animate="">Selected Projects</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group rounded-lg overflow-hidden ring-1 ring-gray-200 bg-white shadow-sm opacity-0 translate-y-4 transition-all duration-700 delay-100" data-animate="">
<img alt="Project 1" className="aspect-video object-cover group-hover:scale-[1.03] transition-transform" src="https://source.unsplash.com/random/800x600?interface"/>
<div className="p-5">
<h3 className="text-lg font-medium mb-1 group-hover:text-gray-700 transition-colors">Interface Revamp</h3>
<p className="text-sm text-gray-600">Enterprise dashboard redesign focusing on clarity and utility.</p>
</div>
</article>

<article className="group rounded-lg overflow-hidden ring-1 ring-gray-200 bg-white shadow-sm opacity-0 translate-y-4 transition-all duration-700 delay-150" data-animate="">
<img alt="Project 2" className="aspect-video object-cover group-hover:scale-[1.03] transition-transform" src="https://source.unsplash.com/random/800x600?app"/>
<div className="p-5">
<h3 className="text-lg font-medium mb-1 group-hover:text-gray-700 transition-colors">Mobile Finance App</h3>
<p className="text-sm text-gray-600">Simplified money management with intuitive flows.</p>
</div>
</article>

<article className="group rounded-lg overflow-hidden ring-1 ring-gray-200 bg-white shadow-sm opacity-0 translate-y-4 transition-all duration-700 delay-200" data-animate="">
<img alt="Project 3" className="aspect-video object-cover group-hover:scale-[1.03] transition-transform" src="https://source.unsplash.com/random/800x600?branding"/>
<div className="p-5">
<h3 className="text-lg font-medium mb-1 group-hover:text-gray-700 transition-colors">Brand Identity</h3>
<p className="text-sm text-gray-600">Visual language for a tech start-up seeking simplicity.</p>
</div>
</article>
</div>
</section>

<section className="bg-white/60 ring-1 ring-gray-100 py-20" id="about">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
<img alt="Jane Doe portrait" className="rounded-lg object-cover w-full h-80 md:h-[28rem] shadow-sm ring-1 ring-gray-200 opacity-0 translate-y-4 transition-all duration-700" data-animate="" src="https://source.unsplash.com/random/800x800?portrait"/>
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 opacity-0 translate-y-4 transition-all duration-700 delay-100" data-animate="">About Me</h2>
<p className="prose prose-gray max-w-prose opacity-0 translate-y-4 transition-all duration-700 delay-150" data-animate="">
          With 7 years in digital design, I blend strategy and aesthetics to produce timeless work.
          My approach is grounded in research and stripped of excess, allowing users to focus
          on what matters. When not designing, you’ll find me exploring photography and modernist
          architecture.
        </p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-20 text-center" id="contact">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 opacity-0 translate-y-4 transition-all duration-700" data-animate="">Let’s collaborate</h2>
<p className="text-gray-600 mb-8 opacity-0 translate-y-4 transition-all duration-700 delay-100" data-animate="">
      Got an interesting project or idea? Reach out and let’s make something great.
    </p>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors opacity-0 translate-y-4 duration-700 delay-150" data-animate="" href="mailto:hello@janedoe.com">
       hello@janedoe.com <i className="w-4 h-4" data-lucide="mail"></i>
</a>
<div className="mt-10 flex justify-center gap-6 opacity-0 translate-y-4 transition-all duration-700 delay-200" data-animate="">
<a aria-label="Twitter" className="text-gray-600 hover:text-gray-800 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a aria-label="Dribbble" className="text-gray-600 hover:text-gray-800 transition-colors" href="#"><i className="w-5 h-5" data-lucide="dribbble"></i></a>
<a aria-label="LinkedIn" className="text-gray-600 hover:text-gray-800 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</section>

<footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-500">
    ©  Jane Doe. All rights reserved.
  </footer>



    </>
  );
}
