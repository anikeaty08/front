import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide icons with specific stroke width
      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });

      // Mobile Menu Toggle Logic
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = document.querySelectorAll('.mobile-link');
      let isMenuOpen = false;

      function toggleMenu() {
          isMenuOpen = !isMenuOpen;
          if (isMenuOpen) {
              mobileMenu.classList.remove('translate-x-full');
              document.body.style.overflow = 'hidden'; // Prevent scrolling
              menuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
          } else {
              mobileMenu.classList.add('translate-x-full');
              document.body.style.overflow = '';
              menuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
          }
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); // Re-init icons for dynamic button
      }

      menuBtn.addEventListener('click', toggleMenu);
      mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
              if(isMenuOpen) toggleMenu();
          });
      });

      // Navbar scroll effect
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              navbar.classList.add('shadow-sm');
              navbar.classList.replace('py-4', 'py-0'); // Adjust padding if needed, current design uses h-20 fixed
          } else {
              navbar.classList.remove('shadow-sm');
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 bg-[#e6e4dc]/90 backdrop-blur-md border-b border-[#d3d1c8] transition-all duration-300" id="navbar">
<div className="w-full flex items-stretch h-20">

<div className="flex-shrink-0 flex items-center px-6 lg:px-10 border-r border-[#d3d1c8] w-auto lg:w-1/4">
<a className="flex items-center gap-4 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">
<svg className="w-full h-full text-[#1c1c1a] transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="M4 20L12 4L20 20"></path>
<path d="M4 6H20"></path>
</svg>
</div>
<div className="flex flex-col hidden sm:flex">
<span className="text-[0.7rem] tracking-[0.2em] font-medium leading-none mb-1.5 uppercase">
                ÂTMA
              </span>
<span className="text-[0.55rem] tracking-[0.2em] text-[#555] uppercase leading-none">
                WELLNESS HOTEL
              </span>
</div>
</a>
</div>

<div className="hidden lg:flex flex-grow items-center justify-center gap-14 text-[0.65rem] tracking-[0.2em] uppercase font-medium text-[#1a1a19]">
<a className="hover:text-[#82836d] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#82836d] hover:after:w-full after:transition-all after:duration-300" href="#stay">
            Stay
          </a>
<a className="hover:text-[#82836d] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#82836d] hover:after:w-full after:transition-all after:duration-300" href="#wellness">
            Wellness
          </a>
<a className="hover:text-[#82836d] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#82836d] hover:after:w-full after:transition-all after:duration-300" href="#experiences">
            Experiences
          </a>
<a className="hover:text-[#82836d] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#82836d] hover:after:w-full after:transition-all after:duration-300" href="#journal">
            Journal
          </a>
<a className="hover:text-[#82836d] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#82836d] hover:after:w-full after:transition-all after:duration-300" href="#about">
            About
          </a>
</div>

<div className="flex flex-grow lg:hidden items-center justify-end px-6">
<button className="p-2 -mr-2" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden lg:flex flex-shrink-0 bg-[#1a1a19] text-white items-center justify-center px-10 hover:bg-[#2a2a29] transition-colors cursor-pointer group">
<a className="flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase" href="#book">
            BOOK YOUR STAY
            <span className="w-2.5 h-2.5 rounded-full bg-[#8a8a70] ml-2"></span>
</a>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#e6e4dc] z-40 flex flex-col pt-24 px-6 pb-10 translate-x-full transition-transform duration-500 ease-in-out" id="mobile-menu">
<div className="flex flex-col gap-8 text-3xl tracking-tight font-['Playfair_Display',_serif]">
<a className="mobile-link hover:italic" href="#stay">Stay</a>
<a className="mobile-link hover:italic" href="#wellness">Wellness</a>
<a className="mobile-link hover:italic" href="#experiences">Experiences</a>
<a className="mobile-link hover:italic" href="#journal">Journal</a>
<a className="mobile-link hover:italic" href="#about">About</a>
</div>
<div className="mt-auto">
<a className="inline-flex items-center gap-3 text-sm tracking-widest uppercase font-medium bg-[#1a1a19] text-white px-8 py-4 w-full justify-center" href="#book">
          Book Your Stay
          <span className="w-2 h-2 rounded-full bg-[#82836d]"></span>
</a>
</div>
</div>

<section className="pt-20 min-h-screen flex flex-col relative border-b border-[#d3d1c8]">

<div className="flex-grow flex flex-col lg:flex-row relative">

<div className="w-full lg:w-[55%] flex flex-col justify-center px-6 lg:px-20 py-20 lg:py-0 relative z-20 bg-[#e6e4dc]">
<div className="flex flex-col max-w-2xl gap-16">
<div className="flex items-start justify-between w-full max-w-[28rem]">
<p className="text-[0.65rem] tracking-[0.2em] uppercase leading-relaxed text-[#444]">
                A Sanctuary
                <br/>
                For Body, Mind
                <br/>
                &amp; Soul
              </p>
<div className="w-12 h-12 rounded-full bg-[#8a8a70]"></div>
</div>
<h1 className="font-['Playfair_Display',_serif] text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.05] text-[#1a1a19] font-normal">
<span className="tracking-normal">WELLNESS</span>
<br/>
<span className="tracking-tight">IS NOT A LUXURY.</span>
<br/>
<span className="italic tracking-tight text-[#222]">
                IT'S A RETURN.
              </span>
</h1>
<a className="inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-[#1a1a19] group w-max mt-4" href="#philosophy">
<span className="relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[1px] after:bg-[#1a1a19]">
                DISCOVER OUR PHILOSOPHY
              </span>
<i className="w-3.5 h-3.5 text-[#1a1a19] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right-circle"></i>
</a>
</div>
</div>

<div className="w-full lg:w-[45%] h-[50vh] lg:h-auto relative overflow-hidden bg-[#e6e4dc]">

<div className="absolute top-0 left-0 w-[115%] h-[80%] bg-[#e6e4dc] rounded-br-[100%] z-10 border-0 pointer-events-none"></div>
<img alt="Minimalist tranquil pool" className="absolute inset-0 w-full h-full object-cover object-right" src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
<div className="flex items-center gap-4 writing-vertical rotate-180">
<div className="w-3 h-3 rounded-full border border-white/70 flex items-center justify-center mt-2">
<div className="w-1 h-1 rounded-full bg-white/70"></div>
</div>
<span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/90">
                TAKE A DEEP BREATH
              </span>
<span className="w-[1px] h-12 bg-white/50"></span>
</div>
</div>
</div>
</div>

<div className="h-auto lg:h-32 flex flex-col lg:flex-row border-t border-[#d3d1c8] bg-[#e6e4dc] relative z-20">

<div className="w-full lg:w-1/4 p-6 lg:px-10 flex items-center border-b lg:border-b-0 lg:border-r border-[#d3d1c8]">
<div className="flex items-center gap-4 w-full text-[#1a1a19]">
<span className="text-[3.5rem] font-light tracking-tight leading-none">
              01
            </span>
<span className="h-[1px] flex-grow bg-[#a09e94] mx-2"></span>
<span className="text-[0.65rem] tracking-[0.2em] text-[#1a1a19]">
              / 03
            </span>
</div>
</div>

<div className="w-full lg:w-1/4 flex border-b lg:border-b-0 lg:border-r border-[#d3d1c8] h-32 lg:h-full bg-[#1a1a19]">
<div className="w-1/3 bg-[#1a1a19]"></div>
<div className="w-2/3 h-full relative">
<img alt="Wellness detail" className="w-full h-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="w-full lg:w-1/4 p-6 lg:px-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#d3d1c8]">
<p className="text-[0.65rem] uppercase tracking-[0.15em] leading-[1.8] text-[#1a1a19]">
            CURATED STAYS.
            <br/>
            HOLISTIC WELLNESS.
            <br/>
            CONSCIOUS LUXURY.
          </p>
</div>

<div className="w-full lg:w-1/4 p-6 lg:px-10 flex items-center justify-between group cursor-pointer border-b lg:border-b-0 border-[#d3d1c8]">
<span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#1a1a19]">
            SCROLL TO EXPLORE
          </span>
<div className="w-[1px] h-10 bg-[#a09e94]"></div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-20 border-b border-[#d3d1c8]" id="philosophy">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
<div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-[#82836d]"></div>
<span className="text-xs uppercase tracking-[0.15em] font-medium text-[#555]">
              The Ethos
            </span>
</div>
<h2 className="text-4xl lg:text-5xl font-['Playfair_Display',_serif] tracking-tight text-[#1a1a19] leading-tight">
            Rooted in nature,
            <br/>
            designed for the soul.
          </h2>
<p className="text-lg text-[#444] leading-relaxed max-w-md">
            We believe true luxury is the space and time to reconnect with
            yourself. Every architectural detail, every curated experience, and
            every ingredient is intentionally selected to foster profound
            stillness and holistic rejuvenation.
          </p>
<div className="pt-4">
<a className="inline-flex items-center gap-3 text-sm font-medium border-b border-[#1a1a19] pb-1 hover:text-[#82836d] hover:border-[#82836d] transition-colors" href="#">
              Read our story
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="lg:col-span-7 relative h-[60vh] lg:h-[80vh] w-full order-1 lg:order-2">
<div className="absolute inset-0 bg-[#d3d1c8] translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8"></div>
<img alt="Interior architecture" className="absolute inset-0 w-full h-full object-cover z-10 shadow-xl" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute -left-10 top-1/4 w-20 h-[1px] bg-[#1a1a19] z-20 hidden lg:block"></div>
</div>
</div>
</section>

<section className="py-32 border-b border-[#d3d1c8]" id="stay">
<div className="px-6 lg:px-20 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-xl">
<h2 className="text-4xl lg:text-6xl font-['Playfair_Display',_serif] tracking-tight text-[#1a1a19] mb-4">
            Sanctuaries of Rest
          </h2>
<p className="text-lg text-[#555] leading-relaxed">
            Minimalist spaces designed to quiet the mind, featuring natural
            materials, private courtyards, and unobstructed views of the wild
            terrain.
          </p>
</div>
<a className="flex-shrink-0 text-xs tracking-[0.15em] uppercase font-medium border border-[#1a1a19] px-6 py-3 hover:bg-[#1a1a19] hover:text-[#e6e4dc] transition-colors self-start md:self-auto" href="#">
          View all spaces
        </a>
</div>

<div className="flex overflow-x-auto gap-8 px-6 lg:px-20 pb-12 snap-x snap-mandatory no-scrollbar">

<div className="min-w-[85vw] md:min-w-[400px] lg:min-w-[450px] flex flex-col group cursor-pointer snap-start">
<div className="relative h-[60vh] overflow-hidden mb-6">
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="The Courtyard Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 z-20 bg-[#e6e4dc]/90 backdrop-blur-sm px-3 py-1 text-[0.65rem] tracking-widest uppercase font-medium">
              From $850
            </div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-2xl font-['Playfair_Display',_serif] tracking-tight mb-2">
                The Courtyard Suite
              </h3>
<div className="flex items-center gap-3 text-xs text-[#666] tracking-wide">
<span>65 SQM</span>
<span className="w-1 h-1 rounded-full bg-[#a09e94]"></span>
<span>Private Garden</span>
</div>
</div>
<div className="w-10 h-10 rounded-full border border-[#d3d1c8] flex items-center justify-center group-hover:bg-[#1a1a19] group-hover:text-white transition-all duration-300">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] lg:min-w-[450px] flex flex-col group cursor-pointer snap-start">
<div className="relative h-[60vh] overflow-hidden mb-6">
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="The Canopy Villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 z-20 bg-[#e6e4dc]/90 backdrop-blur-sm px-3 py-1 text-[0.65rem] tracking-widest uppercase font-medium">
              From $1,200
            </div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-2xl font-['Playfair_Display',_serif] tracking-tight mb-2">
                The Canopy Villa
              </h3>
<div className="flex items-center gap-3 text-xs text-[#666] tracking-wide">
<span>120 SQM</span>
<span className="w-1 h-1 rounded-full bg-[#a09e94]"></span>
<span>Plunge Pool</span>
</div>
</div>
<div className="w-10 h-10 rounded-full border border-[#d3d1c8] flex items-center justify-center group-hover:bg-[#1a1a19] group-hover:text-white transition-all duration-300">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] lg:min-w-[450px] flex flex-col group cursor-pointer snap-start">
<div className="relative h-[60vh] overflow-hidden mb-6">
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="The Sanctuary Pavilion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 z-20 bg-[#e6e4dc]/90 backdrop-blur-sm px-3 py-1 text-[0.65rem] tracking-widest uppercase font-medium">
              From $2,100
            </div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-2xl font-['Playfair_Display',_serif] tracking-tight mb-2">
                The Sanctuary Pavilion
              </h3>
<div className="flex items-center gap-3 text-xs text-[#666] tracking-wide">
<span>200 SQM</span>
<span className="w-1 h-1 rounded-full bg-[#a09e94]"></span>
<span>Panoramic Views</span>
</div>
</div>
<div className="w-10 h-10 rounded-full border border-[#d3d1c8] flex items-center justify-center group-hover:bg-[#1a1a19] group-hover:text-white transition-all duration-300">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1a1a19] text-[#e6e4dc] py-32 relative overflow-hidden" id="wellness">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<img className="w-full h-full object-cover mix-blend-overlay" src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-6 lg:px-20 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="flex flex-col gap-10">
<div className="w-16 h-[1px] bg-[#82836d]"></div>
<h2 className="text-5xl lg:text-7xl font-['Playfair_Display',_serif] tracking-tight leading-none">
              Healing
              <br/>
<span className="italic text-[#82836d]">Waters</span>
              &amp;
              <br/>
              Ancient Rituals.
            </h2>
<p className="text-lg text-[#b5b4a9] leading-relaxed max-w-md">
              Our subterranean spa harnesses the thermal properties of the
              earth. Experience bespoke treatments grounded in indigenous
              traditions, designed to restore energetic balance.
            </p>
<div className="flex flex-col gap-6 mt-8">
<div className="flex items-center justify-between border-b border-[#333] pb-4 group cursor-pointer">
<span className="text-xl font-['Playfair_Display',_serif] group-hover:text-[#82836d] transition-colors">
                  Thermal Bathhouse
                </span>
<i className="w-5 h-5 text-[#666] group-hover:rotate-90 transition-transform" data-lucide="plus"></i>
</div>
<div className="flex items-center justify-between border-b border-[#333] pb-4 group cursor-pointer">
<span className="text-xl font-['Playfair_Display',_serif] group-hover:text-[#82836d] transition-colors">
                  Holistic Therapies
                </span>
<i className="w-5 h-5 text-[#666] group-hover:rotate-90 transition-transform" data-lucide="plus"></i>
</div>
<div className="flex items-center justify-between border-b border-[#333] pb-4 group cursor-pointer">
<span className="text-xl font-['Playfair_Display',_serif] group-hover:text-[#82836d] transition-colors">
                  Movement Studio
                </span>
<i className="w-5 h-5 text-[#666] group-hover:rotate-90 transition-transform" data-lucide="plus"></i>
</div>
</div>
</div>
<div className="relative h-[70vh] w-full">
<img alt="Dark moody spa pool" className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px]" src="https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 lg:-left-12 bg-[#e6e4dc] text-[#1a1a19] p-6 lg:p-8 rounded-tr-3xl flex flex-col gap-2 shadow-2xl">
<span className="text-4xl font-['Playfair_Display',_serif]">12</span>
<span className="text-[0.65rem] tracking-widest uppercase font-medium">
                Bespoke
                <br/>
                Treatment Rooms
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-20 border-b border-[#d3d1c8]">
<div className="text-center mb-20 max-w-2xl mx-auto flex flex-col items-center gap-6">
<i className="w-6 h-6 text-[#82836d]" data-lucide="leaf"></i>
<h2 className="text-4xl lg:text-5xl font-['Playfair_Display',_serif] tracking-tight text-[#1a1a19]">
          Nourishment as Art
        </h2>
<p className="text-lg text-[#555]">
          A culinary philosophy dictated by the seasons. We harvest daily from
          our organic gardens to create dishes that vibrate with life and
          flavor.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 h-auto md:h-[80vh]">

<div className="md:col-span-1 h-[50vh] md:h-full relative overflow-hidden group">
<img alt="Minimalist dining plate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<span className="text-white text-lg font-['Playfair_Display',_serif]">
              The Earth Menu
            </span>
</div>
</div>

<div className="md:col-span-2 grid grid-rows-2 gap-6 lg:gap-10 h-[80vh] md:h-full">

<div className="relative overflow-hidden group bg-[#1a1a19]">
<img alt="Restaurant interior" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none p-6 text-center">
<span className="text-xs tracking-[0.2em] uppercase mb-3 opacity-80">
                Restaurant
              </span>
<h3 className="text-3xl font-['Playfair_Display',_serif] tracking-tight">
                Ochre
              </h3>
</div>
</div>

<div className="grid grid-cols-2 gap-6 lg:gap-10">
<div className="relative overflow-hidden group">
<img alt="Fresh ingredients" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-[#d3d1c8]/30 flex flex-col justify-center p-8 lg:p-12">
<h4 className="text-2xl font-['Playfair_Display',_serif] tracking-tight mb-4 text-[#1a1a19]">
                From the Source
              </h4>
<p className="text-sm text-[#555] leading-relaxed mb-6">
                Explore our bio-dynamic farm and forage with our chefs for your
                evening meal.
              </p>
<a className="text-xs uppercase tracking-widest font-medium hover:text-[#82836d] transition-colors w-max border-b border-current pb-1" href="#">
                Discover
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-20 border-b border-[#d3d1c8]" id="journal">
<div className="max-w-4xl mx-auto">
<div className="flex items-center justify-between mb-16 border-b border-[#1a1a19] pb-6">
<h2 className="text-3xl font-['Playfair_Display',_serif] tracking-tight text-[#1a1a19]">
            The Journal
          </h2>
<a className="text-xs uppercase tracking-[0.15em] font-medium text-[#555] hover:text-[#1a1a19] transition-colors" href="#">
            Read all
          </a>
</div>
<div className="flex flex-col gap-10">

<article className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-3 text-xs tracking-widest text-[#666] pt-2">
              Oct 12, 2023
            </div>
<div className="md:col-span-7">
<h3 className="text-2xl lg:text-3xl font-['Playfair_Display',_serif] tracking-tight text-[#1a1a19] mb-3 group-hover:text-[#82836d] transition-colors">
                The Art of Wabi-Sabi in Modern Architecture
              </h3>
<p className="text-base text-[#555] line-clamp-2">
                Exploring how finding beauty in imperfection shapes the spatial
                experience and promotes profound psychological calm.
              </p>
</div>
<div className="md:col-span-2 flex justify-end md:justify-center pt-2">
<div className="w-8 h-8 rounded-full border border-[#d3d1c8] flex items-center justify-center group-hover:bg-[#1a1a19] group-hover:text-white transition-all">
<i className="w-3 h-3" data-lucide="arrow-right"></i>
</div>
</div>
</article>
<div className="w-full h-[1px] bg-[#d3d1c8]"></div>

<article className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-3 text-xs tracking-widest text-[#666] pt-2">
              Sep 28, 2023
            </div>
<div className="md:col-span-7">
<h3 className="text-2xl lg:text-3xl font-['Playfair_Display',_serif] tracking-tight text-[#1a1a19] mb-3 group-hover:text-[#82836d] transition-colors">
                Foraging for Autumn: A Culinary Walk
              </h3>
<p className="text-base text-[#555] line-clamp-2">
                Join head chef Elias on a misty morning walk through the
                surrounding forests to discover the robust flavors of the
                changing season.
              </p>
</div>
<div className="md:col-span-2 flex justify-end md:justify-center pt-2">
<div className="w-8 h-8 rounded-full border border-[#d3d1c8] flex items-center justify-center group-hover:bg-[#1a1a19] group-hover:text-white transition-all">
<i className="w-3 h-3" data-lucide="arrow-right"></i>
</div>
</div>
</article>
<div className="w-full h-[1px] bg-[#d3d1c8]"></div>

<article className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-3 text-xs tracking-widest text-[#666] pt-2">
              Sep 05, 2023
            </div>
<div className="md:col-span-7">
<h3 className="text-2xl lg:text-3xl font-['Playfair_Display',_serif] tracking-tight text-[#1a1a19] mb-3 group-hover:text-[#82836d] transition-colors">
                Breathwork as a Pathway to Stillness
              </h3>
<p className="text-base text-[#555] line-clamp-2">
                Understanding the physiological and spiritual benefits of
                conscious breathing techniques integrated into our morning
                rituals.
              </p>
</div>
<div className="md:col-span-2 flex justify-end md:justify-center pt-2">
<div className="w-8 h-8 rounded-full border border-[#d3d1c8] flex items-center justify-center group-hover:bg-[#1a1a19] group-hover:text-white transition-all">
<i className="w-3 h-3" data-lucide="arrow-right"></i>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="h-[70vh] relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[#1a1a19]">
<img alt="Nature landscape" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&amp;w=2159&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
<i className="w-10 h-10 text-[#82836d] mx-auto mb-8 opacity-50" data-lucide="quote"></i>
<h2 className="text-3xl md:text-5xl font-['Playfair_Display',_serif] tracking-tight text-white leading-tight mb-8">
          "It was the first time in years I heard nothing but the sound of my
          own breath. A profound reset."
        </h2>
<p className="text-xs uppercase tracking-[0.2em] text-[#b5b4a9]">
          — C. Magazine
        </p>
</div>
</section>

<section className="py-32 px-6 lg:px-20 bg-[#e6e4dc] border-b border-[#d3d1c8]" id="book">
<div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-12">
<div className="w-16 h-16 rounded-full border border-[#1a1a19] flex items-center justify-center mb-4">
<div className="w-3 h-3 rounded-full bg-[#82836d]"></div>
</div>
<h2 className="text-5xl lg:text-7xl font-['Playfair_Display',_serif] tracking-tighter text-[#1a1a19] leading-none">
          Ready to return
          <br/>
<span className="italic text-[#666]">to yourself?</span>
</h2>

<div className="w-full max-w-3xl bg-white p-4 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-center gap-4 border border-[#d3d1c8]">
<div className="flex-1 flex items-center px-6 py-3 hover:bg-[#f5f4f0] rounded-full cursor-pointer transition-colors w-full border-b md:border-b-0 md:border-r border-[#e6e4dc]">
<i className="w-5 h-5 text-[#82836d] mr-4" data-lucide="calendar"></i>
<div className="flex flex-col text-left">
<span className="text-[0.65rem] tracking-widest uppercase text-[#888] font-medium">
                Arrival
              </span>
<span className="text-base text-[#1a1a19] font-medium">
                Select Date
              </span>
</div>
</div>
<div className="flex-1 flex items-center px-6 py-3 hover:bg-[#f5f4f0] rounded-full cursor-pointer transition-colors w-full border-b md:border-b-0 md:border-r border-[#e6e4dc]">
<i className="w-5 h-5 text-[#82836d] mr-4" data-lucide="calendar"></i>
<div className="flex flex-col text-left">
<span className="text-[0.65rem] tracking-widest uppercase text-[#888] font-medium">
                Departure
              </span>
<span className="text-base text-[#1a1a19] font-medium">
                Select Date
              </span>
</div>
</div>
<div className="flex-1 flex items-center px-6 py-3 hover:bg-[#f5f4f0] rounded-full cursor-pointer transition-colors w-full">
<i className="w-5 h-5 text-[#82836d] mr-4" data-lucide="user"></i>
<div className="flex flex-col text-left">
<span className="text-[0.65rem] tracking-widest uppercase text-[#888] font-medium">
                Guests
              </span>
<span className="text-base text-[#1a1a19] font-medium">2 Adults</span>
</div>
<i className="w-4 h-4 ml-auto text-[#888]" data-lucide="chevron-down"></i>
</div>
<button className="w-full md:w-auto bg-[#1a1a19] text-white px-8 py-5 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#82836d] transition-colors flex items-center justify-center flex-shrink-0">
            Check Availability
          </button>
</div>
</div>
</section>

<footer className="bg-[#1a1a19] text-[#e6e4dc] pt-24 pb-10 px-6 lg:px-20">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

<div className="flex flex-col gap-8">
<a className="flex items-center gap-4" href="#">
<div className="w-8 h-8 flex items-center justify-center border border-[#e6e4dc]">
<svg className="w-full h-full p-1 text-[#e6e4dc]" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="M4 20L12 4L20 20"></path>
<path d="M4 6H20"></path>
</svg>
</div>
<span className="text-sm tracking-[0.2em] font-medium uppercase">
              Âtma
            </span>
</a>
<p className="text-sm text-[#b5b4a9] leading-relaxed">
            A sanctuary for those seeking stillness, situated at the edge of the
            known world.
          </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#e6e4dc] hover:text-[#1a1a19] transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#e6e4dc] hover:text-[#1a1a19] transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
</div>
</div>

<div className="flex flex-col gap-6">
<h4 className="text-xs uppercase tracking-widest text-[#666] font-medium mb-2">
            Explore
          </h4>
<a className="text-base hover:text-[#82836d] transition-colors w-max" href="#stay">
            Accommodations
          </a>
<a className="text-base hover:text-[#82836d] transition-colors w-max" href="#wellness">
            The Spa
          </a>
<a className="text-base hover:text-[#82836d] transition-colors w-max" href="#experiences">
            Dining &amp; Experiences
          </a>
<a className="text-base hover:text-[#82836d] transition-colors w-max" href="#journal">
            Journal
          </a>
<a className="text-base hover:text-[#82836d] transition-colors w-max" href="#about">
            Our Story
          </a>
</div>

<div className="flex flex-col gap-6">
<h4 className="text-xs uppercase tracking-widest text-[#666] font-medium mb-2">
            Contact
          </h4>
<p className="text-base text-[#b5b4a9]">
            124 Sanctuary Road,
            <br/>
            Highland Valley, 90210
          </p>
<a className="text-base hover:text-[#82836d] transition-colors w-max" href="mailto:reserve@atma.com">
            reserve@atma.com
          </a>
<a className="text-base hover:text-[#82836d] transition-colors w-max" href="tel:+18001234567">
            +1 800 123 4567
          </a>
</div>

<div className="flex flex-col gap-6">
<h4 className="text-xs uppercase tracking-widest text-[#666] font-medium mb-2">
            Newsletter
          </h4>
<p className="text-sm text-[#b5b4a9]">
            Subscribe to receive notes on wellness and exclusive offers.
          </p>
<form className="flex items-end border-b border-[#555] pb-2 mt-2 group">
<input className="bg-transparent border-none outline-none text-base w-full text-[#e6e4dc] placeholder-[#666] group-focus-within:placeholder-transparent transition-all" placeholder="Email address" type="email"/>
<button className="text-[#82836d] hover:text-white transition-colors" type="submit">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#333] text-xs text-[#666] tracking-wide">
<p>© 2024 ÂTMA Wellness Hotel. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-[#e6e4dc] transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-[#e6e4dc] transition-colors" href="#">
            Terms of Service
          </a>
</div>
</div>
</footer>



    </>
  );
}
