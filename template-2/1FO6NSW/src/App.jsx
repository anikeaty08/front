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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

        // Parallax effect for images
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            const images = document.querySelectorAll('#aura-emfh8zxfk img');
            images.forEach((img, index) => {
                const parallaxAmount = scrollY * 0.1 * (1 - index * 0.2);
                img.style.setProperty('--scroll-y', `${parallaxAmount}px`);
            });
        });
    
}

{

    (function () {
      var rail = document.getElementById('logo-ticker-rail');
      if (!rail) return;
      var track = rail.querySelector('[data-ticker-track]');
      if (!track) return;

      var speed = 60; // px/sec
      var x = 0;
      var width = track.getBoundingClientRect().width;

      function onResize() {
        width = track.getBoundingClientRect().width;
      }
      window.addEventListener('resize', onResize, { passive: true });

      var last = performance.now();
      function step(now) {
        var dt = (now - last) / 1000;
        last = now;
        x -= speed * dt;
        if (-x >= width) x += width;
        rail.style.transform = 'translateX(' + x + 'px)';
        try {
          window.requestAnimationFrame(step);
        } catch (e) {
          setTimeout(function(){ step(performance.now ? performance.now() : Date.now()); }, 120);
        }
      }
      try {
        window.requestAnimationFrame(step);
      } catch (e) {
        setTimeout(function(){ step(performance.now ? performance.now() : Date.now()); }, 120);
      }
    })();
  
}

{

        // Parallax effect for CTA section background
        window.addEventListener('scroll', () => {
            const ctaSection = document.getElementById('aura-emfh9dzcb');
            if (!ctaSection) return;
            
            const rect = ctaSection.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Only apply parallax when section is in view
            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                ctaSection.style.backgroundPositionY = `${rate}px`;
            }
        });
    
}

{

        // Intersection Observer for view triggers
        const observerOptions = {
            root: null,
            rootMargin: '-10% 0px -10% 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('view-active');
                }
            });
        }, observerOptions);

        // Observe all view triggers
        document.querySelectorAll('.view-trigger').forEach((trigger) => {
            observer.observe(trigger);
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        document.querySelector('button[class*="lg:hidden"]')?.addEventListener('click', function () {
            // toggle mobile menu placeholder
        });
}
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
      <div className="aura-background-component top-0 w-full h-screen -z-10 absolute"><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/animatedshapeblend-1gCFHvLukjcmK6imbIAFLY2d/" width="100%"></iframe></div></div>

<header className="fixed top-0 left-0 right-0 z-50 animate-[fadeIn_0.8s_ease-out_0.2s_forwards] bg-white/100 opacity-0 border-gray-200/50 border-b backdrop-blur-none">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex lg:h-20 h-16 items-center justify-between">
<div className="flex items-center">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[200px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/07ee863a-59fe-4785-a806-5592f2439df2_800w.jpg)] bg-cover rounded invert" href="#"></a>
</div>
<nav className="hidden lg:flex items-center space-x-1">
<a className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200" href="#work">Work</a>
<a className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200" href="#services">Services</a>
<a className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200" href="#about">About</a>
<a className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200" href="#contact">Contact</a>
</nav>
<div className="flex items-center space-x-3">
<a className="hidden sm:inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-200" href="#contact">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg>
<span className="">Book consultation</span>
</a>
<button className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative lg:pt-28 lg:pb-24 overflow-hidden view-trigger view-active pt-20 pb-16" data-view-class="view-active">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h1 className="sm:text-5xl lg:text-7xl xl:text-8xl leading-tight animate-[slideUp_1s_ease-out_0.4s_forwards] transform text-4xl font-bold tracking-tight opacity-0 translate-y-8">
                    Custom spaces
                    <br />
<span className="bg-clip-text italic text-transparent font-playfair bg-zinc-950">for modern living</span>
</h1>
<p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed opacity-0 animate-[slideUp_1s_ease-out_0.6s_forwards] transform translate-y-8">
                    We create bespoke interior designs and architectural solutions for homes, offices, yachts, and commercial spaces that define tomorrow's lifestyle.
                </p>
<div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-6 animate-[slideUp_1s_ease-out_0.8s_forwards] transform opacity-0 mt-10 translate-y-8 space-y-4 items-center justify-center">
<span className=""><a className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] group ring-[#ffffff]/30 ring-1 text-base font-semibold text-white tracking-tight bg-neutral-950/95 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)]" href="#contact" style={{zIndex: `2`}}>
<span className="relative z-[1] group-hover:translate-x-1 transition-transform duration-300">View Our Spaces</span>
<svg className="lucide lucide-arrow-right relative z-[1] w-4 h-4 text-sky-100 group-hover:translate-x-2 transition-transform duration-300" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: `rgb(224, 242, 254)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" style={{background: `linear-gradient(45deg, rgba(56,189,248,0.8) 0%, rgba(99,102,241,0.8) 50%, rgba(168,85,247,0.8) 100%)`, animation: `pulse 2s ease-in-out infinite`}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full" style={{boxShadow: `0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)`, background: `radial-gradient(140% 160% at 50% -20%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.08) 35%, rgba(56,189,248,0.00) 60%)`}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full" style={{background: `radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%), radial-gradient(90% 80% at 50% 120%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%)`}}></span>
</a></span>
<a className="group inline-flex items-center space-x-3 hover:text-gray-900 hover:border-white/50 hover:bg-white/10 transition-all duration-300 text-gray-600 border-white/30 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur-2xl bg-white/10 shadow-lg" href="#services">
<span className="">Our expertise</span>
<svg className="lucide lucide-chevron-right w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>

</div>
</div>
</div>

<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-[float_6s_ease-in-out_infinite]"></div>
<div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full opacity-40 animate-[float_4s_ease-in-out_infinite_2s]"></div>
<div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-50 animate-[float_5s_ease-in-out_infinite_1s]"></div>
</section>

<section className="lg:py-24 view-trigger view-active bg-gray-50 pt-16 pb-16" data-view-class="view-active">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4" id="aura-emfh8zrbf">
<div className="view-transition opacity-0 translate-y-8">

<div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-8 mb-8">
<div className="">
<p className="text-sm italic text-gray-500 mb-2">(01 Work)</p>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">Featured spaces<span className="text-gray-900">.</span></h2>
</div>
<div className="lg:pl-8">
<p className="text-lg text-gray-600">Discover how we've transformed ordinary spaces into extraordinary environments that elevate daily experiences and inspire innovation.</p>
</div>
</div>
<div className="border-t border-gray-200 mb-16"></div>

<div className="relative" id="aura-emfh8zxfk" style={{height: `300vh`}}>

<div className="sticky top-24 mt-0 z-10 mx-auto max-w-6xl px-4">
<div className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-700 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
<div className="overflow-hidden">
<img alt="Modern luxury residence interior design" className="w-full h-[450px] lg:h-[550px] object-cover opacity-90 transition-all duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a4facd9f-e0bc-4f4e-a8c7-9d89b67603c3_3840w.jpg" style={{transform: `translateY(var(--scroll-y, 0px))`, '--scroll-y': `608.3000000000001px`, objectPosition: `center center`}} />
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 lg:p-14 flex flex-col group-hover:opacity-100 transition-opacity duration-500 opacity-0 pt-8 pr-8 pb-8 pl-8 justify-end">
<div className="mb-6">
<div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><polyline points="9,22 9,12 15,12 15,22"></polyline></svg>
<span>Luxury Residence</span>
</div>
</div>
<h3 className="text-3xl lg:text-5xl font-semibold text-white mb-4">Meridian Residence</h3>
<p className="text-lg text-white/90 mb-6 max-w-2xl">Complete home transformation for a tech entrepreneur, featuring smart home integration and sustainable materials, resulting in 90% energy efficiency improvement.</p>
<div className="flex flex-wrap items-center space-x-6 text-sm text-white/80">
<div className="flex items-center space-x-2">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span className="">4,200 sq ft</span>
</div>
<div className="flex items-center space-x-2">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span>90% energy efficient</span>
</div>
<div className="flex items-center space-x-2">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span>8 month build</span>
</div>
</div>
<div className="mt-6">
<div className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
<span>View project</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="sticky top-24 mt-8 z-20 mx-auto max-w-6xl px-4">
<div className="relative group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
<div className="overflow-hidden">
<img alt="Modern office space design" className="w-full h-[450px] lg:h-[550px] object-cover transition-all duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a857c6c1-5a11-4c0d-beb0-1d8ec6e970c1_3840w.jpg" style={{transform: `translateY(calc(var(--scroll-y, 0px) * 0.8))`, '--scroll-y': `486.6400000000001px`, objectPosition: `center center`}} />
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 lg:p-14 flex flex-col pt-8 pr-8 pb-8 pl-8 justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="mb-6">
<div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span>Corporate Office</span>
</div>
</div>
<h3 className="lg:text-5xl text-3xl font-semibold text-white mb-4">Azure Offices</h3>
<p className="text-lg text-white/90 mb-6 max-w-2xl">Revolutionary workspace design that promotes collaboration and wellbeing, featuring biophilic elements and flexible zones that adapt to hybrid working patterns.</p>
<div className="flex flex-wrap items-center space-x-6 text-sm text-white/80">
<div className="flex items-center space-x-2">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="9" cy="7"></circle><path></path><path></path></svg>
<span>250 employees</span>
</div>
<div className="flex items-center space-x-2">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span>15,000 sq ft</span>
</div>
<div className="flex items-center space-x-2">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span>6 month delivery</span>
</div>
</div>
<div className="mt-6">
<div className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
<span>View project</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="sticky top-24 mt-16 z-30 mx-auto max-w-6xl px-4">
<div className="relative group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
<div className="overflow-hidden">
<img alt="Luxury yacht interior design" className="w-full h-[450px] lg:h-[550px] object-cover transition-all duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9c8a44a6-a501-401f-b95d-892f3b6df817_3840w.jpg" style={{transform: `translateY(calc(var(--scroll-y, 0px) * 0.6))`, '--scroll-y': `364.98px`, objectPosition: `center center`}} />
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 lg:p-14 flex flex-col group-hover:opacity-100 transition-opacity duration-500 opacity-0 pt-8 pr-8 pb-8 pl-8 justify-end">
<div className="mb-6">
<div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
<span>Luxury Yacht</span>
</div>
</div>
<h3 className="lg:text-5xl text-3xl font-semibold text-white mb-4">Serenity Yacht</h3>
<p className="text-lg text-white/90 mb-6 max-w-2xl">Bespoke yacht interior combining luxury with functionality, featuring custom millwork, state-of-the-art entertainment systems, and ocean-inspired design elements.</p>
<div className="flex flex-wrap items-center space-x-6 text-sm text-white/80">
<div className="flex items-center space-x-2">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18"></rect><line></line><line></line><line></line></svg>
<span>120ft vessel</span>
</div>
<div className="flex items-center space-x-2">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="10"></circle></svg>
<span>8 luxury suites</span>
</div>
<div className="flex items-center space-x-2">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span>14 month refit</span>
</div>
</div>
<div className="mt-6">
<div className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
<span>View project</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</div>
</div>
</div>

</div>
<div className="view-transition text-center opacity-0 mt-12 translate-y-8">
<button className="group relative overflow-hidden rounded-3xl bg-white text-gray-900 border-none cursor-pointer leading-none shadow-xl hover:shadow-2xl transition-all duration-300">
<span className="absolute inset-0 z-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
<div className="flex relative overflow-hidden font-semibold w-auto items-center">
<div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
<span className="inline-block overflow-hidden whitespace-nowrap text-ellipsis transition-all duration-300 relative z-10 group-hover:text-white min-w-[120px] group-hover:min-w-[180px] group-hover:pr-12 w-auto pt-3 pr-4 pb-3 pl-6">View all</span>
<svg className="group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 relative z-10 opacity-0 translate-x-2 w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `24px`, height: `24px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="16">
<path className=""></path>
<path className=""></path>
</svg>
</div>
</button>
</div>
</div>
</div>
</section>

<section className="lg:py-24 view-trigger view-active pt-16 pb-16" data-view-class="view-active">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 view-transition opacity-0 mb-8 translate-y-8 items-end">
<div className="">
<p className="text-sm italic text-gray-500 mb-2">(02 Process)</p>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">How we design<span className="text-gray-900">.</span></h2>
</div>
<div className="lg:pl-8">
<p className="text-lg text-gray-600">Our process ensures deep understanding of your lifestyle, your space, and your vision for creating environments that truly inspire.</p>
</div>
</div>
<div className="border-t border-gray-200 mb-10"></div>

<div className="flex gap-4 h-full" style={{minHeight: `400px`}}>

<div className="group relative flex-1 hover:flex-[2] transition-all duration-700 ease-out overflow-hidden hover:shadow-xl cursor-pointer bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8ed131ed-415a-41cf-bca9-a0bfb469fe6e_800w.jpg)] bg-cover border-gray-200 border rounded-2xl shadow-lg" style={{minHeight: `400px`}}>

<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100">
<div className="absolute inset-0 opacity-20">
<svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400" fill="none" height="120" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>

<div className="relative flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c82febad-f012-453e-a2d3-53c62a864b96_3840w.jpg)] bg-cover pt-6 pr-6 pb-6 pl-6 justify-between">

<div className="text-2xl font-bold text-white mb-4 drop-shadow-lg">01. Understand</div>

<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<p className="text-white/90 leading-relaxed drop-shadow-sm">We explore your lifestyle, preferences, and dreams to create spaces that truly reflect who you are and how you live.</p>
</div>
</div>
</div>

<div className="group relative flex-1 hover:flex-[2] transition-all duration-700 ease-out bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer" style={{minHeight: `400px`}}>

<div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100">
<div className="absolute inset-0 opacity-20">
<svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-400" fill="none" height="120" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
<path></path>
<path></path>
</svg>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>

<div className="relative flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dcc317e2-d513-4dca-962c-d96c936fe2db_3840w.jpg)] bg-cover pt-6 pr-6 pb-6 pl-6 justify-between">

<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>

<div className="relative z-10 text-2xl font-bold text-white mb-4 drop-shadow-lg">02. Design</div>

<div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<p className="text-white/90 leading-relaxed drop-shadow-sm">We craft detailed concepts and 3D visualizations that bring your vision to life before construction begins.</p>
</div>
</div>
</div>

<div className="group relative flex-1 hover:flex-[2] transition-all duration-700 ease-out overflow-hidden hover:shadow-xl cursor-pointer bg-white border-gray-200 border rounded-2xl shadow-lg" style={{minHeight: `400px`}}>

<div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-100">
<div className="absolute inset-0 opacity-20">
<svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-400" fill="none" height="120" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
</svg>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>

<div className="relative flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d0446c21-0869-4dea-89f2-fa7cc3949721_3840w.jpg)] bg-cover pt-6 pr-6 pb-6 pl-6 justify-between">

<div className="text-2xl font-bold text-white mb-4 drop-shadow-lg">03. Build</div>

<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<p className="text-white/90 leading-relaxed drop-shadow-sm">We coordinate with master craftspeople and premium suppliers to execute every detail with precision and care.</p>
</div>
</div>
</div>

<div className="group relative flex-1 hover:flex-[2] transition-all duration-700 ease-out bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer" style={{minHeight: `400px`}}>

<div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-100">
<div className="absolute inset-0 opacity-20">
<svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-400" fill="none" height="120" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
<circle cx="4" cy="20"></circle>
</svg>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>

<div className="relative flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/93a0d3c3-daba-4c8d-a727-b52de37fff08_3840w.jpg)] bg-cover pt-6 pr-6 pb-6 pl-6 justify-between">

<div className="text-2xl font-bold text-white mb-4 drop-shadow-lg">04. Reveal</div>

<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<p className="text-white/90 leading-relaxed drop-shadow-sm">We unveil your transformed space with the finishing touches that create an environment you'll love for years to come.</p>
</div>
</div>
</div>

<div className="group relative flex-1 hover:flex-[2] transition-all duration-700 ease-out bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer" style={{minHeight: `400px`}}>

<div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-100">
<div className="absolute inset-0 opacity-20">
<svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-400" fill="none" height="120" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>

<div className="relative flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/20c0faaa-a3f3-491c-a529-c51b3d0da9a8_3840w.jpg)] bg-cover pt-6 pr-6 pb-6 pl-6 justify-between">

<div className="text-2xl font-bold text-white mb-4 drop-shadow-lg">05. Complete</div>

<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<p className="text-white/90 leading-relaxed drop-shadow-sm">We ensure every detail meets our exacting standards and provide ongoing support for your transformed space.</p>
</div>
</div>
</div>
</div>

<div className="mt-16">
<div className="text-center mb-6">
<p className="text-sm text-gray-500 uppercase tracking-wide">Trusted by discerning clients at</p>
</div>
<div className="relative overflow-hidden">

<div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white via-white to-transparent z-10"></div>
<div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white via-white to-transparent z-10"></div>
<div className="flex w-max items-center gap-16 will-change-transform" id="logo-ticker-rail" style={{transform: `translateX(0px)`}}>

<div className="flex w-max items-center gap-16" data-ticker-track="">
<div className="inline-flex items-center gap-3 text-gray-400">
<span className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
<svg className="lucide lucide-building text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16"></rect><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</span>
<span className="text-base sm:text-lg font-medium">Pinnacle Towers</span>
</div>
<div className="inline-flex items-center gap-3 text-gray-400">
<span className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
<svg className="lucide lucide-home text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><polyline points="9,22 9,12 15,12 15,22"></polyline></svg>
</span>
<span className="text-base sm:text-lg font-medium">Estate Collection</span>
</div>
<div className="inline-flex items-center gap-3 text-gray-400">
<span className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
<svg className="lucide lucide-waves text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</span>
<span className="text-base sm:text-lg font-medium">Marina Bay</span>
</div>
<div className="inline-flex items-center gap-3 text-gray-400">
<span className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
<svg className="lucide lucide-mountain text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<span className="text-base sm:text-lg font-medium">Alpine Retreats</span>
</div>
<div className="inline-flex items-center gap-3 text-gray-400">
<span className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
<svg className="lucide lucide-briefcase text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><rect className="" height="14" rx="2" width="20"></rect></svg>
</span>
<span className="text-base sm:text-lg font-medium">Corporate Plaza</span>
</div>
<div className="inline-flex items-center gap-3 text-gray-400">
<span className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
<svg className="lucide lucide-palmtree text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</span>
<span className="text-base sm:text-lg font-medium">Island Villas</span>
</div>
</div>

<div aria-hidden="true" className="flex w-max items-center gap-16">
<div className="inline-flex items-center gap-3 text-gray-400">
<span className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
<svg className="lucide lucide-building text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16"></rect><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</span>
<span className="text-base sm:text-lg font-medium">Pinnacle Towers</span>
</div>
<div className="inline-flex items-center gap-3 text-gray-400">
<span className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
<svg className="lucide lucide-home text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><polyline points="9,22 9,12 15,12 15,22"></polyline></svg>
</span>
<span className="text-base sm:text-lg font-medium">Estate Collection</span>
</div>
<div className="inline-flex items-center gap-3 text-gray-400">
<span className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
<svg className="lucide lucide-waves text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</span>
<span className="text-base sm:text-lg font-medium">Marina Bay</span>
</div>
<div className="inline-flex items-center gap-3 text-gray-400">
<span className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
<svg className="lucide lucide-mountain text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<span className="text-base sm:text-lg font-medium">Alpine Retreats</span>
</div>
<div className="inline-flex items-center gap-3 text-gray-400">
<span className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
<svg className="lucide lucide-briefcase text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="14" rx="2" width="20"></rect></svg>
</span>
<span className="text-base sm:text-lg font-medium">Corporate Plaza</span>
</div>
<div className="inline-flex items-center gap-3 text-gray-400">
<span className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
<svg className="lucide lucide-palmtree text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</span>
<span className="text-base sm:text-lg font-medium">Island Villas</span>
</div>
</div>
</div>
</div>
</div>
</div>


</section><section className="lg:py-24 view-trigger view-active pt-16 pb-16" data-view-class="view-active">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="view-transition opacity-0 mb-8 translate-y-8" id="aura-emfh7r1x8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
<div className="">
<p className="text-sm italic text-gray-500 mb-2">(03 Insights)</p>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">Design insights<span className="text-gray-900">.</span></h2>
</div>
<div className="lg:pl-8 flex justify-start lg:justify-end">
<a className="group inline-flex items-center gap-3 px-8 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105" href="#">
<span className="">All articles</span>
<div className="relative flex items-center justify-center w-5 h-5 bg-white/20 rounded-full group-hover:bg-white/30 transition-all duration-300">
<svg className="transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
</a>
</div>
</div>
</div>
<div className="border-t border-gray-200 mb-10"></div>

<a className="group grid grid-cols-1 lg:grid-cols-2 rounded-3xl bg-white border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 view-transition opacity-0 translate-y-8" href="#">

<div className="relative h-72 sm:h-80 lg:h-auto overflow-hidden">
<img alt="Modern sustainable interior design" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a4bcd74f-37c9-4cbe-b95d-22b26926781a_1600w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
<div className="flex items-center justify-center w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl">
<svg className="text-black transition-transform duration-300 group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
</div>
</div>

<div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
<div className="">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">Latest article</span>
<h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Sustainable luxury in modern homes</h3>
<p className="mt-3 text-base text-gray-600">How to create stunning interiors that champion environmental responsibility without compromising on elegance.</p>
</div>
<div className="mt-6 flex items-center justify-between">
<span className="text-sm text-gray-500">Jun 15, 2025</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">Sustainability</span>
<span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">Interiors</span>
</div>
</div>
</div>
</a>

<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 view-transition opacity-0 translate-y-8 hover:-translate-y-2" href="#">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Minimalist home office design" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c6fa2e58-1453-4710-b16d-282624017402_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
<div className="flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl">
<svg className="text-black transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
</div>
</div>
<div className="p-5">
<h4 className="text-lg font-semibold text-gray-900 tracking-tight group-hover:text-black transition-colors duration-300">Yacht interior design trends</h4>
<p className="mt-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">How to create productive spaces that inspire creativity and focus.</p>
</div>
</a>

<a className="group rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 view-transition opacity-0 translate-y-8 hover:-translate-y-2" href="#">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Luxury yacht interior design" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1d01993c-67dd-4a97-ab99-02c5c2950e6f_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
<div className="flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl">
<svg className="text-black transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
</div>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<h4 className="text-lg font-semibold text-gray-900 tracking-tight group-hover:text-black transition-colors duration-300">Design the perfect home office</h4>
<p className="mt-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Creating luxurious floating sanctuaries with innovative space solutions.</p>
</div>
</a>

<a className="group rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 view-transition opacity-0 translate-y-8 hover:-translate-y-2" href="#">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Smart home technology integration" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/47ab897b-55da-4992-a1f4-8ff192977fc0_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
<div className="flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl">
<svg className="text-black transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
</div>
</div>
<div className="p-5">
<h4 className="text-lg font-semibold tracking-tight text-gray-900 group-hover:text-black transition-colors duration-300">Smart homes, seamless design</h4>
<p className="mt-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Integrating technology invisibly into beautiful living spaces.</p>
</div>
</a>
</div>
</div>
</section>

<section className="lg:py-24 relative overflow-hidden view-trigger view-active bg-gradient-to-br from-gray-900 to-black pt-16 pb-16" data-view-class="view-active" id="aura-emfh9dzcb" style={{backgroundImage: `url('https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/72bef53b-ffe0-4660-87d2-01e9d56f9b34_3840w.jpg')`, backgroundSize: `cover`, backgroundPosition: `center`, backgroundAttachment: `fixed`, transform: `translateZ(0)`}}>
<div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/60"></div>
<div className="absolute inset-0 opacity-20 mix-blend-multiply w-72 h-72 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b4742e43-82ee-4889-a3eb-d70f730d0972_3840w.jpg)] bg-cover">
<div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-[float_8s_ease-in-out_infinite]"></div>
<div className="absolute top-0 left-0 filter animate-[float_8s_ease-in-out_infinite] bg-blue-500 opacity-20 mix-blend-multiply w-72 h-72 rounded-full blur-xl"></div>
<div className="absolute bottom-0 right-0 filter animate-[float_6s_ease-in-out_infinite_2s] opacity-20 mix-blend-multiply w-72 h-72 rounded-full blur-xl"></div>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="view-transition opacity-0 translate-y-8">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Ready to transform your space?
            </h2>
<p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Let's discuss your vision and explore how we can create a space that truly reflects your lifestyle and aspirations.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
<a className="group inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300" href="#contact">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg>
<span className="">Schedule consultation</span>
</a>
<a className="group inline-flex items-center space-x-3 text-white border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300" href="mailto:hello@designhaven.com">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="16" rx="2" width="20"></rect></svg>
<span className="">Send us an email</span>
</a>
</div>
</div>
</div>

</section>

<footer className="view-trigger view-active bg-white border-gray-100 border-t pt-16 pb-16" data-view-class="view-active">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="view-transition opacity-0 translate-y-8">

<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">

<div className="lg:col-span-2">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[200px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/07ee863a-59fe-4785-a806-5592f2439df2_800w.jpg)] bg-cover rounded mb-4 invert" href="#"></a>
<p className="text-gray-600 max-w-md mb-6">
                        Creating bespoke interior designs and architectural solutions for homes, offices, yachts, and commercial spaces that define tomorrow's lifestyle.
                    </p>

<div className="flex items-center space-x-4">
<a className="text-gray-400 hover:text-gray-600 transition-colors duration-200" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors duration-200" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors duration-200" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20"></rect><path></path><line></line></svg>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors duration-200" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</a>
</div>
</div>

<div className="">
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Services</h4>
<ul className="space-y-3">
<li className=""><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Residential Design</a></li>
<li className=""><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Commercial Spaces</a></li>
<li className=""><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Yacht Interiors</a></li>
<li className=""><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Project Management</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Consultation</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Contact</h4>
<ul className="space-y-3">
<li className="text-gray-600">+1 (555) 123-4567</li>
<li className=""><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="mailto:hello@designhaven.com">hello@designhaven.com</a></li>
<li className="text-gray-600">123 Design StreetNew York, NY 10001</li>
</ul>
</div>
</div>

<div className="border-t border-gray-200 pt-8">
<div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
<div className="text-center lg:text-left">
<p className="text-gray-600">© 2024 Design Haven. All rights reserved.</p>
</div>
<div className="flex items-center space-x-6 text-sm">
<a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Privacy Policy</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Terms of Service</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="#">Cookie Policy</a>
</div>
</div>
</div>
</div>
</div>
</footer>




    </>
  );
}
