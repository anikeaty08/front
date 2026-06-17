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



    // Lucide icons
    lucide.createIcons({
      icons: {
        'play': lucide.Play,
        'arrow-right': lucide.ArrowRight,
        'film': lucide.Film,
        'figma': lucide.Figma,
        'monitor': lucide.Monitor,
        'star': lucide.Star,
        'search': lucide.Search,
        'palette': lucide.Palette,
        'layers': lucide.Layers,
        'grid': lucide.Grid,
        'ticket': lucide.Ticket,
        'bar-chart': lucide.BarChart,
        'shopping-bag': lucide.ShoppingBag,
        'flask-conical': lucide.FlaskConical,
        'clapperboard': lucide.Clapperboard,
        'mail': lucide.Mail,
        'arrow': lucide.ChevronDown,
      },
      attrs: { stroke: '#a5b4fc', 'stroke-width': 1.5, width: 24, height: 24 }
    });

    // Special coloring for some icons
    lucide.createIcons({
      icons: { 'arrow-right1': lucide.ArrowRight },
      attrs: { stroke: '#6366f1', 'stroke-width': 1.5, width: 22, height: 22 }
    });
    lucide.createIcons({
      icons: { 'arrow-right2': lucide.ArrowRight },
      attrs: { stroke: '#ec4899', 'stroke-width': 1.5, width: 22, height: 22 }
    });
    lucide.createIcons({
      icons: { 'arrow-right3': lucide.ArrowRight },
      attrs: { stroke: '#10b981', 'stroke-width': 1.5, width: 22, height: 22 }
    });
    lucide.createIcons({
      icons: { 'arrow-right4': lucide.ArrowRight },
      attrs: { stroke: '#fde047', 'stroke-width': 1.5, width: 22, height: 22 }
    });
    lucide.createIcons({
      icons: { 'icon-play': lucide.Play, 'icon-arrow': lucide.ChevronDown, 'icon-clapperboard': lucide.Clapperboard, 'icon-mail': lucide.Mail },
      attrs: { stroke: '#fff', 'stroke-width': 1.5, width: 24, height: 24 }
    });
    // Timeline/skills icons
    lucide.createIcons({
      icons: {
        'icon-film': lucide.Film,
        'icon-figma': lucide.Figma,
        'icon-monitor': lucide.Monitor,
        'icon-star': lucide.Star,
        'icon-search': lucide.Search,
        'icon-palette': lucide.Palette,
        'icon-layers': lucide.Layers,
        'icon-grid': lucide.Grid,
      },
      attrs: { stroke: '#fff', 'stroke-width': 1.5, width: 22, height: 22 }
    });
    // Project category icons
    lucide.createIcons({
      icons: {
        'icon-ticket': lucide.Ticket,
        'icon-bar-chart': lucide.BarChart,
        'icon-shopping-bag': lucide.ShoppingBag,
        'icon-flask-conical': lucide.FlaskConical,
      },
      attrs: { stroke: '#fff', 'stroke-width': 1.5, width: 22, height: 22 }
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
      

<nav className="flex items-center justify-between w-full px-6 py-4 spotlight sticky top-0 z-40 backdrop-blur-lg">
<div className="logo tracking-tight">SJ</div>
<ul className="flex gap-6 text-sm font-medium text-gray-300">
<li><a className="hover:text-white transition-colors outline-none focus-visible:text-indigo-400" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors outline-none focus-visible:text-indigo-400" href="#about">About</a></li>
<li><a className="hover:text-white transition-colors outline-none focus-visible:text-indigo-400" href="#portfolio">Portfolio</a></li>
<li><a className="hover:text-white transition-colors outline-none focus-visible:text-indigo-400" href="#contact">Contact</a></li>
<li><a className="hover:text-indigo-300 transition-colors outline-none focus-visible:text-indigo-400" href="https://linkedin.com" target="_blank">LinkedIn</a></li>
<li><a className="hover:text-indigo-300 transition-colors outline-none focus-visible:text-indigo-400" href="https://behance.net" target="_blank">Behance</a></li>
</ul>
</nav>

<section className="flex flex-col items-center justify-center min-h-[92vh] px-6 py-20 text-center spotlight poster-shadow">
<h1 className="cinematic text-[2.9rem] sm:text-[3.9rem] md:text-[4.2rem] font-extrabold tracking-tight leading-tight mb-4">
      🎬 From Video Frames<br className="sm:hidden"/>to Wireframes.
    </h1>
<p className="max-w-xl mx-auto text-lg sm:text-xl text-gray-300 font-medium mb-8" style={{fontWeight: '500'}}>
      Once an editor of films, now an editor of experiences.<br/>
      I design human-centered, cinematic journeys through UX &amp; UI.
    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
<a className="cta-btn inline-flex items-center justify-center gap-2" href="#about">
<span>Watch My Story</span>
<span id="icon-play"></span>
</a>
<a className="secondary-btn inline-flex items-center justify-center gap-2" href="#portfolio">
<span>See My Work</span>
<span id="icon-arrow"></span>
</a>
</div>
<div className="w-full max-w-2xl mx-auto mt-12">
<img alt="Cinematic profile" className="rounded-xl w-full h-[320px] object-cover object-top poster-shadow" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=900&amp;q=80" style={{border: '1.5px solid rgba(255,255,255,0.08)'}}/>
</div>
</section>

<div className="divider my-10 mx-auto w-11/12"></div>

<section className="max-w-4xl mx-auto px-4 py-12" id="about">
<h2 className="text-2xl md:text-3xl font-semibold cinematic tracking-tight mb-10 text-white">Act 1: Origin Story</h2>
<ol className="relative border-l-2 border-indigo-700 ml-6">
<li className="mb-10 ml-6">
<span className="storyboard-dot absolute -left-8 top-0 flex items-center justify-center">
<span id="icon-film"></span>
</span>
<div className="out-card p-6 pl-8">
<h3 className="font-semibold text-lg text-white mb-1 cinematic tracking-tight">Started as a Video Editor</h3>
<p className="text-gray-300 text-base">Crafted visual stories frame-by-frame—storytelling through motion.</p>
</div>
</li>
<li className="mb-10 ml-6">
<span className="storyboard-dot absolute -left-8 top-0 flex items-center justify-center bg-indigo-400">
<span id="icon-figma"></span>
</span>
<div className="out-card p-6 pl-8">
<h3 className="font-semibold text-lg text-white mb-1 cinematic tracking-tight">Discovered Figma — the Plot Twist</h3>
<p className="text-gray-300 text-base">Fell in love with designing interfaces and the power of collaborative creation.</p>
</div>
</li>
<li className="mb-10 ml-6">
<span className="storyboard-dot absolute -left-8 top-0 flex items-center justify-center bg-indigo-500">
<span id="icon-monitor"></span>
</span>
<div className="out-card p-6 pl-8">
<h3 className="font-semibold text-lg text-white mb-1 cinematic tracking-tight">Transitioned into UX/UI Design</h3>
<p className="text-gray-300 text-base">Blending filmic storytelling with digital experience design.</p>
</div>
</li>
<li className="ml-6">
<span className="storyboard-dot absolute -left-8 top-0 flex items-center justify-center bg-indigo-600">
<span id="icon-star"></span>
</span>
<div className="out-card p-6 pl-8">
<h3 className="font-semibold text-lg text-white mb-1 cinematic tracking-tight">Mission Today</h3>
<p className="text-gray-300 text-base">Designing digital experiences that feel cinematic and human.</p>
</div>
</li>
</ol>
</section>

<div className="divider my-10 mx-auto w-11/12"></div>

<section className="max-w-5xl mx-auto px-4 py-12">
<h2 className="text-2xl md:text-3xl font-semibold cinematic tracking-tight mb-10 text-white">Act 2: My Superpowers</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
<div className="out-card p-6 text-center">
<div className="flex items-center justify-center mb-3">
<span className="mr-2" id="icon-search"></span>
</div>
<div className="text-lg font-semibold cinematic text-white">Director of Curiosity</div>
<div className="text-gray-300 text-sm mb-2">UX Research</div>
</div>
<div className="out-card p-6 text-center">
<div className="flex items-center justify-center mb-3">
<span className="mr-2" id="icon-palette"></span>
</div>
<div className="text-lg font-semibold cinematic text-white">Visual Stylist</div>
<div className="text-gray-300 text-sm mb-2">UI Design</div>
</div>
<div className="out-card p-6 text-center">
<div className="flex items-center justify-center mb-3">
<span className="mr-2" id="icon-layers"></span>
</div>
<div className="text-lg font-semibold cinematic text-white">Scene Builder</div>
<div className="text-gray-300 text-sm mb-2">Prototyping</div>
</div>
<div className="out-card p-6 text-center">
<div className="flex items-center justify-center mb-3">
<span className="mr-2" id="icon-grid"></span>
</div>
<div className="text-lg font-semibold cinematic text-white">Continuity Manager</div>
<div className="text-gray-300 text-sm mb-2">Design Systems</div>
</div>
</div>
</section>

<div className="divider my-10 mx-auto w-11/12"></div>

<section className="max-w-6xl mx-auto px-4 py-12" id="portfolio">
<h2 className="text-2xl md:text-3xl font-semibold cinematic tracking-tight mb-10 text-white">Act 3: Blockbuster Projects</h2>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

<div className="film-poster group flex flex-col justify-between p-5 min-h-[270px]">
<div>
<div className="flex items-center gap-2 mb-4 text-indigo-400">
<span id="icon-ticket"></span>
<span className="cinematic font-semibold tracking-tight">The Booking Battle</span>
</div>
<div className="text-gray-200 text-lg font-semibold mb-2">Ticket booking app redesign</div>
<div className="text-gray-400 text-sm">Faster &amp; stress-free ticketing for everyone.</div>
</div>
<a className="movie-cta inline-flex items-center gap-2 mt-6" href="#">
<span>Read Case Study</span>
<span id="icon-arrow-right1"></span>
</a>
</div>

<div className="film-poster group flex flex-col justify-between p-5 min-h-[270px]">
<div>
<div className="flex items-center gap-2 mb-4 text-pink-400">
<span id="icon-bar-chart"></span>
<span className="cinematic font-semibold tracking-tight">The Startup Sidekick</span>
</div>
<div className="text-gray-200 text-lg font-semibold mb-2">Dashboard UX/UI</div>
<div className="text-gray-400 text-sm">Turning overwhelming data into clear insights.</div>
</div>
<a className="movie-cta inline-flex items-center gap-2 mt-6" href="#">
<span>Read Case Study</span>
<span id="icon-arrow-right2"></span>
</a>
</div>

<div className="film-poster group flex flex-col justify-between p-5 min-h-[270px]">
<div>
<div className="flex items-center gap-2 mb-4 text-emerald-400">
<span id="icon-shopping-bag"></span>
<span className="cinematic font-semibold tracking-tight">The E-Commerce Quest</span>
</div>
<div className="text-gray-200 text-lg font-semibold mb-2">Shopping app UI/UX</div>
<div className="text-gray-400 text-sm">Playful yet practical, shopping made delightful.</div>
</div>
<a className="movie-cta inline-flex items-center gap-2 mt-6" href="#">
<span>Read Case Study</span>
<span id="icon-arrow-right3"></span>
</a>
</div>

<div className="film-poster group flex flex-col justify-between p-5 min-h-[270px]">
<div>
<div className="flex items-center gap-2 mb-4 text-yellow-400">
<span id="icon-flask-conical"></span>
<span className="cinematic font-semibold tracking-tight">The Ongoing Saga</span>
</div>
<div className="text-gray-200 text-lg font-semibold mb-2">Current Creative Experiments</div>
<div className="text-gray-400 text-sm">Exploring, iterating, and learning new frontiers.</div>
</div>
<a className="movie-cta inline-flex items-center gap-2 mt-6" href="#">
<span>Read Case Study</span>
<span id="icon-arrow-right4"></span>
</a>
</div>
</div>
</section>

<div className="divider my-10 mx-auto w-11/12"></div>

<section className="max-w-3xl mx-auto px-4 py-12">
<h2 className="text-2xl md:text-3xl font-semibold cinematic tracking-tight mb-10 text-white">Act 4: Reviews</h2>
<div className="grid gap-8 md:grid-cols-2">

<div className="out-card p-6">
<div className="flex items-center mb-2">
<span className="review-star">★</span><span className="review-star">★</span><span className="review-star">★</span><span className="review-star">★</span><span className="review-star">★</span>
</div>
<div className="text-gray-200 text-base font-medium mb-3">
          “Working with Sharma Ji was like teaming up with a creative sidekick. His designs made our product fun to use and easy to love.”
        </div>
<div className="text-gray-400 text-sm">— Startup Founder</div>
</div>

<div className="out-card p-6">
<div className="flex items-center mb-2">
<span className="review-star">★</span><span className="review-star">★</span><span className="review-star">★</span><span className="review-star">★</span><span className="review-star">★</span>
</div>
<div className="text-gray-200 text-base font-medium mb-3">
          “He brings the perfect mix of creativity and clarity. The process was smooth, and the results spoke for themselves.”
        </div>
<div className="text-gray-400 text-sm">— Product Manager</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto text-center px-4 py-16" id="contact">
<h2 className="cinematic text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">The credits haven’t rolled yet —<br/>let’s make the next scene together.</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
<a className="cta-btn inline-flex items-center justify-center gap-2" href="#">
<span>Hire Me for Your Next Feature</span>
<span id="icon-clapperboard"></span>
</a>
<a className="secondary-btn inline-flex items-center justify-center gap-2" href="#">
<span>Let’s Connect</span>
<span id="icon-mail"></span>
</a>
</div>
</section>

<footer className="divider pt-8 pb-6 text-center text-gray-500 text-sm spotlight">
<div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto px-4 gap-2">
<div>© 2025 Sharma Ji — UX/UI Designer.</div>
<nav className="flex flex-wrap gap-4 justify-center mt-2 sm:mt-0">
<a className="hover:text-indigo-400 transition-colors" href="#">Home</a>|
        <a className="hover:text-indigo-400 transition-colors" href="#about">About</a>|
        <a className="hover:text-indigo-400 transition-colors" href="#portfolio">Portfolio</a>|
        <a className="hover:text-indigo-400 transition-colors" href="#contact">Contact</a>|
        <a className="hover:text-indigo-400 transition-colors" href="https://linkedin.com">LinkedIn</a>|
        <a className="hover:text-indigo-400 transition-colors" href="https://behance.net">Behance</a>
</nav>
</div>
</footer>


    </>
  );
}
