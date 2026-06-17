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



(function(){const once=true;if(!window.__inViewIO){window.__inViewIO=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('animate');if(once)window.__inViewIO.unobserve(entry.target);}});},{threshold:0.2,rootMargin:'0px 0px -10% 0px'});}window.initInViewAnimations=function(selector='.animate-on-scroll'){document.querySelectorAll(selector).forEach((el)=>{window.__inViewIO.observe(el);});};document.addEventListener('DOMContentLoaded',()=>initInViewAnimations());})();



      lucide.createIcons();

      // Testimonial carousel
      (function() {
          const rail = document.getElementById('testimonial-rail');
          const prevButton = document.getElementById('testimonial-prev');
          const nextButton = document.getElementById('testimonial-next');

          if (rail && prevButton && nextButton) {
              const scrollDistance = 540;

              prevButton.addEventListener('click', function(e) {
                  e.preventDefault();
                  rail.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
              });

              nextButton.addEventListener('click', function(e) {
                  e.preventDefault();
                  rail.scrollBy({ left: scrollDistance, behavior: 'smooth' });
              });

              function updateButtonStates() {
                  const scrollLeft = rail.scrollLeft;
                  const maxScroll = rail.scrollWidth - rail.clientWidth;

                  if (scrollLeft <= 10) {
                      prevButton.style.opacity = '0.5';
                      prevButton.style.pointerEvents = 'none';
                  } else {
                      prevButton.style.opacity = '1';
                      prevButton.style.pointerEvents = 'auto';
                  }

                  if (scrollLeft >= maxScroll - 10) {
                      nextButton.style.opacity = '0.5';
                      nextButton.style.pointerEvents = 'none';
                  } else {
                      nextButton.style.opacity = '1';
                      nextButton.style.pointerEvents = 'auto';
                  }
              }

              updateButtonStates();
              rail.addEventListener('scroll', updateButtonStates);
              window.addEventListener('resize', updateButtonStates);
          }
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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center mix-blend-soft-light opacity-50" data-alpha-mask="80" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8a73c34-737c-4f43-bbd4-ce204f94152c_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<header className="relative border-b border-amber-900/20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-5">

<a className="flex items-center gap-3" href="#">
<span className="bg-center text-3xl italic text-white tracking-tight font-script w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a68dc15f-fb85-48af-b6c2-5c189e6f4c23_1600w.png)] bg-cover"></span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300 font-sans">
<a className="hover:text-amber-400 transition-colors" href="#">
              Our Story
            </a>
<a className="hover:text-amber-400 transition-colors" href="#">
              Coffee Selection
            </a>
<a className="hover:text-amber-400 transition-colors" href="#">
              Brewing Guides
            </a>
<a className="hover:text-amber-400 transition-colors" href="#">
              Visit Us
            </a>
</nav>

<div className="flex items-center gap-3">
<button className="group relative w-auto cursor-pointer select-none text-base leading-7 flex transition-all duration-200 ease-out focus:outline-none hover:brightness-95 active:brightness-90 font-semibold text-[#1a1614] bg-amber-400 border-0 pt-2.5 pr-6 pb-2.5 pl-6 rotate-[-1deg] items-center justify-center rounded font-sans">
<span className="relative z-10">Subscribe</span>
<span aria-hidden="true" className="pointer-events-none absolute border border-[#1a1614] bottom-1 left-1 w-[calc(100%-1px)] h-[calc(100%-1px)] transition-all duration-200 ease-out group-hover:bottom-0.5 group-hover:left-0.5 rounded"></span>
</button>
</div>
</div>
</div>
</header>

<section className="overflow-hidden relative">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-amber-800/10 blur-3xl"></div>
<div className="absolute -right-32 top-48 h-80 w-80 rounded-full bg-orange-700/10 blur-3xl"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pb-28">
<div className="relative grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-12 items-center [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">

<div className="lg:col-span-7 lg:my-20 my-16">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-700/30 bg-amber-900/20 px-3 py-1.5 text-xs text-amber-200/90 font-sans">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
              Single-origin beans sourced directly from farms
            </div>
<h1 className="sm:text-6xl lg:text-7xl leading-[1.05] text-5xl font-medium tracking-tight">
              Craft Coffee
              <span className="block font-medium italic text-amber-400 font-script mt-2">
                Roasted with Purpose
              </span>
</h1>
<p className="mt-6 max-w-xl text-base sm:text-lg text-neutral-300/90 font-sans">
              From bean to cup, we honor the journey. Each batch is small,
              thoughtful, and roasted to unlock the unique character of every
              origin.
            </p>
<div className="mt-8 flex items-center gap-4">
<a className="group relative w-auto cursor-pointer select-none text-base leading-7 flex transition-all duration-200 ease-out focus:outline-none hover:brightness-95 active:brightness-90 font-semibold text-[#1a1614] bg-amber-400 border-0 pt-3 pr-8 pb-3 pl-8 rotate-[-1.5deg] items-center justify-center rounded font-sans" href="#">
<span className="relative z-10 flex items-center gap-2">
                  Explore Our Beans
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<span aria-hidden="true" className="pointer-events-none absolute border border-[#1a1614] bottom-1 left-1 w-[calc(100%-1px)] h-[calc(100%-1px)] transition-all duration-200 ease-out group-hover:bottom-0.5 group-hover:left-0.5 rounded"></span>
</a>
<button className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-amber-400 transition font-sans">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10 8 16 12 10 16 10 8"></polygon>
</svg>
                Watch Our Process
              </button>
</div>

<div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
<div className="flex items-center gap-3">
<svg className="h-5 w-5 text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<div className="">
<p className="text-3xl tracking-tight font-medium font-sans">
                    4.9
                  </p>
<span className="text-xs text-neutral-400 font-sans">
                    from 2,400+ reviews
                  </span>
</div>
</div>
<div className="hidden sm:block h-8 w-px bg-amber-900/30"></div>
<div className="flex items-center gap-2">
<svg className="h-5 w-5 text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
</svg>
<p className="text-sm text-neutral-300 font-sans">
                  2024 Best Craft Roastery
                </p>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="relative ml-8">
<img alt="Forest-inspired coffee bag under studio spotlight" className="z-10 w-full max-w-md object-cover rounded-xl relative shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4de7807-d550-431a-b3c2-07885c82aef4_1600w.jpg"/>
</div>
<p className="absolute right-0 top-12 hidden lg:block max-w-[11rem] text-right text-sm text-neutral-300/90 font-sans">
              Every bean tells a story. Let us share ours with you.
            </p>
</div>
</div>

<div className="mt-16 rounded-2xl border border-amber-900/30 bg-amber-950/20 backdrop-blur-sm [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex flex-col md:flex-row gap-6 px-6 py-5 items-center justify-between">
<div className="flex items-center gap-4">
<img alt="Customer" className="w-11 h-11 object-cover ring-amber-700/30 ring-2 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<p className="text-sm text-neutral-300 font-sans">
                "The depth of flavor is incredible. You can taste the care in
                every cup." —
                <span className="font-medium text-white">Elena Martinez</span>
</p>
</div>
<div className="hidden md:block h-px w-full bg-amber-900/30 md:h-8 md:w-px"></div>
<div className="flex items-center gap-6 text-sm text-neutral-300 font-sans">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span>Trusted by 12,000+ coffee lovers</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full max-w-7xl mt-12 mr-auto mb-24 ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="relative">
<div className="text-center [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<h2 className="text-5xl sm:text-6xl lg:text-7xl leading-none text-white/95 tracking-tight uppercase font-sans font-medium">
            HANDCRAFTED
          </h2>
<h2 className="text-5xl sm:text-6xl lg:text-7xl leading-none text-white/95 tracking-tight uppercase mt-1 font-sans font-medium">
            PERFECTION
          </h2>
<div className="flex gap-2 text-amber-400/40 mt-6 items-center">
<span className="text-base font-sans">+</span>
<div className="h-px flex-1 bg-amber-900/30"></div>
<span className="text-base font-sans">+</span>
</div>
<p className="mt-6 text-xl sm:text-2xl text-neutral-300/90 tracking-tight max-w-3xl mx-auto font-sans font-medium">
            Small-batch roasting that honors tradition while embracing
            innovation. Each blend crafted to perfection.
          </p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="rounded-2xl overflow-hidden border border-amber-900/30 bg-amber-950/20 hover-lift">
<img alt="Steaming Latte in Kraft Paper Cup" className="w-full h-72 sm:h-80 lg:h-[360px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfb3b1af-e254-413c-9eee-298cb5f9a877_800w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden border border-amber-900/30 bg-amber-950/20 hover-lift">
<img alt="Paper cup latte with heart latte art" className="w-full h-72 sm:h-80 lg:h-[360px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e91ebfd7-5404-48d3-a52f-3b1820ecc451_800w.webp"/>
</div>
<div className="rounded-2xl overflow-hidden border border-amber-900/30 bg-amber-950/20 hover-lift">
<img alt="Minimal smartphone flat lay with coffee" className="w-full h-72 sm:h-80 lg:h-[360px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9135951f-bf3a-47d0-b8e0-04b5cecefaac_800w.webp"/>
</div>
<div className="rounded-2xl overflow-hidden border border-amber-900/30 bg-amber-950/20 hover-lift">
<img alt="Sleek black coffee bags with floating beans" className="w-full h-72 sm:h-80 lg:h-[360px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b480f873-fdea-4b10-95db-08a8ebc3d830_800w.webp"/>
</div>
</div>
</div>
</div>

<section className="z-10 sm:p-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-[#2a1f1d] w-full max-w-7xl border-amber-900/30 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">
<div className="flex gap-6 sm:px-0 pr-1 pl-1 items-center">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-white font-sans tracking-tighter">
          Testimonials.
        </h2>
<span aria-hidden="true" aria-orientation="vertical" className="w-px bg-amber-900/30 h-10" role="separator"></span>
<p className="sm:text-base text-sm text-neutral-400 mt-1 font-sans tracking-tight">
          Real stories from our coffee community. Taste the difference quality
          makes.
        </p>
</div>
<div className="h-px bg-amber-900/30 mt-4"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 sm:mt-8 mt-6 items-center">
<div className="lg:col-span-12 relative">
<div className="relative overflow-hidden h-[420px] rounded-3xl mt-6">
<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#2a1f1d] to-transparent z-10"></div>
<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#2a1f1d] to-transparent z-10"></div>
<div className="flex gap-6 overflow-x-auto scroll-smooth pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center" id="testimonial-rail" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-[#1a1614] border border-amber-900/40 rounded-[24px] p-8 text-neutral-100 hover-lift backdrop-blur-sm snap-center -rotate-1 shadow-2xl">
<p className="text-lg sm:text-xl md:text-2xl text-neutral-100 font-sans tracking-tight">
                  "This is the best coffee I've ever had. The Ethiopian blend
                  has notes I never knew existed. Worth every penny."
                </p>
<div className="mt-8 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-sm font-sans tracking-tight">
                      Sarah Chen
                    </div>
<div className="text-xs text-neutral-400 font-sans tracking-tight">
                      Coffee Enthusiast, Seattle
                    </div>
</div>
</div>
</article>
<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-[#1a1614] border border-amber-900/40 rounded-[24px] p-8 text-neutral-100 hover-lift backdrop-blur-sm snap-center rotate-1 shadow-2xl">
<p className="text-lg sm:text-xl md:text-2xl text-neutral-100 font-sans tracking-tight">
                  "As a café owner, I've tried dozens of roasters. Roasted Roots
                  is now our exclusive supplier. Our customers notice the
                  difference."
                </p>
<div className="mt-8 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-sm font-sans tracking-tight">
                      Marcus Rodriguez
                    </div>
<div className="text-xs text-neutral-400 font-sans tracking-tight">
                      Café Owner, Portland
                    </div>
</div>
</div>
</article>
<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-[#1a1614] border border-amber-900/40 rounded-[24px] p-8 text-neutral-100 hover-lift backdrop-blur-sm snap-center -rotate-2 shadow-2xl">
<p className="text-lg sm:text-xl md:text-2xl text-neutral-100 font-sans tracking-tight">
                  "The subscription service is brilliant. Fresh roasted beans
                  delivered every two weeks. My mornings have never been
                  better."
                </p>
<div className="mt-8 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-sm font-sans tracking-tight">
                      Emma Thompson
                    </div>
<div className="text-xs text-neutral-400 font-sans tracking-tight">
                      Designer, San Francisco
                    </div>
</div>
</div>
</article>
<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-[#1a1614] border border-amber-900/40 rounded-[24px] p-8 text-neutral-100 hover-lift backdrop-blur-sm snap-center rotate-2 shadow-2xl">
<p className="text-lg sm:text-xl md:text-2xl text-neutral-100 font-sans tracking-tight">
                  "Finally found a roastery that cares about sustainability and
                  flavor equally. The transparency is refreshing."
                </p>
<div className="mt-8 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-sm font-sans tracking-tight">
                      Alex Morgan
                    </div>
<div className="text-xs text-neutral-400 font-sans tracking-tight">
                      Environmental Consultant
                    </div>
</div>
</div>
</article>
<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-[#1a1614] border border-amber-900/40 rounded-[24px] p-8 text-neutral-100 hover-lift backdrop-blur-sm snap-center -rotate-1 shadow-2xl">
<p className="text-lg sm:text-xl md:text-2xl text-neutral-100 font-sans tracking-tight">
                  "The cold brew blend changed my life. Smooth, complex, and
                  perfect for summer mornings. Can't recommend enough."
                </p>
<div className="mt-8 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-sm font-sans tracking-tight">
                      Priya Patel
                    </div>
<div className="text-xs text-neutral-400 font-sans tracking-tight">
                      Software Engineer, Austin
                    </div>
</div>
</div>
</article>
</div>
<div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
<button aria-label="Previous" className="hover:bg-amber-900/40 transition-colors inline-flex text-neutral-100 bg-amber-950/40 w-10 h-10 border-amber-900/40 border rounded-full items-center justify-center" id="testimonial-prev" style={{opacity: '0.5', pointerEvents: 'none'}}>
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<button aria-label="Next" className="w-10 h-10 rounded-full text-[#1a1614] bg-amber-400 hover:bg-amber-300 transition-colors inline-flex items-center justify-center" id="testimonial-next" style={{opacity: '1', pointerEvents: 'auto'}}>
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mt-24 mr-auto mb-24 ml-auto pr-6 pl-6">
<div className="relative overflow-hidden rounded-3xl col-span-1 md:col-span-3 lg:col-span-6 flex flex-col bg-[#0f0d0c] border-amber-900/40 border [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="sm:p-8 md:p-9 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<p className="text-sm text-amber-400/80 font-sans">
              Our Roasting Process
            </p>
<div className="flex items-center gap-1.5">
<span className="size-2 rounded-full bg-amber-500"></span>
<span className="size-2 rounded-full bg-amber-700/60"></span>
<span className="size-2 rounded-full bg-amber-700/40"></span>
<span className="size-2 rounded-full bg-amber-700/20"></span>
</div>
</div>
<h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl tracking-tight font-medium text-neutral-100 font-sans">
            Stage 1 — Bean Selection
          </h2>
<p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl font-sans">
            We source beans directly from sustainable farms, ensuring fair trade
            practices and exceptional quality. Each origin is carefully vetted
            for flavor profile and ethical standards.
          </p>
<div className="mt-8">
<div className="flex items-baseline gap-2">
<span className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-100 font-sans">
                12
              </span>
<span className="text-xs uppercase text-neutral-400 font-sans">
                origins
              </span>
</div>
<p className="text-xs sm:text-sm text-neutral-400 mt-1 font-sans">
              Worldwide farm partnerships
            </p>
</div>
</div>
<div className="sm:px-8 md:px-9 sm:pb-8 md:pb-9 border-amber-900/30 border-t mt-auto pr-6 pb-6 pl-6 pt-6">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<button className="inline-flex items-center justify-center size-9 rounded-xl bg-amber-950/40 border border-amber-900/40 hover:border-amber-700/60 transition">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<button className="inline-flex items-center justify-center size-9 rounded-xl bg-amber-950/40 border border-amber-900/40 hover:border-amber-700/60 transition">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-400 font-sans">
<span>1/4</span>
</div>
</div>
</div>
</div>
</section>

<div className="xl:mt-20 xl:mb-20 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-[#2a1f1d] max-w-7xl border-amber-900/30 border rounded-3xl mt-20 mr-auto mb-20 ml-auto pt-8 pr-8 pb-8 pl-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="overflow-hidden bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70fcd867-fd43-4c84-9ad4-393392e5c36e_800w.jpg)] bg-cover rounded-2xl ring-amber-900/30 ring-1 relative">
<div className="sm:h-[520px] sm:p-8 flex flex-col pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex items-center gap-3">
<div>
<p className="text-sm text-amber-300 font-sans">Our Promise</p>
<p className="text-xs sm:text-sm mt-1 text-neutral-400 font-sans">
                  Ethical &amp; Sustainable
                </p>
</div>
</div>
<div className="mt-auto">
<div className="sm:text-4xl text-2xl text-white tracking-tight mb-4 font-sans font-medium">
                Coffee with
                <span className="inline text-amber-400 ml-2 font-sans font-medium">
                  Conscience
                </span>
</div>
<div className="flex items-center gap-2 text-neutral-200 mb-6">
<div className="flex items-center gap-1">
<div className="h-2 w-2 rounded-full bg-amber-500"></div>
<div className="h-2 w-2 rounded-full bg-amber-600"></div>
<div className="h-2 w-2 rounded-full bg-amber-700"></div>
</div>
<p className="text-sm font-sans">Direct trade partnerships</p>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                Learn our story
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="sm:p-8 overflow-hidden border-amber-900/40 border bg-amber-950/20 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="relative">
<p className="text-sm text-amber-400/80 font-sans">Proven Quality:</p>
<h3 className="mt-2 text-2xl sm:text-3xl tracking-tight text-neutral-100 font-sans font-medium">
<span className="text-amber-400 font-sans font-medium">98%</span>
              customer retention,
              <span className="text-amber-500 font-sans font-medium">5-star</span>
              average rating
            </h3>
<p className="mt-8 text-sm text-amber-400/80 font-sans">
              Our Philosophy:
            </p>
<div className="mt-4 space-y-3">
<div className="flex items-center gap-3 text-sm text-neutral-200 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                Small Batch Roasting
              </div>
<div className="flex items-center gap-3 text-sm text-neutral-200 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span>
                Single-Origin Focus
              </div>
<div className="flex items-center gap-3 text-sm text-neutral-200 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-amber-700"></span>
                Farm-Direct Sourcing
              </div>
</div>
<div className="mt-8 rounded-xl border p-5 border-amber-900/40 bg-[#1a1614]/60">
<div className="flex items-center gap-1 text-amber-400 mb-3">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="text-sm text-neutral-300 mt-3 font-sans">
                "Roasted Roots elevated our coffee program. The quality and
                consistency are unmatched in the industry."
              </p>
<div className="mt-4 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<div className="text-sm">
<p className="text-neutral-200 font-sans">James Wilson</p>
<p className="text-xs text-neutral-500 font-sans">
                    Head Barista, Brew Collective
                  </p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-rows-2 gap-6">
<div className="sm:p-8 border-amber-900/40 border bg-amber-950/20 rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center sm:block">
<div className="relative h-28 w-28 sm:mx-auto">
<div className="absolute inset-0 rounded-full bg-amber-500"></div>
<div className="absolute inset-[10px] rounded-full bg-[#1a1614]/80 flex items-center justify-center">
<svg className="text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
</div>
<div className="ml-5 sm:ml-0 sm:mt-6 text-center">
<h4 className="text-lg font-medium tracking-tight text-white font-sans">
                  Quality Promise
                </h4>
<p className="mt-2 text-sm text-neutral-400 font-sans">
                  Fresh roasted to order. If you're not satisfied, we'll make it
                  right.
                </p>
</div>
</div>
</div>
<div className="sm:p-8 border-amber-900/40 border bg-amber-950/20 rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="">
<div className="text-2xl tracking-tight text-white font-sans font-medium">
                  8+
                </div>
<p className="text-xs mt-1 text-neutral-400 font-sans">
                  Years roasting
                </p>
</div>
<div className="">
<div className="text-2xl tracking-tight text-white font-sans font-medium">
                  48h
                </div>
<p className="text-xs mt-1 text-neutral-400 font-sans">
                  Roast to ship
                </p>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm font-sans">
<span className="text-neutral-300 font-sans">Bean Quality</span>
<span className="text-amber-500 font-sans">Premium</span>
</div>
<div className="flex items-center justify-between text-sm font-sans">
<span className="text-neutral-300 font-sans">Roast Profile</span>
<span className="text-amber-500 font-sans">Custom</span>
</div>
<div className="flex items-center justify-between text-sm font-sans">
<span className="text-neutral-300 font-sans">Sustainability</span>
<span className="text-amber-500 font-sans">Certified</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-amber-900/30">
<div className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
<svg className="text-green-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Fair Trade Certified
              </div>
</div>
</div>
</div>
</div>
</div>

<div className="sm:px-8 lg:px-10 lg:pt-20 lg:pb-20 max-w-7xl mr-auto mb-24 ml-auto pt-10 pr-6 pb-10 pl-6">
<div className="flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-16 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 ring-1 ring-amber-500/20 text-amber-300 text-sm font-medium mb-8 font-sans">
<div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse"></div>
<span className="text-xs font-medium font-sans">Subscriptions</span>
</div>
<h2 className="text-4xl md:text-5xl text-white mb-6 font-sans font-medium tracking-tighter">
          Fresh Coffee
          <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent font-sans font-medium tracking-tighter">
            Delivered
          </span>
</h2>
<p className="leading-relaxed text-lg text-white/70 max-w-2xl mr-auto ml-auto">
          Choose a plan that fits your coffee ritual. Cancel or adjust anytime.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll gap-x-8 gap-y-8">

<article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#2a1f1d]/90 via-[#2a1f1d]/95 to-[#1a1614]/90 border border-amber-900/30 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/40">
<div className="relative p-8">
<div className="flex items-center justify-between mb-6">
<div className="inline-flex items-center gap-2 text-white/60">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10 text-white/80 text-xs font-medium font-sans">
                  01
                </span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-amber-400/40"></span>
<span className="h-1.5 w-1.5 rounded-full bg-amber-400/20"></span>
</div>
</div>
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-white/[0.06] ring-1 ring-white/10 text-white/70 text-xs font-sans">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
                Bi-weekly
              </div>
</div>
<div className="mb-8">
<h3 className="text-2xl text-white mb-2 font-sans font-medium tracking-tight">
                Explorer
              </h3>
<p className="text-white/60 text-sm mb-4 font-sans">
                Perfect for discovering new coffee origins and flavor profiles.
              </p>
<div className="flex items-baseline gap-2">
<span className="text-3xl text-white font-sans font-medium tracking-tight">
                  $24
                </span>
<span className="text-white/50 text-sm font-sans">/shipment</span>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-medium transition-all duration-200 ring-1 ring-white/10 hover:ring-white/20 mb-8 font-sans">
              Start Exploring
              <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
<div className="space-y-4">
<p className="text-xs text-white/50 font-medium tracking-widest uppercase mb-4 font-sans">
                What's included
              </p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/20 ring-1 ring-amber-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-amber-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-white/80 font-sans">
                    12oz bag of single-origin coffee
                  </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/20 ring-1 ring-amber-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-amber-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-white/80 font-sans">
                    Roasted within 48 hours of shipping
                  </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/20 ring-1 ring-amber-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-amber-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-white/80 font-sans">
                    Tasting notes &amp; brewing guide
                  </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/20 ring-1 ring-amber-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-amber-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-white/80 font-sans">
                    Free shipping
                  </span>
</li>
</ul>
</div>
</div>
</article>

<article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#2a1f1d]/90 via-[#2a1f1d]/95 to-[#1a1614]/90 border border-amber-500/30 shadow-2xl shadow-amber-500/10 backdrop-blur-xl ring-1 ring-amber-500/20 transform scale-105">
<div className="absolute -inset-2 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 rounded-3xl blur-xl animate-pulse"></div>
<div className="relative pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center justify-between mb-6">
<div className="inline-flex items-center gap-2 text-white/60">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 ring-1 ring-amber-500/30 text-amber-300 text-xs font-medium font-sans">
                  02
                </span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
<span className="h-1.5 w-1.5 rounded-full bg-amber-400/60"></span>
</div>
</div>
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-amber-500/20 ring-1 ring-amber-500/30 text-amber-300 text-xs font-sans">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
                Weekly
              </div>
</div>
<div className="mb-8">
<h3 className="text-2xl text-white mb-2 font-sans font-medium tracking-tight">
                Enthusiast
              </h3>
<p className="text-white/60 text-sm mb-4 font-sans">
                For serious coffee lovers who want variety and premium
                selections.
              </p>
<div className="flex items-baseline gap-2">
<span className="text-3xl text-white font-sans font-medium tracking-tight">
                  $38
                </span>
<span className="text-white/50 text-sm font-sans">/shipment</span>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-[#1a1614] font-semibold transition-all duration-200 shadow-lg shadow-amber-500/25 ring-1 ring-amber-500/30 mb-8 font-sans">
              Go Enthusiast
              <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</button>
<div className="space-y-4">
<p className="text-xs text-amber-300 font-medium tracking-widest uppercase mb-4 font-sans">
                Everything in Explorer, plus
              </p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/20 ring-1 ring-amber-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-amber-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-white/80 font-sans">
                    Two 12oz bags per shipment
                  </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/20 ring-1 ring-amber-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-amber-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-white/80 font-sans">
                    Early access to limited releases
                  </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/20 ring-1 ring-amber-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-amber-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-white/80 font-sans">
                    Priority customer support
                  </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-amber-500/20 ring-1 ring-amber-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-amber-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-white/80 font-sans">
                    15% discount on extras
                  </span>
</li>
</ul>
</div>
</div>
</article>

<article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#2a1f1d]/90 via-[#2a1f1d]/95 to-[#1a1614]/90 border border-amber-900/30 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-500/40">
<div className="relative p-8">
<div className="flex items-center justify-between mb-6">
<div className="inline-flex items-center gap-2 text-white/60">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10 text-white/80 text-xs font-medium font-sans">
                  03
                </span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
<span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
<span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
</div>
</div>
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-white/[0.06] ring-1 ring-white/10 text-white/70 text-xs font-sans">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
                Custom
              </div>
</div>
<div className="mb-8">
<h3 className="text-2xl text-white mb-2 font-sans font-medium tracking-tight">
                Connoisseur
              </h3>
<p className="text-white/60 text-sm mb-4 font-sans">
                Curated selections and exclusive micro-lots for the discerning
                palate.
              </p>
<div className="flex items-baseline gap-2">
<span className="text-3xl text-white font-sans font-medium tracking-tight">
                  Custom
                </span>
<span className="text-white/50 text-sm font-sans">pricing</span>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-medium transition-all duration-200 ring-1 ring-white/10 hover:ring-white/20 mb-8 font-sans">
              Contact Us
              <svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
<path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path>
</svg>
</button>
<div className="space-y-4">
<p className="text-xs text-white/50 font-medium tracking-widest uppercase mb-4 font-sans">
                Everything in Enthusiast, plus
              </p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-orange-500/20 ring-1 ring-orange-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-orange-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-white/80 font-sans">
                    Exclusive micro-lot selections
                  </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-orange-500/20 ring-1 ring-orange-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-orange-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-white/80 font-sans">
                    Custom roast profiles available
                  </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-orange-500/20 ring-1 ring-orange-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-orange-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-white/80 font-sans">
                    Virtual cupping sessions
                  </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-orange-500/20 ring-1 ring-orange-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-orange-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-white/80 font-sans">
                    Dedicated coffee consultant
                  </span>
</li>
</ul>
</div>
</div>
</article>
</div>
<div className="flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll text-center mt-16 items-center">
<p className="text-white/50 text-sm font-sans">
          Questions about subscriptions?
          <a className="text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors font-sans" href="#">
            We're here to help
          </a>
</p>
</div>
</div>

<footer className="sm:px-8 max-w-full mr-auto ml-auto pt-16 pr-6 pb-12 pl-6 border-t border-amber-900/20 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="relative">
<div className="text-sm text-amber-400/60 font-sans">(Connect)</div>
<div className="text-center">
<h2 className="sm:text-6xl lg:text-7xl leading-none uppercase text-5xl font-medium text-white/95 tracking-tight">
            JOIN OUR
          </h2>
<h2 className="text-5xl sm:text-6xl lg:text-7xl leading-none text-white/95 tracking-tight uppercase mt-1 font-sans font-medium">
            COFFEE CLUB
          </h2>
<div className="mt-6 flex items-center gap-2 text-amber-400/40">
<span className="text-base font-sans">+</span>
<div className="h-px flex-1 bg-amber-900/30"></div>
<span className="text-base font-sans">+</span>
</div>
<p className="sm:text-2xl text-xl font-medium text-neutral-300/90 tracking-tight max-w-3xl mt-6 mr-auto ml-auto">
            Handcrafted coffee roasted with care. Expert guidance, premium
            beans, and worldwide shipping.
          </p>
</div>
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="rounded-2xl overflow-hidden border border-amber-900/30 bg-amber-950/20 p-6">
<div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 ring-1 ring-amber-500/20 px-3 py-2 text-sm text-amber-500 mb-4 font-sans">
<span className="h-2 w-2 rounded-full bg-amber-500"></span>
              Newsletter
            </div>
<h4 className="text-xl text-white tracking-tight mb-4 font-sans">
              Stay fresh
            </h4>
<form className="space-y-3">
<input className="w-full h-10 px-4 rounded-xl border text-sm placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/20 backdrop-blur border-amber-900/30 bg-[#1a1614]/60 text-white" placeholder="you@domain.com" required="" type="email"/>
<button className="w-full inline-flex items-center gap-2 h-10 px-4 rounded-xl ring-1 text-sm transition ring-amber-900/30 text-white bg-amber-950/40 hover:bg-amber-900/40 justify-center font-sans">
                Subscribe
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
</button>
</form>
</div>
<div className="rounded-2xl overflow-hidden border border-amber-900/30 bg-amber-950/20 p-6">
<h5 className="text-sm uppercase tracking-wider font-medium mb-4 text-white/80 font-sans">
              Coffee
            </h5>
<ul className="space-y-3 text-base text-white/70">
<li className="">
<a className="transition hover:text-white font-sans" href="#single-origin">
                  Single Origin
                </a>
</li>
<li className="">
<a className="transition hover:text-white font-sans" href="#blends">
                  Signature Blends
                </a>
</li>
<li className="">
<a className="transition hover:text-white font-sans" href="#decaf">
                  Decaf
                </a>
</li>
<li className="">
<a className="transition hover:text-white font-sans" href="#cold-brew">
                  Cold Brew
                </a>
</li>
</ul>
</div>
<div className="rounded-2xl overflow-hidden border border-amber-900/30 bg-amber-950/20 p-6">
<h5 className="text-sm uppercase tracking-wider font-medium mb-4 text-white/80 font-sans">
              Learn
            </h5>
<ul className="space-y-3 text-base text-white/70">
<li>
<a className="transition hover:text-white font-sans" href="#brewing">
                  Brewing Guides
                </a>
</li>
<li>
<a className="transition hover:text-white font-sans" href="#origins">
                  Coffee Origins
                </a>
</li>
<li>
<a className="transition hover:text-white font-sans" href="#roasting">
                  Roasting Process
                </a>
</li>
<li>
<a className="transition hover:text-white font-sans" href="#faq">
                  FAQ
                </a>
</li>
</ul>
</div>
<div className="rounded-2xl overflow-hidden border border-amber-900/30 bg-amber-950/20 p-6">
<h5 className="text-sm uppercase tracking-wider font-medium mb-4 text-white/80 font-sans">
              Company
            </h5>
<ul className="space-y-3 text-base text-white/70">
<li>
<a className="transition hover:text-white font-sans" href="#about">
                  Our Story
                </a>
</li>
<li>
<a className="transition hover:text-white font-sans" href="#sustainability">
                  Sustainability
                </a>
</li>
<li>
<a className="transition hover:text-white font-sans" href="#wholesale">
                  Wholesale
                </a>
</li>
<li>
<a className="transition hover:text-white font-sans" href="#contact">
                  Contact
                </a>
</li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-amber-900/30 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-6">
<span className="bg-center text-3xl italic text-white tracking-tight font-script w-[60px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a68dc15f-fb85-48af-b6c2-5c189e6f4c23_1600w.png)] bg-cover"></span>
<div className="flex items-center gap-4 text-base text-white/60">
<span className="font-sans">© 2025</span>
<span className="hidden sm:inline text-amber-900/30 font-sans">
                |
              </span>
<a className="transition hover:text-white font-sans" href="#privacy">
                Privacy
              </a>
<span className="text-amber-900/30 font-sans">/</span>
<a className="transition hover:text-white font-sans" href="#terms">
                Terms
              </a>
</div>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<a aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition bg-amber-950/40 text-white/70 hover:text-white hover:bg-amber-900/40" href="https://instagram.com" rel="noreferrer" target="_blank">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition bg-amber-950/40 text-white/70 hover:text-white hover:bg-amber-900/40" href="https://facebook.com" rel="noreferrer" target="_blank">
<svg className="" fill="currentColor" height="20" viewbox="0 0 24 24" width="20">
<path className="" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
</svg>
</a>
<a aria-label="Twitter/X" className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition bg-amber-950/40 text-white/70 hover:text-white hover:bg-amber-900/40" href="https://twitter.com" rel="noreferrer" target="_blank">
<svg className="" fill="currentColor" height="20" viewbox="0 0 16 16" width="20">
<path className="" d="M12.6 1.7h2.1l-4.6 5.2 5.4 7.4h-4.2L8.9 9.8l-3.9 4.5H2.9l4.9-5.6L2.6 1.7h4.3l3 4.1 2.7-3.1z"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
