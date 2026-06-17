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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight" href="#">saad<span className="text-zinc-400">amin</span></a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#work">Work</a>
<a className="hover:text-zinc-900 transition-colors" href="#skills">Skills</a>
<a className="hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>
<a className="md:hidden" href="#contact">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:menu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</nav>

<section className="min-h-screen flex flex-col max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-12 pl-6 justify-center">
<div className="max-w-4xl space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Available for new projects
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-950 leading-[1.1]">
                Crafting visual identities &amp; <br className="hidden md:block"/> digital experiences.
            </h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl font-light leading-relaxed">
                I'm <span className="text-zinc-900 font-medium">Saad Amin</span>, a Graphic Designer specializing in Branding, Social Media, and Print Design. I translate complex ideas into clean, impactful visuals.
            </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 transition-all hover:scale-[1.02]" href="#contact">
                    Start a Project
                </a>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-900 font-medium text-sm hover:bg-zinc-100 transition-all" href="#work">
                    View Portfolio
                </a>
</div>
<div className="pt-12 flex items-center gap-6 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="https://wa.me/923238823352" target="_blank">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:message-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="sr-only">WhatsApp</span>
</a>
<a className="hover:text-zinc-900 transition-colors" href="https://instagram.com/filmbyaaronn" target="_blank">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
<span className="sr-only">Instagram</span>
</a>
<a className="hover:text-zinc-900 transition-colors" href="mailto:saadaminfaiq@gmail.com">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:mail" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<span className="sr-only">Email</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-100" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
<div className="relative bg-white aspect-[4/5] rounded-xl overflow-hidden shadow-sm border border-zinc-100">

<img alt="Saad Amin Workspace" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<div className="space-y-8">
<div className="space-y-2">
<h2 className="text-sm font-semibold text-zinc-400 tracking-wider uppercase">About Me</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">Adaptive. Creative. <br/>Modern.</h3>
</div>
<p className="text-zinc-600 leading-relaxed">
                    I believe design is more than just aesthetics; it's about solving problems and communicating values. With a focus on modern branding and dynamic social media content, I help businesses elevate their visual presence. My approach is rooted in minimalism and strategic thinking, ensuring every pixel serves a purpose.
                </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div>
<h4 className="text-2xl font-semibold text-zinc-900">4+</h4>
<p className="text-sm text-zinc-500 mt-1">Years Experience</p>
</div>
<div>
<h4 className="text-2xl font-semibold text-zinc-900">100+</h4>
<p className="text-sm text-zinc-500 mt-1">Projects Completed</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="skills">
<div className="mb-16">
<h2 className="text-sm font-semibold text-zinc-400 tracking-wider uppercase mb-2">Expertise</h2>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900">Tools &amp; Capabilities</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-4 text-zinc-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:pen-tool" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
</div>
<h4 className="font-medium text-zinc-900 mb-2">Branding</h4>
<ul className="text-sm text-zinc-500 space-y-1">
<li>Logo Design</li>
<li>Brand Identity</li>
<li>Business Cards</li>
</ul>
</div>

<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-4 text-zinc-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:monitor" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8m-4-4v4"></path></g></svg>
</div>
<h4 className="font-medium text-zinc-900 mb-2">Digital Design</h4>
<ul className="text-sm text-zinc-500 space-y-1">
<li>Social Media Posts</li>
<li>YouTube Thumbnails</li>
<li>Web Banners</li>
</ul>
</div>

<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-4 text-zinc-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:printer" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect height="8" rx="1" width="12" x="6" y="14"></rect></g></svg>
</div>
<h4 className="font-medium text-zinc-900 mb-2">Print Media</h4>
<ul className="text-sm text-zinc-500 space-y-1">
<li>Flyers &amp; Posters</li>
<li>Brochures</li>
<li>Packaging</li>
</ul>
</div>

<div className="p-6 rounded-2xl bg-zinc-900 text-white border border-zinc-800">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-zinc-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h4 className="font-medium mb-2">Software Stack</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-zinc-800 text-xs font-medium text-zinc-300">Photoshop</span>
<span className="px-2 py-1 rounded bg-zinc-800 text-xs font-medium text-zinc-300">Illustrator</span>
<span className="px-2 py-1 rounded bg-zinc-800 text-xs font-medium text-zinc-300">Figma</span>
<span className="px-2 py-1 rounded bg-zinc-800 text-xs font-medium text-zinc-300">Canva</span>
</div>
</div>
</div>
</section>

<div className="bg-zinc-50 border-t border-zinc-200" id="work">

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-sm font-semibold text-zinc-400 tracking-wider uppercase mb-2">Identity</h2>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900">Logo Design</h3>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="aspect-square bg-white border border-zinc-200 rounded-xl flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default">
<div className="text-center">
<div className="w-12 h-12 mx-auto bg-zinc-900 rounded-lg flex items-center justify-center text-white mb-3">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cpu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
<span className="font-semibold tracking-tight text-zinc-900">NovaTech</span>
<p className="text-xs text-zinc-400 mt-1">Technology</p>
</div>
</div>

<div className="aspect-square bg-white border border-zinc-200 rounded-xl flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default">
<div className="text-center">
<div className="w-12 h-12 mx-auto border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-600 mb-3">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sprout" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="font-semibold tracking-tight text-zinc-900">Bloomify</span>
<p className="text-xs text-zinc-400 mt-1">Organic Skincare</p>
</div>
</div>

<div className="aspect-square bg-white border border-zinc-200 rounded-xl flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default">
<div className="text-center">
<div className="flex items-center justify-center gap-1 mb-3">
<div className="w-3 h-8 bg-indigo-600 rounded-full"></div>
<div className="w-3 h-5 bg-indigo-400 rounded-full"></div>
<div className="w-3 h-10 bg-indigo-900 rounded-full"></div>
</div>
<span className="font-semibold tracking-tight text-zinc-900">UrbanWave</span>
<p className="text-xs text-zinc-400 mt-1">Streetwear</p>
</div>
</div>

<div className="aspect-square bg-white border border-zinc-200 rounded-xl flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default">
<div className="text-center">
<div className="w-12 h-12 mx-auto border border-zinc-900 transform rotate-45 flex items-center justify-center mb-3">
<div className="w-6 h-6 bg-zinc-900"></div>
</div>
<span className="font-semibold tracking-tight text-zinc-900">ApexArch</span>
<p className="text-xs text-zinc-400 mt-1">Architecture</p>
</div>
</div>

<div className="aspect-square bg-white border border-zinc-200 rounded-xl flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default">
<div className="text-center">
<svg aria-hidden="true" className="iconify text-4xl text-amber-500 mb-2 mx-auto iconify--lucide" data-icon="lucide:sun" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
<span className="font-serif italic font-medium text-xl text-zinc-900 block">Luminar</span>
<p className="text-xs text-zinc-400 mt-1">Lighting</p>
</div>
</div>

<div className="aspect-square bg-white border border-zinc-200 rounded-xl flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default">
<div className="text-center">
<svg aria-hidden="true" className="iconify text-4xl text-blue-600 mb-2 mx-auto iconify--lucide" data-icon="lucide:zap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-bold tracking-tighter text-lg uppercase text-zinc-900 block">Flux</span>
<p className="text-xs text-zinc-400 mt-1">Energy</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-200 bg-white">
<div className="mb-12">
<h2 className="text-sm font-semibold text-zinc-400 tracking-wider uppercase mb-2">Engagement</h2>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900">Social Media</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-square overflow-hidden rounded-lg bg-zinc-100 mb-4 relative">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
<img alt="Social Media Post" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium text-zinc-900">Minimalist Furniture Sale</h4>
<p className="text-xs text-zinc-500 mt-1">Instagram Promotion</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square overflow-hidden rounded-lg bg-zinc-100 mb-4 relative">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
<img alt="Product Launch" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium text-zinc-900">Nike Shoe Product Launch</h4>
<p className="text-xs text-zinc-500 mt-1">Carousel Design</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square overflow-hidden rounded-lg bg-zinc-100 mb-4 relative">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
<div className="w-full h-full bg-zinc-900 flex items-center justify-center p-8 text-center">
<h3 className="text-white text-2xl font-serif italic">"Design is intelligence made visible."</h3>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium text-zinc-900">Quote of the Day</h4>
<p className="text-xs text-zinc-500 mt-1">Brand Awareness</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto bg-zinc-50 border-t border-zinc-200">
<div className="mb-12">
<h2 className="text-sm font-semibold text-zinc-400 tracking-wider uppercase mb-2">Content</h2>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900">YouTube Thumbnails</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="aspect-video overflow-hidden rounded-xl bg-zinc-200 relative shadow-sm hover:shadow-md transition-all">
<img alt="Tech Review" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-3 right-3 bg-black/80 px-2 py-0.5 rounded text-xs text-white font-medium">12:04</div>
<div className="absolute inset-0 flex items-center justify-center">
<h3 className="text-3xl font-bold text-white uppercase drop-shadow-md tracking-tighter text-center leading-none px-4"><span className="bg-red-600 px-2">Web Dev</span>Masterclass</h3>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video overflow-hidden rounded-xl bg-zinc-800 relative shadow-sm hover:shadow-md transition-all">
<img alt="Gaming" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-overlay" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-3 right-3 bg-black/80 px-2 py-0.5 rounded text-xs text-white font-medium">08:30</div>
<div className="absolute top-4 left-4">
<h3 className="text-4xl font-black text-yellow-400 uppercase italic drop-shadow-lg stroke-black">Unboxing <span className="text-white">The Future</span></h3>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video overflow-hidden rounded-xl bg-indigo-900 relative shadow-sm hover:shadow-md transition-all">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-purple-600 opacity-90"></div>
<div className="absolute bottom-3 right-3 bg-black/80 px-2 py-0.5 rounded text-xs text-white font-medium">15:45</div>
<div className="absolute inset-0 flex flex-col items-center justify-center p-4">
<svg aria-hidden="true" className="iconify text-white text-5xl mb-2 iconify--lucide" data-icon="lucide:trending-up" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
<h3 className="text-2xl font-bold text-white text-center">GROW YOUR <span className="text-green-400">BUSINESS</span></h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto bg-white border-t border-zinc-200">
<div className="mb-12">
<h2 className="text-sm font-semibold text-zinc-400 tracking-wider uppercase mb-2">Print</h2>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900">Flyers &amp; Posters</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="group relative aspect-[3/4] bg-zinc-100 rounded-lg overflow-hidden cursor-pointer">
<img alt="Event Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white font-medium text-sm">Music Festival 2024</span>
</div>
</div>

<div className="group relative aspect-[3/4] bg-zinc-100 rounded-lg overflow-hidden cursor-pointer">
<div className="w-full h-full bg-zinc-900 p-6 flex flex-col justify-between">
<h3 className="text-white text-3xl font-bold uppercase tracking-tighter leading-none">Midnight Sale</h3>
<div className="text-white/60 text-xs">
<p>50% Off Everything</p>
<p>This Friday Only</p>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] bg-zinc-100 rounded-lg overflow-hidden cursor-pointer">
<img alt="Corporate Flyer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="border border-white/50 p-4 w-full h-full flex items-center justify-center">
<span className="text-white font-serif italic text-2xl">Conference</span>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] bg-orange-50 rounded-lg overflow-hidden cursor-pointer flex items-center justify-center p-6 text-center border border-orange-100">
<div>
<svg aria-hidden="true" className="iconify text-4xl text-orange-500 mx-auto mb-4 iconify--lucide" data-icon="lucide:utensils" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="font-bold text-zinc-900 text-xl mb-1">Burger Joint</h4>
<p className="text-zinc-500 text-xs uppercase tracking-wide">Grand Opening</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto bg-zinc-50 border-t border-zinc-200">
<div className="mb-12">
<h2 className="text-sm font-semibold text-zinc-400 tracking-wider uppercase mb-2">Stationery</h2>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900">Business Cards</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative bg-white rounded-xl shadow-sm border border-zinc-200 p-8 md:p-12 flex flex-col items-center justify-center overflow-hidden group">

<div className="relative w-72 h-44 bg-zinc-900 rounded shadow-2xl transform group-hover:-rotate-2 transition-transform duration-500 flex flex-col justify-center items-center text-white z-10">
<svg aria-hidden="true" className="iconify text-2xl mb-2 iconify--lucide" data-icon="lucide:hexagon" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm font-medium tracking-widest uppercase">Architek</span>
</div>
<div className="absolute w-72 h-44 bg-zinc-200 rounded shadow-lg transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-2 transition-all duration-500 flex flex-col justify-center items-center">
</div>
</div>

<div className="relative bg-white rounded-xl shadow-sm border border-zinc-200 p-8 md:p-12 flex flex-col items-center justify-center overflow-hidden group">
<div className="relative w-72 h-44 bg-white border border-zinc-100 rounded shadow-xl transform group-hover:rotate-1 transition-transform duration-500 p-6 flex flex-col justify-between">
<div className="text-xs text-zinc-400">Minimalist Studio</div>
<div>
<h4 className="font-bold text-zinc-900">Sarah Jenkins</h4>
<p className="text-[10px] text-zinc-500">Creative Director</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto bg-white border-t border-zinc-200">
<div className="mb-12">
<h2 className="text-sm font-semibold text-zinc-400 tracking-wider uppercase mb-2">Marketing</h2>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900">Ads &amp; Banners</h3>
</div>
<div className="space-y-6">

<div className="w-full h-32 md:h-48 bg-zinc-900 rounded-lg overflow-hidden relative flex items-center px-8 md:px-16 justify-between group">
<div className="z-10 relative">
<span className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2 block">Spring Sale</span>
<h4 className="text-2xl md:text-4xl text-white font-bold tracking-tight">Upgrade your Setup.</h4>
</div>
<button className="z-10 bg-white text-zinc-900 px-6 py-2 rounded-full font-medium text-sm hover:bg-zinc-100 transition-colors">Shop Now</button>

<div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-zinc-800 to-transparent skew-x-12 opacity-50"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="aspect-[2/1] bg-blue-600 rounded-lg overflow-hidden relative flex flex-col justify-center px-8">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-blue-600 to-blue-900"></div>
<h4 className="relative text-white font-bold text-2xl mb-2">Cloud Hosting  Made Simple.</h4>
<p className="relative text-blue-100 text-sm">Start your 14-day free trial.</p>
</div>

<div className="aspect-[2/1] bg-zinc-100 rounded-lg overflow-hidden relative flex items-center p-8 border border-zinc-200">
<img alt="Watch" className="absolute right-[-20px] h-[120%] w-auto object-contain drop-shadow-xl rotate-12" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="relative z-10 max-w-[60%]">
<h4 className="text-zinc-900 font-bold text-xl mb-1">Timeless Elegance.</h4>
<p className="text-zinc-500 text-sm">Discover the collection.</p>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="bg-zinc-950 text-white py-24 px-6" id="contact">
<div className="max-w-3xl mx-auto text-center space-y-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Let's create something <br/>extraordinary together.</h2>
<p className="text-zinc-400 text-lg">I'm currently available for freelance projects.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
<a className="flex items-center gap-3 px-6 py-4 bg-white text-zinc-950 rounded-full font-medium hover:bg-zinc-200 transition-colors w-full md:w-auto justify-center" href="mailto:saadaminfaiq@gmail.com">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:mail" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
                    saadaminfaiq@gmail.com
                </a>
<a className="flex items-center gap-3 px-6 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors w-full md:w-auto justify-center" href="https://wa.me/923238823352">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:message-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    +92 323 8823352
                </a>
</div>
<div className="pt-16 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
<p>© 2024 Saad Amin. All Rights Reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors flex items-center gap-2" href="https://instagram.com/filmbyaaronn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg> @filmbyaaronn
                    </a>
</div>
</div>
</div>
</section>

    </>
  );
}
