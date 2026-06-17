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



tailwind.config = {
theme: {
extend: {
colors: {
primary: "#1c1917",
secondary: "#57534e",
background: "#F9F8F6",
surface: "#F9F8F6",
line: "#e7e5e4",
warm: "#F6F4F1",
},
fontFamily: {
sans: ["DM Sans", "sans-serif"],
serif: ["Playfair Display", "serif"],
},
letterSpacing: {
tightest: "-0.03em",
widest: "0.15em",
},
transitionDuration: {
400: "400ms",
600: "600ms",
},
scale: {
103: "1.03",
},
},
},
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero Headline Reveal
  gsap.to("h1", { opacity: 1, duration: 0.2 });
  gsap.to(".hero-word", {
    y: "0%",
    duration: 1.4,
    ease: "power4.out",
    stagger: 0.06,
    delay: 0.2
  });

  // 2. Hero Image Parallax
  gsap.to(".hero-bg-img", {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
      trigger: "header",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // 3. Search Bar Intro
  gsap.to(".hero-search-bar", {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 1.2,
    delay: 0.8,
    ease: "power3.out"
  });

  // 4. Section Reveal System
  gsap.utils.toArray(".gsap-section").forEach(section => {
    gsap.fromTo(section, 
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // 5. Amenity Rows Stagger
  gsap.utils.toArray(".amenity-row").forEach(row => {
    gsap.to(row, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: row,
            start: "top 90%"
        }
    });
  });

  // 6. Residence Cards Stagger
  gsap.to(".residence-card", {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".residence-card",
        start: "top 85%"
    }
  });

  // 7. Editorial Image Depth
  gsap.to(".editorial-img", {
    scale: 1.08,
    ease: "none",
    scrollTrigger: {
      trigger: ".editorial-container",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.2
    }
  });

  // 8. Navbar Micro Transition
  const nav = document.getElementById("navbar");
  ScrollTrigger.create({
    start: "top -50",
    onUpdate: (self) => {
        if(self.scroll() > 50) {
            gsap.to(nav, {backgroundColor: "rgba(255, 255, 255, 0.85)", boxShadow: "0 6px 24px rgba(0,0,0,0.03)", backdropFilter: "blur(12px)", duration: 0.4});
        } else {
            gsap.to(nav, {backgroundColor: "rgba(255, 255, 255, 0.6)", boxShadow: "none", backdropFilter: "blur(0px)", duration: 0.4});
        }
    }
  });
});


 const heroData = [ { title: "The Royal Theatre Facade", price: "Exterior Architectural", desc: "A comprehensive architectural lighting solution enhancing the historic facade. Features custom cold cathode and weather-resistant LED mapping, designed for impact and durability.", specs: ["Brass & Steel", "IP67 Rated", "50,000 Hrs"], img: "https://images.unsplash.com/photo-1572025211293-9c8e14b1c7fc?auto=format&fit=crop&q=80&w=1600" }, { title: "Boutique Hotel Lobby", price: "Interior Neon", desc: "Bespoke artistic installation designed to serve as the centerpiece of the main lobby. Hand-bent neon over a polished perspex backplate.", specs: ["Custom Neon", "Hand-Crafted", "Artistic"], img: "https://images.unsplash.com/photo-1542442828-287217bfb87f?auto=format&fit=crop&q=80&w=1600" }, { title: "Retail Park Signage", price: "Commercial LED", desc: "High-visibility LED signage designed for durability and brand consistency across multiple retail touchpoints. Fully supplied, fitted, and guaranteed.", specs: ["Acrylic & Steel", "High Visibility", "Fitted"], img: "https://images.unsplash.com/photo-1563240619-44ec0047592c?auto=format&fit=crop&q=80&w=1600" } ]; function updateHero(index) { const img = document.getElementById('hero-img'); const details = document.getElementById('hero-details'); const title = document.getElementById('hero-title'); const price = document.getElementById('hero-price'); const desc = document.getElementById('hero-desc'); const spec1 = document.getElementById('hero-spec-1'); const spec2 = document.getElementById('hero-spec-2'); const spec3 = document.getElementById('hero-spec-3'); const selectors = document.querySelectorAll('.hero-selector'); img.style.transition = 'opacity 200ms cubic-bezier(0.22, 1, 0.36, 1)'; details.style.transition = 'opacity 150ms cubic-bezier(0.22, 1, 0.36, 1)'; img.style.opacity = '0'; details.style.opacity = '0'; selectors.forEach((sel, i) => { if (i === index) { sel.className = "text-left text-xs uppercase tracking-widest text-primary border-b border-primary/40 pb-1 transition-all duration-300 hero-selector"; } else { sel.className = "text-left text-xs uppercase tracking-widest text-secondary/60 hover:text-primary transition-all duration-300 hero-selector"; } }); setTimeout(() => { img.src = heroData[index].img; title.innerText = heroData[index].title; price.innerText = heroData[index].price; desc.innerText = heroData[index].desc; spec1.innerText = heroData[index].specs[0]; spec2.innerText = heroData[index].specs[1]; spec3.innerText = heroData[index].specs[2]; img.style.transition = 'opacity 250ms cubic-bezier(0.22, 1, 0.36, 1)'; details.style.transition = 'opacity 250ms cubic-bezier(0.22, 1, 0.36, 1)'; requestAnimationFrame(() => { img.style.opacity = '1'; details.style.opacity = '1'; }); }, 200); } 
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
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out backdrop-blur-xl bg-white/60 border-b border-black/5" id="navbar" style={{backdropFilter: 'blur(12px)', boxShadow: 'rgba(0, 0, 0, 0.03) 0px 6px 24px', backgroundColor: 'rgba(255, 255, 255, 0.85)'}}>
<div className="w-full max-w-7xl mx-auto px-6 md:px-8 h-auto md:h-[72px] flex flex-col md:flex-row items-center justify-between py-4 md:py-0 gap-4 md:gap-0">

<div className="flex md:justify-start md:gap-8 lg:gap-12 md:w-1/3 order-2 md:order-1 flex-wrap w-full gap-x-6 gap-y-6 items-center justify-center">
<a className="text-xs uppercase tracking-widest font-medium text-primary/80 hover:text-primary/50 transition-colors duration-300" href="#">
            Services
          </a>
<a className="text-xs uppercase tracking-widest font-medium text-primary/80 hover:text-primary/50 transition-colors duration-300" href="#">
            Gallery
          </a>
</div>

<div className="flex justify-center w-full md:w-1/3 order-1 md:order-2">
<a className="font-serif text-xl md:text-2xl font-medium tracking-tight text-primary" href="#">
            MODERNEON
          </a>
</div>

<div className="flex items-center justify-center md:justify-end gap-6 md:gap-8 lg:gap-12 w-full md:w-1/3 order-3 md:order-3">
<a className="text-xs uppercase tracking-widest font-medium text-primary/80 hover:text-primary/50 transition-colors duration-300" href="#">
            About
          </a>
<a className="border border-primary/30 px-5 py-2 text-xs uppercase tracking-widest font-medium rounded-[2px] hover:bg-primary hover:text-white transition-all duration-300" href="#">
            Contact Us
          </a>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Bespoke Neon Installation" className="w-full h-full object-cover hero-bg-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b82b380-902a-4947-8e0f-0d7767f29654_1600w.webp"/>
<div className="absolute inset-0 bg-black/30"></div>
<div className="bg-gradient-to-t from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 w-full max-w-[1400px] mx-auto fade-in-up">
<div className="max-w-4xl">
<span className="block text-xs uppercase tracking-widest text-white/80 font-sans mb-6">
            London, United Kingdom
          </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif tracking-tight leading-[1.1] mb-6 opacity-0"><span className="block overflow-hidden"><span className="inline-block overflow-hidden align-top"><span className="inline-block hero-word transform translate-y-full">Bespoke</span></span> <span className="inline-block overflow-hidden align-top"><span className="inline-block hero-word transform translate-y-full">Lighting</span></span> <span className="inline-block overflow-hidden align-top"><span className="inline-block hero-word transform translate-y-full">&amp;</span></span></span><span className="block overflow-hidden"><span className="inline-block overflow-hidden align-top"><span className="inline-block hero-word transform translate-y-full">Signage</span></span> <span className="inline-block overflow-hidden align-top"><span className="inline-block hero-word transform translate-y-full">Excellence.</span></span></span></h1>
<p className="text-white/90 text-sm md:text-base font-sans font-light mb-12 max-w-lg">
            Neon &amp; LED signmakers specialising in commercial, indoor, and exterior lighting for over 50 years.
          </p>

<div className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2px] px-8 py-6 flex flex-col md:flex-row items-center gap-6 max-w-5xl hero-search-bar opacity-0 translate-y-10 scale-95 origin-center">
<div className="w-full md:flex-1 group cursor-pointer">
<span className="block text-white/70 text-xs uppercase tracking-widest mb-2 group-hover:text-white transition-colors duration-300">
                Project Sector
              </span>
<div className="flex items-center justify-between border-b border-white/30 pb-2 group-hover:border-white transition-colors duration-300">
<span className="text-white text-sm font-light">
                  Commercial Retail
                </span>
<iconify-icon className="text-white/70 group-hover:text-white" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:flex-1 group cursor-pointer">
<span className="block text-white/70 text-xs uppercase tracking-widest mb-2 group-hover:text-white transition-colors duration-300">
                Lighting Type
              </span>
<div className="flex items-center justify-between border-b border-white/30 pb-2 group-hover:border-white transition-colors duration-300">
<span className="text-white text-sm font-light">Custom Neon</span>
<iconify-icon className="text-white/70 group-hover:text-white" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:flex-1 group cursor-pointer">
<span className="block text-white/70 text-xs uppercase tracking-widest mb-2 group-hover:text-white transition-colors duration-300">
                Environment
              </span>
<div className="flex items-center justify-between border-b border-white/30 pb-2 group-hover:border-white transition-colors duration-300">
<span className="text-white text-sm font-light">Exterior Facade</span>
<iconify-icon className="text-white/70 group-hover:text-white" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:flex-1 group cursor-pointer">
<span className="block text-white/70 text-xs uppercase tracking-widest mb-2 group-hover:text-white transition-colors duration-300">
                Service
              </span>
<div className="flex items-center justify-between border-b border-white/30 pb-2 group-hover:border-white transition-colors duration-300">
<span className="text-white text-sm font-light">Supply &amp; Fit</span>
<iconify-icon className="text-white/70 group-hover:text-white" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:w-auto mt-4 md:mt-0">
<button className="w-full text-xs uppercase tracking-widest bg-white text-primary px-6 py-3 rounded-[2px] font-medium hover:bg-primary hover:text-white transition-all duration-400">
                Request a Quote
              </button>
</div>
</div>
</div>
</div>
</header>

<section className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto gsap-section">
<div className="flex flex-col md:flex-row md:gap-24 gap-x-12 gap-y-12 items-start">
<div className="w-full md:w-1/4 pt-2 border-t border-primary">
<span className="block text-xs uppercase tracking-widest mt-4">
            01 — Heritage &amp; Craft
          </span>
</div>
<div className="md:w-3/4 w-full">
<h2 className="text-3xl md:text-5xl font-serif leading-tight mb-10 font-light text-primary max-w-3xl">
            For over 50 years, Moderneon has built a reputation for providing high-quality neon signage to businesses globally.
          </h2>
<div className="border-t border-line py-6 mb-10 flex flex-col md:flex-row gap-4 md:gap-12 md:items-center">
<span className="text-xs uppercase tracking-widest text-secondary font-medium">
              Supplied and fitted
            </span>
<span className="text-xs uppercase tracking-widest text-secondary font-medium">
              Repairs and maintenance
            </span>
<span className="text-xs uppercase tracking-widest text-secondary font-medium">
              Up to 50,000 hours lifespan
            </span>
</div>
<div className="w-full aspect-[21/9] overflow-hidden rounded-[2px] border border-line mb-10 img-zoom-container group">
<img alt="Neon Fabrication Craft" className="img-zoom transition-all duration-1000 w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0909f66d-5b70-4306-9b60-b98007815659_1600w.webp"/>
</div>
<div className="max-w-2xl">
<p className="text-secondary font-light leading-relaxed mb-8">
              We handle everything from design and fitting to repair and maintenance. We work with premium materials like stainless steel, copper, brass, acrylic, and perspex, utilizing laser cutting for exceptional fine detail. Our products perfectly suit retail, hospitality, museums, and cruise liners.
            </p>
<a className="inline-block text-xs uppercase tracking-widest border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors font-medium" href="#">
              View Our Expertise
            </a>
</div>
</div>
</div>
</section>
<div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
<div className="w-full border-t border-line relative flex justify-center">
<span className="absolute top-0 -translate-y-1/2 bg-background px-4 text-xs uppercase tracking-widest text-secondary/60">
          Next — Our Impact
        </span>
</div>
</div>

<section className="md:pt-32 md:pb-48 md:px-12 gsap-section w-full max-w-[1400px] mr-auto ml-auto pt-20 pr-6 pb-32 pl-6 relative">
<div className="grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-7">
<div className="aspect-[16/9] w-full overflow-hidden relative border border-line shadow-[0_18px_60px_rgba(0,0,0,0.06)] group">
<img alt="Exterior Neon Illumination" className="transform transition duration-700 ease-out group-hover:scale-[1.02] group-hover:brightness-105 group-hover:contrast-105 group-hover:saturate-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1618143416214-16501f28d943?w=1600&amp;q=80"/>
<div className="absolute bottom-4 left-4 z-10 bg-white/75 backdrop-blur-sm border border-black/10 px-4 py-2 rounded-[2px] shadow-sm">
<span className="text-xs uppercase tracking-widest text-primary font-medium">
                Theatrical Exterior — London, UK
              </span>
</div>
</div>
</div>
<div "="" className="md:col-span-5 md:pl-16 md:-translate-y-4 max-w-md">
<span className="block text-xs uppercase tracking-widest mb-6 text-secondary">
            02 — Our Impact
          </span>
<h3 className="font-serif text-3xl md:text-4xl mb-6 font-light leading-tight tracking-tight">
            Decades of illuminated excellence.
          </h3>
<p className="text-secondary font-light leading-relaxed mb-8">
            Every project is personalised to the client’s vision and needs. Whether it's enhancing theatre exteriors, styling hotel interiors, or creating bespoke artistic installations, we deliver guaranteed quality for both domestic and international clients.
          </p>

<div className="border-t border-line pt-6 mt-8 mb-10 grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-4">
<div className="flex items-baseline gap-2">
<span className="text-xs uppercase tracking-widest text-secondary font-medium shrink-0">50+</span>
<span className="text-xs text-secondary/40 font-light">—</span>
<span className="text-sm text-primary font-light">Years experience</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-xs uppercase tracking-widest text-secondary font-medium shrink-0">180+</span>
<span className="text-xs text-secondary/40 font-light">—</span>
<span className="text-sm text-primary font-light">Light fitting types</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-xs uppercase tracking-widest text-secondary font-medium shrink-0">800+</span>
<span className="text-xs text-secondary/40 font-light">—</span>
<span className="text-sm text-primary font-light">Completed projects</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-xs uppercase tracking-widest text-secondary font-medium shrink-0">100%</span>
<span className="text-xs text-secondary/40 font-light">—</span>
<span className="text-sm text-primary font-light">Quality guaranteed</span>
</div>
</div>
<div className="border-t border-line mt-10 pt-6 mb-10 text-center md:text-left">
<span className="text-xs uppercase tracking-widest text-secondary/60 font-light">
              Design • Fitting • Maintenance • Repair
            </span>
</div><div className="flex flex-col items-start gap-4">
<a className="text-xs uppercase tracking-widest border border-primary/60 px-8 py-3 rounded-[2px] inline-block hover:bg-primary hover:text-white transition-colors duration-600" href="#">
              View Our Gallery
            </a>
<a className="text-xs uppercase tracking-widest text-secondary/70 border-b border-secondary/30 hover:border-secondary hover:text-secondary transition-colors pb-0.5" href="#">
              Discuss a custom installation
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white gsap-section">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-24 items-start">
<div className="w-full md:w-1/4 pt-2 border-t border-primary">
<span className="block text-xs uppercase tracking-widest mt-4">
        03 — Products &amp; Services
      </span>
</div>
<div className="w-full md:w-3/4"><div className="mb-12">
<h2 className="font-serif text-3xl md:text-5xl font-light text-primary mb-6 leading-tight">
              Bespoke artistic designs.
            </h2>
<p className="text-secondary font-light text-sm md:text-base max-w-xl leading-relaxed">
              We create lighting solutions that enhance theatre exteriors, stylish interiors, and bespoke artistic installations. Our comprehensive services span residential, commercial, and creative sectors.
            </p>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 items-center border-t border-line/60 py-12 md:py-16 amenity-row opacity-0 translate-y-10">
<div className="w-full md:col-span-5">
<div className="aspect-[4/5] w-full overflow-hidden border border-line img-zoom-container group rounded-[2px]">
<img alt="Neon &amp; LED Signage" className="img-zoom w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1763022906226-ac3c883cc433?w=800&amp;q=80"/>
</div>
</div>
<div className="w-full md:col-span-7 md:pl-8">
<span className="block text-xs uppercase tracking-widest text-secondary/60 mb-8">Custom Illumination</span>
<ul className="space-y-8">
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Neon &amp; LED Signage</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs uppercase tracking-widest text-primary/40 hidden md:block">Bespoke</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Custom signs, logos, shapes and messaging</span>
</li>
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Premium Materials</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs uppercase tracking-widest text-primary/40 hidden md:block">Hand-Crafted</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Stainless steel, copper, brass, and acrylic finishes</span>
</li>
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Precision Fabrication</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs uppercase tracking-widest text-primary/40 hidden md:block">In-House</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Laser cutting for exceptional fine detail</span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 items-center border-t border-line/60 py-12 md:py-16">
<div className="w-full md:col-span-5 md:col-start-8">
<div className="aspect-[4/5] w-full overflow-hidden border border-line img-zoom-container group rounded-[2px]">
<img alt="Architectural Lighting" className="img-zoom w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="w-full md:col-span-7 md:col-start-1 md:row-start-1 md:pr-8">
<span className="block text-xs uppercase tracking-widest text-secondary/60 mb-8">Structural Enhancement</span>
<ul className="space-y-8">
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Architectural Lighting</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs uppercase tracking-widest text-primary/40 hidden md:block">Exterior</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Transformative lighting for building facades</span>
</li>
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Cold Cathode Solutions</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs uppercase tracking-widest text-primary/40 hidden md:block">High IP Rated</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Durable installations suitable for harsh environments</span>
</li>
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Long Lifespan Products</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs uppercase tracking-widest text-primary/40 hidden md:block">Reliable</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Lighting components lasting up to 50,000 hours</span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 items-center border-t border-line/60 py-12 md:py-16">
<div className="w-full md:col-span-5">
<div className="aspect-[4/5] w-full overflow-hidden border border-line img-zoom-container group rounded-[2px]">
<img alt="Repairs and Maintenance" className="img-zoom w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1761479353103-2d4072ea5037?w=800&amp;q=80"/>
</div>
</div>
<div className="w-full md:col-span-7 md:pl-8">
<span className="block text-xs uppercase tracking-widest text-secondary/60 mb-8">Ongoing Support</span>
<ul className="space-y-8">
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Comprehensive Repairs</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs uppercase tracking-widest text-primary/40 hidden md:block">Guaranteed</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Complete diagnostic and fixing services</span>
</li>
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Preventative Maintenance</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs uppercase tracking-widest text-primary/40 hidden md:block">Scheduled</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Ensuring your signage continues performing perfectly</span>
</li>
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Fully Supplied &amp; Fitted</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs uppercase tracking-widest text-primary/40 hidden md:block">End-to-end</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">From manufacturing workshop to final installation</span>
</li>
</ul>
</div>
</div></div>
</div>
</section>

<section className="py-32 md:py-40 bg-warm px-6 md:px-12 border-y border-line gsap-section">
<div className="max-w-[1400px] mr-auto ml-auto">

<div className="mb-16 md:mb-24 fade-in-up">
<span className="block text-xs uppercase tracking-widest text-primary/60 mb-6 font-medium">
            04 — Featured Installations
          </span>
<h2 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">
            Installations Defined by<br className="hidden md:block"/>
            Light and Precision.
          </h2>
<p className="text-secondary font-light max-w-3xl text-lg leading-relaxed">
            A selection of our bespoke projects, showcasing high IP rated products and quality controlled manufacturing for domestic and international clients.
          </p>
</div>

<div className="w-full mb-20 md:mb-24 fade-in-up delay-200"><div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

<div className="md:col-span-7 w-full h-[360px] md:h-[520px] relative rounded-[2px] overflow-hidden border border-line/50 group shadow-sm">
<img alt="Theatre Exterior Installation" className="w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-100" id="hero-img" src="https://images.unsplash.com/photo-1694901483679-905078f03a88?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
</div>

<div className="md:col-span-5 flex flex-col justify-center h-full md:border-l md:border-line/60 md:pl-10 relative">
<div className="flex flex-col items-start transition-opacity duration-300" id="hero-details">
<span className="inline-block border border-primary/20 bg-white text-primary px-3 py-1 text-xs uppercase tracking-widest rounded-full mb-6">
        Highlight Project
      </span>
<h3 className="font-serif text-3xl md:text-4xl text-primary font-light mb-2 tracking-tight" id="hero-title">The Royal Theatre Facade</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="font-serif text-3xl font-light text-primary" id="hero-price">Exterior Architectural</span>
</div>
<p className="text-secondary font-light text-sm md:text-base leading-relaxed mb-8 max-w-md min-h-[4.5rem]" id="hero-desc">
        A comprehensive architectural lighting solution enhancing the historic facade. Features custom cold cathode and weather-resistant LED mapping, designed for impact and durability.
      </p>
<div className="w-full grid grid-cols-3 gap-6 border-t border-line/60 pt-6 mb-8">
<div className="flex flex-col">
<span className="text-xs uppercase tracking-widest text-secondary/60 mb-1">Material</span>
<span className="font-sans text-sm font-medium text-primary" id="hero-spec-1">Brass &amp; Steel</span>
</div>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-widest text-secondary/60 mb-1">Durability</span>
<span className="font-sans text-sm font-medium text-primary" id="hero-spec-2">IP67 Rated</span>
</div>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-widest text-secondary/60 mb-1">Lifespan</span>
<span className="font-sans text-sm font-medium text-primary" id="hero-spec-3">50,000 Hrs</span>
</div>
</div>
<button className="w-full bg-primary text-white text-xs uppercase tracking-widest px-8 py-4 rounded-[2px] hover:bg-primary/90 transition-all duration-300 shadow-sm mb-10">
        Discuss a Similar Project
      </button>
<div className="flex flex-col gap-3 border-t border-line/60 pt-8 w-full">
<span className="text-xs uppercase tracking-widest text-secondary/40 mb-2">Select Installation</span>
<button className="text-left text-xs uppercase tracking-widest text-primary border-b border-primary/40 pb-1 transition-all duration-300 hero-selector" onclick="updateHero(0)">The Royal Theatre Facade</button>
<button className="text-left text-xs uppercase tracking-widest text-secondary/60 hover:text-primary transition-all duration-300 hero-selector" onclick="updateHero(1)">Boutique Hotel Lobby</button>
<button className="text-left text-xs uppercase tracking-widest text-secondary/60 hover:text-primary transition-all duration-300 hero-selector" onclick="updateHero(2)">Retail Park Signage</button>
</div>
</div>
</div>
</div></div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20 fade-in-up delay-400">
<div className="group cursor-pointer flex flex-col h-full hover:-translate-y-1 transition-all duration-300">
<div className="aspect-[4/5] w-full mb-6 overflow-hidden rounded-[2px] border border-line/50 relative shadow-sm transition-shadow duration-300">
<img alt="Restaurant Interior" className="w-full h-full object-cover transition-transform ease-out group-hover:scale-[1.05] group-hover:brightness-90 duration-300" src="https://images.unsplash.com/photo-1683831473807-e7186a88cf5e?w=800&amp;q=80"/>
<span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white border-b border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</span></div>
<div className="flex justify-between items-baseline mb-2">
<h4 className="font-serif text-2xl font-light text-primary group-hover:text-secondary transition-colors tracking-tight">Gastronomy Lounge</h4>
<span className="font-sans text-sm font-medium text-primary">Interior</span>
</div>
<div className="flex items-center gap-3 text-xs text-secondary/80 font-light mb-3">
<span>Neon Art</span>
<span className="text-line">•</span>
<span className="">Custom Logo</span>
<span className="text-line">•</span>
<span>Fitted</span>
</div>
<p className="text-xs text-secondary/80 font-light border-t border-line/40 pt-3">
      Artisan hand-bent neon serving as a dining centerpiece.
    </p>
</div>

<div className="group cursor-pointer flex flex-col h-full hover:-translate-y-1 transition-all duration-300 md:translate-y-5">
<div className="aspect-[4/5] w-full mb-6 overflow-hidden rounded-[2px] border border-line/50 relative shadow-sm transition-shadow duration-300">
<img alt="Museum Exhibit" className="w-full h-full object-cover transition-transform ease-out group-hover:scale-[1.05] group-hover:brightness-90 duration-300" src="https://images.unsplash.com/photo-1605291146086-b77bfee59a51?w=800&amp;q=80"/>
<span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white border-b border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</span></div>
<div className="flex justify-between items-baseline mb-2">
<h4 className="font-serif text-2xl font-light text-primary group-hover:text-secondary transition-colors tracking-tight">Contemporary Museum</h4>
<span className="font-sans text-sm font-medium text-primary">Exhibition</span>
</div>
<div className="flex items-center gap-3 text-xs text-secondary/80 font-light mb-3">
<span>Acrylic Finish</span>
<span className="text-line">•</span>
<span>LED</span>
<span className="text-line">•</span>
<span>Laser Cut</span>
</div>
<p className="text-xs text-secondary/80 font-light border-t border-line/40 pt-3">
      Subtle, long-lifespan architectural lighting for galleries.
    </p>
</div>

<div className="group cursor-pointer flex flex-col h-full hover:-translate-y-1 transition-all duration-300">
<div className="w-full mb-6 overflow-hidden rounded-[2px] border border-line/50 relative shadow-sm transition-shadow duration-300 aspect-[3/4]">
<img alt="Boutique Shop" className="w-full h-full object-cover transition-transform ease-out group-hover:scale-[1.05] group-hover:brightness-90 duration-300" src="https://images.unsplash.com/photo-1511443125380-a911ff773008?w=800&amp;q=80"/>
<span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white border-b border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</span></div>
<div className="flex justify-between items-baseline mb-2">
<h4 className="font-serif text-2xl font-light text-primary group-hover:text-secondary transition-colors tracking-tight">High Street Retail</h4>
<span className="font-sans text-sm font-medium text-primary">Commercial</span>
</div>
<div className="flex items-center gap-3 text-xs text-secondary/80 font-light mb-3">
<span>High IP Rating</span>
<span className="text-line">•</span>
<span>LED Signage</span>
<span className="text-line">•</span>
<span>Guaranteed</span>
</div>
<p className="text-xs text-secondary/80 font-light border-t border-line/40 pt-3">
      Eye-catching, highly durable illuminated storefront lettering.
    </p>
</div></div>

<div className="flex justify-center fade-in-up delay-200 mt-20">
<a className="inline-block text-xs uppercase tracking-widest border border-primary/40 px-10 py-4 rounded-[2px] hover:bg-primary hover:text-white transition-all duration-300 text-primary font-medium" href="#">
            Browse Full Gallery
          </a>
</div>
</div>
</section>

<section className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden bg-primary gsap-section">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
<div className="md:col-span-4 fade-in-up">
<span className="block text-xs uppercase tracking-widest text-white/60">
        05 — Client Perspective
      </span>
<h2 className="font-serif text-2xl md:text-3xl font-light text-white/90 leading-tight mt-6">
        Guaranteed quality, delivered daily.
      </h2>
<p className="text-sm md:text-base text-white/60 font-light leading-relaxed mt-5 max-w-sm">
        A few words from the businesses, theatres, and brands who trust our 50 years of illuminated expertise.
      </p>
</div>
<div className="md:col-span-8 w-full relative marquee-container">
<div className="marquee-fade-left"></div>
<div className="marquee-fade-right"></div>
<div className="marquee-track gap-5 md:gap-6">
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “The attention to detail in the brass finishing and the vibrancy of the neon completely transformed our hotel lobby. Exceptional craftsmanship.”
          </p>
<span className="block mt-5 text-xs uppercase tracking-widest text-white/60">
            — Eleanor V., Boutique Hotel Director
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “Moderneon handled the entire theatre exterior refit. From design to fitting and ongoing maintenance, their service is unmatched.”
          </p>
<span className="block mt-5 text-xs uppercase tracking-widest text-white/60">
            — David R., Theatre Operations
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “We needed high IP rated LED signage for our cruise liners. They delivered a product that withstands the elements and looks incredible.”
          </p>
<span className="block mt-5 text-xs uppercase tracking-widest text-white/60">
            — Sarah M., Maritime Procurement
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “Having a 50,000-hour lifespan guarantee gives us massive peace of mind. The custom acrylic signs perfectly matched our brand.”
          </p>
<span className="block mt-5 text-xs uppercase tracking-widest text-white/60">
            — Marcus L., Retail Group Head
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “The attention to detail in the brass finishing and the vibrancy of the neon completely transformed our hotel lobby. Exceptional craftsmanship.”
          </p>
<span className="block mt-5 text-xs uppercase tracking-widest text-white/60">
            — Eleanor V., Boutique Hotel Director
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “Moderneon handled the entire theatre exterior refit. From design to fitting and ongoing maintenance, their service is unmatched.”
          </p>
<span className="block mt-5 text-xs uppercase tracking-widest text-white/60">
            — David R., Theatre Operations
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “We needed high IP rated LED signage for our cruise liners. They delivered a product that withstands the elements and looks incredible.”
          </p>
<span className="block mt-5 text-xs uppercase tracking-widest text-white/60">
            — Sarah M., Maritime Procurement
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “Having a 50,000-hour lifespan guarantee gives us massive peace of mind. The custom acrylic signs perfectly matched our brand.”
          </p>
<span className="block mt-5 text-xs uppercase tracking-widest text-white/60">
            — Marcus L., Retail Group Head
          </span>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden bg-primary editorial-container">
<img alt="Bespoke Neon Light Detail" className="w-full h-full object-cover editorial-img origin-center" src="https://images.unsplash.com/photo-1619620585428-2f07377f41e9?w=2560&amp;q=80"/>

<div className="absolute bottom-36 md:bottom-52 left-6 right-6 md:left-16 md:right-auto text-center md:text-left z-30 max-w-lg">
<span className="block text-xs uppercase tracking-widest text-white/70 mb-6 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
          London — United Kingdom
        </span>
<h2 className="font-serif text-3xl md:text-5xl font-light text-white leading-[1.15] tracking-tight drop-shadow-[0_8px_26px_rgba(0,0,0,0.45)]">
          Where design and illumination meet.
        </h2>
</div>
</section>

<section className="relative -mt-24 md:-mt-40 bg-[#EDE7DE] px-6 pt-24 md:pt-28 pb-28 md:pb-36 z-20 gsap-section">
<div className="max-w-xl mx-auto text-center">
<p className="text-xs uppercase tracking-widest text-primary/60 mb-6">
          Ready for your next project — fully guaranteed products
        </p>
<h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-primary mb-6">
          Illuminate your vision.
        </h2>
<p className="text-sm md:text-base text-primary/70 font-light leading-relaxed mb-10">
          Contact us to discuss your custom neon or LED signage requirements with our lighting experts.
        </p>
<div className="flex flex-col items-center">
<a className="inline-flex items-center justify-center px-10 py-4 bg-primary text-white text-xs uppercase tracking-widest rounded-[2px] hover:bg-primary/90 transition-all duration-300" href="#">
            Request a Quote
          </a>
<a className="inline-block mt-6 text-primary/70 border-b border-primary/30 pb-1 hover:text-primary hover:border-primary/60 transition-all duration-300 text-xs uppercase tracking-widest" href="#">
            View Services Brochure
          </a>
</div>
<p className="text-xs text-primary/50 font-light mt-10">
          No obligation. Personal response from our team shortly.
        </p>
</div>
</section>

<footer className="border-line md:px-12 md:pt-14 border-t pt-28 pr-6 pb-14 pl-6"><div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
<div className="flex flex-col items-start">
<h3 className="font-serif text-3xl font-medium tracking-tight text-primary mb-8">
              MODERNEON
            </h3>
<p className="text-secondary text-sm font-light leading-relaxed max-w-[200px]">
              Neon &amp; LED Signmakers specialising in commercial, indoor, and exterior lighting for over 50 years.
            </p>
</div>
<div className="flex flex-col items-start">
<span className="block text-xs uppercase tracking-widest text-secondary/50 mb-8">
              Explore
            </span>
<ul className="space-y-3 text-sm font-light">
<li>
<a className="text-primary hover:text-secondary transition-colors duration-300" href="#">
                  Services &amp; Products
                </a>
</li>
<li>
<a className="text-primary hover:text-secondary transition-colors duration-300" href="#">
                  Installation Gallery
                </a>
</li>
<li>
<a className="text-primary hover:text-secondary transition-colors duration-300" href="#">
                  Repairs &amp; Maintenance
                </a>
</li>
</ul>
</div>
<div className="flex flex-col items-start">
<span className="block text-xs uppercase tracking-widest text-secondary/50 mb-8">
              Locations
            </span>
<div className="mb-8">
<span className="block text-xs uppercase tracking-widest text-secondary/50 mb-2">
                  Lighting House
                </span>
<p className="text-sm font-light text-primary leading-relaxed">
                Church Road<br/>
                London, SE19 2ET
              </p>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-secondary/50 mb-2">
                Main Office
              </span>
<p className="text-sm font-light text-primary leading-relaxed">
                Cromwell House, 27 Brabourne Rise<br/>
                Park Langley, Beckenham<br/>
                Kent, BR3 6SQ
              </p>
</div>
</div>
<div className="flex flex-col items-start">
<span className="block text-xs uppercase tracking-widest text-secondary/50 mb-8">
              Contact Us
            </span>
<p className="text-sm font-light text-secondary mb-6 leading-relaxed max-w-[240px]">
              Reach out for design, fitting, or repair inquiries.
            </p>
<form className="w-full relative group mb-8" onsubmit="event.preventDefault();">
<input className="w-full bg-transparent border-b border-line py-2 text-sm font-light text-primary placeholder:text-secondary/30 focus:outline-none focus:border-primary transition-colors duration-300 pr-12" placeholder="Email Address" type="email"/>
<button className="absolute right-0 bottom-2 text-xs uppercase tracking-widest text-primary hover:text-secondary transition-colors duration-300 border-b border-transparent hover:border-secondary pb-0.5" type="submit">
                Send
              </button>
</form>
<div className="flex flex-col gap-1">
<a className="text-sm font-light text-primary hover:text-secondary transition-colors duration-300" href="mailto:info@moderneon.co.uk">info@moderneon.co.uk</a>
<a className="text-sm font-light text-secondary hover:text-primary transition-colors duration-300" href="tel:02086509690">0208 650 9690</a>
</div>
</div>
</div>
<div className="border-t border-line mt-20 pt-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<div className="flex flex-col gap-3">
<span className="text-xs uppercase tracking-widest text-secondary/40">
              Quality controlled bespoke service.
            </span>
<p className="text-xs uppercase tracking-widest text-secondary/60">
              © 2018 Moderneon. Design by Avantis Digital.
            </p>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
<div className="flex gap-6 text-xs uppercase tracking-widest text-secondary/60">
<a className="hover:text-primary transition-colors duration-300" href="https://moderneonlight.com/">Visit Main Site</a>
</div>
<div className="flex gap-5 text-secondary/50">
<a className="hover:text-primary transition-colors duration-300" href="#">
<iconify-icon icon="solar:instagram-linear" width="18"></iconify-icon>
</a>
<a className="hover:text-primary transition-colors duration-300" href="#">
<iconify-icon icon="solar:facebook-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div></footer>


    </>
  );
}
