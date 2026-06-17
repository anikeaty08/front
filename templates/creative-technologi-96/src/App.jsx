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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute inset-0 z-0 pointer-events-none bg-grid-pattern h-[600px]"></div>

<header className="relative z-10 w-full max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
<a className="text-zinc-100 font-medium tracking-tighter text-lg uppercase flex items-center gap-2 hover:text-zinc-300 transition-colors" href="#">
<span className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center text-sm">SK</span>
            Port.
        </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-zinc-100 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-100 transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-zinc-100 transition-colors" href="#contact">Contact</a>
</nav>
<a className="md:hidden text-zinc-100" href="#contact">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</a>
</header>

<main className="relative z-10 flex-grow w-full max-w-5xl mx-auto px-6 py-12 md:py-24">

<section className="max-w-3xl animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-zinc-300 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Available for new opportunities
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-100 leading-tight">
                Bridging logic and creativity through code and design.
            </h1>
<p className="mt-6 text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
                I'm a BCA student passionate about building digital experiences. With a foundation in computer applications, backed by practical experience in digital marketing and graphic design, I bring a multidisciplinary approach to problem-solving.
            </p>
<div className="mt-10 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-zinc-100 text-zinc-900 text-sm font-medium hover:bg-white transition-colors gap-2" href="#contact">
                    Let's Connect
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100 transition-all gap-2" href="https://github.com" target="_blank">
<iconify-icon icon="solar:document-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    View Resume
                </a>
</div>
</section>

<section className="mt-32" id="expertise">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-100 mb-8">My Expertise</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="group relative flex flex-col justify-between p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/80 transition-colors duration-300 overflow-hidden md:col-span-2 lg:col-span-1 min-h-[280px]">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
<iconify-icon icon="solar:laptop-minimalistic-linear" style={{strokeWidth: '1.5'}} width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-100 mb-6 border border-zinc-700/50">
<iconify-icon icon="solar:book-bookmark-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight">Computer Applications</h3>
<p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                            Currently pursuing my BCA. Focused on understanding core computing principles, software development methodologies, and database management to build robust technical foundations.
                        </p>
</div>
</div>

<div className="group relative flex flex-col justify-between p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/80 transition-colors duration-300 overflow-hidden min-h-[280px]">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
<iconify-icon icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-100 mb-6 border border-zinc-700/50">
<iconify-icon icon="solar:megaphone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight">Digital Marketing</h3>
<p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                            One year of hands-on experience. I specialize in strategizing digital campaigns, analyzing metrics, and optimizing content to drive engagement and organic growth.
                        </p>
</div>
<div className="relative z-10 mt-6 inline-flex items-center text-xs font-medium text-zinc-500">
<iconify-icon className="mr-1" icon="solar:clock-circle-linear" width="14"></iconify-icon> 1 Year Experience
                    </div>
</div>

<div className="group relative flex flex-col justify-between p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/80 transition-colors duration-300 overflow-hidden min-h-[280px]">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
<iconify-icon icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-100 mb-6 border border-zinc-700/50">
<iconify-icon icon="solar:pallete-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight">Graphic Design</h3>
<p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                            A keen eye for aesthetics. I create bespoke illustrations and visual assets that communicate complex ideas simply and beautifully, enhancing brand identity.
                        </p>
</div>
<div className="relative z-10 mt-6 flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-zinc-800/50 border border-zinc-700 text-xs text-zinc-300">Illustrations</span>
<span className="px-2 py-1 rounded bg-zinc-800/50 border border-zinc-700 text-xs text-zinc-300">Visual Identity</span>
</div>
</div>
</div>
</section>

<section className="mt-24 pt-12 border-t border-zinc-900/50 text-center">
<p className="text-xs font-medium text-zinc-500 tracking-wider uppercase mb-8">Tools &amp; Technologies I work with</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-zinc-300 hover:text-zinc-100 transition-colors">
<iconify-icon icon="solar:figma-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-sm font-medium">Figma</span>
</div>
<div className="flex items-center gap-2 text-zinc-300 hover:text-zinc-100 transition-colors">
<iconify-icon icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-sm font-medium">Web Tech</span>
</div>
<div className="flex items-center gap-2 text-zinc-300 hover:text-zinc-100 transition-colors">
<iconify-icon icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-sm font-medium">Analytics</span>
</div>
<div className="flex items-center gap-2 text-zinc-300 hover:text-zinc-100 transition-colors">
<iconify-icon icon="solar:pen-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-sm font-medium">Illustrator</span>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-zinc-900 bg-zinc-950 mt-auto" id="contact">
<div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start">
<span className="text-zinc-100 font-medium tracking-tighter text-lg uppercase flex items-center gap-2 mb-2">
<span className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center text-xs border border-zinc-700">SK</span>
</span>
<p className="text-xs text-zinc-500 text-center md:text-left">
                    Bridging technology and design.<br/> Currently studying BCA.
                </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4">

<a className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-zinc-100 transition-colors px-4 py-2 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800" href="mailto:pinkyakshu18@gmail.com">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    pinkyakshu18@gmail.com
                </a>
<div className="flex items-center gap-2">
<a className="text-zinc-400 hover:text-zinc-100 transition-colors p-2 rounded-full hover:bg-zinc-900" href="#">
<iconify-icon icon="solar:link-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="sr-only">LinkedIn</span>
</a>
<a className="text-zinc-400 hover:text-zinc-100 transition-colors p-2 rounded-full hover:bg-zinc-900" href="#">
<iconify-icon icon="solar:figma-file-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="sr-only">Dribbble / Portfolio</span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
