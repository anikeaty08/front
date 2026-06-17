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



        document.addEventListener("DOMContentLoaded", () => {
            const phoneMockup = document.getElementById("phone-mockup");
            if (!phoneMockup) return;
            
            const handleScroll = () => {
                const rect = phoneMockup.parentElement.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const startReveal = windowHeight * 0.9;
                const endReveal = windowHeight * 0.4;
                
                let progress = (startReveal - rect.top) / (startReveal - endReveal);
                progress = Math.max(0, Math.min(1, progress));
                
                phoneMockup.style.transform = `translateX(${(1 - progress) * 100}px)`;
                phoneMockup.style.opacity = progress;
            };
            
            window.addEventListener("scroll", () => requestAnimationFrame(handleScroll));
            window.addEventListener("resize", () => requestAnimationFrame(handleScroll));
            handleScroll();
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
      

<nav className="absolute z-50 transition-all duration-300 w-full pt-6 pb-12 top-0 bg-gradient-to-b from-slate-900/60 to-transparent">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white">
<div className="flex flex-col tracking-tight leading-none">
<span className="text-xl font-medium tracking-tight">Oasis</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-normal text-slate-100">
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center space-x-6">
<a className="text-slate-100 hover:text-white transition-colors hidden sm:block" href="#">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</a>
<a className="bg-white hover:bg-slate-50 text-slate-900 text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-300 shadow-sm" href="#">
                    Client Login
                </a>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-900">
<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-80 mix-blend-overlay" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/2620043/2620043-hd_1920_1080_24fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900/80"></div>
</div>
<div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6 mt-16">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-tight">
                Pool care that feels easy.
            </h1>
<p className="text-lg md:text-xl font-normal text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
                No chasing down service companies. No wondering if it was done right. Just clear water, reliable equipment, and one less thing on your mind.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-white hover:bg-slate-100 text-slate-900 text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-300 w-full sm:w-auto text-center shadow-lg" href="#">
                    Get Started
                </a>
<a className="bg-slate-900/30 backdrop-blur-md border border-white/20 hover:bg-slate-900/50 text-white text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-300 w-full sm:w-auto text-center" href="#">
                    View Plans
                </a>
</div>
</div>
</header>

<section className="w-full py-24 md:py-32 bg-slate-900 flex items-center justify-center px-6 text-center text-white relative z-10">
<h2 className="max-w-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-3xl tracking-tight font-medium text-slate-400">
            No chasing down service companies.<br className="hidden sm:block"/> No wondering if it was done right. Just <span className="bg-clip-text text-transparent tracking-tight bg-gradient-to-r from-cyan-300 to-white text-white">clear water</span> <img alt="Sparkling pool water" className="inline-block align-middle h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 object-cover border rounded-full mx-1 sm:mx-2 border-white/10 shadow-inner" src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>, <span className="bg-clip-text text-transparent tracking-tight bg-gradient-to-r from-white to-cyan-300 text-white">working equipment</span>, and one less thing on your mind.
        </h2>
</section>

<section className="overflow-hidden bg-slate-900 lg:py-32 bg-[url('https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/72c90007-7638-4902-8dda-5a6c20e92741_3840w.jpg')] bg-cover bg-center pt-24 pb-24 relative" id="philosophy">

<div className="pointer-events-none z-0 absolute inset-0">
<div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
<div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

<div className="max-w-3xl">
<div className="inline-flex text-xs ring-1 ring-white/10 font-medium text-white/70 bg-white/5 rounded-full px-3 py-1.5 gap-2 items-center">
                    Our Philosophy
                </div>
<h2 className="mt-6 sm:text-5xl md:text-6xl text-4xl font-medium tracking-tight text-white">
                    A Different Way to Take Care of a Pool
                </h2>
<p className="md:mt-6 mt-4 md:text-lg text-base text-white/70 leading-relaxed max-w-2xl font-normal">
                    We believe pool service should feel steady and predictable. You shouldn’t have to wonder who’s coming to your home. You shouldn’t have to double check the work. And you shouldn’t have to call twice to get a clear answer.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">

<div className="md:p-8 p-6 overflow-hidden bg-slate-900/50 ring-white/10 ring-1 rounded-3xl backdrop-blur-md flex flex-col justify-center min-h-[240px] transition duration-300 hover:bg-slate-800/50">
<iconify-icon className="text-3xl text-slate-300 mb-6" icon="solar:calendar-mark-linear"></iconify-icon>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-white">
                        We show up when we say we will.
                    </h3>
</div>

<div className="relative rounded-3xl overflow-hidden ring-1 ring-white/15 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md flex flex-col justify-end p-6 md:p-8 min-h-[240px]">
<div className="absolute inset-0">
<img alt="Clear pool water" className="opacity-30 w-full h-full object-cover" src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent absolute inset-0"></div>
</div>
<div className="relative z-10">
<iconify-icon className="text-3xl text-white mb-6" icon="solar:refresh-circle-linear"></iconify-icon>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-white">
                            We follow the same service routine every week.
                        </h3>
</div>
</div>

<div className="md:p-8 p-6 overflow-hidden bg-slate-900/50 ring-white/10 ring-1 rounded-3xl backdrop-blur-md flex flex-col justify-center min-h-[240px] transition duration-300 hover:bg-slate-800/50">
<iconify-icon className="text-3xl text-slate-300 mb-6" icon="solar:chat-round-check-linear"></iconify-icon>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-white">
                        And if something needs attention, we explain it clearly and handle it properly.
                    </h3>
</div>
</div>

<div className="mt-6 w-full rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
<div className="bg-white/10 ring-1 ring-white/20 p-3 rounded-2xl shrink-0">
<iconify-icon className="text-2xl text-white block" icon="solar:shield-check-linear"></iconify-icon>
</div>
<p className="text-lg text-white/90 font-normal">
                    It’s simple, consistent care from people who take responsibility for the result.
                </p>
</div>
</div>
</section>


    </>
  );
}
