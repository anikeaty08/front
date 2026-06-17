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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b bg-gray-950/80 border-gray-800/50">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group text-lg font-medium text-white tracking-tighter" href="#" style={{}}>Daniel Afrahim<div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold group-hover:bg-gray-300 transition-colors bg-gray-100 text-black">D</div></a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="transition-colors hover:text-white" href="#work">Work</a>
<a className="transition-colors hover:text-white" href="#about">About</a>
<a className="transition-colors hover:text-white" href="#contact">Contact</a>
</div>
<a className="text-xs font-medium px-4 py-2 rounded-full transition-colors flex items-center gap-2 bg-white text-black hover:bg-gray-200" href="mailto:hello@example.com">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="14"></iconify-icon>
                Get in touch
            </a>
</div>
</nav>
<main className="max-w-5xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">

<section className="mb-32 animate-fade-in-up">
<div className="flex flex-col md:flex-row gap-12 items-start justify-between">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 bg-gray-900 border-gray-800 text-gray-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Available for new projects
                    </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-8 text-white">
                        Crafting digital <br/>
<span className="text-gray-500">experiences with focus.</span>
</h1>
<p className="text-lg md:text-xl max-w-lg leading-relaxed mb-10 text-gray-400">
                        I am a multidisciplinary product designer based in New York City, focused on creating refined interfaces for the modern web.
                    </p>
<div className="flex gap-4">
<button className="group flex items-center gap-2 border-b pb-1 hover:opacity-70 transition-opacity text-white border-white">
                            See selected work
                            <iconify-icon className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" icon="lucide:arrow-down-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:block w-64 h-64 relative">
<div className="absolute inset-0 rounded-full blur-3xl opacity-40 bg-gradient-to-br from-purple-400 to-purple-600"></div>
<img alt="Portrait" className="hover:grayscale-0 transition-all duration-700 ease-out hover:rotate-0 w-full h-full object-cover border-gray-800 border rounded-2xl grayscale rotate-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fc08f63-3317-49ba-a823-0b1110591a25_800w.jpg" style={{}}/>
</div>
</div>
</section>

<section className="mb-32" id="work">
<div className="flex items-end justify-between mb-12 border-b pb-4 border-gray-800">
<h2 className="text-2xl font-medium tracking-tight text-white">Selected Work</h2>
<span className="text-sm">2021 — 2024</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative rounded-3xl border overflow-hidden transition-colors duration-500 bg-gray-900 border-gray-800 hover:border-gray-600">
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="mb-8">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-medium tracking-tight text-white">Lumina Finance</h3>
<div className="p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -mr-2 -mt-2 bg-gray-800">
<iconify-icon className="text-white" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
</div>
<p className="text-sm text-gray-500">Fintech Dashboard &amp; Design System</p>
</div>
<div className="w-full aspect-[4/3] rounded-xl overflow-hidden border relative group-hover:translate-y-[-4px] transition-transform duration-500 bg-gray-950 border-gray-800">
<img alt="Project 1" className="object-cover w-full h-full opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
</div>
</div>

<div className="group relative rounded-3xl border overflow-hidden transition-colors duration-500 bg-gray-900 border-gray-800 hover:border-gray-600">
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="mb-8">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-medium tracking-tight text-white">Chronos</h3>
<div className="p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -mr-2 -mt-2 bg-gray-800">
<iconify-icon className="text-white" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
</div>
<p className="text-sm text-gray-500">Productivity &amp; Calendar App</p>
</div>
<div className="w-full aspect-[4/3] rounded-xl overflow-hidden border relative group-hover:translate-y-[-4px] transition-transform duration-500 bg-gray-950 border-gray-800">
<img alt="Project 2" className="object-cover w-full h-full opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="md:col-span-2 group relative rounded-3xl border overflow-hidden transition-colors duration-500 bg-gray-900 border-gray-800 hover:border-gray-600">
<div className="grid md:grid-cols-2 gap-8 p-8 items-center">
<div className="order-2 md:order-1">
<div className="mb-6">
<h3 className="text-xl font-medium tracking-tight mb-2 text-white">Vanguard Architecture</h3>
<p className="text-sm text-gray-500 mb-6">Portfolio redesign for an award-winning architecture firm based in Tokyo.</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs border rounded-md px-2 py-1 border-gray-800">Web Design</span>
<span className="text-xs border rounded-md px-2 py-1 border-gray-800">Development</span>
</div>
</div>
</div>
<div className="order-1 md:order-2 w-full aspect-video rounded-xl overflow-hidden border relative bg-gray-950 border-gray-800">
<img alt="Project 3" className="object-cover w-full h-full opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32" id="about">
<div className="grid md:grid-cols-3 gap-12">
<div className="col-span-1">
<h2 className="text-2xl font-medium tracking-tight sticky top-24 text-white">Experience</h2>
</div>
<div className="col-span-2 space-y-12">

<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-lg font-medium text-white">Senior Product Designer</h3>
<span className="text-xs font-mono text-gray-500">2022 — Present</span>
</div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-gray-600" icon="lucide:briefcase" width="14"></iconify-icon>
<span className="text-sm text-gray-300">Stripe</span>
</div>
<p className="text-sm leading-relaxed text-gray-500">Leading the design system team and contributing to the core checkout experience. Focusing on micro-interactions and accessibility standards across the platform.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-lg font-medium text-white">Product Designer</h3>
<span className="text-xs font-mono text-gray-500">2020 — 2022</span>
</div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-gray-600" icon="lucide:layers" width="14"></iconify-icon>
<span className="text-sm text-gray-300">Linear</span>
</div>
<p className="text-sm leading-relaxed text-gray-500">Worked on the issue tracking interface and keybaord shortcuts. Helped define the dark mode aesthetic and motion design principles.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-lg font-medium text-white">Freelance</h3>
<span className="text-xs font-mono text-gray-500">2018 — 2020</span>
</div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-gray-600" icon="lucide:pen-tool" width="14"></iconify-icon>
<span className="text-sm text-gray-300">Self-Employed</span>
</div>
<p className="text-sm leading-relaxed text-gray-500">Collaborated with early-stage startups to launch MVPs. Delivered end-to-end design solutions from branding to frontend implementation.</p>
</div>
</div>
</div>
</section>

<section className="mb-32 py-12 border-y border-gray-900">
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:figma" width="20"></iconify-icon>
<span className="text-sm font-medium">Figma</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:framer" width="20"></iconify-icon>
<span className="text-sm font-medium">Framer</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:code-2" width="20"></iconify-icon>
<span className="text-sm font-medium">React</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:wind" width="20"></iconify-icon>
<span className="text-sm font-medium">Tailwind</span>
</div>
</div>
</section>

<section className="flex flex-col items-center justify-center text-center py-20" id="contact">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-white">Let's build something <br/> meaningful together.</h2>
<p className="text-gray-500 mb-10 max-w-md">Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
<a className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium overflow-hidden transition-all bg-white text-black hover:bg-gray-200" href="mailto:hello@daniel.design">
<span className="relative z-10">Say Hello</span>
<iconify-icon className="relative z-10 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="2" width="18"></iconify-icon>
</a>
<div className="mt-20 flex gap-6">
<a className="p-3 rounded-full transition-all border bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border-gray-800" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
<a className="p-3 rounded-full transition-all border bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border-gray-800" href="#">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
</a>
<a className="p-3 rounded-full transition-all border bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border-gray-800" href="#">
<iconify-icon icon="lucide:dribbble" width="20"></iconify-icon>
</a>
<a className="p-3 rounded-full transition-all border bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border-gray-800" href="#">
<iconify-icon icon="lucide:github" width="20"></iconify-icon>
</a>
</div>
<div className="mt-12 text-xs text-gray-600">
                © 2024 Daniel Portfolio. Built with Tailwind CSS.
            </div>
</section>
</main>

    </>
  );
}
