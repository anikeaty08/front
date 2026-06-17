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



            document.addEventListener('DOMContentLoaded', () => {
                const marquee = document.getElementById('imageMarquee');
                let scrollTimeout;
                
                window.addEventListener('scroll', () => {
                    // Temporarily speed up animation on scroll
                    marquee.style.animationDuration = '20s'; 
                    
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        // Return to normal speed when scrolling stops
                        marquee.style.animationDuration = '60s';
                    }, 100);
                });
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
      

<div className="grain"></div>

<header className="fixed top-0 w-full z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-[1800px] mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex flex-col justify-center group" href="#">
<span className="text-xl font-display tracking-widest text-white uppercase leading-none">Pandia<span className="text-neutral-500 group-hover:text-white transition-colors duration-300">Films</span></span>
<span className="text-[8px] uppercase tracking-widest text-neutral-500 mt-1">Div. of iGizmo</span>
</a>
<nav className="hidden lg:flex items-center gap-10 text-xs uppercase tracking-widest text-neutral-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<button className="lg:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="hidden lg:flex items-center gap-2 text-xs uppercase tracking-widest border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300" href="#contact">
                Get Connected
            </a>
</div>
</header>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0 w-full h-full">
<video autoplay="" className="w-full h-full object-cover opacity-50 scale-105" loop="" muted="" playsinline="">

<source src="https://videos.pexels.com/video-files/5502693/5502693-hd_1920_1080_30fps.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-black/30"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/20 to-[#050505]"></div>
</div>
<div className="container mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-3 px-4 py-1.5 border border-white/10 rounded-full mb-8 backdrop-blur-md bg-black/30">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-[0.2em] text-neutral-200">Visual Effects &amp; Motion Studio</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-9xl text-white leading-[0.9] mb-8 tracking-tight drop-shadow-2xl">
                DYNAMIC VISUALS <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500 italic font-serif">TELL THE STORY</span>
</h1>
<p className="max-w-2xl mx-auto text-neutral-300 font-light text-sm md:text-lg leading-relaxed tracking-wide mb-12 drop-shadow-lg">
                We craft immersive cinematic experiences through cutting-edge VFX, animation, and digital artistry for India's biggest screens.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<a className="group relative px-8 py-4 bg-white text-black text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors overflow-hidden" href="#services">
<span className="relative z-10 flex items-center gap-2 font-semibold">
                       Explore Services
                       <iconify-icon icon="lucide:arrow-down" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</a>
<a className="px-8 py-4 border border-white/30 text-white text-xs uppercase tracking-widest hover:bg-white/10 transition-colors backdrop-blur-sm" href="#contact">
                    View Showreel
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 mix-blend-difference">
<span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
<div className="w-[1px] h-12 bg-white"></div>
</div>
</section>

<section className="py-32 bg-[#050505] relative z-20" id="services">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
<div>
<span className="block text-xs font-mono text-blue-500 mb-4 tracking-widest">01 / CAPABILITIES</span>
<h2 className="font-display text-4xl md:text-5xl text-white">Our Services</h2>
</div>
<p className="text-neutral-500 text-sm max-w-sm mt-6 md:mt-0 text-right">
                    Comprehensive VFX solutions tailored for feature films, commercials, and immersive digital media.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group border border-white/5 bg-neutral-900/20 hover:border-white/20 transition-all duration-500 flex flex-col">
<div className="aspect-video w-full overflow-hidden relative">

<img alt="Rotoscopy" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-display text-white mb-4">Rotoscopy</h3>
<p className="text-xs text-neutral-400 leading-relaxed mb-8 flex-grow">
                            VFX artists meticulously trace the edges of the desired elements in each frame of the footage, maintaining natural motion. This frame-by-frame approach ensures accurate and clean mattes for seamless compositing.
                        </p>
<a className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white border-b border-blue-500/50 pb-1 hover:text-blue-400 transition-colors w-max" href="#contact">
                            Enquire Now <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>

<div className="group border border-white/5 bg-neutral-900/20 hover:border-white/20 transition-all duration-500 flex flex-col">
<div className="aspect-video w-full overflow-hidden relative">
<img alt="Cleanup and Paint" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-display text-white mb-4">Cleanup &amp; Paint</h3>
<p className="text-xs text-neutral-400 leading-relaxed mb-8 flex-grow">
                            Our talented matte painters create stunning digital environments that transport viewers to fictional worlds. From sprawling cityscapes to breathtaking landscapes, we enhance the storytelling experience.
                        </p>
<a className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white border-b border-blue-500/50 pb-1 hover:text-blue-400 transition-colors w-max" href="#contact">
                            Enquire Now <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>

<div className="group border border-white/5 bg-neutral-900/20 hover:border-white/20 transition-all duration-500 flex flex-col">
<div className="aspect-video w-full overflow-hidden relative">
<img alt="Compositing" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-display text-white mb-4">Compositing</h3>
<p className="text-xs text-neutral-400 leading-relaxed mb-8 flex-grow">
                            Our compositing experts skillfully merge multiple layers of visual elements, seamlessly blending CG imagery, live-action footage, and effects. We ensure every frame is cohesive and realistic.
                        </p>
<a className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white border-b border-blue-500/50 pb-1 hover:text-blue-400 transition-colors w-max" href="#contact">
                            Enquire Now <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>

<div className="group border border-white/5 bg-neutral-900/20 hover:border-white/20 transition-all duration-500 flex flex-col">
<div className="aspect-video w-full overflow-hidden relative">
<img alt="2D &amp; 3D Animation" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-display text-white mb-4">2D &amp; 3D</h3>
<p className="text-xs text-neutral-400 leading-relaxed mb-8 flex-grow">
                            We excel in creating dynamic and lifelike animations that breathe life into characters, objects, and environments. Our skilled animators capture the essence of movement and emotion.
                        </p>
<a className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white border-b border-blue-500/50 pb-1 hover:text-blue-400 transition-colors w-max" href="#contact">
                            Enquire Now <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>

<div className="group border border-white/5 bg-neutral-900/20 hover:border-white/20 transition-all duration-500 flex flex-col">
<div className="aspect-video w-full overflow-hidden relative">
<img alt="Prep Comp" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-display text-white mb-4">Prep Comp</h3>
<p className="text-xs text-neutral-400 leading-relaxed mb-8 flex-grow">
                            "Preparation and completion services" designed to streamline processes. We handle the technical groundwork to ensure the main compositing phase is efficient and flawless.
                        </p>
<a className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white border-b border-blue-500/50 pb-1 hover:text-blue-400 transition-colors w-max" href="#contact">
                            Enquire Now <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>

<div className="group border border-white/5 bg-neutral-900/20 hover:border-white/20 transition-all duration-500 flex flex-col">
<div className="aspect-video w-full overflow-hidden relative">
<img alt="Onsite Supervision" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-display text-white mb-4">Onsite Supervision</h3>
<p className="text-xs text-neutral-400 leading-relaxed mb-8 flex-grow">
                            Experienced supervisors on-set to oversee VFX requirements, ensuring proper data acquisition, lighting references, and adherence to technical protocols during the shoot.
                        </p>
<a className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white border-b border-blue-500/50 pb-1 hover:text-blue-400 transition-colors w-max" href="#contact">
                            Enquire Now <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-0 overflow-hidden bg-black border-y border-white/10 relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>


<div className="marquee-track flex gap-4 py-8 opacity-80 hover:opacity-100 transition-opacity duration-300" id="imageMarquee">

<div className="w-[300px] aspect-[4/5] bg-neutral-800 rounded-sm overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="w-[300px] aspect-[4/5] bg-neutral-800 rounded-sm overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-[300px] aspect-[4/5] bg-neutral-800 rounded-sm overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&amp;w=2619&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-[300px] aspect-[4/5] bg-neutral-800 rounded-sm overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&amp;w=2662&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-[300px] aspect-[4/5] bg-neutral-800 rounded-sm overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-[300px] aspect-[4/5] bg-neutral-800 rounded-sm overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=2525&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-[300px] aspect-[4/5] bg-neutral-800 rounded-sm overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="w-[300px] aspect-[4/5] bg-neutral-800 rounded-sm overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-[300px] aspect-[4/5] bg-neutral-800 rounded-sm overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&amp;w=2619&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-[300px] aspect-[4/5] bg-neutral-800 rounded-sm overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&amp;w=2662&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-[300px] aspect-[4/5] bg-neutral-800 rounded-sm overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-[300px] aspect-[4/5] bg-neutral-800 rounded-sm overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=2525&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div>
<h3 className="text-sm font-mono text-blue-500 mb-6 tracking-widest uppercase">Why Choose Pandia Films</h3>
<ul className="space-y-8">
<li className="flex gap-4">
<div className="text-3xl font-display text-white">Precision</div>
<div>
<h4 className="text-white font-medium mb-1">Pixel Perfect</h4>
<p className="text-sm text-neutral-500">Uncompromising attention to detail in rotoscopy and paint.</p>
</div>
</li>
<li className="flex gap-4">
<div className="text-3xl font-display text-white">Innovation</div>
<div>
<h4 className="text-white font-medium mb-1">Advanced Pipelines</h4>
<p className="text-sm text-neutral-500">Integrating AI and latest 3D workflows.</p>
</div>
</li>
<li className="flex gap-4">
<div className="text-3xl font-display text-white">Scale</div>
<div>
<h4 className="text-white font-medium mb-1">Major Motion Pictures</h4>
<p className="text-sm text-neutral-500">Infrastructure to handle high-volume VFX production.</p>
</div>
</li>
</ul>
</div>

<div className="space-y-8">
<blockquote className="p-8 border-l-2 border-blue-500 bg-white/[0.02]">
<iconify-icon className="text-neutral-600 mb-4" icon="lucide:quote" width="24"></iconify-icon>
<p className="text-neutral-300 font-light italic mb-6 text-lg">
                            "The team at Pandia Films delivered complex sequence compositing that elevated our entire production value. Their onsite supervision was invaluable."
                        </p>
<footer className="text-xs text-white uppercase tracking-wider">— Director, Leading Production House</footer>
</blockquote>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="container mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<span className="block text-xs font-mono text-blue-500 mb-6 tracking-widest">05 / GET CONNECTED</span>
<h2 className="font-display text-4xl md:text-6xl text-white mb-8 leading-none">
                        Let's Create <br/> The Impossible.
                    </h2>
<p className="text-neutral-400 font-light mb-12 max-w-sm">
                        Ready to elevate your visual storytelling? Contact Pandia Films for your next VFX or animation project.
                    </p>
<div className="space-y-6">
<div>
<p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Email</p>
<a className="block text-xl text-white hover:text-blue-400 transition-colors" href="mailto:contact@pandia.in">contact@pandia.in</a>
</div>
<div className="flex gap-8">
<div>
<p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">India</p>
<p className="text-lg text-white font-light">Chennai</p>
</div>
<div>
<p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">UK</p>
<p className="text-lg text-white font-light">London</p>
</div>
</div>
</div>
</div>
<div className="bg-neutral-900/30 border border-white/5 p-8 md:p-12 backdrop-blur-sm">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500">Name</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-white transition-colors placeholder:text-neutral-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500">Email</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-white transition-colors placeholder:text-neutral-700" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2 pt-4">
<label className="text-xs uppercase tracking-widest text-neutral-500">Service Interest</label>
<div className="grid grid-cols-2 gap-4 mt-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="input-box w-4 h-4 border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
<div className="input-check w-2 h-2 bg-white opacity-0 transition-opacity"></div>
</div>
<input className="hidden" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">VFX / CGI</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="input-box w-4 h-4 border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
<div className="input-check w-2 h-2 bg-white opacity-0 transition-opacity"></div>
</div>
<input className="hidden" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Rotoscopy</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="input-box w-4 h-4 border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
<div className="input-check w-2 h-2 bg-white opacity-0 transition-opacity"></div>
</div>
<input className="hidden" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Compositing</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="input-box w-4 h-4 border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
<div className="input-check w-2 h-2 bg-white opacity-0 transition-opacity"></div>
</div>
<input className="hidden" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Supervision</span>
</label>
</div>
</div>
<div className="space-y-2 pt-4">
<label className="text-xs uppercase tracking-widest text-neutral-500">Project Details</label>
<textarea className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-white transition-colors placeholder:text-neutral-700 resize-none" placeholder="Tell us about your requirements..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-white text-black font-medium uppercase tracking-widest text-xs hover:bg-neutral-200 transition-colors mt-4">
                            Send Enquiry
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 pt-20 pb-8 bg-neutral-950">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-16">
<div className="mb-10 md:mb-0">
<h2 className="text-2xl font-display text-white uppercase tracking-widest mb-1">Pandia<span className="text-neutral-600">Films</span></h2>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-4">Visual Effects Division</p>
<p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
                        Dynamic visuals that tell the story.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-xs uppercase tracking-widest text-white mb-6">Studio</h4>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-white transition-colors" href="#about">About</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#projects">Projects</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-white mb-6">Socials</h4>
<div className="flex gap-4 text-neutral-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-neutral-600 font-light">
<p>© 2023 Pandia Films. All Rights Reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span>Div. of iGizmo</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
