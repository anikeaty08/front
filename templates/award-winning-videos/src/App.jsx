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



      // Marquee Interaction (Drag to scroll)
      const container = document.getElementById('marquee-container');
      let isDown = false;
      let startX;
      let scrollLeft;

      container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        container.style.cursor = 'grabbing';
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        // Pause animation on drag
        document.querySelector('.marquee-container-text')?.style.setProperty('animation-play-state', 'paused');
      });

      container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
        document.querySelector('.marquee-container-text')?.style.setProperty('animation-play-state', 'running');
      });

      container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
        document.querySelector('.marquee-container-text')?.style.setProperty('animation-play-state', 'running');
      });

      container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        container.scrollLeft = scrollLeft - walk;
      });

      // Process Section Scroll Logic
      const steps = document.querySelectorAll('.process-step');
      const processImages = document.querySelectorAll('.process-img');
      const processNumber = document.getElementById('process-number');

      const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -40% 0px', // Trigger when element is near middle of screen
        threshold: 0
      };

      const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const stepNum = entry.target.getAttribute('data-step');
            
            // Update Number
            processNumber.textContent = `0${stepNum}`;
            
            // Highlight text
            steps.forEach(s => s.classList.remove('opacity-100'));
            steps.forEach(s => s.classList.add('opacity-30'));
            entry.target.classList.remove('opacity-30');
            entry.target.classList.add('opacity-100');

            // Swap Images
            processImages.forEach(img => {
              if (img.id === `process-img-${stepNum}`) {
                img.classList.remove('inactive');
                img.classList.add('active');
                img.style.zIndex = '10';
              } else {
                img.classList.remove('active');
                img.classList.add('inactive');
                img.style.zIndex = '0';
              }
            });
          }
        });
      }, observerOptions);

      // Initialize
      steps.forEach((step, index) => {
        if(index !== 0) step.classList.add('opacity-30');
        step.style.transition = 'opacity 0.5s ease';
        stepObserver.observe(step);
      });
      
      // Init images
      processImages.forEach((img, index) => {
        if(index !== 0) {
            img.classList.add('inactive');
        } else {
            img.classList.add('active');
            img.style.zIndex = '10';
        }
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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
<a className="group flex items-center gap-1 text-2xl md:text-3xl tracking-tight font-normal pointer-events-auto font-instrument-serif" href="#">
<span className="border-b border-white pb-0.5 group-hover:border-transparent transition-colors duration-300">aba</span>
<span>labs</span>
</a>

<div className="hidden md:flex items-center gap-8 lg:gap-12 pointer-events-auto">
<span className="text-sm font-medium uppercase tracking-wide text-zinc-300 cursor-default hover:text-white transition-colors">Linkedin</span>
<span className="text-sm font-medium uppercase tracking-wide text-zinc-300 cursor-default hover:text-white transition-colors">Instagram</span>
<span className="text-sm font-medium uppercase tracking-wide text-zinc-300 cursor-default hover:text-white transition-colors">Reel</span>
<a className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium uppercase tracking-wide backdrop-blur-sm" href="#contact">Start Project</a>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden bg-black">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16b5c7c1-f196-4707-b5d8-9ba5ecac10bc_1600w.jpg">
<source src="https://spark-labs.org/video/reel.mp4" type="video/mp4"/>
</video>
<div className="bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 w-full px-6 py-12 md:px-12 md:py-20 flex flex-col md:flex-row justify-between items-end">
<div className="max-w-3xl fade-in-up">
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight font-instrument-serif mb-8">
            Cinematic AI. 
            <span className="text-zinc-500 block">Video without limits.</span>
</h1>
<div className="flex flex-col md:flex-row gap-6 md:items-center text-lg font-light text-zinc-300">
<p className="max-w-md leading-relaxed text-zinc-400 text-base md:text-lg">
               We produce bespoke AI-generated video campaigns that transform brand storytelling. No massive crews. Just pure cinematic vision, elegantly delivered.
             </p>
<a className="group flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-all w-fit" href="#process">
<span>See how it works</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-down-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</header>

<section className="overflow-hidden z-10 bg-zinc-950 border-zinc-900/50 border-b pt-24 pb-24 relative">
<div className="px-6 md:px-12 mb-16 md:mb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
<h2 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-instrument-serif text-white">
            Production, simplified. <br/><span className="text-zinc-600">By design.</span>
</h2>
<div className="lg:pl-12">
<p className="text-lg md:text-xl font-light text-zinc-400 leading-relaxed">
              Whether you're scaling social content or defining new brand worlds, our AI video pipelines generate outcomes with unprecedented visual fidelity.
            </p>
</div>
</div>
</div>

<div className="flex w-full overflow-hidden select-none active:cursor-grabbing touch-pan-y" id="marquee-container" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="flex gap-6 md:gap-8 min-w-max px-4 md:px-8 items-stretch will-change-transform" id="marquee-track">

<div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Brand Commercials" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<iconify-icon className="text-xl text-white" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Brand Commercials</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        High-end AI-generated spots that adapt to your brand's DNA, producing cinematic visuals at infinite scale without traditional sets.
                      </p>
</div>
</div>
</div>
</div>

<div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<iconify-icon className="text-xl text-white" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social &amp; Short-Form</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate hyper-engaging vertical video content. Unbound by traditional studio limitations. Just pure creative freedom tailored for the feed.
                      </p>
</div>
</div>
</div>
</div>

<div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<iconify-icon className="text-xl text-white" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Music &amp; Narrative</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Deploy visually stunning narrative sequences instantly. Our video generation moves at the speed of your imagination.
                      </p>
</div>
</div>
</div>
</div>

<div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Brand Commercials" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<iconify-icon className="text-xl text-white" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Brand Commercials</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        High-end AI-generated spots that adapt to your brand's DNA, producing cinematic visuals at infinite scale without traditional sets.
                      </p>
</div>
</div>
</div>
</div>
<div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<iconify-icon className="text-xl text-white" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social &amp; Short-Form</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate hyper-engaging vertical video content. Unbound by traditional studio limitations. Just pure creative freedom tailored for the feed.
                      </p>
</div>
</div>
</div>
</div>
<div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<iconify-icon className="text-xl text-white" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Music &amp; Narrative</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Deploy visually stunning narrative sequences instantly. Our video generation moves at the speed of your imagination.
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-zinc-950 border-b border-zinc-900/50" id="process">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="hidden lg:block relative h-full min-h-screen border-r border-zinc-900/50">
<div className="sticky top-0 h-screen w-full flex items-center justify-center p-12 lg:p-16">
<div className="relative w-full h-[85vh] max-h-[800px] flex items-start">

<div className="relative w-3/4 h-full overflow-hidden">

<img alt="Process Step 1" className="process-img w-full h-full object-cover grayscale opacity-90" id="process-img-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f36259a7-cc94-4846-8290-2df52026731d_original.gif"/>

<img alt="Process Step 2" className="process-img w-full h-full object-cover grayscale opacity-90" id="process-img-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebfeb48e-4108-49c6-86a2-a1491f93b564_original.gif"/>

<img alt="Process Step 3" className="process-img w-full h-full object-cover grayscale opacity-90" id="process-img-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
</div>

<div className="absolute -right-4 top-8 z-20">
<span className="font-instrument-serif text-7xl lg:text-8xl text-zinc-100/90 tracking-tight transition-all duration-500" id="process-number">01</span>
</div>
</div>
</div>
</div>

<div className="md:px-12 md:py-32 flex flex-col lg:gap-64 pt-24 pr-6 pb-24 pl-6 relative gap-x-32 gap-y-32">

<div className="lg:hidden mb-8">
<div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm rounded-full px-3 py-1 mb-6 tracking-wider uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Process
                </div>
<h2 className="text-4xl md:text-5xl font-instrument-serif text-white tracking-tight">The architecture of AI production.</h2>
</div>

<div className="process-step group flex flex-col justify-center min-h-[40vh]" data-step="1">
<span className="lg:hidden text-6xl font-instrument-serif text-zinc-700 mb-6 block">01</span>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-zinc-100 tracking-tight mb-8 group-hover:text-white transition-colors">
                   Define the narrative.
                </h3>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg mb-10">
                   We begin by understanding your core story. We map your brand's visual language and script intent to create a baseline for cinematic brilliance.
                </p>
<a className="text-sm uppercase tracking-widest font-medium text-white border-b border-zinc-600 pb-1 w-fit hover:border-white hover:text-emerald-400 transition-all" href="#contact">
                   Start a project
                </a>
</div>

<div className="process-step group flex flex-col justify-center min-h-[40vh]" data-step="2">
<span className="lg:hidden text-6xl font-instrument-serif text-zinc-700 mb-6 block">02</span>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-zinc-100 tracking-tight mb-8 group-hover:text-white transition-colors">
                   Generative production.
                </h3>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg mb-10">
                   Our proprietary video models get to work. Rendering complex prompts into high-fidelity motion sequences tailored precisely to your vision.
                </p>
<a className="text-sm uppercase tracking-widest font-medium text-white border-b border-zinc-600 pb-1 w-fit hover:border-white hover:text-emerald-400 transition-all" href="#contact">
                   See examples
                </a>
</div>

<div className="process-step group flex flex-col justify-center min-h-[40vh]" data-step="3">
<span className="lg:hidden text-6xl font-instrument-serif text-zinc-700 mb-6 block">03</span>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-zinc-100 tracking-tight mb-8 group-hover:text-white transition-colors">
                   Cinematic delivery.
                </h3>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg mb-10">
                   Launch with confidence. Your AI-crafted videos are upscaled, color-graded, and delivered with uncompromising broadcast quality on demand.
                </p>
<a className="text-sm uppercase tracking-widest font-medium text-white border-b border-zinc-600 pb-1 w-fit hover:border-white hover:text-emerald-400 transition-all" href="#contact">
                   Scale now
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-zinc-950 border-b border-zinc-900/50" id="benefits">
<div className="max-w-[1400px] mx-auto">
<div className="mb-20 max-w-2xl">
<h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight font-instrument-serif mb-6">
              Production, <span className="text-zinc-600">unleashed.</span>
</h2>
<p className="text-xl text-zinc-400 font-light leading-relaxed">
              Experience the profound impact of AI video generation. Less friction. More storytelling.
           </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-5 group relative min-h-[640px] bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] hover:border-zinc-600 transition-all duration-500 overflow-hidden flex flex-col justify-between p-10">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/80 z-0 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse"></span>
<span className="uppercase text-xs font-bold tracking-[0.2em] text-zinc-500">Consistent</span>
</div>
<h3 className="text-4xl md:text-5xl font-instrument-serif text-white tracking-tight mb-4 leading-[0.95]">Brand aesthetics, embedded.</h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed max-w-sm">
                Train our video systems once. They generate content with your exact brand DNA forever.
              </p>
</div>
<div className="absolute bottom-0 left-0 w-full h-[55%] z-0 rounded-b-[2.5rem] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent z-10"></div>
<img alt="AI Gen" className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f36259a7-cc94-4846-8290-2df52026731d_original.gif"/>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-6 h-full">

<div className="group relative bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-10 hover:border-zinc-600 transition-all duration-500 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
<div className="relative z-10 flex-1">
<h3 className="md:text-5xl leading-[0.95] text-4xl text-white tracking-tight font-instrument-serif mb-4">Cinematic fidelity.</h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed">
                    Every generation adheres strictly to your cinematic guidelines. Flawless motion and dynamic lighting, every single time.
                  </p>
</div>
<div className="relative w-full md:w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden border border-zinc-800/50 group-hover:border-zinc-600 transition-colors">
<img className="transition-all duration-700 ease-in-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebfeb48e-4108-49c6-86a2-a1491f93b564_original.gif"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">

<div className="group relative bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-10 hover:border-zinc-600 transition-all duration-500 flex flex-col justify-between min-h-[320px] overflow-hidden">
<div className="relative z-10">
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight">Exponential Value</h3>
<p className="text-base text-zinc-500 font-light">Shoot more. Spend profoundly less on production.</p>
</div>
<div className="relative z-10">
<div className="flex items-baseline gap-1 mb-5">
<span className="text-7xl font-semibold text-white tracking-tighter">-85</span>
<span className="text-3xl text-emerald-500 font-medium">%</span>
</div>
<div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[15%] group-hover:w-[85%] transition-all duration-1000 ease-out rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-10 hover:border-zinc-600 transition-all duration-500 flex flex-col justify-between min-h-[320px] overflow-hidden">
<div className="relative z-10">
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight">Render Speed</h3>
<p className="text-base text-zinc-500 font-light">From storyboard to final cut in hours.</p>
</div>
<div className="relative z-10 flex items-end">
<div className="flex items-center gap-3 bg-black border border-zinc-800 rounded-full pl-5 pr-6 py-3 shadow-lg group-hover:border-zinc-600 transition-colors">
<div className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
</div>
<span className="text-sm font-mono text-zinc-300 tracking-wide">Generating...</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-zinc-950 border-b border-zinc-900/50" id="insights">
<div className="max-w-[1800px] mx-auto">
<h2 className="text-5xl md:text-7xl font-instrument-serif font-normal text-white tracking-tight mb-24">
                Perspectives.
                <span className="block font-inter text-xl text-zinc-400 font-light mt-6 max-w-2xl tracking-normal leading-relaxed">
                    Exploring the bleeding edge of AI video generation, brand storytelling, and tomorrow's technology.
                </span>
</h2>
<div className="flex flex-col">

<article className="group grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 py-10 border-t border-zinc-800 items-center hover:bg-zinc-900/20 transition-colors duration-300">
<div className="lg:col-span-2">
<span className="text-sm font-semibold text-zinc-400">Report</span>
</div>
<div className="lg:col-span-6">
<h3 className="text-2xl md:text-3xl text-white leading-snug">
<span className="font-semibold tracking-tight">The Architecture of AI Video:</span>
<span className="font-instrument-serif text-zinc-400 italic">Designing for Scale</span>
</h3>
</div>
<div className="lg:col-span-2 lg:text-right">
<span className="text-sm font-medium text-zinc-400">2 min read</span>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end">
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700/50 text-white hover:bg-white hover:text-black transition-all duration-300 group/btn" href="#">
<span className="text-sm font-medium">Read now</span>
<div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 group-hover/btn:bg-black/10 transition-colors">
<iconify-icon className="transition-transform group-hover/btn:translate-x-0.5 text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</article>

<article className="group grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 py-10 border-t border-zinc-800 items-center hover:bg-zinc-900/20 transition-colors duration-300">
<div className="lg:col-span-2">
<span className="text-sm font-semibold text-zinc-400">Blog Post</span>
</div>
<div className="lg:col-span-6">
<h3 className="text-2xl md:text-3xl text-white leading-snug">
<span className="font-semibold tracking-tight">Beyond the Prompt:</span>
<span className="font-instrument-serif text-zinc-400 italic">Directing AI for Brands</span>
</h3>
</div>
<div className="lg:col-span-2 lg:text-right">
<span className="text-sm font-medium text-zinc-400">5 min read</span>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end">
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700/50 text-white hover:bg-white hover:text-black transition-all duration-300 group/btn" href="#">
<span className="text-sm font-medium">Read now</span>
<div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 group-hover/btn:bg-black/10 transition-colors">
<iconify-icon className="transition-transform group-hover/btn:translate-x-0.5 text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</article>

<article className="group grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 py-10 border-t border-zinc-800 items-center hover:bg-zinc-900/20 transition-colors duration-300">
<div className="lg:col-span-2">
<span className="text-sm font-semibold text-zinc-400">Blog Post</span>
</div>
<div className="lg:col-span-6">
<h3 className="text-2xl md:text-3xl text-white leading-snug">
<span className="font-semibold tracking-tight">Synthesizing Reality:</span>
<span className="font-instrument-serif text-zinc-400 italic">The Future of AI Commercials</span>
</h3>
</div>
<div className="lg:col-span-2 lg:text-right">
<span className="text-sm font-medium text-zinc-400">5 min read</span>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end">
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700/50 text-white hover:bg-white hover:text-black transition-all duration-300 group/btn" href="#">
<span className="text-sm font-medium">Read now</span>
<div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 group-hover/btn:bg-black/10 transition-colors">
<iconify-icon className="transition-transform group-hover/btn:translate-x-0.5 text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</article>

<article className="group grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 py-10 border-t border-zinc-800 items-center hover:bg-zinc-900/20 transition-colors duration-300">
<div className="lg:col-span-2">
<span className="text-sm font-semibold text-zinc-400">Blog Post</span>
</div>
<div className="lg:col-span-6">
<h3 className="text-2xl md:text-3xl text-white leading-snug">
<span className="font-semibold tracking-tight">Frictionless Production:</span>
<span className="font-instrument-serif text-zinc-400 italic">How AI is Rewriting the Rulebook</span>
</h3>
</div>
<div className="lg:col-span-2 lg:text-right">
<span className="text-sm font-medium text-zinc-400">5 min read</span>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end">
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700/50 text-white hover:bg-white hover:text-black transition-all duration-300 group/btn" href="#">
<span className="text-sm font-medium">Read now</span>
<div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 group-hover/btn:bg-black/10 transition-colors">
<iconify-icon className="transition-transform group-hover/btn:translate-x-0.5 text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</article>

<article className="group grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 py-10 border-t border-zinc-800 items-center hover:bg-zinc-900/20 transition-colors duration-300">
<div className="lg:col-span-2">
<span className="text-sm font-semibold text-zinc-400">Blog Post</span>
</div>
<div className="lg:col-span-6">
<h3 className="text-2xl md:text-3xl text-white leading-snug">
<span className="font-semibold tracking-tight">The Invisible Crew:</span>
<span className="font-instrument-serif text-zinc-400 italic">When Sets Disappear</span>
</h3>
</div>
<div className="lg:col-span-2 lg:text-right">
<span className="text-sm font-medium text-zinc-400">6 min read</span>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end">
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700/50 text-white hover:bg-white hover:text-black transition-all duration-300 group/btn" href="#">
<span className="text-sm font-medium">Read now</span>
<div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 group-hover/btn:bg-black/10 transition-colors">
<iconify-icon className="transition-transform group-hover/btn:translate-x-0.5 text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</article>

<article className="group grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 py-10 border-t border-zinc-800 items-center hover:bg-zinc-900/20 transition-colors duration-300">
<div className="lg:col-span-2">
<span className="text-sm font-semibold text-zinc-400">Blog Post</span>
</div>
<div className="lg:col-span-6">
<h3 className="text-2xl md:text-3xl text-white leading-snug">
<span className="font-semibold tracking-tight">Cinematic Elegance</span>
<span className="font-instrument-serif text-zinc-400 italic">in Modern Marketing</span>
</h3>
</div>
<div className="lg:col-span-2 lg:text-right">
<span className="text-sm font-medium text-zinc-400">7 min read</span>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end">
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700/50 text-white hover:bg-white hover:text-black transition-all duration-300 group/btn" href="#">
<span className="text-sm font-medium">Read now</span>
<div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 group-hover/btn:bg-black/10 transition-colors">
<iconify-icon className="transition-transform group-hover/btn:translate-x-0.5 text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</article>
<div className="border-b border-zinc-800 w-full"></div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-black relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
<div className="">
<div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 border border-zinc-800 bg-zinc-900/50 rounded-full px-3 py-1 mb-8 tracking-wider uppercase">
                Contact
             </div>
<h2 className="text-5xl md:text-7xl font-instrument-serif text-white tracking-tight mb-6">Let's build the <br/>extraordinary.</h2>
<p className="text-xl text-zinc-400 font-light mb-12 max-w-md">
                Ready to redefine your brand's video content? Connect with our production team.
             </p>
<div className="space-y-6">
<a className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group" href="mailto:hello@abalabs.com">
<div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<span className="text-lg">hello@abalabs.com</span>
</a>
<div className="flex items-center gap-4 text-zinc-300">
<div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="text-lg">Los Angeles / Remote</span>
</div>
</div>
</div>

<form className="glass-panel p-8 md:p-10 rounded-3xl space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase font-semibold tracking-wider text-zinc-500 ml-1">Name</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-semibold tracking-wider text-zinc-500 ml-1">Email</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-semibold tracking-wider text-zinc-500 ml-1">Company</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="Your brand or agency" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-semibold tracking-wider text-zinc-500 ml-1">Project Details</label>
<textarea className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none" placeholder="Tell us about your video needs..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-4 rounded-xl hover:bg-zinc-200 transition-colors duration-300 mt-4" type="button">
                Submit Inquiry
             </button>
</form>
</div>
</section>

<footer className="bg-black py-12 px-6 md:px-12 border-t border-zinc-900/50">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-1 text-2xl tracking-tight font-normal font-instrument-serif text-white">
<span>aba</span>
<span className="text-zinc-500">labs</span>
</div>
<div className="text-zinc-600 text-sm font-light">
             © 2024 aba Labs. All rights reserved.
          </div>
</div>
</footer>



    </>
  );
}
