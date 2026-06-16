import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('section > div > .text-center.mb-16, section > div > .flex.mb-12').forEach(el => el.setAttribute('data-aos', 'fade-up'));
        document.querySelectorAll('section > div > div.grid, footer .grid').forEach(grid => {
          Array.from(grid.children).forEach((el, i) => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-delay', (i % 4) * 150);
          });
        });
        AOS.init({ duration: 1000, once: true, offset: 50 });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="font-serif-custom tracking-tighter text-2xl font-medium uppercase">
            Houston
            <span className="text-[#C5A265]">Luxe</span>
</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="#">
            Properties
          </a>
<a className="hover:text-neutral-900 transition-colors" href="#">
            Neighborhoods
          </a>
<a className="hover:text-neutral-900 transition-colors" href="#">
            Agents
          </a>
<a className="hover:text-neutral-900 transition-colors" href="#">About</a>
<a className="hover:text-neutral-900 transition-colors" href="#">
            Market Reports
          </a>
</nav>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
            (713) 555-0198
          </a>
<a className="bg-neutral-900 text-white px-6 py-2.5 text-sm font-medium rounded-sm hover:bg-neutral-800 transition-colors" href="#">
            Consultation
          </a>
</div>

<button className="md:hidden text-neutral-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</button>
</div>
</header>

<section className="relative h-screen min-h-[600px] w-full flex items-center justify-center pt-20">

<div className="absolute inset-0 z-0 overflow-hidden">
<iframe allow="autoplay; encrypted-media" allowfullscreen="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" frameborder="0" src="https://www.youtube.com/embed/M-j_LvEK2ZA?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=M-j_LvEK2ZA&amp;controls=0&amp;rel=0&amp;playsinline=1" style={{width: '100vw', height: '56.25vw', minHeight: 'max(100vh, 600px)', minWidth: 'max(177.77vh, 1067px)'}}></iframe>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
<span className="text-[#C5A265] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
          Exclusive Brokerage
        </span>
<h1 className="font-serif-custom tracking-tight text-5xl md:text-7xl font-medium text-white mb-6 leading-tight">
          Houston Luxury
          <br/>
          Real Estate Experts
        </h1>
<p className="text-neutral-200 text-base md:text-lg font-light mb-10 max-w-2xl">
          Curating the finest properties in River Oaks, Memorial, and beyond.
          Experience unparalleled service in finding your exceptional home.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-[#C5A265] text-white px-8 py-3.5 text-sm font-medium rounded-sm hover:bg-[#b09055] transition-colors flex items-center justify-center gap-2" href="#">
            Browse Homes
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
</a>
<a className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 text-sm font-medium rounded-sm hover:bg-white/20 transition-colors flex items-center justify-center" href="#valuation">
            What's Your Home Worth?
          </a>
</div>
</div>
</section>

<section className="relative z-20 max-w-6xl mx-auto px-6 -mt-16 mb-24">
<div className="bg-white p-6 md:p-8 rounded-sm shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-neutral-100 flex flex-col md:flex-row gap-6 items-end aos-init aos-animate" data-aos="fade-up">
<div className="w-full md:w-1/3">
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">
            Location
          </label>
<div className="relative border-b border-neutral-200 pb-2 flex items-center focus-within:border-[#C5A265] transition-colors">
<iconify-icon className="text-neutral-400 mr-2" icon="solar:map-point-linear" width="1.2em"></iconify-icon>
<input className="w-full text-sm bg-transparent focus:outline-none text-neutral-800 placeholder-neutral-400" placeholder="Neighborhood, City, or Zip" type="text"/>
</div>
</div>
<div className="w-full md:w-1/4">
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">
            Property Type
          </label>
<div className="relative border-b border-neutral-200 pb-2 focus-within:border-[#C5A265] transition-colors">
<select className="w-full text-sm bg-transparent focus:outline-none text-neutral-800 appearance-none cursor-pointer">
<option>Single Family</option>
<option>Condo / Townhome</option>
<option>Multi-Family</option>
<option>Land</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="1em"></iconify-icon>
</div>
</div>
<div className="w-full md:w-1/4">
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">
            Max Price
          </label>
<div className="relative border-b border-neutral-200 pb-2 focus-within:border-[#C5A265] transition-colors">
<select className="w-full text-sm bg-transparent focus:outline-none text-neutral-800 appearance-none cursor-pointer">
<option>Any Price</option>
<option>$1,000,000</option>
<option>$2,500,000</option>
<option>$5,000,000+</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="1em"></iconify-icon>
</div>
</div>
<div className="w-full md:w-auto flex-shrink-0">
<button className="w-full md:w-auto bg-neutral-900 text-white px-8 py-3 text-sm font-medium rounded-sm hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 h-11">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
            Search
          </button>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 aos-init" data-aos="fade-up">
<h2 className="font-serif-custom tracking-tight text-3xl md:text-4xl font-medium text-neutral-900 mb-4">
            The Standard of Excellence
          </h2>
<p className="text-neutral-500 text-sm max-w-2xl mx-auto">
            Elevating the real estate experience through market expertise,
            discrete service, and exceptional results.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="flex flex-col items-center aos-init" data-aos="fade-up" data-aos-delay="0">
<div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center mb-6 text-[#C5A265]">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5" width="2em"></iconify-icon>
</div>
<h3 className="font-serif-custom tracking-tight text-xl font-medium mb-2 text-neutral-900">
              Top 1% Performers
            </h3>
<p className="text-neutral-500 text-sm leading-relaxed">
              Consistently ranked among Houston's elite agents, ensuring you are
              guided by the best in the industry.
            </p>
</div>
<div className="flex flex-col items-center aos-init" data-aos="fade-up" data-aos-delay="150">
<div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center mb-6 text-[#C5A265]">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="2em"></iconify-icon>
</div>
<h3 className="font-serif-custom tracking-tight text-xl font-medium mb-2 text-neutral-900">
              $2B+ in Sales
            </h3>
<p className="text-neutral-500 text-sm leading-relaxed">
              A proven track record of successful transactions in Houston's most
              competitive luxury markets.
            </p>
</div>
<div className="flex flex-col items-center aos-init" data-aos="fade-up" data-aos-delay="300">
<div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center mb-6 text-[#C5A265]">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="2em"></iconify-icon>
</div>
<h3 className="font-serif-custom tracking-tight text-xl font-medium mb-2 text-neutral-900">
              White-Glove Service
            </h3>
<p className="text-neutral-500 text-sm leading-relaxed">
              Personalized, attentive service tailored to the unique needs of
              buyers and sellers in the luxury space.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 aos-init" data-aos="fade-up">
<div>
<span className="text-[#C5A265] text-xs font-medium tracking-[0.2em] uppercase mb-3 block">
              Discover Houston
            </span>
<h2 className="font-serif-custom tracking-tight text-3xl md:text-4xl font-medium text-neutral-900">
              Featured Neighborhoods
            </h2>
</div>
<a className="text-sm font-medium text-neutral-900 flex items-center gap-1 group hover:text-[#C5A265] transition-colors" href="#">
            Explore Area Guides
            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group relative aspect-[4/5] overflow-hidden rounded-sm block aos-init" data-aos="fade-up" data-aos-delay="0" href="#">
<img alt="River Oaks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="font-serif-custom tracking-tight text-2xl font-medium text-white mb-1">
                River Oaks
              </h3>
<p className="text-neutral-300 text-xs flex items-center justify-between">
<span>42 Properties</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="1.2em"></iconify-icon>
</p>
</div>
</a>

<a className="group relative aspect-[4/5] overflow-hidden rounded-sm block aos-init" data-aos="fade-up" data-aos-delay="150" href="#">
<img alt="Memorial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="font-serif-custom tracking-tight text-2xl font-medium text-white mb-1">
                Memorial
              </h3>
<p className="text-neutral-300 text-xs flex items-center justify-between">
<span>28 Properties</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="1.2em"></iconify-icon>
</p>
</div>
</a>

<a className="group relative aspect-[4/5] overflow-hidden rounded-sm block aos-init" data-aos="fade-up" data-aos-delay="300" href="#">
<img alt="The Heights" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="font-serif-custom tracking-tight text-2xl font-medium text-white mb-1">
                The Heights
              </h3>
<p className="text-neutral-300 text-xs flex items-center justify-between">
<span>56 Properties</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="1.2em"></iconify-icon>
</p>
</div>
</a>

<a className="group relative aspect-[4/5] overflow-hidden rounded-sm block aos-init" data-aos="fade-up" data-aos-delay="450" href="#">
<img alt="West University" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="font-serif-custom tracking-tight text-2xl font-medium text-white mb-1">
                West University
              </h3>
<p className="text-neutral-300 text-xs flex items-center justify-between">
<span>19 Properties</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="1.2em"></iconify-icon>
</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 aos-init" data-aos="fade-up">
<div className="">
<span className="text-[#C5A265] text-xs font-medium tracking-[0.2em] uppercase mb-3 block">
              Exclusive Portfolio
            </span>
<h2 className="font-serif-custom tracking-tight text-3xl md:text-4xl font-medium text-neutral-900">
              Featured Listings
            </h2>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 border border-neutral-200 rounded-sm flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition-all">
<iconify-icon icon="solar:alt-arrow-left-linear" width="1.2em"></iconify-icon>
</button>
<button className="w-10 h-10 border border-neutral-200 rounded-sm flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition-all">
<iconify-icon icon="solar:alt-arrow-right-linear" width="1.2em"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer aos-init" data-aos="fade-up" data-aos-delay="0">
<div className="relative aspect-[3/2] overflow-hidden rounded-sm mb-4">
<img alt="Property" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-medium text-neutral-900 uppercase tracking-wide">
                Just Listed
              </div>
<button className="absolute top-4 right-4 text-white hover:text-[#C5A265] transition-colors drop-shadow-md">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</button>
</div>
<div className="flex items-start justify-between gap-4 mb-2">
<h3 className="font-serif-custom tracking-tight text-2xl font-medium text-neutral-900">
                $4,250,000
              </h3>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mt-2">
                River Oaks
              </p>
</div>
<p className="text-sm text-neutral-600 mb-3 truncate">
              3402 Lazy Lane Blvd, Houston, TX 77019
            </p>
<div className="flex items-center gap-4 text-sm text-neutral-500 border-t border-neutral-100 pt-3">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bed-linear"></iconify-icon>
                5 Beds
              </div>
<div className="w-1 h-1 rounded-full bg-neutral-300"></div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bath-linear"></iconify-icon>
                6.5 Baths
              </div>
<div className="w-1 h-1 rounded-full bg-neutral-300"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="" icon="solar:ruler-angular-linear"></iconify-icon>
                7,240 Sq.Ft.
              </div>
</div>
</div>

<div className="group cursor-pointer aos-init" data-aos="fade-up" data-aos-delay="150">
<div className="relative aspect-[3/2] overflow-hidden rounded-sm mb-4">
<img alt="Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&amp;q=80"/>
<button className="absolute top-4 right-4 text-white hover:text-[#C5A265] transition-colors drop-shadow-md">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</button>
</div>
<div className="flex items-start justify-between gap-4 mb-2">
<h3 className="font-serif-custom tracking-tight text-2xl font-medium text-neutral-900">
                $2,850,000
              </h3>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mt-2">
                Memorial
              </p>
</div>
<p className="text-sm text-neutral-600 mb-3 truncate">
              11801 Kemwood Dr, Houston, TX 77024
            </p>
<div className="flex items-center gap-4 text-sm text-neutral-500 border-t border-neutral-100 pt-3">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bed-linear"></iconify-icon>
                4 Beds
              </div>
<div className="w-1 h-1 rounded-full bg-neutral-300"></div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bath-linear"></iconify-icon>
                4.5 Baths
              </div>
<div className="w-1 h-1 rounded-full bg-neutral-300"></div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:ruler-angular-linear"></iconify-icon>
                5,100 Sq.Ft.
              </div>
</div>
</div>

<div className="group cursor-pointer aos-init" data-aos="fade-up" data-aos-delay="300">
<div className="relative aspect-[3/2] overflow-hidden rounded-sm mb-4">
<img alt="Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&amp;q=80"/>
<button className="absolute top-4 right-4 text-white hover:text-[#C5A265] transition-colors drop-shadow-md">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</button>
</div>
<div className="flex items-start justify-between gap-4 mb-2">
<h3 className="font-serif-custom tracking-tight text-2xl font-medium text-neutral-900">
                $1,975,000
              </h3>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mt-2">
                The Heights
              </p>
</div>
<p className="text-sm text-neutral-600 mb-3 truncate">
              812 Heights Blvd, Houston, TX 77007
            </p>
<div className="flex items-center gap-4 text-sm text-neutral-500 border-t border-neutral-100 pt-3">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bed-linear"></iconify-icon>
                4 Beds
              </div>
<div className="w-1 h-1 rounded-full bg-neutral-300"></div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bath-linear"></iconify-icon>
                3.5 Baths
              </div>
<div className="w-1 h-1 rounded-full bg-neutral-300"></div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:ruler-angular-linear"></iconify-icon>
                3,850 Sq.Ft.
              </div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-sm font-medium text-neutral-900 hover:text-[#C5A265] hover:border-[#C5A265] transition-colors" href="#">
            View All Properties
            <iconify-icon icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A265]/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 aos-init" data-aos="fade-up">
<span className="text-[#C5A265] text-xs font-medium tracking-[0.2em] uppercase mb-3 block">
            Client Experiences
          </span>
<h2 className="font-serif-custom tracking-tight text-3xl md:text-4xl font-medium mb-4">
            Stories of Success
          </h2>
</div>
<div className="relative overflow-hidden w-full group mt-8">
<div className="flex w-max animate-slide-left hover:[animation-play-state:paused]">

<div className="flex gap-8 pr-8 w-max">
<div className="w-[350px] md:w-[450px] shrink-0 bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-sm">
<iconify-icon className="text-[#C5A265] text-3xl mb-6 block opacity-50" icon="solar:quote-left-bold"></iconify-icon>
<p className="font-serif-custom text-lg font-light leading-relaxed mb-8 text-neutral-200">
                  "Doris Wade made our relocation from Baltimore to Houston
                  seamless. Her knowledge of the market and professionalism is
                  unmatched. We found the perfect home thanks to her
                  dedication."
                </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-[#C5A265]">
                    DA
                  </div>
<div>
<h4 className="text-sm font-medium">Desmond Acha</h4>
<p className="text-xs text-neutral-400">
                      Worked with Doris Wade
                    </p>
</div>
</div>
</div>
<div className="w-[350px] md:w-[450px] shrink-0 bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-sm">
<iconify-icon className="text-[#C5A265] text-3xl mb-6 block opacity-50" icon="solar:quote-left-bold"></iconify-icon>
<p className="font-serif-custom text-lg font-light leading-relaxed mb-8 text-neutral-200">
                  "Ayriel Duffy is a top-notch Realtor. Her attention to detail
                  and fierce negotiation skills got us our dream property under
                  asking price. I cannot recommend her highly enough."
                </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-[#C5A265]">
                    JO
                  </div>
<div>
<h4 className="text-sm font-medium">Jill Opela</h4>
<p className="text-xs text-neutral-400">
                      Worked with Ayriel Duffy
                    </p>
</div>
</div>
</div>
<div className="w-[350px] md:w-[450px] shrink-0 bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-sm">
<iconify-icon className="text-[#C5A265] text-3xl mb-6 block opacity-50" icon="solar:quote-left-bold"></iconify-icon>
<p className="font-serif-custom text-lg font-light leading-relaxed mb-8 text-neutral-200">
                  "After struggling to sell with another agency, switching to
                  this team was the best decision. Tracy Fort provided
                  exceptional marketing, and we sold above our expectations in
                  weeks."
                </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-[#C5A265]">
                    TF
                  </div>
<div>
<h4 className="text-sm font-medium">Tracy Fort</h4>
<p className="text-xs text-neutral-400">Seller Success Story</p>
</div>
</div>
</div>
</div>

<div className="flex gap-8 pr-8 w-max">
<div className="w-[350px] md:w-[450px] shrink-0 bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-sm">
<iconify-icon className="text-[#C5A265] text-3xl mb-6 block opacity-50" icon="solar:quote-left-bold"></iconify-icon>
<p className="font-serif-custom text-lg font-light leading-relaxed mb-8 text-neutral-200">
                  "Doris Wade made our relocation from Baltimore to Houston
                  seamless. Her knowledge of the market and professionalism is
                  unmatched. We found the perfect home thanks to her
                  dedication."
                </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-[#C5A265]">
                    DA
                  </div>
<div>
<h4 className="text-sm font-medium">Desmond Acha</h4>
<p className="text-xs text-neutral-400">
                      Worked with Doris Wade
                    </p>
</div>
</div>
</div>
<div className="w-[350px] md:w-[450px] shrink-0 bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-sm">
<iconify-icon className="text-[#C5A265] text-3xl mb-6 block opacity-50" icon="solar:quote-left-bold"></iconify-icon>
<p className="font-serif-custom text-lg font-light leading-relaxed mb-8 text-neutral-200">
                  "Ayriel Duffy is a top-notch Realtor. Her attention to detail
                  and fierce negotiation skills got us our dream property under
                  asking price. I cannot recommend her highly enough."
                </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-[#C5A265]">
                    JO
                  </div>
<div>
<h4 className="text-sm font-medium">Jill Opela</h4>
<p className="text-xs text-neutral-400">
                      Worked with Ayriel Duffy
                    </p>
</div>
</div>
</div>
<div className="w-[350px] md:w-[450px] shrink-0 bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-sm">
<iconify-icon className="text-[#C5A265] text-3xl mb-6 block opacity-50" icon="solar:quote-left-bold"></iconify-icon>
<p className="font-serif-custom text-lg font-light leading-relaxed mb-8 text-neutral-200">
                  "After struggling to sell with another agency, switching to
                  this team was the best decision. Tracy Fort provided
                  exceptional marketing, and we sold above our expectations in
                  weeks."
                </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-[#C5A265]">
                    TF
                  </div>
<div>
<h4 className="text-sm font-medium">Tracy Fort</h4>
<p className="text-xs text-neutral-400">Seller Success Story</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 flex items-center justify-center overflow-hidden min-h-[500px] bg-neutral-900">

<div className="absolute inset-0 z-0">
<iframe allow="autoplay; encrypted-media" allowfullscreen="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" frameborder="0" src="https://www.youtube.com/embed/VKAKbueezMk?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=VKAKbueezMk&amp;controls=0&amp;rel=0&amp;playsinline=1" style={{width: '100vw', height: '56.25vw', minHeight: '500px', minWidth: '889px'}}></iframe>
<div className="absolute inset-0 bg-black/60"></div>
</div>

<div className="relative z-10 max-w-3xl mx-auto px-6 text-center aos-init" data-aos="fade-up">
<span className="text-[#C5A265] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
          Unrivaled Presentation
        </span>
<h2 className="font-serif-custom tracking-tight text-3xl md:text-5xl font-medium text-white mb-6 leading-tight">
          Showcasing Houston's Finest Properties
        </h2>
<p className="text-neutral-200 text-sm md:text-base leading-relaxed mb-8">
          We believe every exceptional home has a unique story to tell. Through
          our cinematic property tours and world-class marketing, we capture the
          distinct architectural brilliance and lifestyle of your property.
          Experience real estate marketing designed to captivate and engage
          discerning buyers globally.
        </p>
<a className="inline-flex items-center gap-2 border-b border-white pb-1 text-sm font-medium text-white hover:text-[#C5A265] hover:border-[#C5A265] transition-colors" href="#">
          Explore Our Marketing Strategy
          <iconify-icon icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</a>
</div>
</section>
<section className="py-24 bg-neutral-50 border-b border-neutral-200 relative" id="valuation">
<div className="max-w-4xl mx-auto px-6 text-center aos-init" data-aos="zoom-in">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm border border-neutral-100 mb-6 text-[#C5A265]">
<iconify-icon icon="solar:home-angle-linear" strokeWidth="1.5" width="2em"></iconify-icon>
</div>
<h2 className="font-serif-custom tracking-tight text-3xl md:text-5xl font-medium text-neutral-900 mb-4">
          What's Your Home Worth?
        </h2>
<p className="text-neutral-500 text-sm md:text-base max-w-xl mx-auto mb-10">
          Enter your address to receive an instant, automated valuation,
          followed by a complimentary expert analysis from our luxury
          specialists.
        </p>
<form className="flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto">
<div className="relative flex-grow">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" icon="solar:map-point-linear" width="1.2em"></iconify-icon>
<input className="w-full bg-white border border-neutral-200 rounded-sm py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-[#C5A265] focus:ring-1 focus:ring-[#C5A265]/20 transition-all text-neutral-900 placeholder-neutral-400" placeholder="Enter your Houston address" type="text"/>
</div>
<button className="bg-neutral-900 text-white px-8 py-3.5 text-sm font-medium rounded-sm hover:bg-neutral-800 transition-colors whitespace-nowrap" type="button">
            Get Estimate
          </button>
</form>
<p className="text-xs text-neutral-400 mt-4">
          By proceeding, you agree to our Terms of Service &amp; Privacy Policy.
        </p>
</div>
</section>

<footer className="bg-neutral-900 pt-20 pb-10 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1 aos-init" data-aos="fade-up" data-aos-delay="0">
<a className="inline-block mb-6" href="#">
<span className="font-serif-custom tracking-tighter text-2xl font-medium uppercase text-white">
                Houston
                <span className="text-[#C5A265]">Luxe</span>
</span>
</a>
<p className="text-xs text-neutral-400 leading-relaxed mb-6 pr-4">
              Premier luxury real estate brokerage serving Houston's most
              exclusive neighborhoods with unparalleled expertise and
              discretion.
            </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-[#C5A265] transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="1.5em"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-[#C5A265] transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="1.5em"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-[#C5A265] transition-colors" href="#">
<iconify-icon icon="solar:link-circle-linear" width="1.5em"></iconify-icon>
</a>
</div>
</div>

<div className="aos-init" data-aos="fade-up" data-aos-delay="150">
<h4 className="text-xs font-medium text-white uppercase tracking-widest mb-6">
              Properties
            </h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li>
<a className="hover:text-[#C5A265] transition-colors" href="#">
                  Advanced Search
                </a>
</li>
<li>
<a className="hover:text-[#C5A265] transition-colors" href="#">
                  Featured Listings
                </a>
</li>
<li>
<a className="hover:text-[#C5A265] transition-colors" href="#">
                  Recent Sales
                </a>
</li>
<li>
<a className="hover:text-[#C5A265] transition-colors" href="#">
                  New Developments
                </a>
</li>
</ul>
</div>

<div className="aos-init" data-aos="fade-up" data-aos-delay="300">
<h4 className="text-xs font-medium text-white uppercase tracking-widest mb-6">
              Company
            </h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li>
<a className="hover:text-[#C5A265] transition-colors" href="#">
                  About the Brokerage
                </a>
</li>
<li>
<a className="hover:text-[#C5A265] transition-colors" href="#">
                  Meet the Agents
                </a>
</li>
<li>
<a className="hover:text-[#C5A265] transition-colors" href="#">
                  Client Testimonials
                </a>
</li>
<li>
<a className="hover:text-[#C5A265] transition-colors" href="#">
                  Contact Us
                </a>
</li>
</ul>
</div>

<div className="aos-init" data-aos="fade-up" data-aos-delay="450">
<h4 className="text-xs font-medium text-white uppercase tracking-widest mb-6">
              Market Insights
            </h4>
<p className="text-xs text-neutral-400 mb-4">
              Subscribe to our newsletter for exclusive off-market listings and
              Houston real estate trends.
            </p>
<form className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-[#C5A265] transition-all text-white placeholder-neutral-500" placeholder="Email address" type="email"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-[#C5A265] transition-colors p-1" type="button">
<iconify-icon icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-400">
            © 2024 Houston Luxe Real Estate. All rights reserved.
          </p>
<div className="flex gap-4 text-xs text-neutral-400">
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
<a className="hover:text-white transition-colors" href="#">
              Accessibility
            </a>
</div>
</div>
</div>
</footer>

<button className="fixed bottom-6 right-6 w-14 h-14 bg-neutral-900 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-neutral-800 transition-transform hover:scale-105 z-50">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="1.8em"></iconify-icon>
</button>



    </>
  );
}
