import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize Icons
      lucide.createIcons();

      // Cursor Animation
      const cursorDot = document.getElementById('cursor-dot');
      const cursorOutline = document.getElementById('cursor-outline');

      window.addEventListener('mousemove', (e) => {
          const posX = e.clientX;
          const posY = e.clientY;

          cursorDot.style.left = `${posX}px`;
          cursorDot.style.top = `${posY}px`;

          // Add delay for outline
          cursorOutline.animate({
              left: `${posX}px`,
              top: `${posY}px`
          }, { duration: 500, fill: "forwards" });
      });

      // Scroll Progress Bar
      window.addEventListener('scroll', () => {
          const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (scrollTop / scrollHeight) * 100;
          document.getElementById('scrollProgress').style.width = scrolled + '%';

          // Parallax Hero Image
          const heroImg = document.getElementById('hero-img');
          if(heroImg && scrollTop < window.innerHeight) {
              heroImg.style.transform = `translateY(${scrollTop * 0.4}px)`;
          }

          // Header Background
          const header = document.getElementById('header');
          if(scrollTop > 50) {
              header.classList.add('shadow-sm');
              header.style.background = 'rgba(255, 255, 255, 0.85)';
          } else {
              header.classList.remove('shadow-sm');
              header.style.background = 'rgba(255, 255, 255, 0.6)';
          }
      });

      // Intersection Observer for Reveal Animations
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal-up, .reveal-scale').forEach(el => observer.observe(el));

      // Magnetic Buttons
      const magnets = document.querySelectorAll('.magnetic-wrap');

      magnets.forEach((magnet) => {
          magnet.addEventListener('mousemove', function(e) {
              const bounding = magnet.getBoundingClientRect();
              const magnetsStrength = 20;
              const magnetButtonArea = magnet.querySelector('a'); // assuming anchor inside

              if(magnetButtonArea) {
                  const newX = ((e.clientX - bounding.left)/magnet.offsetWidth) - 0.5;
                  const newY = ((e.clientY - bounding.top)/magnet.offsetHeight) - 0.5;

                  magnetButtonArea.style.transform = 'translate(' + (newX * magnetsStrength) + 'px, ' + (newY * magnetsStrength) + 'px)';
              }
          });

          magnet.addEventListener('mouseleave', function(e) {
              const magnetButtonArea = magnet.querySelector('a');
              if(magnetButtonArea) {
                   magnetButtonArea.style.transform = 'translate(0px, 0px)';
              }
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor-dot"></div>
<div id="cursor-outline"></div>

<div className="scroll-progress" id="scrollProgress"></div>

<header className="fixed top-0 w-full z-50 glass-panel transition-all duration-300" id="header">
<div className="max-w-[95%] mx-auto px-4 py-4 md:py-5">
<div className="flex justify-between items-center">

<button className="lg:hidden p-2 hover:bg-rose-50 rounded-full transition-colors">
<svg className="w-6 h-6 text-gray-800" data-lucide="menu"></svg>
</button>

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gradient-to-tr from-rose-400 to-amber-300 rounded-full text-white shadow-lg shadow-rose-200 group-hover:rotate-180 transition-transform duration-700">
<svg className="w-5 h-5 md:w-6 md:h-6" data-lucide="flower-2"></svg>
</div>
<span className="font-serif text-2xl md:text-3xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Sehlvet
            </span>
</a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
<div className="magnetic-wrap">
<a className="block px-4 py-2 hover:text-rose-600 transition-colors" href="#home">
                Home
              </a>
</div>
<div className="magnetic-wrap">
<a className="block px-4 py-2 hover:text-rose-600 transition-colors" href="#collections">
                Collections
              </a>
</div>
<div className="magnetic-wrap">
<a className="block px-4 py-2 hover:text-rose-600 transition-colors" href="#about">
                Story
              </a>
</div>
<div className="magnetic-wrap">
<a className="block px-4 py-2 hover:text-rose-600 transition-colors" href="#contact">
                Visit Us
              </a>
</div>
</nav>

<div className="flex items-center gap-2 md:gap-4">
<button className="p-2 hover:bg-white rounded-full transition-colors hover:text-rose-600 hidden md:block">
<svg className="w-5 h-5" data-lucide="search"></svg>
</button>
<button className="p-2 hover:bg-white rounded-full transition-colors hover:text-rose-600 relative">
<svg className="w-5 h-5" data-lucide="heart"></svg>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
</button>
<button className="p-2 hover:bg-white rounded-full transition-colors hover:text-rose-600 relative">
<svg className="w-5 h-5" data-lucide="shopping-bag"></svg>
<span className="absolute top-0 right-0 w-4 h-4 bg-amber-400 text-[10px] flex items-center justify-center rounded-full text-white font-bold">
                2
              </span>
</button>
</div>
</div>
</div>
</header>
<main>

<section className="relative min-h-screen pt-24 pb-12 px-4 md:px-8 flex flex-col justify-center overflow-hidden" id="home">

<div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-rose-200/40 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[80px] pointer-events-none"></div>
<div className="grid lg:grid-cols-12 gap-12 items-center max-w-[95%] mx-auto w-full relative z-10">

<div className="lg:col-span-5 flex flex-col items-start space-y-8 order-2 lg:order-1">
<div className="reveal-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-rose-100 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
<span className="text-xs uppercase tracking-widest font-semibold text-rose-800">
                New Festive Collection 2024
              </span>
</div>
<h1 className="reveal-up text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.95] tracking-tight text-gray-900" style={{transitionDelay: '100ms'}}>
              Elegant
              <br/>
<span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500 font-normal">
                Sarees
              </span>
              &amp;
              <br/>
              Couture.
            </h1>
<p className="reveal-up text-lg text-gray-500 font-light max-w-md leading-relaxed" style={{transitionDelay: '200ms'}}>
              Discover the essence of Indian luxury in Surat. Handcrafted
              textiles that blend traditional artistry with modern silhouettes.
            </p>
<div className="reveal-up flex flex-wrap gap-4 pt-4" style={{transitionDelay: '300ms'}}>
<a className="magnetic-wrap group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-rose-200" href="#collections">
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative z-10 font-medium tracking-wide">
                  Explore Collection
                </span>
</a>
<a className="magnetic-wrap px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full hover:bg-gray-50 transition-colors font-medium" href="#about">
                Our Story
              </a>
</div>
<div className="reveal-up flex items-center gap-4 pt-8" style={{transitionDelay: '400ms'}}>
<div className="flex -space-x-3">
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="flex flex-col">
<div className="flex text-amber-400 text-xs">
<svg className="w-3 h-3 fill-current" data-lucide="star"></svg>
<svg className="w-3 h-3 fill-current" data-lucide="star"></svg>
<svg className="w-3 h-3 fill-current" data-lucide="star"></svg>
<svg className="w-3 h-3 fill-current" data-lucide="star"></svg>
<svg className="w-3 h-3 fill-current" data-lucide="star"></svg>
</div>
<span className="text-xs font-medium text-gray-500">
                  Trusted by 2,000+ Women
                </span>
</div>
</div>
</div>

<div className="lg:col-span-7 relative h-[60vh] lg:h-[80vh] w-full order-1 lg:order-2">
<div className="absolute inset-0 rounded-[2.5rem] overflow-hidden reveal-scale shadow-2xl shadow-rose-100/50">
<img alt="Indian Fashion Model" className="w-full h-[120%] object-cover object-top transition-transform duration-100 will-change-transform" id="hero-img" src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 bg-white/30 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<div className="bg-white p-2 rounded-lg">
<svg className="w-5 h-5 text-amber-500" data-lucide="sparkles"></svg>
</div>
<div>
<p className="text-xs text-white/90 font-medium">
                      Trending Now
                    </p>
<p className="text-sm text-white font-bold">
                      Silk Banarasi Edit
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-[95%] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 px-4 reveal-up">
<div>
<span className="text-rose-500 font-medium tracking-wider text-sm uppercase">
              Curated For You
            </span>
<h2 className="text-4xl md:text-5xl font-serif mt-2 text-gray-900">
              Shop by Category
            </h2>
</div>
<div className="hidden md:flex gap-2">
<button className="p-3 border rounded-full hover:bg-gray-100 transition-colors">
<svg className="w-5 h-5" data-lucide="arrow-left"></svg>
</button>
<button className="p-3 border rounded-full hover:bg-gray-100 transition-colors">
<svg className="w-5 h-5" data-lucide="arrow-right"></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer reveal-up" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-gray-200 img-container h-full w-full">
<img alt="Festive Wear" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-serif">Festive Wear</h3>
<p className="text-sm text-white/80 mt-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                Explore Collection →
              </p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer reveal-up" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-gray-200 img-container h-full w-full">
<img alt="Ready to Wear" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-serif">Ready to Wear</h3>
<p className="text-sm text-white/80 mt-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                Explore Collection →
              </p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer reveal-up" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 bg-gray-200 img-container h-full w-full">
<img alt="Sarees" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-serif">Modern Sarees</h3>
<p className="text-sm text-white/80 mt-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                Explore Collection →
              </p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer reveal-up" style={{transitionDelay: '400ms'}}>
<div className="absolute inset-0 bg-gray-200 img-container h-full w-full">
<img alt="Accessories" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-serif">Jewelry &amp; Acc.</h3>
<p className="text-sm text-white/80 mt-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                Explore Collection →
              </p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white relative overflow-hidden" id="collections">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>
<div className="max-w-[95%] mx-auto px-4">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-up">
<h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">
              This Month's Favorites
            </h2>
<p className="text-gray-500 font-light">
              Handpicked styles that are trending in Surat this season. Designed
              for the modern woman who values tradition.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="group reveal-up" style={{transitionDelay: '100ms'}}>
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shine-hover">
<img alt="Sharara Set" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>

<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded tracking-wide uppercase">
                    Bestseller
                  </span>
</div>

<div className="absolute right-4 top-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-gray-900 p-2.5 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors">
<svg className="w-4 h-4" data-lucide="heart"></svg>
</button>
<button className="bg-white text-gray-900 p-2.5 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors" style={{transitionDelay: '50ms'}}>
<svg className="w-4 h-4" data-lucide="eye"></svg>
</button>
</div>

<button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur text-gray-900 py-3 rounded-xl font-medium shadow-lg translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-2 hover:bg-rose-500 hover:text-white">
<svg className="w-4 h-4" data-lucide="shopping-bag"></svg>
                  Add to Cart
                </button>
</div>
<div className="mt-4 text-center">
<h3 className="font-serif text-xl text-gray-900 group-hover:text-rose-600 transition-colors">
                  Embroidered Sharara Set
                </h3>
<div className="flex items-center justify-center gap-2 mt-1">
<span className="text-sm text-gray-400 line-through">₹4,999</span>
<span className="text-lg font-medium text-rose-600">₹3,499</span>
</div>
</div>
</div>

<div className="group reveal-up" style={{transitionDelay: '200ms'}}>
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shine-hover">
<img alt="Silk Saree" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded tracking-wide uppercase">
                    New
                  </span>
</div>
<div className="absolute right-4 top-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-gray-900 p-2.5 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors">
<svg className="w-4 h-4" data-lucide="heart"></svg>
</button>
<button className="bg-white text-gray-900 p-2.5 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors" style={{transitionDelay: '50ms'}}>
<svg className="w-4 h-4" data-lucide="eye"></svg>
</button>
</div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur text-gray-900 py-3 rounded-xl font-medium shadow-lg translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-2 hover:bg-rose-500 hover:text-white">
<svg className="w-4 h-4" data-lucide="shopping-bag"></svg>
                  Add to Cart
                </button>
</div>
<div className="mt-4 text-center">
<h3 className="font-serif text-xl text-gray-900 group-hover:text-rose-600 transition-colors">
                  Banarasi Silk Drape
                </h3>
<div className="flex items-center justify-center gap-2 mt-1">
<span className="text-lg font-medium text-rose-600">₹8,999</span>
</div>
</div>
</div>

<div className="group reveal-up" style={{transitionDelay: '300ms'}}>
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shine-hover">
<img alt="Evening Gown" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute right-4 top-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-gray-900 p-2.5 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors">
<svg className="w-4 h-4" data-lucide="heart"></svg>
</button>
<button className="bg-white text-gray-900 p-2.5 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors" style={{transitionDelay: '50ms'}}>
<svg className="w-4 h-4" data-lucide="eye"></svg>
</button>
</div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur text-gray-900 py-3 rounded-xl font-medium shadow-lg translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-2 hover:bg-rose-500 hover:text-white">
<svg className="w-4 h-4" data-lucide="shopping-bag"></svg>
                  Add to Cart
                </button>
</div>
<div className="mt-4 text-center">
<h3 className="font-serif text-xl text-gray-900 group-hover:text-rose-600 transition-colors">
                  Indo-Western Gown
                </h3>
<div className="flex items-center justify-center gap-2 mt-1">
<span className="text-lg font-medium text-rose-600">₹6,250</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-rose-50" id="about">
<div className="max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-rose-100 p-8 md:p-12 lg:p-0">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="flex flex-col justify-center lg:p-16 space-y-8">
<div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 mb-4">
<svg className="w-6 h-6" data-lucide="map-pin"></svg>
</div>
<h2 className="text-4xl md:text-5xl font-serif leading-tight reveal-up">
                Born in the Textile
                <br/>
<span className="text-rose-600 italic">Heart of India.</span>
</h2>
<div className="space-y-4 text-gray-600 font-light text-lg reveal-up" style={{transitionDelay: '100ms'}}>
<p>
                  Located in the vibrant city of Surat, Gujarat, Sehlvet
                  represents the pinnacle of textile craftsmanship. We blend the
                  city's rich heritage of fabric making with contemporary
                  aesthetics.
                </p>
<p>
                  Every piece is designed to celebrate the modern Indian
                  woman—confident, elegant, and rooted in culture.
                </p>
</div>
<div className="pt-4 reveal-up" style={{transitionDelay: '200ms'}}>
<button className="flex items-center gap-2 text-rose-600 font-medium hover:gap-4 transition-all">
                  Visit our Boutique in Surat
                  <svg className="w-4 h-4" data-lucide="arrow-right"></svg>
</button>
</div>
</div>
<div className="relative h-[400px] lg:h-auto overflow-hidden rounded-3xl lg:rounded-none lg:rounded-l-none">
<img alt="Textile Work" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4">
<div className="max-w-4xl mx-auto text-center relative">

<svg className="absolute top-0 left-0 w-12 h-12 text-rose-200 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="absolute bottom-0 right-0 w-16 h-16 text-amber-200 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
</svg>
<h2 className="text-4xl md:text-5xl font-serif mb-6 reveal-up">
            Join the VIP Club
          </h2>
<p className="text-gray-500 mb-10 reveal-up">
            Get exclusive access to our Surat showroom events, new arrivals, and
            special discounts delivered to your inbox.
          </p>
<form className="max-w-md mx-auto relative reveal-up" onsubmit="event.preventDefault(); this.querySelector('button').innerHTML = 'Joined! ❤️';">
<input className="w-full pl-6 pr-32 py-4 rounded-full border border-gray-200 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all" placeholder="Your email address" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-rose-600 transition-colors" type="submit">
              Subscribe
            </button>
</form>
</div>
</section>
</main>

<footer className="bg-gray-900 text-white pt-20 pb-10 px-4 md:px-8 border-t border-gray-800" id="contact">
<div className="max-w-[95%] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-rose-600">
<svg className="w-5 h-5" data-lucide="flower-2"></svg>
</div>
<span className="font-serif text-2xl">Sehlvet</span>
</a>
<p className="text-gray-400 text-sm leading-relaxed">
              Redefining modern luxury for the Indian woman. Crafted with love
              in Surat.
            </p>
<div className="flex gap-4">
<a className="p-2 bg-gray-800 rounded-full hover:bg-rose-600 transition-colors" href="#">
<svg className="w-4 h-4" data-lucide="instagram"></svg>
</a>
<a className="p-2 bg-gray-800 rounded-full hover:bg-rose-600 transition-colors" href="#">
<svg className="w-4 h-4" data-lucide="facebook"></svg>
</a>
<a className="p-2 bg-gray-800 rounded-full hover:bg-rose-600 transition-colors" href="#">
<svg className="w-4 h-4" data-lucide="twitter"></svg>
</a>
</div>
</div>

<div>
<h4 className="font-serif text-lg mb-6 text-rose-200">Boutique</h4>
<ul className="space-y-3 text-gray-400 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                  New Arrivals
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Sarees
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Lehengas
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Accessories
                </a>
</li>
</ul>
</div>

<div>
<h4 className="font-serif text-lg mb-6 text-rose-200">Customer Care</h4>
<ul className="space-y-3 text-gray-400 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Track Order
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Shipping Policy
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Returns &amp; Exchange
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Contact Us
                </a>
</li>
</ul>
</div>

<div>
<h4 className="font-serif text-lg mb-6 text-rose-200">Visit Us</h4>
<ul className="space-y-4 text-gray-400 text-sm">
<li className="flex items-start gap-3">
<svg className="w-5 h-5 mt-0.5 text-gray-500" data-lucide="map-pin"></svg>
<span>
                  28, Textile Market Rd,
                  <br/>
                  Surat, Gujarat 395002
                </span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-gray-500" data-lucide="phone"></svg>
<span>+91 98765 43210</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-gray-500" data-lucide="mail"></svg>
<span>hello@sehlvet.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
<p>© 2024 Sehlvet Boutique. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
