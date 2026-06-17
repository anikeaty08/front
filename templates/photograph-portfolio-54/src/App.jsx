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



// Smooth scroll animation + basic parallax (kept from original, simplified to avoid custom config)
document.addEventListener('DOMContentLoaded', function () {
const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -50px 0px',
};
const observer = new IntersectionObserver(function (entries) {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add('opacity-100', 'translate-y-0');
}
});
}, observerOptions);
document.querySelectorAll('[data-animate="fade-up"]').forEach((el) => {
el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
observer.observe(el);
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
anchor.addEventListener('click', function (e) {
const href = this.getAttribute('href');
if (href && href.length > 1) {
e.preventDefault();
const target = document.querySelector(href);
if (target) {
target.scrollIntoView({
behavior: 'smooth',
block: 'start',
});
}
}
});
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
      
<div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

<header className="pt-6 sm:pt-8 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up" style={{}}>
<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-6">
<div className="flex sm:justify-start items-center justify-between">
<button className="sm:text-base text-sm font-semibold tracking-tight" onclick="window.location.href='#top'" style={{letterSpacing: '-0.04em'}} type="button">
              SAKURA
            </button>
</div>
<div className="col-start-3 flex flex-col items-end text-right &lt;span class=" font-semibold="" style={{letterSpacing: '-0.04em'}} text-xs="" tracking-tight"="">
              Based ian Canada
            
            <span className="text-[13px] text-black/70">
              Professional Photographer · 5 Years Experience
            </span>
</div>
</div>
<div className="border-black/15 border-t mt-5"></div>
</header>

<section className="relative" id="top">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 sm:py-12 pt-8 pb-8 items-start">

<div className="lg:col-span-7 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<h1 className="leading-[1.05] font-semibold tracking-tight text-[2.125rem] sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[3.75rem] 2xl:text-[4rem]" style={{letterSpacing: '-0.04em'}}>
<span className="block">Timeless frames.</span>
<span className="block">Honest stories.</span>
<span className="block">Photography that feels.</span>
</h1>
<p className="mt-5 text-base sm:text-lg text-black/70 max-w-xl">
              I’m Sakura, a portrait and lifestyle photographer turning everyday moments into
              cinematic images. Five years behind the lens, always chasing natural light and real
              emotion.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mt-8">
<button className="text-sm sm:text-base font-semibold" onclick="document.querySelector('#work')?.scrollIntoView({behavior:'smooth'})" onmousedown="this.style.transform='translateY(6px)'; this.style.boxShadow='0 0 1px rgba(0,0,0,1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 0 1px rgba(0,0,0,1)'" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 7px 1px rgb(0,0,0)'" onmouseup="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 7px 1px rgb(0,0,0)'" style={{border: '1px solid black', padding: '0.75rem 1.875rem', borderRadius: '999px', backgroundColor: 'rgb(250, 112, 250)', boxShadow: '0 0 1px rgba(0, 0, 0, 1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(0)', letterSpacing: '-0.02em'}} type="button">
                View Portfolio
              </button>
<button className="text-sm sm:text-base font-semibold" onclick="document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})" onmousedown="this.style.transform='translateY(6px)'; this.style.boxShadow='0 0 1px rgba(0,0,0,0.8)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 0 1px rgba(0,0,0,0.8)'" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 7px 1px rgb(102,102,102)'" onmouseup="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 7px 1px rgb(102,102,102)'" style={{border: '1px solid rgb(102, 102, 102)', padding: '0.75rem 1.875rem', borderRadius: '999px', backgroundColor: 'rgb(248, 248, 248)', boxShadow: '0 0 1px rgba(0, 0, 0, 0.8)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(0)', color: 'rgb(68,68,68)', letterSpacing: '-0.02em'}} type="button">
                Book a Session
              </button>
</div>
</div>

<div className="lg:col-span-5 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="relative rounded-2xl overflow-hidden ring-1 shadow-2xl ring-black/10 bg-black/5">

<img alt="Outdoor portrait session at golden hour" className="w-full h-[17.5rem] sm:h-[21.25rem] lg:h-[22.5rem] object-cover" src="https://images.unsplash.com/photo-1516031190212-da133013de50?w=1600&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="-mt-1 relative mb-8 sm:mb-12 lg:mb-16 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="relative">
<div className="sm:h-12 h-10 flex items-center justify-between rounded-sm bg-black text-white px-4 sm:px-6 w-full">
<div className="w-full grid grid-cols-3 text-[13px] sm:text-sm font-medium">
<button className="flex items-center justify-center cursor-pointer" onclick="document.querySelector('#work')?.scrollIntoView({behavior:'smooth'})" type="button">
                  Portfolio
                </button>
<button className="flex items-center justify-center border-x border-white/20 cursor-pointer" onclick="document.querySelector('#about')?.scrollIntoView({behavior:'smooth'})" type="button">
                  About
                </button>
<button className="flex items-center justify-center cursor-pointer" onclick="document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})" type="button">
                  Contact
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:py-12 lg:py-16 pt-10 pb-10 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="absolute right-1 sm:right-2 -top-3 sm:-top-1">
<span className="text-4xl sm:text-6xl font-semibold tracking-tight" style={{letterSpacing: '-0.04em'}}>
            PHOTOGRAPHER
          </span>
</div>
<div className="overflow-hidden">
<h2 className="leading-[0.9] select-none font-semibold tracking-tight" style={{fontSize: 'clamp(4.25rem,17vw,16.25rem)', letterSpacing: '-0.08em'}}>
            SAKURA
          </h2>
</div>
</section>

<section className="pt-16 pb-16" id="about">
<div className="mb-12 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="mb-6">
<div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
<span>ABOUT</span>
<span>(01)</span>
</div>
<div className="mt-2 h-px w-full bg-black"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
<div className="lg:col-span-7 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<h3 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] leading-[1.05] font-semibold tracking-tight uppercase" style={{letterSpacing: '-0.05em'}}>
                Honest stories.
              </h3>
</div>
<div className="lg:col-span-5 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<p className="text-base sm:text-lg text-black/60 max-w-2xl mb-6">
                From intimate portraits to small weddings and creative editorials, I document real
                people in real light. No stiff posing, just gentle direction so you can relax and be
                yourself.
              </p>
<div className="flex justify-start">
<a className="inline-flex items-center gap-3 ring-1 ring-black/10 hover:shadow-2xl transition bg-black/5 rounded-full py-2 pr-2 pl-2 shadow" href="#contact">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">

<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7h4l2-3h6l2 3h4v12H3z"></path>
<circle cx="12" cy="13" r="4"></circle>
</svg>
</span>
<span className="px-3 text-sm font-medium">Book a shoot</span>
</a>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
<div className="lg:col-span-4 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="w-full h-[22.5rem] rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gray-50 mb-6">

<img alt="Photographer holding camera in natural light" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=900&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="lg:col-span-8 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="space-y-6 text-lg leading-relaxed text-black/70">
<p>
                I started with a borrowed camera and afternoon walks, chasing the way light wraps
                around faces and city streets. Five years later, I still shoot with the same
                curiosity—just with better gear and a clearer eye.
              </p>
<p>
                My work focuses on portraits, couples, and small brand stories. I gravitate toward
                soft, natural light and muted tones, with a cinematic but honest feel. Every frame
                is crafted to look beautiful now and still feel like you, years from today.
              </p>
<p>
                When I'm not on set, you’ll find me scouting locations, editing with a good coffee,
                or printing personal work for my studio wall.
              </p>
</div>
<div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
<div className="opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{letterSpacing: '-0.04em'}}>
                  120+
                </div>
<div className="text-sm mt-1 text-black/70">Sessions photographed</div>
</div>
<div className="opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{letterSpacing: '-0.04em'}}>
                  5
                </div>
<div className="text-sm mt-1 text-black/70">Years experience</div>
</div>
<div className="opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{letterSpacing: '-0.04em'}}>
                  95%
                </div>
<div className="text-sm mt-1 text-black/70">Clients who re‑book</div>
</div>
<div className="opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{letterSpacing: '-0.04em'}}>
                  8
                </div>
<div className="text-sm mt-1 text-black/70">Countries shot in</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-16 pb-16" id="work">
<div className="mb-12 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="mb-6">
<div className="flex items-center justify-between text-[13px] sm:text-sm uppercase font-medium text-black tracking-tight">
<span>PORTFOLIO</span>
<span>(02)</span>
</div>
<div className="mt-2 h-px w-full bg-black"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
<div className="lg:col-span-7 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<h3 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] leading-[0.9] uppercase font-semibold tracking-tight" style={{letterSpacing: '-0.05em'}}>
                Featured stories.
              </h3>
</div>
<div className="lg:col-span-5 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<p className="sm:text-lg text-black/60 max-w-3xl mb-6">
                A selection of sessions from the last seasons—portraits, weddings, and brand work
                that highlight my style: soft light, clean compositions, and emotion first.
              </p>
<div className="flex justify-start">
<a className="inline-flex items-center gap-3 ring-1 ring-black/10 hover:shadow-2xl transition bg-black/5 rounded-full py-2 pr-2 pl-2 shadow" href="#contact">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">

<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 21H4a2 2 0 0 1-2-2V8"></path>
<path d="M22 11V4a2 2 0 0 0-2-2H9"></path>
<rect height="13" rx="2" width="13" x="9" y="8"></rect>
<path d="m9 15 4-4 3 3 2-2 4 4"></path>
</svg>
</span>
<span className="px-3 text-sm font-medium">Request full gallery</span>
</a>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

<article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="w-full bg-gray-50">
<img alt="Natural light studio portrait of a woman" className="w-full h-[13.75rem] sm:h-[15rem] object-cover" src="https://images.unsplash.com/photo-1519741497674-611481863552?w=900&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col h-full">
<span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">
                Portraits
              </span>
<h4 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3" style={{letterSpacing: '-0.03em'}}>
                Studio Portrait Series
              </h4>
<p className="text-black/70 mb-6 text-sm sm:text-base">
                Intimate portraits in soft window light, focused on honest expressions and clean
                lines.
              </p>
<div className="flex flex-wrap gap-2 mb-6 text-xs">
<span className="px-2 py-1 rounded bg-black/5">Studio</span>
<span className="px-2 py-1 rounded bg-black/5">Natural Light</span>
<span className="px-2 py-1 rounded bg-black/5">Retouching</span>
</div>
<a className="mt-auto inline-flex items-center gap-2 text-sm font-medium" href="#contact">
                View sample gallery
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</article>

<article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="w-full bg-gray-50">
<img alt="Couple walking at sunset on a hill" className="w-full h-[13.75rem] sm:h-[15rem] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6 flex flex-col h-full">
<span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">
                Couples &amp; Weddings
              </span>
<h4 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3" style={{letterSpacing: '-0.03em'}}>
                Golden Hour Elopement
              </h4>
<p className="text-black/70 mb-6 text-sm sm:text-base">
                A small mountaintop ceremony captured with minimal gear, maximum emotion.
              </p>
<div className="flex flex-wrap gap-2 mb-6 text-xs">
<span className="px-2 py-1 rounded bg-black/5">Elopement</span>
<span className="px-2 py-1 rounded bg-black/5">Storytelling</span>
<span className="px-2 py-1 rounded bg-black/5">Candid</span>
</div>
<a className="mt-auto inline-flex items-center gap-2 text-sm font-medium" href="#contact">
                View sample gallery
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</article>

<article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="w-full bg-gray-50">
<img alt="Lifestyle brand photo with woman looking out of window" className="w-full h-[13.75rem] sm:h-[15rem] object-cover" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=900&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col h-full">
<span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">
                Brand &amp; Lifestyle
              </span>
<h4 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3" style={{letterSpacing: '-0.03em'}}>
                Slow Living Editorial
              </h4>
<p className="text-black/70 mb-6 text-sm sm:text-base">
                A lifestyle series for an independent brand, blending product and portrait in one
                calm visual story.
              </p>
<div className="flex flex-wrap gap-2 mb-6 text-xs">
<span className="px-2 py-1 rounded bg-black/5">Branding</span>
<span className="px-2 py-1 rounded bg-black/5">Editorial</span>
<span className="px-2 py-1 rounded bg-black/5">Location</span>
</div>
<a className="mt-auto inline-flex items-center gap-2 text-sm font-medium" href="#contact">
                View sample gallery
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</article>
</div>
</section>

<section className="pt-16 pb-16">
<div className="mb-12 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="mb-6">
<div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
<span>APPROACH</span>
<span>(03)</span>
</div>
<div className="mt-2 h-px w-full bg-black"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
<div className="lg:col-span-7 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<h3 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] leading-[0.9] uppercase font-semibold tracking-tight" style={{letterSpacing: '-0.05em'}}>
                Calm, guided, effortless.
              </h3>
</div>
<div className="lg:col-span-5 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<p className="sm:text-lg text-black/60 max-w-3xl mb-6">
                I keep sessions relaxed and collaborative. You don’t need to know how to pose—I’ll
                guide you with simple prompts and focus on the in‑between moments where you forget
                the camera is there.
              </p>
<div className="flex justify-start">
<a className="inline-flex items-center gap-3 ring-1 ring-black/10 hover:shadow-2xl transition bg-black/5 rounded-full py-2 pr-2 pl-2 shadow" href="#contact">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">

<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4"></path>
<path d="M8 2v4"></path>
<path d="M3 10h18"></path>
</svg>
</span>
<span className="px-3 text-sm font-medium">Check availability</span>
</a>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="flex flex-col gap-6 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">

<article className="relative overflow-hidden rounded-2xl ring-1 ring-black/10 bg-gray-50">
<img alt="Photographer working with model in studio" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=900&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg,rgba(0,0,0,0.15) 0%,rgba(0,0,0,0.6) 75%)'}}></div>
<div className="relative p-6 sm:p-8 h-[20rem] sm:h-[26.25rem] flex flex-col justify-between">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white" style={{letterSpacing: '-0.04em'}}>
                  Gentle direction, real emotion.
                </h3>
<div className="flex items-center justify-between">
<span className="text-white/80 text-sm">My shooting philosophy</span>
<button className="inline-flex items-center gap-2 rounded-full bg-white/90 text-black text-sm font-semibold px-5 py-2 backdrop-blur transition" onclick="document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})" style={{boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)', letterSpacing: '-0.02em'}} type="button">
                    Let’s shoot
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>
</article>

<article className="flex-grow bg-white ring-black/10 ring-1 rounded-2xl p-6">
<h4 className="text-lg font-semibold tracking-tight mb-4" style={{letterSpacing: '-0.03em'}}>
                What you can expect
              </h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-pink-400/20" style={{background: 'linear-gradient(135deg,rgba(250,112,250,0.1),rgba(250,112,250,0.05))'}}>

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(250,112,250)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 15s1.5 2 4 2 4-2 4-2"></path>
<path d="M9 9h.01"></path>
<path d="M15 9h.01"></path>
</svg>
</span>
<span className="font-medium">Relaxed, friendly sessions</span>
</li>
<li className="flex items-start gap-3 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-pink-400/20" style={{background: 'linear-gradient(135deg,rgba(250,112,250,0.1),rgba(250,112,250,0.05))'}}>

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(250,112,250)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 4V2"></path>
<path d="M15 16v-2"></path>
<path d="M8 9h2"></path>
<path d="M20 9h2"></path>
<path d="m17 8 1.4-1.4"></path>
<path d="M6.6 17.4 8 16"></path>
<path d="M8 4 6.6 2.6"></path>
<path d="M17 10l1.4 1.4"></path>
<path d="m2 22 8-8"></path>
</svg>
</span>
<span className="font-medium">Careful retouching, natural look</span>
</li>
<li className="flex items-start gap-3 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-pink-400/20" style={{background: 'linear-gradient(135deg,rgba(250,112,250,0.1),rgba(250,112,250,0.05))'}}>

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(250,112,250)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l2.5 2.5"></path>
</svg>
</span>
<span className="font-medium">Clear timelines &amp; fast delivery</span>
</li>
<li className="flex items-start gap-3 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-pink-400/20" style={{background: 'linear-gradient(135deg,rgba(250,112,250,0.1),rgba(250,112,250,0.05))'}}>

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(250,112,250)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h5l2 2h9v12H4z"></path>
<path d="M13.5 13.5a1.9 1.9 0 0 1 2.7 0L17 14.3l.8-.8a1.9 1.9 0 0 1 2.7 2.7L17 20l-3.5-3.8a1.9 1.9 0 0 1 0-2.7Z"></path>
</svg>
</span>
<span className="font-medium">Thoughtful online galleries</span>
</li>
</ul>
</article>
</div>

<article className="relative ring-1 ring-black/10 overflow-hidden flex flex-col lg:min-h-[37.5rem] bg-white h-full bg-cover rounded-2xl bg-center opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<img alt="Couple laughing during outdoor photo session" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0" style={{background: 'radial-gradient(circle at 80% 100%,rgba(250,112,250,0.3),rgba(0,0,0,0.8))'}}></div>
<div className="flex items-center justify-between p-6 sm:p-8 relative z-10">
<div className="flex -space-x-2">
<img alt="Happy client 1" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<img alt="Happy client 2" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<img alt="Happy client 3" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<img alt="Happy client 4" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="text-sm text-white/80 inline-flex items-center gap-1">
                5.0/5
                <svg className="w-4 h-4" fill="currentColor" style={{color: 'rgb(250,112,250)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
</div>
<div className="relative z-10 flex flex-col justify-between flex-grow px-6 pb-6 sm:px-8 sm:pb-8">
<div className="mb-6">
<p className="text-sm sm:text-base text-white/90 max-w-md">
                  “Sakura made us feel completely at ease in front of the camera. The photos feel
                  like us—nothing forced, just beautiful memories we’ll keep forever.”
                </p>
</div>
<div className="mt-auto">
<div className="flex items-center gap-3 mb-4">
<img alt="Client testimonial portrait" className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-sm font-semibold text-white">Lena &amp; Mark</div>
<div className="text-xs text-white/80">Couple Session — Vancouver</div>
</div>
</div>
<div className="text-sm text-white/80 font-medium">
                  Trusted by couples, creatives &amp; small brands across Canada
                </div>
</div>
</div>
</article>

<div className="flex flex-col gap-6 lg:min-h-[37.5rem] h-full opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<article className="flex-1 relative overflow-hidden bg-white ring-black/10 ring-1 rounded-2xl">
<img alt="Photographer reviewing images on camera" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1516031190212-da133013de50?w=900&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"></div>
<div className="relative flex flex-col h-full justify-end p-6">
<h4 className="text-xl font-semibold text-white tracking-tight mb-2" style={{letterSpacing: '-0.03em'}}>
                  Clear process
                </h4>
<p className="text-sm text-white/80 max-w-xs">
                  From inquiry to final gallery, you’ll know what happens when—no guesswork.
                </p>
</div>
</article>
<article className="flex-1 relative overflow-hidden bg-white ring-black/10 ring-1 rounded-2xl">
<img alt="Camera and lenses on a table" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"></div>
<div className="relative flex flex-col h-full justify-end p-6">
<h4 className="text-xl font-semibold tracking-tight mb-2 text-white" style={{letterSpacing: '-0.03em'}}>
                  Professional gear
                </h4>
<p className="text-sm text-white/80 max-w-xs">
                  Dual cameras, backup cards, and calibrated editing for consistent, sharp results.
                </p>
</div>
</article>
<article className="flex-1 relative overflow-hidden bg-white ring-black/10 ring-1 rounded-2xl">
<img alt="People checking photos on a laptop" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"></div>
<div className="relative flex flex-col h-full justify-end p-6">
<h4 className="text-xl font-semibold tracking-tight mb-2 text-white" style={{letterSpacing: '-0.03em'}}>
                  Long‑term value
                </h4>
<p className="text-sm text-white/80 max-w-xs">
                  High‑resolution files, web‑ready versions, and print‑ready color for years to
                  come.
                </p>
</div>
</article>
</div>
</div>
</section>

<section className="pt-16 pb-16">
<div className="mb-12 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="mb-6">
<div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
<span>PROOF</span>
<span>(04)</span>
</div>
<div className="mt-2 h-px w-full bg-black"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
<div className="lg:col-span-7 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<h3 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] leading-[0.9] uppercase font-semibold tracking-tight" style={{letterSpacing: '-0.05em'}}>
                What clients say.
              </h3>
</div>
<div className="lg:col-span-5 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<p className="sm:text-lg text-black/60 max-w-3xl mb-6">
                Real words from people I’ve photographed—couples, creatives, and small brands who
                care about thoughtful imagery.
              </p>
<div className="flex justify-start">
<a className="inline-flex items-center gap-3 ring-1 ring-black/10 hover:shadow-2xl transition bg-black/5 rounded-full py-2 pr-2 pl-2 shadow" href="#contact">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">

<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
</svg>
</span>
<span className="px-3 text-sm font-medium">Ask for references</span>
</a>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/10 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">

<div className="relative overflow-hidden text-white bg-black p-6">
<div className="flex gap-2 mb-4 items-center">

<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h4v10H5V9a2 2 0 0 1 2-2Z"></path>
<path d="M17 7h4v10h-6V9a2 2 0 0 1 2-2Z"></path>
</svg>
</div>
<div className="flex items-center gap-1 mb-4 text-white">
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
</div>
<p className="text-base leading-relaxed mb-6">
              Sakura captured our wedding day exactly how we remember it—soft, emotional, and full
              of tiny details we would have missed. We cried seeing the gallery.
            </p>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">Anna &amp; James</div>
<div className="text-xs mt-1 text-white/70">Intimate Wedding — Whistler</div>
</div>
<img alt="Anna" className="w-8 h-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
</div>
</div>

<div className="relative overflow-hidden text-black bg-white p-6">
<div className="flex items-center gap-3 mb-4">
<img alt="Brand client portrait" className="w-6 h-6 object-cover rounded-full" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-sm font-medium">Studio Kumo</div>
<div className="text-xs text-black/70">Creative Director</div>
</div>
</div>
<div className="flex gap-1 text-black mb-4 items-center">
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
</div>
<p className="leading-relaxed text-base relative z-10">
              We hired Sakura for a brand editorial and ended up reusing her images across our
              entire website. She instantly understood our visual language.
            </p>
</div>

<div className="relative overflow-hidden text-white bg-black p-6">
<div className="flex items-center gap-2 mb-4">

<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h4v10H5V9a2 2 0 0 1 2-2Z"></path>
<path d="M17 7h4v10h-6V9a2 2 0 0 1 2-2Z"></path>
</svg>
</div>
<div className="flex items-center gap-1 mb-4 text-white">
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
</div>
<p className="text-base leading-relaxed mb-6">
              As two people who hate being photographed, we were surprised by how much fun we had.
              The photos look effortless and so “us”.
            </p>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">Noah &amp; Elise</div>
<div className="text-xs mt-1 text-white/70">Couple Session — Toronto</div>
</div>
<img alt="Elise" className="w-8 h-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
</div>
</div>

<div className="lg:col-span-3 border-t border-black/10">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
<div className="text-white bg-black border-black/10 border-r p-6 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2" style={{letterSpacing: '-0.04em'}}>
                  120+
                </div>
<div className="text-xs text-white/70">
                  Completed sessions across portraits, couples &amp; brands
                </div>
</div>
<div className="p-6 bg-black text-white border-black/10 border-r opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2" style={{letterSpacing: '-0.04em'}}>
                  5 yrs
                </div>
<div className="text-xs text-white/70">
                  Professional experience behind the lens
                </div>
</div>
<div className="p-6 bg-black text-white opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2" style={{letterSpacing: '-0.04em'}}>
                  95%
                </div>
<div className="text-xs text-white/70">
                  Clients who recommend the experience to friends
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-16 pb-16">
<div className="mb-12 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="mb-6">
<div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
<span>FOCUS</span>
<span>(05)</span>
</div>
<div className="mt-2 h-px w-full bg-black"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
<div className="lg:col-span-7 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<h3 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5rem] leading-[0.9] font-semibold tracking-tight uppercase" style={{letterSpacing: '-0.05em'}}>
                Portraits. Couples. Brands.
              </h3>
</div>
<div className="lg:col-span-5 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<p className="sm:text-lg text-black/60 max-w-3xl mb-6">
                My work lives between portraiture and lifestyle—crafted for print, social, and
                brands that care about a calm, timeless aesthetic.
              </p>
<div className="flex justify-start">
<a className="inline-flex items-center gap-3 ring-1 ring-black/10 hover:shadow-2xl transition bg-black/5 rounded-full py-2 pr-2 pl-2 shadow" href="#contact">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">

<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 21H4a2 2 0 0 1-2-2V8"></path>
<path d="M22 11V4a2 2 0 0 0-2-2H9"></path>
<rect height="13" rx="2" width="13" x="9" y="8"></rect>
<path d="m9 15 4-4 3 3 2-2 4 4"></path>
</svg>
</span>
<span className="px-3 text-sm font-medium">Download pricing guide</span>
</a>
</div>
</div>
</div>
</div>

<div className="mt-12 sm:mt-16">
<div className="flex gap-5 sm:gap-8 overflow-visible px-2 sm:px-0 pb-6 items-end justify-center">
<article className="relative rounded-3xl opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up" style={{transform: 'rotate(-4deg) translateY(1rem)', boxShadow: '0 20px 50px rgba(0,0,0,0.18)'}}>
<img alt="Couple hugging outdoors in warm light" className="w-[15rem] h-[26.25rem] sm:w-[18.75rem] sm:h-[30rem] lg:w-[21.25rem] lg:h-[32.5rem] object-cover rounded-3xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</article>
<article className="relative rounded-3xl opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up" style={{transform: 'rotate(-2.5deg) translateY(0.625rem)', boxShadow: '0 18px 44px rgba(0,0,0,0.16)'}}>
<img alt="Studio portrait in dramatic light" className="w-[15rem] h-[26.25rem] sm:w-[18.75rem] sm:h-[30rem] lg:w-[21.25rem] lg:h-[32.5rem] object-cover rounded-[1.75rem]" src="https://images.unsplash.com/photo-1519741497674-611481863552?w=900&amp;q=80&amp;auto=format&amp;fit=crop"/>
</article>
<article className="relative rounded-3xl opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up" style={{transform: 'rotate(0deg) translateY(0) scale(1.01)', boxShadow: '0 22px 56px rgba(0,0,0,0.2)'}}>
<img alt="Black and white portrait close-up" className="w-[15rem] h-[26.25rem] sm:w-[18.75rem] sm:h-[30rem] lg:w-[21.25rem] lg:h-[32.5rem] object-cover rounded-[1.75rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</article>
<article className="relative rounded-3xl opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up" style={{transform: 'rotate(2.5deg) translateY(0.625rem)', boxShadow: '0 18px 44px rgba(0,0,0,0.16)'}}>
<img alt="Lifestyle product and portrait combination" className="w-[15rem] h-[26.25rem] sm:w-[18.75rem] sm:h-[30rem] lg:w-[21.25rem] lg:h-[32.5rem] object-cover rounded-[1.75rem]" src="https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?w=900&amp;q=80&amp;auto=format&amp;fit=crop"/>
</article>
<article className="relative rounded-3xl opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up" style={{transform: 'rotate(5deg) translateY(1rem)', boxShadow: '0 20px 50px rgba(0,0,0,0.18)'}}>
<img alt="Soft portrait of woman in warm light" className="w-[15rem] h-[26.25rem] sm:w-[18.75rem] sm:h-[30rem] lg:w-[21.25rem] lg:h-[32.5rem] object-cover rounded-[1.75rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</article>
</div>
</div>
</section>

<section className="sm:py-16 border-t border-black/10 pt-12 pb-0 opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
<div className="lg:col-span-6">
<h3 className="uppercase leading-[1.05] tracking-tight font-semibold text-[1.75rem] sm:text-[2.25rem] lg:text-[3rem]" style={{letterSpacing: '-0.05em'}}>
              Ready to create something together?
            </h3>
<p className="mt-4 text-base sm:text-lg text-black/70 max-w-md">
              Share a bit about your project, dates, and location. I’ll reply within 24 hours with
              availability and a detailed pricing guide.
            </p>
<div className="mt-6">
<button className="text-sm sm:text-base font-semibold" onclick="window.location.href='mailto:hello@example.com?subject=Photography%20Inquiry'" onmousedown="this.style.transform='translateY(6px)'; this.style.boxShadow='0 0 1px rgba(0,0,0,1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 0 1px rgba(0,0,0,1)'" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 7px 1px rgb(0,0,0)'" onmouseup="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 7px 1px rgb(0,0,0)'" style={{border: '1px solid black', padding: '0.75rem 1.875rem', borderRadius: '999px', backgroundColor: 'rgb(250, 112, 250)', boxShadow: '0 0 1px rgba(0, 0, 0, 1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(0)', letterSpacing: '-0.02em'}} type="button">
                Contact Now
              </button>
</div>
</div>
<div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="text-sm font-semibold tracking-tight mb-3" style={{letterSpacing: '-0.03em'}}>
                Sessions
              </div>
<ul className="space-y-2 text-black/70 text-sm">
<li><span>Portraits</span></li>
<li><span>Couples &amp; Weddings</span></li>
<li><span>Brand &amp; Lifestyle</span></li>
</ul>
</div>
<div className="opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="text-sm font-semibold tracking-tight mb-3" style={{letterSpacing: '-0.03em'}}>
                Info
              </div>
<ul className="space-y-2 text-black/70 text-sm">
<li><span>Pricing Guide</span></li>
<li><span>FAQ</span></li>
<li><span>Prints</span></li>
</ul>
</div>
<div className="opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="text-sm font-semibold tracking-tight mb-3" style={{letterSpacing: '-0.03em'}}>
                Studio
              </div>
<ul className="space-y-2 text-black/70 text-sm">
<li><span>About</span></li>
<li><span>Selected Work</span></li>
<li><span>Client Stories</span></li>
</ul>
</div>
<div className="opacity-0 translate-y-4 transition-all duration-700" data-animate="fade-up">
<div className="text-sm font-semibold tracking-tight mb-3" style={{letterSpacing: '-0.03em'}}>
                Socials
              </div>
<ul className="space-y-2 text-black/70 text-sm">
<li><a className="hover:text-black" href="#">Instagram</a></li>
<li><a className="hover:text-black" href="#">Pinterest</a></li>
<li><a className="hover:text-black" href="#">Behance</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-black/10 mt-10 pt-6">
<p className="text-center text-black/70 text-sm">
            © 2025 Sakura Photography. All rights reserved.
          </p>
</div>
</section>
</div>

    </>
  );
}
