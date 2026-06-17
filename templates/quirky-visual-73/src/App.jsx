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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Smooth reveal on scroll
      const revealElements = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("active");
              }
          });
      }, {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
      });

      revealElements.forEach((el) => observer.observe(el));

      // Menu Toggle
      function toggleMenu() {
          const menu = document.getElementById('fs-menu');
          const body = document.body;

          if (menu.classList.contains('opacity-0')) {
              // Open
              menu.classList.remove('opacity-0', 'pointer-events-none');
              body.classList.add('overflow-hidden');
          } else {
              // Close
              menu.classList.add('opacity-0', 'pointer-events-none');
              body.classList.remove('overflow-hidden');
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
      

<nav className="fixed z-50 md:px-12 flex transition-all duration-500 text-[#F5F5F5] mix-blend-difference w-full pt-8 pr-6 pb-8 pl-6 top-0 left-0 items-center justify-between">
<a className="uppercase hover:opacity-70 transition-opacity text-lg font-medium tracking-tighter" href="#">
        TQ.
      </a>
<button className="group flex gap-2 hover:opacity-70 transition-opacity focus:outline-none items-center" onclick="toggleMenu()">
<span className="hidden md:block uppercase text-xs tracking-[0.2em]">
          Menu
        </span>
<iconify-icon className="" height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" style={{color: 'rgb(245, 245, 245)'}} width="24"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 bg-[#F5F5F5] z-[60] opacity-0 pointer-events-none transition-opacity duration-700 flex flex-col justify-center items-center text-[#101010]" id="fs-menu">

<button className="absolute top-8 right-6 md:right-12 text-[#101010] hover:opacity-50 transition-opacity focus:outline-none p-2" onclick="toggleMenu()">
<iconify-icon height="32" icon="solar:close-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>

<ul className="text-center flex flex-col items-center justify-center space-y-5 md:space-y-7">
<li className="menu-item overflow-hidden">
<a className="serif text-5xl md:text-7xl lg:text-8xl tracking-tight hover:italic hover:text-gray-500 transition-all duration-300 block" href="#" onclick="toggleMenu()">
            Home
          </a>
</li>
<li className="menu-item overflow-hidden">
<a className="serif text-5xl md:text-7xl lg:text-8xl tracking-tight hover:italic hover:text-gray-500 transition-all duration-300 block" href="#" onclick="toggleMenu()">
            A propos
          </a>
</li>
<li className="menu-item overflow-hidden">
<a className="serif text-5xl md:text-7xl lg:text-8xl tracking-tight hover:italic hover:text-gray-500 transition-all duration-300 block" href="#" onclick="toggleMenu()">
            Photos
          </a>
</li>
<li className="menu-item overflow-hidden">
<a className="serif text-5xl md:text-7xl lg:text-8xl tracking-tight hover:italic hover:text-gray-500 transition-all duration-300 block" href="#" onclick="toggleMenu()">
            Videos
          </a>
</li>
<li className="menu-item overflow-hidden">
<a className="serif text-5xl md:text-7xl lg:text-8xl tracking-tight hover:italic hover:text-gray-500 transition-all duration-300 block" href="#" onclick="toggleMenu()">
            Journal
          </a>
</li>
<li className="menu-item overflow-hidden">
<a className="serif text-5xl md:text-7xl lg:text-8xl tracking-tight hover:italic hover:text-gray-500 transition-all duration-300 block" href="#" onclick="toggleMenu()">
            Contact
          </a>
</li>
<li className="menu-item overflow-hidden pt-4">
<a className="serif text-4xl md:text-6xl lg:text-7xl italic text-gray-400 hover:text-[#101010] hover:not-italic transition-all duration-300 block" href="#" onclick="toggleMenu()">
            For the pros
          </a>
</li>
</ul>
</div>

<header className="relative w-full h-screen overflow-hidden flex items-center justify-center">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-90" loop="" muted="" playsinline="">

<source src="https://videos.pexels.com/video-files/3205803/3205803-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-black/20"></div>
<div className="relative z-10 text-center text-[#F5F5F5] mix-blend-overlay reveal active">
<p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 font-light">
          Photography &amp; Cinema
        </p>
<h1 className="serif text-6xl md:text-9xl lg:text-[10rem] tracking-tight leading-[0.85] font-normal italic">
          The
          <span className="not-italic">Quirky</span>
</h1>
</div>
<div className="absolute bottom-8 w-full flex justify-center animate-bounce duration-[2000ms]">
<iconify-icon className="text-white opacity-60" height="24" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</header>

<main className="bg-[#F5F5F5] text-[#101010] relative z-20 pb-24 md:pb-40">

<section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24 md:py-40 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
<div className="md:col-span-7 reveal">
<h2 className="serif text-5xl md:text-7xl lg:text-8xl leading-[1] tracking-tight">
            We capture the
            <span className="italic text-gray-400">silence</span>
            between moments, crafting visual narratives that breathe.
          </h2>
</div>
<div className="md:col-span-4 md:col-start-9 reveal delay-100">
<p className="text-sm md:text-base leading-relaxed text-gray-600 text-justify">
            Specializing in high-fashion editorial and cinematic storytelling.
            Our approach is rooted in minimalism and natural light, stripping
            away the unnecessary to reveal the raw elegance of the subject. A
            duality of still and motion.
          </p>
<div className="mt-8 flex items-center gap-2 cursor-pointer group">
<span className="uppercase text-xs tracking-widest group-hover:pl-2 transition-all">
              Explore Portfolio
            </span>
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</section>
<section className="max-w-screen-2xl mx-auto px-6 md:px-12 pb-24 md:pb-32 reveal">
<div className="border-t border-[#101010]/10 w-full mb-12 md:mb-16"></div>
<div className="flex flex-col items-center">
<h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-10 md:mb-12">
            Recognitions &amp; Features
          </h3>
<div className="w-full flex flex-wrap justify-center lg:justify-between items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500 select-none">
<span className="serif text-2xl md:text-3xl italic text-[#101010]">
              Grazia
            </span>
<span className="serif text-3xl md:text-4xl font-semibold uppercase tracking-tight text-[#101010]">
              VOGUE
            </span>
<span className="serif text-xl md:text-2xl italic text-[#101010]">
              Style Me Pretty
            </span>
<span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#101010]">
              Wedvibes.media
            </span>
<span className="serif text-lg md:text-xl uppercase tracking-[0.2em] text-[#101010]">
              The Lane
            </span>
<span className="font-sans text-xl md:text-2xl font-semibold tracking-tighter uppercase text-[#101010]">
              SONY
            </span>
</div>
</div>
</section>

<section className="px-4 md:px-8 max-w-[1920px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 md:gap-y-48 md:gap-x-12 lg:gap-x-24">

<article className="reveal md:mt-0 group cursor-pointer">
<div className="relative overflow-hidden aspect-[3/4] mb-4">
<img alt="Fashion Portrait" className="w-full h-full object-cover hover-img-zoom grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-t border-black/10 pt-3">
<h3 className="serif text-3xl italic">Vogue Japan</h3>
<span className="text-xs uppercase tracking-widest text-gray-500">
                Editorial
              </span>
</div>
</article>

<article className="reveal md:mt-32 md:w-3/4 md:ml-auto group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] mb-4">
<img alt="Editorial Fashion" className="w-full h-full object-cover hover-img-zoom grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-t border-black/10 pt-3">
<h3 className="serif text-3xl italic">Maison Margiela</h3>
<span className="text-xs uppercase tracking-widest text-gray-500">
                Campaign
              </span>
</div>
</article>

<article className="reveal col-span-1 md:col-span-2 md:px-24 group cursor-pointer">
<div className="relative overflow-hidden aspect-[16/9] mb-4">
<img alt="Landscape Fashion" className="w-full h-full object-cover hover-img-zoom" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-t border-black/10 pt-3">
<h3 className="serif text-3xl italic">The Northerner</h3>
<span className="text-xs uppercase tracking-widest text-gray-500">
                Lookbook
              </span>
</div>
</article>
</div>
</section>
</main>

<section className="bg-[#101010] text-[#E5E5E5] relative z-20 pt-24 md:pt-40 pb-12 selection:bg-white selection:text-black">

<div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-24 reveal">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8">
<h2 className="serif text-6xl md:text-9xl tracking-tight leading-[0.9]">
            Motion
            <br/>
<span className="italic text-gray-500">&amp;</span>
            Emotion
          </h2>
<div className="mt-8 md:mt-0 flex items-center gap-4">
<iconify-icon className="animate-pulse" height="32" icon="solar:play-circle-linear" width="32"></iconify-icon>
<span className="uppercase text-xs tracking-[0.2em] text-gray-400">
              Showreel 2024
            </span>
</div>
</div>
</div>

<div className="px-0 md:px-12 mb-32">
<div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-12">

<div className="reveal relative group h-[60vh] md:h-[80vh] w-full overflow-hidden">
<video autoplay="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/5532768/5532768-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
<span className="serif text-5xl italic text-white tracking-wide">
                Noir Et Blanc
              </span>
</div>
<div className="absolute bottom-6 left-6 md:left-10 mix-blend-difference">
<p className="uppercase text-xs tracking-widest mb-1">Short Film</p>
<p className="serif text-2xl">Paris, 2023</p>
</div>
</div>

<div className="reveal relative group h-[60vh] md:h-[80vh] w-full overflow-hidden md:mt-24">
<video autoplay="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/6604278/6604278-hd_1920_1080_30fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
<span className="serif text-5xl italic text-white tracking-wide">
                Eternal Summer
              </span>
</div>
<div className="absolute bottom-6 left-6 md:left-10 mix-blend-difference">
<p className="uppercase text-xs tracking-widest mb-1">Campaign</p>
<p className="serif text-2xl">Saint Laurent</p>
</div>
</div>
</div>
</div>

<footer className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-white/5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0">
<div className="reveal">
<p className="uppercase text-xs tracking-[0.3em] text-gray-500 mb-6">
              Inquiries
            </p>
<a className="serif text-4xl md:text-6xl lg:text-7xl hover:italic hover:text-gray-400 transition-all block mb-2" href="mailto:studio@thequirky.com">
              studio@thequirky.com
            </a>
<a className="serif text-2xl md:text-3xl text-gray-400 italic hover:text-white transition-colors" href="tel:+1000000000">
              +1 (555) 000-0000
            </a>
</div>
<div className="reveal flex flex-col justify-between md:items-end">
<div className="flex gap-8 mb-12">
<a className="uppercase text-xs tracking-widest hover:text-gray-400 transition-colors" href="#">
                Instagram
              </a>
<a className="uppercase text-xs tracking-widest hover:text-gray-400 transition-colors" href="#">
                Vimeo
              </a>
<a className="uppercase text-xs tracking-widest hover:text-gray-400 transition-colors" href="#">
                LinkedIn
              </a>
</div>
<div className="text-right">
<p className="text-[10px] uppercase tracking-widest text-gray-600">
                © 2024 The Quirky.
              </p>
<p className="text-[10px] uppercase tracking-widest text-gray-600 mt-1">
                All rights reserved.
              </p>
</div>
</div>
</div>
<div className="mt-24 md:mt-40 text-center md:text-left reveal">
<h1 className="text-[12vw] md:text-[13vw] leading-none serif opacity-10 select-none pointer-events-none">
            THE QUIRKY
          </h1>
</div>
</footer>
</section>


    </>
  );
}
