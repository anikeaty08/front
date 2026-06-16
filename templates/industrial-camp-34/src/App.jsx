import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: '#9D1A10',
'brand-light': '#D9261C',
'brand-dark': '#7F150D',
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        (function() {
            let currentSlide = 0;
            const slides = document.querySelectorAll('#hero-slider-container .slide');
            const dots = document.querySelectorAll('.slider-dot');
            const totalSlides = slides.length;
            let slideInterval;

            window.updateSliderVisuals = (index) => {
                slides.forEach((slide, i) => {
                    if (i === index) {
                        slide.classList.remove('opacity-0', 'z-0');
                        slide.classList.add('opacity-100', 'z-10');
                        dots[i].classList.remove('bg-white/30');
                        dots[i].classList.add('bg-brand');
                    } else {
                        slide.classList.remove('opacity-100', 'z-10');
                        slide.classList.add('opacity-0', 'z-0');
                        dots[i].classList.remove('bg-brand');
                        dots[i].classList.add('bg-white/30');
                    }
                });
            };

            window.jumpToSlide = (index) => {
                clearInterval(slideInterval);
                currentSlide = index;
                updateSliderVisuals(currentSlide);
                startSlideTimer();
            };

            function nextSlide() {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSliderVisuals(currentSlide);
            }

            function startSlideTimer() {
                slideInterval = setInterval(nextSlide, 6000);
            }

            // Init
            startSlideTimer();
        })();
      


      // Hero Slider Logic
      let currentSlide = 0;
      const slides = document.querySelectorAll('.slide');
      const dots = document.querySelectorAll('.slider-dot');
      const totalSlides = slides.length;
      let slideInterval;

      function showSlide(index) {
          slides.forEach((slide, i) => {
              if (i === index) {
                  slide.classList.remove('slide-inactive');
                  slide.classList.add('slide-active');
                  dots[i].classList.remove('bg-white/30');
                  dots[i].classList.add('bg-brand');
              } else {
                  slide.classList.remove('slide-active');
                  slide.classList.add('slide-inactive');
                  dots[i].classList.remove('bg-brand');
                  dots[i].classList.add('bg-white/30');
              }
          });
          currentSlide = index;
      }

      function changeSlide(index) {
          clearInterval(slideInterval);
          showSlide(index);
          startSlider();
      }

      function nextSlide() {
          let next = (currentSlide + 1) % totalSlides;
          showSlide(next);
      }

      function startSlider() {
          slideInterval = setInterval(nextSlide, 5000);
      }

      // Scroll Reveal Animation
      const revealElements = document.querySelectorAll('.reveal');

      const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
      });

      revealElements.forEach(element => {
          revealObserver.observe(element);
      });


      startSlider();
    


      // Navbar Scroll Effect
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              navbar.classList.add('py-2');
          } else {
              navbar.classList.remove('py-2');
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 top-0 left-0 w-full transition-all duration-300" id="navbar">
<div className="absolute inset-0 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm supports-[backdrop-filter]:bg-white/90"></div>
<div className="relative flex h-20 items-center justify-between px-6 md:px-8 max-w-7xl mx-auto">
<a className="group flex items-center gap-3" href="index.html">
<div className="flex group-hover:rotate-12 transition-transform duration-300 w-10 h-10 rounded-full bg-brand text-white items-center justify-center shadow-lg shadow-brand/20">
<img alt="4Seasons Logo" className="mix-blend-multiply w-8 h-8 object-contain invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="uppercase text-lg font-bold text-slate-900 tracking-tighter">
            4Seasons
          </span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="text-sm font-semibold text-slate-900 px-5 py-2.5 rounded-full hover:bg-slate-100 transition-colors" href="index.html">
            Home
          </a>
<a className="hover:text-slate-900 hover:bg-slate-100 transition-colors text-sm font-medium text-slate-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="/services">
            Services
          </a>
<a className="hover:text-slate-900 hover:bg-slate-100 transition-colors text-sm font-medium text-slate-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="/team">
            Team
          </a>
<a className="hover:text-slate-900 hover:bg-slate-100 transition-colors text-sm font-medium text-slate-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="/projects">
            Projects
          </a>
<a className="hover:text-slate-900 hover:bg-slate-100 transition-colors text-sm font-medium text-slate-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="/gallery">
            Gallery
          </a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5" href="contact.html">
<span className="" onclick="window.location.href='/get-in-touch'" role="button">
              Contact
            </span>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7"></path>
</svg>
</a>
<button className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
<div className="hidden absolute top-24 left-0 right-0 bg-white/90 backdrop-blur-xl border border-white/40 p-6 rounded-[2rem] shadow-2xl fade-in-up" id="mobile-menu">
<div className="flex flex-col space-y-4 text-center font-medium text-slate-600">
<a className="block text-slate-900 font-bold" href="index.html">Home</a>
<a className="block hover:text-brand" href="services.html">Services</a>
<a className="block hover:text-brand" href="team.html">Our Team</a>
<a className="block hover:text-brand" href="projects.html">Projects</a>
<a className="block hover:text-brand" href="gallery.html">Gallery</a>
<a className="block hover:text-brand" href="certification.html">
            Certification
          </a>
<a className="block font-bold text-brand" href="contact.html">
            Get in Touch
          </a>
</div>
</div>
</nav>
<section aria-label="Hero Slider" className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center bg-slate-950 group">

<div className="absolute inset-0 w-full h-full" id="hero-slider-container">

<div className="slide absolute inset-0 opacity-100 transition-opacity duration-1000 ease-in-out z-10" data-index="0">
<img alt="Industrial Operations" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_infinite_alternate]" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-slate-950/40"></div>
</div>

<div className="slide absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out z-0" data-index="1">
<img alt="Catering Services" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_infinite_alternate]" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-slate-950/40"></div>
</div>

<div className="slide absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out z-0" data-index="2">
<img alt="Logistics Support" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_infinite_alternate]" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-slate-950/40"></div>
</div>

<div className="absolute inset-0 z-20 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-50/90 pointer-events-none"></div>
</div>

<div className="relative z-30 max-w-7xl mx-auto px-6 w-full">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8 lg:text-left text-center">
<div className="inline-flex items-center gap-2.5 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-white mb-8 tracking-wider uppercase shadow-xl hover:bg-white/20 transition-all cursor-default select-none animate-[fadeInUp_0.8s_ease-out_forwards]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
              Operational Since 2016
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.95] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
              Integrated
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white">
                Camp Services
              </span>
</h1>
<p className="text-lg md:text-2xl text-slate-200 max-w-2xl lg:mx-0 mx-auto font-light leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] drop-shadow-sm">
              Delivering essential infrastructure, logistics, and life support
              services for oil and gas operations across Iraq's most demanding
              environments.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
<a className="h-14 px-8 rounded-full bg-brand hover:bg-brand-light text-white text-sm font-bold tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(157,26,16,0.4)] flex items-center gap-3" href="services.html">
                Explore Services
                <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="h-14 px-8 rounded-full bg-white/5 hover:bg-white text-white hover:text-slate-900 border border-white/20 hover:border-white text-sm font-bold tracking-wide transition-all hover:scale-105 backdrop-blur-sm flex items-center" href="contact.html">
                Contact Us
              </a>
</div>
</div>
<div className="hidden lg:block lg:col-span-4"></div>
</div>
</div>

<div className="absolute bottom-12 left-12 z-30 flex gap-2">
<button aria-label="Go to slide 1" className="slider-dot rounded-full bg-brand transition-all duration-300 hover:h-2 w-3 h-3 mx-1" onclick="jumpToSlide(0)"></button>
<button aria-label="Go to slide 2" className="slider-dot w-12 h-1.5 rounded-full bg-white/30 hover:bg-white transition-all duration-300 hover:h-2" onclick="jumpToSlide(1)"></button>
<button aria-label="Go to slide 3" className="slider-dot w-12 h-1.5 rounded-full bg-white/30 hover:bg-white transition-all duration-300 hover:h-2" onclick="jumpToSlide(2)"></button>
</div>


<style>
        @keyframes kenburns { 0% { transform: scale(1.0) translate(0,0); } 100% { transform: scale(1.2) translate(-2%, -2%); } }
      </style>
</section>

<section className="py-24 px-6 bg-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="max-w-5xl mx-auto text-center reveal">
<h3 className="text-brand font-bold tracking-widest uppercase text-sm mb-6">
          Our Philosophy
        </h3>
<p className="text-3xl md:text-4xl/tight font-medium text-slate-900 mb-8 tracking-tight">
          Creating environments where workforce potential meets
          <span className="text-brand italic font-serif">
            operational excellence
          </span>
          .
        </p>
<p className="text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto font-light">
          With a trained workforce, documented processes, and a strong
          commitment to quality, 4Seasons ensures that every camp—no matter how
          remote—receives reliable, consistent, and professional support.
        </p>
</div>
</section>

<section className="py-24 px-6 bg-white relative">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
<div className="relative order-2 lg:order-1 reveal group">
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
<img alt="Team at work" className="w-full aspect-[4/3] object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
<p className="text-4xl font-bold text-white font-manrope">8+</p>
<p className="text-xs font-bold text-slate-200 uppercase tracking-widest mt-1">
                  Years of Excellence
                </p>
</div>
</div>
<div className="absolute -z-10 top-8 -left-8 w-full h-full rounded-[2rem] border-2 border-slate-100 hidden lg:block"></div>
</div>
<div className="order-1 lg:order-2 reveal delay-100">
<div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 w-fit">
<span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-bold tracking-widest uppercase text-slate-900">
                Who We Are
              </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.05]">
              Our Team
              <span className="text-brand">.</span>
<span className="text-slate-400 font-light">Our History</span>
</h2>
<div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
<p className="font-medium text-slate-900">
                Established in 2016, 4Seasons has evolved into a premier
                provider of integrated life support services in Iraq.
              </p>
<p>
                Our foundation is built on extensive experience in food service,
                camp management, and logistical support. We have grown into a
                trusted partner for international companies operating in Iraq's
                most demanding sectors, delivering reliability where it matters
                most.
              </p>
</div>
<div className="mt-10 pt-10 border-t border-slate-100 flex flex-wrap gap-12">
<div>
<h4 className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">
                  100%
                </h4>
<p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                  Iraqi Owned
                </p>
</div>
<div>
<h4 className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">
                  24/7
                </h4>
<p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                  Operations
                </p>
</div>
<div>
<h4 className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">
                  ISO
                </h4>
<p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                  Certified
                </p>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-24">
<div className="bg-white p-10 rounded-3xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-brand/20 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 group reveal">
<div className="w-12 h-12 rounded-xl bg-red-50 text-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:target" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</g>
</svg>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-brand transition-colors tracking-tight">
              Our Mission
            </h3>
<p className="text-slate-500 leading-relaxed text-lg font-light">
              To provide tailored, reliable solutions that create comfortable,
              efficient, and safe environments for workers, enabling them to
              focus on their tasks while giving management complete peace of
              mind. We aim to maintain the highest standards of cleanliness,
              comfort, and food quality in every project we serve.
            </p>
</div>
<div className="bg-white p-10 rounded-3xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-brand/20 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 group reveal delay-100">
<div className="w-12 h-12 rounded-xl bg-red-50 text-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:telescope" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m10.065 12.493l-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44m-2.875 6.493l4.332-.924M16 21l-3.105-6.21"></path>
<path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455zM6.158 8.633l1.114 4.456M8 21l3.105-6.21"></path>
<circle cx="12" cy="13" r="2"></circle>
</g>
</svg>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-brand transition-colors tracking-tight">
              Our Vision
            </h3>
<p className="text-slate-500 leading-relaxed text-lg font-light">
              To be a leading provider of catering, hospitality, and camp
              services in Iraq by continuously improving our operations through
              innovation, reliability, and integrity.
            </p>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-16 pt-16 border-t border-slate-100 reveal">
<div>
<h3 className="text-2xl font-semibold text-slate-900 mb-8 tracking-tight">
              Our Goals
            </h3>
<ul className="space-y-5">
<li className="flex gap-4 items-start group">
<span className="w-6 h-6 rounded-full bg-brand/5 text-brand flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="text-slate-600 font-light text-lg">
                  Deliver high-quality, competitively priced services on time.
                </span>
</li>
<li className="flex gap-4 items-start group">
<span className="w-6 h-6 rounded-full bg-brand/5 text-brand flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="text-slate-600 font-light text-lg">
                  Maintain excellence in hospitality, food service, and camp
                  operations.
                </span>
</li>
<li className="flex gap-4 items-start group">
<span className="w-6 h-6 rounded-full bg-brand/5 text-brand flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="text-slate-600 font-light text-lg">
                  Foster innovation in both operational planning and service
                  delivery.
                </span>
</li>
<li className="flex gap-4 items-start group">
<span className="w-6 h-6 rounded-full bg-brand/5 text-brand flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="text-slate-600 font-light text-lg">
                  Strengthen long-term client relationships through trust and
                  consistent performance.
                </span>
</li>
</ul>
</div>
<div>
<h3 className="text-2xl font-semibold text-slate-900 mb-8 tracking-tight">
              Our Approach
            </h3>
<div className="bg-slate-50 rounded-2xl p-10 border border-slate-100 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-5 text-slate-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:quote" data-width="100" height="100" role="img" viewbox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-slate-600 leading-relaxed text-lg font-light relative z-10">
                We believe that well-supported teams perform better. By
                delivering clean facilities, reliable infrastructure, and
                nutritious meals, we help create environments where people can
                thrive—regardless of location.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 relative overflow-hidden" id="services">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="absolute inset-0 opacity-5 pointer-events-none">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<pattern height="4" id="grid-pattern-sm" patternunits="userSpaceOnUse" width="4">
<path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect className="text-slate-300" fill="url(#grid-pattern-sm)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
            Our Expertise
          </span>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Integrated Services
          </h2>
<p className="text-lg text-slate-500 font-light leading-relaxed">
            We provide the essential life support infrastructure that enables
            your workforce to perform at their best, anywhere in Iraq.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[16rem]">

<div className="lg:col-span-2 lg:row-span-2 group relative rounded-[2.5rem] overflow-hidden bg-slate-900 reveal">
<img alt="Industrial Catering" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-10 w-full">
<div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:utensils-crossed" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="m16 2l-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8m-7 7L3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0zm0 0l7 7m-19.9-.2l6.4-6.3M19 5l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
                Camp Services
              </h3>
<p className="text-slate-200 font-light text-lg line-clamp-2 max-w-md">
                ISO-certified camp services delivering catering, cleaning, life
                support, and facilities management solutions for remote
                environments.
              </p>
</div>
</div>

<div className="lg:col-span-2 lg:row-span-2 group relative rounded-[2.5rem] overflow-hidden bg-slate-900 reveal delay-100">
<img alt="Camp Operations" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-10 w-full">
<div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:tent" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 21L14 3m6.5 18L10 3m5.5 18L12 15l-3.5 6M2 21h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
                Logistics
              </h3>
<p className="text-slate-200 font-light text-lg line-clamp-2 max-w-md">
                Safe and reliable logistics solutions for fuel, oil &amp; gas
                equipment, personnel, and high-value cargo across Iraq.
              </p>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden bg-slate-900 p-8 flex flex-col justify-between transition-all duration-300 reveal hover:shadow-xl hover:shadow-slate-900/20">
<img alt="Cleaning Services" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>
<div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</g>
</svg>
</div>
<div className="relative z-10">
<h3 className="text-xl font-bold text-white mb-1">
                Waste Management
              </h3>
<p className="text-slate-200 text-sm font-medium">
                Sustainable waste management services ensuring compliance,
                efficiency, and regular commercial waste clearance.
              </p>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden bg-slate-900 p-8 flex flex-col justify-between transition-all duration-300 reveal delay-100 hover:shadow-xl hover:shadow-slate-900/20">
<img alt="Pest Control" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>
<div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bug" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 20v-9m2-4a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4zm.12-3.12L16 2"></path>
<path d="M21 21a4 4 0 0 0-3.81-4M21 5a4 4 0 0 1-3.55 3.97M22 13h-4M3 21a4 4 0 0 1 3.81-4M3 5a4 4 0 0 0 3.55 3.97M6 13H2M8 2l1.88 1.88M9 7.13V6a3 3 0 1 1 6 0v1.13"></path>
</g>
</svg>
</div>
<div className="relative z-10">
<h3 className="text-xl font-bold text-white mb-1">
                Pest Control Management
              </h3>
<p className="text-slate-200 text-sm font-medium">
                Year-round pest control programs protecting camps and facilities
                from insects and rodents.
              </p>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden bg-slate-900 p-8 flex flex-col justify-between transition-all duration-300 reveal delay-200 hover:shadow-xl hover:shadow-slate-900/20">
<img alt="Water Supply" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>
<div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:droplet" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="relative z-10">
<h3 className="text-xl font-bold text-white mb-1">
                General Maintenance
              </h3>
<p className="text-slate-200 text-sm font-medium">
                Professional maintenance services covering electrical, plumbing,
                carpentry, and facility inspections.
              </p>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden bg-slate-900 p-8 flex flex-col justify-between transition-all duration-300 reveal delay-300 hover:shadow-xl hover:shadow-slate-900/20">
<img alt="Transportation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>
<div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:truck" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
<circle cx="17" cy="18" r="2"></circle>
<circle cx="7" cy="18" r="2"></circle>
</g>
</svg>
</div>
<div className="relative z-10">
<h3 className="text-xl font-bold text-white mb-1">Transportation</h3>
<p className="text-slate-200 text-sm font-medium">
                Comprehensive transportation solutions for oil, chemicals,
                construction materials, and industrial operations.
              </p>
</div>
</div>





</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="mb-12 reveal">
<span className="text-xs font-bold text-brand uppercase tracking-widest mb-3 block">
            Visual Tour
          </span>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">
            Gallery Preview
          </h2>
<p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
            A glimpse into our operations, facilities, and the environments we
            manage.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 auto-rows-[220px]">

<div className="group relative overflow-hidden rounded-3xl col-span-2 row-span-2 reveal">
<img alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                Catering
              </span>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl col-span-1 row-span-1 reveal delay-100">
<img alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="group relative overflow-hidden rounded-3xl col-span-1 row-span-1 reveal delay-200">
<img alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="group relative overflow-hidden rounded-3xl col-span-1 row-span-1 reveal delay-100">
<img alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="group relative overflow-hidden rounded-3xl col-span-1 row-span-1 reveal">
<img alt="Gallery 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="group relative overflow-hidden rounded-3xl col-span-2 row-span-1 reveal delay-100">
<img alt="Gallery 6" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                Operations
              </span>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl col-span-1 row-span-1 reveal delay-200">
<img alt="Gallery 7" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="group relative overflow-hidden rounded-3xl col-span-1 row-span-1 reveal delay-300">
<img alt="Gallery 8" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
</div>
<div className="reveal">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-brand hover:bg-red-800 text-white text-sm font-semibold transition-all hover:scale-105 shadow-lg shadow-brand/20" href="gallery.html">
            View More
            <svg className="ml-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</section>
<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<pattern height="8" id="grid-pattern" patternunits="userSpaceOnUse" width="8">
<path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 mb-6 font-semibold tracking-wide text-sm uppercase text-brand">
<span className="w-2 h-2 rounded-full bg-brand"></span>
              Excellence in Action
            </div>
<h2 className="text-4xl font-semibold tracking-tight mb-6">
              Certification &amp; Standards
            </h2>
<p className="text-slate-400 font-light leading-relaxed mb-6 text-lg">
              All 4Seasons staff—chefs, supervisors, and technical teams—receive
              comprehensive training and operate under documented procedures.
              Culinary teams work under the guidance of our executive chef,
              while laundry and cleaning services follow strict hygiene and
              safety guidelines.
            </p>
<p className="text-slate-400 font-light leading-relaxed border-l-2 border-brand pl-4">
              Many members of our management team hold ISO-related
              certifications, reflecting our commitment to international
              standards.
            </p>
</div>
<div className="reveal delay-100">
<div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
<img alt="Chefs" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
</div>
</div>
</div>

<div className="border-t border-slate-800 pt-20 reveal">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold mb-4">Why 4Seasons</h2>
<p className="text-slate-400">
              We don’t just operate camps—we build environments.
            </p>
</div>
<div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">

<div className="space-y-3">
<div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shadow-[0_0_15px_rgba(157,26,16,0.5)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
</div>
<h4 className="font-medium text-white">Quality &amp; Reliability</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                Consistent performance across all services.
              </p>
</div>

<div className="space-y-3">
<div className="w-10 h-10 rounded-full bg-slate-800 text-brand flex items-center justify-center border border-slate-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:factory" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16h.01M16 16h.01M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm5-3h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h4 className="font-medium text-white">Industry Expertise</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                Experience in oil, gas, and industrial environments.
              </p>
</div>

<div className="space-y-3">
<div className="w-10 h-10 rounded-full bg-slate-800 text-brand flex items-center justify-center border border-slate-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</g>
</svg>
</div>
<h4 className="font-medium text-white">Comprehensive Solutions</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                Fully integrated catering, camp, and logistics services.
              </p>
</div>

<div className="space-y-3">
<div className="w-10 h-10 rounded-full bg-slate-800 text-brand flex items-center justify-center border border-slate-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:heart-handshake" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h4 className="font-medium text-white">Customer-Centric</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                Operations built around client needs and continuous feedback.
              </p>
</div>

<div className="space-y-3">
<div className="w-10 h-10 rounded-full bg-slate-800 text-brand flex items-center justify-center border border-slate-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:award" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
<circle cx="12" cy="8" r="6"></circle>
</g>
</svg>
</div>
<h4 className="font-medium text-white">Certified Professionals</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                ISO-trained management and operational staff.
              </p>
</div>
</div>
<div className="mt-16 text-center border-t border-slate-800 pt-8">
<p className="text-slate-400 font-light italic">
              At 4Seasons, we don’t just operate camps—we build environments
              that support the people who work in them.
            </p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="flex w-8 h-8 rounded-lg items-center justify-center bg-white border border-slate-200">
<img alt="4Seasons Logo" className="w-6 h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-2xl font-bold tracking-tight text-slate-900 uppercase">
                4Seasons
              </span>
</div>
<p className="text-slate-500 max-w-sm leading-relaxed text-sm">
              Integrated catering, camp management, and logistical support for
              oil and gas operations across Iraq.
            </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-brand transition-colors" href="index.html">
                  Home
                </a>
</li>
<li>
<a className="hover:text-brand transition-colors" href="services.html">
                  Services
                </a>
</li>
<li>
<a className="hover:text-brand transition-colors" href="team.html">
                  Our Team
                </a>
</li>
<li>
<a className="hover:text-brand transition-colors" href="projects.html">
                  Projects
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Contact Us</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify text-brand iconify--lucide mt-0.5 flex-shrink-0" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
<div>
<div className="font-medium text-slate-700 mb-1">
                    Main Office:
                  </div>
<div>Iraq-Baghdad Al-Arasat/ Block929, St17</div>
<div className="font-medium text-slate-700 mb-1 mt-2">
                    Branch:
                  </div>
<div>Iraq- Basrah, Basrah sport city street</div>
</div>
</li>
<li className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify text-brand iconify--lucide mt-0.5 flex-shrink-0" data-icon="lucide:phone" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<div>+964 782 777 7893</div>
<div>+964 781 111 8161</div>
</div>
</li>
<li className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify text-brand iconify--lucide mt-0.5 flex-shrink-0" data-icon="lucide:mail" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</g>
</svg>
<div>
<div>info@4seasons-iraq.com</div>
<div>am@4seasons-iraq.com</div>
</div>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-xs text-slate-400">
            © 2024 4Seasons. All rights reserved.
          </span>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-brand hover:-translate-y-1 transition-all duration-300" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="text-slate-400 hover:text-brand hover:-translate-y-1 transition-all duration-300" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
<circle cx="4" cy="4" r="2"></circle>
</g>
</svg>
</a>
<a className="text-slate-400 hover:text-brand hover:-translate-y-1 transition-all duration-300" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
</g>
</svg>
</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
