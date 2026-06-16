import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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


 const heroData = [ { title: "The Penthouse Collection", price: "$8,500", desc: "A dual-level residence featuring floor-to-ceiling glazing and panoramic canal views. Designed with a custom Italian kitchen system and private terrace access.", specs: ["2,450 SQ FT", "3 Bed / 3.5 Bath", "Wrap-around"], img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d23a2f1-8c2a-4bc1-8d3a-99ca1a44f878_3840w.jpg" }, { title: "Canal View Residence", price: "$6,200", desc: "Serene water views define this open-plan residence. Features oak herringbone flooring and a dedicated home office alcove.", specs: ["1,800 SQ FT", "2 Bed / 2 Bath", "Water View"], img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00cbf3d5-c57a-44b4-8ff1-669b2228ff09_3840w.jpg" }, { title: "Skyline Corner Suite", price: "$5,800", desc: "Perched high above the city, this corner unit offers dual-exposure light and a limestone-clad master bath.", specs: ["1,550 SQ FT", "2 Bed / 2 Bath", "City Views"], img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/412b2829-7d74-411a-a6e9-9b5116831d1e_3840w.jpg" } ]; function updateHero(index) { const img = document.getElementById('hero-img'); const details = document.getElementById('hero-details'); const title = document.getElementById('hero-title'); const price = document.getElementById('hero-price'); const desc = document.getElementById('hero-desc'); const spec1 = document.getElementById('hero-spec-1'); const spec2 = document.getElementById('hero-spec-2'); const spec3 = document.getElementById('hero-spec-3'); const selectors = document.querySelectorAll('.hero-selector'); img.style.transition = 'opacity 200ms cubic-bezier(0.22, 1, 0.36, 1)'; details.style.transition = 'opacity 150ms cubic-bezier(0.22, 1, 0.36, 1)'; img.style.opacity = '0'; details.style.opacity = '0'; selectors.forEach((sel, i) => { if (i === index) { sel.className = "text-left text-[10px] uppercase tracking-widest text-primary border-b border-primary/40 pb-1 transition-all duration-300 hero-selector"; } else { sel.className = "text-left text-[10px] uppercase tracking-widest text-secondary/60 hover:text-primary transition-all duration-300 hero-selector"; } }); setTimeout(() => { img.src = heroData[index].img; title.innerText = heroData[index].title; price.innerText = heroData[index].price; desc.innerText = heroData[index].desc; spec1.innerText = heroData[index].specs[0]; spec2.innerText = heroData[index].specs[1]; spec3.innerText = heroData[index].specs[2]; img.style.transition = 'opacity 250ms cubic-bezier(0.22, 1, 0.36, 1)'; details.style.transition = 'opacity 250ms cubic-bezier(0.22, 1, 0.36, 1)'; requestAnimationFrame(() => { img.style.opacity = '1'; details.style.opacity = '1'; }); }, 200); } 
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out backdrop-blur-xl bg-white/60 border-b border-black/5" id="navbar">
<div className="w-full max-w-7xl mx-auto px-6 md:px-8 h-auto md:h-[72px] flex flex-col md:flex-row items-center justify-between py-4 md:py-0 gap-4 md:gap-0">

<div className="flex md:justify-start md:gap-8 lg:gap-12 md:w-1/3 order-2 md:order-1 flex-wrap w-full gap-x-6 gap-y-6 items-center justify-center">
<a className="text-[10px] uppercase tracking-widest font-medium text-primary/80 hover:text-primary/50 transition-colors duration-300" href="#">
            Residences
          </a>
<a className="text-[10px] uppercase tracking-widest font-medium text-primary/80 hover:text-primary/50 transition-colors duration-300" href="#">
            Neighbourhoods
          </a>
</div>

<div className="flex justify-center w-full md:w-1/3 order-1 md:order-2">
<a className="font-serif text-xl md:text-2xl font-medium tracking-tight text-primary" href="#">
            NOVERA
          </a>
</div>

<div className="flex items-center justify-center md:justify-end gap-6 md:gap-8 lg:gap-12 w-full md:w-1/3 order-3 md:order-3">
<a className="text-[10px] uppercase tracking-widest font-medium text-primary/80 hover:text-primary/50 transition-colors duration-300" href="#">
            Lifestyle
          </a>
<a className="border border-primary/30 px-5 py-2 text-[10px] uppercase tracking-widest font-medium rounded-[2px] hover:bg-primary hover:text-white transition-all duration-300" href="#">
            Inquire
          </a>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Interior" className="w-full h-full object-cover hero-bg-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46011e44-1f9d-4c5e-b716-300b8ce1381e_3840w.jpg"/>
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>

<div className="relative z-10 w-full max-w-[1400px] mx-auto fade-in-up">
<div className="max-w-4xl">
<span className="block text-[10px] uppercase tracking-widest text-white/60 font-sans mb-6">
            Montreal, Quebec
          </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif tracking-tight leading-[1.1] mb-6 opacity-0"><span className="block overflow-hidden"><span className="inline-block overflow-hidden align-top"><span className="inline-block hero-word transform translate-y-full">Sanctuary</span></span> <span className="inline-block overflow-hidden align-top"><span className="inline-block hero-word transform translate-y-full">in</span></span> <span className="inline-block overflow-hidden align-top"><span className="inline-block hero-word transform translate-y-full">the</span></span></span><span className="block overflow-hidden"><span className="inline-block overflow-hidden align-top"><span className="inline-block hero-word transform translate-y-full">Heart</span></span> <span className="inline-block overflow-hidden align-top"><span className="inline-block hero-word transform translate-y-full">of</span></span> <span className="inline-block overflow-hidden align-top"><span className="inline-block hero-word transform translate-y-full">Montreal.</span></span></span></h1>
<p className="text-white/90 text-sm md:text-base font-sans font-light mb-12 max-w-lg">
            Premium rental residences designed for refined urban living.
          </p>

<div className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2px] px-8 py-6 flex flex-col md:flex-row items-center gap-6 max-w-5xl hero-search-bar opacity-0 translate-y-10 scale-95 origin-center">
<div className="w-full md:flex-1 group cursor-pointer">
<span className="block text-white/50 text-[10px] uppercase tracking-widest mb-2 group-hover:text-white transition-colors duration-300">
                Neighbourhood
              </span>
<div className="flex items-center justify-between border-b border-white/20 pb-2 group-hover:border-white transition-colors duration-300">
<span className="text-white text-sm font-light">
                  Neighbourhoods
                </span>
<iconify-icon className="text-white/70 group-hover:text-white" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:flex-1 group cursor-pointer">
<span className="block text-white/50 text-[10px] uppercase tracking-widest mb-2 group-hover:text-white transition-colors duration-300">
                Bedrooms
              </span>
<div className="flex items-center justify-between border-b border-white/20 pb-2 group-hover:border-white transition-colors duration-300">
<span className="text-white text-sm font-light">2 Bedrooms</span>
<iconify-icon className="text-white/70 group-hover:text-white" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:flex-1 group cursor-pointer">
<span className="block text-white/50 text-[10px] uppercase tracking-widest mb-2 group-hover:text-white transition-colors duration-300">
                Price Range
              </span>
<div className="flex items-center justify-between border-b border-white/20 pb-2 group-hover:border-white transition-colors duration-300">
<span className="text-white text-sm font-light">Any Price</span>
<iconify-icon className="text-white/70 group-hover:text-white" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:flex-1 group cursor-pointer">
<span className="block text-white/50 text-[10px] uppercase tracking-widest mb-2 group-hover:text-white transition-colors duration-300">
                Availability
              </span>
<div className="flex items-center justify-between border-b border-white/20 pb-2 group-hover:border-white transition-colors duration-300">
<span className="text-white text-sm font-light">Immediate</span>
<iconify-icon className="text-white/70 group-hover:text-white" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:w-auto mt-4 md:mt-0">
<button className="w-full text-[10px] uppercase tracking-widest bg-white text-primary px-6 py-3 rounded-[2px] font-medium hover:bg-primary hover:text-white transition-all duration-400">
                View Available Residences
              </button>
</div>
</div>
</div>
</div>
</header>

<section className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto gsap-section">
<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
<div className="w-full md:w-1/4 pt-2 border-t border-primary">
<span className="block text-[10px] uppercase tracking-widest mt-4">
            01 — Philosophy
          </span>
</div>
<div className="w-full md:w-3/4">
<h2 className="text-3xl md:text-5xl font-serif leading-tight mb-10 font-light text-primary max-w-3xl">
            We design living spaces for clarity, not just utility. A collection
            of refined homes curated for the modern urbanist.
          </h2>
<div className="border-t border-line py-6 mb-10 flex flex-col md:flex-row gap-4 md:gap-12 md:items-center">
<span className="text-[10px] uppercase tracking-widest text-secondary font-medium">
              Light over noise
            </span>
<span className="text-[10px] uppercase tracking-widest text-secondary font-medium">
              Materials with intention
            </span>
<span className="text-[10px] uppercase tracking-widest text-secondary font-medium">
              Silence as a feature
            </span>
</div>
<div className="w-full aspect-[21/9] overflow-hidden rounded-[2px] border border-line mb-10 img-zoom-container group">
<img alt="Architectural Detail" className="img-zoom transition-all duration-1000 object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34912fd8-c9c7-4c5c-8731-c9476acb42f8_1600w.jpg"/>
</div>
<div className="max-w-2xl">
<p className="text-secondary font-light leading-relaxed mb-8">
              Novera represents a departure from the standard rental experience.
              We focus on light, materials, and silence. Our properties are
              selected for their architectural merit and position within the
              city's most vibrant cultural districts.
            </p>
<a className="inline-block text-[10px] uppercase tracking-widest border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors font-medium" href="lifestyle.html">
              Explore the Novera Journal
            </a>
</div>
</div>
</div>
</section>
<div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
<div className="w-full border-t border-line relative flex justify-center">
<span className="absolute top-0 -translate-y-1/2 bg-background px-4 text-[10px] uppercase tracking-widest text-secondary/60">
          Next — Neighbourhood
        </span>
</div>
</div>

<section className="w-full relative pt-20 md:pt-32 pb-32 md:pb-48 px-6 md:px-12 max-w-[1400px] mx-auto gsap-section">
<div className="grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-7">
<div className="aspect-[16/9] w-full overflow-hidden relative border border-line shadow-[0_18px_60px_rgba(0,0,0,0.06)] group">
<img alt="Neighbourhood" className="w-full h-full object-cover transform transition duration-700 ease-out group-hover:scale-[1.02] group-hover:brightness-105 group-hover:contrast-105 group-hover:saturate-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a915ee86-bb85-4eda-b007-ace7c27582c2_1600w.jpg"/>
<div className="absolute bottom-4 left-4 z-10 bg-white/75 backdrop-blur-sm border border-black/10 px-4 py-2 rounded-[2px] shadow-sm">
<span className="text-[10px] uppercase tracking-widest text-primary font-medium">
                Griffintown — Montreal, QC
              </span>
</div>
</div>
</div>
<div "="" className="md:col-span-5 md:pl-16 md:-translate-y-4 max-w-md">
<span className="block text-[10px] uppercase tracking-widest mb-6 text-secondary">
            02 — Neighbourhood
          </span>
<h3 className="font-serif text-3xl md:text-4xl mb-6 font-light leading-tight tracking-tight">
            A neighbourhood designed for walking.
          </h3>
<p className="text-secondary font-light leading-relaxed mb-8">
            Set between the canal and the city’s creative corridors, Novera
            places you within a short walk of markets, galleries, and parks —
            the kind of daily rhythm that feels quiet, effortless, and
            distinctly Montreal.
          </p>

<div className="border-t border-line pt-6 mt-8 mb-10 grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-4">
<div className="flex items-baseline gap-2">
<span className="text-[10px] uppercase tracking-widest text-secondary font-medium shrink-0">06 Min</span>
<span className="text-[10px] text-secondary/40 font-light">—</span>
<span className="text-sm text-primary font-light">Atwater Market</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-[10px] uppercase tracking-widest text-secondary font-medium shrink-0">08 Min</span>
<span className="text-[10px] text-secondary/40 font-light">—</span>
<span className="text-sm text-primary font-light">Lachine Canal Path</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-[10px] uppercase tracking-widest text-secondary font-medium shrink-0">10 Min</span>
<span className="text-[10px] text-secondary/40 font-light">—</span>
<span className="text-sm text-primary font-light">Old Port Promenade</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-[10px] uppercase tracking-widest text-secondary font-medium shrink-0">12 Min</span>
<span className="text-[10px] text-secondary/40 font-light">—</span>
<span className="text-sm text-primary font-light">Independent Galleries</span>
</div>
</div>
<div className="border-t border-line mt-10 pt-6 mb-10 text-center md:text-left">
<span className="text-xs uppercase tracking-widest text-secondary/60 font-light">
              Quiet mornings • Canal light • Gallery nights
            </span>
</div><div className="flex flex-col items-start gap-4">
<a className="text-[10px] uppercase tracking-widest border border-primary/60 px-8 py-3 rounded-[2px] inline-block hover:bg-primary hover:text-white transition-colors duration-600" href="#">
              Explore Griffintown
            </a>
<a className="text-[10px] uppercase tracking-widest text-secondary/70 border-b border-secondary/30 hover:border-secondary hover:text-secondary transition-colors pb-0.5" href="#">
              View transit + commute times
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white gsap-section">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-24 items-start">
<div className="w-full md:w-1/4 pt-2 border-t border-primary">
<span className="block text-[10px] uppercase tracking-widest mt-4">
        03 — Amenities
      </span>
</div>
<div className="w-full md:w-3/4"><div className="mb-12">
<h2 className="font-serif text-3xl md:text-5xl font-light text-primary mb-6 leading-tight">
              Designed for the hours between.
            </h2>
<p className="text-secondary font-light text-sm md:text-base max-w-xl leading-relaxed">
              Resident-only spaces curated for stillness, wellness, and effortless living. A landscape of amenities that extends your home beyond its walls.
            </p>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 items-center border-t border-line/60 py-12 md:py-16 amenity-row opacity-0 translate-y-10">
<div className="w-full md:col-span-5">
<div className="aspect-[4/5] w-full overflow-hidden border border-line img-zoom-container group rounded-[2px]">
<img alt="Lobby Detail" className="img-zoom w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/111ca588-31c4-44cd-8724-eacc4cbcda19_800w.jpg"/>
</div>
</div>
<div className="w-full md:col-span-7 md:pl-8">
<span className="block text-[10px] uppercase tracking-widest text-secondary/60 mb-8">Designed for Living</span>
<ul className="space-y-8">
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Concierge &amp; Secure Entry</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] uppercase tracking-widest text-primary/40 hidden md:block">24/7 Service</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">24/7 lobby presence + parcel room</span>
</li>
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Turnkey Residences</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] uppercase tracking-widest text-primary/40 hidden md:block">Furnished</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Integrated appliances + furnished options</span>
</li>
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">EV Ready Parking</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] uppercase tracking-widest text-primary/40 hidden md:block">Underground</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Secure underground facility</span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 items-center border-t border-line/60 py-12 md:py-16">
<div className="w-full md:col-span-5 md:col-start-8">
<div className="aspect-[4/5] w-full overflow-hidden border border-line img-zoom-container group rounded-[2px]">
<img alt="Wellness Spa" className="img-zoom w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4029113c-abfc-4e12-9bc3-f226900932c1_800w.jpg"/>
</div>
</div>
<div className="w-full md:col-span-7 md:col-start-1 md:row-start-1 md:pr-8">
<span className="block text-[10px] uppercase tracking-widest text-secondary/60 mb-8">Designed for Restoration</span>
<ul className="space-y-8">
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Wellness Floor</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] uppercase tracking-widest text-primary/40 hidden md:block">06:00 — 23:00</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Strength studio + quiet cardio suite</span>
</li>
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Thermal Circuit</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] uppercase tracking-widest text-primary/40 hidden md:block">Resident Only</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Rooftop plunge pool + dry sauna</span>
</li>
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Yoga Studio</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] uppercase tracking-widest text-primary/40 hidden md:block">Sessions</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Quiet morning sessions</span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 items-center border-t border-line/60 py-12 md:py-16">
<div className="w-full md:col-span-5">
<div className="aspect-[4/5] w-full overflow-hidden border border-line img-zoom-container group rounded-[2px]">
<img alt="Rooftop Terrace" className="img-zoom w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85f80b28-9ea3-463d-9bf9-bc3a61e0d51b_800w.jpg"/>
</div>
</div>
<div className="w-full md:col-span-7 md:pl-8">
<span className="block text-[10px] uppercase tracking-widest text-secondary/60 mb-8">Designed for Gathering</span>
<ul className="space-y-8">
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Rooftop Terrace</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] uppercase tracking-widest text-primary/40 hidden md:block">Seasonal</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Outdoor kitchen + curated seating</span>
</li>
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Co-working Salon</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] uppercase tracking-widest text-primary/40 hidden md:block">WiFi 6</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Private work suites + library</span>
</li>
<li className="group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<span className="font-serif text-xl text-primary">Private Screening</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] uppercase tracking-widest text-primary/40 hidden md:block">Bookable</span>
</div>
<span className="block text-xs text-secondary font-light border-b border-line/40 pb-4 group-hover:border-primary/20 transition-colors">Cinema room + lounge</span>
</li>
</ul>
</div>
</div></div>
</div>
</section>

<section className="py-32 md:py-40 bg-warm px-6 md:px-12 border-y border-line gsap-section">
<div className="max-w-[1400px] mx-auto">

<div className="mb-16 md:mb-24 fade-in-up">
<span className="block text-[10px] uppercase tracking-widest text-primary/60 mb-6 font-medium">
            04 — Featured Residences
          </span>
<h2 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">
            Residences Defined by<br className="hidden md:block"/>
            Light and Proportion.
          </h2>
<p className="text-secondary font-light max-w-3xl text-lg leading-relaxed">
            Each residence is a study in proportion and light. Curated materials, intelligent layouts, and quiet confidence define the Novera collection.
          </p>
</div>

<div className="w-full mb-20 md:mb-24 fade-in-up delay-200"><div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

<div className="md:col-span-7 w-full h-[360px] md:h-[520px] relative rounded-[2px] overflow-hidden border border-line/50 group shadow-sm">
<img alt="Residence View" className="w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-100" id="hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d23a2f1-8c2a-4bc1-8d3a-99ca1a44f878_1600w.jpg"/>
<div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
</div>

<div className="md:col-span-5 flex flex-col justify-center h-full md:border-l md:border-line/60 md:pl-10 relative">
<div className="flex flex-col items-start transition-opacity duration-300" id="hero-details">
<span className="inline-block border border-primary/20 bg-white text-primary px-3 py-1 text-[10px] uppercase tracking-widest rounded-full mb-6">
        Available Now
      </span>
<h3 className="font-serif text-3xl md:text-4xl text-primary font-light mb-2 tracking-tight" id="hero-title">The Penthouse Collection</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="font-serif text-3xl font-light text-primary" id="hero-price">$8,500</span>
<span className="text-xs text-secondary font-light">per month</span>
</div>
<p className="text-secondary font-light text-sm md:text-base leading-relaxed mb-8 max-w-md min-h-[4.5rem]" id="hero-desc">
        A dual-level residence featuring floor-to-ceiling glazing and panoramic canal views. Designed with a custom Italian kitchen system and private terrace access.
      </p>
<div className="w-full grid grid-cols-3 gap-6 border-t border-line/60 pt-6 mb-8">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-secondary/60 mb-1">Total Area</span>
<span className="font-sans text-sm font-medium text-primary" id="hero-spec-1">2,450 SQ FT</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-secondary/60 mb-1">Configuration</span>
<span className="font-sans text-sm font-medium text-primary" id="hero-spec-2">3 Bed / 3.5 Bath</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-secondary/60 mb-1">Highlight</span>
<span className="font-sans text-sm font-medium text-primary" id="hero-spec-3">Wrap-around</span>
</div>
</div>
<button className="w-full bg-primary text-white text-[10px] uppercase tracking-widest px-8 py-4 rounded-[2px] hover:bg-primary/90 transition-all duration-300 shadow-sm mb-10">
        Schedule Private Viewing
      </button>
<div className="flex flex-col gap-3 border-t border-line/60 pt-8 w-full">
<span className="text-[10px] uppercase tracking-widest text-secondary/40 mb-2">Select Residence</span>
<button className="text-left text-[10px] uppercase tracking-widest text-primary border-b border-primary/40 pb-1 transition-all duration-300 hero-selector" onclick="updateHero(0)">The Penthouse Collection</button>
<button className="text-left text-[10px] uppercase tracking-widest text-secondary/60 hover:text-primary transition-all duration-300 hero-selector" onclick="updateHero(1)">Canal View Residence</button>
<button className="text-left text-[10px] uppercase tracking-widest text-secondary/60 hover:text-primary transition-all duration-300 hero-selector" onclick="updateHero(2)">Skyline Corner Suite</button>
</div>
</div>
</div>
</div></div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20 fade-in-up delay-400">
<div className="group cursor-pointer flex flex-col h-full hover:-translate-y-1 transition-all duration-300">
<div className="aspect-[4/5] w-full mb-6 overflow-hidden rounded-[2px] border border-line/50 relative shadow-sm transition-shadow duration-300">
<img alt="The Arcott" className="w-full h-full object-cover transition-transform ease-out group-hover:scale-[1.05] group-hover:brightness-90 duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/056a7e6c-374e-4920-a376-7043eb2dcc00_1600w.jpg"/>
<span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-white border-b border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Residence</span></div>
<div className="flex justify-between items-baseline mb-2">
<h4 className="font-serif text-2xl font-light text-primary group-hover:text-secondary transition-colors tracking-tight">The Arcott</h4>
<span className="font-sans text-sm font-medium text-primary">$3,450<span className="text-xs font-light text-secondary ml-1">/mo</span></span>
</div>
<div className="flex items-center gap-3 text-xs text-secondary/80 font-light mb-3">
<span>950 SQ FT</span>
<span className="text-line">•</span>
<span>2 Bed</span>
<span className="text-line">•</span>
<span>2 Bath</span>
</div>
<p className="text-[10px] text-secondary/80 font-light border-t border-line/40 pt-3">
      South-facing with floor-to-ceiling glazing.
    </p>
</div>

<div className="group cursor-pointer flex flex-col h-full hover:-translate-y-1 transition-all duration-300 md:translate-y-5">
<div className="aspect-[4/5] w-full mb-6 overflow-hidden rounded-[2px] border border-line/50 relative shadow-sm transition-shadow duration-300">
<img alt="Vantage Point" className="w-full h-full object-cover transition-transform ease-out group-hover:scale-[1.05] group-hover:brightness-90 duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c22291f6-a511-4d6f-9f6c-97caf79cf402_1600w.jpg"/>
<span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-white border-b border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Residence</span></div>
<div className="flex justify-between items-baseline mb-2">
<h4 className="font-serif text-2xl font-light text-primary group-hover:text-secondary transition-colors tracking-tight">Vantage Point</h4>
<span className="font-sans text-sm font-medium text-primary">$2,800<span className="text-xs font-light text-secondary ml-1">/mo</span></span>
</div>
<div className="flex items-center gap-3 text-xs text-secondary/80 font-light mb-3">
<span>780 SQ FT</span>
<span className="text-line">•</span>
<span>1 Bed</span>
<span className="text-line">•</span>
<span>1 Bath</span>
</div>
<p className="text-[10px] text-secondary/80 font-light border-t border-line/40 pt-3">
      Open-concept loft with exposed concrete.
    </p>
</div>

<div className="group cursor-pointer flex flex-col h-full hover:-translate-y-1 transition-all duration-300">
<div className="w-full mb-6 overflow-hidden rounded-[2px] border border-line/50 relative shadow-sm transition-shadow duration-300 aspect-[3/4]">
<img alt="The Elysian" className="w-full h-full object-cover transition-transform ease-out group-hover:scale-[1.05] group-hover:brightness-90 duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9fef1af-7076-41f8-94ac-87cf3a20563d_1600w.jpg"/>
<span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-white border-b border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Residence</span></div>
<div className="flex justify-between items-baseline mb-2">
<h4 className="font-serif text-2xl font-light text-primary group-hover:text-secondary transition-colors tracking-tight">The Elysian</h4>
<span className="font-sans text-sm font-medium text-primary">$5,200<span className="text-xs font-light text-secondary ml-1">/mo</span></span>
</div>
<div className="flex items-center gap-3 text-xs text-secondary/80 font-light mb-3">
<span>1,600 SQ FT</span>
<span className="text-line">•</span>
<span>2 Bed</span>
<span className="text-line">•</span>
<span>2.5 Bath</span>
</div>
<p className="text-[10px] text-secondary/80 font-light border-t border-line/40 pt-3">
      Corner unit with dual-aspect views.
    </p>
</div></div>

<div className="flex justify-center fade-in-up delay-200 mt-20">
<a className="inline-block text-[10px] uppercase tracking-widest border border-primary/40 px-10 py-4 rounded-[2px] hover:bg-primary hover:text-white transition-all duration-300 text-primary font-medium" href="#">
            Browse All Available Residences
          </a>
</div>
</div>
</section><section className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden bg-primary gsap-section">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
<div className="md:col-span-4 fade-in-up">
<span className="block text-[10px] uppercase tracking-widest text-white/60">
        05 — Resident Perspective
      </span>
<h2 className="font-serif text-2xl md:text-3xl font-light text-white/90 leading-tight mt-6">
        A quiet confidence, lived daily.
      </h2>
<p className="text-sm md:text-base text-white/60 font-light leading-relaxed mt-5 max-w-sm">
        A few words from residents who chose space, light, and calm — and found it.
      </p>
</div>
<div className="md:col-span-8 w-full relative marquee-container">
<div className="marquee-fade-left"></div>
<div className="marquee-fade-right"></div>
<div className="marquee-track gap-5 md:gap-6">
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “The light changes through the day and the space feels different with it. It’s the first place I’ve lived that feels deliberately quiet.”
          </p>
<span className="block mt-5 text-[10px] uppercase tracking-widest text-white/60">
            — Amelia Laurent, Resident
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “Everything is restrained — in a good way. Materials, proportions, sound. It’s calming the moment you come home.”
          </p>
<span className="block mt-5 text-[10px] uppercase tracking-widest text-white/60">
            — Daniel R., Resident
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “I didn’t expect a rental to feel this considered. The details are subtle, but you notice them every day.”
          </p>
<span className="block mt-5 text-[10px] uppercase tracking-widest text-white/60">
            — Sophie M., Resident
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “The building has a rhythm: mornings are bright, evenings feel soft. It’s a lifestyle shift more than an address.”
          </p>
<span className="block mt-5 text-[10px] uppercase tracking-widest text-white/60">
            — Marc-André L., Resident
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “It’s not just design. It’s how the place supports focus, rest, and a slower pace.”
          </p>
<span className="block mt-5 text-[10px] uppercase tracking-widest text-white/60">
            — Clara N., Resident
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “The light changes through the day and the space feels different with it. It’s the first place I’ve lived that feels deliberately quiet.”
          </p>
<span className="block mt-5 text-[10px] uppercase tracking-widest text-white/60">
            — Amelia Laurent, Resident
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “Everything is restrained — in a good way. Materials, proportions, sound. It’s calming the moment you come home.”
          </p>
<span className="block mt-5 text-[10px] uppercase tracking-widest text-white/60">
            — Daniel R., Resident
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “I didn’t expect a rental to feel this considered. The details are subtle, but you notice them every day.”
          </p>
<span className="block mt-5 text-[10px] uppercase tracking-widest text-white/60">
            — Sophie M., Resident
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “The building has a rhythm: mornings are bright, evenings feel soft. It’s a lifestyle shift more than an address.”
          </p>
<span className="block mt-5 text-[10px] uppercase tracking-widest text-white/60">
            — Marc-André L., Resident
          </span>
</div>
<div className="w-[320px] md:w-[420px] bg-white/5 border border-white/10 rounded-[2px] px-8 py-7 flex-shrink-0">
<p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed">
            “It’s not just design. It’s how the place supports focus, rest, and a slower pace.”
          </p>
<span className="block mt-5 text-[10px] uppercase tracking-widest text-white/60">
            — Clara N., Resident
          </span>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden bg-primary editorial-container">
<img alt="Exterior Montreal building facade" className="w-full h-full object-cover editorial-img origin-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e42bb99a-1498-4503-88a2-da4046b8f2bd_3840w.jpg"/>

<div className="absolute bottom-36 md:bottom-52 left-6 right-6 md:left-16 md:right-auto text-center md:text-left z-30 max-w-lg">
<span className="block text-[10px] uppercase tracking-widest text-white/70 mb-6 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
          Griffintown — Montreal
        </span>
<h2 className="font-serif text-3xl md:text-5xl font-light text-white leading-[1.15] tracking-tight drop-shadow-[0_8px_26px_rgba(0,0,0,0.45)]">
          Where city and stillness meet.
        </h2>
</div>
</section>

<section className="relative -mt-24 md:-mt-40 bg-[#EDE7DE] px-6 pt-24 md:pt-28 pb-28 md:pb-36 z-20 gsap-section">
<div className="max-w-xl mx-auto text-center">
<p className="text-[10px] uppercase tracking-widest text-primary/60 mb-6">
          Now leasing — private viewings by appointment
        </p>
<h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-primary mb-6">
          Begin your life at Novera.
        </h2>
<p className="text-sm md:text-base text-primary/70 font-light leading-relaxed mb-10">
          Experience architecture shaped by light, space, and quiet intention.
        </p>
<div className="flex flex-col items-center">
<a className="inline-flex items-center justify-center px-10 py-4 bg-primary text-white text-[10px] uppercase tracking-widest rounded-[2px] hover:bg-primary/90 transition-all duration-300" href="#">
            Schedule Private Viewing
          </a>
<a className="inline-block mt-6 text-primary/70 border-b border-primary/30 pb-1 hover:text-primary hover:border-primary/60 transition-all duration-300 text-[10px] uppercase tracking-widest" href="#">
            Download Floorplans
          </a>
</div>
<p className="text-xs text-primary/50 font-light mt-10">
          No obligation. Personal response within 24 hours.
        </p>
</div>
</section>

<footer className="border-line md:px-12 md:pt-14 border-t pt-28 pr-6 pb-14 pl-6"><div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
<div className="flex flex-col items-start">
<h3 className="font-serif text-3xl font-medium tracking-tight text-primary mb-8">
              NOVERA
            </h3>
<p className="text-secondary text-sm font-light leading-relaxed max-w-[200px]">
              Architectural residences in the heart of Montreal, shaped by light, space, and quiet intention.
            </p>
</div>
<div className="flex flex-col items-start">
<span className="block text-[10px] uppercase tracking-widest text-secondary/50 mb-8">
              Explore
            </span>
<ul className="space-y-3 text-sm font-light">
<li>
<a className="text-primary hover:text-secondary transition-colors duration-300" href="#">
                  Residences
                </a>
</li>
<li>
<a className="text-primary hover:text-secondary transition-colors duration-300" href="#">
                  Neighbourhoods
                </a>
</li>
<li>
<a className="text-primary hover:text-secondary transition-colors duration-300" href="#">
                  Inquire
                </a>
</li>
</ul>
</div>
<div className="flex flex-col items-start">
<span className="block text-[10px] uppercase tracking-widest text-secondary/50 mb-8">
              Visit
            </span>
<div className="mb-8">
<p className="text-sm font-light text-primary leading-relaxed">
                Novera Residential<br/>
                1455 Wellington Street<br/>
                Montreal, QC H3C 1S4<br/>
                Canada
              </p>
</div>
<div>
<span className="block text-[10px] uppercase tracking-widest text-secondary/50 mb-2">
                Leasing Office
              </span>
<p className="text-sm font-light text-secondary leading-relaxed">
                Mon–Sat — 10:00–18:00<br/>
                By appointment Sunday
              </p>
</div>
</div>
<div className="flex flex-col items-start">
<span className="block text-[10px] uppercase tracking-widest text-secondary/50 mb-8">
              Ask a Question
            </span>
<p className="text-sm font-light text-secondary mb-6 leading-relaxed max-w-[240px]">
              A member of our team will respond within 24 hours.
            </p>
<form className="w-full relative group mb-8" onsubmit="event.preventDefault();">
<input className="w-full bg-transparent border-b border-line py-2 text-sm font-light text-primary placeholder:text-secondary/30 focus:outline-none focus:border-primary transition-colors duration-300 pr-12" placeholder="Email Address" type="email"/>
<button className="absolute right-0 bottom-2 text-[10px] uppercase tracking-widest text-primary hover:text-secondary transition-colors duration-300 border-b border-transparent hover:border-secondary pb-0.5" type="submit">
                Send
              </button>
</form>
<div className="flex flex-col gap-1">
<a className="text-sm font-light text-primary hover:text-secondary transition-colors duration-300" href="mailto:hello@novera.com">hello@novera.com</a>
<a className="text-sm font-light text-secondary hover:text-primary transition-colors duration-300" href="tel:+15149002400">+1 (514) 900-2400</a>
</div>
</div>
</div>
<div className="border-t border-line mt-20 pt-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<div className="flex flex-col gap-3">
<span className="text-[10px] uppercase tracking-widest text-secondary/40">
              Built with intention in Montreal.
            </span>
<p className="text-[10px] uppercase tracking-widest text-secondary/60">
              © 2024 Novera Residential.
            </p>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
<div className="flex gap-6 text-[10px] uppercase tracking-widest text-secondary/60">
<a className="hover:text-primary transition-colors duration-300" href="#">Privacy</a>
<a className="hover:text-primary transition-colors duration-300" href="#">Terms</a>
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
