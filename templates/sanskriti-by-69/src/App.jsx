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



    // Enhanced timeline animation with smooth sequential reveal
    function initSmoothTimeline() {
        const progressLine = document.getElementById('progress-line');
        const timelineSteps = document.querySelectorAll('.timeline-step');
        const timelineDots = document.querySelectorAll('.timeline-dot');
        const timelineContainer = document.getElementById('timeline-container');
        
        if (!progressLine || !timelineSteps.length || !timelineDots.length) return;

        let animationStarted = false;

        function resetTimeline() {
            progressLine.style.height = '0%';
            timelineSteps.forEach(step => {
                step.style.opacity = '0';
                step.style.transform = 'translateY(50px)';
            });
            timelineDots.forEach(dot => {
                dot.style.background = '#e2e8f0';
                dot.style.transform = 'scale(0.8)';
                dot.style.opacity = '0.5';
                dot.style.boxShadow = 'none';
            });
        }

        function animateTimeline() {
            if (animationStarted) return;
            animationStarted = true;

            setTimeout(() => {
                progressLine.style.height = '100%';
            }, 200);

            timelineSteps.forEach((step, index) => {
                const dot = timelineDots[index];
                const delay = 400 + (index * 600);

                setTimeout(() => {
                    step.style.opacity = '1';
                    step.style.transform = 'translateY(0px)';
                    
                    if (dot) {
                        dot.style.background = '#475569';
                        dot.style.transform = 'scale(1)';
                        dot.style.opacity = '1';
                        dot.style.boxShadow = '0 0 20px rgba(71, 85, 105, 0.4)';
                    }
                }, delay);
            });
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateTimeline();
                } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
                    animationStarted = false;
                    resetTimeline();
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '-100px 0px -50px 0px'
        });

        resetTimeline();
        observer.observe(timelineContainer);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSmoothTimeline);
    } else {
        initSmoothTimeline();
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
      <div className="bg-center -z-10 w-full h-screen bg-cover absolute top-0" style={{backgroundImage: 'url(\'https://i.ibb.co/FqLNbW83/Picsart-25-11-22-22-28-30-897.jpg\')'}}></div>

<header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 fade-in">
</header>
<main className="">

<section className="min-h-screen flex overflow-hidden fade-in bg-gradient-to-tr from-slate-50 via-white to-purple-50/30 relative items-center justify-center">
<div className="max-w-7xl sm:px-6 relative z-10 text-center mr-auto ml-auto pr-4 pl-4">
<div className="fade-in">

<div className="mb-8 slide-up visible">
<span className="relative inline-block group inline-flex items-center gap-2 glass text-sm font-medium text-[#000000] bg-white/60 border-[#000000]/40 border rounded-full pt-3 pr-6 pb-3 pl-6 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98]" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove &amp;&amp; btnMove(event)" style={{'--x': '0px', '--y': '0px', '--o': '0'}}>
<span className="relative z-10 inline-flex items-center gap-2 font-semibold">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
<span className="">Sarees &amp; Traditional Wear</span>
<svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10" style={{transform: 'scale(0.95) translate(0px, -24px)', opacity: 'var(--o)', background: 'radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.7), transparent 55%)', transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'}}></span>
</span>
</div>
<div className="text-reveal visible mb-8">
<h1 className="sm:text-8xl lg:text-9xl leading-none text-7xl font-light tracking-tight font-playfair">
<span className="bg-clip-text inline-block text-transparent bg-gradient-to-r mb-4 from-slate-800 via-slate-600 to-purple-700">Sanskriti</span>
<span className="font-light inline-block relative text-slate-400">
<span className="">by Bhoomi</span>
<div className="absolute -right-8 -top-4 w-8 h-8 bg-gradient-to-br rounded-full opacity-60 blur-sm floating from-purple-300 to-pink-300"></div>
</span>
</h1>
</div>
<p className="sm:text-2xl lg:text-3xl leading-relaxed slide-up text-xl font-light max-w-4xl mr-auto mb-16 ml-auto text-slate-600">
                Handpicked sarees and traditional ensembles that weave together heritage, craftsmanship, and contemporary grace for every celebration.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 slide-up stagger-1 visible mb-16">
<a className="group glass border rounded-2xl px-10 py-5 font-medium hover-lift magnetic flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 border-slate-200/60 text-slate-800" href="https://sanskritibybhoomi.in/" style={{transform: 'translate(0px, 0px)'}} target="_blank">
<svg className="lucide lucide-shopping-bag" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    Shop Sarees
                    <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(30, 41, 59)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="glass hover-lift magnetic flex items-center gap-3 glow-hover hover:shadow-2xl transition-all duration-300 font-medium bg-gradient-to-r border rounded-2xl pt-5 pr-10 pb-5 pl-10 shadow-lg text-white from-slate-900 to-purple-900 border-slate-800" href="https://sanskritibybhoomi.in/" style={{transform: 'translate(0px, 0px)'}} target="_blank">
                    Explore Full Collection
                </a>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 slide-up stagger-2 visible">
<div className="text-center">
<div className="text-2xl sm:text-3xl font-light font-playfair mb-1 text-slate-800">2,000+</div>
<p className="text-sm text-slate-500 uppercase tracking-wider">Orders Shipped</p>
</div>
<div className="hidden sm:block w-px h-8 bg-slate-300"></div>
<div className="text-center">
<div className="text-2xl sm:text-3xl font-light font-playfair mb-1 text-slate-800">Pan India</div>
<p className="text-sm text-slate-500 uppercase tracking-wider">Delivery</p>
</div>
<div className="hidden sm:block w-px h-8 bg-slate-300"></div>
<div className="text-center">
<div className="text-2xl sm:text-3xl font-light font-playfair mb-1 text-slate-800">Curated</div>
<p className="text-sm text-slate-500 uppercase tracking-wider">Designer Picks</p>
</div>
</div>
</div>
</div>

<div className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br rounded-full opacity-30 blur-xl floating from-purple-200 to-pink-200"></div>
<div className="absolute bottom-1/3 right-16 w-20 h-20 bg-gradient-to-br rounded-full opacity-30 blur-xl floating from-blue-200 to-indigo-200" style={{animationDelay: '-2s'}}></div>
<div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br rounded-full opacity-20 blur-xl floating from-amber-200 to-orange-200" style={{animationDelay: '-4s'}}></div>
<div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-br rounded-full opacity-25 blur-xl floating from-green-200 to-emerald-200" style={{animationDelay: '-1s'}}></div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 slide-up stagger-3 visible">
<div className="flex flex-col gap-2 items-center cursor-pointer transition-all duration-300 text-slate-400 hover:text-slate-600" onclick="document.getElementById('collections').scrollIntoView({behavior: 'smooth', block: 'start'})">
<svg className="lucide lucide-chevron-down animate-bounce w-[16px] h-[16px] transition-colors duration-300 text-slate-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</section>

<section className="sm:px-6 scroll-reveal max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center slide-up stagger-1 visible">
<div className="text-4xl sm:text-5xl font-light font-playfair text-gradient mb-2" data-count="500">5</div>
<p className="text-slate-600">Happy Customers</p>
</div>
<div className="text-center slide-up stagger-2 visible">
<div className="text-4xl sm:text-5xl font-light font-playfair text-gradient mb-2" data-count="1200">12</div>
<p className="text-slate-600">Saree Styles</p>
</div>
<div className="text-center slide-up stagger-3 visible">
<div className="text-4xl sm:text-5xl font-light font-playfair text-gradient mb-2" data-count="5">1</div>
<p className="text-slate-600">Years of Craft</p>
</div>
<div className="text-center slide-up stagger-4 visible">
<div className="text-4xl sm:text-5xl font-light font-playfair text-gradient mb-2" data-count="98">1</div>
<p className="text-slate-600">Satisfaction %</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 scroll-reveal visible" id="studio">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="slide-up visible">
<p className="text-sm text-slate-500 uppercase tracking-wider mb-4">About sanskritibybhoomi</p>
<h2 className="text-4xl sm:text-6xl font-light font-playfair tracking-tight text-gradient mb-8">Rooted in Tradition</h2>
<div className="space-y-6 text-lg leading-relaxed text-slate-600">
<p>Curated for the modern Indian woman, sanskritibybhoomi celebrates the beauty of sarees and traditional wear with thoughtfully chosen designs from artisans and boutique labels.</p>
<p>From timeless Kanjivarams and Banarasi weaves to contemporary pre-draped silhouettes, each piece is selected to bring out your elegance at weddings, festivities, and intimate gatherings.</p>
<p>Every collection reflects a balance of comfort, grace, and cultural storytelling—so you can feel as good as you look, draped in heritage.</p>
</div>
<div className="mt-10">
<a className="glass border rounded-2xl px-8 py-4 font-medium hover-lift magnetic flex items-center gap-3 bg-white/80 border-slate-200/60" href="https://sanskritibybhoomi.in/" target="_blank">
                            View Live Store
                            <svg className="lucide lucide-external-link h-5 w-5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</div>
<div className="relative slide-up stagger-1 visible">
<div className="relative z-10 rotate-hover">
<img alt="Saree styling" className="w-full h-[600px] object-cover rounded-3xl shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c03d32b7-34b1-412b-ba65-4988d36e87b2_1600w.jpg"/>
</div>
<div className="absolute -bottom-8 -right-8 w-full h-full opacity-30 -z-10 bg-[#ccd2d6] rounded-3xl"></div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 scroll-reveal visible mr-auto ml-auto pt-40 pr-4 pb-40 pl-4" id="collections">
<div className="text-center mb-16 slide-up visible">
<p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Featured Edit</p>
<h2 className="sm:text-7xl text-gradient text-5xl font-light tracking-tight font-playfair mb-6">Festive Saree Drop</h2>
<p className="max-w-2xl text-xl mr-auto ml-auto text-slate-600">Rich weaves, intricate borders, and statement pallus curated for weddings, sangeet nights, and festive soirees.</p>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 slide-up stagger-1 visible" style={{columnFill: 'balance'}}>

<div className="break-inside-avoid relative group hover-lift scale-hover mb-6">
<div className="relative glass border rounded-3xl overflow-hidden shadow-lg bg-white/60 border-slate-200/60" style={{height: '480px'}}>
<img alt="Designer silk saree" className="image-parallax group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46fe270f-21f3-4ea2-9611-675116f3f504_1600w.jpg"/>
<div className="bg-center bg-gradient-to-t via-transparent to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fa4be46-7d0f-4c42-bdf7-82486a334e41_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0 from-slate-900/60"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<span className="inline-block px-3 py-1 rounded-full glass text-sm font-medium mb-4 bg-white/20">Silk Edit</span>
<h3 className="text-3xl font-light font-playfair mb-2">Kanjivaram Dreams</h3>
<p className="text-lg text-white/80">Handwoven silks with temple borders &amp; zari work</p>
</div>
<div className="absolute top-6 right-6">
<a className="glass border rounded-xl p-3 transition magnetic bg-white/20 border-white/30 text-white hover:bg-white/30" href="https://sanskritibybhoomi.in/" target="_blank">
<svg className="h-5 w-5 lucide lucide-shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a1 1 0 0 0 1 .81H19a1 1 0 0 0 1-.78L22 6H6"></path></svg>
</a>
</div>
</div>
</div>

<div className="break-inside-avoid relative group hover-lift scale-hover mb-6">
<div className="relative glass border rounded-3xl overflow-hidden shadow-lg bg-white/60 border-slate-200/60" style={{height: '320px'}}>
<img alt="Casual cotton saree" className="image-parallax group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78446e08-31ac-471e-902f-d53368595a8c_1600w.jpg"/>
<div className="bg-center bg-gradient-to-t to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78446e08-31ac-471e-902f-d53368595a8c_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0 from-slate-900/40"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<span className="text-sm font-medium">Everyday Drapes</span>
<p className="text-xs mt-1 text-white/80">Soft cottons &amp; linens for effortless days</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative group hover-lift scale-hover mb-6">
<div className="relative glass border rounded-3xl overflow-hidden shadow-lg bg-white/60 border-slate-200/60" style={{height: '280px'}}>
<img alt="Traditional jewellery" className="image-parallax group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50ae22e7-81fe-4ee7-a74d-df57e5e8996a_1600w.jpg"/>
<div className="bg-center bg-gradient-to-t to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50ae22e7-81fe-4ee7-a74d-df57e5e8996a_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0 from-slate-900/40"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<span className="text-sm font-medium">Jewellery Pairings</span>
<p className="text-xs mt-1 text-white/80">Curated pieces to complete your look</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative group hover-lift scale-hover mb-6">
<div className="relative glass border rounded-3xl overflow-hidden shadow-lg bg-white/60 border-slate-200/60" style={{height: '360px'}}>
<img alt="Lehenga and festive wear" className="image-parallax group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6cb48d92-ddd2-4875-8594-ca2c07accc0a_1600w.jpg"/>
<div className="bg-center bg-gradient-to-t to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/813dc2e4-8276-4ae0-b6d1-8b292ae50f5c_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0 from-slate-900/40"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<span className="text-sm font-medium">Lehenga &amp; Sets</span>
<p className="text-xs mt-1 text-white/80">Statement looks for your big moments</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative group hover-lift scale-hover mb-6">
</div>

<div className="break-inside-avoid relative group hover-lift scale-hover mb-6">
<div className="relative glass border rounded-3xl overflow-hidden shadow-lg bg-white/60 border-slate-200/60" style={{height: '400px'}}>
<img alt="Festive collection" className="w-full h-full object-cover image-parallax group-hover:scale-110" src="https://images.pexels.com/photos/4668528/pexels-photo-4668528.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"/>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0c2b442-3ce2-4190-9e3f-30dc0f833c2a_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<span className="text-sm font-medium">Wedding Season Drop</span>
<p className="text-xs mt-1 text-white/80">Limited festive curation</p>
</div>
<div className="absolute top-4 right-4">
<span className="glass px-2 py-1 rounded-full text-xs font-medium bg-amber-600 text-white">New</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 scroll-reveal visible mr-auto ml-auto pt-20 pr-4 pb-20 pl-4" id="process">
<div className="text-center mb-16 slide-up visible">
<p className="uppercase text-sm text-slate-500 tracking-wider mb-4">Our Curation Process</p>
<h2 className="sm:text-7xl text-gradient text-5xl font-light tracking-tight font-playfair mb-6">From Loom to Look</h2><p className="text-xl max-w-2xl mr-auto ml-auto text-slate-600">Thoughtfully selecting each piece so your online shopping feels like a boutique experience.</p>
</div>
<div className="relative" id="timeline-container">

<div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full hidden lg:block rounded-full overflow-hidden bg-slate-200">
<div className="w-full progress-line rounded-full" id="progress-line" style={{height: '0%', background: 'linear-gradient(rgb(71, 85, 105), rgb(100, 116, 139))', boxShadow: 'rgba(71, 85, 105, 0.3) 0px 0px 10px'}}></div>
</div>
<div className="space-y-20" id="timeline-steps">

<div className="flex flex-col lg:flex-row gap-12 items-center timeline-step" data-step="1" style={{opacity: '0', transform: 'translateY(50px)'}}>
<div className="flex-1 lg:text-right lg:pr-12">
<div className="glass hover-lift border rounded-3xl pt-8 pr-8 pb-8 pl-8 transform transition-all duration-500 bg-white/80 border-slate-200/60">
<div className="flex gap-4 lg:justify-end mb-6 items-center">
<span className="uppercase text-sm font-medium tracking-wider text-slate-600">Step 01</span>
</div>
<h3 className="text-3xl font-light font-playfair mb-4 text-slate-800">Sourcing &amp; Story</h3>
<p className="leading-relaxed mb-6 text-slate-600">We collaborate with trusted artisans, boutiques, and designers, selecting pieces that tell a story through their weave, motif, and colour palette.</p>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
<span>Ongoing with every new drop</span>
</div>
</div>
</div>
<div className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot" data-dot="1" style={{background: 'rgb(226, 232, 240)', transform: 'scale(0.8)', opacity: '0.5', boxShadow: 'none'}}></div>
<div className="flex-1 lg:pl-12"></div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 timeline-step" data-step="2" style={{opacity: '0', transform: 'translateY(50px)'}}>
<div className="flex-1 lg:pr-12"></div>
<div className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot" data-dot="2" style={{background: 'rgb(226, 232, 240)', transform: 'scale(0.8)', opacity: '0.5', boxShadow: 'none'}}></div>
<div className="flex-1 lg:pl-12">
<div className="glass hover-lift border rounded-3xl pt-8 pr-8 pb-8 pl-8 transform transition-all duration-500 bg-white/80 border-slate-200/60">
<div className="flex gap-4 mb-6 items-center">
<span className="uppercase text-sm font-medium tracking-wider text-slate-600">Step 02</span>
</div>
<h3 className="text-3xl font-light font-playfair mb-4 text-slate-800">Quality &amp; Detailing</h3>
<p className="leading-relaxed mb-6 text-slate-600">We examine fall, finish, and detailing—ensuring every saree and ensemble matches our standards for fabric quality and workmanship.</p>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
<span className="">Checked for each piece</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 timeline-step" data-step="3" style={{opacity: '0', transform: 'translateY(50px)'}}>
<div className="flex-1 lg:text-right lg:pr-12">
<div className="glass border rounded-3xl p-8 hover-lift transform transition-all duration-500 bg-white/80 border-slate-200/60">
<div className="flex items-center gap-4 lg:justify-end mb-6">
<span className="uppercase text-sm font-medium tracking-wider text-slate-600">Step 03</span>
</div>
<h3 className="text-3xl font-light font-playfair mb-4 text-slate-800">Styling &amp; Shoot</h3>
<p className="leading-relaxed mb-6 text-slate-600">Looks are styled to mirror real occasions—from haldi mornings to reception nights—so you can visualise exactly how each piece will shine.</p>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
<span>Curated lookbooks</span>
</div>
</div>
</div>
<div className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot" data-dot="3" style={{background: 'rgb(226, 232, 240)', transform: 'scale(0.8)', opacity: '0.5', boxShadow: 'none'}}></div>
<div className="flex-1 lg:pl-12"></div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 timeline-step" data-step="4" style={{opacity: '0', transform: 'translateY(50px)'}}>
<div className="flex-1 lg:pr-12"></div>
<div className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot" data-dot="4" style={{background: 'rgb(226, 232, 240)', transform: 'scale(0.8)', opacity: '0.5', boxShadow: 'none'}}></div>
<div className="flex-1 lg:pl-12">
<div className="glass border rounded-3xl p-8 hover-lift transform transition-all duration-500 bg-white/80 border-slate-200/60">
<div className="flex items-center gap-4 mb-6">
<span className="uppercase text-sm font-medium tracking-wider text-slate-600">Step 04</span>
</div>
<h3 className="text-3xl font-light font-playfair mb-4 text-slate-800">Pack &amp; Dispatch</h3>
<p className="leading-relaxed mb-6 text-slate-600">Your saree is carefully packed to preserve its drape and detailing, then shipped securely across India with tracking updates.</p>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
<span>Ships in 3–7 working days*</span>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="max-w-7xl sm:px-6 scroll-reveal visible mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="text-center mb-16 slide-up visible">
<p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Behind the Brand</p>
<h2 className="text-5xl sm:text-7xl font-light font-playfair tracking-tight text-gradient mb-6">Curated With Love</h2>
<p className="text-xl max-w-2xl mx-auto text-slate-600">A small, passionate team obsessing over drapes, falls, borders, and the joy of dressing up.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group slide-up stagger-1 visible">
<div className="rounded-3xl ring-1 p-6 sm:p-7 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.25)] hover:shadow-xl transition-all duration-300 ring-slate-200 bg-white">
<div className="relative rounded-2xl ring-1 h-40 overflow-hidden bg-slate-50 ring-black/5">
<div className="grid place-items-center bg-center group-hover:scale-110 transition-transform duration-500 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/40510ab0-65a8-4344-b353-b0ddec3adecc_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">Bhoomi</h3>
<p className="font-medium mb-4 text-slate-600">Founder &amp; Curator</p>
<p className="mt-1.5 text-sm text-slate-600">Handpicks each piece, ensuring every drape feels special, flattering, and truly occasion-ready.</p>
</div>
</div>
<div className="group slide-up stagger-2 visible">
<div className="rounded-3xl ring-1 p-6 sm:p-7 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.25)] hover:shadow-xl transition-all duration-300 ring-slate-200 bg-white">
<div className="relative rounded-2xl ring-1 h-40 overflow-hidden bg-slate-50 ring-black/5">
<div className="grid place-items-center bg-center group-hover:scale-110 transition-transform duration-500 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12dc22c7-ce19-4909-b4a6-1c6acbc28ce3_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">Styling Team</h3>
<p className="font-medium mb-4 text-slate-600">Looks &amp; Visuals</p>
<p className="mt-1.5 text-sm text-slate-600">Experiments with blouses, jewellery, and draping styles so you can easily recreate the look at home.</p>
</div>
</div>
<div className="group slide-up stagger-3 visible">
<div className="rounded-3xl ring-1 p-6 sm:p-7 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.25)] hover:shadow-xl transition-all duration-300 ring-slate-200 bg-white">
<div className="relative rounded-2xl ring-1 h-40 overflow-hidden bg-slate-50 ring-black/5">
<div className="grid place-items-center bg-center group-hover:scale-110 transition-transform duration-500 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7b02496-d4c6-4fed-aa8e-b3e35fe74339_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight mt-5 text-slate-900">Operations</h3>
<p className="font-medium mb-4 text-slate-600">Packaging &amp; Support</p>
<p className="mt-1.5 text-sm text-slate-600">Ensures your orders are packed beautifully, shipped safely, and your queries are answered quickly.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 scroll-reveal visible mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="text-center mb-16 slide-up visible">
<p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Client Stories</p>
<h2 className="text-5xl sm:text-7xl font-light font-playfair tracking-tight text-gradient mb-6">Loved by Brides &amp; Bridesmaids</h2>
</div>
<div className="relative slide-up stagger-1 visible">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="rounded-3xl ring-1 p-12 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 group cursor-pointer bg-white ring-slate-200 shadow-slate-900/5 hover:ring-slate-300">
<div className="w-20 h-20 mx-auto mb-8 rounded-full p-1 ring-1 transition-all duration-300 group-hover:ring-slate-300 group-hover:shadow-lg bg-white ring-slate-200">
<div className="w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
<img alt="Client avatar" className="w-full h-full object-cover" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=320"/>
</div>
</div>
<p className="leading-relaxed mx-auto max-w-md transition-colors duration-300 group-hover:text-slate-700 text-slate-600">
      Bought my wedding reception saree from sanskritibybhoomi and received endless compliments. The fall, the colour, the border—everything was perfect, exactly as shown.
    </p>
<div className="w-24 h-px mt-6 mr-auto mb-6 ml-auto transition-all duration-300 group-hover:bg-slate-400 group-hover:w-32 bg-slate-200"></div>
<div className="text-xs tracking-widest text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-700">
      Sarah Sharma
      <div className="mt-1">Bride</div>
</div>
<div className="mt-8 inline-flex items-center justify-center w-10 h-10 rounded-full border mx-auto transition-all duration-300 group-hover:border-slate-400 group-hover:text-slate-600 group-hover:bg-slate-50 group-hover:scale-110 border-slate-200 text-slate-400">
<svg className="lucide lucide-quote" data-lucide="quote" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
</div>

<div className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 group cursor-pointer text-center ring-1 rounded-3xl pt-12 pr-12 pb-12 pl-12 shadow-slate-900/5 hover:ring-slate-300 bg-white ring-slate-200">
<div className="w-20 h-20 mx-auto mb-8 rounded-full p-1 ring-1 transition-all duration-300 group-hover:ring-slate-300 group-hover:shadow-lg bg-white ring-slate-200">
<div className="w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
<img alt="Client avatar" className="w-full h-full object-cover" src="https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=320"/>
</div>
</div>
<p className="leading-relaxed mx-auto max-w-md transition-colors duration-300 group-hover:text-slate-700 text-slate-600">
      The sarees look even prettier in person. I picked one for my sister’s engagement and one for Diwali—both arrived well packed and right on time.
    </p>
<div className="h-px transition-all duration-300 group-hover:bg-slate-400 group-hover:w-32 w-24 mt-6 mr-auto mb-6 ml-auto bg-slate-200"></div>
<div className="text-xs tracking-widest text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-700">
      Ananya Verma
      <div className="mt-1">Bridesmaid</div>
</div>
<div className="mt-8 inline-flex items-center justify-center w-10 h-10 rounded-full border mx-auto transition-all duration-300 group-hover:border-slate-400 group-hover:text-slate-600 group-hover:bg-slate-50 group-hover:scale-110 border-slate-200 text-slate-400">
<svg className="lucide lucide-quote" data-lucide="quote" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
</div>

<div className="rounded-3xl ring-1 p-12 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 group cursor-pointer bg-white ring-slate-200 shadow-slate-900/5 hover:ring-slate-300">
<div className="w-20 h-20 mx-auto mb-8 rounded-full p-1 ring-1 transition-all duration-300 group-hover:ring-slate-300 group-hover:shadow-lg bg-white ring-slate-200">
<div className="w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
<img alt="Client avatar" className="w-full h-full object-cover" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=320"/>
</div>
</div>
<p className="leading-relaxed mx-auto max-w-md transition-colors duration-300 group-hover:text-slate-700 text-slate-600">
      I love how easy it is to shop by occasion. The styling photos helped me pick exactly what I needed for my cousin’s mehendi and sangeet.
    </p>
<div className="h-px transition-all duration-300 group-hover:bg-slate-400 group-hover:w-32 w-24 mt-6 mr-auto mb-6 ml-auto bg-slate-200"></div>
<div className="text-xs tracking-widest text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-700">
      Meera N.
      <div className="mt-1">Repeat Customer</div>
</div>
<div className="mt-8 inline-flex items-center justify-center w-10 h-10 rounded-full border mx-auto transition-all duration-300 group-hover:border-slate-400 group-hover:text-slate-600 group-hover:bg-slate-50 group-hover:scale-110 border-slate-200 text-slate-400">
<svg className="lucide lucide-quote" data-lucide="quote" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
</div>
</div>
<div className="hidden" id="testimonial-slider">
<div className="flex" id="testimonial-track"></div>
</div>
<div className="hidden items-center justify-center gap-4 mt-8">
<button id="prev-testimonial"></button>
<div id="testimonial-dots">
<button></button><button></button><button></button>
</div>
<button id="next-testimonial"></button>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 scroll-reveal visible mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="text-center mb-16 slide-up visible">
<p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Shop by Experience</p>
<h2 className="text-5xl sm:text-7xl font-light font-playfair tracking-tight text-gradient mb-6">Made Easy for You</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group hover-lift slide-up stagger-1 visible transition-all duration-500 hover:scale-105 rounded-3xl mt-0 mb-20 scale-hover">
<div className="relative glass overflow-hidden border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 border-slate-200/60 hover:bg-slate-900">
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider group-hover:text-white/70 transition-colors duration-500">Occasion Ready</span>
</div>
<h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-500 text-slate-800">Shop by Function</h3>
<p className="mb-6 leading-relaxed group-hover:text-white/80 transition-colors duration-500 text-slate-600">Wedding, sangeet, mehendi or festive puja—start with the occasion and find pieces curated just for that.</p>
<div className="mb-6 space-y-3">
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="group-hover:text-white/80 transition-colors duration-500 text-sm text-slate-600">Curated by colour &amp; vibe</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm group-hover:text-white/80 transition-colors duration-500 text-slate-600">Lookbook inspired pairings</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="group-hover:text-white/80 transition-colors duration-500 text-sm text-slate-600">Easy filters for fabric &amp; work</span>
</div>
</div>
<div className="mb-8">
<p className="group-hover:text-white/60 transition-colors duration-500 text-xs text-slate-500 mt-1">Perfect when you know the event, not the outfit.</p>
</div>
<a className="w-full inline-flex items-center justify-center glass transition-all duration-500 hover:shadow-xl font-medium rounded-2xl pt-4 pb-4 group-hover:bg-white group-hover:text-slate-900 hover:scale-105 transform text-white bg-slate-900" href="https://sanskritibybhoomi.in/" target="_blank">
                    Start Browsing
                </a>
</div>
</div>
</div>

<div className="group hover-lift slide-up stagger-2 visible rounded-3xl mb-12 scale-hover transition-all duration-500 hover:scale-105">
<div className="relative glass overflow-hidden border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-lg hover:shadow-2xl transition-all duration-500 bg-slate-900/90 border-slate-300/60 hover:bg-white/90">
<div className="absolute -top-8 left-1/2 -translate-x-1/2">
<span className="glass text-sm font-medium rounded-full pt-2 pr-4 pb-2 pl-4 group-hover:bg-slate-200 group-hover:text-slate-800 transition-colors duration-500 text-white bg-slate-800">Bestsellers</span>
</div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium uppercase tracking-wider group-hover:text-slate-600 transition-colors duration-500 text-white/60">Most Loved</span>
</div>
<h3 className="text-2xl font-semibold mb-4 group-hover:text-slate-900 transition-colors duration-500 text-white">Signature Sarees</h3>
<p className="leading-relaxed mb-6 group-hover:text-slate-600 transition-colors duration-500 text-white/60">Explore the pieces that sell out fastest—timeless colours, flattering drapes, and crowd-favourite borders.</p>
<div className="mb-6 space-y-3">
<div className="flex items-center gap-3">
<svg className="group-hover:text-slate-500 transition-colors duration-500 text-white/60" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm group-hover:text-slate-600 transition-colors duration-500 text-white/80">Carefully selected silhouettes</span>
</div>
<div className="flex items-center gap-3">
<svg className="group-hover:text-slate-500 transition-colors duration-500 text-white/60" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm group-hover:text-slate-600 transition-colors duration-500 text-white/80">Across silk, organza, georgette</span>
</div>
<div className="flex items-center gap-3">
<svg className="group-hover:text-slate-500 transition-colors duration-500 text-white/60" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm group-hover:text-slate-600 transition-colors duration-500 text-white/80">Easy-to-style colour stories</span>
</div>
</div>
<div className="mb-8">
<p className="text-xs mt-1 group-hover:text-slate-500 transition-colors duration-500 text-white/50">Ideal starting point if you're new to the brand.</p>
</div>
<a className="w-full inline-flex items-center justify-center glass transition-all duration-500 hover:shadow-xl font-medium rounded-2xl pt-4 pb-4 group-hover:bg-slate-900 group-hover:text-white hover:scale-105 transform text-slate-900 bg-white" href="https://sanskritibybhoomi.in/" target="_blank">
                    View Bestsellers
                </a>
</div>
</div>
</div>

<div className="group hover-lift slide-up stagger-3 visible rounded-3xl mb-12 scale-hover transition-all duration-500 hover:scale-105">
<div className="relative glass overflow-hidden border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 border-slate-200/60 hover:bg-slate-900">
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider group-hover:text-white/70 transition-colors duration-500">Premium</span>
</div>
<h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-500 text-slate-800">Designer &amp; Limited</h3>
<p className="mb-6 leading-relaxed group-hover:text-white/80 transition-colors duration-500 text-slate-600">Statement pieces in limited quantities—perfect for when you want something no one else has.</p>
<div className="mb-6 space-y-3">
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm group-hover:text-white/80 transition-colors duration-500 text-slate-600">Exclusive drops in small batches</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm group-hover:text-white/80 transition-colors duration-500 text-slate-600">Heavier work &amp; luxurious fabrics</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm group-hover:text-white/80 transition-colors duration-500 text-slate-600">Perfect for bridal trousseau</span>
</div>
</div>
<div className="mb-8">
<p className="text-xs text-slate-500 mt-1 group-hover:text-white/60 transition-colors duration-500">Check often—popular styles go fast.</p>
</div>
<a className="w-full inline-flex items-center justify-center glass rounded-2xl py-4 font-medium transition-all duration-500 hover:shadow-xl group-hover:bg-white group-hover:text-slate-900 hover:scale-105 transform bg-slate-900 text-white" href="https://sanskritibybhoomi.in/" target="_blank">
                    Explore Designer Edit
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 scroll-reveal visible mr-auto ml-auto pt-20 pr-4 pb-20 pl-4" id="contact">
<div className="relative glass overflow-hidden slide-up visible text-center bg-cover border rounded-3xl pt-12 pr-12 pb-12 pl-12 shadow-lg bg-center bg-[url(https://images.pexels.com/photos/4668530/pexels-photo-4668530.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800)] bg-white/80 border-slate-200/60">
<div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br rounded-full opacity-40 blur-2xl transform -translate-x-12 -translate-y-12 from-blue-100 to-indigo-200"></div>
</div></section></main>
    </>
  );
}
