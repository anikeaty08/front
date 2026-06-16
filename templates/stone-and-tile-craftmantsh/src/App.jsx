import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
display: ['Cormorant Garamond', 'serif'],
},
colors: {
primary: {
DEFAULT: '#7F91AE',
dark: '#6a7d96',
light: '#9aa8be',
},
charcoal: '#2a2a2a',
warmBlack: '#1a1a1a',
gold: '#c9a961',
cream: '#f8f9fa',
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.025em',
widest: '0.2em',
},
animation: {
'fade-up': 'fadeUp 1s ease-out forwards',
'bounce-slow': 'bounce 3s infinite',
},
keyframes: {
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Navbar scroll effect
      const navbar = document.getElementById('navbar');
      const logoText = document.getElementById('nav-logo-text');
      const navLinks = document.querySelectorAll('.nav-link');
      const toggleBtn = document.querySelector('.nav-toggle-btn');

      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              navbar.classList.add('glass-nav', 'py-3');
              navbar.classList.remove('py-5');
              logoText.classList.replace('text-white', 'text-charcoal');
              navLinks.forEach(link => link.classList.replace('text-white/90', 'text-charcoal/80'));
              toggleBtn.classList.replace('text-white', 'text-charcoal');
          } else {
              navbar.classList.remove('glass-nav', 'py-3');
              navbar.classList.add('py-5');
              logoText.classList.replace('text-charcoal', 'text-white');
              navLinks.forEach(link => link.classList.replace('text-charcoal/80', 'text-white/90'));
              toggleBtn.classList.replace('text-charcoal', 'text-white');
          }
      });

      // Intersection Observer for fade animations
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate-fade-up');
                  entry.target.style.opacity = '1';
              }
          });
      }, { threshold: 0.1 });

      document.querySelectorAll('.fade-item').forEach(el => {
          el.style.opacity = '0';
          observer.observe(el);
      });

      // Modal Logic
      const modal = document.getElementById('quoteModal');
      const modalContent = document.getElementById('modalContent');

      function openModal() {
          modal.classList.remove('hidden');
          setTimeout(() => {
              modal.classList.remove('opacity-0');
              modalContent.classList.remove('scale-95');
              modalContent.classList.add('scale-100');
          }, 10);
          document.body.style.overflow = 'hidden';
      }

      function closeModal() {
          modal.classList.add('opacity-0');
          modalContent.classList.remove('scale-100');
          modalContent.classList.add('scale-95');
          setTimeout(() => {
              modal.classList.add('hidden');
              document.body.style.overflow = '';
          }, 300);
      }

      modal.addEventListener('click', (e) => {
          if (e.target === modal) closeModal();
      });

      document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') closeModal();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 transition-all duration-500 lg:px-12 glass-nav py-3" id="navbar">
<a className="group flex items-center gap-2 text-white transition-colors duration-300" href="#">
<span className="font-display text-3xl font-semibold tracking-tighter group-[.scrolled]:text-charcoal" id="nav-logo-text">
          BGM
        </span>
</a>

<ul className="hidden items-center gap-10 md:flex">
<li>
<a className="text-xs font-medium uppercase tracking-[0.15em] hover:text-white transition-colors nav-link" href="#services">
            Services
          </a>
</li>
<li className="">
<a className="text-xs font-medium uppercase tracking-[0.15em] hover:text-white transition-colors nav-link" href="#projects">
            Projects
          </a>
</li>
<li>
<a className="text-xs font-medium uppercase tracking-[0.15em] hover:text-white transition-colors nav-link" href="#about">
            About
          </a>
</li>
<li className="">
<a className="text-xs font-medium uppercase tracking-[0.15em] hover:text-white transition-colors nav-link" href="#contact">
            Contact
          </a>
</li>
</ul>

<div className="flex items-center gap-6">
<button className="hidden md:block bg-primary hover:bg-primary-dark text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primary/20" onclick="openModal()">
          Get a Quote
        </button>
<button className="md:hidden nav-toggle-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative flex h-screen min-h-[700px] items-center justify-center overflow-hidden bg-warmBlack">

<div className="absolute inset-0 bg-gradient-to-br from-[#3d4a5c] via-[#2a3441] to-[#1a2028]"></div>
<div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 400 400\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noiseFilter\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.9\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noiseFilter)\\'/%3E%3C/svg%3E\')'}}></div>

<div className="relative z-10 mx-auto max-w-4xl px-6 text-center animate-fade-up">
<div className="mb-8 inline-block border border-primary/30 bg-white/5 px-4 py-2 backdrop-blur-sm">
<span className="text-xs uppercase tracking-[0.2em] text-primary-light">
            Premium Stone Craftsmanship
          </span>
</div>
<h1 className="mb-6 font-display text-5xl font-light leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
          Crafting
          <em className="font-normal text-primary-light italic">Elegance</em>
<br/>
          in Every Stone
        </h1>
<p className="mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-gray-300 md:text-lg">
          Expert fabrication and installation of granite, marble, quartz, and
          tile. Transforming spaces throughout Southern California with
          unmatched precision.
        </p>
<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="group flex min-w-[180px] items-center justify-center gap-2 bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/20" onclick="openModal()">
            Get a Quote
            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<a className="flex min-w-[180px] items-center justify-center border border-white/20 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10 hover:border-white" href="#projects">
            View Portfolio
          </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-white/50 animate-bounce-slow">
<span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
<iconify-icon icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</section>

<section className="relative bg-primary px-6 py-32 text-white" id="services">
<div className="mx-auto max-w-7xl">
<div className="mb-20 text-center">
<span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-white/80">
            What We Do
          </span>
<h2 className="font-display text-4xl font-normal leading-tight tracking-tight text-white md:text-5xl">
            Our Services
          </h2>
</div>
<div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4 border border-white/10">

<div className="group relative bg-primary p-10 transition-colors hover:bg-white/5">
<div className="mb-8 inline-flex h-12 w-12 items-center justify-center text-white">
<iconify-icon icon="solar:ruler-pen-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="mb-4 font-display text-2xl text-white">Fabrication</h3>
<p className="mb-8 text-sm leading-relaxed text-white/70">
              Precision stone fabrication meeting MIA standards. Custom layouts
              and edge profiling crafted with CNC accuracy.
            </p>
<ul className="space-y-3 text-xs tracking-wide text-white/90">
<li className="flex items-center gap-2">
<div className="h-1 w-1 rounded-full bg-white"></div>
                Custom Countertops
              </li>
<li className="flex items-center gap-2">
<div className="h-1 w-1 rounded-full bg-white"></div>
                Edge Profiling
              </li>
<li className="flex items-center gap-2">
<div className="h-1 w-1 rounded-full bg-white"></div>
                Polishing &amp; Sealing
              </li>
</ul>
</div>

<div className="group relative bg-primary p-10 transition-colors hover:bg-white/5">
<div className="mb-8 inline-flex h-12 w-12 items-center justify-center text-white">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="mb-4 font-display text-2xl text-white">Installation</h3>
<p className="mb-8 text-sm leading-relaxed text-white/70">
              Professional union masons delivering installation to TCA and ANSI
              standards for lasting durability.
            </p>
<ul className="space-y-3 text-xs tracking-wide text-white/90">
<li className="flex items-center gap-2">
<div className="h-1 w-1 rounded-full bg-white"></div>
                Tile Flooring
              </li>
<li className="flex items-center gap-2">
<div className="h-1 w-1 rounded-full bg-white"></div>
                Wall Cladding
              </li>
<li className="flex items-center gap-2">
<div className="h-1 w-1 rounded-full bg-white"></div>
                Backsplashes
              </li>
</ul>
</div>

<div className="group relative bg-primary p-10 transition-colors hover:bg-white/5">
<div className="mb-8 inline-flex h-12 w-12 items-center justify-center text-white">
<iconify-icon icon="solar:home-2-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="mb-4 font-display text-2xl text-white">Residential</h3>
<p className="mb-8 text-sm leading-relaxed text-white/70">
              Transforming homes with custom stone work for kitchens, baths,
              fireplaces, and outdoor living spaces.
            </p>
<ul className="space-y-3 text-xs tracking-wide text-white/90">
<li className="flex items-center gap-2">
<div className="h-1 w-1 rounded-full bg-white"></div>
                Kitchen &amp; Bath
              </li>
<li className="flex items-center gap-2">
<div className="h-1 w-1 rounded-full bg-white"></div>
                Fireplace Surrounds
              </li>
<li className="flex items-center gap-2">
<div className="h-1 w-1 rounded-full bg-white"></div>
                Outdoor Kitchens
              </li>
</ul>
</div>

<div className="group relative bg-primary p-10 transition-colors hover:bg-white/5">
<div className="mb-8 inline-flex h-12 w-12 items-center justify-center text-white">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="mb-4 font-display text-2xl text-white">Commercial</h3>
<p className="mb-8 text-sm leading-relaxed text-white/70">
              Large-scale solutions for hospitality, retail, and multi-family
              developments completed on schedule.
            </p>
<ul className="space-y-3 text-xs tracking-wide text-white/90">
<li className="flex items-center gap-2">
<div className="h-1 w-1 rounded-full bg-white"></div>
                Hospitality
              </li>
<li className="flex items-center gap-2">
<div className="h-1 w-1 rounded-full bg-white"></div>
                Office Buildings
              </li>
<li className="flex items-center gap-2">
<div className="h-1 w-1 rounded-full bg-white"></div>
                Retail Spaces
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-cream px-6 py-32" id="projects">
<div className="mx-auto max-w-7xl">
<div className="mb-24 text-center">
<span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-primary">
            Portfolio
          </span>
<h2 className="font-display text-4xl font-normal leading-tight tracking-tight text-charcoal md:text-5xl">
            Recent Projects
          </h2>
</div>
<div className="space-y-32">

<div className="group grid items-center gap-12 md:grid-cols-2 lg:gap-20 fade-item">
<div className="relative overflow-hidden bg-gray-200 aspect-[4/3] shadow-2xl">
<img alt="Modern Kitchen" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 overflow-hidden rounded-full bg-charcoal p-1 shadow-lg">
<button className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/60 transition hover:text-white">
                  Before
                </button>
<button className="rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white transition">
                  After
                </button>
</div>
</div>
<div className="order-first md:order-last">
<span className="mb-4 block text-xs uppercase tracking-widest text-primary">
                Manhattan Beach, CA
              </span>
<h3 className="mb-6 font-display text-3xl text-charcoal md:text-4xl">
                Modern Kitchen Transformation
              </h3>
<p className="mb-8 text-sm leading-relaxed text-gray-500">
                Complete kitchen renovation featuring Calacatta Gold marble
                countertops with waterfall edge. Precision seam placement
                created a stunning centerpiece for this coastal home.
              </p>
<div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-6">
<div>
<p className="mb-1 text-[10px] uppercase tracking-wider text-gray-400">
                    Material
                  </p>
<p className="font-display text-lg text-charcoal">Marble</p>
</div>
<div>
<p className="mb-1 text-[10px] uppercase tracking-wider text-gray-400">
                    Area
                  </p>
<p className="font-display text-lg text-charcoal">85 sq ft</p>
</div>
<div>
<p className="mb-1 text-[10px] uppercase tracking-wider text-gray-400">
                    Time
                  </p>
<p className="font-display text-lg text-charcoal">12 Days</p>
</div>
</div>
</div>
</div>

<div className="group grid items-center gap-12 md:grid-cols-2 lg:gap-20 fade-item">
<div>
<span className="mb-4 block text-xs uppercase tracking-widest text-primary">
                Downtown LA
              </span>
<h3 className="mb-6 font-display text-3xl text-charcoal md:text-4xl">
                Luxury High-Rise
              </h3>
<p className="mb-8 text-sm leading-relaxed text-gray-500">
                Fabrication and installation of 240 engineered quartz
                countertops. Coordinated delivery schedule ensured seamless
                integration with the general contractor's timeline.
              </p>
<div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-6">
<div>
<p className="mb-1 text-[10px] uppercase tracking-wider text-gray-400">
                    Scope
                  </p>
<p className="font-display text-lg text-charcoal">240 Units</p>
</div>
<div>
<p className="mb-1 text-[10px] uppercase tracking-wider text-gray-400">
                    Material
                  </p>
<p className="font-display text-lg text-charcoal">Quartz</p>
</div>
<div>
<p className="mb-1 text-[10px] uppercase tracking-wider text-gray-400">
                    Duration
                  </p>
<p className="font-display text-lg text-charcoal">6 Months</p>
</div>
</div>
</div>
<div className="relative overflow-hidden bg-gray-200 aspect-[4/3] shadow-2xl">
<img alt="Luxury High-Rise" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white px-6 py-32" id="about">
<div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-12">
<div className="relative lg:col-span-5">
<div className="aspect-[4/5] w-full bg-gray-100 relative overflow-hidden">
<img alt="Stone Fabrication Workspace" className="transition-all duration-500 hover:grayscale-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://images.unsplash.com/photo-1764782322242-2dbc496f6cbd?w=800&amp;q=80"/>
</div>
<div className="absolute -bottom-10 -right-6 flex h-40 w-40 flex-col items-center justify-center bg-primary p-6 text-white shadow-xl md:-right-10 md:h-48 md:w-48">
<span className="font-display text-5xl font-semibold md:text-6xl">
              10+
            </span>
<span className="text-[10px] uppercase tracking-widest text-white/80">
              Years Exp.
            </span>
</div>
</div>
<div className="lg:col-span-7">
<span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-primary">
            About BGM
          </span>
<h2 className="mb-8 font-display text-4xl font-normal leading-tight tracking-tight text-charcoal md:text-5xl">
            Uncompromising Quality.
            <br/>
            Unmatched Craftsmanship.
          </h2>
<div className="mb-10 space-y-6 text-sm leading-loose text-gray-500">
<p className="">
              BGM Stone and Tile has been serving Southern California since
              2014. Located in Wilmington, CA, our state-of-the-art facility
              houses the latest fabrication technology alongside our showroom
              where clients can view a curated selection of natural stone and
              tile.
            </p>
<p className="">
              We work with natural stones including granite, marble, quartzite,
              and soapstone, as well as engineered quartz and porcelain slabs.
              All work is completed in strict accordance with Marble Institute
              of America standards.
            </p>
</div>
<div className="grid gap-6 border-t border-gray-100 pt-10 sm:grid-cols-2">
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center bg-cream text-primary">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="mb-1 text-sm font-semibold text-charcoal">
                  Bonded &amp; Insured
                </h4>
<p className="text-xs text-gray-500">
                  Full protection for peace of mind
                </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center bg-cream text-primary">
<iconify-icon icon="solar:medal-ribbon-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="mb-1 text-sm font-semibold text-charcoal">
                  MIA Certified
                </h4>
<p className="text-xs text-gray-500">Industry-leading standards</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center bg-cream text-primary">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="mb-1 text-sm font-semibold text-charcoal">
                  Fast Turnaround
                </h4>
<p className="text-xs text-gray-500">
                  7-14 days template to install
                </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center bg-cream text-primary">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="mb-1 text-sm font-semibold text-charcoal">
                  Union Craftsmen
                </h4>
<p className="text-xs text-gray-500">Skilled professional masons</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-charcoal px-6 py-32 text-white">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(127,145,174,0.1)_0%,_transparent_60%)]"></div>
<div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="relative aspect-[3/4] w-full bg-gradient-to-br from-[#4a5a6a] to-[#2a3441] shadow-2xl before:absolute before:-bottom-4 before:-left-4 before:-z-10 before:h-full before:w-full before:border before:border-primary/50">
<img alt="Owner Portrait" className="absolute inset-0 h-full w-full object-cover opacity-90 mix-blend-luminosity" src="https://images.unsplash.com/photo-1643704169438-efd6d5707214?w=800&amp;q=80"/>
</div>
</div>
<div className="lg:col-span-3">
<span className="mb-4 block text-xs uppercase tracking-[0.2em] text-primary-light">
            The Legacy
          </span>
<h2 className="mb-2 font-display text-4xl font-normal text-white">
            Family-Owned Excellence
          </h2>
<h3 className="mb-8 text-base font-light text-gray-400">
            Continuing a tradition of stone craftsmanship
          </h3>
<div className="mb-8 space-y-6 text-sm leading-relaxed text-gray-300">
<p>
              BGM Stone and Tile carries forward a tradition that began as
              Battaglia Installations. We combine old-world craftsmanship with
              cutting-edge technology, employing skilled union masons who take
              pride in every installation.
            </p>
</div>
<blockquote className="border-l-2 border-primary pl-6 font-display text-2xl italic leading-relaxed text-white/90">
            "Every stone tells a story. Our job is to make sure that story
            enhances your space for generations to come."
          </blockquote>
</div>
</div>
</section>

<section className="bg-cream px-6 py-32" id="contact">
<div className="mx-auto max-w-7xl">
<div className="overflow-hidden bg-white shadow-2xl shadow-gray-200/50">
<div className="grid lg:grid-cols-5">

<div className="bg-charcoal px-10 py-16 text-white lg:col-span-2">
<h3 className="mb-10 font-display text-3xl">Get in Touch</h3>
<div className="space-y-8">
<div>
<span className="mb-2 block text-[10px] uppercase tracking-widest text-primary-light">
                    Phone
                  </span>
<a className="flex items-center gap-3 text-lg transition-colors hover:text-primary-light" href="tel:3105340110">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    (310) 534-0110
                  </a>
</div>
<div>
<span className="mb-2 block text-[10px] uppercase tracking-widest text-primary-light">
                    Email
                  </span>
<a className="flex items-center gap-3 text-lg transition-colors hover:text-primary-light" href="mailto:info@battagliamarble.com">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
                    info@battagliamarble.com
                  </a>
</div>
<div className="">
<span className="mb-2 block text-[10px] uppercase tracking-widest text-primary-light">
                    Location
                  </span>
<div className="flex items-start gap-3 text-lg">
<iconify-icon className="mt-1" icon="solar:map-point-linear" width="20"></iconify-icon>
<p className="leading-relaxed">
                      528 East D Street
                      <br/>
                      Wilmington, CA 90744
                    </p>
</div>
</div>
</div>
<div className="mt-16 border-t border-white/10 pt-10">
<h4 className="mb-4 text-[10px] uppercase tracking-widest text-primary-light">
                  Hours
                </h4>
<ul className="space-y-2 text-sm text-gray-400">
<li className="flex justify-between">
<span>Mon - Fri</span>
<span className="text-white">8:00 AM - 5:00 PM</span>
</li>
<li className="flex justify-between">
<span>Saturday</span>
<span className="text-white">Appointment Only</span>
</li>
<li className="flex justify-between">
<span>Sunday</span>
<span className="text-white">Closed</span>
</li>
</ul>
</div>
</div>

<div className="px-8 py-16 lg:col-span-3 lg:px-16">
<h3 className="mb-2 font-display text-3xl text-charcoal">
                Get a Free Quote
              </h3>
<p className="mb-10 text-sm text-gray-500">
                Fill out the details below and we'll get back to you within 24
                hours.
              </p>
<form className="space-y-6">
<div className="space-y-6">
<div className="group">
<label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      Full Name
                    </label>
<input className="w-full border-b border-gray-200 bg-transparent py-3 text-charcoal outline-none transition-colors focus:border-primary placeholder:text-gray-300" placeholder="John Doe" type="text" value="Michael Harrison"/>
</div>
<div className="grid gap-6 md:grid-cols-2">
<div className="group">
<label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        Email
                      </label>
<input className="w-full border-b border-gray-200 bg-transparent py-3 text-charcoal outline-none transition-colors focus:border-primary placeholder:text-gray-300" placeholder="john@example.com" type="email" value="mharrison@example.com"/>
</div>
<div className="group">
<label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        Phone
                      </label>
<input className="w-full border-b border-gray-200 bg-transparent py-3 text-charcoal outline-none transition-colors focus:border-primary placeholder:text-gray-300" placeholder="(555) 000-0000" type="tel" value="(310) 555-0199"/>
</div>
</div>
<div className="grid gap-6 md:grid-cols-2">
<div className="group">
<label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        Location
                      </label>
<input className="w-full border-b border-gray-200 bg-transparent py-3 text-charcoal outline-none transition-colors focus:border-primary placeholder:text-gray-300" placeholder="City, Zip Code" type="text" value="Manhattan Beach, CA 90266"/>
</div>
<div className="group">
<label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        Material Interest
                      </label>
<div className="relative">
<select className="w-full appearance-none border-b border-gray-200 bg-transparent py-3 text-charcoal outline-none transition-colors focus:border-primary">
<option>Select Stone Type</option>
<option>Granite</option>
<option selected="">Marble</option>
<option>Quartz</option>
<option>Porcelain</option>
</select>
<iconify-icon className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group">
<label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      Message
                    </label>
<textarea className="w-full border-b border-gray-200 bg-transparent py-3 text-charcoal outline-none resize-none transition-colors focus:border-primary placeholder:text-gray-300" placeholder="Tell us about your project..." rows="4">I'm looking to renovate my kitchen countertops and island. We have about 85 sq ft of space and are interested in Calacatta Gold marble with a waterfall edge. Could we schedule a consultation for next Tuesday?</textarea>
</div>
</div>
<button className="mt-4 flex w-full items-center justify-center gap-3 bg-gold px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b8954d] hover:shadow-lg" type="submit">
                  Send Request
                  <iconify-icon icon="solar:plain-3-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-warmBlack pt-20 pb-10 text-white border-t border-white/5">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-4">
<div className="lg:col-span-2">
<span className="mb-6 block font-display text-2xl font-semibold tracking-tighter">
              BGM
            </span>
<p className="mb-8 max-w-md text-sm leading-relaxed text-gray-400">
              Premium stone fabrication and installation for residential and
              commercial projects throughout Southern California. Experience
              unmatched craftsmanship and quality since 2014.
            </p>
<div className="flex gap-4">
<a className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 text-white transition hover:bg-primary hover:border-primary" href="#">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
</a>
<a className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 text-white transition hover:bg-primary hover:border-primary" href="#">
<iconify-icon icon="solar:facebook-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-primary-light">
              Services
            </h4>
<ul className="space-y-4 text-sm text-gray-400">
<li>
<a className="transition hover:text-white" href="#">Fabrication</a>
</li>
<li>
<a className="transition hover:text-white" href="#">Installation</a>
</li>
<li>
<a className="transition hover:text-white" href="#">Residential</a>
</li>
<li>
<a className="transition hover:text-white" href="#">Commercial</a>
</li>
</ul>
</div>
<div>
<h4 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-primary-light">
              Quick Links
            </h4>
<ul className="space-y-4 text-sm text-gray-400">
<li>
<a className="transition hover:text-white" href="#">About Us</a>
</li>
<li>
<a className="transition hover:text-white" href="#">Projects</a>
</li>
<li>
<a className="transition hover:text-white" href="#">Get a Quote</a>
</li>
<li>
<a className="transition hover:text-white" href="#">Contact</a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col items-center justify-between gap-6 md:flex-row">
<p className="text-xs text-gray-500">
            © 2025 BGM Stone and Tile (Battaglia Installations, Inc.). All
            rights reserved.
          </p>
<div className="flex gap-6 text-[10px] uppercase tracking-widest text-gray-500">
<span>MIA Certified</span>
<span>TCA Standards</span>
<span>ANSI Compliant</span>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden items-center justify-center bg-black/80 opacity-0 transition-opacity duration-300" id="quoteModal">
<div className="relative m-4 max-h-[90vh] w-full max-w-lg overflow-y-auto bg-white p-8 shadow-2xl transition-transform duration-300 scale-95" id="modalContent">
<button className="absolute right-6 top-6 text-gray-400 hover:text-charcoal" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
<h2 className="mb-2 font-display text-3xl text-charcoal">
          Request a Quote
        </h2>
<p className="mb-8 text-sm text-gray-500">
          Tell us about your stone needs.
        </p>
<form className="space-y-5">
<input className="w-full border border-gray-200 p-3 text-sm outline-none focus:border-primary" placeholder="Name" type="text" value="Michael Harrison"/>
<input className="w-full border border-gray-200 p-3 text-sm outline-none focus:border-primary" placeholder="Email" type="email" value="mharrison@example.com"/>
<input className="w-full border border-gray-200 p-3 text-sm outline-none focus:border-primary" placeholder="Phone" type="tel" value="(310) 555-0199"/>
<textarea className="w-full resize-none border border-gray-200 p-3 text-sm outline-none focus:border-primary" placeholder="Project Details" rows="4">Kitchen countertop renovation with Calacatta Gold marble (approx 85 sq ft).</textarea>
<button className="w-full bg-primary py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-primary-dark" type="submit">
            Submit Request
          </button>
</form>
</div>
</div>


    </>
  );
}
