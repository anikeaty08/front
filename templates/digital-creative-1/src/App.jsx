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



        lucide.createIcons();
    
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
      

<header className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

<div className="relative flex flex-col justify-between p-6 md:p-12 lg:p-16 pt-32 lg:pt-16">
<div>
<h1 className="text-[13vw] lg:text-[9vw] leading-[0.85] tracking-tighter font-medium text-black">
                    Lorian<br/>Hans
                </h1>
</div>
<div className="flex flex-col md:flex-row justify-between items-end md:items-center w-full mt-24 lg:mt-0 border-t border-gray-100 pt-6 md:border-none md:pt-0">
<p className="text-base md:text-lg text-gray-500 font-normal max-w-xs leading-snug">
                    Web Designer &amp; Digital Creative based in France
                </p>
<a className="group flex items-center gap-2 text-sm md:text-base font-medium mt-4 md:mt-0" href="#work">
                    Selected Work 
                    <i className="w-4 h-4 transition-transform group-hover:translate-y-1" data-lucide="arrow-down"></i>
</a>
</div>
</div>

<div className="relative h-[60vh] lg:h-auto bg-gray-100 overflow-hidden">
<img alt="Portrait" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 right-8 flex flex-col gap-2 z-10">
<button className="bg-white text-black px-5 py-2.5 rounded-full text-xs font-medium hover:bg-gray-100 transition-colors shadow-lg">
                    Remix for Free
                </button>
<button className="bg-white text-black px-5 py-2.5 rounded-full text-xs font-medium hover:bg-gray-100 transition-colors shadow-lg">
                    More Templates
                </button>
</div>
</div>
</header>

<section className="bg-white p-2" id="work">
<div className="grid grid-cols-1 md:grid-cols-2 gap-2">

<div className="group relative aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 text-white mix-blend-difference">
<h3 className="text-2xl font-medium tracking-tight">Scarlet Design Studio®</h3>
</div>
</div>

<div className="group relative aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<h3 className="text-4xl md:text-5xl font-medium tracking-tighter text-white drop-shadow-lg text-center uppercase">Amber Studio</h3>
</div>
</div>

<div className="group relative aspect-[4/3] bg-gray-50 overflow-hidden cursor-pointer">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-8 left-8 right-8">
<h3 className="text-3xl md:text-4xl font-medium tracking-tighter text-gray-900 uppercase">KeystoneStudio</h3>
</div>
</div>

<div className="group relative aspect-[4/3] bg-white overflow-hidden cursor-pointer border border-gray-100">
<div className="flex h-full w-full">
<div className="w-1/2 p-8 flex items-center bg-gray-50">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-none">Defining Visual Storytelling.</h3>
</div>
<div className="w-1/2 grid grid-rows-2">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>

<div className="group relative aspect-[4/3] bg-[#1a1a1a] overflow-hidden cursor-pointer p-8 md:p-12 flex items-center justify-center">
<div className="w-full max-w-lg">
<div className="text-white mb-6">
<p className="text-sm opacity-60">Hey, I'm Lorian.</p>
<p className="text-lg">I'm a Web &amp; Product Designer.</p>
</div>
<div className="bg-gray-800/50 rounded-lg p-2 border border-white/10 overflow-hidden">
<img className="w-full rounded opacity-80" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2015&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-50" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight uppercase mb-2">Alexander Smith</h3>
<div className="w-12 h-px bg-white/50"></div>
</div>
</div>
</div>
<div className="flex justify-center py-8">
<div className="w-3 h-3 border border-gray-300 rounded-full"></div>
</div>
</section>

<section className="max-w-screen-xl mx-auto px-6 md:px-12 py-24 md:py-32">
<h2 className="text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight font-medium max-w-5xl">
            From responsive design to seamless UX, my work is driven by curiosity, attention to detail, <span className="text-gray-400">and a deep passion for creating meaningful digital products.</span>
</h2>
</section>

<section className="max-w-screen-xl mx-auto px-6 md:px-12 pb-24">
<h3 className="text-xl font-medium mb-12">Services</h3>
<div className="border-t border-gray-200">

<div className="group py-8 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-gray-50 transition-colors px-2">
<div className="col-span-1 md:col-span-1 text-xs text-gray-400 font-mono">(1)</div>
<div className="col-span-11 md:col-span-4 text-xl font-medium">Web Design</div>
<div className="col-span-12 md:col-span-7 text-right md:text-right text-sm text-gray-600 leading-relaxed">
                    No-code development<br/>SEO optimization<br/>Copywriting
                </div>
</div>

<div className="group py-8 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-gray-50 transition-colors px-2">
<div className="col-span-1 md:col-span-1 text-xs text-gray-400 font-mono">(2)</div>
<div className="col-span-11 md:col-span-4 text-xl font-medium">Brand Identity</div>
<div className="col-span-12 md:col-span-7 text-right md:text-right text-sm text-gray-600 leading-relaxed">
                    Logo design<br/>Brand guidelines<br/>Visual systems
                </div>
</div>

<div className="group py-8 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-gray-50 transition-colors px-2">
<div className="col-span-1 md:col-span-1 text-xs text-gray-400 font-mono">(3)</div>
<div className="col-span-11 md:col-span-4 text-xl font-medium">Graphic Design</div>
<div className="col-span-12 md:col-span-7 text-right md:text-right text-sm text-gray-600 leading-relaxed">
                    Infographic design<br/>Typography<br/>Color Systems
                </div>
</div>

<div className="group py-8 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-gray-50 transition-colors px-2">
<div className="col-span-1 md:col-span-1 text-xs text-gray-400 font-mono">(4)</div>
<div className="col-span-11 md:col-span-4 text-xl font-medium">Creative Strategy</div>
<div className="col-span-12 md:col-span-7 text-right md:text-right text-sm text-gray-600 leading-relaxed">
                    Design consultation<br/>Content creation<br/>Social media marketing
                </div>
</div>
</div>
</section>

<section className="grid grid-cols-2 md:grid-cols-4 bg-gray-50 border-y border-gray-100">
<div className="h-40 border-r border-b md:border-b-0 border-gray-200 flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity">
<svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
<div className="h-40 border-r border-b md:border-b-0 border-gray-200 flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity">
<span className="text-xl font-bold tracking-widest text-gray-800">IPSUM</span>
</div>
<div className="h-40 border-r border-gray-200 flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity">
<svg className="w-16 h-8" fill="currentColor" viewbox="0 0 50 20"><path d="M15 10c0-2.8-2.2-5-5-5s-5 2.2-5 5 2.2 5 5 5 5-2.2 5-5zm10 0c0-2.8-2.2-5-5-5s-5 2.2-5 5 2.2 5 5 5 5-2.2 5-5zm10 0c0-2.8-2.2-5-5-5s-5 2.2-5 5 2.2 5 5 5 5-2.2 5-5z"></path></svg>
</div>
<div className="h-40 flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity">
<svg className="w-14 h-14" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L24 24H0L12 0Z"></path></svg>
</div>
</section>

<section className="max-w-screen-xl mx-auto px-6 md:px-12 py-32">
<h2 className="text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight font-medium max-w-5xl">
            I'm Lorian Hans, a Web Designer &amp; Digital Creative with over a decade of experience crafting clean, user-focused digital experiences, <span className="text-gray-400">I specialize in turning complex ideas into intuitive, beautiful websites.</span>
</h2>
</section>

<section className="max-w-screen-xl mx-auto px-6 md:px-12 pb-24">
<div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
<h3 className="text-xl font-medium">Experience</h3>
<a className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors" href="#">
<i className="w-4 h-4" data-lucide="download"></i> Download CV
            </a>
</div>
<div className="space-y-12">

<div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-6 border-b border-gray-100 pb-12">
<div className="col-span-2 text-sm text-gray-400">2020 — Now</div>
<div className="col-span-12 md:col-span-8 pr-0 md:pr-12">
<h4 className="text-xl font-medium mb-3">Senior Web Designer</h4>
<p className="text-gray-600 text-base leading-relaxed">Designed and developed 100+ websites for clients across tech, e-commerce, and creative industries. Led end-to-end design processes including strategy, UX research, wireframing, prototyping, and development.</p>
</div>
<div className="col-span-2 md:text-right text-sm font-medium">Freelance</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-6 border-b border-gray-100 pb-12">
<div className="col-span-2 text-sm text-gray-400">2018 — 2020</div>
<div className="col-span-12 md:col-span-8 pr-0 md:pr-12">
<h4 className="text-xl font-medium mb-3">Lead Web Designer</h4>
<p className="text-gray-600 text-base leading-relaxed">Led the design team on client web projects, from discovery to launch. Oversaw design quality, brand alignment, and usability across all deliverables.</p>
</div>
<div className="col-span-2 md:text-right text-sm font-medium">Nova Digital Agency</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-6 border-b border-gray-100 pb-12">
<div className="col-span-2 text-sm text-gray-400">2015 — 2018</div>
<div className="col-span-12 md:col-span-8 pr-0 md:pr-12">
<h4 className="text-xl font-medium mb-3">Web &amp; UI Designer</h4>
<p className="text-gray-600 text-base leading-relaxed">Created custom website designs and landing pages for small-to-mid-size businesses. Delivered mobile-first, responsive designs with a strong focus on usability and aesthetics.</p>
</div>
<div className="col-span-2 md:text-right text-sm font-medium">Creative Pixel Studio</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-6 pb-4">
<div className="col-span-2 text-sm text-gray-400">2013 — 2015</div>
<div className="col-span-12 md:col-span-8 pr-0 md:pr-12">
<h4 className="text-xl font-medium mb-3">Junior Web Designer</h4>
<p className="text-gray-600 text-base leading-relaxed">Supported senior designers on web projects, handling layout, typography, and visual refinements. Converted mockups into pixel-perfect HTML/CSS templates.</p>
</div>
<div className="col-span-2 md:text-right text-sm font-medium">DesignHive Agency</div>
</div>
</div>
</section>

<section className="max-w-screen-xl mx-auto px-6 md:px-12 pb-24">
<h3 className="text-xl font-medium mb-8">Tools</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-gray-50 p-6 rounded flex items-start gap-4 hover:bg-gray-100 transition-colors">
<div className="w-10 h-10 bg-white rounded flex items-center justify-center text-gray-900 shadow-sm shrink-0">
<i className="w-5 h-5" data-lucide="framer"></i>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="font-medium">Framer</span>
<span className="text-xs text-gray-400">99%</span>
</div>
<p className="text-xs text-gray-500">No-code web design.</p>
</div>
</div>

<div className="bg-gray-50 p-6 rounded flex items-start gap-4 hover:bg-gray-100 transition-colors">
<div className="w-10 h-10 bg-white rounded flex items-center justify-center text-gray-900 shadow-sm shrink-0">
<i className="w-5 h-5" data-lucide="figma"></i>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="font-medium">Figma</span>
<span className="text-xs text-gray-400">95%</span>
</div>
<p className="text-xs text-gray-500">General Design Tool</p>
</div>
</div>

<div className="bg-gray-50 p-6 rounded flex items-start gap-4 hover:bg-gray-100 transition-colors">
<div className="w-10 h-10 bg-white rounded flex items-center justify-center text-gray-900 shadow-sm shrink-0">
<i className="w-5 h-5" data-lucide="image"></i>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="font-medium">Photoshop</span>
<span className="text-xs text-gray-400">90%</span>
</div>
<p className="text-xs text-gray-500">Image editing</p>
</div>
</div>

<div className="bg-gray-50 p-6 rounded flex items-start gap-4 hover:bg-gray-100 transition-colors">
<div className="w-10 h-10 bg-white rounded flex items-center justify-center text-gray-900 shadow-sm shrink-0">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="font-medium">Illustrator</span>
<span className="text-xs text-gray-400">90%</span>
</div>
<p className="text-xs text-gray-500">Graphic design</p>
</div>
</div>

<div className="bg-gray-50 p-6 rounded flex items-start gap-4 hover:bg-gray-100 transition-colors">
<div className="w-10 h-10 bg-white rounded flex items-center justify-center text-gray-900 shadow-sm shrink-0">
<i className="w-5 h-5" data-lucide="code"></i>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="font-medium">Javascript</span>
<span className="text-xs text-gray-400">85%</span>
</div>
<p className="text-xs text-gray-500">Front end development</p>
</div>
</div>

<div className="bg-gray-50 p-6 rounded flex items-start gap-4 hover:bg-gray-100 transition-colors">
<div className="w-10 h-10 bg-white rounded flex items-center justify-center text-gray-900 shadow-sm shrink-0">
<i className="w-5 h-5" data-lucide="box"></i>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="font-medium">Spline</span>
<span className="text-xs text-gray-400">80%</span>
</div>
<p className="text-xs text-gray-500">3D design</p>
</div>
</div>
</div>
</section>

<section className="max-w-screen-xl mx-auto px-6 md:px-12 pb-32">
<h3 className="text-xl font-medium mb-8">Awards</h3>
<div className="border-t border-gray-200">
<div className="flex justify-between py-4 border-b border-gray-200 text-sm hover:bg-gray-50 px-2 transition-colors">
<span className="text-gray-400 w-16">2024</span>
<span className="font-medium flex-1">Site of the day x2</span>
<span className="text-right text-gray-500">Awwwards</span>
</div>
<div className="flex justify-between py-4 border-b border-gray-200 text-sm hover:bg-gray-50 px-2 transition-colors">
<span className="text-gray-400 w-16">2024</span>
<span className="font-medium flex-1">Site of the month</span>
<span className="text-right text-gray-500">CSS Design Awards</span>
</div>
<div className="flex justify-between py-4 border-b border-gray-200 text-sm hover:bg-gray-50 px-2 transition-colors">
<span className="text-gray-400 w-16">2023</span>
<span className="font-medium flex-1">Site of the month</span>
<span className="text-right text-gray-500">Framer</span>
</div>
<div className="flex justify-between py-4 border-b border-gray-200 text-sm hover:bg-gray-50 px-2 transition-colors">
<span className="text-gray-400 w-16">2023</span>
<span className="font-medium flex-1">Site of the day</span>
<span className="text-right text-gray-500">CSS Design Awards</span>
</div>
</div>
</section>

<section className="bg-gray-50 py-24 md:py-32">
<div className="max-w-screen-xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight">Testimonials</h2>
<div className="flex gap-12 text-sm font-medium">
<div>
<span className="block text-2xl font-semibold mb-1">200+</span>
<span className="text-gray-500">Projects completed</span>
</div>
<div>
<span className="block text-2xl font-semibold mb-1">100+</span>
<span className="text-gray-500">Happy Clients</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6">
<img className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div>
<div className="font-medium text-sm">Sophie M.</div>
<div className="text-xs text-gray-500">E-commerce Founder</div>
</div>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
                        Working with Lorian was a game-changer. He took our outdated site and transformed it into a sleek, high-converting platform. Our customers noticed the difference immediately.
                    </p>
</div>

<div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6">
<img className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<div className="font-medium text-sm">Daniel R.</div>
<div className="text-xs text-gray-500">Creative Director</div>
</div>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
                        Lorian doesn't just design websites, he builds experiences. He understood our brand from day one and translated it perfectly into a modern, intuitive interface.
                    </p>
</div>

<div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6">
<img className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/86.jpg"/>
<div>
<div className="font-medium text-sm">Tariq J.</div>
<div className="text-xs text-gray-500">Startup Co-Founder</div>
</div>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
                        I've hired many designers, but Lorian has a sharp eye, communication, and attention to detail. The final result exceeded all expectations.
                    </p>
</div>

<div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6">
<img className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/65.jpg"/>
<div>
<div className="font-medium text-sm">Melissa K.</div>
<div className="text-xs text-gray-500">Marketing Manager</div>
</div>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
                        From concept to launch, Lorian was professional, fast, and full of great ideas. Our site now feels fresh, fast, and incredibly user-friendly.
                    </p>
</div>

<div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6">
<img className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/11.jpg"/>
<div>
<div className="font-medium text-sm">Eduardo V.</div>
<div className="text-xs text-gray-500">Consultant</div>
</div>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
                        Lorian turned a vague idea into a fully functional and beautifully designed website. He guided us through every step and delivered beyond what we imagined.
                    </p>
</div>

<div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6">
<img className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/22.jpg"/>
<div>
<div className="font-medium text-sm">Rachel L.</div>
<div className="text-xs text-gray-500">Nonprofit Director</div>
</div>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
                        Our traffic and engagement improved significantly after launching the site Lorian designed. A true partner in creative and strategic thinking.
                    </p>
</div>
</div>
</div>
</section>

<section className="max-w-screen-xl mx-auto px-6 md:px-12 py-24 md:py-32">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-16">FAQs</h2>
<div className="space-y-0 border-t border-gray-200">

<div className="group flex justify-between items-center py-6 border-b border-gray-200 cursor-pointer hover:bg-gray-50 px-2 transition-colors">
<span className="text-base md:text-lg font-medium text-gray-900">What kind of clients do you typically work with?</span>
<i className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" data-lucide="plus"></i>
</div>

<div className="group flex justify-between items-center py-6 border-b border-gray-200 cursor-pointer hover:bg-gray-50 px-2 transition-colors">
<span className="text-base md:text-lg font-medium text-gray-900">What services do you offer?</span>
<i className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" data-lucide="plus"></i>
</div>

<div className="group flex justify-between items-center py-6 border-b border-gray-200 cursor-pointer hover:bg-gray-50 px-2 transition-colors">
<span className="text-base md:text-lg font-medium text-gray-900">How long does a typical project take?</span>
<i className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" data-lucide="plus"></i>
</div>

<div className="group flex justify-between items-center py-6 border-b border-gray-200 cursor-pointer hover:bg-gray-50 px-2 transition-colors">
<span className="text-base md:text-lg font-medium text-gray-900">What is your pricing structure?</span>
<i className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" data-lucide="plus"></i>
</div>

<div className="group flex justify-between items-center py-6 border-b border-gray-200 cursor-pointer hover:bg-gray-50 px-2 transition-colors">
<span className="text-base md:text-lg font-medium text-gray-900">Can you redesign my existing website?</span>
<i className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" data-lucide="plus"></i>
</div>

<div className="group flex justify-between items-center py-6 border-b border-gray-200 cursor-pointer hover:bg-gray-50 px-2 transition-colors">
<span className="text-base md:text-lg font-medium text-gray-900">Do you offer ongoing support after launch?</span>
<i className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" data-lucide="plus"></i>
</div>
</div>
</section>

<footer className="relative bg-black text-white py-32 overflow-hidden">

<div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
<div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col justify-between min-h-[50vh]">
<div className="flex justify-end">
<h2 className="text-[12vw] leading-none tracking-tighter font-medium text-right">
                    Get in touch
                </h2>
</div>
<div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-12">
<div className="max-w-md">
<p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Whether you're looking to collaborate, start a new project, or simply connect. I'd love to hear from you.
                    </p>
</div>
<div className="text-right">
<p className="text-xl font-medium mb-1">+1 (123) 456-7890</p>
<p className="text-xl font-medium mb-6">lorianhans@gmail.com</p>
<div className="flex gap-4 justify-end text-gray-400">
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="instagram"></i>
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
