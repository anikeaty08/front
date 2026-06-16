import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();
    


      gsap.registerPlugin(ScrollTrigger);

      // Hero Section
      const heroTl = gsap.timeline();
      heroTl.from(".hero-content > *", {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out"
      })
      .from(".hero-illustration", {
          x: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
      }, "-=0.8");

      // Hero Floating Icons
      gsap.to(".hero-icon-float", {
          y: -15,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
              each: 0.3,
              from: "random"
          }
      });

      // Infinite Logo Marquee
      gsap.to(".logo-track", {
          xPercent: -33.33,
          ease: "none",
          duration: 25,
          repeat: -1
      });

      // Services Cards Stagger
      gsap.from(".services-grid > div", {
          scrollTrigger: {
              trigger: ".services-grid",
              start: "top 85%"
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
      });

      // CTA Section
      gsap.from(".cta-section", {
          scrollTrigger: {
              trigger: ".cta-section",
              start: "top 80%"
          },
          scale: 0.96,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
      });

      // CTA Rotating Rings
      gsap.to(".cta-illustration .absolute.inset-0", {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "linear",
          stagger: 2
      });

      // Case Studies
      gsap.from(".case-studies-card", {
          scrollTrigger: {
              trigger: ".case-studies-card",
              start: "top 85%"
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
      });

      // Hover scale effect for Service Cards
      document.querySelectorAll(".services-grid > div").forEach(card => {
          card.addEventListener("mouseenter", () => gsap.to(card, { scale: 1.02, duration: 0.3, ease: "power1.out" }));
          card.addEventListener("mouseleave", () => gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.out" }));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
<div className="flex items-center gap-2">

<div className="relative w-7 h-7">
<svg className="w-full h-full text-black" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
</svg>
</div>
<span className="text-3xl font-semibold tracking-tight display-font">
          Positivus
        </span>
</div>
<div className="hidden lg:flex items-center gap-10 text-lg font-normal text-zinc-600">
<a className="hover:text-black transition-colors" href="#">About us</a>
<a className="hover:text-black transition-colors" href="#">Services</a>
<a className="hover:text-black transition-colors" href="#">Use Cases</a>
<a className="hover:text-black transition-colors" href="#">Pricing</a>
<a className="hover:text-black transition-colors" href="#">Blog</a>
<a className="border border-zinc-300 rounded-xl px-6 py-3 text-black hover:bg-zinc-900 hover:text-white transition-all" href="#">
          Request a quote
        </a>
</div>

<button className="lg:hidden">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</nav>

<section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-xl hero-content">
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
            Navigating the digital landscape for success
          </h1>
<p className="text-xl text-zinc-600 mb-10 leading-relaxed">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
<button className="bg-zinc-900 text-white text-xl px-8 py-5 rounded-xl hover:bg-zinc-800 transition-colors">
            Book a consultation
          </button>
</div>

<div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center hidden md:flex hero-illustration">

<div className="absolute inset-0 flex items-center justify-center">

<div className="absolute w-[80%] h-[60%] border border-black rounded-[100%] rotate-12 opacity-30"></div>
<div className="absolute w-[90%] h-[70%] border border-black rounded-[100%] -rotate-6 opacity-30"></div>

<div className="absolute top-0 right-10 bg-black text-[#B9FF66] p-3 rounded-full hero-icon-float" style={{animationDuration: '3s'}}>
<i className="w-6 h-6 fill-current" data-lucide="heart"></i>
</div>
<div className="absolute top-10 right-0 bg-[#B9FF66] text-black p-3 rounded-full hero-icon-float">
<i className="w-6 h-6" data-lucide="share-2"></i>
</div>
<div className="absolute bottom-20 right-10 bg-[#B9FF66] text-black p-4 rounded-full border border-black hero-icon-float">
<i className="w-6 h-6 fill-current" data-lucide="map-pin"></i>
</div>

<div className="relative z-10 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
<div className="relative">

<div className="h-40 w-52 bg-lime-brand border-2 border-black rounded-l-full relative overflow-hidden flex items-center justify-center">
<div className="absolute right-0 h-full w-4 bg-lime-brand border-l-2 border-black"></div>
</div>

<div className="absolute -bottom-12 left-12 w-8 h-24 bg-black rounded-b-xl -rotate-12 border-2 border-white"></div>

<div className="absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-56 bg-white border-2 border-black rounded-[50%] flex items-center justify-center">
<div className="w-8 h-40 bg-black rounded-[50%]"></div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-10">
<svg className="w-16 h-16 text-black" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-10 overflow-hidden">
<div className="logo-track flex gap-16 min-w-max items-center grayscale opacity-80 filter">

<span className="text-3xl font-semibold font-sans tracking-tighter">
          amazon
        </span>
<span className="text-3xl font-medium font-serif italic">dribbble</span>
<span className="text-3xl font-bold font-sans">HubSpot</span>
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-800 rounded text-white flex items-center justify-center text-xl font-serif">
            N
          </div>
<span className="text-3xl font-medium font-sans">Notion</span>
</div>
<span className="text-3xl font-bold tracking-widest text-red-600/0" style={{WebkitTextStroke: '1px black', color: 'transparent'}}>
          NETFLIX
        </span>
<span className="text-3xl font-bold font-sans text-blue-500/0" style={{WebkitTextStroke: '1px black', color: 'transparent'}}>
          zoom
        </span>

<span className="text-3xl font-semibold font-sans tracking-tighter">
          amazon
        </span>
<span className="text-3xl font-medium font-serif italic">dribbble</span>
<span className="text-3xl font-bold font-sans">HubSpot</span>
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-800 rounded text-white flex items-center justify-center text-xl font-serif">
            N
          </div>
<span className="text-3xl font-medium font-sans">Notion</span>
</div>
<span className="text-3xl font-bold tracking-widest text-red-600/0" style={{WebkitTextStroke: '1px black', color: 'transparent'}}>
          NETFLIX
        </span>
<span className="text-3xl font-bold font-sans text-blue-500/0" style={{WebkitTextStroke: '1px black', color: 'transparent'}}>
          zoom
        </span>

<span className="text-3xl font-semibold font-sans tracking-tighter">
          amazon
        </span>
<span className="text-3xl font-medium font-serif italic">dribbble</span>
<span className="text-3xl font-bold font-sans">HubSpot</span>
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-800 rounded text-white flex items-center justify-center text-xl font-serif">
            N
          </div>
<span className="text-3xl font-medium font-sans">Notion</span>
</div>
<span className="text-3xl font-bold tracking-widest text-red-600/0" style={{WebkitTextStroke: '1px black', color: 'transparent'}}>
          NETFLIX
        </span>
<span className="text-3xl font-bold font-sans text-blue-500/0" style={{WebkitTextStroke: '1px black', color: 'transparent'}}>
          zoom
        </span>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20">
<div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center mb-16">
<h2 className="bg-lime-brand px-2 rounded-md text-4xl font-medium tracking-tight inline-block">
          Services
        </h2>
<p className="max-w-2xl text-lg text-zinc-600">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
</div>
<div className="grid md:grid-cols-2 gap-8 services-grid">

<div className="bg-zinc-100 p-10 rounded-[40px] border border-zinc-900 card-shadow flex flex-col justify-between min-h-[300px]">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="bg-lime-brand px-2 text-2xl lg:text-3xl font-medium rounded block w-fit">
                Search engine
              </span>
<span className="bg-lime-brand px-2 text-2xl lg:text-3xl font-medium rounded block w-fit">
                optimization
              </span>
</div>
<div className="hidden sm:block">

<div className="relative w-32 h-32">
<div className="absolute inset-0 border border-black rounded-xl bg-white flex items-center justify-center">
<div className="w-20 h-1 bg-zinc-200 absolute top-4 left-4"></div>
<div className="w-12 h-1 bg-zinc-200 absolute top-8 left-4"></div>
<i className="w-12 h-12 text-lime-brand bg-black p-2 rounded-full absolute bottom-4 right-4" data-lucide="search"></i>
</div>
</div>
</div>
</div>
<div className="mt-8 flex items-center gap-4 cursor-pointer group">
<div className="bg-black text-lime-brand rounded-full w-10 h-10 flex items-center justify-center transform group-hover:rotate-45 transition-transform">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
<span className="text-xl font-medium hidden sm:inline-block">
              Learn more
            </span>
</div>
</div>

<div className="bg-lime-brand p-10 rounded-[40px] border border-zinc-900 card-shadow flex flex-col justify-between min-h-[300px]">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="bg-white px-2 text-2xl lg:text-3xl font-medium rounded block w-fit">
                Pay-per-click
              </span>
<span className="bg-white px-2 text-2xl lg:text-3xl font-medium rounded block w-fit">
                advertising
              </span>
</div>
<div className="hidden sm:block">
<div className="relative w-32 h-24 bg-white border border-black rounded-lg p-2 flex flex-col gap-2">
<div className="w-full h-2 bg-zinc-200 rounded"></div>
<div className="w-2/3 h-2 bg-zinc-200 rounded"></div>
<i className="w-8 h-8 fill-black absolute -bottom-4 -right-2" data-lucide="mouse-pointer-2"></i>
</div>
</div>
</div>
<div className="mt-8 flex items-center gap-4 cursor-pointer group">
<div className="bg-black text-lime-brand rounded-full w-10 h-10 flex items-center justify-center transform group-hover:rotate-45 transition-transform">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
<span className="text-xl font-medium hidden sm:inline-block">
              Learn more
            </span>
</div>
</div>

<div className="bg-zinc-900 p-10 rounded-[40px] border border-zinc-900 card-shadow flex flex-col justify-between min-h-[300px]">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="bg-white px-2 text-2xl lg:text-3xl font-medium rounded block w-fit">
                Social Media
              </span>
<span className="bg-white px-2 text-2xl lg:text-3xl font-medium rounded block w-fit">
                Marketing
              </span>
</div>
<div className="hidden sm:block">
<div className="relative w-32 h-32">
<div className="absolute right-0 top-0 bg-zinc-800 p-2 rounded border border-zinc-700">
<i className="w-4 h-4 text-white" data-lucide="heart"></i>
</div>
<div className="absolute right-12 top-8 bg-zinc-800 p-2 rounded border border-zinc-700">
<i className="w-4 h-4 text-white" data-lucide="message-circle"></i>
</div>
<div className="absolute right-2 bottom-2 bg-white p-4 rounded-xl border border-black">
<span className="text-xs font-bold">Post</span>
</div>
</div>
</div>
</div>
<div className="mt-8 flex items-center gap-4 cursor-pointer group">
<div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center transform group-hover:rotate-45 transition-transform">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
<span className="text-xl font-medium text-white hidden sm:inline-block">
              Learn more
            </span>
</div>
</div>

<div className="bg-zinc-100 p-10 rounded-[40px] border border-zinc-900 card-shadow flex flex-col justify-between min-h-[300px]">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="bg-lime-brand px-2 text-2xl lg:text-3xl font-medium rounded block w-fit">
                Email
              </span>
<span className="bg-lime-brand px-2 text-2xl lg:text-3xl font-medium rounded block w-fit">
                Marketing
              </span>
</div>
<div className="hidden sm:block">
<div className="flex flex-col -space-y-2 items-end">
<i className="w-12 h-12 text-zinc-300 transform -rotate-12" data-lucide="mail"></i>
<i className="w-14 h-14 text-lime-brand fill-black stroke-black transform rotate-12 z-10" data-lucide="mail-open"></i>
</div>
</div>
</div>
<div className="mt-8 flex items-center gap-4 cursor-pointer group">
<div className="bg-black text-lime-brand rounded-full w-10 h-10 flex items-center justify-center transform group-hover:rotate-45 transition-transform">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
<span className="text-xl font-medium hidden sm:inline-block">
              Learn more
            </span>
</div>
</div>

<div className="bg-lime-brand p-10 rounded-[40px] border border-zinc-900 card-shadow flex flex-col justify-between min-h-[300px]">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="bg-white px-2 text-2xl lg:text-3xl font-medium rounded block w-fit">
                Content
              </span>
<span className="bg-white px-2 text-2xl lg:text-3xl font-medium rounded block w-fit">
                Creation
              </span>
</div>
<div className="hidden sm:block">
<div className="relative w-32 h-24 border-2 border-dashed border-black rounded p-2 flex items-center justify-center">
<i className="w-8 h-8" data-lucide="image"></i>
<div className="absolute -right-4 -bottom-4 bg-white border border-black p-1 rounded">
<i className="w-4 h-4" data-lucide="edit-3"></i>
</div>
</div>
</div>
</div>
<div className="mt-8 flex items-center gap-4 cursor-pointer group">
<div className="bg-black text-lime-brand rounded-full w-10 h-10 flex items-center justify-center transform group-hover:rotate-45 transition-transform">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
<span className="text-xl font-medium hidden sm:inline-block">
              Learn more
            </span>
</div>
</div>

<div className="bg-zinc-900 p-10 rounded-[40px] border border-zinc-900 card-shadow flex flex-col justify-between min-h-[300px]">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="bg-lime-brand px-2 text-2xl lg:text-3xl font-medium rounded block w-fit">
                Analytics and
              </span>
<span className="bg-lime-brand px-2 text-2xl lg:text-3xl font-medium rounded block w-fit">
                Tracking
              </span>
</div>
<div className="hidden sm:block">
<div className="bg-white rounded border border-black p-2 w-32 h-24 relative overflow-hidden">
<div className="flex items-end gap-1 h-full pb-2">
<div className="w-4 h-[40%] bg-zinc-300"></div>
<div className="w-4 h-[70%] bg-zinc-400"></div>
<div className="w-4 h-[50%] bg-zinc-300"></div>
<div className="w-4 h-[90%] bg-lime-brand border border-black"></div>
<div className="w-4 h-[60%] bg-zinc-300"></div>
</div>
</div>
</div>
</div>
<div className="mt-8 flex items-center gap-4 cursor-pointer group">
<div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center transform group-hover:rotate-45 transition-transform">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
<span className="text-xl font-medium text-white hidden sm:inline-block">
              Learn more
            </span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-20">
<div className="bg-zinc-100 rounded-[40px] p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between cta-section">
<div className="max-w-lg z-10">
<h3 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6">
            Let's make things happen
          </h3>
<p className="text-lg text-zinc-600 mb-8">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
<button className="bg-zinc-900 text-white text-lg px-8 py-4 rounded-xl hover:bg-zinc-800 transition-colors">
            Get your free proposal
          </button>
</div>

<div className="relative w-80 h-80 mt-10 lg:mt-0 lg:absolute lg:right-20 lg:top-1/2 lg:-translate-y-1/2 hidden md:block cta-illustration">

<div className="absolute top-0 right-10 w-24 h-24 text-black">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"></path>
</svg>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="relative w-32 h-32 bg-black rounded-full flex items-center justify-center gap-4">
<div className="w-3 h-8 bg-white rounded-full"></div>
<div className="w-3 h-8 bg-white rounded-full"></div>
</div>

<div className="absolute inset-0 border border-zinc-400 rounded-full scale-150 rotate-12 opacity-50"></div>
<div className="absolute inset-0 border border-zinc-400 rounded-full scale-[1.7] -rotate-6 opacity-50"></div>
</div>

<div className="absolute bottom-0 left-10 text-lime-brand">
<svg className="w-24 h-24" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-20">
<div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center mb-12">
<h2 className="bg-lime-brand px-2 rounded-md text-4xl font-medium tracking-tight inline-block">
          Case Studies
        </h2>
<p className="max-w-xl text-lg text-zinc-600">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
</div>
<div className="bg-zinc-900 rounded-[40px] p-8 lg:p-14 text-white case-studies-card">
<div className="grid lg:grid-cols-3 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-zinc-700">

<div className="space-y-6 px-4">
<p className="text-lg leading-relaxed text-zinc-300">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
<a className="inline-flex items-center text-lime-brand text-xl font-medium hover:underline" href="#">
              Learn more
              <i className="ml-2 w-5 h-5" data-lucide="arrow-up-right"></i>
</a>
</div>

<div className="space-y-6 px-4 pt-8 lg:pt-0">
<p className="text-lg leading-relaxed text-zinc-300">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
<a className="inline-flex items-center text-lime-brand text-xl font-medium hover:underline" href="#">
              Learn more
              <i className="ml-2 w-5 h-5" data-lucide="arrow-up-right"></i>
</a>
</div>

<div className="space-y-6 px-4 pt-8 lg:pt-0">
<p className="text-lg leading-relaxed text-zinc-300">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
<a className="inline-flex items-center text-lime-brand text-xl font-medium hover:underline" href="#">
              Learn more
              <i className="ml-2 w-5 h-5" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</section>

<div className="h-20"></div>



    </>
  );
}
