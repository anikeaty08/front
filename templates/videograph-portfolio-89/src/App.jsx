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
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 text-lg font-medium text-neutral-900 tracking-tight" href="#">Josef Kramar</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors duration-200" href="#work">Selected Work</a>
<a className="hover:text-neutral-900 transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-neutral-900 transition-colors duration-200" href="#about">About</a>
</div>
<a className="group flex items-center gap-2 text-sm text-neutral-900 bg-neutral-100 hover:bg-neutral-200 px-4 py-2 rounded-full border border-neutral-200 transition-all duration-300" href="#contact">
<span className="">Contact</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-36 pb-20 relative">
<div className="absolute top-0 right-0 z-0 pointer-events-none select-none opacity-[0.06] overflow-visible w-[500px] h-[500px] flex items-start justify-end">
<iconify-icon className="absolute -right-24 -top-24 rotate-[15deg] text-neutral-900" icon="solar:camera-minimalistic-linear" strokeWidth="1.5" width="600"></iconify-icon>
</div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<div className="absolute top-0 left-6 w-8 h-8 border-t border-l border-neutral-300 rounded-tl-lg hidden md:block"></div>
<div className="absolute top-0 right-6 w-8 h-8 border-t border-r border-neutral-300 rounded-tr-lg hidden md:block"></div>
<div className="absolute bottom-0 left-6 w-8 h-8 border-b border-l border-neutral-300 rounded-bl-lg hidden md:block"></div>
<div className="absolute bottom-0 right-6 w-8 h-8 border-b border-r border-neutral-300 rounded-br-lg hidden md:block"></div>
<h1 className="md:text-8xl leading-[1.05] text-5xl font-medium text-neutral-900 tracking-tight mb-8 mt-4">
                Visual storytelling <br/> <span className="text-neutral-400">captured in motion.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-500 max-w-xl mx-auto mb-10">
                Crafting cinematic narratives for brands and individuals. From fast-paced social clips to documentary-style content.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto hover:bg-neutral-800 transition-colors duration-200 flex items-center justify-center gap-2 shadow-neutral-200 group font-medium text-white bg-neutral-900 w-full rounded-lg pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg" href="#work">
<div className="w-6 h-6 rounded-full border border-neutral-600 flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
                    View Showreel
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 text-neutral-900 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 rounded-lg font-medium transition-all duration-200" href="#contact">
                    Get a Quote
                </a>
</div>
</div>
</header>

<section className="border-y z-10 bg-neutral-50/50 border-neutral-100 pt-16 pb-16 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="flex flex-col gap-4 gap-x-4 gap-y-4">
<div className="text-emerald-500 mb-2">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-neutral-600">"Josef gave the TLR Coworking the best possible birthday present ever: A short movie, which takes viewers on a journey reliving 10 years of our coworking space. He managed to work his way through our huge archive of videos and photos capturing our community spirit perfectly and telling our story better than I could do myself."</p>
<div className="flex items-center gap-3 mt-auto pt-2">
<img alt="Benjamin K." className="cursor-pointer w-9 h-9 object-cover border-neutral-200 border rounded-full" src="https://res.cloudinary.com/dsbavumhk/image/upload/v1770622162/ben_e4s9vi.png?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="">
<div className="text-sm font-medium text-neutral-900">Benjamin Kolp</div>
<div className="text-xs text-neutral-400 cursor-pointer" onclick="window.location.href='https://tlr-coworking.com'" role="button">Owner, TLR Coworking</div>
</div>
</div>
</div>

<div className="flex flex-col gap-x-4 gap-y-4">
<div className="text-emerald-500 mb-2">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-neutral-600">"Josef is such a great support and we can always count on him. No matter what’s the challenge, Josef finds a way and goes the extra mile to deliver outstanding result - always! Not only is he super professional, it is always a great experience working with him from start to finish. We are looking forward to keeping on working together on many more projects."</p>
<div className="flex items-center gap-3 mt-auto pt-2">
<img alt="Angelika F." className="w-9 h-9 object-cover border-neutral-200 border rounded-full" src="https://res.cloudinary.com/dsbavumhk/image/upload/v1770622160/angie_wykve7.jpg?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="">
<div className="text-sm font-medium text-neutral-900">Angelika Fürstler</div>
<div className="text-xs text-neutral-400 cursor-pointer" onclick="window.location.href='https://www.angelikafurstler.de'" role="button">Founder, High Vibe</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4 gap-x-4 gap-y-4">
<div className="text-emerald-500 mb-2">
<iconify-icon className="" icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-neutral-600">"Josef delivered outstanding video content that beautifully captured my customers’ experiences on our cycling holidays. He followed the brief, while also sharing his own ideas and expertise to achieve the best outcome. What’s more, he was fun and easy to work with."</p>
<div className="flex items-center gap-3 mt-auto pt-2">
<img alt="Jamie W." className="cursor-pointer w-9 h-9 object-cover border-neutral-200 border rounded-full" src="https://res.cloudinary.com/dsbavumhk/image/upload/v1770622161/jamie_ndtf5i.jpg?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="">
<div className="text-sm font-medium text-neutral-900">Jamie Wilkins</div>
<div className="text-xs text-neutral-400" onclick="window.location.href='https://www.escapetothepyrenees.com'" role="button">Owner, Escape to the Pyrenees</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="work">
<div className="flex flex-col md:flex-row md:items-end mb-12 gap-x-4 gap-y-4 justify-between">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight mb-2">Selected Work</h2>
<p className="text-neutral-500">Curated commercial and creative projects.</p>
</div>
<a className="text-sm text-neutral-900 hover:text-neutral-600 flex items-center gap-1 transition-colors font-medium" href="#">
                View all projects <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">

<div className="group cursor-pointer">
<div className="aspect-video overflow-hidden cursor-pointer bg-neutral-900 border-neutral-200 border rounded-xl mb-4 relative shadow-sm" onclick="this.innerHTML='&lt;iframe width=\'100%\' height=\'100%\' src=\'https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\' allowfullscreen&gt;&lt;/iframe&gt;'" role="button">
<img alt="One Day in Escape to the Pyrenees" className="group-hover:scale-105 transition-all duration-700 filter group-hover:brightness-100 cursor-pointer w-full h-full object-cover brightness-95" onclick="window.location.href='https://youtu.be/OU3ksjxsm94?si=oUZHMG2bb3_1bGuq'" role="button" src="https://res.cloudinary.com/dsbavumhk/image/upload/v1770622353/EttP_highlights_th_mkfadp.png?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg font-medium text-neutral-900">One Day in Escape to the Pyrenees</h3>
<p className="text-sm text-neutral-500">Highlight Video • Full Production</p>
</div>
<span className="text-xs text-neutral-500 bg-neutral-50 border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">2026</span>
</div>
</div>

<div className="group cursor-pointer md:mt-16 mt-16">
<div className="aspect-video overflow-hidden cursor-pointer bg-neutral-900 border-neutral-200 border rounded-xl mb-4 relative shadow-sm" onclick="this.innerHTML='&lt;iframe width=\'100%\' height=\'100%\' src=\'https://www.youtube.com/embed/YffFDpkdDBs?autoplay=1\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\' allowfullscreen&gt;&lt;/iframe&gt;'" role="button">
<img alt="A Decade in The Living Room" className="group-hover:scale-105 transition-all duration-700 filter group-hover:brightness-100 w-full h-full object-cover brightness-95" onclick="window.location.href='https://youtu.be/YffFDpkdDBs?si=e2RvBJSn0nwWrex4'" role="button" src="https://res.cloudinary.com/dsbavumhk/image/upload/v1770622357/TLR_documentary_th_cjzghp.png?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-medium text-neutral-900">A Decade in The Living Room</h3>
<p className="text-sm text-neutral-500">Short Documentary Movie • Full Production</p>
</div>
<span className="text-xs text-neutral-500 bg-neutral-50 border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">2025</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video overflow-hidden cursor-pointer bg-neutral-900 border-neutral-200 border rounded-xl mb-4 relative shadow-sm" onclick="this.innerHTML='&lt;video width=\'100%\' height=\'100%\' controls autoplay&gt;&lt;source src=\'/assets/HighVibe_teaser.mp4\' type=\'video/mp4\'&gt;Your browser does not support the video tag.&lt;/video&gt;'" role="button">
<img alt="High Vibe Teaser" className="group-hover:scale-105 transition-all duration-700 filter group-hover:brightness-100 w-full h-full object-cover brightness-95" onclick="window.location.href='https://res.cloudinary.com/dsbavumhk/video/upload/v1770624421/HighVibe_teaser_small_mtj8ut.mp4'" role="button" src="https://res.cloudinary.com/dsbavumhk/image/upload/v1770622355/HighVibe_teaser_th_sbwtgh.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-medium text-neutral-900">High Vibe Teaser</h3>
<p className="text-sm text-neutral-500">Social Media Clip • Post Production</p>
</div>
<span className="text-xs text-neutral-500 bg-neutral-50 border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">2024</span>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="aspect-video overflow-hidden cursor-pointer bg-neutral-900 border-neutral-200 border rounded-xl mb-4 relative shadow-sm" onclick="this.innerHTML='&lt;video width=\'100%\' height=\'100%\' controls autoplay&gt;&lt;source src=\'/assets/SnipeLights_intro.mp4\' type=\'video/mp4\'&gt;Your browser does not support the video tag.&lt;/video&gt;'" role="button">
<img alt="Snipe Lights Introduction" className="group-hover:scale-105 transition-all duration-700 filter group-hover:brightness-100 w-full h-full object-cover brightness-95" onclick="window.location.href='https://res.cloudinary.com/dsbavumhk/video/upload/v1770624049/SnipeLights_intro_qnfghz.mp4'" role="button" src="https://res.cloudinary.com/dsbavumhk/image/upload/v1770622356/SnipeLights_intro_th_asx73i.png?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-neutral-900">Snipe Lights Introduction</h3>
<p className="text-sm text-neutral-500">Product Introduction Video • Post Production</p>
</div>
<span className="text-xs text-neutral-500 bg-neutral-50 border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">2025</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video overflow-hidden cursor-pointer bg-neutral-900 border-neutral-200 border rounded-xl mb-4 relative shadow-sm" onclick="this.innerHTML='&lt;video width=\'100%\' height=\'100%\' controls autoplay&gt;&lt;source src=\'/assets/EttP_review.mp4\' type=\'video/mp4\'&gt;Your browser does not support the video tag.&lt;/video&gt;'" role="button">
<img alt="Bike Review Video" className="group-hover:scale-105 transition-all duration-700 filter group-hover:brightness-100 w-full h-full object-cover brightness-95" onclick="window.location.href='https://res.cloudinary.com/dsbavumhk/video/upload/v1770624051/EttP_review_nvqph8.mp4'" role="button" src="https://res.cloudinary.com/dsbavumhk/image/upload/v1770622362/EttP_review_th_abhv9l.png?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-neutral-900">Bike Review Video</h3>
<p className="text-sm text-neutral-500">Review Video • Full Production</p>
</div>
<span className="text-xs text-neutral-500 bg-neutral-50 border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">2025</span>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="aspect-video overflow-hidden cursor-pointer bg-neutral-900 border-neutral-200 border rounded-xl mb-4 relative shadow-sm" onclick="this.innerHTML='&lt;iframe width=\'100%\' height=\'100%\' src=\'https://www.youtube.com/embed/HxSCgNj_jsw?autoplay=1\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\' allowfullscreen&gt;&lt;/iframe&gt;'" role="button">
<img alt="Youtube Review Video" className="group-hover:scale-105 transition-all duration-700 filter group-hover:brightness-100 w-full h-full object-cover brightness-95" onclick="window.location.href='https://youtu.be/HxSCgNj_jsw?si=--SIEoeMSJlayh7w'" role="button" src="https://res.cloudinary.com/dsbavumhk/image/upload/v1770622352/markus_th_ps1yhr.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-neutral-900">Youtube Review Video</h3>
<p className="text-sm text-neutral-500">Talking Head Youtube Video • Post Production</p>
</div>
<span className="text-xs text-neutral-500 bg-neutral-50 border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">2023</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50/50 border-y border-neutral-200" id="services">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-medium text-neutral-900 tracking-tight mb-16 text-center">Services</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">

<div className="bg-white p-12 group hover:bg-neutral-50 transition-colors duration-300 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-900 mb-6 group-hover:border-neutral-300 group-hover:bg-white transition-colors">
<iconify-icon icon="solar:videocamera-record-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-3">Cinematography</h3>
<p className="leading-relaxed text-sm text-neutral-500 max-w-sm">High-end video production focused on strong storytelling, thoughtful composition, and visually 
compelling narratives for commercial and creative projects.</p>
</div>

<div className="bg-white p-12 group hover:bg-neutral-50 transition-colors duration-300 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-900 mb-6 group-hover:border-neutral-300 group-hover:bg-white transition-colors">
<iconify-icon icon="solar:scissors-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-3">Post-Production</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
                        Comprehensive editing services including narrative cuts, sound design, motion graphics, and color grading to bring the story to life.
                    </p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="about">
<div className="flex flex-col md:flex-row gap-16 gap-x-16 gap-y-16 items-start">

<div className="w-full md:w-5/12">
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-neutral-200 mb-8 shadow-sm">
<img alt="Profile" className="hover:grayscale-0 transition-all duration-700 w-full h-full object-cover grayscale" src="https://res.cloudinary.com/dsbavumhk/image/upload/v1770622160/josef_jxbivg.jpg?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium text-neutral-900 mb-2">Josef Kramar</h3>
<p className="leading-relaxed text-sm text-neutral-500 mb-6">Freelance Videographer &amp; Editor enjoying working on meaningful projects and helping people and brands communicate their story.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors" href="#">
<iconify-icon height="18" icon="solar:camera-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors" href="#">
<iconify-icon height="18" icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="w-full md:w-7/12 pt-8" id="contact">
<h2 className="text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight mb-6">Let's create something meaningful.</h2>
<p className="text-neutral-500 text-lg font-light mb-10 max-w-md">
                    Have a project in mind? Drop me a line detailing your vision, and I'll get back to you with a proposal.
                </p>

<form action="https://formspree.io/f/xwvrnlza" className="space-y-6" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Name</label>
<input className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all shadow-sm" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Email</label>
<input className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all shadow-sm" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Project Details</label>
<textarea className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all resize-none shadow-sm" name="message" placeholder="Tell me about your project..." required="" rows="4"></textarea>
</div>
<button className="group relative px-6 py-3 bg-neutral-900 text-white font-medium rounded-lg overflow-hidden w-full md:w-auto shadow-md shadow-neutral-300 hover:shadow-lg transition-shadow" type="submit">
<div className="absolute inset-0 w-full h-full bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative flex items-center justify-center gap-2">
                            Send Message
                            <iconify-icon className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</span>
</button>
</form>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 py-12 bg-neutral-50">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-sm text-neutral-500">© Josef Kramar. All rights reserved.</span>
<div className="flex gap-6">
<a className="hover:text-neutral-900 transition-colors text-sm text-neutral-500" href="https://www.instagram.com/jo.kramar/">Instagram</a>
<a className="hover:text-neutral-900 transition-colors text-sm text-neutral-500" href="https://www.linkedin.com/in/josef-kramář-907712142/">LinkedIn</a>
</div>
</div>
</footer>

    </>
  );
}
