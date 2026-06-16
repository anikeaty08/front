import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();

      window.addEventListener('scroll', () => {
          const nav = document.getElementById('main-nav');
          if (window.scrollY > 80) {
              nav.classList.add('bg-[#0A0A0A]', 'shadow-2xl');
              nav.querySelector('nav').classList.replace('h-[72px]', 'h-[64px]');
          } else {
              nav.classList.remove('bg-[#0A0A0A]', 'shadow-2xl');
              nav.querySelector('nav').classList.replace('h-[64px]', 'h-[72px]');
          }
      });

      // Entrance animation for Hero Bike
      setTimeout(() => {
          const bike = document.getElementById('hero-bike-img');
          if(bike) {
              bike.classList.remove('translate-x-32', 'opacity-0');
              bike.classList.add('translate-x-0', 'opacity-100');
          }
      }, 1000);

      // Intersection Observer for scroll animations
      const observerOptions = { threshold: 0.1 };
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate-reveal');
              }
          });
      }, observerOptions);

      document.querySelectorAll('h2').forEach(h2 => observer.observe(h2));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full z-50 transition-all duration-500" id="main-nav">
<div className="bg-[#E3001B] text-white py-2 overflow-hidden whitespace-nowrap h-9">
<div className="inline-block animate-marquee">
<span className="mx-8 text-[11px] font-bold tracking-[0.2em] uppercase">
            🔥 Gixxer SF 250 — Special EMI from ৳4,999/month | 🆕 Access 125 Now
            Available | 📍 500+ Dealers Across Bangladesh
          </span>
<span className="mx-8 text-[11px] font-bold tracking-[0.2em] uppercase">
            🔥 Gixxer SF 250 — Special EMI from ৳4,999/month | 🆕 Access 125 Now
            Available | 📍 500+ Dealers Across Bangladesh
          </span>
</div>
</div>
<nav className="container max-w-[1320px] flex transition-all duration-300 mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-12">
<a className="w-32 block" href="/">
<svg className="w-[128px] h-[25px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{color: 'rgb(26, 26, 26)', width: '128px', height: '25px'}} viewbox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12.5 5H35L22.5 35H0L12.5 5Z" fill="#E3001B"></path>
<path className="" d="M45 5H55V35H45V5ZM65 5H85V10H75V17H83V22H75V30H85V35H65V5ZM95 5H105V25C105 30 102 35 95 35V30C100 30 100 28 100 25V5H95Z" fill="white" id="logo-text"></path>
</svg>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="hover:opacity-100 text-[13px] uppercase nav-underline font-semibold text-white tracking-[1.5px] opacity-85 relative" href="/bike-page">
              Bikes
            </a>
<a className="text-white opacity-85 hover:opacity-100 text-[13px] font-semibold tracking-[1.5px] uppercase relative nav-underline" href="#">
              Service
            </a>
<a className="text-white opacity-85 hover:opacity-100 text-[13px] font-semibold tracking-[1.5px] uppercase relative nav-underline" href="#">
              Shop
            </a>
<a className="text-white opacity-85 hover:opacity-100 text-[13px] font-semibold tracking-[1.5px] uppercase relative nav-underline" href="#">
              Dealer Locator
            </a>
<a className="text-white opacity-85 hover:opacity-100 text-[13px] font-semibold tracking-[1.5px] uppercase relative nav-underline" href="#">
              Offers
            </a>
<a className="text-white opacity-85 hover:opacity-100 text-[13px] font-semibold tracking-[1.5px] uppercase relative nav-underline" href="#">
              Contact
            </a>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-6 text-white">
<i className="w-5 h-5 cursor-pointer hover:text-[#E3001B]" data-lucide="search" strokeWidth="1.5"></i>
<span className="text-[11px] font-bold cursor-pointer">EN | বাং</span>
</div>
<button className="bg-[#E3001B] hover:bg-[#FF1A2E] hover:scale-105 text-white px-7 py-3 rounded-full text-xs font-bold uppercase transition-all shadow-xl">
            Book Test Ride
          </button>
<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>
</header>

<section className="relative h-screen bg-[#060606] overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Suzuki Motion Blur" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40"></div>
</div>
<div className="container flex flex-col z-10 h-full max-w-[1320px] mr-auto ml-auto pr-10 pb-20 pl-10 relative justify-center">
<div className="max-w-4xl">
<span className="flex items-center gap-4 text-[#E3001B] font-semibold tracking-[4px] text-[11px] uppercase mb-6">
<span className="w-10 h-[1px] bg-[#E3001B]"></span>
            — 2025 FLAGSHIP EDITION
          </span>
<h1 className="text-white text-[80px] md:text-[100px] lg:text-[130px] font-heading font-extrabold leading-[0.85] tracking-tighter uppercase mb-10">
<div className="animate-reveal">BUILT FOR</div>
<div className="animate-reveal" style={{animationDelay: '0.15s'}}>
              EVERY ROAD.
            </div>
</h1>
<p className="text-white/80 text-xl max-w-[480px] mb-12 leading-relaxed font-normal">
            Pure adrenaline, zero compromise. Discover the legendary GSX
            heritage engineered for Bangladesh.
          </p>
<div className="flex flex-col sm:flex-row gap-6 mb-12">
<button className="hover:bg-[#FF1A2E] text-[13px] uppercase flex group transition-all shadow-red-900/20 font-semibold text-white bg-[#E3001B] h-[64px] pr-12 pl-12 shadow-2xl gap-x-4 gap-y-4 items-center justify-center">
              Explore All Bikes
              <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white hover:text-[#0A0A0A] text-white h-[64px] px-12 text-[13px] font-semibold uppercase transition-all">
              Book Test Ride
            </button>
</div>
</div>
</div>
<div className="absolute bottom-10 right-[-5%] w-[65%] hidden lg:block pointer-events-none transition-all duration-1000 ease-out" id="hero-bike-img">
</div>
<div className="hidden absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
</div>
</section>

<section className="py-32 bg-[#F8F8F8] overflow-hidden">
<div className="container max-w-[1320px] mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-20">
<span className="text-[#E3001B] font-bold tracking-[4px] uppercase text-[11px]">
            OUR LINEUP
          </span>
<h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-[#0A0A0A] mt-4 uppercase">
            Find Your Perfect Suzuki
          </h2>
<p className="text-gray-500 text-lg mt-6 max-w-2xl mx-auto">
            From street-legal racers to urban scooters—engineered for every
            journey.
          </p>
</div>
<div className="flex gap-4 mb-16 overflow-x-auto no-scrollbar justify-center">
<button className="bg-[#0A0A0A] text-white px-10 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest">
            All Models
          </button>
<button className="hover:border-[#E3001B] hover:text-[#E3001B] uppercase transition-all text-xs font-bold text-gray-500 tracking-widest bg-white border-gray-200 border rounded-full pt-3.5 pr-10 pb-3.5 pl-10">
            Motorcycles
          </button>
<button className="bg-white text-gray-500 border border-gray-200 hover:border-[#E3001B] hover:text-[#E3001B] px-10 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
            Scooters
          </button>
<button className="bg-white text-gray-500 border border-gray-200 hover:border-[#E3001B] hover:text-[#E3001B] px-10 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
            New 2025
          </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
<div className="relative aspect-[4/3] flex items-center justify-center p-12 bg-gradient-to-br from-[#111] to-[#222] overflow-hidden">
<img alt="GSX-R150" className="transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-2 w-full h-auto" src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 flex flex-col gap-2">
<span className="bg-[#E3001B] text-white text-[9px] px-3 py-1 font-black uppercase tracking-widest">
                  Sports
                </span>
</div>
</div>
<div className="p-10">
<h3 className="text-3xl font-heading font-black tracking-tight uppercase">
                Gixxer SF 250
              </h3>
<div className="mt-6 flex items-center justify-between border-b border-gray-100 pb-6">
<div className="flex gap-2">
<div className="w-4 h-4 rounded-full bg-blue-600 border border-gray-200 cursor-pointer" title="Metallic Blue"></div>
<div className="w-4 h-4 rounded-full bg-red-600 border border-gray-200 cursor-pointer" title="Pearl Red"></div>
<div className="w-4 h-4 rounded-full bg-zinc-900 border border-gray-200 cursor-pointer" title="Matt Black"></div>
</div>
<span className="text-2xl font-black">৳ 3,49,950</span>
</div>
<button className="w-full mt-8 bg-[#0A0A0A] hover:bg-[#E3001B] text-white py-5 text-xs font-bold uppercase tracking-widest transition-all">
                Configure &amp; Book
              </button>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
<div className="relative aspect-[4/3] flex items-center justify-center p-12 bg-gradient-to-br from-[#002B7F] to-[#001A52] overflow-hidden">
<img alt="GSX-R150" className="transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-2 w-full h-auto" src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-6 left-6 bg-white text-black text-[9px] px-3 py-1 font-black uppercase tracking-widest">
                Supersport
              </span>
</div>
<div className="p-10">
<h3 className="text-3xl font-heading font-black tracking-tight uppercase">
                GSX-R150
              </h3>
<div className="mt-6 flex items-center justify-between border-b border-gray-100 pb-6">
<div className="flex gap-2">
<div className="w-4 h-4 rounded-full bg-blue-600 border border-gray-200 cursor-pointer"></div>
<div className="w-4 h-4 rounded-full bg-zinc-900 border border-gray-200 cursor-pointer"></div>
</div>
<span className="text-2xl font-black">৳ 3,95,000</span>
</div>
<button className="w-full mt-8 bg-[#0A0A0A] hover:bg-[#E3001B] text-white py-5 text-xs font-bold uppercase tracking-widest transition-all">
                Configure &amp; Book
              </button>
</div>
</div>
<div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
<div className="relative aspect-[4/3] flex items-center justify-center p-12 bg-gradient-to-br from-[#002B7F] to-[#001A52] overflow-hidden">
<img alt="GSX-R150" className="transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-2 w-full h-auto" src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-6 left-6 bg-white text-black text-[9px] px-3 py-1 font-black uppercase tracking-widest">
                Supersport
              </span>
</div>
<div className="p-10">
<h3 className="text-3xl font-heading font-black tracking-tight uppercase">
                GSX-R150
              </h3>
<div className="mt-6 flex items-center justify-between border-b border-gray-100 pb-6">
<div className="flex gap-2">
<div className="w-4 h-4 rounded-full bg-blue-600 border border-gray-200 cursor-pointer"></div>
<div className="w-4 h-4 rounded-full bg-zinc-900 border border-gray-200 cursor-pointer"></div>
</div>
<span className="text-2xl font-black">৳ 3,95,000</span>
</div>
<button className="w-full mt-8 bg-[#0A0A0A] hover:bg-[#E3001B] text-white py-5 text-xs font-bold uppercase tracking-widest transition-all">
                Configure &amp; Book
              </button>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
<div className="relative aspect-[4/3] flex items-center justify-center p-12 bg-gradient-to-br from-[#002B7F] to-[#001A52] overflow-hidden">
<img alt="GSX-R150" className="transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-2 w-full h-auto" src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-6 left-6 bg-white text-black text-[9px] px-3 py-1 font-black uppercase tracking-widest">
                Supersport
              </span>
</div>
<div className="p-10">
<h3 className="text-3xl font-heading font-black tracking-tight uppercase">
                GSX-R150
              </h3>
<div className="mt-6 flex items-center justify-between border-b border-gray-100 pb-6">
<div className="flex gap-2">
<div className="w-4 h-4 rounded-full bg-blue-600 border border-gray-200 cursor-pointer"></div>
<div className="w-4 h-4 rounded-full bg-zinc-900 border border-gray-200 cursor-pointer"></div>
</div>
<span className="text-2xl font-black">৳ 3,95,000</span>
</div>
<button className="w-full mt-8 bg-[#0A0A0A] hover:bg-[#E3001B] text-white py-5 text-xs font-bold uppercase tracking-widest transition-all">
                Configure &amp; Book
              </button>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
<div className="relative aspect-[4/3] flex items-center justify-center p-12 bg-[#E8E8E8] overflow-hidden">
<img alt="Burgman" className="w-full h-auto transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-6 left-6 bg-red-600 text-white text-[9px] px-3 py-1 font-black uppercase tracking-widest">
                Premium
              </span>
</div>
<div className="p-10">
<h3 className="text-3xl font-heading font-black tracking-tight uppercase">
                Burgman Street EX
              </h3>
<div className="mt-6 flex items-center justify-between border-b border-gray-100 pb-6">
<div className="flex gap-2">
<div className="w-4 h-4 rounded-full bg-white border border-gray-300"></div>
<div className="w-4 h-4 rounded-full bg-zinc-900"></div>
</div>
<span className="text-2xl font-black">৳ 2,49,000</span>
</div>
<button className="w-full mt-8 bg-[#0A0A0A] hover:bg-[#E3001B] text-white py-5 text-xs font-bold uppercase tracking-widest transition-all">
                Configure &amp; Book
              </button>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
<div className="relative aspect-[4/3] flex items-center justify-center p-12 bg-gray-50 overflow-hidden">
<img alt="Hayate" className="transition-transform duration-1000 group-hover:scale-110 w-full h-auto" src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-6 left-6 bg-gray-500 text-white text-[9px] px-3 py-1 font-black uppercase tracking-widest">
                Commuter
              </span>
</div>
<div className="p-10">
<h3 className="text-3xl font-heading font-black tracking-tight uppercase">
                Hayate EP
              </h3>
<div className="mt-6 flex items-center justify-between border-b border-gray-100 pb-6">
<div className="flex gap-2">
<div className="w-4 h-4 rounded-full bg-blue-900"></div>
<div className="w-4 h-4 rounded-full bg-zinc-900"></div>
</div>
<span className="text-2xl font-black">৳ 1,07,000</span>
</div>
<button className="w-full mt-8 bg-[#0A0A0A] hover:bg-[#E3001B] text-white py-5 text-xs font-bold uppercase tracking-widest transition-all">
                Configure &amp; Book
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0A0A0A] overflow-hidden text-white">
<div className="container max-w-[1320px] mx-auto px-10">
<div className="flex flex-col lg:flex-row mb-20 gap-x-8 gap-y-8 items-end justify-between">
<div className="">
<div className="flex items-center gap-3 mb-6">
<span className="bg-green-500 w-2 h-2 rounded-full animate-pulse"></span>
<span className="text-white/60 font-black tracking-[4px] text-[11px] uppercase">
                3 Active Deals Found
              </span>
</div>
<h2 className="text-6xl md:text-8xl font-heading font-black tracking-tight uppercase leading-[0.85]">
              LIMITED TIME
              <br/>
              SPOTLIGHT
            </h2>
</div>
<div className="flex gap-8 border-l border-white/10 pl-8">
<div className="text-right">
<span className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-2 block">
                Offer Ends In
              </span>
<div className="text-3xl font-heading font-black text-[#E3001B]">
                02D : 14H : 32M
              </div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="relative bg-[#151515] border border-[#E3001B] rounded-3xl p-8 pt-12 group transition-all hover:bg-[#1A1A1A]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
              ⭐ MOST POPULAR
            </div>
<div className="absolute top-4 left-0 bg-[#E3001B] px-4 py-2 font-black text-xs uppercase italic transform -skew-x-12 z-10 shadow-xl">
              SAVE ৳18,000
            </div>
<div className="aspect-square flex items-center justify-center mb-6">
<img className="transition-transform duration-500 group-hover:scale-105 w-full h-auto drop-shadow-[0_20px_30px_rgba(227,0,27,0.3)]" src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-heading font-black uppercase mb-4">
              Gixxer SF 250
            </h3>
<div className="flex flex-col gap-1 mb-8">
<span className="text-white/40 line-through text-lg decoration-red-600">
                ৳ 3,63,000
              </span>
<span className="text-[#E3001B] text-4xl font-black drop-shadow-[0_0_10px_rgba(227,0,27,0.4)]">
                ৳ 3,45,000
              </span>
</div>
<div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-8 flex justify-between items-center">
<span className="text-yellow-500 text-[11px] font-bold uppercase tracking-widest">
                EMI STARTS FROM
              </span>
<span className="text-yellow-500 font-black">৳5,999/mo</span>
</div>
<button className="w-full bg-[#E3001B] hover:bg-[#FF1A2E] py-5 text-sm font-black uppercase tracking-[2px] transition-all flex items-center justify-center gap-3">
              Grab This Deal
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="bg-[#151515] border border-white/5 rounded-3xl p-8 pt-12 group transition-all hover:border-white/20">
<div className="absolute top-4 left-0 bg-white text-black px-4 py-2 font-black text-xs uppercase italic transform -skew-x-12 z-10">
              SAVE ৳8,000
            </div>
<div className="aspect-square flex items-center justify-center mb-6">
<img className="transition-transform duration-500 group-hover:scale-105 w-full h-auto drop-shadow-[0_20px_30px_rgba(227,0,27,0.3)]" src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-heading font-black uppercase mb-4">
              Gixxer 150 FI
            </h3>
<div className="flex flex-col gap-1 mb-8">
<span className="text-white/40 line-through text-lg">৳ 1,93,000</span>
<span className="text-white text-4xl font-black">৳ 1,85,000</span>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8 flex justify-between items-center">
<span className="text-white/60 text-[11px] font-bold uppercase tracking-widest">
                EMI STARTS FROM
              </span>
<span className="text-white font-black">৳3,299/mo</span>
</div>
<button className="w-full bg-white/10 hover:bg-white hover:text-black py-5 text-sm font-black uppercase tracking-[2px] transition-all">
              Grab This Deal
            </button>
</div>

<div className="bg-[#151515] border border-white/5 rounded-3xl p-8 pt-12 group transition-all hover:border-white/20">
<div className="absolute top-4 left-0 bg-white text-black px-4 py-2 font-black text-xs uppercase italic transform -skew-x-12 z-10">
              SAVE ৳5,000
            </div>
<div className="aspect-square flex items-center justify-center mb-6 bg-gradient-to-t from-white/5 to-transparent rounded-2xl">
<img className="w-full h-auto transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="text-2xl font-heading font-black uppercase mb-4">
              Access 125
            </h3>
<div className="flex flex-col gap-1 mb-8">
<span className="text-white/40 line-through text-lg">৳ 1,55,000</span>
<span className="text-white text-4xl font-black">৳ 1,50,000</span>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8 flex justify-between items-center">
<span className="text-white/60 text-[11px] font-bold uppercase tracking-widest">
                EMI STARTS FROM
              </span>
<span className="text-white font-black">৳2,699/mo</span>
</div>
<button className="w-full bg-white/10 hover:bg-white hover:text-black py-5 text-sm font-black uppercase tracking-[2px] transition-all">
              Grab This Deal
            </button>
</div>
</div>
<div className="mt-16 bg-[#1A1A1A] border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<i className="w-8 h-8 text-[#E3001B]" data-lucide="calculator"></i>
<p className="text-white font-bold text-lg">
              Calculate your EMI — Own any Suzuki from ৳2,999/month
            </p>
</div>
<button className="border border-[#E3001B] text-[#E3001B] hover:bg-[#E3001B] hover:text-white px-10 py-4 text-xs font-black uppercase tracking-widest transition-all">
            Try EMI Calculator →
          </button>
</div>
</div>
</section>

<section className="py-32 bg-[#F8F8F8]">
<div className="container max-w-[1320px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
<div className="">
<span className="text-[#E3001B] font-bold tracking-[4px] uppercase text-[11px]">
              SUZUKI BRAND SHOP
            </span>
<h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-[#0A0A0A] mt-4 uppercase leading-[0.85]">
              Gear Up
              <br/>
              Like a Pro
            </h2>
</div>
<a className="text-black font-black uppercase tracking-[2px] text-[13px] border-b-2 border-black/10 pb-2 hover:border-[#E3001B] transition-all" href="#">
            Explore Full Shop →
          </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">

<div className="md:col-span-7 relative h-[600px] rounded-[40px] overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-12 left-12 right-12">
<span className="text-[#E3001B] text-[11px] font-black uppercase tracking-[4px] mb-4 block">
                RIDING GEAR
              </span>
<h3 className="text-4xl font-heading font-black uppercase text-white mb-6">
                Premium Protection
              </h3>
<button className="bg-white text-black px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-[#E3001B] hover:text-white transition-all transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                Shop Collection
              </button>
</div>
</div>
<div className="md:col-span-5 flex flex-col gap-8">

<div className="flex-1 relative rounded-[40px] overflow-hidden group min-h-[284px]">
<img alt="Suzuki Ecstar Oil" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/80"></div>
<div className="absolute inset-0 p-10 flex flex-col justify-end">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-heading font-black text-white uppercase">
                    ENGINE OIL
                  </h3>
<span className="bg-green-500 text-white text-[8px] px-2 py-1 font-bold uppercase rounded">
                    OEM CERTIFIED ✓
                  </span>
</div>
<p className="text-white/60 text-xs mb-6 uppercase tracking-widest">
                  Pure Performance. Every Revolution.
                </p>
<a className="text-[#E3001B] text-xs font-black uppercase tracking-widest" href="#">
                  Shop Now →
                </a>
</div>
</div>

<div className="flex-1 relative rounded-[40px] overflow-hidden group min-h-[284px]">
<img alt="Helmets" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-br from-[#002B7F]/60 to-black/80"></div>
<div className="absolute inset-0 p-10 flex flex-col justify-end">
<h3 className="text-2xl font-heading font-black text-white uppercase mb-2">
                  SUZUKI HELMETS
                </h3>
<p className="text-white/60 text-xs mb-6 uppercase tracking-widest">
                  Factory Engineered Safety
                </p>
<a className="text-white text-xs font-black uppercase tracking-widest" href="#">
                  View Gallery →
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-br from-[#003087] to-[#001A52] text-white overflow-hidden relative">
<div className="container max-w-[1320px] mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<span className="text-white/60 font-bold tracking-[4px] uppercase text-[11px]">
            SUZUKI SERVICE
          </span>
<h2 className="text-5xl md:text-7xl font-heading font-black tracking-tight mt-6 uppercase leading-none">
            Your Bike Deserves
            <br/>
            the Best Care.
          </h2>
<p className="text-white/70 text-lg mt-8 max-w-2xl mx-auto">
            500+ authorized service centers. Factory-trained technicians.
            Genuine parts. Zero compromise.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl hover:bg-white/10 hover:-translate-y-2 hover:border-[#E3001B]/40 transition-all group">
<i className="w-10 h-10 mb-8 text-white/50 group-hover:text-[#E3001B] transition-colors" data-lucide="wrench"></i>
<h3 className="text-2xl font-heading font-black uppercase mb-4">
              Regular Service
            </h3>
<p className="text-white/60 text-sm leading-relaxed mb-8">
              Book your next service online in under 2 minutes.
            </p>
<a className="text-[#E3001B] font-bold uppercase text-[11px] tracking-widest flex items-center gap-2" href="#">
              Book Now
              <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl hover:bg-white/10 hover:-translate-y-2 hover:border-[#E3001B]/40 transition-all group">
<i className="w-10 h-10 mb-8 text-white/50 group-hover:text-[#E3001B] transition-colors" data-lucide="shield-check"></i>
<h3 className="text-2xl font-heading font-black uppercase mb-4">
              Warranty Care
            </h3>
<p className="text-white/60 text-sm leading-relaxed mb-8">
              Full coverage, hassle-free claims, nationwide.
            </p>
<a className="text-[#E3001B] font-bold uppercase text-[11px] tracking-widest flex items-center gap-2" href="#">
              Learn More
              <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl hover:bg-white/10 hover:-translate-y-2 hover:border-[#E3001B]/40 transition-all group">
<i className="w-10 h-10 mb-8 text-white/50 group-hover:text-[#E3001B] transition-colors" data-lucide="settings"></i>
<h3 className="text-2xl font-heading font-black uppercase mb-4">
              Genuine Parts
            </h3>
<p className="text-white/60 text-sm leading-relaxed mb-8">
              Only OEM parts. Your bike runs like day one.
            </p>
<a className="text-[#E3001B] font-bold uppercase text-[11px] tracking-widest flex items-center gap-2" href="#">
              Order Parts
              <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl hover:bg-white/10 hover:-translate-y-2 hover:border-[#E3001B]/40 transition-all group">
<i className="w-10 h-10 mb-8 text-white/50 group-hover:text-[#E3001B] transition-colors" data-lucide="map-pin"></i>
<h3 className="text-2xl font-heading font-black uppercase mb-4">
              Service Locator
            </h3>
<p className="text-white/60 text-sm leading-relaxed mb-8">
              500+ centers. Find the nearest one in seconds.
            </p>
<a className="text-[#E3001B] font-bold uppercase text-[11px] tracking-widest flex items-center gap-2" href="#">
              Find Now
              <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</div>
<div className="mt-24 w-full bg-[#E3001B] py-4 text-center text-white text-xs font-bold uppercase tracking-[4px]">
        📞 Service Helpline: 16247 | 🕐 Mon–Sat, 9AM–6PM | Book Online &amp; Get
        10% Off
      </div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="container max-w-[1320px] mx-auto px-6 text-center mb-16">
<span className="text-[#E3001B] font-bold tracking-[4px] uppercase text-[11px]">
          FIND US
        </span>
<h2 className="text-5xl md:text-6xl font-heading font-black tracking-tight text-[#0A0A0A] mt-4 uppercase leading-none">
          500+ Dealers.
          <br/>
          One Near You.
        </h2>
<p className="text-gray-500 text-lg mt-6">
          Walk in, test ride, and own your dream bike today.
        </p>
</div>
<div className="flex flex-col lg:flex-row h-[700px]">
<div className="lg:w-2/5 bg-[#F4F4F4] p-12 overflow-y-auto custom-scrollbar">
<div className="space-y-4 mb-10">
<select className="w-full bg-white border border-gray-200 py-4 px-6 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-[#E3001B]">
<option>SELECT DIVISION</option>
</select>
<select className="w-full bg-white border border-gray-200 py-4 px-6 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-[#E3001B]">
<option>SELECT DISTRICT</option>
</select>
<button className="w-full bg-[#E3001B] text-white py-5 text-xs font-black uppercase tracking-[3px] hover:bg-red-700 transition-all">
              Find Dealers
            </button>
</div>
<div className="space-y-6">
<div className="p-8 bg-white shadow-sm border-l-4 border-[#E3001B] hover:shadow-xl transition-shadow">
<h4 className="font-black text-xl font-heading uppercase">
                Suzuki Flagship Store
              </h4>
<p className="text-gray-500 text-xs font-bold mt-2 uppercase">
                210/A, Tejgaon Industrial Area, Dhaka 1208
              </p>
<div className="flex items-center gap-6 mt-6">
<a className="text-[11px] font-black text-[#003087] flex items-center gap-2 uppercase tracking-widest" href="#">
<i className="w-4 h-4" data-lucide="phone"></i>
                  Call
                </a>
<a className="text-[11px] font-black text-[#E3001B] flex items-center gap-2 uppercase tracking-widest" href="#">
<i className="w-4 h-4" data-lucide="navigation"></i>
                  Directions
                </a>
</div>
<span className="block mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                2.4 km away
              </span>
</div>
</div>
</div>
<div className="lg:w-3/5 relative min-h-[400px]">
<iframe allowfullscreen="" aria-hidden="false" className="absolute inset-0 w-full h-full grayscale opacity-80" frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.8318788448!2d90.3372881!3d23.7808875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000" tabindex="0"></iframe>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] text-white">
<div className="container max-w-[1320px] mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div>
<span className="text-[#E3001B] font-bold tracking-[4px] uppercase text-[11px]">
              LATEST FROM SUZUKI BD
            </span>
<h2 className="text-6xl md:text-7xl font-heading font-black tracking-tight mt-4 uppercase">
              TOP NEWS
            </h2>
</div>
<button className="border border-[#E3001B] text-[#E3001B] px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#E3001B] hover:text-white transition-all">
            All News
          </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
<div className="lg:col-span-8 relative rounded-2xl overflow-hidden group">
<img alt="News" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-10 left-10">
<span className="bg-[#E3001B] px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
                New Launch
              </span>
<h3 className="text-3xl font-heading font-black uppercase mb-4 max-w-lg">
                The All-New V-STROM SX 250 arrives in Bangladesh: Master of
                Adventure
              </h3>
<a className="text-[11px] font-bold uppercase tracking-[2px] flex items-center gap-2" href="#">
                Read More
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="lg:col-span-4 flex flex-col gap-8">
<div className="flex gap-6 group cursor-pointer">
<div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&amp;w=300&amp;h=300&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<span className="text-[#E3001B] text-[10px] font-bold uppercase tracking-widest mb-2">
                  Event
                </span>
<h4 className="font-black text-sm uppercase leading-tight group-hover:text-[#E3001B] transition-colors">
                  Suzuki Riding Zone Experience Tour 2024 kicks off in
                  Chittagong
                </h4>
<span className="text-white/40 text-[10px] mt-2 uppercase">
                  March 12, 2024
                </span>
</div>
</div>
<div className="flex gap-6 group cursor-pointer">
<div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center">
<span className="text-[#003087] text-[10px] font-bold uppercase tracking-widest mb-2">
                  Community
                </span>
<h4 className="font-black text-sm uppercase leading-tight group-hover:text-[#E3001B] transition-colors">
                  Why Gixxer owners are the most loyal community in BD
                </h4>
<span className="text-white/40 text-[10px] mt-2 uppercase">
                  Feb 28, 2024
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0D0D0D] text-white overflow-hidden">
<div className="container max-w-[1320px] mx-auto px-6 mb-20 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
<div className="">
<span className="text-[#E3001B] font-bold tracking-[4px] uppercase text-[11px] mb-8 block">
            COMMUNITY VOICES
          </span>
<div className="flex flex-col space-y-4">
<h2 className="text-6xl md:text-8xl font-heading font-black tracking-tighter uppercase leading-none">
              Real Riders.
            </h2>
<h2 className="text-6xl md:text-8xl font-heading font-black tracking-tighter uppercase leading-none pl-10 md:pl-20">
              Real Roads.
            </h2>
<h2 className="text-6xl md:text-8xl font-heading font-black tracking-tighter uppercase leading-none pl-20 md:pl-40">
              Real Stories.
            </h2>
</div>
</div>
<div className="flex flex-col items-start lg:items-end">
<div className="text-7xl font-heading font-black mb-2">1,000,000+</div>
<p className="text-white/40 uppercase font-black tracking-[3px] text-xs">
            Suzuki Riders in Bangladesh
          </p>
<a className="mt-8 flex items-center gap-2 text-[#E3001B] font-bold uppercase text-xs tracking-widest group" href="#">
            Join the community
            <i className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" data-lucide="external-link"></i>
</a>
</div>
</div>
<div className="container max-w-[1320px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[300px]">

<div className="lg:col-span-5 lg:row-span-2 bg-white text-black p-10 rounded-[32px] flex flex-col">
<div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-8 shadow-xl">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded text-[10px] text-white font-bold">
                Gixxer SF 250 | Taken in Sylhet
              </div>
</div>
<span className="text-6xl font-serif text-[#E3001B] leading-none mb-4">
              “
            </span>
<p className="text-xl font-medium italic text-gray-800 leading-relaxed flex-grow">
              I've owned three bikes before my Gixxer SF 250. Nothing has come
              close to the confidence it gives on both highways and city
              streets. The stability at high speeds is unmatched.
            </p>
<div className="w-12 h-[3px] bg-[#E3001B] my-8"></div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-black text-xl">
                RA
              </div>
<div>
<h5 className="font-black uppercase text-sm">Rahul Ahmed</h5>
<p className="text-gray-400 text-[10px] font-bold uppercase">
                  Dhaka • Gixxer SF 250
                </p>
</div>
</div>
</div>

<div className="lg:col-span-3 bg-[#E3001B] p-10 rounded-[32px] flex flex-col justify-between">
<i className="w-10 h-10 text-white/30" data-lucide="quote"></i>
<p className="text-2xl font-heading font-black uppercase leading-tight italic">
              "The torque hits different. Nothing else in this price feels this
              fast."
            </p>
<div className="flex flex-col">
<span className="font-black text-sm uppercase">— Sakib R.</span>
<div className="flex gap-1 mt-2">
<i className="w-3 h-3 fill-white text-white" data-lucide="star"></i>
<i className="w-3 h-3 fill-white text-white" data-lucide="star"></i>
<i className="w-3 h-3 fill-white text-white" data-lucide="star"></i>
<i className="w-3 h-3 fill-white text-white" data-lucide="star"></i>
<i className="w-3 h-3 fill-white text-white" data-lucide="star"></i>
</div>
</div>
</div>

<div className="lg:col-span-4 lg:row-span-2 bg-white text-black p-8 rounded-[32px] flex flex-col">
<img className="w-full h-48 object-cover rounded-2xl mb-8" src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<h4 className="font-black text-lg uppercase mb-4 leading-tight">
              1,200km solo trip to Cox's Bazar — on my Access 125
            </h4>
<p className="text-gray-500 text-sm mb-8">
              "My scooter took me farther than I ever expected. Comfort is key."
            </p>
<div className="mt-auto flex items-center justify-between">
<span className="text-[10px] font-black uppercase tracking-widest text-[#E3001B]">
                Nadia K., Comilla
              </span>
<span className="text-[10px] font-bold text-gray-400">MAY 2024</span>
</div>
</div>

<div className="lg:col-span-3 bg-[#1A1A1A] border border-white/5 p-8 rounded-[32px] flex flex-col justify-center text-center">
<div className="text-5xl font-black mb-2">4.8/5</div>
<p className="text-[10px] text-white/50 uppercase font-bold tracking-widest mb-6">
              Avg Rating from 12k+ owners
            </p>
<div className="space-y-2">
<div className="flex items-center gap-2 text-[8px] font-black">
<span className="w-4">5★</span>
<div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="bg-[#E3001B] w-[72%] h-full"></div>
</div>
<span>72%</span>
</div>
<div className="flex items-center gap-2 text-[8px] font-black">
<span className="w-4">4★</span>
<div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="bg-[#E3001B] w-[19%] h-full"></div>
</div>
<span>19%</span>
</div>
</div>
</div>

<div className="lg:col-span-12 mt-12">
<div className="text-center mb-10">
<span className="text-white/40 font-black uppercase tracking-[4px] text-[11px]">
                FOLLOW THE JOURNEY
              </span>
<p className="text-white/20 text-[10px] mt-2 uppercase">
                @SUZUKIBANGLADESH on Instagram
              </p>
</div>
<div className="grid grid-cols-4 md:grid-cols-9 gap-1">
<div className="aspect-square relative group overflow-hidden">
<img className="w-full h-full object-cover transition-all group-hover:scale-110" src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&amp;w=400&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#E3001B]/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
<i className="w-5 h-5" data-lucide="instagram"></i>
</div>
</div>
<div className="aspect-square relative group overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&amp;w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square relative group overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="aspect-square relative group overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="aspect-square relative group overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&amp;w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square relative group overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&amp;w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square relative group overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="aspect-square relative group overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="aspect-square bg-[#E3001B] flex flex-col items-center justify-center group cursor-pointer">
<span className="text-xl font-black tracking-tighter">+48K</span>
<span className="text-[8px] font-bold uppercase opacity-60">
                  Posts
                </span>
</div>
</div>
<div className="mt-10 overflow-hidden relative w-full border-y border-white/5 py-4">
<div className="flex whitespace-nowrap animate-marquee gap-8">
<span className="text-[10px] font-bold uppercase tracking-[4px] text-white/30">
                  #SuzukiBangladesh
                </span>
<span className="text-[10px] font-bold uppercase tracking-[4px] text-white/30">
                  #GixxerSF250
                </span>
<span className="text-[10px] font-bold uppercase tracking-[4px] text-white/30">
                  #RideSafe
                </span>
<span className="text-[10px] font-bold uppercase tracking-[4px] text-white/30">
                  #SuzukiFamily
                </span>
<span className="text-[10px] font-bold uppercase tracking-[4px] text-white/30">
                  #AccessBD
                </span>
<span className="text-[10px] font-bold uppercase tracking-[4px] text-white/30">
                  #GSXRiders
                </span>
<span className="text-[10px] font-bold uppercase tracking-[4px] text-white/30">
                  #DriveYourDream
                </span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative py-40 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Newsletter BG" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0A0A0A]/85"></div>
</div>
<div className="container max-w-[1320px] mx-auto px-6 relative z-10 text-center text-white">
<i className="w-16 h-16 mx-auto mb-10 text-white/40" data-lucide="bike"></i>
<h2 className="text-6xl md:text-[80px] font-heading font-black tracking-tight uppercase leading-none mb-8 animate-reveal">
          STAY IN THE LOOP.
        </h2>
<p className="text-white/70 text-xl max-w-2xl mx-auto mb-16">
          New launches. Exclusive deals. Riding tips. All in your inbox.
        </p>
<form className="max-w-2xl mx-auto flex flex-col md:flex-row gap-0 group shadow-2xl">
<input className="flex-1 bg-transparent border border-white/30 h-[72px] px-8 text-white placeholder-white/40 outline-none focus:border-white transition-all" placeholder="Enter your email address" type="email"/>
<button className="bg-[#E3001B] hover:bg-white hover:text-black transition-all px-12 h-[72px] text-sm font-black uppercase tracking-[3px]">
            Subscribe
          </button>
</form>
<p className="text-white/30 text-[10px] mt-6 uppercase font-bold tracking-widest">
          No spam. Unsubscribe anytime.
        </p>
<div className="flex justify-center gap-10 mt-20">
<a className="text-white/40 hover:text-[#E3001B] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="facebook"></i>
</a>
<a className="text-white/40 hover:text-[#E3001B] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="youtube"></i>
</a>
<a className="text-white/40 hover:text-[#E3001B] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="instagram"></i>
</a>
<a className="text-white/40 hover:text-[#E3001B] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="twitter"></i>
</a>
</div>
</div>
</section>

<footer className="bg-[#050505] text-white pt-24 pb-12 overflow-hidden">
<div className="container max-w-[1320px] mx-auto px-10 grid grid-cols-2 md:grid-cols-5 gap-16 border-b border-white/5 pb-20">
<div className="col-span-2 md:col-span-1">
<div className="w-32 mb-10">
<svg className="w-full" fill="none" viewbox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 5H35L22.5 35H0L12.5 5Z" fill="#E3001B"></path>
<path d="M45 5H55V35H45V5ZM65 5H85V10H75V17H83V22H75V30H85V35H65V5ZM95 5H105V25C105 30 102 35 95 35V30C100 30 100 28 100 25V5H95Z" fill="white"></path>
</svg>
</div>
<p className="text-gray-500 text-[13px] leading-relaxed mb-10 font-medium italic">
            Engineering Excellence Since 1909. Suzuki Bangladesh brings the
            legendary "Way of Life!" to riders across the nation.
          </p>
<div className="flex gap-4">
<a className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#E3001B] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#E3001B] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="youtube"></i>
</a>
<a className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#E3001B] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
</div>
<div>
<h5 className="text-[11px] font-black uppercase tracking-[3px] mb-10 text-white">
            Bikes
          </h5>
<ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-gray-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                All Motorcycles
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                All Scooters
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Sports Bikes
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Commuter Bikes
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                New Arrivals
              </a>
</li>
</ul>
</div>
<div>
<h5 className="text-[11px] font-black uppercase tracking-[3px] mb-10 text-white">
            Services
          </h5>
<ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-gray-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                Book a Service
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Service Centers
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Warranty Info
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Genuine Parts
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Service Packages
              </a>
</li>
</ul>
</div>
<div className="">
<h5 className="text-[11px] font-black uppercase tracking-[3px] mb-10 text-white">
            Company
          </h5>
<ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-gray-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                About Suzuki BD
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Careers</a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                Press &amp; Media
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                CSR Initiatives
              </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                Partnerships
              </a>
</li>
</ul>
</div>
<div>
<h5 className="text-[11px] font-black uppercase tracking-[3px] mb-10 text-white">
            Support
          </h5>
<ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-gray-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                Contact Us
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Dealer Locator
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                EMI Calculator
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Catalog</a>
</li>
</ul>
</div>
</div>
<div className="container max-w-[1320px] mx-auto px-10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-gray-600 text-[11px] font-bold uppercase tracking-widest">
          © 2025 Suzuki Bangladesh Motor Ltd. All Rights Reserved.
        </div>
<div className="text-gray-600 text-[11px] font-bold uppercase tracking-widest">
          🇧🇩 Proudly serving Bangladesh since 1994
        </div>
<div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-600">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Cookies</a>
</div>
</div>
</footer>


    </>
  );
}
