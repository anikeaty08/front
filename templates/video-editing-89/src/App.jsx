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



      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    


            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


    lucide.createIcons({
        attrs: {
            strokeWidth: 1.5
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<section className="md:h-[348px] overflow-hidden w-full h-[250px] max-w-[1920px] mr-auto ml-auto relative" style={{background: 'linear-gradient(to bottom, #0a0a0a 0%, #000000 100%)'}}>
<div className="aura-background-component absolute top-0 left-0 w-full h-full -z-10">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bKN5upvoulAmWvInmHza"></div>

</div>
<div className="flex md:px-16 z-10 pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 [--fx-filter:blur(10px)_liquid-glass(1.1,10)_saturate(1.25)_noise(0.5,1,0)] items-center justify-between">
<div className="absolute inset-0 -z-10">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bKN5upvoulAmWvInmHza"></div>

</div>
<span className="text-stone-400 text-sm md:text-base font-light tracking-widest uppercase" style={{fontVariant: 'small-caps'}}>Back</span>
<div className="flex flex-col items-center text-center">
</div>
<span className="md:text-base uppercase text-sm font-light text-stone-400 tracking-widest" style={{fontVariant: 'small-caps'}}></span>
</div>
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 100%)'}}></div>
</section>

<nav className="fixed md:px-12 flex transition-all duration-300 z-50 text-white mix-blend-difference pt-6 pr-6 pb-6 pl-6 top-0 right-0 left-0 items-center justify-between" id="interiors">
<div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase">
</div>
<button className="flex items-center gap-2 group">
<span className="text-xs uppercase tracking-widest group-hover:opacity-50 transition-opacity">Menu</span>
<div className="space-y-1">
<span className="block w-4 h-[1px] bg-white group-hover:w-6 transition-all duration-300"></span>
<span className="block w-4 h-[1px] bg-white group-hover:w-2 transition-all duration-300 ml-auto"></span>
</div>
</button>
</nav>

<div className="overflow-hidden bg-[#050505] w-full h-auto border-white/5 border-b pt-4 pb-4">
<div className="whitespace-nowrap animate-marquee flex items-center gap-16 text-stone-800 text-sm md:text-base font-display uppercase tracking-widest" style={{}}>
<span className="">Logo &amp; Branding</span>
<span className="">Case Studies</span>
<span className="">Social Media &amp; Blogs</span>
<span className="">Performance Ads</span>
<span>Print Designs</span>
<span>Presentations</span>
<span>Other Statics</span>
<span>Ideas Dump</span>
<span>Logo &amp; Branding</span>
<span>Case Studies</span>
<span>Social Media &amp; Blogs</span>
<span>Performance Ads</span>
<span>Print Designs</span>
<span>Presentations</span>
<span>Other Statics</span>
<span>Ideas Dump</span>
</div>
</div>

<section className="border-white/5 border-b relative" id="portfolio">
<div className="flex flex-col lg:flex-row">

<style>
    .portfolio-option {
        cursor: pointer;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
    }
    
    .portfolio-option:hover {
        transform: translateX(8px);
    }
    
    .portfolio-option:focus {
        outline: 2px solid #49faff;
        outline-offset: 4px;
        border-radius: 4px;
    }
    
    .portfolio-line {
        transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: width, background-color;
    }
    
    .portfolio-option:hover .portfolio-line {
        width: 3rem;
        background-color: #49faff;
    }
    
    .portfolio-text {
        transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: color;
    }
    
    .portfolio-option:hover .portfolio-text {
        color: #49faff;
    }
    
    .portfolio-container {
        isolation: isolate;
    }
</style>
<div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 md:p-12 flex flex-col bg-[#050505] z-10 border-white/5 border-r pt-6 pr-6 pb-6 pl-6 justify-center">

<span aria-label="Section: The Portfolio" className="text-xs text-orange-500 uppercase tracking-widest mb-6 block font-semibold" style={{}}>
        The Portfolio
    </span>

<h2 className="md:text-5xl leading-tight text-3xl text-white font-display mb-6" style={{}}>
    Built for<br className=""/>Generations.
</h2>

<p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-sm" style={{}}>
        Our approach to asset management combines rigorous analytical precision with an artist's appreciation for form and space. We don't just hold assets; we elevate them through architectural provenance and strategic location.
    </p>

<nav aria-label="Portfolio categories" className="flex flex-col portfolio-container gap-x-4 gap-y-4">
<a aria-label="View Logo &amp; Branding portfolio" className="flex text-xs text-stone-400 font-mono gap-x-4 items-center portfolio-option" href="#logo-branding" role="button" style={{}} tabindex="0">
<span aria-hidden="true" className="w-12 h-[1px] bg-stone-700 portfolio-line" style={{}}></span>
<span className="portfolio-text">LOGO &amp; BRANDING</span>
</a>
<a aria-label="View Case Studies portfolio" className="flex text-xs text-stone-400 font-mono gap-x-4 items-center portfolio-option" href="#case-studies" role="button" style={{}} tabindex="0">
<span aria-hidden="true" className="w-12 h-[1px] bg-stone-700 portfolio-line" style={{}}></span>
<span className="portfolio-text">CASE STUDIES</span>
</a>
<a aria-label="View Social Media &amp; Blogs portfolio" className="flex text-xs text-stone-400 font-mono gap-x-4 items-center portfolio-option" href="#social-media-blogs" role="button" style={{}} tabindex="0">
<span aria-hidden="true" className="w-12 h-[1px] bg-stone-700 portfolio-line" style={{}}></span>
<span className="portfolio-text">SOCIAL MEDIA &amp; BLOGS</span>
</a>
<a aria-label="View Performance Ads portfolio" className="flex text-xs text-stone-400 font-mono gap-x-4 items-center portfolio-option" href="#performance-ads" role="button" style={{}} tabindex="0">
<span aria-hidden="true" className="w-12 h-[1px] bg-stone-700 portfolio-line" style={{}}></span>
<span className="portfolio-text">PERFORMANCE ADS</span>
</a>
<a aria-label="View Print Designs portfolio" className="flex text-xs text-stone-400 font-mono gap-x-4 items-center portfolio-option" href="#print-designs" role="button" style={{}} tabindex="0">
<span aria-hidden="true" className="w-12 h-[1px] bg-stone-700 portfolio-line" style={{}}></span>
<span className="portfolio-text">PRINT DESIGNS</span>
</a>
<a aria-label="View Presentations portfolio" className="flex text-xs text-stone-400 font-mono gap-x-4 items-center portfolio-option" href="#presentations" role="button" style={{}} tabindex="0">
<span aria-hidden="true" className="w-12 h-[1px] bg-stone-700 portfolio-line" style={{}}></span>
<span className="portfolio-text">PRESENTATIONS</span>
</a>
<a aria-label="View Other Statics portfolio" className="flex text-xs text-stone-400 font-mono gap-x-4 items-center portfolio-option" href="#other-statics" role="button" style={{}} tabindex="0">
<span aria-hidden="true" className="w-12 h-[1px] bg-stone-700 portfolio-line" style={{}}></span>
<span className="portfolio-text">OTHER STATICS</span>
</a>
<a aria-label="View Ideas Dump portfolio" className="flex text-xs text-stone-400 font-mono gap-x-4 items-center portfolio-option" href="#ideas-dump" role="button" style={{}} tabindex="0">
<span aria-hidden="true" className="w-12 h-[1px] bg-stone-700 portfolio-line" style={{}}></span>
<span className="portfolio-text">IDEAS DUMP</span>
</a>
</nav>
</div>

<div className="lg:w-2/3 bg-[#080808]">

<div className="group min-h-screen flex md:p-16 hover:bg-[#0a0a0a] transition-colors duration-500 border-white/5 border-b pt-6 pr-6 pb-6 pl-6 relative items-center">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="md:text-5xl group-hover:text-white transition-colors text-3xl text-stone-200 font-display" style={{}}>01. LOGO &amp; BRANDING</h3>
<span className="text-xs font-mono text-stone-600" style={{}}>NYC / 2023</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" style={{}}>
<img alt="Building" className="transform group-hover:scale-100 transition-transform duration-1000 w-full h-full object-cover scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase" style={{}}>76 Units • Ultra Luxury</p>
<p className="text-stone-300 font-mono text-xs" style={{}}>$1.2B Valuation</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6" style={{}}>
<p className="text-stone-500 text-sm max-w-md" style={{}}>A vertical city designed to redefine the Manhattan skyline. Featuring biophilic terraces and autonomous vehicle integration.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all" style={{}}>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="group min-h-screen flex md:p-16 hover:bg-[#0a0a0a] transition-colors duration-500 border-white/5 border-b pt-6 pr-6 pb-6 pl-6 relative items-center">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors" style={{}}>02. Casa Bruta</h3>
<span className="text-xs font-mono text-stone-600" style={{}}>MX / 2022</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" style={{}}>
<img alt="Concrete House" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase" style={{}}>Private Estate • Brutalist</p>
<p className="text-stone-300 font-mono text-xs" style={{}}>Coastal Reserve</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6" style={{}}>
<p className="text-stone-500 text-sm max-w-md" style={{}}>Raw concrete meets lush jungle in this private retreat. An study in sustainable brutalism and integration with nature.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all" style={{}}>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="group min-h-screen flex md:p-16 hover:bg-[#0a0a0a] transition-colors duration-500 border-white/5 border-b pt-6 pr-6 pb-6 pl-6 relative items-center">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors" style={{}}>03. Aeon Tower</h3>
<span className="text-xs font-mono text-stone-600" style={{}}>JP / 2024</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" style={{}}>
<img alt="Skyscraper" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase" style={{}}>Mixed Use • Commercial</p>
<p className="text-stone-300 font-mono text-xs" style={{}}>Shinjuku District</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6" style={{}}>
<p className="text-stone-500 text-sm max-w-md" style={{}}>The heartbeat of Tokyo's new financial district. LEED Platinum certified with integrated transit hubs.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all" style={{}}>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</div><div className="group min-h-screen flex md:p-16 hover:bg-[#0a0a0a] transition-colors duration-500 border-white/5 border-b pt-6 pr-6 pb-6 pl-6 relative items-center">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors" style={{}}>03. Aeon Tower</h3>
<span className="text-xs font-mono text-stone-600" style={{}}>JP / 2024</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" style={{}}>
<img alt="Skyscraper" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase" style={{}}>Mixed Use • Commercial</p>
<p className="text-stone-300 font-mono text-xs" style={{}}>Shinjuku District</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6" style={{}}>
<p className="text-stone-500 text-sm max-w-md" style={{}}>The heartbeat of Tokyo's new financial district. LEED Platinum certified with integrated transit hubs.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all" style={{}}>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</div><div className="group min-h-screen flex md:p-16 hover:bg-[#0a0a0a] transition-colors duration-500 border-white/5 border-b pt-6 pr-6 pb-6 pl-6 relative items-center">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors" style={{}}>03. Aeon Tower</h3>
<span className="text-xs font-mono text-stone-600" style={{}}>JP / 2024</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" style={{}}>
<img alt="Skyscraper" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase" style={{}}>Mixed Use • Commercial</p>
<p className="text-stone-300 font-mono text-xs" style={{}}>Shinjuku District</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6" style={{}}>
<p className="text-stone-500 text-sm max-w-md" style={{}}>The heartbeat of Tokyo's new financial district. LEED Platinum certified with integrated transit hubs.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all" style={{}}>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</div><div className="group min-h-screen flex md:p-16 hover:bg-[#0a0a0a] transition-colors duration-500 border-white/5 border-b pt-6 pr-6 pb-6 pl-6 relative items-center">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors" style={{}}>03. Aeon Tower</h3>
<span className="text-xs font-mono text-stone-600" style={{}}>JP / 2024</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" style={{}}>
<img alt="Skyscraper" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase" style={{}}>Mixed Use • Commercial</p>
<p className="text-stone-300 font-mono text-xs" style={{}}>Shinjuku District</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6" style={{}}>
<p className="text-stone-500 text-sm max-w-md" style={{}}>The heartbeat of Tokyo's new financial district. LEED Platinum certified with integrated transit hubs.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all" style={{}}>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</div><div className="group min-h-screen flex md:p-16 hover:bg-[#0a0a0a] transition-colors duration-500 border-white/5 border-b pt-6 pr-6 pb-6 pl-6 relative items-center">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors" style={{}}>03. Aeon Tower</h3>
<span className="text-xs font-mono text-stone-600" style={{}}>JP / 2024</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" style={{}}>
<img alt="Skyscraper" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase" style={{}}>Mixed Use • Commercial</p>
<p className="text-stone-300 font-mono text-xs" style={{}}>Shinjuku District</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6" style={{}}>
<p className="text-stone-500 text-sm max-w-md" style={{}}>The heartbeat of Tokyo's new financial district. LEED Platinum certified with integrated transit hubs.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all" style={{}}>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</div><div className="group min-h-screen flex md:p-16 hover:bg-[#0a0a0a] transition-colors duration-500 border-white/5 border-b pt-6 pr-6 pb-6 pl-6 relative items-center">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors" style={{}}>03. Aeon Tower</h3>
<span className="text-xs font-mono text-stone-600" style={{}}>JP / 2024</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" style={{}}>
<img alt="Skyscraper" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase" style={{}}>Mixed Use • Commercial</p>
<p className="text-stone-300 font-mono text-xs" style={{}}>Shinjuku District</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6" style={{}}>
<p className="text-stone-500 text-sm max-w-md" style={{}}>The heartbeat of Tokyo's new financial district. LEED Platinum certified with integrated transit hubs.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all" style={{}}>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</div>


</div>
</div>
</section>




<section className="mt-20">
<div className="relative w-full max-w-4xl mr-auto ml-auto">
<div className="relative overflow-hidden bg-neutral-900 rounded-3xl">
<footer className="bg-center bg-black bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d12520d8-94ad-493f-842e-a09ef1ec609b_3840w.jpg)] bg-cover border-white/5 border-t pt-20 pb-20" id="footer">
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 mb-16 w-full">

<div className="col-span-1 md:col-span-12 flex gap-3 md:gap-5 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll pb-4 gap-x-3 gap-y-3 items-baseline">
<h1 className="md:text-9xl lg:text-[11rem] leading-[0.8] select-none text-7xl font-medium text-white tracking-tighter">
    kreona
  </h1>
<span className="text-xl md:text-3xl font-normal text-zinc-400 tracking-tight font-sans relative -top-1 md:-top-3">
              studio
            </span>
</div>

<div className="col-span-1 md:col-span-12 w-full h-px bg-white/10 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll"></div>

<div className="col-span-1 md:col-span-12 grid grid-cols-1 lg:grid-cols-12 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll mt-2 gap-x-12 gap-y-12">

<div className="col-span-1 lg:col-span-5 flex flex-col gap-10 gap-x-10 gap-y-10 items-start justify-between">
<p className="text-lg text-zinc-400 font-light font-sans leading-relaxed max-w-md">
                Let’s build something great together — whether you have a
                project in mind or just want to connect, we’d love to hear from
                you.
              </p>
<div className="flex items-center gap-4">
<button className="bg-zinc-300 hover:bg-white text-zinc-950 px-8 py-4 rounded-lg text-sm font-medium transition-colors font-sans duration-300">
                  Book a 15-min call
                </button>
<button className="w-14 h-14 rounded-full bg-zinc-300 hover:bg-white text-zinc-950 flex items-center justify-center transition-colors duration-300 group">
<svg className="lucide lucide-arrow-up-right group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 7h10v10"></path>
<path className="" d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>

<div className="col-span-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-10 lg:pl-10 w-full">



<div className="flex flex-col gap-6">
<ul className="flex flex-col gap-4">
</ul>
</div>

</div>
</div>
</div>
</div>
</footer>
</div>
</div>
</section>


    </>
  );
}
