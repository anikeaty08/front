import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide Icons
      lucide.createIcons();

      // Navbar Scroll Effect
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              navbar.classList.add('py-[-10px]', 'shadow-sm');
              navbar.firstElementChild.classList.remove('h-24');
              navbar.firstElementChild.classList.add('h-20');
          } else {
              navbar.classList.remove('py-[-10px]', 'shadow-sm');
              navbar.firstElementChild.classList.add('h-24');
              navbar.firstElementChild.classList.remove('h-20');
          }
      });

      // Mobile Menu Toggle
      const menuToggle = document.getElementById('menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      const menuLinks = document.querySelectorAll('.menu-link');
      let isMenuOpen = false;

      function toggleMenu() {
          isMenuOpen = !isMenuOpen;
          if (isMenuOpen) {
              mobileMenu.classList.remove('translate-x-full');
              menuToggle.innerHTML = '<i data-lucide="x" class="w-5 h-5" stroke-width="1.5"></i>';
              document.body.style.overflow = 'hidden'; // Prevent scrolling
          } else {
              mobileMenu.classList.add('translate-x-full');
              menuToggle.innerHTML = '<i data-lucide="menu" class="w-5 h-5" stroke-width="1.5"></i>';
              document.body.style.overflow = '';
          }
          lucide.createIcons();
      }

      menuToggle.addEventListener('click', toggleMenu);

      // Close menu when a link is clicked
      menuLinks.forEach(link => {
          link.addEventListener('click', () => {
              if (isMenuOpen) toggleMenu();
          });
      });

      // Simple Reveal Animation on Scroll
      function reveal() {
          var reveals = document.querySelectorAll(".reveal");
          for (var i = 0; i < reveals.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = reveals[i].getBoundingClientRect().top;
              var elementVisible = 100;
              if (elementTop < windowHeight - elementVisible) {
                  reveals[i].classList.add("active");
              }
          }
      }
      window.addEventListener("scroll", reveal);
      // Trigger once on load
      reveal();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-white/50 backdrop-blur-md border-b border-white/20 transition-all duration-300" id="navbar">
<div className="mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">

<a className="flex items-center gap-3 group relative z-50" href="#">
<div className="w-10 h-12 border border-[#1A2D2B] rounded-t-full flex items-center justify-center p-2 relative overflow-hidden group-hover:border-[#B89C78] transition-colors">
<i className="w-5 h-5 text-[#B89C78]" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-base tracking-[0.2em] uppercase font-medium leading-none">
              Aurora
            </span>
<span className="text-[10px] tracking-widest text-gray-500 uppercase mt-1">
              Wellness Hotel
            </span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-10">
<a className="text-xs tracking-widest uppercase font-medium hover:text-[#B89C78] transition-colors" href="#stay">
            Stay
          </a>
<a className="text-xs tracking-widest uppercase font-medium hover:text-[#B89C78] transition-colors" href="#wellness">
            Wellness
          </a>
<a className="text-xs tracking-widest uppercase font-medium hover:text-[#B89C78] transition-colors" href="#experiences">
            Experiences
          </a>
<a className="text-xs tracking-widest uppercase font-medium hover:text-[#B89C78] transition-colors" href="#cuisine">
            Cuisine
          </a>
<a className="text-xs tracking-widest uppercase font-medium hover:text-[#B89C78] transition-colors" href="#offers">
            Offers
          </a>
<a className="text-xs tracking-widest uppercase font-medium hover:text-[#B89C78] transition-colors" href="#about">
            About
          </a>
</nav>

<div className="flex items-center gap-4 relative z-50">
<a className="hidden md:inline-flex items-center justify-center bg-[#1A2D2B] text-white px-8 py-3.5 rounded-full text-xs tracking-widest uppercase font-medium hover:bg-[#233c39] transition-colors" href="#book">
            Book Your Stay
          </a>
<button className="w-12 h-12 rounded-full bg-white/80 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" id="menu-toggle">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<div className="fixed inset-0 bg-[#F4F3EF] z-40 transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col justify-center px-10" id="mobile-menu">
<nav className="flex flex-col gap-8 text-center">
<a className="text-3xl font-serif tracking-tight hover:text-[#B89C78] transition-colors menu-link" href="#stay">
          Stay
        </a>
<a className="text-3xl font-serif tracking-tight hover:text-[#B89C78] transition-colors menu-link" href="#wellness">
          Wellness
        </a>
<a className="text-3xl font-serif tracking-tight hover:text-[#B89C78] transition-colors menu-link" href="#experiences">
          Experiences
        </a>
<a className="text-3xl font-serif tracking-tight hover:text-[#B89C78] transition-colors menu-link" href="#cuisine">
          Cuisine
        </a>
<a className="text-3xl font-serif tracking-tight hover:text-[#B89C78] transition-colors menu-link" href="#offers">
          Offers
        </a>
<a className="text-3xl font-serif tracking-tight hover:text-[#B89C78] transition-colors menu-link" href="#about">
          About
        </a>
</nav>
</div>
<main>

<section className="relative min-h-screen pt-24 pb-32 lg:pb-0 overflow-hidden flex items-center bg-[#F4F3EF]">

<div className="absolute top-0 right-0 w-full lg:w-[55%] h-[50vh] lg:h-full z-0 overflow-hidden lg:rounded-bl-[40px] shadow-2xl">
<img alt="Serene spa pool" className="w-full h-full object-cover object-center transform scale-105 hover:scale-100 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
</div>

<div className="absolute bottom-0 left-0 w-[45vw] h-[65vh] bg-[#1A2D2B] rounded-tr-[100%] z-0 hidden lg:block shadow-2xl"></div>
<div className="absolute bottom-0 left-0 w-full h-[30vh] bg-[#1A2D2B] rounded-tr-[40px] z-0 lg:hidden"></div>

<div className="absolute bottom-8 left-6 lg:bottom-12 lg:left-12 z-20 flex flex-col gap-6">
<div className="w-10 h-12 border border-[#B89C78]/50 rounded-t-full flex items-center justify-center p-1.5">
<i className="w-5 h-5 text-[#B89C78]" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-2">
<span className="text-[10px] tracking-[0.2em] text-white/90 uppercase font-medium">
              Rest.
            </span>
<span className="text-[10px] tracking-[0.2em] text-white/90 uppercase font-medium">
              Reset.
            </span>
<span className="text-[10px] tracking-[0.2em] text-white/90 uppercase font-medium">
              Reconnect.
            </span>
</div>
<div className="w-8 h-[1px] bg-[#B89C78] mt-2"></div>
</div>

<div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col justify-center mt-[45vh] lg:mt-0 pointer-events-none">
<div className="max-w-3xl pointer-events-auto relative">
<span className="inline-block text-[10px] text-[#B89C78] tracking-[0.25em] uppercase font-bold mb-6">
              A Sanctuary of Balance
            </span>
<h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-serif leading-[0.9] tracking-tight text-[#1A2D2B] mb-8 relative z-20 mix-blend-normal">
              Wellness
              <br/>
              Redefined.
            </h1>
<p className="text-lg text-[#1A2D2B] lg:text-gray-600 mb-10 max-w-md font-light leading-relaxed relative z-20">
              Premium spa rituals, mindful experiences and nature in perfect
              harmony.
            </p>
<a className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#B89C78] hover:bg-[#a38865] text-white transition-all duration-300 hover:scale-110 relative z-20 shadow-xl" href="#discover">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="hidden lg:flex absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 z-20 w-44 h-44 items-center justify-center group cursor-pointer">
<div className="absolute inset-0 bg-[#F4F3EF]/90 backdrop-blur-xl rounded-full shadow-2xl border border-white/60 group-hover:scale-105 transition-transform duration-500"></div>
<div className="relative w-full h-full animate-[spin_20s_linear_infinite]">
<svg className="w-full h-full p-2 absolute inset-0" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" id="textPath-badge"></path>
<text className="text-[9px] uppercase tracking-[0.35em] fill-[#1A2D2B] font-medium">
<textpath href="#textPath-badge" startoffset="0%">
                  Oasis • Rest • Nature • Fresh •
                </textpath>
</text>
</svg>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full border border-[#B89C78]/50 flex items-center justify-center bg-white shadow-inner group-hover:bg-[#B89C78] transition-colors duration-300">
<i className="w-6 h-6 text-[#B89C78] group-hover:text-white transition-colors duration-300" data-lucide="waves" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="absolute bottom-0 lg:bottom-10 left-0 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-auto z-30 px-4 lg:px-0 pb-6 lg:pb-0 pointer-events-auto">
<form className="bg-white lg:rounded-full rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col lg:flex-row items-center p-2 lg:p-3 border border-gray-100/50 backdrop-blur-xl max-w-5xl mx-auto w-full transition-all hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]">
<div className="flex flex-col lg:flex-row w-full lg:w-auto divide-y lg:divide-y-0 lg:divide-x divide-gray-100">

<div className="relative flex items-center gap-4 px-6 py-4 lg:py-2 cursor-pointer group w-full lg:w-[220px]">
<i className="w-5 h-5 text-gray-400 group-hover:text-[#B89C78] transition-colors" data-lucide="calendar" strokeWidth="1.5"></i>
<div className="flex flex-col flex-1 relative">
<label className="text-[10px] tracking-widest text-gray-400 uppercase font-medium mb-1 cursor-pointer" htmlFor="checkin">
                    Check-in
                  </label>
<input className="w-full text-base text-[#1A2D2B] font-medium bg-transparent focus:outline-none cursor-pointer appearance-none" id="checkin" name="checkin" required="" style={{colorScheme: 'light'}} type="date" value="2024-06-24"/>
</div>
</div>

<div className="relative flex items-center gap-4 px-6 py-4 lg:py-2 cursor-pointer group w-full lg:w-[220px]">
<i className="w-5 h-5 text-gray-400 group-hover:text-[#B89C78] transition-colors" data-lucide="user" strokeWidth="1.5"></i>
<div className="flex flex-col flex-1 relative">
<label className="text-[10px] tracking-widest text-gray-400 uppercase font-medium mb-1 cursor-pointer" htmlFor="checkout">
                    Check-out
                  </label>
<input className="w-full text-base text-[#1A2D2B] font-medium bg-transparent focus:outline-none cursor-pointer appearance-none" id="checkout" name="checkout" required="" style={{colorScheme: 'light'}} type="date" value="2024-06-27"/>
</div>
</div>

<div className="relative flex items-center gap-4 px-6 py-4 lg:py-2 cursor-pointer group w-full lg:w-[200px]">
<i className="w-5 h-5 text-gray-400 group-hover:text-[#B89C78] transition-colors" data-lucide="users" strokeWidth="1.5"></i>
<div className="flex flex-col flex-1 relative">
<label className="text-[10px] tracking-widest text-gray-400 uppercase font-medium mb-1 cursor-pointer" htmlFor="guests-select">
                    Guests
                  </label>
<div className="relative w-full">
<select className="w-full text-base text-[#1A2D2B] font-medium bg-transparent focus:outline-none cursor-pointer appearance-none pr-6" id="guests-select" name="guests">
<option value="1">1 Adult</option>
<option selected="" value="2">2 Adults</option>
<option value="3">3 Adults</option>
<option value="4">4 Adults</option>
</select>
<i className="w-4 h-4 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-[#B89C78] transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="px-2 w-full lg:w-auto mt-4 lg:mt-0">
<button className="w-full lg:w-auto flex items-center justify-between lg:justify-center gap-4 bg-[#1A2D2B] hover:bg-[#233c39] text-white px-8 py-4 lg:py-4 rounded-xl lg:rounded-full transition-all duration-300 group hover:shadow-lg hover:-translate-y-0.5" onclick="alert('Checking availability...')" type="button">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors hidden lg:flex">
<i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<span className="text-[10px] tracking-widest uppercase font-medium text-left leading-tight">
                  Check
                  <br/>
                  Availability
                </span>
</button>
</div>
</form>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-[#F4F3EF] rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[20vw] h-[20vw] bg-[#B89C78] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 lg:px-12 text-center reveal">
<span className="inline-block text-[10px] text-[#B89C78] tracking-[0.25em] uppercase font-bold mb-6">
            Our Philosophy
          </span>
<h2 className="text-4xl md:text-6xl font-serif tracking-tight text-[#1A2D2B] mb-12 leading-[1.1] max-w-4xl mx-auto">
            Find profound balance through mindful design and transformative
            care.
          </h2>
<p className="text-lg text-gray-600 font-light leading-relaxed mb-24 max-w-2xl mx-auto">
            At Aurora, we believe true luxury is the space to breathe. Every
            architectural detail, spa ritual, and culinary creation is
            meticulously crafted to foster a deep connection with your inner
            self.
          </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-full bg-[#F4F3EF] group-hover:bg-[#B89C78] flex items-center justify-center mb-8 transition-colors duration-500 shadow-sm">
<i className="w-8 h-8 text-[#1A2D2B] group-hover:text-white transition-colors duration-500" data-lucide="moon" strokeWidth="1"></i>
</div>
<h3 className="text-2xl font-serif tracking-tight mb-4 text-[#1A2D2B]">
                Restorative Sleep
              </h3>
<p className="text-base text-gray-500 font-light leading-relaxed">
                Custom wellness beds and acoustic isolation designed for
                profound rest.
              </p>
</div>
<div className="flex flex-col items-center text-center group" style={{transitionDelay: '100ms'}}>
<div className="w-20 h-20 rounded-full bg-[#F4F3EF] group-hover:bg-[#B89C78] flex items-center justify-center mb-8 transition-colors duration-500 shadow-sm">
<i className="w-8 h-8 text-[#1A2D2B] group-hover:text-white transition-colors duration-500" data-lucide="droplets" strokeWidth="1"></i>
</div>
<h3 className="text-2xl font-serif tracking-tight mb-4 text-[#1A2D2B]">
                Thermal Healing
              </h3>
<p className="text-base text-gray-500 font-light leading-relaxed">
                Ancient hydrotherapy practices seamlessly integrated into modern
                facilities.
              </p>
</div>
<div className="flex flex-col items-center text-center group" style={{transitionDelay: '200ms'}}>
<div className="w-20 h-20 rounded-full bg-[#F4F3EF] group-hover:bg-[#B89C78] flex items-center justify-center mb-8 transition-colors duration-500 shadow-sm">
<i className="w-8 h-8 text-[#1A2D2B] group-hover:text-white transition-colors duration-500" data-lucide="flower-2" strokeWidth="1"></i>
</div>
<h3 className="text-2xl font-serif tracking-tight mb-4 text-[#1A2D2B]">
                Organic Nourishment
              </h3>
<p className="text-base text-gray-500 font-light leading-relaxed">
                Farm-to-table dining focused on vibrant, healing, and seasonal
                ingredients.
              </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F4F3EF]" id="stay">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div>
<span className="inline-block text-[10px] text-[#B89C78] tracking-[0.25em] uppercase font-medium mb-4">
                Accommodations
              </span>
<h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#1A2D2B]">
                Your Private Sanctuary
              </h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-[#1A2D2B] hover:text-[#B89C78] transition-colors mt-6 md:mt-0 pb-2 border-b border-[#1A2D2B] hover:border-[#B89C78]" href="#">
              View All Rooms
              <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group cursor-pointer reveal">
<div className="relative h-[450px] overflow-hidden rounded-[2rem]">
<img alt="Botanical Suite" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out" src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
<span className="bg-white text-[#1A2D2B] px-8 py-3 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-[#B89C78] hover:text-white transition-colors shadow-xl">
                    Book Suite
                  </span>
</div>
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full z-10 shadow-lg">
<span className="text-sm font-medium text-[#1A2D2B]">
                    from $450
                  </span>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
<h3 className="text-3xl font-serif tracking-tight text-white mb-3">
                    Botanical Suite
                  </h3>
<div className="flex items-center gap-4 text-white/90">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="maximize" strokeWidth="1.5"></i>
<span className="text-xs font-medium uppercase tracking-wider">
                        65 sqm
                      </span>
</div>
<div className="w-1 h-1 rounded-full bg-[#B89C78]"></div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-xs font-medium uppercase tracking-wider">
                        2 Guests
                      </span>
</div>
</div>
</div>
</div>
</div>
<div className="group cursor-pointer reveal" style={{transitionDelay: '100ms'}}>
<div className="relative h-[450px] overflow-hidden rounded-[2rem]">
<img alt="Thermal Villa" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
<span className="bg-white text-[#1A2D2B] px-8 py-3 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-[#B89C78] hover:text-white transition-colors shadow-xl">
                    Book Villa
                  </span>
</div>
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full z-10 shadow-lg">
<span className="text-sm font-medium text-[#1A2D2B]">
                    from $850
                  </span>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
<h3 className="text-3xl font-serif tracking-tight text-white mb-3">
                    Thermal Villa
                  </h3>
<div className="flex items-center gap-4 text-white/90">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="maximize" strokeWidth="1.5"></i>
<span className="text-xs font-medium uppercase tracking-wider">
                        120 sqm
                      </span>
</div>
<div className="w-1 h-1 rounded-full bg-[#B89C78]"></div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-xs font-medium uppercase tracking-wider">
                        2-4 Guests
                      </span>
</div>
</div>
</div>
</div>
</div>
<div className="group cursor-pointer reveal" style={{transitionDelay: '200ms'}}>
<div className="relative h-[450px] overflow-hidden rounded-[2rem]">
<img alt="Serenity Room" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out" src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
<span className="bg-white text-[#1A2D2B] px-8 py-3 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-[#B89C78] hover:text-white transition-colors shadow-xl">
                    Book Room
                  </span>
</div>
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full z-10 shadow-lg">
<span className="text-sm font-medium text-[#1A2D2B]">
                    from $320
                  </span>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
<h3 className="text-3xl font-serif tracking-tight text-white mb-3">
                    Serenity Room
                  </h3>
<div className="flex items-center gap-4 text-white/90">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="maximize" strokeWidth="1.5"></i>
<span className="text-xs font-medium uppercase tracking-wider">
                        45 sqm
                      </span>
</div>
<div className="w-1 h-1 rounded-full bg-[#B89C78]"></div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-xs font-medium uppercase tracking-wider">
                        2 Guests
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row bg-[#1A2D2B]" id="wellness">
<div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative order-2 lg:order-1">
<img alt="Spa Treatment" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center order-1 lg:order-2 reveal">
<span className="inline-block text-[10px] text-[#B89C78] tracking-[0.25em] uppercase font-medium mb-6">
            The Sanctuary Spa
          </span>
<h2 className="text-4xl md:text-5xl font-serif tracking-tight text-white mb-8 leading-tight">
            Ancient rituals for modern renewal.
          </h2>
<p className="text-lg text-gray-300 font-light mb-12 max-w-lg leading-relaxed">
            Our award-winning spa integrates centuries-old healing traditions
            with innovative wellness technologies to restore your body's natural
            equilibrium.
          </p>
<div className="flex flex-col gap-6 w-full max-w-md">
<div className="group cursor-pointer">
<div className="flex justify-between items-end border-b border-white/20 pb-4 mb-2 group-hover:border-[#B89C78] transition-colors">
<h4 className="text-xl font-serif text-white tracking-tight">
                  Holistic Massage
                </h4>
<span className="text-base text-[#B89C78] font-light">90 min</span>
</div>
<p className="text-sm text-gray-400 font-light">
                Deep tissue release combining aromatherapy and hot stones.
              </p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-end border-b border-white/20 pb-4 mb-2 group-hover:border-[#B89C78] transition-colors">
<h4 className="text-xl font-serif text-white tracking-tight">
                  Thermal Circuit
                </h4>
<span className="text-base text-[#B89C78] font-light">120 min</span>
</div>
<p className="text-sm text-gray-400 font-light">
                Guided journey through our saunas, ice rooms, and vitality
                pools.
              </p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-end border-b border-white/20 pb-4 mb-2 group-hover:border-[#B89C78] transition-colors">
<h4 className="text-xl font-serif text-white tracking-tight">
                  Radiance Facial
                </h4>
<span className="text-base text-[#B89C78] font-light">60 min</span>
</div>
<p className="text-sm text-gray-400 font-light">
                Organic botanical treatments for profound skin regeneration.
              </p>
</div>
</div>
<a className="inline-flex items-center gap-4 group cursor-pointer mt-12 w-fit" href="#">
<span className="text-xs tracking-widest uppercase font-medium text-white">
              Explore Spa Menu
            </span>
<div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#1A2D2B] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</a>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden" id="cuisine">

<svg className="absolute top-10 left-10 w-64 h-64 text-[#F4F3EF] opacity-50 pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24">
<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
<path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
</svg>
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
<div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
<img alt="Fine dining" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
<div className="flex items-center gap-3 mb-3">
<i className="w-4 h-4 text-[#B89C78] fill-[#B89C78]" data-lucide="star"></i>
<span className="text-xs font-medium tracking-widest uppercase">
                  Michelin Green Star
                </span>
</div>
<p className="text-sm text-gray-500 font-light">
                Recognized for our commitment to sustainable, local gastronomy.
              </p>
</div>
</div>
<div className="w-full lg:w-1/2 order-1 lg:order-2 reveal">
<span className="inline-block text-[10px] text-[#B89C78] tracking-[0.25em] uppercase font-medium mb-6">
              Culinary Arts
            </span>
<h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#1A2D2B] mb-8 leading-tight">
              Nourishment sourced from the earth.
            </h2>
<p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
              Our restaurant, Terra, offers a plant-forward menu that celebrates
              the seasons. We source 80% of our ingredients from our own organic
              gardens and local artisanal purveyors, crafting dishes that are as
              healing as they are exquisite.
            </p>
<ul className="flex flex-col gap-4 mb-10">
<li className="flex items-center gap-3 text-base text-gray-600 font-light">
<i className="w-5 h-5 text-[#B89C78]" data-lucide="check" strokeWidth="2"></i>
                Biodynamic wine pairing
              </li>
<li className="flex items-center gap-3 text-base text-gray-600 font-light">
<i className="w-5 h-5 text-[#B89C78]" data-lucide="check" strokeWidth="2"></i>
                Personalized nutrition plans
              </li>
<li className="flex items-center gap-3 text-base text-gray-600 font-light">
<i className="w-5 h-5 text-[#B89C78]" data-lucide="check" strokeWidth="2"></i>
                Interactive culinary workshops
              </li>
</ul>
<a className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-[#1A2D2B] pb-2 border-b border-[#1A2D2B] hover:text-[#B89C78] hover:border-[#B89C78] transition-colors" href="#">
              View Menus
            </a>
</div>
</div>
</section>

<section className="py-32 bg-[#F4F3EF]" id="experiences">
<div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16 reveal">
<span className="inline-block text-[10px] text-[#B89C78] tracking-[0.25em] uppercase font-medium mb-4">
            Curated Experiences
          </span>
<h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#1A2D2B]">
            Connect with your surroundings
          </h2>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[600px]">

<div className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer h-[300px] lg:h-full">
<img alt="Yoga pavilion" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
<i className="w-5 h-5 text-white" data-lucide="sun" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-serif text-white tracking-tight mb-2">
                  Sunrise Yoga Pavilion
                </h3>
<p className="text-sm text-gray-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Start your day with guided flow overlooking the misty valley.
                </p>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden group cursor-pointer h-[300px] lg:h-auto">
<img alt="Forest hiking" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-serif text-white tracking-tight mb-1">
                  Forest Bathing
                </h3>
<span className="text-xs text-[#B89C78] tracking-widest uppercase font-medium">
                  Guided Trails
                </span>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden group cursor-pointer h-[300px] lg:h-auto">
<img alt="Meditation" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-serif text-white tracking-tight mb-1">
                  Sound Healing
                </h3>
<span className="text-xs text-[#B89C78] tracking-widest uppercase font-medium">
                  Meditation
                </span>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer h-[300px] lg:h-auto">
<img alt="Tea ceremony" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
<div>
<h3 className="text-xl font-serif text-white tracking-tight mb-1">
                    Botanical Tea Ceremony
                  </h3>
<span className="text-xs text-[#B89C78] tracking-widest uppercase font-medium">
                    Daily Ritual
                  </span>
</div>
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="offers">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16 reveal">
<span className="inline-block text-[10px] text-[#B89C78] tracking-[0.25em] uppercase font-medium mb-4">
              Exclusive Packages
            </span>
<h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#1A2D2B]">
              Journeys to wellbeing
            </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
<div className="flex flex-col xl:flex-row bg-white rounded-[2rem] overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 reveal border border-gray-100/50">
<div className="w-full xl:w-2/5 h-72 xl:h-auto overflow-hidden relative">
<img alt="Spa retreat" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm text-[#1A2D2B] text-[10px] uppercase tracking-widest px-4 py-2 rounded-full font-bold shadow-sm">
                  3 Nights
                </div>
</div>
<div className="w-full xl:w-3/5 p-8 xl:p-12 flex flex-col justify-center bg-[#F4F3EF]/50 group-hover:bg-[#F4F3EF] transition-colors duration-500">
<h3 className="text-3xl font-serif tracking-tight text-[#1A2D2B] mb-4">
                  The Reset Retreat
                </h3>
<p className="text-base text-gray-600 font-light mb-8 leading-relaxed">
                  A comprehensive program focusing on digital detox, stress
                  reduction, and profound physical recovery.
                </p>
<ul className="flex flex-col gap-3 mb-10">
<li className="text-sm text-gray-600 flex items-center gap-3 font-light">
<div className="w-1.5 h-1.5 rounded-full bg-[#B89C78]"></div>
                    Daily 90-min spa treatments
                  </li>
<li className="text-sm text-gray-600 flex items-center gap-3 font-light">
<div className="w-1.5 h-1.5 rounded-full bg-[#B89C78]"></div>
                    All-inclusive culinary journey
                  </li>
<li className="text-sm text-gray-600 flex items-center gap-3 font-light">
<div className="w-1.5 h-1.5 rounded-full bg-[#B89C78]"></div>
                    Private meditation sessions
                  </li>
</ul>
<a className="inline-flex items-center gap-4 group/btn mt-auto w-fit" href="#">
<div className="w-12 h-12 rounded-full border border-[#1A2D2B]/20 flex items-center justify-center text-[#1A2D2B] group-hover/btn:bg-[#1A2D2B] group-hover/btn:text-white transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<span className="text-xs tracking-widest uppercase font-medium text-[#1A2D2B]">
                    Reserve Experience
                  </span>
</a>
</div>
</div>
<div className="flex flex-col xl:flex-row bg-white rounded-[2rem] overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 reveal border border-gray-100/50" style={{transitionDelay: '100ms'}}>
<div className="w-full xl:w-2/5 h-72 xl:h-auto overflow-hidden relative">
<img alt="Couples retreat" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm text-[#1A2D2B] text-[10px] uppercase tracking-widest px-4 py-2 rounded-full font-bold shadow-sm">
                  2 Nights
                </div>
</div>
<div className="w-full xl:w-3/5 p-8 xl:p-12 flex flex-col justify-center bg-[#F4F3EF]/50 group-hover:bg-[#F4F3EF] transition-colors duration-500">
<h3 className="text-3xl font-serif tracking-tight text-[#1A2D2B] mb-4">
                  Couples Harmony
                </h3>
<p className="text-base text-gray-600 font-light mb-8 leading-relaxed">
                  Reconnect with your partner through shared wellness
                  experiences in our private dual treatment suites.
                </p>
<ul className="flex flex-col gap-3 mb-10">
<li className="text-sm text-gray-600 flex items-center gap-3 font-light">
<div className="w-1.5 h-1.5 rounded-full bg-[#B89C78]"></div>
                    Couples massage workshop
                  </li>
<li className="text-sm text-gray-600 flex items-center gap-3 font-light">
<div className="w-1.5 h-1.5 rounded-full bg-[#B89C78]"></div>
                    Private thermal pool access
                  </li>
<li className="text-sm text-gray-600 flex items-center gap-3 font-light">
<div className="w-1.5 h-1.5 rounded-full bg-[#B89C78]"></div>
                    Champagne &amp; botanical dinner
                  </li>
</ul>
<a className="inline-flex items-center gap-4 group/btn mt-auto w-fit" href="#">
<div className="w-12 h-12 rounded-full border border-[#1A2D2B]/20 flex items-center justify-center text-[#1A2D2B] group-hover/btn:bg-[#1A2D2B] group-hover/btn:text-white transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<span className="text-xs tracking-widest uppercase font-medium text-[#1A2D2B]">
                    Reserve Experience
                  </span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#1A2D2B] relative overflow-hidden flex items-center justify-center min-h-[50vh]">

<div className="absolute inset-0 opacity-10">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,50 C20,80 80,20 100,50 L100,100 L0,100 Z" fill="#B89C78"></path>
</svg>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal">
<i className="w-12 h-12 text-[#B89C78] mx-auto mb-8 opacity-50" data-lucide="quote" strokeWidth="1"></i>
<h3 className="text-3xl md:text-5xl font-serif tracking-tight text-white leading-relaxed mb-10">
            "A profound sense of stillness envelops you from the moment you
            arrive. It is truly a sanctuary where time slows down and the soul
            rests."
          </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden">
<img alt="Guest" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="text-left">
<p className="text-base text-white font-medium">Elena R.</p>
<p className="text-xs text-gray-400 tracking-widest uppercase">
                Condé Nast Traveler
              </p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#12201F] pt-24 pb-12 border-t border-white/10 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">

<div className="flex flex-col gap-6">
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-12 border border-[#B89C78] rounded-t-full flex items-center justify-center p-2">
<i className="w-5 h-5 text-[#B89C78]" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-base tracking-[0.2em] uppercase font-medium leading-none text-white">
                  Aurora
                </span>
<span className="text-[10px] tracking-widest text-gray-400 uppercase mt-1">
                  Wellness Hotel
                </span>
</div>
</a>
<p className="text-sm text-gray-400 font-light max-w-xs">
              A sanctuary dedicated to profound rest, holistic healing, and
              reconnection with nature.
            </p>
</div>

<div>
<h4 className="text-xs tracking-widest uppercase font-medium text-[#B89C78] mb-6">
              Explore
            </h4>
<ul className="flex flex-col gap-4">
<li>
<a className="text-sm text-gray-300 hover:text-white transition-colors" href="#">
                  Our Accommodations
                </a>
</li>
<li>
<a className="text-sm text-gray-300 hover:text-white transition-colors" href="#">
                  The Sanctuary Spa
                </a>
</li>
<li>
<a className="text-sm text-gray-300 hover:text-white transition-colors" href="#">
                  Terra Restaurant
                </a>
</li>
<li>
<a className="text-sm text-gray-300 hover:text-white transition-colors" href="#">
                  Wellness Packages
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-xs tracking-widest uppercase font-medium text-[#B89C78] mb-6">
              Information
            </h4>
<ul className="flex flex-col gap-4">
<li>
<a className="text-sm text-gray-300 hover:text-white transition-colors" href="#">
                  Location &amp; Contact
                </a>
</li>
<li>
<a className="text-sm text-gray-300 hover:text-white transition-colors" href="#">
                  Gift Cards
                </a>
</li>
<li>
<a className="text-sm text-gray-300 hover:text-white transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="text-sm text-gray-300 hover:text-white transition-colors" href="#">
                  Press &amp; Media
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-xs tracking-widest uppercase font-medium text-[#B89C78] mb-6">
              Journal &amp; Offers
            </h4>
<p className="text-sm text-gray-400 font-light mb-4">
              Subscribe to receive insights on wellness and exclusive retreat
              invitations.
            </p>
<form className="relative group">
<input className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#B89C78] transition-colors" placeholder="Your email address" required="" type="email"/>
<button className="absolute right-0 top-0 text-[#B89C78] hover:text-white transition-colors" type="submit">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
<p className="text-xs text-gray-500 tracking-wider">
            © 2024 Aurora Wellness Hotel. All rights reserved.
          </p>
<div className="flex items-center gap-6">
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
<div className="flex items-center gap-4 ml-4">
<a className="text-gray-400 hover:text-[#B89C78] transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-gray-400 hover:text-[#B89C78] transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
