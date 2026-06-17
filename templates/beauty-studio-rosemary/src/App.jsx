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

        (function () {
            // Inject CSS for paused/running states
            const style = document.createElement("style");
            style.textContent = `
              /* Default: paused */
              .animate-on-scroll { animation-play-state: paused !important; }
              /* Activated by JS */
              .animate-on-scroll.animate { animation-play-state: running !important; }
            `;
            document.head.appendChild(style);

            const once = true;

            if (!window.__inViewIO) {
              window.__inViewIO = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    if (once) window.__inViewIO.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
            }

            window.initInViewAnimations = function (selector = ".animate-on-scroll") {
              document.querySelectorAll(selector).forEach((el) => {
                window.__inViewIO.observe(el); 
              });
            };

            document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
          })();
    
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
      

<div bis_size='{"x":0,"y":0,"w":2287,"h":1258,"abs_x":0,"abs_y":43}' className="aura-background-component fixed top-0 w-full h-screen -z-10 opacity-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div bis_size='{"x":0,"y":0,"w":2287,"h":1258,"abs_x":0,"abs_y":43}' className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe bis_chainid="68" bis_depth="1" bis_id="fr_z9pmj9j1wj9muxm6m4jhzo" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' frameborder="0" height="100%" src="https://my.spline.design/herolightcopy-HWuYMA6IdNGk0VGuyvrItNGB" width="100%"></iframe></div></div>

<nav bis_size='{"x":0,"y":0,"w":2287,"h":69,"abs_x":0,"abs_y":43}' className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div bis_size='{"x":503,"y":0,"w":1280,"h":68,"abs_x":503,"abs_y":43}' className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
<div bis_size='{"x":527,"y":18,"w":144,"h":32,"abs_x":527,"abs_y":61}' className="flex items-center gap-2 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<div bis_size='{"x":527,"y":18,"w":32,"h":32,"abs_x":527,"abs_y":61}' className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500 text-white shadow-sm">
<svg bis_size='{"x":533,"y":24,"w":20,"h":20,"abs_x":533,"abs_y":67}' className="lucide lucide-sparkles h-5 w-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span bis_size='{"x":567,"y":22,"w":104,"h":24,"abs_x":567,"abs_y":65}' className="text-base font-medium tracking-tight text-slate-900 font-geist" style={{}}>Etch of Beauty</span>
</div>
<div bis_size='{"x":1031,"y":24,"w":206,"h":20,"abs_x":1031,"abs_y":67}' className="hidden md:flex items-center gap-8">
<a bis_size='{"x":1031,"y":24,"w":56,"h":20,"abs_x":1031,"abs_y":67}' className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-geist" href="#services" style={{}}>Services</a>
<a bis_size='{"x":1120,"y":24,"w":39,"h":20,"abs_x":1120,"abs_y":67}' className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-geist" href="#about" style={{}}>About</a>
<a bis_size='{"x":1191,"y":24,"w":46,"h":20,"abs_x":1191,"abs_y":67}' className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-geist" href="#testimonials" style={{}}>Stories</a>
</div>
<a bis_size='{"x":1598,"y":16,"w":161,"h":36,"abs_x":1598,"abs_y":59}' className="hidden sm:inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate font-geist" href="#contact" style={{}}>
                Book Consultation
            </a>

</div>
</nav>

<section bis_size='{"x":0,"y":0,"w":2287,"h":960,"abs_x":0,"abs_y":43}' className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div bis_size='{"x":503,"y":192,"w":1280,"h":640,"abs_x":503,"abs_y":235}' className="mx-auto max-w-7xl px-6 lg:px-8">
<div bis_size='{"x":535,"y":192,"w":1216,"h":640,"abs_x":535,"abs_y":235}' className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div bis_size='{"x":535,"y":211,"w":592,"h":602,"abs_x":535,"abs_y":254}' className="max-w-2xl">
<div bis_size='{"x":535,"y":212,"w":182,"h":26,"abs_x":535,"abs_y":255}' className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate font-geist" style={{}}>
<span bis_size='{"x":548,"y":221,"w":8,"h":8,"abs_x":548,"abs_y":264}' className="flex h-2 w-2 rounded-full bg-rose-500 mr-2"></span>
                        Premier Studio in Sydney
                    </div>
<h1 bis_size='{"x":535,"y":270,"w":592,"h":216,"abs_x":535,"abs_y":313}' className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 mb-6 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate font-playfair font-medium">
                        Precision artistry for your <span bis_size='{"x":535,"y":330,"w":485,"h":168,"abs_x":535,"abs_y":373}' className="text-rose-500/90 font-playfair font-medium">natural beauty.</span>
</h1>
<p bis_size='{"x":535,"y":510,"w":512,"h":84,"abs_x":535,"abs_y":553}' className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-lg [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate font-geist" style={{}}>
                        Specializing in cosmetic tattoo services that enhance your features with subtlety and grace. Over 10 years of mastery by Rosemary.
                    </p>
<div bis_size='{"x":535,"y":626,"w":592,"h":54,"abs_x":535,"abs_y":669}' className="flex flex-col sm:flex-row gap-4 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate">
<button bis_size='{"x":535,"y":626,"w":169,"h":54,"abs_x":535,"abs_y":669}' className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-3.5 text-base font-medium text-white shadow-sm hover:bg-slate-800 transition-all font-geist" style={{}}>
                            View Services
                        </button>
<button bis_size='{"x":720,"y":626,"w":179,"h":54,"abs_x":720,"abs_y":669}' className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-8 py-3.5 text-base font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-all font-geist" style={{}}>
                            Our Philosophy
                        </button>
</div>

<div bis_size='{"x":535,"y":728,"w":592,"h":85,"abs_x":535,"abs_y":771}' className="mt-12 flex items-center gap-8 pt-8 border-t border-slate-100 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate">
<div bis_size='{"x":535,"y":761,"w":108,"h":52,"abs_x":535,"abs_y":804}'>
<p bis_size='{"x":535,"y":761,"w":108,"h":32,"abs_x":535,"abs_y":804}' className="text-2xl tracking-tight text-slate-900 font-playfair font-medium">10+</p>
<p bis_size='{"x":535,"y":793,"w":108,"h":20,"abs_x":535,"abs_y":836}' className="text-sm text-slate-500 font-geist" style={{}}>Years Experience</p>
</div>
<div bis_size='{"x":676,"y":771,"w":1,"h":32,"abs_x":676,"abs_y":814}' className="h-8 w-px bg-slate-200"></div>
<div bis_size='{"x":709,"y":761,"w":89,"h":52,"abs_x":709,"abs_y":804}'>
<p bis_size='{"x":709,"y":761,"w":89,"h":32,"abs_x":709,"abs_y":804}' className="text-2xl tracking-tight text-slate-900 font-playfair font-medium">2k+</p>
<p bis_size='{"x":709,"y":793,"w":89,"h":20,"abs_x":709,"abs_y":836}' className="text-sm text-slate-500 font-geist" style={{}}>Happy Clients</p>
</div>
<div bis_size='{"x":830,"y":771,"w":1,"h":32,"abs_x":830,"abs_y":814}' className="h-8 w-px bg-slate-200"></div>
<div bis_size='{"x":863,"y":771,"w":163,"h":32,"abs_x":863,"abs_y":814}' className="flex items-center gap-1">
<div bis_size='{"x":863,"y":771,"w":80,"h":32,"abs_x":863,"abs_y":814}' className="flex -space-x-2">
<img alt="" bis_size='{"x":863,"y":771,"w":32,"h":32,"abs_x":863,"abs_y":814}' className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" bis_size='{"x":887,"y":771,"w":32,"h":32,"abs_x":887,"abs_y":814}' className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" bis_size='{"x":911,"y":771,"w":32,"h":32,"abs_x":911,"abs_y":814}' className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span bis_size='{"x":959,"y":777,"w":67,"h":20,"abs_x":959,"abs_y":820}' className="ml-3 text-sm font-medium text-slate-600 font-geist" style={{}}>5.0 Rating</span>
</div>
</div>
</div>

<div bis_size='{"x":1159,"y":192,"w":592,"h":640,"abs_x":1159,"abs_y":235}' className="relative lg:h-[640px] w-full rounded-2xl overflow-hidden [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll shadow-2xl shadow-rose-900/10 animate">
<img alt="Cosmetic Tattoo Procedures" bis_size='{"x":1159,"y":192,"w":592,"h":640,"abs_x":1159,"abs_y":235}' className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div bis_size='{"x":1183,"y":734,"w":544,"h":74,"abs_x":1183,"abs_y":777}' className="bg-white/60 border-white/20 border rounded-xl pt-4 pr-4 pb-4 pl-4 absolute right-6 bottom-6 left-6 shadow-lg backdrop-blur-lg">
<div bis_size='{"x":1200,"y":751,"w":510,"h":40,"abs_x":1200,"abs_y":794}' className="flex gap-4 gap-x-4 gap-y-4 items-center">
<div bis_size='{"x":1200,"y":751,"w":40,"h":40,"abs_x":1200,"abs_y":794}' className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
<svg bis_size='{"x":1210,"y":761,"w":20,"h":20,"abs_x":1210,"abs_y":804}' className="lucide lucide-check h-5 w-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div bis_size='{"x":1256,"y":753,"w":137,"h":36,"abs_x":1256,"abs_y":796}' className="">
<p bis_size='{"x":1256,"y":753,"w":137,"h":20,"abs_x":1256,"abs_y":796}' className="text-sm font-medium text-slate-900 font-geist" style={{}}>Feather Touch Brows</p>
<p bis_size='{"x":1256,"y":773,"w":137,"h":16,"abs_x":1256,"abs_y":816}' className="text-xs text-slate-500 font-geist" style={{}}>Most popular this month</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":960,"w":2287,"h":726,"abs_x":0,"abs_y":1003}' className="py-24 bg-white" id="services">
<div bis_size='{"x":503,"y":1056,"w":1280,"h":534,"abs_x":503,"abs_y":1099}' className="mx-auto max-w-7xl px-6 lg:px-8">
<div bis_size='{"x":807,"y":1056,"w":672,"h":76,"abs_x":807,"abs_y":1099}' className="text-center max-w-2xl mx-auto mb-16">
<span bis_size='{"x":1098,"y":1060,"w":89,"h":18,"abs_x":1098,"abs_y":1103}' className="text-sm font-medium text-rose-500 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate font-geist" style={{}}>Our Expertise</span>
<h2 bis_size='{"x":807,"y":1092,"w":672,"h":40,"abs_x":807,"abs_y":1135}' className="mt-3 text-3xl sm:text-4xl tracking-tight text-slate-900 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate font-playfair font-medium">Curated treatments for timeless beauty</h2>
</div>
<div bis_size='{"x":535,"y":1196,"w":1216,"h":394,"abs_x":535,"abs_y":1239}' className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div bis_size='{"x":535,"y":1196,"w":384,"h":394,"abs_x":535,"abs_y":1239}' className="group relative rounded-2xl border border-slate-200 p-8 hover:border-rose-200 hover:shadow-lg transition-all duration-300 bg-slate-50/50 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<div bis_size='{"x":568,"y":1229,"w":48,"h":48,"abs_x":568,"abs_y":1272}' className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-100 shadow-sm text-rose-500 group-hover:scale-110 transition-transform">
<svg bis_size='{"x":580,"y":1241,"w":24,"h":24,"abs_x":580,"abs_y":1284}' className="lucide lucide-eye h-6 w-6" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 bis_size='{"x":568,"y":1301,"w":318,"h":28,"abs_x":568,"abs_y":1344}' className="text-xl font-medium text-slate-900 mb-3 font-geist" style={{}}>Microblading &amp; Brows</h3>
<p bis_size='{"x":568,"y":1341,"w":318,"h":84,"abs_x":568,"abs_y":1384}' className="text-lg text-slate-500 mb-6 font-geist" style={{}}>Create symmetry and fullness with hair-like strokes tailored to your unique bone structure.</p>
<ul bis_size='{"x":568,"y":1449,"w":318,"h":52,"abs_x":568,"abs_y":1492}' className="space-y-3 mb-8">
<li bis_size='{"x":568,"y":1449,"w":318,"h":20,"abs_x":568,"abs_y":1492}' className="flex items-center text-sm text-slate-600 font-geist" style={{}}>
<svg bis_size='{"x":568,"y":1451,"w":16,"h":16,"abs_x":568,"abs_y":1494}' className="lucide lucide-check-circle-2 h-4 w-4 text-rose-400 mr-2" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Feather Touch
                        </li>
<li bis_size='{"x":568,"y":1481,"w":318,"h":20,"abs_x":568,"abs_y":1524}' className="flex items-center text-sm text-slate-600 font-geist" style={{}}>
<svg bis_size='{"x":568,"y":1483,"w":16,"h":16,"abs_x":568,"abs_y":1526}' className="lucide lucide-check-circle-2 h-4 w-4 text-rose-400 mr-2" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Ombre Brows
                        </li>
</ul>
<a bis_size='{"x":568,"y":1536,"w":93,"h":20,"abs_x":568,"abs_y":1579}' className="inline-flex items-center text-sm font-medium text-rose-600 hover:text-rose-700 font-geist" href="#" style={{}}>Learn more <svg bis_size='{"x":646,"y":1538,"w":16,"h":16,"abs_x":646,"abs_y":1581}' className="lucide lucide-arrow-right ml-1 h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>

<div bis_size='{"x":951,"y":1196,"w":384,"h":394,"abs_x":951,"abs_y":1239}' className="group relative rounded-2xl border border-slate-200 p-8 hover:border-rose-200 hover:shadow-lg transition-all duration-300 bg-slate-50/50 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate">
<div bis_size='{"x":984,"y":1229,"w":48,"h":48,"abs_x":984,"abs_y":1272}' className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-100 shadow-sm text-rose-500 group-hover:scale-110 transition-transform">
<svg bis_size='{"x":996,"y":1241,"w":24,"h":24,"abs_x":996,"abs_y":1284}' className="lucide lucide-smile h-6 w-6" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h3 bis_size='{"x":984,"y":1301,"w":318,"h":28,"abs_x":984,"abs_y":1344}' className="text-xl font-medium text-slate-900 mb-3 font-geist" style={{}}>Lip Blush &amp; Neutralization</h3>
<p bis_size='{"x":984,"y":1341,"w":318,"h":84,"abs_x":984,"abs_y":1384}' className="text-lg text-slate-500 mb-6 font-geist" style={{}}>Enhance your natural lip shape and color with a soft wash of pigment for a youthful definition.</p>
<ul bis_size='{"x":984,"y":1449,"w":318,"h":52,"abs_x":984,"abs_y":1492}' className="space-y-3 mb-8">
<li bis_size='{"x":984,"y":1449,"w":318,"h":20,"abs_x":984,"abs_y":1492}' className="flex items-center text-sm text-slate-600 font-geist" style={{}}>
<svg bis_size='{"x":984,"y":1451,"w":16,"h":16,"abs_x":984,"abs_y":1494}' className="lucide lucide-check-circle-2 h-4 w-4 text-rose-400 mr-2" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Soft Contour
                        </li>
<li bis_size='{"x":984,"y":1481,"w":318,"h":20,"abs_x":984,"abs_y":1524}' className="flex items-center text-sm text-slate-600 font-geist" style={{}}>
<svg bis_size='{"x":984,"y":1483,"w":16,"h":16,"abs_x":984,"abs_y":1526}' className="lucide lucide-check-circle-2 h-4 w-4 text-rose-400 mr-2" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Color Correction
                        </li>
</ul>
<a bis_size='{"x":984,"y":1536,"w":93,"h":20,"abs_x":984,"abs_y":1579}' className="inline-flex items-center text-sm font-medium text-rose-600 hover:text-rose-700 font-geist" href="#" style={{}}>Learn more <svg bis_size='{"x":1062,"y":1538,"w":16,"h":16,"abs_x":1062,"abs_y":1581}' className="lucide lucide-arrow-right ml-1 h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>

<div bis_size='{"x":1367,"y":1196,"w":384,"h":394,"abs_x":1367,"abs_y":1239}' className="group relative rounded-2xl border border-slate-200 p-8 hover:border-rose-200 hover:shadow-lg transition-all duration-300 bg-slate-50/50 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate">
<div bis_size='{"x":1400,"y":1229,"w":48,"h":48,"abs_x":1400,"abs_y":1272}' className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-100 shadow-sm text-rose-500 group-hover:scale-110 transition-transform">
<svg bis_size='{"x":1412,"y":1241,"w":24,"h":24,"abs_x":1412,"abs_y":1284}' className="lucide lucide-sparkles h-6 w-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 bis_size='{"x":1400,"y":1301,"w":318,"h":28,"abs_x":1400,"abs_y":1344}' className="text-xl font-medium text-slate-900 mb-3 font-geist" style={{}}>Eyeliner Tattoo</h3>
<p bis_size='{"x":1400,"y":1341,"w":318,"h":84,"abs_x":1400,"abs_y":1384}' className="text-lg text-slate-500 mb-6 font-geist" style={{}}>Define your eyes with precision eyeliner that saves you time and ensures you always look awake.</p>
<ul bis_size='{"x":1400,"y":1449,"w":318,"h":52,"abs_x":1400,"abs_y":1492}' className="space-y-3 mb-8">
<li bis_size='{"x":1400,"y":1449,"w":318,"h":20,"abs_x":1400,"abs_y":1492}' className="flex items-center text-sm text-slate-600 font-geist" style={{}}>
<svg bis_size='{"x":1400,"y":1451,"w":16,"h":16,"abs_x":1400,"abs_y":1494}' className="lucide lucide-check-circle-2 h-4 w-4 text-rose-400 mr-2" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Lash Enhancement
                        </li>
<li bis_size='{"x":1400,"y":1481,"w":318,"h":20,"abs_x":1400,"abs_y":1524}' className="flex items-center text-sm text-slate-600 font-geist" style={{}}>
<svg bis_size='{"x":1400,"y":1483,"w":16,"h":16,"abs_x":1400,"abs_y":1526}' className="lucide lucide-check-circle-2 h-4 w-4 text-rose-400 mr-2" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Winged Liner
                        </li>
</ul>
<a bis_size='{"x":1400,"y":1536,"w":93,"h":20,"abs_x":1400,"abs_y":1579}' className="inline-flex items-center text-sm font-medium text-rose-600 hover:text-rose-700 font-geist" href="#" style={{}}>Learn more <svg bis_size='{"x":1478,"y":1538,"w":16,"h":16,"abs_x":1478,"abs_y":1581}' className="lucide lucide-arrow-right ml-1 h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1686,"w":2287,"h":960,"abs_x":0,"abs_y":1729}' className="py-24 bg-slate-50" id="about">
<div bis_size='{"x":503,"y":1782,"w":1280,"h":768,"abs_x":503,"abs_y":1825}' className="mx-auto max-w-7xl px-6 lg:px-8">
<div bis_size='{"x":535,"y":1782,"w":1216,"h":768,"abs_x":535,"abs_y":1825}' className="grid md:grid-cols-2 gap-16 items-center">
<div bis_size='{"x":535,"y":1782,"w":576,"h":768,"abs_x":535,"abs_y":1825}' className="relative rounded-2xl overflow-hidden [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<div bis_size='{"x":535,"y":1782,"w":576,"h":768,"abs_x":535,"abs_y":1825}' className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10"></div>
<img alt="Rosemary at work" bis_size='{"x":535,"y":1782,"w":576,"h":768,"abs_x":535,"abs_y":1825}' className="w-full h-full object-cover min-h-[500px]" src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":1175,"y":1944,"w":576,"h":444,"abs_x":1175,"abs_y":1987}' className="[animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<h2 bis_size='{"x":1175,"y":1944,"w":576,"h":40,"abs_x":1175,"abs_y":1987}' className="text-3xl sm:text-4xl tracking-tight text-slate-900 mb-6 font-playfair font-medium">About the Studio</h2>
<div bis_size='{"x":1175,"y":2008,"w":576,"h":300,"abs_x":1175,"abs_y":2051}' className="space-y-6 text-lg text-slate-600">
<p bis_size='{"x":1175,"y":2008,"w":576,"h":112,"abs_x":1175,"abs_y":2051}' className="font-geist" style={{}}>
                            Located in the heart of Sydney, Etch of Beauty is more than a studio—it's a sanctuary for confidence. Our lead artist, Rosemary, brings over 10 years of experience in the beauty industry, mastering the delicate art of cosmetic tattooing.
                        </p>
<p bis_size='{"x":1175,"y":2144,"w":576,"h":84,"abs_x":1175,"abs_y":2187}' className="font-geist" style={{}}>
                            We prioritize hygiene, precision, and client satisfaction above all else. Every appointment begins with a thorough consultation to tailor the shape and color to your natural features.
                        </p>
<p bis_size='{"x":1175,"y":2252,"w":576,"h":56,"abs_x":1175,"abs_y":2295}' className="font-geist" style={{}}>
                            We believe that cosmetic tattooing isn't about changing who you are, but enhancing the beautiful features you already possess.
                        </p>
</div>
<div bis_size='{"x":1175,"y":2340,"w":576,"h":48,"abs_x":1175,"abs_y":2383}' className="mt-8 flex items-center gap-4">
<div bis_size='{"x":1175,"y":2340,"w":168,"h":48,"abs_x":1175,"abs_y":2383}' className="flex flex-col">
<span bis_size='{"x":1175,"y":2340,"w":168,"h":32,"abs_x":1175,"abs_y":2383}' className="text-2xl text-rose-500 font-playfair font-medium" style={{fontFamily: 'cursive'}}>Rosemary</span>
<span bis_size='{"x":1175,"y":2372,"w":168,"h":16,"abs_x":1175,"abs_y":2415}' className="text-xs font-medium text-slate-400 uppercase tracking-widest font-geist" style={{}}>Lead Artist &amp; Founder</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2646,"w":2287,"h":1182,"abs_x":0,"abs_y":2689}' className="overflow-hidden bg-slate-50 pt-24 pb-24 relative" id="testimonials" style={{}}>
<div bis_size='{"x":0,"y":2646,"w":2287,"h":1182,"abs_x":0,"abs_y":2689}' className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-200/40 via-slate-50 to-slate-50 pointer-events-none"></div>

<div bis_size='{"x":503,"y":2742,"w":1280,"h":990,"abs_x":503,"abs_y":2785}' className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative z-10">
<div bis_size='{"x":535,"y":2742,"w":1216,"h":142,"abs_x":535,"abs_y":2785}' className="mb-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<span bis_size='{"x":535,"y":2746,"w":72,"h":18,"abs_x":535,"abs_y":2789}' className="text-sm font-medium text-rose-500 font-geist" style={{}}>Client Love</span>
<h2 bis_size='{"x":535,"y":2774,"w":1216,"h":48,"abs_x":535,"abs_y":2817}' className="mt-2 text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 font-playfair font-medium">
                Stories from our glowing clients.
              </h2>
<div bis_size='{"x":535,"y":2846,"w":337,"h":38,"abs_x":535,"abs_y":2889}' className="mt-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 border-slate-200 bg-white shadow-sm">
<span bis_size='{"x":548,"y":2853,"w":72,"h":24,"abs_x":548,"abs_y":2896}' className="inline-flex items-center -space-x-2">
<img alt="Reviewer 1" bis_size='{"x":548,"y":2853,"w":24,"h":24,"abs_x":548,"abs_y":2896}' className="h-6 w-6 rounded-full ring-2 object-cover ring-white" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Reviewer 2" bis_size='{"x":564,"y":2853,"w":24,"h":24,"abs_x":564,"abs_y":2896}' className="h-6 w-6 rounded-full ring-2 object-cover ring-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Reviewer 3" bis_size='{"x":580,"y":2853,"w":24,"h":24,"abs_x":580,"abs_y":2896}' className="h-6 w-6 rounded-full ring-2 object-cover ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Reviewer 4" bis_size='{"x":596,"y":2853,"w":24,"h":24,"abs_x":596,"abs_y":2896}' className="h-6 w-6 rounded-full ring-2 object-cover ring-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</span>
<span bis_size='{"x":636,"y":2855,"w":223,"h":20,"abs_x":636,"abs_y":2898}' className="ml-2 inline-flex items-center gap-1 text-sm text-slate-600">
<svg bis_size='{"x":636,"y":2857,"w":16,"h":16,"abs_x":636,"abs_y":2900}' className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":656,"y":2857,"w":16,"h":16,"abs_x":656,"abs_y":2900}' className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":676,"y":2857,"w":16,"h":16,"abs_x":676,"abs_y":2900}' className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":696,"y":2857,"w":16,"h":16,"abs_x":696,"abs_y":2900}' className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":716,"y":2857,"w":16,"h":16,"abs_x":716,"abs_y":2900}' className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span bis_size='{"x":740,"y":2855,"w":119,"h":20,"abs_x":740,"abs_y":2898}' className="ml-1 font-geist" style={{}}>5.0 • 200+ reviews</span>
</span>
</div>
</div>
<div bis_size='{"x":535,"y":2932,"w":1216,"h":800,"abs_x":535,"abs_y":2975}' className="grid grid-cols-1 overflow-hidden md:grid-cols-3 h-[800px] pt-12 pb-12 gap-x-6 gap-y-6 testimonial-columns" style={{maskImage: 'linear-gradient(180deg, transparent, black 30%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 30%, black 70%, transparent)'}}>

<div bis_size='{"x":535,"y":2980,"w":389,"h":704,"abs_x":535,"abs_y":3023}' className="overflow-hidden">
<div bis_size='{"x":535,"y":2980,"w":389,"h":949,"abs_x":535,"abs_y":3023}' className="space-y-6" data-scroll-column="1">
<article bis_size='{"x":535,"y":2980,"w":389,"h":226,"abs_x":535,"abs_y":3023}' className="rounded-2xl border p-6 border-slate-200 bg-white shadow-sm">
<blockquote bis_size='{"x":560,"y":3005,"w":339,"h":116,"abs_x":560,"abs_y":3048}' className="text-[16px] sm:text-[18px] text-slate-700">
<span bis_size='{"x":560,"y":3005,"w":339,"h":108,"abs_x":560,"abs_y":3048}' className="inline-flex items-center gap-2 mb-2 font-geist" style={{}}>
<svg bis_size='{"x":560,"y":3051,"w":5,"h":16,"abs_x":560,"abs_y":3094}' className="lucide lucide-quote w-4 h-4 text-rose-500" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                         "I was so nervous about getting my brows done, but Rosemary made me feel so comfortable. The result is so natural!"
                        </span>
</blockquote>
<div bis_size='{"x":560,"y":3141,"w":339,"h":40,"abs_x":560,"abs_y":3184}' className="mt-5 flex items-center gap-3">
<img alt="Client" bis_size='{"x":560,"y":3141,"w":40,"h":40,"abs_x":560,"abs_y":3184}' className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":612,"y":3143,"w":93,"h":36,"abs_x":612,"abs_y":3186}' className="">
<div bis_size='{"x":612,"y":3143,"w":93,"h":20,"abs_x":612,"abs_y":3186}' className="text-sm font-medium text-slate-900 font-geist" style={{}}>Sarah Jenkins</div>
<div bis_size='{"x":612,"y":3163,"w":93,"h":16,"abs_x":612,"abs_y":3206}' className="text-xs text-slate-500 font-geist" style={{}}>Ombre Brows</div>
</div>
</div>
</article>
<article bis_size='{"x":535,"y":3230,"w":389,"h":226,"abs_x":535,"abs_y":3273}' className="rounded-2xl border p-6 border-slate-200 bg-white shadow-sm">
<blockquote bis_size='{"x":560,"y":3255,"w":339,"h":116,"abs_x":560,"abs_y":3298}' className="text-[16px] sm:text-[18px] text-slate-700">
<span bis_size='{"x":560,"y":3255,"w":339,"h":108,"abs_x":560,"abs_y":3298}' className="inline-flex items-center gap-2 mb-2 font-geist" style={{}}>
<svg bis_size='{"x":560,"y":3301,"w":5,"h":16,"abs_x":560,"abs_y":3344}' className="lucide lucide-quote w-4 h-4 text-rose-500" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                          "Waking up with my eyeliner perfectly done has changed my morning routine forever. Precision is an understatement."
                        </span>
</blockquote>
<div bis_size='{"x":560,"y":3391,"w":339,"h":40,"abs_x":560,"abs_y":3434}' className="mt-5 flex items-center gap-3">
<img alt="Client" bis_size='{"x":560,"y":3391,"w":40,"h":40,"abs_x":560,"abs_y":3434}' className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":612,"y":3393,"w":86,"h":36,"abs_x":612,"abs_y":3436}' className="">
<div bis_size='{"x":612,"y":3393,"w":86,"h":20,"abs_x":612,"abs_y":3436}' className="text-sm font-medium text-slate-900 font-geist" style={{}}>Priya Patel</div>
<div bis_size='{"x":612,"y":3413,"w":86,"h":16,"abs_x":612,"abs_y":3456}' className="text-xs text-slate-500 font-geist" style={{}}>Classic Eyeliner</div>
</div>
</div>
</article>
<article bis_size='{"x":535,"y":3480,"w":389,"h":199,"abs_x":535,"abs_y":3523}' className="rounded-2xl border p-6 border-slate-200 bg-white shadow-sm">
<blockquote bis_size='{"x":560,"y":3505,"w":339,"h":89,"abs_x":560,"abs_y":3548}' className="text-[16px] sm:text-[18px] text-slate-700">
<span bis_size='{"x":560,"y":3505,"w":339,"h":81,"abs_x":560,"abs_y":3548}' className="inline-flex items-center gap-2 mb-2 font-geist" style={{}}>
<svg bis_size='{"x":560,"y":3537,"w":6,"h":16,"abs_x":560,"abs_y":3580}' className="lucide lucide-quote w-4 h-4 text-rose-500" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                          "The studio is spotless and beautiful. Rosemary explained every step. Highly recommend for lip blush!"
                        </span>
</blockquote>
<div bis_size='{"x":560,"y":3614,"w":339,"h":40,"abs_x":560,"abs_y":3657}' className="mt-5 flex items-center gap-3">
<img alt="Client" bis_size='{"x":560,"y":3614,"w":40,"h":40,"abs_x":560,"abs_y":3657}' className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100" src="https://images.unsplash.com/photo-1546456073-6712f79251bb?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":612,"y":3616,"w":91,"h":36,"abs_x":612,"abs_y":3659}' className="">
<div bis_size='{"x":612,"y":3616,"w":91,"h":20,"abs_x":612,"abs_y":3659}' className="text-sm font-medium text-slate-900 font-geist" style={{}}>Jessica Wong</div>
<div bis_size='{"x":612,"y":3636,"w":91,"h":16,"abs_x":612,"abs_y":3679}' className="text-xs text-slate-500 font-geist" style={{}}>Lip Blush</div>
</div>
</div>
</article>

<article bis_size='{"x":535,"y":3703,"w":389,"h":226,"abs_x":535,"abs_y":3746}' className="rounded-2xl border p-6 border-slate-200 bg-white shadow-sm">
<blockquote bis_size='{"x":560,"y":3728,"w":339,"h":116,"abs_x":560,"abs_y":3771}' className="text-[16px] sm:text-[18px] text-slate-700">
<span bis_size='{"x":560,"y":3728,"w":339,"h":108,"abs_x":560,"abs_y":3771}' className="inline-flex items-center gap-2 mb-2 font-geist" style={{}}>
<svg bis_size='{"x":560,"y":3774,"w":5,"h":16,"abs_x":560,"abs_y":3817}' className="lucide lucide-quote w-4 h-4 text-rose-500" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                          "I was so nervous about getting my brows done, but Rosemary made me feel so comfortable. The result is so natural!"
                        </span>
</blockquote>
<div bis_size='{"x":560,"y":3864,"w":339,"h":40,"abs_x":560,"abs_y":3907}' className="mt-5 flex items-center gap-3">
<img alt="Client" bis_size='{"x":560,"y":3864,"w":40,"h":40,"abs_x":560,"abs_y":3907}' className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":612,"y":3866,"w":93,"h":36,"abs_x":612,"abs_y":3909}' className="">
<div bis_size='{"x":612,"y":3866,"w":93,"h":20,"abs_x":612,"abs_y":3909}' className="text-sm font-medium text-slate-900 font-geist" style={{}}>Sarah Jenkins</div>
<div bis_size='{"x":612,"y":3886,"w":93,"h":16,"abs_x":612,"abs_y":3929}' className="text-xs text-slate-500 font-geist" style={{}}>Ombre Brows</div>
</div>
</div>
</article>
</div>
</div>

<div bis_size='{"x":948,"y":2980,"w":389,"h":704,"abs_x":948,"abs_y":3023}' className="overflow-hidden">
<div bis_size='{"x":948,"y":2980,"w":389,"h":868,"abs_x":948,"abs_y":3023}' className="space-y-6" data-scroll-column="2">
<article bis_size='{"x":948,"y":2980,"w":389,"h":199,"abs_x":948,"abs_y":3023}' className="rounded-2xl border p-6 border-slate-200 bg-white shadow-sm">
<blockquote bis_size='{"x":973,"y":3005,"w":339,"h":89,"abs_x":973,"abs_y":3048}' className="text-[16px] sm:text-[18px] text-slate-700">
<span bis_size='{"x":973,"y":3005,"w":339,"h":81,"abs_x":973,"abs_y":3048}' className="inline-flex items-center gap-2 mb-2 font-geist" style={{}}>
<svg bis_size='{"x":973,"y":3037,"w":6,"h":16,"abs_x":973,"abs_y":3080}' className="lucide lucide-quote w-4 h-4 text-rose-500" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                          "Rosemary is a true artist. She corrected my old tattoo and now my brows look symmetrical and full."
                        </span>
</blockquote>
<div bis_size='{"x":973,"y":3114,"w":339,"h":40,"abs_x":973,"abs_y":3157}' className="mt-5 flex items-center gap-3">
<img alt="Client" bis_size='{"x":973,"y":3114,"w":40,"h":40,"abs_x":973,"abs_y":3157}' className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":1025,"y":3116,"w":88,"h":36,"abs_x":1025,"abs_y":3159}' className="">
<div bis_size='{"x":1025,"y":3116,"w":88,"h":20,"abs_x":1025,"abs_y":3159}' className="text-sm font-medium text-slate-900 font-geist" style={{}}>Emily Chen</div>
<div bis_size='{"x":1025,"y":3136,"w":88,"h":16,"abs_x":1025,"abs_y":3179}' className="text-xs text-slate-500 font-geist" style={{}}>Brow Correction</div>
</div>
</div>
</article>
<article bis_size='{"x":948,"y":3203,"w":389,"h":199,"abs_x":948,"abs_y":3246}' className="rounded-2xl border p-6 border-slate-200 bg-white shadow-sm">
<blockquote bis_size='{"x":973,"y":3228,"w":339,"h":89,"abs_x":973,"abs_y":3271}' className="text-[16px] sm:text-[18px] text-slate-700">
<span bis_size='{"x":973,"y":3228,"w":339,"h":81,"abs_x":973,"abs_y":3271}' className="inline-flex items-center gap-2 mb-2 font-geist" style={{}}>
<svg bis_size='{"x":973,"y":3260,"w":7,"h":16,"abs_x":973,"abs_y":3303}' className="lucide lucide-quote w-4 h-4 text-rose-500" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                          "The healing process was exactly as described. No surprises, just beautiful results."
                        </span>
</blockquote>
<div bis_size='{"x":973,"y":3337,"w":339,"h":40,"abs_x":973,"abs_y":3380}' className="mt-5 flex items-center gap-3">
<img alt="Client" bis_size='{"x":973,"y":3337,"w":40,"h":40,"abs_x":973,"abs_y":3380}' className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":1025,"y":3339,"w":93,"h":36,"abs_x":1025,"abs_y":3382}' className="">
<div bis_size='{"x":1025,"y":3339,"w":93,"h":20,"abs_x":1025,"abs_y":3382}' className="text-sm font-medium text-slate-900 font-geist" style={{}}>Rachel Adams</div>
<div bis_size='{"x":1025,"y":3359,"w":93,"h":16,"abs_x":1025,"abs_y":3402}' className="text-xs text-slate-500 font-geist" style={{}}>Hybrid Brows</div>
</div>
</div>
</article>
<article bis_size='{"x":948,"y":3426,"w":389,"h":199,"abs_x":948,"abs_y":3469}' className="rounded-2xl border p-6 border-slate-200 bg-white shadow-sm">
<blockquote bis_size='{"x":973,"y":3451,"w":339,"h":89,"abs_x":973,"abs_y":3494}' className="text-[16px] sm:text-[18px] text-slate-700">
<span bis_size='{"x":973,"y":3451,"w":339,"h":81,"abs_x":973,"abs_y":3494}' className="inline-flex items-center gap-2 mb-2 font-geist" style={{}}>
<svg bis_size='{"x":973,"y":3483,"w":7,"h":16,"abs_x":973,"abs_y":3526}' className="lucide lucide-quote w-4 h-4 text-rose-500" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                          "Professional, hygienic, and incredibly talented. I wouldn't trust anyone else in Sydney."
                        </span>
</blockquote>
<div bis_size='{"x":973,"y":3560,"w":339,"h":40,"abs_x":973,"abs_y":3603}' className="mt-5 flex items-center gap-3">
<img alt="Client" bis_size='{"x":973,"y":3560,"w":40,"h":40,"abs_x":973,"abs_y":3603}' className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":1025,"y":3562,"w":95,"h":36,"abs_x":1025,"abs_y":3605}'>
<div bis_size='{"x":1025,"y":3562,"w":95,"h":20,"abs_x":1025,"abs_y":3605}' className="text-sm font-medium text-slate-900 font-geist" style={{}}>Liam O'Connor</div>
<div bis_size='{"x":1025,"y":3582,"w":95,"h":16,"abs_x":1025,"abs_y":3625}' className="text-xs text-slate-500 font-geist" style={{}}>Men's Brows</div>
</div>
</div>
</article>

<article bis_size='{"x":948,"y":3649,"w":389,"h":199,"abs_x":948,"abs_y":3692}' className="rounded-2xl border p-6 border-slate-200 bg-white shadow-sm">
<blockquote bis_size='{"x":973,"y":3674,"w":339,"h":89,"abs_x":973,"abs_y":3717}' className="text-[16px] sm:text-[18px] text-slate-700">
<span bis_size='{"x":973,"y":3674,"w":339,"h":81,"abs_x":973,"abs_y":3717}' className="inline-flex items-center gap-2 mb-2 font-geist" style={{}}>
<svg bis_size='{"x":973,"y":3706,"w":6,"h":16,"abs_x":973,"abs_y":3749}' className="lucide lucide-quote w-4 h-4 text-rose-500" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                          "Rosemary is a true artist. She corrected my old tattoo and now my brows look symmetrical and full."
                        </span>
</blockquote>
<div bis_size='{"x":973,"y":3783,"w":339,"h":40,"abs_x":973,"abs_y":3826}' className="mt-5 flex items-center gap-3">
<img alt="Client" bis_size='{"x":973,"y":3783,"w":40,"h":40,"abs_x":973,"abs_y":3826}' className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":1025,"y":3785,"w":88,"h":36,"abs_x":1025,"abs_y":3828}' className="">
<div bis_size='{"x":1025,"y":3785,"w":88,"h":20,"abs_x":1025,"abs_y":3828}' className="text-sm font-medium text-slate-900 font-geist" style={{}}>Emily Chen</div>
<div bis_size='{"x":1025,"y":3805,"w":88,"h":16,"abs_x":1025,"abs_y":3848}' className="text-xs text-slate-500 font-geist" style={{}}>Brow Correction</div>
</div>
</div>
</article>
</div>
</div>

<div bis_size='{"x":1362,"y":2980,"w":389,"h":704,"abs_x":1362,"abs_y":3023}' className="overflow-hidden">
<div bis_size='{"x":1362,"y":2980,"w":389,"h":868,"abs_x":1362,"abs_y":3023}' className="space-y-6" data-scroll-column="3">
<article bis_size='{"x":1362,"y":2980,"w":389,"h":199,"abs_x":1362,"abs_y":3023}' className="rounded-2xl border p-6 border-slate-200 bg-white shadow-sm">
<blockquote bis_size='{"x":1387,"y":3005,"w":339,"h":89,"abs_x":1387,"abs_y":3048}' className="text-[16px] sm:text-[18px] text-slate-700">
<span bis_size='{"x":1387,"y":3005,"w":339,"h":81,"abs_x":1387,"abs_y":3048}' className="inline-flex items-center gap-2 mb-2 font-geist" style={{}}>
<svg bis_size='{"x":1387,"y":3037,"w":7,"h":16,"abs_x":1387,"abs_y":3080}' className="lucide lucide-quote w-4 h-4 text-rose-500" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                          "My lips look so much fuller but completely natural. The color match was perfect."
                        </span>
</blockquote>
<div bis_size='{"x":1387,"y":3114,"w":339,"h":40,"abs_x":1387,"abs_y":3157}' className="mt-5 flex items-center gap-3">
<img alt="Client" bis_size='{"x":1387,"y":3114,"w":40,"h":40,"abs_x":1387,"abs_y":3157}' className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div bis_size='{"x":1439,"y":3116,"w":79,"h":36,"abs_x":1439,"abs_y":3159}' className="">
<div bis_size='{"x":1439,"y":3116,"w":79,"h":20,"abs_x":1439,"abs_y":3159}' className="text-sm font-medium text-slate-900 font-geist" style={{}}>Carla Rivera</div>
<div bis_size='{"x":1439,"y":3136,"w":79,"h":16,"abs_x":1439,"abs_y":3179}' className="text-xs text-slate-500 font-geist" style={{}}>Lip Blush</div>
</div>
</div>
</article>
<article bis_size='{"x":1362,"y":3203,"w":389,"h":199,"abs_x":1362,"abs_y":3246}' className="rounded-2xl border p-6 border-slate-200 bg-white shadow-sm">
<blockquote bis_size='{"x":1387,"y":3228,"w":339,"h":89,"abs_x":1387,"abs_y":3271}' className="text-[16px] sm:text-[18px] text-slate-700">
<span bis_size='{"x":1387,"y":3228,"w":339,"h":81,"abs_x":1387,"abs_y":3271}' className="inline-flex items-center gap-2 mb-2 font-geist" style={{}}>
<svg bis_size='{"x":1387,"y":3260,"w":7,"h":16,"abs_x":1387,"abs_y":3303}' className="lucide lucide-quote w-4 h-4 text-rose-500" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                          "Best beauty investment I've made. It saves me 20 minutes every single morning."
                        </span>
</blockquote>
<div bis_size='{"x":1387,"y":3337,"w":339,"h":40,"abs_x":1387,"abs_y":3380}' className="mt-5 flex items-center gap-3">
<img alt="Client" bis_size='{"x":1387,"y":3337,"w":40,"h":40,"abs_x":1387,"abs_y":3380}' className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div bis_size='{"x":1439,"y":3339,"w":95,"h":36,"abs_x":1439,"abs_y":3382}' className="">
<div bis_size='{"x":1439,"y":3339,"w":95,"h":20,"abs_x":1439,"abs_y":3382}' className="text-sm font-medium text-slate-900 font-geist" style={{}}>Sofia Martinez</div>
<div bis_size='{"x":1439,"y":3359,"w":95,"h":16,"abs_x":1439,"abs_y":3402}' className="text-xs text-slate-500 font-geist" style={{}}>Microblading</div>
</div>
</div>
</article>
<article bis_size='{"x":1362,"y":3426,"w":389,"h":199,"abs_x":1362,"abs_y":3469}' className="rounded-2xl border p-6 border-slate-200 bg-white shadow-sm">
<blockquote bis_size='{"x":1387,"y":3451,"w":339,"h":89,"abs_x":1387,"abs_y":3494}' className="text-[16px] sm:text-[18px] text-slate-700">
<span bis_size='{"x":1387,"y":3451,"w":339,"h":81,"abs_x":1387,"abs_y":3494}' className="inline-flex items-center gap-2 mb-2 font-geist" style={{}}>
<svg bis_size='{"x":1387,"y":3483,"w":6,"h":16,"abs_x":1387,"abs_y":3526}' className="lucide lucide-quote w-4 h-4 text-rose-500" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                          "I love how Rosemary took the time to map out my brows before starting. Perfectionist in the best way."
                        </span>
</blockquote>
<div bis_size='{"x":1387,"y":3560,"w":339,"h":40,"abs_x":1387,"abs_y":3603}' className="mt-5 flex items-center gap-3">
<img alt="Client" bis_size='{"x":1387,"y":3560,"w":40,"h":40,"abs_x":1387,"abs_y":3603}' className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":1439,"y":3562,"w":96,"h":36,"abs_x":1439,"abs_y":3605}' className="">
<div bis_size='{"x":1439,"y":3562,"w":96,"h":20,"abs_x":1439,"abs_y":3605}' className="text-sm font-medium text-slate-900 font-geist" style={{}}>Nicole Bennett</div>
<div bis_size='{"x":1439,"y":3582,"w":96,"h":16,"abs_x":1439,"abs_y":3625}' className="text-xs text-slate-500 font-geist" style={{}}>Feather Touch</div>
</div>
</div>
</article>

<article bis_size='{"x":1362,"y":3649,"w":389,"h":199,"abs_x":1362,"abs_y":3692}' className="rounded-2xl border p-6 border-slate-200 bg-white shadow-sm">
<blockquote bis_size='{"x":1387,"y":3674,"w":339,"h":89,"abs_x":1387,"abs_y":3717}' className="text-[16px] sm:text-[18px] text-slate-700">
<span bis_size='{"x":1387,"y":3674,"w":339,"h":81,"abs_x":1387,"abs_y":3717}' className="inline-flex items-center gap-2 mb-2 font-geist" style={{}}>
<svg bis_size='{"x":1387,"y":3706,"w":7,"h":16,"abs_x":1387,"abs_y":3749}' className="lucide lucide-quote w-4 h-4 text-rose-500" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                          "My lips look so much fuller but completely natural. The color match was perfect."
                        </span>
</blockquote>
<div bis_size='{"x":1387,"y":3783,"w":339,"h":40,"abs_x":1387,"abs_y":3826}' className="mt-5 flex items-center gap-3">
<img alt="Client" bis_size='{"x":1387,"y":3783,"w":40,"h":40,"abs_x":1387,"abs_y":3826}' className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div bis_size='{"x":1439,"y":3785,"w":79,"h":36,"abs_x":1439,"abs_y":3828}'>
<div bis_size='{"x":1439,"y":3785,"w":79,"h":20,"abs_x":1439,"abs_y":3828}' className="text-sm font-medium text-slate-900 font-geist" style={{}}>Carla Rivera</div>
<div bis_size='{"x":1439,"y":3805,"w":79,"h":16,"abs_x":1439,"abs_y":3848}' className="text-xs text-slate-500 font-geist" style={{}}>Lip Blush</div>
</div>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3828,"w":2287,"h":435,"abs_x":0,"abs_y":3871}' className="py-24 bg-white border-t border-slate-200" id="contact">
<div bis_size='{"x":503,"y":3925,"w":1280,"h":242,"abs_x":503,"abs_y":3968}' className="mx-auto max-w-7xl px-6 lg:px-8">
<div bis_size='{"x":535,"y":3925,"w":1216,"h":242,"abs_x":535,"abs_y":3968}' className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-12 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<div bis_size='{"x":600,"y":3990,"w":576,"h":112,"abs_x":600,"abs_y":4033}' className="max-w-xl">
<h2 bis_size='{"x":600,"y":3990,"w":576,"h":40,"abs_x":600,"abs_y":4033}' className="text-3xl sm:text-4xl tracking-tight text-slate-900 mb-4 font-playfair font-medium">Ready to enhance your features?</h2>
<p bis_size='{"x":600,"y":4046,"w":576,"h":56,"abs_x":600,"abs_y":4089}' className="text-lg text-slate-600 font-geist" style={{}}>Book a consultation today to discuss your goals and create a plan tailored to your unique beauty.</p>
</div>
<div bis_size='{"x":1310,"y":4017,"w":376,"h":58,"abs_x":1310,"abs_y":4060}' className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
<button bis_size='{"x":1310,"y":4017,"w":180,"h":58,"abs_x":1310,"abs_y":4060}' className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-4 text-base font-medium text-white shadow-sm hover:bg-slate-800 transition-all min-w-[180px] font-geist" style={{}}>
                        Book Now
                    </button>
<button bis_size='{"x":1506,"y":4017,"w":180,"h":58,"abs_x":1506,"abs_y":4060}' className="inline-flex items-center justify-center rounded-lg bg-white border border-slate-200 px-8 py-4 text-base font-medium text-slate-900 shadow-sm hover:bg-slate-50 transition-all min-w-[180px] font-geist" style={{}}>
                        Contact Us
                    </button>
</div>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":4263,"w":2287,"h":282,"abs_x":0,"abs_y":4306}' className="bg-white border-t border-slate-200 pt-16 pb-8">
<div bis_size='{"x":503,"y":4328,"w":1280,"h":185,"abs_x":503,"abs_y":4371}' className="mx-auto max-w-7xl px-6 lg:px-8">
<div bis_size='{"x":535,"y":4328,"w":1216,"h":88,"abs_x":535,"abs_y":4371}' className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div bis_size='{"x":535,"y":4328,"w":280,"h":88,"abs_x":535,"abs_y":4371}' className="col-span-1 md:col-span-1">
<div bis_size='{"x":535,"y":4328,"w":280,"h":24,"abs_x":535,"abs_y":4371}' className="flex items-center gap-2 mb-4">
<div bis_size='{"x":535,"y":4328,"w":24,"h":24,"abs_x":535,"abs_y":4371}' className="flex h-6 w-6 items-center justify-center rounded-md bg-rose-500 text-white">
<svg bis_size='{"x":539,"y":4332,"w":16,"h":16,"abs_x":539,"abs_y":4375}' className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span bis_size='{"x":567,"y":4330,"w":98,"h":20,"abs_x":567,"abs_y":4373}' className="text-sm font-semibold text-slate-900 font-geist" style={{}}>Etch of Beauty</span>
</div>
<p bis_size='{"x":535,"y":4368,"w":280,"h":20,"abs_x":535,"abs_y":4411}' className="text-sm text-slate-500 font-geist" style={{}}>Sydney's premier cosmetic tattoo studio.</p>
</div>
<div bis_size='{"x":847,"y":4328,"w":280,"h":88,"abs_x":847,"abs_y":4371}'>
<h3 bis_size='{"x":847,"y":4328,"w":280,"h":20,"abs_x":847,"abs_y":4371}' className="text-sm font-semibold text-slate-900 mb-4 font-geist" style={{}}>Services</h3>
<ul bis_size='{"x":847,"y":4364,"w":280,"h":52,"abs_x":847,"abs_y":4407}' className="space-y-3 text-sm text-slate-600">
<li bis_size='{"x":847,"y":4364,"w":280,"h":20,"abs_x":847,"abs_y":4407}'><a bis_size='{"x":847,"y":4365,"w":82,"h":18,"abs_x":847,"abs_y":4408}' className="hover:text-rose-500 transition-colors font-geist" href="#" style={{}}>Microblading</a></li>
<li bis_size='{"x":847,"y":4396,"w":280,"h":20,"abs_x":847,"abs_y":4439}'><a bis_size='{"x":847,"y":4397,"w":59,"h":18,"abs_x":847,"abs_y":4440}' className="hover:text-rose-500 transition-colors font-geist" href="#" style={{}}>Lip Blush</a></li>
</ul>
</div>
<div bis_size='{"x":1159,"y":4328,"w":280,"h":88,"abs_x":1159,"abs_y":4371}'>
<h3 bis_size='{"x":1159,"y":4328,"w":280,"h":20,"abs_x":1159,"abs_y":4371}' className="text-sm font-semibold text-slate-900 mb-4 font-geist" style={{}}>Company</h3>
<ul bis_size='{"x":1159,"y":4364,"w":280,"h":52,"abs_x":1159,"abs_y":4407}' className="space-y-3 text-sm text-slate-600">
<li bis_size='{"x":1159,"y":4364,"w":280,"h":20,"abs_x":1159,"abs_y":4407}'><a bis_size='{"x":1159,"y":4365,"w":106,"h":18,"abs_x":1159,"abs_y":4408}' className="hover:text-rose-500 transition-colors font-geist" href="#" style={{}}>About Rosemary</a></li>
<li bis_size='{"x":1159,"y":4396,"w":280,"h":20,"abs_x":1159,"abs_y":4439}'><a bis_size='{"x":1159,"y":4397,"w":80,"h":18,"abs_x":1159,"abs_y":4440}' className="hover:text-rose-500 transition-colors font-geist" href="#" style={{}}>Testimonials</a></li>
</ul>
</div>
<div bis_size='{"x":1471,"y":4328,"w":280,"h":88,"abs_x":1471,"abs_y":4371}'>
<h3 bis_size='{"x":1471,"y":4328,"w":280,"h":20,"abs_x":1471,"abs_y":4371}' className="text-sm font-semibold text-slate-900 mb-4 font-geist" style={{}}>Contact</h3>
<ul bis_size='{"x":1471,"y":4364,"w":280,"h":52,"abs_x":1471,"abs_y":4407}' className="space-y-3 text-sm text-slate-600">
<li bis_size='{"x":1471,"y":4364,"w":280,"h":20,"abs_x":1471,"abs_y":4407}' className="flex items-center gap-2 font-geist" style={{}}><svg bis_size='{"x":1471,"y":4366,"w":16,"h":16,"abs_x":1471,"abs_y":4409}' className="lucide lucide-map-pin h-4 w-4 text-slate-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Sydney, NSW 2000</li>
<li bis_size='{"x":1471,"y":4396,"w":280,"h":20,"abs_x":1471,"abs_y":4439}' className="flex items-center gap-2 font-geist" style={{}}><svg bis_size='{"x":1471,"y":4398,"w":16,"h":16,"abs_x":1471,"abs_y":4441}' className="lucide lucide-mail h-4 w-4 text-slate-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> hello@etchofbeauty.com</li>
</ul>
</div>
</div>
<div bis_size='{"x":535,"y":4464,"w":1216,"h":49,"abs_x":535,"abs_y":4507}' className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p bis_size='{"x":535,"y":4497,"w":232,"h":16,"abs_x":535,"abs_y":4540}' className="text-xs text-slate-400 font-geist" style={{}}>© 2023 Etch of Beauty. All rights reserved.</p>
<div bis_size='{"x":1568,"y":4497,"w":183,"h":16,"abs_x":1568,"abs_y":4540}' className="flex gap-4">
<a bis_size='{"x":1568,"y":4497,"w":75,"h":16,"abs_x":1568,"abs_y":4540}' className="text-xs text-slate-400 hover:text-slate-600 font-geist" href="#" style={{}}>Privacy Policy</a>
<a bis_size='{"x":1660,"y":4497,"w":91,"h":16,"abs_x":1660,"abs_y":4540}' className="text-xs text-slate-400 hover:text-slate-600 font-geist" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</div>
</footer>


<div bis_size='{"x":0,"y":4545,"w":2287,"h":0,"abs_x":0,"abs_y":4588}' id="envidictionary"><div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="o-search-mobile" style={{top: '0px', left: '0px', display: 'none'}}><img alt="ENVI" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' height="27" src="data:image/png;base64,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" style={{width: '27px', height: '27px'}} width="27"/></div><div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="o-popup-tag o-bg-white o-border o-rounded o-shadow" style={{width: '400px', top: '0px', left: '0px', display: 'none'}}><div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'><button aria-label="Close" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="o-btn-close o-position-absolute o-top-0 o-end-0 o-mt-1 o-me-1" type="button"></button><ul bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="o-nav o-nav-tabs o-pop-nav" role="tablist"><span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'><svg aria-hidden="true" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="o-pop-speak o-link-secondary o-svg-inline--fa" data-icon="volume-high" focusable="false" role="img" viewbox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" fill="currentColor"></path></svg></span><li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="o-nav-item" role="presentation"><div aria-selected="true" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="o-nav-link o-active" data-bs-toggle="tab">Tra cứu</div></li></ul><div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="o-selected-result o-pt-1"><div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'> Đang tìm kiếm ... </div></div></div></div></div><div bis_size='{"x":0,"y":4545,"w":2287,"h":0,"abs_x":0,"abs_y":4588}' id="envidictionarySetting" url="https://envi.jpdictionary.com/setting/"></div><div bis_size='{"x":0,"y":4545,"w":2287,"h":0,"abs_x":0,"abs_y":4588}' id="envidictionaryOff"></div>
    </>
  );
}
