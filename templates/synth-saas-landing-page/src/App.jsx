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



    // Initialize Icons
        lucide.createIcons();

        /* =========================================
           GSAP Scroll Reveal Javascript (Updated to preserve <br>)
           ========================================= */
           
        gsap.registerPlugin(ScrollTrigger);
    
        // 1. Word-by-Word Text Reveal (For Headings)
        function splitAndReveal(el) {
            // Prevent double-execution inside Web Builders
            if (el.classList.contains('split-done')) return;
            el.classList.add('split-done');

            let resultHTML = '';
            
            // Loop through child nodes to safely preserve <br> tags
            el.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.nodeValue;
                    // Split text by spaces and filter empty strings
                    const words = text.split(/\s+/).filter(w => w.trim() !== '');
                    words.forEach(w => {
                        resultHTML += `<span class="line-mask"><span class="reveal-word">${w}</span></span> `;
                    });
                } else if (node.nodeName.toLowerCase() === 'br') {
                    // Keep the <br> tags intact!
                    resultHTML += '<br>';
                } else {
                    // Keep any other HTML elements intact
                    resultHTML += node.outerHTML;
                }
            });
            
            el.innerHTML = resultHTML;
            
            const revealWords = el.querySelectorAll('.reveal-word');
            
            ScrollTrigger.create({
                trigger: el,
                start: 'top 85%',
                onEnter: () => {
                    gsap.to(revealWords, { 
                        y: 0, 
                        opacity: 1, 
                        duration: 0.85, 
                        ease: 'power3.out', 
                        stagger: 0.05 
                    });
                },
                once: true 
            });
        }
    
        // Apply word-reveal to all elements with class 'reveal-text'
        document.querySelectorAll('.reveal-text').forEach(el => splitAndReveal(el));
    
        // 2. Simple Fade-Up (For Paragraphs & Normal Text)
        document.querySelectorAll('.reveal-fade').forEach(el => {
            gsap.fromTo(el,
                { opacity: 0, y: 28 }, 
                {
                    opacity: 1, 
                    y: 0, 
                    duration: 0.9, 
                    ease: 'power3.out',
                    scrollTrigger: { 
                        trigger: el, 
                        start: 'top 85%', 
                        once: true 
                    }
                }
            );
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
      

<nav className="md:px-12 flex w-full border-white/10 border-b pt-8 pr-6 pb-8 pl-6 items-center justify-between">
<div className="text-2xl font-semibold tracking-tighter text-white display-font">SYNTH</div>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-slate-400">
<a className="hover:text-white transition-colors" href="#">PLATFORM</a>
<a className="hover:text-white transition-colors" href="#">SOLUTIONS</a>
<a className="hover:text-white transition-colors" href="#">RESEARCH</a>
<a className="hover:text-white transition-colors" href="#">COMPANY</a>
<a className="text-indigo-400 hover:text-indigo-300 transition-colors" href="#">ACCESS API</a>
</div>
</nav>

<section className="md:px-12 pt-20 pr-6 pb-12 pl-6">
<h1 className="uppercase leading-[1.1] lg:text-8xl md:text-6xl text-4xl font-semibold text-white tracking-tight reveal-text mb-8">
      We Architect <br/>
            Your Digital <br/>
            Singularity
    </h1>
</section>

<section className="w-full px-0 md:px-12 mb-20">
<div className="relative w-full aspect-video overflow-hidden bg-slate-900 rounded-lg">
<img alt="Futuristic Architecture" className="group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/705a4354-fe23-494a-bf1d-e35e998f03ec_1600w.jpg"/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
</section>

<section className="px-6 md:px-12 py-16 border-b border-white/10">
<div className="max-w-7xl mx-auto">
<h2 className="uppercase leading-tight display-font md:text-5xl text-3xl font-semibold text-white tracking-tight reveal-text mb-6">
        Synth lets you scale.<br/>
                We engineer the impossible.
      </h2>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 gap-8">
<p className="text-lg md:text-xl text-slate-400 max-w-2xl reveal-fade leading-relaxed">
          The incredible systems you envision can be deployed with absolute precision. We bridge the gap between
          theoretical architecture and tangible, high-performance infrastructure.
        </p>
<a className="group flex items-center gap-2 text-indigo-400 font-semibold text-lg uppercase tracking-wide hover:text-indigo-300 transition-colors" href="#">
          Explore The Core
          <i className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform stroke-[2.5]" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</section>

<section className="bg-slate-950 text-white">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="p-8 md:p-20 flex flex-col justify-center border-r border-white/5">
<h2 className="md:text-6xl uppercase display-font text-4xl font-semibold tracking-tight reveal-text mb-8">
          Your Data.<br/>
                    Your Rules.<br/>
                    No Limits.<br/>
                    We Built It.
        </h2>
<p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 max-w-md reveal-fade">
          We are here to make your latency vanish, no matter how complex. Whatever compute power you need, we have
          already provisioned it globally.
        </p>
</div>

<div className="relative h-[600px] md:h-auto overflow-hidden">
<img alt="Server Room" className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02296267-1015-4ff6-a3db-8be79b5227c6_1600w.jpg"/>

<div className="absolute top-10 right-10 md:top-16 md:right-16 w-32 h-32 md:w-40 md:h-40 bg-indigo-600 rounded-full flex items-center justify-center neon-border z-10">
<div className="relative w-full h-full flex items-center justify-center rotating-badge">
<svg className="w-full h-full absolute inset-0" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circlePath">
</path>
<text className="text-[10px] font-bold uppercase tracking-widest fill-white">
<textpath href="#circlePath" startoffset="0%">
                  • Scale • Secure • Deploy • Synthesize
                </textpath>
</text>
</svg>
<i className="text-white w-10 h-10 stroke-[2.5]" data-lucide="infinity"></i>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-24 bg-black">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-8">
<h2 className="uppercase leading-tight display-font md:text-5xl text-3xl font-semibold text-white tracking-tight max-w-2xl reveal-text">
        So, what kind of stack<br/>
                do you want to realize?
      </h2>
<a className="hidden md:flex items-center gap-2 text-indigo-400 font-semibold text-lg hover:text-indigo-300 transition-colors mt-6 md:mt-0" href="#">
        SEE ALL STACKS
        <i className="w-5 h-5 stroke-[2.5]" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-8 reveal-fade">
<span className="text-3xl font-bold text-indigo-500 display-font">01.</span>
<h3 className="text-2xl sm:text-3xl font-semibold uppercase tracking-tight display-font text-white">Quantum Core
          </h3>
</div>
<div className="flex justify-between items-end mb-6 reveal-fade">
<p className="text-base sm:text-lg text-slate-400 max-w-sm leading-relaxed">
            Minimalist infrastructure with futuristic decoration and finishing suitable for your small family of
            microservices.
          </p>
<div className="flex items-center gap-2 text-white text-sm font-semibold uppercase">
            See Details <i className="w-4 h-4 stroke-[2.5]" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="h-64 md:h-80 w-full overflow-hidden rounded bg-slate-900 border border-white/10">
<img alt="Modern Tech Office" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9fd9d548-087b-42ed-a579-70cb556e4727_1600w.webp"/>
</div>
</div>

<div className="group cursor-pointer mt-12 md:mt-0">
<div className="flex justify-between items-baseline mb-8 reveal-fade">
<span className="text-3xl font-bold text-purple-500 display-font">02.</span>
<h3 className="text-2xl sm:text-3xl font-semibold uppercase tracking-tight display-font text-white">Neural Edge
          </h3>
</div>
<div className="flex justify-between items-end mb-6 reveal-fade">
<p className="text-base sm:text-lg text-slate-400 max-w-sm leading-relaxed">
            Best quality teak wood house suitable for those of you who are looking for peace of life in a distributed
            system.
          </p>
</div>
<div className="h-64 md:h-80 w-full overflow-hidden rounded bg-slate-900 border border-white/10">
<img alt="Data Center Nature" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/287b93d0-e61a-4443-9cd0-fd7698ca0cf3_3840w.webp?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-24 bg-slate-950 border-t border-white/10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="flex flex-col justify-between">
<h2 className="uppercase display-font leading-tight md:text-5xl text-4xl font-semibold text-white tracking-tight reveal-text">
          Let us listen to<br/>
                    your protocols
        </h2>
<div className="mt-12 reveal-fade">
<p className="text-lg text-slate-500 mb-2 uppercase text-xs tracking-widest font-bold">If you have any other
            problems</p>
<a className="inline-flex items-center gap-2 text-2xl font-semibold text-white hover:text-indigo-400 transition-colors display-font uppercase" href="#">
            Let us know <i className="w-6 h-6 stroke-[2.5]" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
<div className="flex flex-col reveal-fade">

<div className="border-b border-white/10 py-6">
<h3 className="text-xl font-semibold text-indigo-400 mb-3 uppercase tracking-wide">I have no idea</h3>
<p className="text-lg text-slate-300 leading-relaxed">
            Take it easy, we already have a team to provide solutions and suggestions to your ideas. We parse the
            abstract into executable binaries.
          </p>
</div>

<div className="border-b border-white/10 py-8 group cursor-pointer">
<h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-wide">
            Our Working Process</h3>
</div>

<div className="border-b border-white/10 py-8 group cursor-pointer">
<h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-wide">
            The Price We Give</h3>
</div>

<div className="border-b border-white/10 py-8 group cursor-pointer">
<h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-wide">
            What You Got</h3>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-20 bg-[#050505]">
<div className="w-full bg-slate-900/50 border border-white/10 p-10 md:p-16 rounded-xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2">
</div>
<h2 className="uppercase display-font md:text-4xl text-3xl font-semibold text-white tracking-tight z-10 mb-8 relative reveal-text">
        You Need The Transmission
      </h2>
<p className="text-slate-400 text-lg mb-8 relative z-10 reveal-fade">
        For the latest information and best deals on serverless architecture.
      </p>
<form className="flex flex-col md:flex-row gap-4 max-w-xl relative z-10 reveal-fade">
<input className="w-full px-6 py-4 bg-black border border-white/20 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors rounded-none" placeholder="your.name@synth.xyz" type="email"/>
<button className="hover:bg-indigo-700 uppercase transition-colors whitespace-nowrap font-semibold text-white tracking-wide bg-indigo-600 pt-4 pr-8 pb-4 pl-8" type="button">
                    Submit
                </button>
</form>
</div>
</section>

<footer className="bg-black text-white px-6 md:px-12 pb-12 pt-20 border-t border-white/10">

<div className="w-full flex justify-center border-b border-white/10 pb-12 mb-12">
<h1 className="text-[14vw] leading-none uppercase display-font neon-text font-bold tracking-tighter text-center reveal-fade">
        SYNTH
      </h1>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-8 reveal-fade">
<div className="flex gap-8 text-sm font-semibold uppercase tracking-wider">
<a className="flex items-center gap-1 hover:text-indigo-400 transition-colors" href="#">
          Type <i className="w-3 h-3 stroke-[2.5]" data-lucide="arrow-up-right"></i>
</a>
<a className="flex items-center gap-1 hover:text-indigo-400 transition-colors" href="#">
          Project <i className="w-3 h-3 stroke-[2.5]" data-lucide="arrow-up-right"></i>
</a>
<a className="flex items-center gap-1 hover:text-indigo-400 transition-colors" href="#">
          About Us <i className="w-3 h-3 stroke-[2.5]" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5 stroke-[2]" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5 stroke-[2]" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5 stroke-[2]" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5 stroke-[2]" data-lucide="send"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5 stroke-[2]" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
