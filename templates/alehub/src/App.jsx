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



        // Initialize Icons
        lucide.createIcons();

        // Scroll Reveal Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: unobserve if you only want it to happen once
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-element');
            revealElements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 mix-blend-difference text-neutral-300">
<div className="text-sm font-medium tracking-wide uppercase">Freelance Creative Director</div>
<div className="hidden md:block text-sm font-medium tracking-wide uppercase cursor-pointer hover:text-white transition-colors">Menu</div>
<div className="text-sm font-medium tracking-wide uppercase">Portfolio '24</div>
</nav>

<header className="relative h-screen w-full flex flex-col justify-end px-6 pb-12 md:px-12 md:pb-16">
<div className="w-full border-t border-neutral-800 mb-8"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">

<div className="col-span-12 md:col-span-7">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-none reveal-element">
                    Alexandre<br/>Hubner
                </h1>
</div>

<div className="col-span-12 md:col-span-5 flex flex-col justify-end pb-2 md:pb-4">
<p className="text-lg md:text-xl text-neutral-400 max-w-md leading-relaxed reveal-element" style={{transitionDelay: '100ms'}}>
                    Art Director and Designer based in São Paulo, primarily focusing on creating timeless identities for brands.
                </p>
<div className="mt-8 flex items-center gap-2 text-sm text-neutral-500 uppercase tracking-widest reveal-element" style={{transitionDelay: '200ms'}}>
                    Scroll to explore
                    <i className="w-4 h-4" data-lucide="arrow-down"></i>
</div>
</div>
</div>
</header>

<main className="w-full px-6 md:px-12 pb-32">

<article className="mb-32 md:mb-48 group">
<div className="reveal-img-container w-full aspect-[4/3] md:aspect-[16/9] bg-neutral-900 mb-6 relative">
<img alt="Project 1" className="w-full h-full object-cover reveal-img opacity-90" src="https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-neutral-800 pt-6 reveal-element">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2 md:mb-0">Noir Étude</h2>
<div className="flex flex-col md:flex-row gap-4 md:gap-32 text-lg md:text-xl text-neutral-400">
<span>Fashion Campaign</span>
<span className="text-neutral-600">2024</span>
</div>
</div>
</article>

<article className="mb-32 md:mb-48 group">
<div className="reveal-img-container w-full aspect-[4/3] md:aspect-[16/9] bg-neutral-900 mb-6 relative">
<img alt="Project 2" className="w-full h-full object-cover reveal-img opacity-90" src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-neutral-800 pt-6 reveal-element">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2 md:mb-0">Vertex</h2>
<div className="flex flex-col md:flex-row gap-4 md:gap-32 text-lg md:text-xl text-neutral-400">
<span>Brand Identity</span>
<span className="text-neutral-600">2023</span>
</div>
</div>
</article>

<article className="mb-32 md:mb-48 group">
<div className="reveal-img-container w-full aspect-[4/3] md:aspect-[16/9] bg-neutral-900 mb-6 relative">
<img alt="Project 3" className="w-full h-full object-cover reveal-img opacity-90" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-neutral-800 pt-6 reveal-element">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2 md:mb-0">Aura Speaker</h2>
<div className="flex flex-col md:flex-row gap-4 md:gap-32 text-lg md:text-xl text-neutral-400">
<span>Industrial Design</span>
<span className="text-neutral-600">2023</span>
</div>
</div>
</article>

<article className="mb-32 md:mb-48 group">
<div className="reveal-img-container w-full aspect-[4/3] md:aspect-[16/9] bg-neutral-900 mb-6 relative">
<img alt="Project 4" className="w-full h-full object-cover reveal-img opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-neutral-800 pt-6 reveal-element">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2 md:mb-0">Kinetic</h2>
<div className="flex flex-col md:flex-row gap-4 md:gap-32 text-lg md:text-xl text-neutral-400">
<span>Art Direction</span>
<span className="text-neutral-600">2022</span>
</div>
</div>
</article>
</main>

<section className="px-6 md:px-12 pb-32 grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="col-span-12 md:col-span-2 text-sm text-neutral-500 font-medium uppercase tracking-widest reveal-element">
            Ethos
        </div>
<div className="col-span-12 md:col-span-6 reveal-element">
<h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-8">
                Making brands memorable by creating lasting impressions that resonate with audiences.
            </h3>
<a className="inline-flex items-center gap-2 text-lg text-white hover:text-neutral-400 transition-colors group" href="#">
                About Alexandre
                <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="col-span-12 md:col-span-4 flex justify-end items-start reveal-element">
<div className="w-full md:w-64 aspect-square bg-neutral-900 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://images.unsplash.com/photo-1595429035839-c99c298ffdde?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="px-6 md:px-12 pb-32">
<div className="flex justify-between items-end border-b border-neutral-800 pb-6 mb-12 reveal-element">
<h3 className="text-3xl font-medium tracking-tight">Journal</h3>
<div className="flex gap-4">
<button className="hover:text-neutral-400 transition-colors"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<button className="hover:text-neutral-400 transition-colors"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-element">
<div className="aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2">Studio 34 got 2 awards</h4>
<p className="text-neutral-400 text-base leading-relaxed mb-4">We are thrilled to share that Studio 34 has recently received two prestigious awards for outstanding design.</p>
<a className="text-sm text-neutral-500 uppercase tracking-widest hover:text-white transition-colors" href="#">Read More</a>
</div>

<div className="reveal-element" style={{transitionDelay: '100ms'}}>
<div className="aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2">Nostalgia in Modern Branding</h4>
<p className="text-neutral-400 text-base leading-relaxed mb-4">Emerged as a powerful tool in modern branding, resonating deeply with consumers by tapping into memories.</p>
<a className="text-sm text-neutral-500 uppercase tracking-widest hover:text-white transition-colors" href="#">Read More</a>
</div>

<div className="reveal-element" style={{transitionDelay: '200ms'}}>
<div className="aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2">Minimalism is back</h4>
<p className="text-neutral-400 text-base leading-relaxed mb-4">Exploring the return to essentialism in digital product design and how it affects user retention.</p>
<a className="text-sm text-neutral-500 uppercase tracking-widest hover:text-white transition-colors" href="#">Read More</a>
</div>
</div>
</section>

<footer className="px-6 md:px-12 py-20 border-t border-neutral-900">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<h5 className="text-xl font-medium tracking-tight mb-4">Alexandre Hubner</h5>
<p className="text-neutral-500 text-sm">©2025</p>
</div>
<div className="col-span-1 md:col-start-3">
<h6 className="text-xs text-neutral-500 font-medium uppercase tracking-widest mb-6">Sitemap</h6>
<ul className="space-y-3 text-base text-neutral-300">
<li><a className="hover:text-white transition-colors" href="#">Works</a></li>
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Archive</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Journal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="col-span-1">
<h6 className="text-xs text-neutral-500 font-medium uppercase tracking-widest mb-6">Social</h6>
<ul className="space-y-3 text-base text-neutral-300">
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">Threads</a></li>
<li><a className="hover:text-white transition-colors" href="#">X.com</a></li>
</ul>
</div>
</div>
<div className="flex justify-between items-end mt-20 text-xs text-neutral-600 uppercase tracking-widest">
<span>Made by ena</span>
<span>Privacy Policy</span>
</div>
</footer>



    </>
  );
}
