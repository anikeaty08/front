import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.getElementById('year').textContent = new Date().getFullYear();

    const reviews = [
        { name: "Sarah Jenkins", service: "Estate Master Plan", text: "Gill Hall Gardens brought a level of sophistication to our property that completely elevated our home's architecture." },
        { name: "Mark T.", service: "Hardscape & Planting", text: "The stonework is impeccable, and the plant selections feel incredibly natural and integrated." },
        { name: "Eleanor Vance", service: "Garden Renovation", text: "A truly collaborative process. They listened to our desires and delivered a space that exceeds our expectations." },
        { name: "David & Lisa", service: "Front Entablature", text: "Our curb appeal has been entirely redefined. Professional, discrete, and highly skilled teams." },
        { name: "James Harding", service: "Fine Gardening", text: "We trust them implicitly with the ongoing care of our property. The seasonal changes are consistently breathtaking." },
        { name: "The Thompson Family", service: "Pool Landscape", text: "Transformed our pool area into a private, resort-like environment. The privacy layering is genius." },
        { name: "Robert Chen", service: "Design & Install", text: "The attention to horticultural detail is unmatched. Every specimen tree looks as though it has always been there." },
        { name: "Amanda W.", service: "Perennial Borders", text: "I requested a structured English border and the result is magnificent. Thriving and perfectly balanced." }
    ];

    function initMarquee() {
        const track = document.getElementById('marquee-track');
        if (!track) return;
        const allReviews = [...reviews, ...reviews];

        allReviews.forEach(review => {
            const card = document.createElement('div');
            card.className = "w-[360px] md:w-[420px] flex-shrink-0 bg-white p-10 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-auto hover:shadow-lg transition-all duration-300 select-none group";
            
            let starsHtml = '';
            for(let i=0; i<5; i++) {
              starsHtml += `<iconify-icon icon="lucide:star" class="text-lg text-[#4ade80]" stroke-width="1.5"></iconify-icon>`;
            }

            card.innerHTML = `
                <div class="flex items-start justify-between mb-6">
                    <div class="flex items-center gap-4">
                        <div class="w-14 h-14 rounded-full bg-green-50 text-[#2b5c28] border border-green-100 flex items-center justify-center text-2xl font-light group-hover:bg-[#2b5c28] group-hover:text-white transition-colors">${review.name.charAt(0)}</div>
                        <div>
                            <div class="font-light text-xl text-gray-900 leading-tight tracking-tight">${review.name}</div>
                            <div class="text-base text-gray-500 mt-1 font-extralight">${review.service}</div>
                        </div>
                    </div>
                    <div class="flex gap-1 mt-1">
                        ${starsHtml}
                    </div>
                </div>
                <p class="text-gray-600 text-xl leading-relaxed font-extralight tracking-tight">"${review.text}"</p>
            `;
            track.appendChild(card);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        initMarquee();

        // Header Scroll
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('shadow-sm', 'bg-white/95');
                header.classList.remove('bg-white/80');
            } else {
                header.classList.remove('shadow-sm', 'bg-white/95');
                header.classList.add('bg-white/80');
            }
        });

        // Mobile Menu
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu on click
        mobileMenu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
          });
        });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 h-full w-full bg-white pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#2b5c2805_1px,transparent_1px),linear-gradient(to_bottom,#2b5c2805_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
<div className="absolute top-[20%] right-[-10%] h-[800px] w-[800px] rounded-full bg-green-400/5 blur-[120px]"></div>
<div className="absolute bottom-[10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-[#2b5c28]/5 blur-[100px]"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 bg-white/80 backdrop-blur-xl border-b border-gray-100" id="header">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<nav className="flex items-center justify-between">

<a className="flex flex-col items-center justify-center transition-opacity hover:opacity-80" href="#">
<iconify-icon className="text-4xl text-[#2b5c28]" icon="lucide:tree-deciduous" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col items-center mt-0.5">
<span className="text-xl font-medium tracking-tight text-[#2b5c28] leading-none uppercase">Gill Hall</span>
<span className="text-xs font-light uppercase tracking-[0.25em] text-[#2b5c28] leading-tight mt-0.5 ml-0.5">Gardens</span>
</div>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-base font-extralight text-gray-500 hover:text-[#2b5c28] transition-colors" href="#services">Services</a>
<a className="text-base font-extralight text-gray-500 hover:text-[#2b5c28] transition-colors" href="#portfolio">Portfolio</a>
<a className="text-base font-extralight text-gray-500 hover:text-[#2b5c28] transition-colors" href="#process">Our Process</a>
<a className="text-base font-extralight text-gray-500 hover:text-[#2b5c28] transition-colors" href="#consultation">Consultation</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-3 text-base font-light text-white bg-[#2b5c28] rounded-full hover:bg-[#1f421d] transition-all shadow-md shadow-green-900/10" href="#consultation">
            Request Consultation
          </a>
<button aria-label="Toggle menu" className="md:hidden p-2 text-gray-600 hover:text-gray-900" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="lucide:menu" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>
</div>

<div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl hidden" id="mobile-menu">
<div className="flex flex-col p-6 space-y-6">
<a className="text-xl font-extralight text-gray-600 hover:text-[#2b5c28]" href="#services">Services</a>
<a className="text-xl font-extralight text-gray-600 hover:text-[#2b5c28]" href="#portfolio">Portfolio</a>
<a className="text-xl font-extralight text-gray-600 hover:text-[#2b5c28]" href="#process">Our Process</a>
<a className="text-xl font-light text-[#2b5c28]" href="#consultation">Request Consultation</a>
</div>
</div>
</header>

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
<div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 text-center mt-8">
<div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-50 border border-green-200/60 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-base font-light text-[#2b5c28]">
          Now scheduling seasonal consultations
        </span>
</div>
<h1 className="text-6xl md:text-8xl text-gray-900 leading-[1.05] tracking-tight mb-8 font-normal">
        Thoughtful Design for <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b5c28] to-[#4ade80]">
          Living Landscapes
        </span>
</h1>
<p className="text-2xl md:text-3xl text-gray-500 max-w-4xl mx-auto mb-10 font-extralight leading-relaxed tracking-tight">
        Bespoke garden design, fine landscaping, and dedicated horticultural care. We craft natural environments that seamlessly extend your living space outdoors.
      </p>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-lg font-extralight text-gray-600">
<span className="flex items-center gap-2">
<iconify-icon className="text-[#4ade80] text-xl" icon="lucide:check-circle" strokeWidth="1.5"></iconify-icon> Custom Design
        </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-[#4ade80] text-xl" icon="lucide:check-circle" strokeWidth="1.5"></iconify-icon> Fine Installation
        </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-[#4ade80] text-xl" icon="lucide:check-circle" strokeWidth="1.5"></iconify-icon> Estate Care
        </span>
</div>
<div className="flex flex-col items-center justify-center gap-5">
<a className="animate-pulse-glow w-full sm:w-auto px-10 py-4 bg-[#2b5c28] text-white text-xl font-light rounded-full hover:bg-[#1f421d] transition-all shadow-xl shadow-green-900/20 tracking-tight" href="#consultation">
          Inquire About Your Project
        </a>
<p className="text-base text-gray-400 font-extralight flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="lucide:map-pin" strokeWidth="1.5"></iconify-icon> Serving select local properties
        </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-gray-50/50 border-t border-gray-100" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-[#2b5c28] font-light text-base tracking-widest mb-4 block uppercase">
          Our Expertise
        </span>
<h2 className="text-4xl md:text-5xl text-gray-900 mb-6 tracking-tight font-normal">
          Cultivating Excellence
        </h2>
<p className="text-gray-500 text-2xl font-extralight leading-relaxed tracking-tight">
          We bring a delicate balance of architectural structure and natural beauty to every property, ensuring your landscape grows richer with time.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center mb-8 group-hover:bg-[#2b5c28] group-hover:text-white text-[#2b5c28] transition-colors">
<iconify-icon className="text-2xl" icon="lucide:pen-tool" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl mb-4 text-gray-900 tracking-tight font-light">
            Garden Design
          </h3>
<p className="text-gray-500 text-xl leading-relaxed font-extralight tracking-tight">
            Comprehensive spatial planning and planting schemes designed to harmonize with your home's architecture and local ecology.
          </p>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center mb-8 group-hover:bg-[#2b5c28] group-hover:text-white text-[#2b5c28] transition-colors">
<iconify-icon className="text-2xl" icon="lucide:leaf" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl mb-4 text-gray-900 tracking-tight font-light">
            Fine Horticulture
          </h3>
<p className="text-gray-500 text-xl leading-relaxed font-extralight tracking-tight">
            Expert selection of perennial borders, native species, and specimen trees to create layered, ecologically sound environments.
          </p>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center mb-8 group-hover:bg-[#2b5c28] group-hover:text-white text-[#2b5c28] transition-colors">
<iconify-icon className="text-2xl" icon="lucide:home" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl mb-4 text-gray-900 tracking-tight font-light">
            Hardscape Integration
          </h3>
<p className="text-gray-500 text-xl leading-relaxed font-extralight tracking-tight">
            Seamlessly blending stonework, pathways, and outdoor structures to provide the essential framework for soft plantings.
          </p>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center mb-8 group-hover:bg-[#2b5c28] group-hover:text-white text-[#2b5c28] transition-colors">
<iconify-icon className="text-2xl" icon="lucide:sun" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl mb-4 text-gray-900 tracking-tight font-light">
            Seasonal Displays
          </h3>
<p className="text-gray-500 text-xl leading-relaxed font-extralight tracking-tight">
            Curated container gardens and seasonal bed transitions that ensure your property remains striking through all four seasons.
          </p>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center mb-8 group-hover:bg-[#2b5c28] group-hover:text-white text-[#2b5c28] transition-colors">
<iconify-icon className="text-2xl" icon="lucide:droplets" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl mb-4 text-gray-900 tracking-tight font-light">
            Smart Irrigation
          </h3>
<p className="text-gray-500 text-xl leading-relaxed font-extralight tracking-tight">
            Water-efficient, zone-specific drip and irrigation systems designed to protect your investment and conserve resources.
          </p>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center mb-8 group-hover:bg-[#2b5c28] group-hover:text-white text-[#2b5c28] transition-colors">
<iconify-icon className="text-2xl" icon="lucide:shield-check" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl mb-4 text-gray-900 tracking-tight font-light">
            Estate Maintenance
          </h3>
<p className="text-gray-500 text-xl leading-relaxed font-extralight tracking-tight">
            Bespoke ongoing care programs focusing on pruning, soil health, and long-term garden management for lasting vitality.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#2b5c28] text-white overflow-hidden relative" id="portfolio">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-[#4ade80] font-light text-base tracking-widest mb-4 block uppercase">
            Our Legacy
          </span>
<h2 className="text-5xl md:text-6xl text-white mb-6 tracking-tight font-normal">
            Rooted in Experience
          </h2>
<p className="text-green-100/90 text-2xl mb-8 font-extralight leading-relaxed tracking-tight">
            We've built our reputation on transforming ordinary properties into lush, evocative landscapes. Every project is approached with an artist's eye and a botanist's discipline.
          </p>
<div className="grid grid-cols-2 gap-6 mt-10 border-t border-white/10 pt-10">
<div>
<div className="text-4xl md:text-5xl font-normal text-[#4ade80] mb-2 tracking-tight">150+</div>
<div className="text-lg text-green-100 font-light">Gardens Crafted</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-normal text-[#4ade80] mb-2 tracking-tight">15</div>
<div className="text-lg text-green-100 font-light">Years Experience</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-normal text-[#4ade80] mb-2 tracking-tight">Expert</div>
<div className="text-lg text-green-100 font-light">Horticulturists</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-normal text-[#4ade80] mb-2 tracking-tight">100%</div>
<div className="text-lg text-green-100 font-light">Custom Designs</div>
</div>
</div>
</div>
<div className="relative">
<div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-green-900 to-[#1f421d] p-10 shadow-2xl overflow-hidden group">
<div className="absolute top-0 right-0 p-6 z-20">
<span className="px-5 py-2 bg-[#4ade80] text-[#1f421d] text-sm font-normal rounded-full uppercase tracking-wider">
                    Our Vision
                  </span>
</div>
<div className="relative z-10 flex flex-col items-center justify-center py-12 gap-8">
<div className="flex items-center gap-10 opacity-90">
<div className="text-center group-hover:-translate-x-2 transition-transform duration-500">
<iconify-icon className="text-white/30 text-7xl mb-4 mx-auto block" icon="lucide:home" strokeWidth="1"></iconify-icon>
<p className="text-base font-light text-white/50 tracking-wider uppercase">Blank Canvas</p>
</div>
<iconify-icon className="text-[#4ade80] text-4xl opacity-50" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
<div className="text-center group-hover:translate-x-2 transition-transform duration-500">
<iconify-icon className="text-[#4ade80] text-8xl mb-4 mx-auto block filter drop-shadow-[0_0_20px_rgba(74,222,128,0.4)]" icon="lucide:tree-deciduous" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#4ade80] font-light tracking-wider uppercase">Living Sanctuary</p>
</div>
</div>
</div>
<blockquote className="relative z-10 text-center text-xl italic text-green-100/90 font-extralight border-t border-white/10 pt-8 mt-4 tracking-tight">
                  "Gill Hall Gardens redefined how we interact with our exterior spaces. A true extension of our home."
              </blockquote>

<div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl group-hover:bg-white/10 transition-colors duration-500"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="process">
<div className="max-w-5xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<span className="text-[#2b5c28] font-light text-base uppercase tracking-widest mb-4 block">
          Working Together
        </span>
<h2 className="text-4xl md:text-5xl text-gray-900 mb-6 tracking-tight font-normal">
          The Design Journey
        </h2>
<p className="text-2xl text-gray-500 max-w-3xl mx-auto font-extralight tracking-tight">Every profound landscape begins with an intricate plan. Discover our structured approach to realizing your property's potential.</p>
</div>
<div className="relative rounded-3xl p-8 md:p-14 border border-gray-200 bg-white shadow-xl shadow-green-900/5 overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-bl-full -mr-20 -mt-20 z-0"></div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
<div className="lg:col-span-2">
<h3 className="text-3xl font-normal mb-3 text-gray-900 tracking-tight">
                      Master Plan Consultation
                  </h3>
<div className="flex items-baseline gap-3 mb-6">
<span className="text-5xl font-medium text-gray-900 tracking-tight">Phase I</span>
</div>
<p className="text-gray-500 mb-10 text-xl leading-relaxed font-extralight tracking-tight">
                      An immersive dive into your lifestyle, aesthetic preferences, and the unique topography of your land. We map the constraints and opportunities to create a foundation for design.
                  </p>
<a className="block w-full text-center py-4 rounded-full bg-[#2b5c28] hover:bg-[#1f421d] text-white transition-colors font-light text-xl tracking-tight shadow-lg shadow-green-900/20" href="#consultation">
                      Schedule Initial Visit
                  </a>
<p className="text-center text-base text-gray-400 mt-4 flex items-center justify-center gap-2 font-extralight">
<iconify-icon className="text-lg" icon="lucide:shield" strokeWidth="1.5"></iconify-icon> Bespoke proposals provided after site visit
                  </p>
</div>
<div className="lg:col-span-3 lg:pl-10 lg:border-l border-gray-100">
<h4 className="font-light text-[#2b5c28] mb-6 uppercase text-base tracking-widest">Our Methodology:</h4>
<ul className="space-y-8">
<li className="flex items-start gap-4 text-gray-600 text-xl">
<div className="mt-1 bg-green-100 p-1.5 rounded-full text-[#2b5c28] shrink-0 flex items-center justify-center">
<iconify-icon className="text-base" icon="lucide:check" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<strong className="text-gray-900 font-normal block mb-1">On-Site Discovery</strong>
<span className="text-lg font-extralight block leading-relaxed">A thorough walkthrough to assess soil architecture, light conditions, drainage, and existing flora.</span>
</div>
</li>
<li className="flex items-start gap-4 text-gray-600 text-xl">
<div className="mt-1 bg-green-100 p-1.5 rounded-full text-[#2b5c28] shrink-0 flex items-center justify-center">
<iconify-icon className="text-base" icon="lucide:check" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<strong className="text-gray-900 font-normal block mb-1">Conceptual Layouts</strong>
<span className="text-lg font-extralight block leading-relaxed">Exploratory sketches defining spatial flow, focal points, and hardscape integration tailored to your vision.</span>
</div>
</li>
<li className="flex items-start gap-4 text-gray-600 text-xl">
<div className="mt-1 bg-green-100 p-1.5 rounded-full text-[#2b5c28] shrink-0 flex items-center justify-center">
<iconify-icon className="text-base" icon="lucide:check" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<strong className="text-gray-900 font-normal block mb-1">Curated Plant Palette</strong>
<span className="text-lg font-extralight block leading-relaxed">Selection of resilient, high-impact species crafted to provide sequential interest throughout the year.</span>
</div>
</li>
<li className="flex items-start gap-4 text-gray-600 text-xl">
<div className="mt-1 bg-green-100 p-1.5 rounded-full text-[#2b5c28] shrink-0 flex items-center justify-center">
<iconify-icon className="text-base" icon="lucide:check" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<strong className="text-gray-900 font-normal block mb-1">Installation &amp; Care</strong>
<span className="text-lg font-extralight block leading-relaxed">Seamless execution by our dedicated teams, followed by optional fine gardening services to protect your investment.</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50/80 border-y border-gray-100 overflow-hidden">
<div className="w-full">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-12">
<h2 className="text-3xl md:text-4xl text-gray-900 tracking-tight font-normal">
          Client Experiences
        </h2>
</div>
<div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
<div className="flex gap-6 w-max animate-marquee px-4" id="marquee-track" style={{animationDuration: '90s'}}>

</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="consultation">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div>
<span className="text-[#2b5c28] font-light text-base uppercase tracking-widest mb-4 block">
            Common Inquiries
          </span>
<h2 className="text-4xl md:text-5xl text-gray-900 mb-10 tracking-tight font-normal">
            Before We Begin
          </h2>
<div className="space-y-8">
<div className="border-b border-gray-100 pb-6">
<h4 className="font-light text-2xl text-gray-900 mb-3 tracking-tight">Do you provide ongoing estate maintenance?</h4>
<p className="text-gray-500 text-xl leading-relaxed font-extralight tracking-tight">Yes. We offer specialized fine gardening services primarily for properties we have designed and installed, ensuring the long-term vision is realized as the garden matures.</p>
</div>
<div className="border-b border-gray-100 pb-6">
<h4 className="font-light text-2xl text-gray-900 mb-3 tracking-tight">What scale of projects do you accept?</h4>
<p className="text-gray-500 text-xl leading-relaxed font-extralight tracking-tight">We focus on comprehensive residential designs, ranging from intimate courtyard transformations to extensive multi-acre estate master plans.</p>
</div>
<div className="border-b border-gray-100 pb-6">
<h4 className="font-light text-2xl text-gray-900 mb-3 tracking-tight">Are your planting designs ecologically focused?</h4>
<p className="text-gray-500 text-xl leading-relaxed font-extralight tracking-tight">Absolutely. We prioritize native species, proper soil ecology, and pollinator-friendly selections without compromising on high-end structural aesthetics.</p>
</div>
</div>
</div>

<div className="bg-[#2b5c28] p-10 md:p-14 rounded-3xl border border-[#1f421d] shadow-2xl text-white flex flex-col justify-center relative overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
<div className="relative z-10">
<span className="inline-block px-5 py-2 bg-[#4ade80] text-[#1f421d] text-sm font-normal rounded-full uppercase tracking-wider mb-8">
               Schedule a Consultation
             </span>
<h3 className="text-4xl md:text-5xl mb-6 tracking-tight font-normal">
                Envision Your Space
             </h3>
<p className="text-green-100 text-2xl mb-10 font-extralight leading-relaxed tracking-tight">
                Connect with our studio to discuss your landscape aspirations, request our full portfolio, or arrange a site visit.
             </p>
<form className="space-y-4 mb-8">
<input className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-green-100 font-extralight focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:bg-white/20 transition-all text-lg" placeholder="Full Name" type="text"/>
<input className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-green-100 font-extralight focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:bg-white/20 transition-all text-lg" placeholder="Email Address" type="email"/>
<button className="w-full py-4 bg-white text-[#2b5c28] font-normal rounded-xl hover:bg-green-50 transition-colors shadow-lg text-xl tracking-tight mt-2" type="button">
                  Request Contact
               </button>
</form>
<div className="flex items-center gap-3 text-base text-green-200/80 font-light">
<iconify-icon className="text-xl" icon="lucide:phone" strokeWidth="1.5"></iconify-icon>
                Direct inquiries: (555) 123-4567
             </div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-200 text-gray-600">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
<div className="col-span-1 md:col-span-2 pr-8">
<a className="flex flex-col items-start gap-1 mb-8 opacity-80 hover:opacity-100 transition-opacity" href="#">
<iconify-icon className="text-6xl text-[#2b5c28] mb-1" icon="lucide:tree-deciduous" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col items-center">
<span className="text-3xl font-medium tracking-tight text-[#2b5c28] uppercase leading-none">Gill Hall</span>
<span className="text-sm font-light uppercase tracking-[0.3em] text-[#2b5c28] mt-1 ml-1">Gardens</span>
</div>
</a>
<p className="max-w-sm text-lg leading-relaxed text-gray-500 font-extralight">
            Specializing in sophisticated landscape architecture, fine garden design, and dedicated horticultural stewardship.
          </p>
</div>
<div>
<h4 className="text-gray-900 uppercase tracking-widest text-sm font-normal mb-6">
            Studio
          </h4>
<ul className="space-y-4 text-lg font-extralight">
<li><a className="hover:text-[#2b5c28] transition-colors" href="#services">Expertise</a></li>
<li><a className="hover:text-[#2b5c28] transition-colors" href="#portfolio">Portfolio</a></li>
<li><a className="hover:text-[#2b5c28] transition-colors" href="#process">Our Process</a></li>
</ul>
</div>
<div>
<h4 className="text-gray-900 uppercase tracking-widest text-sm font-normal mb-6">
            Connect
          </h4>
<ul className="space-y-4 text-lg font-extralight text-gray-500">
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#2b5c28]" icon="lucide:mail" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-gray-900 transition-colors" href="mailto:design@gillhallgardens.com">design@gillhallgardens.com</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#2b5c28]" icon="lucide:map-pin" strokeWidth="1.5"></iconify-icon>
<span>Serving the Region</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-base text-gray-400 font-extralight">
          © <span id="year"></span> Gill Hall Gardens. All rights reserved.
        </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-[#2b5c28]" href="#"><iconify-icon className="text-2xl" icon="lucide:camera" strokeWidth="1.5"></iconify-icon></a>
<a className="text-gray-400 hover:text-[#2b5c28]" href="#"><iconify-icon className="text-2xl" icon="lucide:users" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
