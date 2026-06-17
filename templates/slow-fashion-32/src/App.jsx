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



        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        const hoverTriggers = document.querySelectorAll('.hover-trigger');

        window.addEventListener('mousemove', function(e) {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows exactly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with slight delay
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Add hover state to cursor
        hoverTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => {
                document.body.classList.add('hovering');
            });
            trigger.addEventListener('mouseleave', () => {
                document.body.classList.remove('hovering');
            });
        });

        // Intersection Observer for Reveal on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Special case for line dividers
                    if(entry.target.classList.contains('reveal-line')){
                        entry.target.style.width = '96px';
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-text, .reveal-img, .reveal-line').forEach(el => {
            observer.observe(el);
        });

        // Parallax Effect for Hero
        const heroSection = document.querySelector('header');
        const heroImg = document.getElementById('hero-img');
        const floatBadge = document.getElementById('float-badge');

        heroSection.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            if(heroImg) heroImg.style.transform = `scale(1.1) translateX(${x}px) translateY(${y}px)`;
            if(floatBadge) floatBadge.style.transform = `translateX(${x * 2}px) translateY(${y * 2}px)`;
        });
        
        heroSection.addEventListener('mouseleave', () => {
             if(heroImg) heroImg.style.transform = `scale(1.1) translateX(0) translateY(0)`;
             if(floatBadge) floatBadge.style.transform = `translateX(0) translateY(0)`;
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
      

<div className="cursor-dot hidden md:block" style={{left: '387px', top: '405px'}}></div>
<div className="cursor-outline hidden md:block"></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#2A332C]/80 border-b border-[#F3F0EB]/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<a className="serif text-2xl tracking-tight text-[#F3F0EB] hover-trigger relative z-50" href="#">Rinkuu Gopalani</a>
<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-light hover:text-[#D4A5A5] transition-colors hover-trigger" href="#philosophy">Philosophy</a>
<a className="text-sm font-light hover:text-[#D4A5A5] transition-colors hover-trigger" href="#craft">The Craft</a>
<a className="text-sm font-light hover:text-[#D4A5A5] transition-colors hover-trigger" href="#collection">Curated Works</a>
<a className="hover-trigger px-5 py-2 border border-[#F3F0EB]/20 rounded-full text-xs uppercase tracking-widest hover:bg-[#F3F0EB] hover:text-[#2A332C] transition-all duration-300" href="#contact">
                    Inquire
                </a>
</div>
<button className="md:hidden text-[#F3F0EB] hover-trigger">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden min-h-screen flex items-center">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4A5A5] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center w-full">
<div className="lg:col-span-7 space-y-8 relative z-10" id="hero-text">
<div className="reveal-text inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A5A5]/5 border border-[#D4A5A5]/10 text-[#D4A5A5] text-xs uppercase tracking-widest">
<span className="w-1.5 h-1.5 rounded-full bg-[#D4A5A5] animate-pulse"></span>
                    Mumbai Based Studio
                </div>
<h1 className="serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter font-light text-[#F3F0EB] reveal-text delay-100">
                    Soul woven <br/>
<span className="italic text-[#D4A5A5]">into fabric.</span>
</h1>
<p className="text-lg md:text-xl font-light text-[#F3F0EB]/70 max-w-xl leading-relaxed reveal-text delay-200">
                    An antidote to the ephemeral. We create unique, hand-embellished shirts, dresses, and linens designed to age with grace. Sustainable luxury, born in Mumbai.
                </p>
<div className="flex flex-wrap items-center gap-6 pt-4 reveal-text delay-300">
<button className="hover-trigger group flex items-center gap-3 text-[#F3F0EB] border-b border-[#F3F0EB]/30 pb-1 hover:border-[#D4A5A5] hover:text-[#D4A5A5] transition-all">
<span className="text-lg font-medium">Explore the artistry</span>
<iconify-icon className="group-hover:translate-x-2 transition-transform duration-300" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="lg:col-span-5 parallax-container relative">

<div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden bg-[#354038] reveal-img delay-300">
<img alt="Hand embroidered details" className="object-cover w-full h-full opacity-80 scale-110 transition-transform duration-[2s] ease-out" id="hero-img" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2A332C] via-transparent to-transparent"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-[#D4A5A5] text-[#2A332C] p-6 max-w-xs shadow-2xl reveal-text delay-300 z-20" id="float-badge">
<p className="serif text-2xl italic leading-none">"Slow fashion is not a trend, it is a return to value."</p>
</div>
</div>
</div>
</header>

<section className="py-24 bg-[#F3F0EB] text-[#2A332C]" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
<div className="sticky top-32">
<h2 className="serif text-5xl md:text-6xl tracking-tight font-light mb-6 reveal-text">
                        Conscious <br/> Creation.
                    </h2>
<div className="h-px w-0 bg-[#D4A5A5] mb-8 reveal-line transition-all duration-1000"></div>
<p className="text-lg text-[#2A332C]/80 leading-relaxed mb-6 reveal-text delay-100">
                        In a world of fast fashion, Rinkuu Gopalani stands still. Our studio in Mumbai is a sanctuary where time is respected. Every bead, every stitch, and every fold is a deliberate act of art.
                    </p>
<ul className="space-y-6 mt-8">
<li className="flex items-center gap-4 reveal-text delay-200 group">
<div className="p-2 rounded-full bg-[#D4A5A5]/10 text-[#8B5E5E] group-hover:bg-[#8B5E5E] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium">Sustainably Sourced Materials</span>
</li>
<li className="flex items-center gap-4 reveal-text delay-300 group">
<div className="p-2 rounded-full bg-[#D4A5A5]/10 text-[#8B5E5E] group-hover:bg-[#8B5E5E] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:hand-shake-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium">Empowering Local Artisans</span>
</li>
<li className="flex items-center gap-4 reveal-text delay-300 group">
<div className="p-2 rounded-full bg-[#D4A5A5]/10 text-[#8B5E5E] group-hover:bg-[#8B5E5E] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:crown-star-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium">One-of-a-kind Pieces</span>
</li>
</ul>
</div>
<div className="space-y-12">

<div className="group relative overflow-hidden reveal-img hover-trigger">
<div className="overflow-hidden">
<img alt="Denim Embellishment" className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&amp;w=1966&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4">
<h3 className="serif text-3xl font-light">Embellished Denim</h3>
<p className="text-lg text-[#2A332C]/60 mt-2">Giving new life to robust fabrics through delicate handwork.</p>
</div>
</div>

<div className="group relative overflow-hidden pt-8 reveal-img delay-200 hover-trigger">
<div className="overflow-hidden">
<img alt="Linen Texture" className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&amp;w=1957&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4">
<h3 className="serif text-3xl font-light">Organic Linens</h3>
<p className="text-lg text-[#2A332C]/60 mt-2">Breathable, natural fibers adorned with subtle, shimmering details.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#2f3a32] border-t border-[#F3F0EB]/5 overflow-hidden" id="craft">
<div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end reveal-text">
<div>
<span className="text-[#D4A5A5] tracking-widest text-xs uppercase mb-2 block">The Methodology</span>
<h2 className="serif text-4xl md:text-5xl text-[#F3F0EB]">The Hands Behind the Art</h2>
</div>
<p className="text-[#F3F0EB]/60 max-w-md text-lg mt-6 md:mt-0 text-right md:text-left">
                We believe in transparency. Witness the journey from raw material to wearable art.
            </p>
</div>

<div className="flex items-center gap-2 px-6 mb-4 text-[#D4A5A5]/60 text-xs uppercase tracking-widest md:hidden">
<span>Scroll</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="flex overflow-x-auto hide-scrollbar gap-8 px-6 pb-12 snap-x hover-trigger cursor-move" id="process-scroll">

<div className="min-w-[350px] md:min-w-[400px] snap-center bg-[#2A332C] border border-[#F3F0EB]/10 p-8 flex flex-col justify-between h-[500px] group hover:border-[#D4A5A5]/30 transition-colors reveal-text delay-100">
<div>
<span className="text-6xl serif text-[#F3F0EB]/10 group-hover:text-[#D4A5A5]/20 transition-colors duration-500 block transform group-hover:-translate-y-2">01</span>
<h3 className="serif text-3xl text-[#F3F0EB] mt-4 mb-4">Sourcing</h3>
<p className="text-lg text-[#F3F0EB]/60">We scout for the finest vintage denim and pure linens, ensuring a base that is both durable and characterful.</p>
</div>
<div className="w-full h-48 bg-[#3A453C] overflow-hidden mt-6 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="min-w-[350px] md:min-w-[400px] snap-center bg-[#2A332C] border border-[#F3F0EB]/10 p-8 flex flex-col justify-between h-[500px] group hover:border-[#D4A5A5]/30 transition-colors reveal-text delay-200">
<div>
<span className="text-6xl serif text-[#F3F0EB]/10 group-hover:text-[#D4A5A5]/20 transition-colors duration-500 block transform group-hover:-translate-y-2">02</span>
<h3 className="serif text-3xl text-[#F3F0EB] mt-4 mb-4">Design</h3>
<p className="text-lg text-[#F3F0EB]/60">Rinkuu sketches motifs inspired by Mumbai's architecture and nature, creating a blueprint for embroidery.</p>
</div>
<div className="w-full h-48 bg-[#3A453C] overflow-hidden mt-6 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>

<div className="min-w-[350px] md:min-w-[400px] snap-center bg-[#2A332C] border border-[#F3F0EB]/10 p-8 flex flex-col justify-between h-[500px] group hover:border-[#D4A5A5]/30 transition-colors reveal-text delay-300">
<div>
<span className="text-6xl serif text-[#F3F0EB]/10 group-hover:text-[#D4A5A5]/20 transition-colors duration-500 block transform group-hover:-translate-y-2">03</span>
<h3 className="serif text-3xl text-[#F3F0EB] mt-4 mb-4">Embellishment</h3>
<p className="text-lg text-[#F3F0EB]/60">Hours of hand-stitching beads, sequins, and threads. No machines, just the rhythm of the needle.</p>
</div>
<div className="w-full h-48 bg-[#3A453C] overflow-hidden mt-6 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>

<div className="min-w-[350px] md:min-w-[400px] snap-center bg-[#2A332C] border border-[#F3F0EB]/10 p-8 flex flex-col justify-between h-[500px] group hover:border-[#D4A5A5]/30 transition-colors reveal-text delay-300">
<div>
<span className="text-6xl serif text-[#F3F0EB]/10 group-hover:text-[#D4A5A5]/20 transition-colors duration-500 block transform group-hover:-translate-y-2">04</span>
<h3 className="serif text-3xl text-[#F3F0EB] mt-4 mb-4">Delivery</h3>
<p className="text-lg text-[#F3F0EB]/60">Packaged in recycled cotton, shipped worldwide with a certificate of authenticity for your records.</p>
</div>
<div className="w-full h-48 bg-[#3A453C] overflow-hidden mt-6 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&amp;w=1978&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#2A332C]" id="collection">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal-text">
<h2 className="serif text-4xl md:text-5xl text-[#F3F0EB] mb-4">Curated Exclusives</h2>
<p className="text-lg text-[#F3F0EB]/60 max-w-2xl mx-auto">Not just clothes. These are heirlooms. <br/>Displayed for appreciation of the craft.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-[3/4] cursor-none reveal-img hover-trigger">
<div className="absolute inset-0 bg-[#3A453C] overflow-hidden">
<img alt="Product" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#2A332C] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[#D4A5A5] text-xs tracking-widest uppercase">Signature Collection</span>
<h3 className="serif text-3xl text-[#F3F0EB] mt-1">The Midnight Shirt</h3>
<p className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-3 text-[#F3F0EB]/70 text-lg transition-all duration-500">
                            Hand-beaded collar on vintage silk.
                        </p>
</div>
</div>

<div className="group relative aspect-[3/4] lg:mt-12 cursor-none reveal-img delay-100 hover-trigger">
<div className="absolute inset-0 bg-[#3A453C] overflow-hidden">
<img alt="Product" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1572804013427-4d7ca7268217?q=80&amp;w=1965&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#2A332C] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[#D4A5A5] text-xs tracking-widest uppercase">Limited Edition</span>
<h3 className="serif text-3xl text-[#F3F0EB] mt-1">Flora Dress</h3>
<p className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-3 text-[#F3F0EB]/70 text-lg transition-all duration-500">
                            40 hours of sequin embellishment.
                        </p>
</div>
</div>

<div className="group relative aspect-[3/4] cursor-none reveal-img delay-200 hover-trigger">
<div className="absolute inset-0 bg-[#3A453C] overflow-hidden">
<img alt="Product" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#2A332C] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[#D4A5A5] text-xs tracking-widest uppercase">Denim</span>
<h3 className="serif text-3xl text-[#F3F0EB] mt-1">The Rose Jacket</h3>
<p className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-3 text-[#F3F0EB]/70 text-lg transition-all duration-500">
                            Upcycled denim with rose threadwork.
                        </p>
</div>
</div>
</div>
<div className="flex justify-center mt-16 reveal-text">
<a className="hover-trigger inline-flex items-center gap-3 px-8 py-4 border border-[#F3F0EB]/20 text-[#F3F0EB] text-sm uppercase tracking-widest hover:bg-[#D4A5A5] hover:border-[#D4A5A5] hover:text-[#2A332C] transition-all duration-300" href="#contact">
                    Request Lookbook
                </a>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#D4A5A5] text-[#2A332C]">
<div className="max-w-4xl mx-auto text-center reveal-text">
<iconify-icon className="mx-auto mb-8 text-[#2A332C]/30" height="48" icon="solar:quote-up-square-linear" width="48"></iconify-icon>
<h2 className="serif text-4xl md:text-6xl leading-tight mb-8 font-light">
                "Rinkuu's pieces are not just garments; they are wearable stories. The weight of the embroidery feels like a hug from history."
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-px bg-[#2A332C]/30"></div>
<span className="text-sm font-medium uppercase tracking-widest">A Client from South Bombay</span>
<div className="w-12 h-px bg-[#2A332C]/30"></div>
</div>
</div>
</section>

<footer className="bg-[#252C26] text-[#F3F0EB] pt-24 pb-12 border-t border-[#F3F0EB]/10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
<div className="lg:col-span-2 reveal-text">
<h2 className="serif text-3xl mb-6">Rinkuu Gopalani</h2>
<p className="text-lg text-[#F3F0EB]/60 max-w-sm mb-8">
                        Creating sustainable, hand-embellished legacies from our studio in Mumbai. Join us in the slow fashion movement.
                    </p>
<div className="flex gap-4">
<a className="hover-trigger w-10 h-10 rounded-full border border-[#F3F0EB]/20 flex items-center justify-center hover:bg-[#D4A5A5] hover:text-[#2A332C] hover:border-[#D4A5A5] transition-all" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="hover-trigger w-10 h-10 rounded-full border border-[#F3F0EB]/20 flex items-center justify-center hover:bg-[#D4A5A5] hover:text-[#2A332C] hover:border-[#D4A5A5] transition-all" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="reveal-text delay-100">
<h4 className="text-sm uppercase tracking-widest text-[#D4A5A5] mb-6">Studio</h4>
<p className="text-[#F3F0EB]/60 text-lg leading-relaxed">
                        Bandra West,<br/>
                        Mumbai, Maharashtra<br/>
                        400050, India
                    </p>
</div>
<div className="reveal-text delay-200">
<h4 className="text-sm uppercase tracking-widest text-[#D4A5A5] mb-6">Contact</h4>
<ul className="space-y-3">
<li><a className="hover-trigger text-[#F3F0EB]/60 hover:text-[#D4A5A5] text-lg transition-colors" href="#">hello@rinkuugopalani.com</a></li>
<li><a className="hover-trigger text-[#F3F0EB]/60 hover:text-[#D4A5A5] text-lg transition-colors" href="#">+91 98200 XXXXX</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#F3F0EB]/10 reveal-text">
<p className="text-[#F3F0EB]/40 text-sm">© 2024 Rinkuu Gopalani. All rights reserved.</p>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="hover-trigger text-[#F3F0EB]/40 hover:text-[#F3F0EB] text-sm" href="#">Privacy</a>
<a className="hover-trigger text-[#F3F0EB]/40 hover:text-[#F3F0EB] text-sm" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
