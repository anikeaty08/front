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



        // Initialize Lucide icons
        lucide.createIcons();

        // Animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-up');
            
            animatedElements.forEach((el, index) => {
                el.style.opacity = '0';
                if (el.classList.contains('slide-in-left')) {
                    el.style.transform = 'translateX(-30px)';
                } else if (el.classList.contains('slide-in-right')) {
                    el.style.transform = 'translateX(30px)';
                } else if (el.classList.contains('slide-in-up')) {
                    el.style.transform = 'translateY(30px)';
                } else {
                    el.style.transform = 'translateY(20px)';
                }
                el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
                
                observer.observe(el);
            });

            // Trigger initial animations
            setTimeout(() => {
                document.querySelector('.fade-in').style.opacity = '1';
                document.querySelector('.fade-in').style.transform = 'translateY(0)';
            }, 200);
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
      

<nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
<div className="max-w-7xl md:px-16 lg:px-24 mr-auto ml-auto pt-4 pr-6 pb-4 pl-6">
<div className="flex items-center justify-between">
<div className="text-lg font-medium">Elena Rodriguez</div>
<div className="flex items-center space-x-8">
<a className="text-sm opacity-60 hover:opacity-100 transition-opacity" href="#">Work</a>
<a className="text-sm opacity-100" href="#">About</a>
<a className="text-sm opacity-60 hover:opacity-100 transition-opacity" href="#">Contact</a>
</div>
</div>
</div>
</nav>
<main className="w-full px-6 md:px-16 lg:px-24 pb-24 pt-20">

<section className="pt-10 md:pt-20 fade-in" style={{opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.8s, transform 0.8s`}}>
<div className="flex flex-col lg:flex-row items-start justify-between gap-8">
<h1 className="text-[60px] md:text-[96px] lg:text-[120px] leading-none font-semibold tracking-tight">About</h1>
<div className="max-w-sm">
<p className="text-sm md:text-base leading-relaxed opacity-80 mb-6">
                        Story, education, experience, awards, recognitions, and the creative journey that defines my work.
                    </p>
<div className="flex items-center space-x-4">
<svg className="lucide lucide-map-pin w-4 h-4 opacity-60" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm opacity-80">Barcelona, Spain</span>
</div>
</div>
</div>
<div className="border-t border-white/20 mt-12 lg:mt-16"></div>
</section>

<section className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 mt-12 lg:mt-20">

<div className="space-y-12 slide-in-left" style={{opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.8s 0.1s, transform 0.8s 0.1s`}}>
<div className="">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-8">
                        Elena<br />Rodriguez
                    </h2>
<p className="text-base leading-relaxed opacity-80 mb-6">
                        Creative Director & Brand Strategist specializing in digital experiences that bridge art and technology.
                    </p>
<div className="flex items-center space-x-2 text-sm opacity-60">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Available for new projects</span>
</div>
</div>

<div className="space-y-4">
<h3 className="text-lg font-medium opacity-90">Expertise</h3>
<div className="space-y-3">
<div className="flex items-center space-x-3">
<svg className="lucide lucide-palette w-4 h-4 opacity-60" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span className="text-sm">Brand Identity</span>
</div>
<div className="flex items-center space-x-3">
<svg className="lucide lucide-monitor w-4 h-4 opacity-60" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
<span className="text-sm">Digital Design</span>
</div>
<div className="flex items-center space-x-3">
<svg className="lucide lucide-layout w-4 h-4 opacity-60" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
<span className="text-sm">UI/UX Strategy</span>
</div>
<div className="flex items-center space-x-3">
<svg className="lucide lucide-lightbulb w-4 h-4 opacity-60" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<span className="text-sm">Creative Direction</span>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-lg font-medium opacity-90">Connect</h3>
<div className="space-y-3">
<div className="flex items-center space-x-3 group cursor-pointer">
<svg className="lucide lucide-mail w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-sm group-hover:opacity-100 opacity-80 transition-opacity">hello@elena.studio</span>
</div>
<div className="flex items-center space-x-3 group cursor-pointer">
<svg className="lucide lucide-linkedin w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<span className="text-sm group-hover:opacity-100 opacity-80 transition-opacity">@elenarodriguez</span>
</div>
<div className="flex items-center space-x-3 group cursor-pointer">
<svg className="lucide lucide-instagram w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<span className="text-sm group-hover:opacity-100 opacity-80 transition-opacity">@elena.creates</span>
</div>
</div>
</div>
</div>

<div className="slide-in-right" style={{opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.8s 0.2s, transform 0.8s 0.2s`}}>

<div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/20 mb-8">
<div className="bg-black p-6 lg:p-8 flex flex-col justify-end min-h-[120px] hover:bg-white/5 transition-colors group">
<div className="flex items-center space-x-2 mb-2">
<svg className="lucide lucide-briefcase opacity-60 group-hover:opacity-100 transition-opacity w-[20px] h-[20px]" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="text-3xl lg:text-4xl font-semibold">150+</span>
</div>
<span className="text-xs uppercase tracking-wider opacity-70">Projects Completed</span>
</div>
<div className="bg-black p-6 lg:p-8 flex flex-col justify-end min-h-[120px] hover:bg-white/5 transition-colors group">
<div className="flex items-center space-x-2 mb-2">
<svg className="lucide lucide-award opacity-60 group-hover:opacity-100 transition-opacity w-[20px] h-[20px]" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-3xl lg:text-4xl font-semibold">12</span>
</div>
<span className="text-xs uppercase tracking-wider opacity-70">Design Awards</span>
</div>
<div className="bg-black p-6 lg:p-8 flex flex-col justify-end min-h-[120px] hover:bg-white/5 transition-colors group col-span-2 lg:col-span-1">
<div className="flex items-center space-x-2 mb-2">
<svg className="lucide lucide-clock opacity-60 group-hover:opacity-100 transition-opacity w-[20px] h-[20px]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="text-3xl lg:text-4xl font-semibold">8+</span>
</div>
<span className="text-xs uppercase tracking-wider opacity-70">Years Experience</span>
</div>
<div className="bg-black p-6 lg:p-8 flex flex-col justify-end min-h-[120px] hover:bg-white/5 transition-colors group">
<div className="flex items-center space-x-2 mb-2">
<svg className="lucide lucide-users opacity-60 group-hover:opacity-100 transition-opacity w-[20px] h-[20px]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-3xl lg:text-4xl font-semibold">45+</span>
</div>
<span className="text-xs uppercase tracking-wider opacity-70">Happy Clients</span>
</div>
<div className="bg-black p-6 lg:p-8 flex flex-col justify-end min-h-[120px] hover:bg-white/5 transition-colors group">
<div className="flex items-center space-x-2 mb-2">
<svg className="lucide lucide-globe opacity-60 group-hover:opacity-100 transition-opacity w-[20px] h-[20px]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-3xl lg:text-4xl font-semibold">4</span>
</div>
<span className="text-xs uppercase tracking-wider opacity-70">Languages</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="aspect-square overflow-hidden rounded-lg group">
<img alt="Elena Rodriguez portrait" className="w-full h-full group-hover:scale-105 transition-transform duration-700 object-cover" src="https://images.unsplash.com/photo-1720962158849-2c3b22499d2b?w=1080&q=80" />
</div>
<div className="aspect-square overflow-hidden rounded-lg group">
<img alt="Creative workspace" className="w-full h-full group-hover:scale-105 transition-transform duration-700 object-cover" src="https://images.unsplash.com/photo-1658953229625-aad99d7603b4?w=1080&q=80" />
</div>
</div>

<div className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-8 border border-white/10">
<div className="flex items-start space-x-4">
<svg className="lucide lucide-quote w-6 h-6 opacity-40 mt-1 flex-shrink-0" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<div className="">
<p className="text-lg leading-relaxed mb-4 opacity-90">
                                "Design is not just about making things beautiful—it's about creating meaningful connections between people and ideas."
                            </p>
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
<div>
<div className="text-sm font-medium">Elena Rodriguez</div>
<div className="text-xs opacity-60">Creative Director</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-20 slide-in-up" style={{opacity: `0`, transform: `translateY(30px)`, transition: `opacity 0.8s 0.3s, transform 0.8s 0.3s`}}>
<div className="border-t border-white/20 pt-16">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h3 className="text-2xl font-medium tracking-tight mb-8 flex items-center">
<svg className="lucide lucide-graduation-cap w-5 h-5 mr-3 opacity-60" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
                            Education
                        </h3>
<div className="space-y-6">
<div className="border-l-2 border-white/20 pl-6">
<div className="text-sm opacity-60 mb-1">2018 - 2020</div>
<div className="font-medium mb-2">Master of Fine Arts</div>
<div className="text-sm opacity-80">Barcelona School of Design</div>
</div>
<div className="border-l-2 border-white/20 pl-6">
<div className="text-sm opacity-60 mb-1">2014 - 2018</div>
<div className="font-medium mb-2">Bachelor of Visual Communication</div>
<div className="text-sm opacity-80">Universidad de Barcelona</div>
</div>
</div>
</div>

<div className="">
<h3 className="text-2xl font-medium tracking-tight mb-8 flex items-center">
<svg className="lucide lucide-building w-5 h-5 mr-3 opacity-60" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                            Experience
                        </h3>
<div className="space-y-6">
<div className="border-l-2 border-white/20 pl-6">
<div className="text-sm opacity-60 mb-1">2022 - Present</div>
<div className="font-medium mb-2">Creative Director</div>
<div className="text-sm opacity-80">Pixel Studios Barcelona</div>
</div>
<div className="border-l-2 border-white/20 pl-6">
<div className="text-sm opacity-60 mb-1">2020 - 2022</div>
<div className="font-medium mb-2">Senior Brand Designer</div>
<div className="text-sm opacity-80">Design Collective</div>
</div>
<div className="border-l-2 border-white/20 pl-6">
<div className="text-sm opacity-60 mb-1">2018 - 2020</div>
<div className="font-medium mb-2">Visual Designer</div>
<div className="text-sm opacity-80">Freelance</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
