import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-up-element').forEach(el => observer.observe(el));
      });
    


      function toggleMobileMenu(){const e=document.getElementById("mobile-menu"),t=document.getElementById("menu-icon"),n=document.getElementById("close-icon");e.classList.contains("hidden")?(e.classList.remove("hidden"),setTimeout(()=>e.classList.remove("opacity-0","scale-95"),10),t.classList.add("hidden"),n.classList.remove("hidden")):(e.classList.add("opacity-0","scale-95"),setTimeout(()=>e.classList.add("hidden"),300),t.classList.remove("hidden"),n.classList.add("hidden"))}
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-stone-200/40 rounded-full blur-[120px]"></div>

<svg className="absolute top-[5%] -right-[5%] md:right-[5%] w-64 h-64 md:w-96 md:h-96 text-stone-900 opacity-[0.03] animate-float-slow" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="0.8" viewbox="0 0 100 100">
<path d="M15,60 Q45,20 85,60"></path>
<path d="M25,55 Q22,40 18,35"></path>
<path d="M38,48 Q36,32 32,25"></path>
<path d="M52,45 Q52,28 52,20"></path>
<path d="M66,48 Q70,32 74,25"></path>
<path d="M78,55 Q82,40 86,35"></path>
</svg>
<svg className="absolute bottom-[10%] -left-[10%] md:left-[2%] w-80 h-80 md:w-[28rem] md:h-[28rem] text-rose-900 opacity-[0.02] animate-float-reverse" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="0.6" viewbox="0 0 100 100">
<path d="M30,100 L30,45 Q30,20 50,20 Q70,20 70,45 L70,100"></path>
<path d="M36,45 Q36,26 50,26 Q64,26 64,45 L64,60 Q64,66 50,66 Q36,66 36,60 Z"></path>
<path d="M42,35 Q45,30 45,45" opacity="0.5" strokeWidth="0.4"></path>
</svg>
</div>

<nav className="fixed z-50 flex pr-4 pl-4 top-4 right-0 left-0 justify-center">
<div className="flex transition-all duration-300 hover:bg-white/90 bg-white/70 w-full h-14 max-w-5xl border-white/50 border rounded-2xl pr-6 pl-6 shadow-sm backdrop-blur-xl items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center relative bg-stone-50">
<span className="font-serif italic font-bold text-stone-900 text-sm">a</span>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-stone-900 rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-stone-900">
            Aesthetics
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-stone-500 uppercase tracking-widest">
<a className="hover:text-stone-900 transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="hover:text-stone-900 transition-colors" href="#gallery">Gallery</a>
</div>
<div className="flex items-center gap-4">
<a className="group flex items-center gap-2 bg-stone-900 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-stone-800 transition-all shadow-md hover:shadow-xl hover:shadow-stone-200" href="#">
<span>Book Now</span>
<svg className="lucide lucide-arrow-up-right w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<button aria-label="Menu" className="md:hidden ml-3 p-2 text-stone-600 hover:bg-stone-100 rounded-lg transition-colors group" onclick="toggleMobileMenu()">
<svg className="lucide lucide-menu w-5 h-5 group-hover:text-stone-900" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line></svg><svg className="lucide lucide-x w-5 h-5 hidden group-hover:text-stone-900" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 18 12"></path>
</svg>
</button>
</div>
</div>
<div className="hidden md:hidden absolute top-[4.5rem] left-4 right-4 bg-white/95 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl p-6 flex flex-col gap-6 items-center text-center transition-all duration-300 origin-top transform scale-95 opacity-0 ring-1 ring-stone-900/5" id="mobile-menu">
<a className="text-sm font-medium text-stone-500 uppercase tracking-widest hover:text-stone-900 transition-colors" href="#philosophy" onclick="toggleMobileMenu()">Philosophy</a>
<a className="text-sm font-medium text-stone-500 uppercase tracking-widest hover:text-stone-900 transition-colors" href="#services" onclick="toggleMobileMenu()">Services</a>
<a className="text-sm font-medium text-stone-500 uppercase tracking-widest hover:text-stone-900 transition-colors" href="#gallery" onclick="toggleMobileMenu()">Gallery</a>
</div>
</nav>

<header className="overflow-hidden z-10 lg:pb-32 lg:pt-32 pt-32 pr-6 pb-24 pl-6 relative">
<div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 animate-reveal">

<div className="mb-12 select-none">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full border-[1.5px] border-stone-800 flex items-center justify-center relative">
<span className="font-serif italic text-4xl text-stone-900 leading-none pb-1 pr-1">a</span>
<div className="absolute top-0 right-0 w-4 h-4 bg-stone-900 rounded-full border-4 border-[#FAFAF9]"></div>
</div>
<div>
<h1 className="text-5xl lg:text-6xl font-serif tracking-tight text-stone-900 leading-none">Aesthetics</h1>
<p className="text-xs font-sans uppercase tracking-[0.3em] text-stone-500 mt-1 pl-1">Beauty &amp; Wellness</p>
</div>
</div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-100 shadow-sm text-xs font-medium text-stone-500 mb-8 w-fit animate-reveal delay-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
<span>New Location: 123 Serenity Blvd</span>
</div>
<h2 className="lg:text-7xl leading-[1.05] text-5xl font-semibold text-stone-900 tracking-tight mb-8 animate-reveal delay-200">
            The Art of
            <br/>
<span className="font-serif italic font-normal text-stone-500">
              Conscious Beauty.
            </span>
</h2>
<p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-lg font-light animate-reveal delay-300">
            A boutique salon where industrial minimalism meets velvet comfort. Precision nail care and aesthetics in an environment designed for silence and style.
          </p>
<div className="flex flex-col sm:flex-row gap-4 animate-reveal delay-300">
<a className="inline-flex justify-center items-center px-8 py-3.5 rounded-xl bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-all hover:scale-[1.02] active:scale-[0.98]" href="#">
              Book Appointment
            </a>
<a className="inline-flex justify-center items-center px-8 py-3.5 rounded-xl bg-white border border-stone-200 text-stone-600 text-sm font-medium hover:bg-stone-50 hover:border-stone-300 transition-all hover:scale-[1.02]" href="#gallery">
              View Space
            </a>
</div>
<div className="mt-16 flex items-center gap-8 border-t border-stone-200/60 pt-8 animate-reveal delay-300">
<div>
<p className="text-2xl font-serif text-stone-900">4.9</p>
<p className="text-xs text-stone-400 uppercase tracking-widest mt-1">
                Rating
              </p>
</div>
<div className="w-px h-10 bg-stone-200"></div>
<div className="">
<p className="text-2xl font-serif text-stone-900">500+</p>
<p className="text-xs text-stone-400 uppercase tracking-widest mt-1">
                Happy Clients
              </p>
</div>
</div>
</div>

<div className="lg:col-span-5 relative lg:h-[600px] flex items-center animate-reveal delay-200">
<div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-stone-200 rotate-1 hover:rotate-0 transition-transform duration-700 ease-out bg-stone-200">
<img alt="Aesthetics Salon Interior" className="opacity-90 w-full h-full object-cover" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-white/40 shadow-sm">
<div className="flex items-center justify-between">
<div className="">
<p className="text-xs font-semibold text-stone-900">Studio Space</p>
<p className="text-[10px] text-stone-500 mt-0.5">123 Serenity Blvd, City Center</p>
</div>
<div className="h-8 w-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-900">
<svg className="lucide lucide-map-pin w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
</div>
</div>
</div>
<div className="absolute -z-10 top-10 -right-10 w-full h-full border border-stone-200 rounded-2xl"></div>
</div>
</div>
</header>

<section className="overflow-hidden text-stone-200 bg-stone-900 pt-24 pb-24 relative" id="philosophy">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-stone-800/50 to-transparent blur-[120px] pointer-events-none"></div>
<div className="z-10 max-w-6xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-20">
<div className="lg:w-1/2 fade-up-element">
<h2 className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase mb-4">
              The Atmosphere
            </h2>
<h3 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
              Industrial Soul.
              <br/>
<span className="font-serif italic text-stone-400">
                Velvet Touch.
              </span>
</h3>
</div>
<div className="lg:w-1/2 lg:pb-2 fade-up-element delay-trans-200">
<p className="text-stone-400 font-light text-lg leading-relaxed">
              We believe beauty thrives in calmness. Our salon interiors juxtapose raw concrete textures with warm gold accents and plush seating, creating a sanctuary that feels both modern and timeless.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px] gap-x-4 gap-y-4" id="gallery">

<div className="group relative overflow-hidden rounded-2xl bg-stone-800 md:col-span-2 md:row-span-2 h-full fade-up-element">
<img alt="Salon Workstations" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700 scale-100 group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-center bg-gradient-to-t from-black/60 via-transparent to-transparent bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6">
<span className="text-xs text-white/90 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                Manicure Stations
              </span>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-stone-800 h-full fade-up-element delay-trans-100">
<img alt="Waiting Area Lounge" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700 scale-100 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="bg-center bg-gradient-to-t from-black/50 to-transparent bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4">
<p className="text-xs text-white/90 font-medium">Lounge Area</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-stone-800 h-full fade-up-element delay-trans-200">
<img alt="Treatment Detail" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700 scale-100 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="bg-center bg-gradient-to-t from-black/50 to-transparent bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4">
<p className="text-xs text-white/90 font-medium">Treatments</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-stone-800 h-full fade-up-element">
<img alt="Lashes" className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700 scale-100 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1587909209111-5097ee578ec3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="bg-center bg-gradient-to-t from-black/50 to-transparent bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4">
<p className="text-xs text-white/90 font-medium">Premium Styling</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-stone-800 h-full fade-up-element delay-trans-100">
<img alt="Products" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700 scale-100 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="bg-center bg-gradient-to-t from-black/50 to-transparent bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4">
<p className="text-xs text-white/90 font-medium">Products</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-stone-800 md:col-span-2 h-full fade-up-element">
<img alt="Interior Details" className="object-cover object-center w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700 scale-100 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black/50 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute bottom-4 left-6">
<p className="text-xs text-white/90 font-medium">
                Interior Details
              </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-stone-800 md:col-span-2 h-full fade-up-element delay-trans-100">
<img alt="Interior Texture" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700 scale-100 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black/50 to-transparent bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-6">
<p className="text-xs text-white/90 font-medium">Architecture</p>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-0 pb-0 relative" id="services">
<div className="max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div className="fade-up-element text-center mb-16 in-view">
<span className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase">
            Price List
          </span>
<h2 className="text-3xl italic text-stone-900 tracking-tight font-serif mt-3">
            Services Menu
          </h2>
</div>
<div className="grid md:grid-cols-2 text-left gap-x-16 gap-y-12">

<div className="space-y-12 fade-up-element delay-trans-100">

<div className="">
<div className="flex items-center gap-3 mb-6 border-b border-stone-200 pb-3">
<svg className="lucide lucide-gem w-5 h-5 text-stone-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
<h3 className="text-xl font-semibold text-stone-900">
                  Nail Styling
                </h3>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group">
<div className="">
<span className="block font-medium text-stone-900">
                      Express Hybrid Manicure (Base)
                    </span>
<span className="text-xs text-stone-500 font-light block mt-0.5">
                      Color base, no polish
                    </span>
</div>
<span className="text-stone-900 font-serif italic ml-4 shrink-0">
                    $45.00
                  </span>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-stone-900 font-medium block">
                      Hybrid Manicure with Builder
                    </span>
</div>
<div className="flex flex-col items-end ml-4 shrink-0">
<span className="text-stone-900 font-serif italic">
                      $55.00
                    </span>
<span className="text-[10px] text-stone-400 line-through">
                      $60.00
                    </span>
</div>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-stone-900 font-medium block">
                      Hybrid Manicure Hands + Feet
                    </span>
</div>
<div className="flex flex-col items-end ml-4 shrink-0">
<span className="text-stone-900 font-serif italic">
                      $110.00
                    </span>
<span className="text-[10px] text-stone-400 line-through">
                      $120.00
                    </span>
</div>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-stone-900 font-medium block">
                      Men's Manicure
                    </span>
</div>
<div className="flex flex-col items-end ml-4 shrink-0">
<span className="text-stone-900 font-serif italic">
                      $35.00
                    </span>
</div>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-stone-900 font-medium block">
                      Gel Extensions (Full Set)
                    </span>
</div>
<div className="flex flex-col items-end ml-4 shrink-0">
<span className="text-stone-900 font-serif italic">
                      $85.00
                    </span>
</div>
</li>
</ul>
</div>

<div>
<div className="flex items-center gap-3 mb-6 border-b border-stone-200 pb-3">
<svg className="lucide lucide-footprints w-5 h-5 text-stone-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"></path><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"></path><path d="M16 17h4"></path><path d="M4 13h4"></path></svg>
<h3 className="text-xl font-semibold text-stone-900">
                  Foot Care
                </h3>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group">
<div>
<span className="text-stone-900 font-medium block">
                      SPA Hybrid Pedicure
                    </span>
</div>
<div className="flex flex-col items-end ml-4 shrink-0">
<span className="text-stone-900 font-serif italic">
                      $65.00
                    </span>
</div>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-stone-900 font-medium block">
                      Acid Peel Pedicure
                    </span>
</div>
<div className="flex flex-col items-end ml-4 shrink-0">
<span className="text-stone-900 font-serif italic">
                      $85.00
                    </span>
<span className="text-[10px] text-stone-400 line-through">
                      $95.00
                    </span>
</div>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-stone-900 font-medium block">
                      Men's Pedicure
                    </span>
</div>
<div className="flex flex-col items-end ml-4 shrink-0">
<span className="text-stone-900 font-serif italic">
                      $50.00
                    </span>
</div>
</li>
</ul>
</div>
</div>

<div className="space-y-12 fade-up-element delay-trans-200">

<div className="">
<div className="flex items-center gap-3 mb-6 border-b border-stone-200 pb-3">
<svg className="lucide lucide-eye w-5 h-5 text-stone-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<h3 className="text-xl font-semibold text-stone-900">
                  Lashes &amp; Brows
                </h3>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group">
<div className="">
<span className="text-stone-900 font-medium block">
                      Lash Lift + Tint + Botox
                    </span>
</div>
<span className="text-stone-900 font-serif italic ml-4 shrink-0">
                    $75.00
                  </span>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-stone-900 font-medium block">
                      Brow Lamination + Shaping
                    </span>
</div>
<div className="flex flex-col items-end ml-4 shrink-0">
<span className="text-stone-900 font-serif italic">
                      $55.00
                    </span>
<span className="text-[10px] text-stone-400 line-through">
                      $65.00
                    </span>
</div>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-stone-900 font-medium block">
                      Powder Henna Brows
                    </span>
</div>
<div className="flex flex-col items-end ml-4 shrink-0">
<span className="text-stone-900 font-serif italic">
                      $40.00
                    </span>
</div>
</li>
</ul>
</div>

<div className="">
<div className="flex items-center gap-3 mb-6 border-b border-stone-200 pb-3">
<svg className="lucide lucide-sparkles w-5 h-5 text-stone-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<h3 className="text-xl font-semibold text-stone-900">
                  Facial Treatments
                </h3>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group">
<div>
<span className="text-stone-900 font-medium block">
                      Hydrogen Cleansing (6 stages)
                    </span>
</div>
<div className="flex flex-col items-end ml-4 shrink-0">
<span className="text-stone-900 font-serif italic">
                      $110.00
                    </span>
<span className="text-[10px] text-stone-400 line-through">
                      $130.00
                    </span>
</div>
</li>
<li className="flex justify-between items-baseline group">
<div className="">
<span className="text-stone-900 font-medium block">
                      Microneedling Mesotherapy
                    </span>
</div>
<div className="flex flex-col items-end ml-4 shrink-0">
<span className="text-stone-900 font-serif italic">
                      $120.00
                    </span>
<span className="text-[10px] text-stone-400 line-through">
                      $140.00
                    </span>
</div>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-stone-900 font-medium block">
                      Manual Facial Cleansing
                    </span>
</div>
<div className="flex flex-col items-end ml-4 shrink-0">
<span className="text-stone-900 font-serif italic">
                      $80.00
                    </span>
</div>
</li>
</ul>
</div>
<div className="mt-12">
<div className="flex items-center gap-3 mb-6 border-b border-stone-200 pb-3">
<svg className="lucide lucide-feather w-5 h-5 text-stone-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
<line x1="16" x2="2" y1="8" y2="22"></line>
<line x1="17.5" x2="9" y1="15" y2="15"></line>
</svg>
<h3 className="text-xl font-semibold text-stone-900">
                  Waxing
                </h3>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group">
<div>
<span className="text-stone-900 font-medium block">Chin / Lip</span>
</div>
<span className="text-stone-900 font-serif italic ml-4 shrink-0">
                    $15.00
                  </span>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-stone-900 font-medium block">Full Face</span>
</div>
<span className="text-stone-900 font-serif italic ml-4 shrink-0">
                    $40.00
                  </span>
</li>
</ul>
</div>
</div>
</div>
<div className="mt-16 text-center fade-up-element delay-trans-300">
<a className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-all shadow-md hover:shadow-xl hover:shadow-stone-200 hover:-translate-y-0.5" href="#">
            Book Appointment
            <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-stone-50 rounded-3xl p-2 border border-stone-100 fade-up-element">
<div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl">
<div className="p-10 lg:p-16 flex flex-col justify-center bg-stone-50">
<h3 className="text-2xl font-semibold tracking-tight text-stone-900 mb-8">
                Visit the studio
              </h3>
<div className="space-y-8">
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">
                    Address
                  </h4>
<p className="text-stone-900 font-medium">
                    123 Serenity Blvd, Suite 100
                  </p>
<p className="text-stone-600 font-light text-sm">
                    City Center, 90210
                  </p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">
                    Hours
                  </h4>
<div className="grid grid-cols-2 gap-4 max-w-xs text-sm">
<span className="text-stone-600">
                      Mon - Fri
                    </span>
<span className="text-stone-900 text-right">09:00 - 20:00</span>
<span className="text-stone-600">
                      Saturday
                    </span>
<span className="text-stone-900 text-right">10:00 - 18:00</span>
</div>
</div>
<div className="">
<h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">
                    Contact
                  </h4>
<p className="text-stone-900 font-medium">+1 (555) 123-4567</p>
</div>
</div>
</div>
<div className="h-80 lg:h-auto bg-stone-200 relative grayscale contrast-[0.9] hover:grayscale-0 transition-all duration-700">

<iframe allowfullscreen="" className="absolute inset-0 w-full h-full" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841263870634!2d-73.9877312845936!3d40.74844057932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-stone-100">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
<div>
<div className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center relative bg-stone-50 mb-6">
<span className="font-serif italic font-bold text-stone-900 text-lg">a</span>
<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-stone-900 rounded-full"></div>
</div>
<p className="text-2xl font-semibold tracking-tight text-stone-900 max-w-xs">
              Refining beauty standards.
            </p>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all" href="#">
<svg className="lucide lucide-instagram w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all" href="#">
<svg className="lucide lucide-facebook w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all" href="#">
<svg className="lucide lucide-phone w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</a>
</div>
</div>
<div className="mt-16 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 font-medium">
<span>© 2026 Aesthetics Studio</span>
<div className="flex gap-6">
<a className="hover:text-stone-900 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-stone-900 transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>




    </>
  );
}
