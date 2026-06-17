import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="border-b border-[#f7f4f2] hidden md:block">
<div className="max-w-7xl mx-auto px-6 lg:px-10 py-2 flex items-center justify-end">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 text-xs font-medium text-[#7c6c6a] hover:text-[#d5762b] transition-colors" href="tel:+13105554290">
<iconify-icon className="text-sm" icon="solar:phone-linear"></iconify-icon>
<span>Phone</span>
</a>
<a className="flex items-center gap-2 text-xs font-medium text-[#7c6c6a] hover:text-[#d5762b] transition-colors" href="mailto:inquiries@residence.com">
<iconify-icon className="text-sm" icon="solar:letter-linear"></iconify-icon>
<span>E-Mail</span>
</a>
<a className="flex items-center gap-2 text-xs font-medium text-[#7c6c6a] hover:text-[#d5762b] transition-colors" href="#">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon>
<span>Locations</span>
</a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-[#fffcfa]/90 backdrop-blur-md border-b border-[#f7f4f2]">
<div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<svg className="h-8 w-auto text-[#3d2a24] fill-current" fill="none" height="22" viewbox="0 0 124 22" width="124" xmlns="http://www.w3.org/2000/svg">
<path d="M123.323 16.537C122.71 19.441 120.434 21.377 116.875 21.377C112.527 21.377 109.989 17.798 109.989 13.75C109.989 9.702 112.469 6.123 116.816 6.123C121.164 6.123 124.023 9.673 123.585 14.777L113.169 14.777C113.315 17.446 114.861 19.001 117.079 19.001C118.975 19.001 119.792 17.71 120.142 16.537ZM116.816 8.499C114.686 8.499 113.403 10.025 113.198 12.401L120.405 12.401C120.201 10.025 118.946 8.499 116.816 8.499ZM109.11 15.979C108.556 19.441 105.959 21.377 102.545 21.377C98.256 21.377 95.514 17.798 95.514 13.75C95.514 9.79 98.169 6.123 102.429 6.123C105.842 6.123 108.41 8.001 108.964 11.462L105.755 11.462C105.405 9.585 104.208 8.499 102.487 8.499C100.124 8.499 98.869 10.699 98.869 13.75C98.869 16.83 100.211 19.001 102.633 19.001C104.325 19.001 105.55 17.857 105.871 15.979ZM84.693 21.083L81.513 21.083L81.513 6.417L84.606 6.417L84.606 9.291L84.664 9.291C85.277 7.238 86.794 6.123 88.924 6.123C92.133 6.123 93.708 8.323 93.708 11.55L93.708 21.083L90.529 21.083L90.529 12.489C90.529 9.761 89.566 8.529 87.611 8.529C85.656 8.529 84.693 9.878 84.693 12.283ZM79.327 16.537C78.714 19.441 76.438 21.377 72.879 21.377C68.531 21.377 65.993 17.798 65.993 13.75C65.993 9.702 68.473 6.123 72.82 6.123C77.167 6.123 80.027 9.673 79.589 14.777L69.173 14.777C69.319 17.446 70.865 19.001 73.083 19.001C74.979 19.001 75.796 17.71 76.146 16.537ZM72.82 8.499C70.69 8.499 69.407 10.025 69.202 12.401L76.409 12.401C76.205 10.025 74.95 8.499 72.82 8.499ZM60.859 18.003C60.159 20.027 58.466 21.377 56.249 21.377C52.281 21.377 50.122 17.857 50.122 13.75C50.122 9.643 52.369 6.123 56.249 6.123C58.466 6.123 60.159 7.443 60.859 9.467L60.946 9.467L60.946 0.843L64.068 0.843L64.068 21.083L60.946 21.083L60.946 18.003ZM53.477 13.75C53.477 16.859 54.849 19.001 57.27 19.001C59.721 19.001 61.063 16.859 61.063 13.75C61.063 10.611 59.721 8.499 57.27 8.499C54.849 8.499 53.477 10.611 53.477 13.75ZM51.146 3.388L42.028 3.388L42.028 1.555L51.146 1.555ZM48.162 21.083L44.982 21.083L44.982 6.417L48.162 6.417ZM43.084 16.859C43.084 19.705 40.458 21.377 37.102 21.377C33.105 21.377 30.946 18.766 30.742 16.067L33.893 16.067C34.068 17.945 35.556 19.001 37.132 19.001C38.561 19.001 39.903 18.355 39.903 17.094C39.903 16.273 39.232 15.598 37.54 15.217L35.556 14.777C32.697 14.161 31.005 12.782 31.005 10.465C31.005 7.795 33.572 6.123 36.694 6.123C40.137 6.123 42.588 8.089 42.792 10.758L39.641 10.758C39.437 9.057 38.124 8.499 36.694 8.499C35.293 8.499 34.214 9.115 34.214 10.201C34.214 11.169 35.031 11.491 36.898 11.931L38.882 12.371C42.033 13.075 43.084 14.659 43.084 16.859ZM29.46 16.537C28.847 19.441 26.571 21.377 23.012 21.377C18.665 21.377 16.126 17.798 16.126 13.75C16.126 9.702 18.606 6.123 22.953 6.123C27.301 6.123 30.16 9.673 29.722 14.777L19.306 14.777C19.452 17.446 20.999 19.001 23.216 19.001C25.113 19.001 25.929 17.71 26.28 16.537ZM22.953 8.499C20.824 8.499 19.54 10.025 19.336 12.401L26.542 12.401C26.338 10.025 25.083 8.499 22.953 8.499ZM3.924 21.083L0.627 21.083L0.627 0.843L7.017 0.843C12.064 0.843 15.099 3.014 15.099 6.857C15.099 9.585 13.552 11.491 10.81 12.342L15.42 21.083L11.802 21.083L7.455 12.87L3.924 12.87ZM7.309 3.571L3.924 3.571L3.924 10.142L7.309 10.142C10.139 10.142 11.656 8.998 11.656 6.857C11.656 4.715 10.139 3.571 7.309 3.571Z"></path>
</svg>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-[#7c6c6a] hover:text-[#3d2a24] transition-colors" href="#">
            Buy
          </a>
<a className="text-sm text-[#7c6c6a] hover:text-[#3d2a24] transition-colors" href="#">
            Rent
          </a>
<a className="text-sm text-[#7c6c6a] hover:text-[#3d2a24] transition-colors" href="#">
            Sell
          </a>
<a className="text-sm text-[#7c6c6a] hover:text-[#3d2a24] transition-colors" href="#">
            Projects
          </a>
<a className="text-sm text-[#7c6c6a] hover:text-[#3d2a24] transition-colors" href="#">
            Agents
          </a>
</div>
<a className="hidden md:flex items-center gap-2 bg-gradient-to-b from-[#d5762b] to-[#bc5823] text-white px-5 py-2.5 rounded-md shadow-sm hover:shadow-md transition-all text-sm font-medium border border-[#f91b35bf]/20" href="#">
<iconify-icon icon="solar:user-linear"></iconify-icon>
          Free Consultation
        </a>
<button className="md:hidden flex flex-col gap-1.5 p-2">
<span className="w-5 h-[2px] bg-[#7c6c6a] rounded-full"></span>
<span className="w-5 h-[2px] bg-[#7c6c6a] rounded-full"></span>
<span className="w-5 h-[2px] bg-[#7c6c6a] rounded-full"></span>
</button>
</div>
</nav>

<section className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16 md:pt-40 md:pb-24">
<div className="flex flex-col md:flex-row items-end gap-6 md:gap-10">
<h1 className="font-['IBM_Plex_Serif',serif] text-5xl md:text-6xl lg:text-[5rem] tracking-tight font-medium text-[#3d2a24] leading-[1.1] md:w-1/2">
          Find Luxury Properties.
        </h1>
<h2 className="font-['Spline_Sans',sans-serif] text-3xl md:text-5xl lg:text-[4rem] tracking-tight font-semibold text-[#7c6c6a] leading-[1.1] md:w-1/2 pb-1 md:pb-3">
          Easy with Residence.
        </h2>
</div>
</section>

<section className="max-w-7xl mx-auto pl-6 lg:pl-10 pr-6 lg:pr-0 pb-20">
<div className="flex overflow-x-auto snap-x gap-6 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">

<a className="snap-start shrink-0 w-[320px] md:w-[720px] aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden relative group" href="#">
<img alt="Portofino" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/BM2tHs0KEkWJi2ca7jWWVQWynpw.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 flex items-center gap-3 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10 w-max max-w-full">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-[#3d2a24]" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="font-['IBM_Plex_Serif',serif] text-lg tracking-tight text-white font-medium truncate">
              Portofino, Italy
            </span>
</div>
</a>

<a className="snap-start shrink-0 w-[320px] md:w-[720px] aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden relative group" href="#">
<img alt="Courchevel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/3qoIStd0tL47hHMChibfwlSONYg.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 flex items-center gap-3 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10 w-max max-w-full">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-[#3d2a24]" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="font-['IBM_Plex_Serif',serif] text-lg tracking-tight text-white font-medium truncate">
              Courchevel, France
            </span>
</div>
</a>

<a className="snap-start shrink-0 w-[320px] md:w-[720px] aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden relative group" href="#">
<img alt="Dubai" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/N7sXxMaFVwjFQLTTi95lSf1FpY.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 flex items-center gap-3 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10 w-max max-w-full">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-[#3d2a24]" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="font-['IBM_Plex_Serif',serif] text-lg tracking-tight text-white font-medium truncate">
              Dubai, UAE
            </span>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-10 pb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="flex items-center gap-4 p-4 rounded-xl border border-[#edeae8] bg-white shadow-sm hover:shadow-md transition-shadow group" href="#">
<div className="w-12 h-12 shrink-0 rounded-lg bg-[#f7f4f2] border border-[#e6e3e1] flex items-center justify-center">
<iconify-icon className="text-2xl text-[#3d2a24]" icon="solar:headphones-round-linear"></iconify-icon>
</div>
<span className="font-medium text-sm text-[#3d2a24] flex-1">
            Talk to an agent
          </span>
<iconify-icon className="text-xl text-[#7c6c6a] group-hover:text-[#d5762b] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>

<a className="flex items-center gap-4 p-4 rounded-xl border border-[#edeae8] bg-white shadow-sm hover:shadow-md transition-shadow group" href="#">
<div className="w-12 h-12 shrink-0 rounded-lg bg-[#f7f4f2] border border-[#e6e3e1] flex items-center justify-center">
<iconify-icon className="text-2xl text-[#3d2a24]" icon="solar:key-linear"></iconify-icon>
</div>
<span className="font-medium text-sm text-[#3d2a24] flex-1">
            Buy your dream home
          </span>
<iconify-icon className="text-xl text-[#7c6c6a] group-hover:text-[#d5762b] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>

<a className="flex items-center gap-4 p-4 rounded-xl border border-[#edeae8] bg-white shadow-sm hover:shadow-md transition-shadow group" href="#">
<div className="w-12 h-12 shrink-0 rounded-lg bg-[#f7f4f2] border border-[#e6e3e1] flex items-center justify-center">
<iconify-icon className="text-2xl text-[#3d2a24]" icon="solar:tag-linear"></iconify-icon>
</div>
<span className="font-medium text-sm text-[#3d2a24] flex-1">
            Sell your property
          </span>
<iconify-icon className="text-xl text-[#7c6c6a] group-hover:text-[#d5762b] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>

<a className="flex items-center gap-4 p-4 rounded-xl border border-[#edeae8] bg-white shadow-sm hover:shadow-md transition-shadow group" href="#">
<div className="w-12 h-12 shrink-0 rounded-lg bg-[#f7f4f2] border border-[#e6e3e1] flex items-center justify-center">
<iconify-icon className="text-2xl text-[#3d2a24]" icon="solar:case-linear"></iconify-icon>
</div>
<span className="font-medium text-sm text-[#3d2a24] flex-1">
            Jobs &amp; careers
          </span>
<iconify-icon className="text-xl text-[#7c6c6a] group-hover:text-[#d5762b] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="bg-[#f5f3f2] py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-10">
<div className="mb-14">
<p className="text-sm font-medium text-[#7c6c6a] mb-4">
            Why choose Residence?
          </p>
<h2 className="font-['IBM_Plex_Serif',serif] text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-[#3d2a24] max-w-3xl leading-tight">
            With Residence you can quickly find your dream apartment or house.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[450px]">

<div className="relative rounded-xl overflow-hidden aspect-square md:aspect-auto lg:col-span-1 h-full group">
<img alt="Worldwide" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/XdhFcBxr4K2mhuLAkCDtyHJOmk.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="font-['IBM_Plex_Serif',serif] text-2xl tracking-tight text-white font-medium">
                Operating Worldwide
              </h3>
</div>
</div>

<div className="relative rounded-xl overflow-hidden aspect-square md:aspect-auto lg:col-span-1 h-full group">
<img alt="Experience" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/rDUuK6TPTafFezTpUu0H4njdJ8.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="font-['IBM_Plex_Serif',serif] text-2xl tracking-tight text-white font-medium">
                Top Buying Experience
              </h3>
</div>
</div>

<div className="relative rounded-xl overflow-hidden aspect-square md:aspect-auto md:col-span-2 lg:col-span-1 h-full group">
<img alt="Service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/99mE9x2ztQF8kXkLFuol6xsj1Ec.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="font-['IBM_Plex_Serif',serif] text-2xl tracking-tight text-white font-medium">
                Individual Service
              </h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-10">
<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
<div className="w-full md:w-1/2 aspect-[4/3] md:aspect-[3/4] lg:aspect-square rounded-xl overflow-hidden relative">
<img alt="Sell Property" className="w-full h-full object-cover" src="https://framerusercontent.com/images/zdcfyhE5zaiMCtd2A2adRgJaKY.png"/>
</div>
<div className="w-full md:w-1/2 flex flex-col items-start gap-6">
<h2 className="font-['IBM_Plex_Serif',serif] text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-[#3d2a24] leading-tight">
              Successfully sell your property with Residence
            </h2>
<p className="text-base md:text-lg text-[#7c6c6a] leading-relaxed max-w-lg">
              Ready to sell your luxury property? Let our expert team maximize
              your investment with a tailored approach that reaches qualified
              buyers worldwide.
            </p>
<a className="mt-4 bg-gradient-to-b from-[#d5762b] to-[#bc5823] text-white px-6 py-3 rounded-md shadow-sm hover:shadow-md transition-all text-sm font-medium border border-[#f91b35bf]/20" href="#">
              Sell your property
            </a>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f3f2] py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-10">
<div className="flex items-end justify-between mb-12">
<h2 className="font-['IBM_Plex_Serif',serif] text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-[#3d2a24]">
            Our Agent picks
          </h2>
<a className="hidden md:block border border-[#e6e3e1] bg-white text-[#140e0c] px-6 py-3 rounded-md shadow-sm hover:bg-[#f7f4f2] transition-colors text-sm font-medium" href="#">
            View all properties
          </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group block border border-[#edeae8] bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all" href="#">
<div className="aspect-[16/9] rounded-lg overflow-hidden relative mb-4">
<img alt="New York" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/20oa2BVJHf6KWdBO7878NGCcXg.png"/>
</div>
<div className="flex items-center gap-2 mb-4 text-[#3d2a24]">
<h3 className="font-['IBM_Plex_Serif',serif] text-lg tracking-tight font-medium">
                New York
              </h3>
<span className="text-[#7c6c6a]">·</span>
<span className="font-['IBM_Plex_Serif',serif] text-lg tracking-tight font-medium text-[#7c6c6a]">
                Apartment
              </span>
</div>
<div className="flex items-center gap-4 text-sm text-[#7c6c6a]">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:bed-linear"></iconify-icon>
                4
              </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:bath-linear"></iconify-icon>
                5
              </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:programming-linear"></iconify-icon>
                420m²
              </div>
</div>
</a>

<a className="group block border border-[#edeae8] bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all" href="#">
<div className="aspect-[16/9] rounded-lg overflow-hidden relative mb-4">
<img alt="Paris" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/mqPGUWsXZttUdAj5AJabLwg9v6A.png"/>
</div>
<div className="flex items-center gap-2 mb-4 text-[#3d2a24]">
<h3 className="font-['IBM_Plex_Serif',serif] text-lg tracking-tight font-medium">
                Paris
              </h3>
<span className="text-[#7c6c6a]">·</span>
<span className="font-['IBM_Plex_Serif',serif] text-lg tracking-tight font-medium text-[#7c6c6a]">
                Apartment
              </span>
</div>
<div className="flex items-center gap-4 text-sm text-[#7c6c6a]">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:bed-linear"></iconify-icon>
                5
              </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:bath-linear"></iconify-icon>
                4
              </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:programming-linear"></iconify-icon>
                340m²
              </div>
</div>
</a>

<a className="group block border border-[#edeae8] bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all md:hidden lg:block" href="#">
<div className="aspect-[16/9] rounded-lg overflow-hidden relative mb-4">
<img alt="Cape Town" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/bN98BCnQLYEmnfABUjroK1YyD4.png"/>
</div>
<div className="flex items-center gap-2 mb-4 text-[#3d2a24]">
<h3 className="font-['IBM_Plex_Serif',serif] text-lg tracking-tight font-medium">
                Cape Town
              </h3>
<span className="text-[#7c6c6a]">·</span>
<span className="font-['IBM_Plex_Serif',serif] text-lg tracking-tight font-medium text-[#7c6c6a]">
                Villa
              </span>
</div>
<div className="flex items-center gap-4 text-sm text-[#7c6c6a]">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:bed-linear"></iconify-icon>
                7
              </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:bath-linear"></iconify-icon>
                8
              </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:programming-linear"></iconify-icon>
                850m²
              </div>
</div>
</a>
</div>
<div className="mt-8 md:hidden">
<a className="block w-full text-center border border-[#e6e3e1] bg-white text-[#140e0c] px-6 py-3 rounded-md shadow-sm hover:bg-[#f7f4f2] transition-colors text-sm font-medium" href="#">
            View all properties
          </a>
</div>
</div>
</section>

<section className="bg-[#f5f3f2] pb-24 md:pb-32">
<div className="max-w-7xl mx-auto px-6 lg:px-10">
<div className="bg-[#3d2a24] rounded-2xl p-10 md:p-16 lg:p-24 relative overflow-hidden flex flex-col items-center text-center">

<div className="absolute inset-0 opacity-30 pointer-events-none">
<img alt="" className="w-full h-full object-cover opacity-50" src="https://framerusercontent.com/images/CxYSeM1mAmqm1CVHog3AcHqBD10.png"/>
</div>
<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
<p className="text-sm font-medium text-white/80">Free Guide</p>
<h2 className="font-['IBM_Plex_Serif',serif] text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-white leading-tight mb-4">
              Learn what's important when buying a new home.
            </h2>
<form className="flex flex-col sm:flex-row w-full max-w-md gap-3">
<input className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all backdrop-blur-sm" placeholder="Your email" required="" type="email"/>
<button className="bg-gradient-to-b from-[#d5762b] to-[#bc5823] text-white px-6 py-3 rounded-md shadow-sm hover:shadow-md transition-all text-sm font-medium border border-[#f91b35bf]/20 whitespace-nowrap" type="submit">
                Download now
              </button>
</form>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f3f2] pb-24 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
<h2 className="font-['IBM_Plex_Serif',serif] text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-[#3d2a24] max-w-2xl leading-tight">
          Our Customers love selling through Residence
        </h2>
</div>
<div className="flex overflow-x-auto snap-x gap-6 px-6 lg:px-10 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">

<div className="snap-start shrink-0 w-[300px] md:w-[400px] p-8 rounded-xl border border-[#edeae8] bg-white shadow-sm flex flex-col justify-between relative">
<iconify-icon className="absolute top-6 right-6 text-4xl text-[#f7f4f2]" icon="solar:quote-linear"></iconify-icon>
<p className="font-['IBM_Plex_Serif',serif] text-lg text-[#3d2a24] leading-relaxed mb-8 relative z-10">
            "Their property matchmaking is uncanny. They knew what we wanted
            before we did!"
          </p>
<div className="flex items-center gap-4">
<img alt="Daniel Parker" className="w-12 h-12 rounded-full object-cover" src="https://framerusercontent.com/images/TJ0958qX8KXa8pOJwPtJSKKYKqk.jpg"/>
<div>
<p className="font-medium text-sm text-[#3d2a24]">Daniel Parker</p>
<p className="text-xs text-[#7c6c6a]">Founder, Evergreen</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[300px] md:w-[400px] p-8 rounded-xl border border-[#edeae8] bg-white shadow-sm flex flex-col justify-between relative">
<iconify-icon className="absolute top-6 right-6 text-4xl text-[#f7f4f2]" icon="solar:quote-linear"></iconify-icon>
<p className="font-['IBM_Plex_Serif',serif] text-lg text-[#3d2a24] leading-relaxed mb-8 relative z-10">
            "Seamless transaction from listing to closing. They handled
            everything with precision."
          </p>
<div className="flex items-center gap-4">
<img alt="Amelia Santos" className="w-12 h-12 rounded-full object-cover" src="https://framerusercontent.com/images/Qe55ZBeliEQ2jmWUt4enbHMpI.png"/>
<div>
<p className="font-medium text-sm text-[#3d2a24]">Amelia Santos</p>
<p className="text-xs text-[#7c6c6a]">CFO, Brightpath</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[300px] md:w-[400px] p-8 rounded-xl border border-[#edeae8] bg-white shadow-sm flex flex-col justify-between relative">
<iconify-icon className="absolute top-6 right-6 text-4xl text-[#f7f4f2]" icon="solar:quote-linear"></iconify-icon>
<p className="font-['IBM_Plex_Serif',serif] text-lg text-[#3d2a24] leading-relaxed mb-8 relative z-10">
            "Listed to sold in three weeks with multiple offers. Their marketing
            exceeded expectations."
          </p>
<div className="flex items-center gap-4">
<img alt="William Richardson" className="w-12 h-12 rounded-full object-cover" src="https://framerusercontent.com/images/nT1cGEJVsEsq5BKTakwZoJjJbM.png"/>
<div>
<p className="font-medium text-sm text-[#3d2a24]">
                William Richardson
              </p>
<p className="text-xs text-[#7c6c6a]">Director, Summit</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[300px] md:w-[400px] p-8 rounded-xl border border-[#edeae8] bg-white shadow-sm flex flex-col justify-between relative">
<iconify-icon className="absolute top-6 right-6 text-4xl text-[#f7f4f2]" icon="solar:quote-linear"></iconify-icon>
<p className="font-['IBM_Plex_Serif',serif] text-lg text-[#3d2a24] leading-relaxed mb-8 relative z-10">
            "Sold our property above asking price in record time. Market
            knowledge is unmatched."
          </p>
<div className="flex items-center gap-4">
<img alt="Robert Klein" className="w-12 h-12 rounded-full object-cover" src="https://framerusercontent.com/images/iuipKTuZYHbll3k7d66oCtmAic.png"/>
<div>
<p className="font-medium text-sm text-[#3d2a24]">Robert Klein</p>
<p className="text-xs text-[#7c6c6a]">Partner, Klein &amp; Assoc</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-10">
<div className="flex flex-col md:flex-row gap-12 lg:gap-24">
<div className="md:w-1/3 flex flex-col items-start gap-6 md:sticky md:top-32 h-max">
<h2 className="font-['IBM_Plex_Serif',serif] text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-[#3d2a24] leading-tight">
              From the magazine
            </h2>
<p className="text-base text-[#7c6c6a] leading-relaxed">
              Check out our magazine where we share valuable insights on real
              estate deals, post our latest listings, and more!
            </p>
<a className="mt-2 border border-[#e6e3e1] bg-white text-[#140e0c] px-6 py-3 rounded-md shadow-sm hover:bg-[#f7f4f2] transition-colors text-sm font-medium" href="#">
              Browse all articles
            </a>
</div>
<div className="md:w-2/3 flex flex-col gap-12">

<a className="group flex flex-col gap-6" href="#">
<div className="aspect-[16/9] md:aspect-[2/1] rounded-xl overflow-hidden bg-[#f5f3f2]">
<img alt="Article" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/pVpiG4618ICdqlpbUCYYUsmRw.png"/>
</div>
<div className="flex flex-col gap-3">
<h3 className="font-['IBM_Plex_Serif',serif] text-2xl tracking-tight font-medium text-[#3d2a24] group-hover:text-[#d5762b] transition-colors">
                  Elevated Living: The Art of Luxury Real Estate
                </h3>
<p className="text-sm text-[#7c6c6a] leading-relaxed">
                  Discover how architectural innovation is redefining luxury
                  living through seamless indoor-outdoor spaces.
                </p>
<div className="flex items-center gap-6 mt-2 text-xs font-medium text-[#7c6c6a]">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:user-linear"></iconify-icon>
                    Maya Doe
                  </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:calendar-linear"></iconify-icon>
                    Mar 19, 2025
                  </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:clock-circle-linear"></iconify-icon>
                    7min read
                  </div>
</div>
</div>
</a>
<hr className="border-[#edeae8]"/>

<a className="group flex flex-col gap-6" href="#">
<div className="aspect-[16/9] md:aspect-[2/1] rounded-xl overflow-hidden bg-[#f5f3f2]">
<img alt="Article" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/jK05WaycgqLJQ9xi9tuxHvkkKE.png"/>
</div>
<div className="flex flex-col gap-3">
<h3 className="font-['IBM_Plex_Serif',serif] text-2xl tracking-tight font-medium text-[#3d2a24] group-hover:text-[#d5762b] transition-colors">
                  Luxury Landscape: Curating the Finest Addresses
                </h3>
<p className="text-sm text-[#7c6c6a] leading-relaxed">
                  Beyond location, discover the hidden factors that transform
                  prestigious addresses into legacy properties.
                </p>
<div className="flex items-center gap-6 mt-2 text-xs font-medium text-[#7c6c6a]">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:user-linear"></iconify-icon>
                    Jacky Oz
                  </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:calendar-linear"></iconify-icon>
                    Mar 21, 2025
                  </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:clock-circle-linear"></iconify-icon>
                    3min read
                  </div>
</div>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[#140e0c] text-white pt-24 md:pt-32">
<div className="lg:px-10 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
<div className="w-full md:w-2/3">
<h2 className="font-['IBM_Plex_Serif',serif] text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium leading-tight max-w-lg mb-8 md:mb-0">
              Over 100 years of commercial and private real estate excellence
            </h2>
</div>
<div className="w-full md:w-auto shrink-0">
<a className="inline-block bg-gradient-to-b from-[#d5762b] to-[#bc5823] text-white px-6 py-3 rounded-md shadow-sm hover:shadow-md transition-all text-sm font-medium border border-[#f91b35bf]/20" href="#">
              More on Residence
            </a>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 md:gap-12 pb-24">
<div className="flex flex-col gap-2 border-l border-[#8a7a78]/24 pl-6 md:pl-8 flex-1">
<div className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white font-['Spline_Sans',sans-serif] font-light">
              $1.8B
            </div>
<div className="text-[#7c6c6a] text-sm">Assets under Management</div>
</div>
<div className="flex flex-col gap-2 border-l border-[#8a7a78]/24 pl-6 md:pl-8 flex-1">
<div className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white font-['Spline_Sans',sans-serif] font-light">
              189
            </div>
<div className="text-[#7c6c6a] text-sm">Offices Worldwide</div>
</div>
<div className="flex flex-col gap-2 border-l border-[#8a7a78]/24 pl-6 md:pl-8 flex-1">
<div className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white font-['Spline_Sans',sans-serif] font-light">
              248
            </div>
<div className="text-[#7c6c6a] text-sm">Expert Agents</div>
</div>
</div>

<div className="w-full flex justify-center mb-24">
<div className="aspect-[1.83] w-full max-w-6xl mix-blend-lighten invert relative">
<img alt="Building" className="w-full h-full object-cover" src="https://framerusercontent.com/images/sSEYxTKVwQ5u7zTagtqdSJGksE.jpg"/>
</div>
</div>

<div className="pb-24 border-b border-[#8a7a78]/24 mb-24">
<div className="border-b border-[#8a7a78]/24 pb-6 mb-16">
<h3 className="font-['IBM_Plex_Serif',serif] text-3xl tracking-tight font-medium">
              Our Main offices
            </h3>
</div>
<div className="flex flex-col gap-16">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h4 className="font-['IBM_Plex_Serif',serif] text-2xl font-medium text-white">
                  North America
                </h4>
</div>
<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">New York</h5>
<p className="text-sm text-[#7c6c6a]">
                    720 Fifth Avenue, Suite 3100
                  </p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:newyork@residence.com">
                    newyork@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+12125558700">
                    +1 (212) 555-8700
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">Los Angeles</h5>
<p className="text-sm text-[#7c6c6a]">
                    9255 Sunset Boulevard, Beverly Hills
                  </p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:losangeles@residence.com">
                    losangeles@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+13105554290">
                    +1 (310) 555-4290
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">Miami</h5>
<p className="text-sm text-[#7c6c6a]">
                    4701 North Meridian Avenue
                  </p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:miami@residence.com">
                    miami@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+13055556823">
                    +1 (305) 555-6823
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">Toronto</h5>
<p className="text-sm text-[#7c6c6a]">
                    108 Yorkville Avenue, Suite 500
                  </p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:toronto@residence.com">
                    toronto@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+14165559172">
                    +1 (416) 555-9172
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">Vancouver</h5>
<p className="text-sm text-[#7c6c6a]">1011 West Cordova Street</p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:vancouver@residence.com">
                    vancouver@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+16045553845">
                    +1 (604) 555-3845
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="w-full h-px bg-[#8a7a78]/24"></div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h4 className="font-['IBM_Plex_Serif',serif] text-2xl font-medium text-white">
                  Europe
                </h4>
</div>
<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">London</h5>
<p className="text-sm text-[#7c6c6a]">
                    35 Grosvenor Square, Mayfair
                  </p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:london@residence.com">
                    london@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+442079468200">
                    +44 20 7946 8200
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">Paris</h5>
<p className="text-sm text-[#7c6c6a]">
                    17 Avenue Montaigne, 8th Arr.
                  </p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:paris@residence.com">
                    paris@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+33142685300">
                    +33 1 42 68 53 00
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">Madrid</h5>
<p className="text-sm text-[#7c6c6a]">
                    Calle de Serrano 64, Salamanca
                  </p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:madrid@residence.com">
                    madrid@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+34914587219">
                    +34 91 458 72 19
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">Milan</h5>
<p className="text-sm text-[#7c6c6a]">Via Montenapoleone 8</p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:milan@residence.com">
                    milan@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+390276428531">
                    +39 02 7642 8531
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">Geneva</h5>
<p className="text-sm text-[#7c6c6a]">15 Quai du Mont-Blanc</p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:geneva@residence.com">
                    geneva@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+41227310560">
                    +41 22 731 05 60
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="w-full h-px bg-[#8a7a78]/24"></div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h4 className="font-['IBM_Plex_Serif',serif] text-2xl font-medium text-white">
                  Asia Pacific
                </h4>
</div>
<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">Tokyo</h5>
<p className="text-sm text-[#7c6c6a]">
                    Roppongi Hills Mori Tower, 42nd Fl
                  </p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:tokyo@residence.com">
                    tokyo@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+81357862400">
                    +81 3 5786 2400
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">Singapore</h5>
<p className="text-sm text-[#7c6c6a]">
                    9 Raffles Place, Republic Plaza
                  </p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:singapore@residence.com">
                    singapore@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+6564387290">
                    +65 6438 7290
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">Sydney</h5>
<p className="text-sm text-[#7c6c6a]">
                    117 Macquarie Street, Circular Quay
                  </p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:sydney@residence.com">
                    sydney@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+61292583600">
                    +61 2 9258 3600
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">Shanghai</h5>
<p className="text-sm text-[#7c6c6a]">1566 Nanjing West Road</p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:shanghai@residence.com">
                    shanghai@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+862161358700">
                    +86 21 6135 8700
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">Dubai</h5>
<p className="text-sm text-[#7c6c6a]">
                    Emirates Towers, 40th Floor
                  </p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:dubai@residence.com">
                    dubai@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+97143305678">
                    +971 4 330 5678
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="w-full h-px bg-[#8a7a78]/24"></div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h4 className="font-['IBM_Plex_Serif',serif] text-2xl font-medium text-white">
                  South America
                </h4>
</div>
<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">São Paulo</h5>
<p className="text-sm text-[#7c6c6a]">
                    Av. Brigadeiro Faria Lima 3477
                  </p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:saopaulo@residence.com">
                    saopaulo@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+551130394500">
                    +55 11 3039 4500
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">Rio de Janeiro</h5>
<p className="text-sm text-[#7c6c6a]">
                    Avenida Atlântica 2600, Copacabana
                  </p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:rio@residence.com">
                    rio@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+552125467890">
                    +55 21 2546 7890
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-3 items-start">
<h5 className="font-semibold text-white">Buenos Aires</h5>
<p className="text-sm text-[#7c6c6a]">
                    Avenida Alvear 1891, Recoleta
                  </p>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="mailto:ba@residence.com">
                    ba@residence.com
                  </a>
<a className="text-sm text-[#7c6c6a] hover:text-white transition-colors" href="tel:+541148156720">
                    +54 11 4815 6720
                  </a>
<a className="mt-1 w-6 h-6 flex items-center justify-center bg-[#3d2a24] rounded hover:opacity-80 transition-opacity" href="https://maps.google.com/" target="_blank">
<iconify-icon className="text-xs text-[#d5762b]" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col text-center bg-[#3d2a24] rounded-2xl mb-24 pt-20 pr-6 pb-20 pl-6 items-center justify-center">
<h2 className="font-['IBM_Plex_Serif',serif] text-3xl md:text-4xl tracking-tight font-medium mb-4">
            We're here for you
          </h2>
<p className="text-[#edeae8] mb-8 max-w-md">
            We'd love to have a chat with you to see how we can help you and
            your plans.
          </p>
<a className="bg-white text-[#3d2a24] px-8 py-3 rounded-md shadow-sm hover:bg-[#f7f4f2] transition-colors text-sm font-medium flex items-center gap-2" href="#">
            Book a call now
          </a>
</div>
</div>
</section>

<footer className="bg-[#140e0c] pt-20 pb-10 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-10 border-t border-white/10 pt-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1">
<svg className="h-8 w-auto text-white fill-current mb-8" fill="none" height="22" viewbox="0 0 124 22" width="124" xmlns="http://www.w3.org/2000/svg">
<path d="M123.323 16.537C122.71 19.441 120.434 21.377 116.875 21.377C112.527 21.377 109.989 17.798 109.989 13.75C109.989 9.702 112.469 6.123 116.816 6.123C121.164 6.123 124.023 9.673 123.585 14.777L113.169 14.777C113.315 17.446 114.861 19.001 117.079 19.001C118.975 19.001 119.792 17.71 120.142 16.537ZM116.816 8.499C114.686 8.499 113.403 10.025 113.198 12.401L120.405 12.401C120.201 10.025 118.946 8.499 116.816 8.499ZM109.11 15.979C108.556 19.441 105.959 21.377 102.545 21.377C98.256 21.377 95.514 17.798 95.514 13.75C95.514 9.79 98.169 6.123 102.429 6.123C105.842 6.123 108.41 8.001 108.964 11.462L105.755 11.462C105.405 9.585 104.208 8.499 102.487 8.499C100.124 8.499 98.869 10.699 98.869 13.75C98.869 16.83 100.211 19.001 102.633 19.001C104.325 19.001 105.55 17.857 105.871 15.979ZM84.693 21.083L81.513 21.083L81.513 6.417L84.606 6.417L84.606 9.291L84.664 9.291C85.277 7.238 86.794 6.123 88.924 6.123C92.133 6.123 93.708 8.323 93.708 11.55L93.708 21.083L90.529 21.083L90.529 12.489C90.529 9.761 89.566 8.529 87.611 8.529C85.656 8.529 84.693 9.878 84.693 12.283ZM79.327 16.537C78.714 19.441 76.438 21.377 72.879 21.377C68.531 21.377 65.993 17.798 65.993 13.75C65.993 9.702 68.473 6.123 72.82 6.123C77.167 6.123 80.027 9.673 79.589 14.777L69.173 14.777C69.319 17.446 70.865 19.001 73.083 19.001C74.979 19.001 75.796 17.71 76.146 16.537ZM72.82 8.499C70.69 8.499 69.407 10.025 69.202 12.401L76.409 12.401C76.205 10.025 74.95 8.499 72.82 8.499ZM60.859 18.003C60.159 20.027 58.466 21.377 56.249 21.377C52.281 21.377 50.122 17.857 50.122 13.75C50.122 9.643 52.369 6.123 56.249 6.123C58.466 6.123 60.159 7.443 60.859 9.467L60.946 9.467L60.946 0.843L64.068 0.843L64.068 21.083L60.946 21.083L60.946 18.003ZM53.477 13.75C53.477 16.859 54.849 19.001 57.27 19.001C59.721 19.001 61.063 16.859 61.063 13.75C61.063 10.611 59.721 8.499 57.27 8.499C54.849 8.499 53.477 10.611 53.477 13.75ZM51.146 3.388L42.028 3.388L42.028 1.555L51.146 1.555ZM48.162 21.083L44.982 21.083L44.982 6.417L48.162 6.417ZM43.084 16.859C43.084 19.705 40.458 21.377 37.102 21.377C33.105 21.377 30.946 18.766 30.742 16.067L33.893 16.067C34.068 17.945 35.556 19.001 37.132 19.001C38.561 19.001 39.903 18.355 39.903 17.094C39.903 16.273 39.232 15.598 37.54 15.217L35.556 14.777C32.697 14.161 31.005 12.782 31.005 10.465C31.005 7.795 33.572 6.123 36.694 6.123C40.137 6.123 42.588 8.089 42.792 10.758L39.641 10.758C39.437 9.057 38.124 8.499 36.694 8.499C35.293 8.499 34.214 9.115 34.214 10.201C34.214 11.169 35.031 11.491 36.898 11.931L38.882 12.371C42.033 13.075 43.084 14.659 43.084 16.859ZM29.46 16.537C28.847 19.441 26.571 21.377 23.012 21.377C18.665 21.377 16.126 17.798 16.126 13.75C16.126 9.702 18.606 6.123 22.953 6.123C27.301 6.123 30.16 9.673 29.722 14.777L19.306 14.777C19.452 17.446 20.999 19.001 23.216 19.001C25.113 19.001 25.929 17.71 26.28 16.537ZM22.953 8.499C20.824 8.499 19.54 10.025 19.336 12.401L26.542 12.401C26.338 10.025 25.083 8.499 22.953 8.499ZM3.924 21.083L0.627 21.083L0.627 0.843L7.017 0.843C12.064 0.843 15.099 3.014 15.099 6.857C15.099 9.585 13.552 11.491 10.81 12.342L15.42 21.083L11.802 21.083L7.455 12.87L3.924 12.87ZM7.309 3.571L3.924 3.571L3.924 10.142L7.309 10.142C10.139 10.142 11.656 8.998 11.656 6.857C11.656 4.715 10.139 3.571 7.309 3.571Z"></path>
</svg>
</div>
<div className="col-span-1 flex flex-col gap-4">
<p className="text-[#7c6c6a] font-medium text-sm mb-2">Listings</p>
<a className="text-sm text-white hover:text-[#d5762b] transition-colors" href="#">
              Buy a house
            </a>
<a className="text-sm text-white hover:text-[#d5762b] transition-colors" href="#">
              Buy an apartment
            </a>
<a className="text-sm text-white hover:text-[#d5762b] transition-colors" href="#">
              Buy land
            </a>
<a className="text-sm text-white hover:text-[#d5762b] transition-colors" href="#">
              Rent a home
            </a>
<a className="text-sm text-white hover:text-[#d5762b] transition-colors" href="#">
              Rent a flat
            </a>
<a className="text-sm text-white hover:text-[#d5762b] transition-colors" href="#">
              Sell your property
            </a>
</div>
<div className="col-span-1 flex flex-col gap-4">
<p className="text-[#7c6c6a] font-medium text-sm mb-2">Assistance</p>
<a className="text-sm text-white hover:text-[#d5762b] transition-colors" href="#">
              Valuate property
            </a>
<a className="text-sm text-white hover:text-[#d5762b] transition-colors" href="#">
              Services
            </a>
<a className="text-sm text-white hover:text-[#d5762b] transition-colors" href="#">
              FAQs
            </a>
<a className="text-sm text-white hover:text-[#d5762b] transition-colors" href="#">
              Contact
            </a>
</div>
<div className="col-span-1 flex flex-col gap-4">
<p className="text-[#7c6c6a] font-medium text-sm mb-2">Residence</p>
<a className="text-sm text-white hover:text-[#d5762b] transition-colors" href="#">
              Find an agent
            </a>
<a className="text-sm text-white hover:text-[#d5762b] transition-colors" href="#">
              Locations
            </a>
<a className="text-sm text-white hover:text-[#d5762b] transition-colors" href="#">
              Careers
            </a>
<a className="text-sm text-white hover:text-[#d5762b] transition-colors" href="#">
              Company
            </a>
<a className="text-sm text-white hover:text-[#d5762b] transition-colors" href="#">
              Magazine
            </a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<a className="col-span-1 md:col-span-2 relative h-48 rounded-lg overflow-hidden group" href="#">
<img alt="Buy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/1iLmctQe6PTbKHlAwwnBL75SonA.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute bottom-6 left-6">
<h3 className="font-['IBM_Plex_Serif',serif] text-xl text-white font-medium">
                Buy Property
              </h3>
</div>
</a>
<a className="col-span-1 relative h-48 rounded-lg overflow-hidden group" href="#">
<img alt="Sell" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/YPVGDy67DGsP6fZUp0EyknkrWw.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute bottom-6 left-6">
<h3 className="font-['IBM_Plex_Serif',serif] text-xl text-white font-medium">
                Sell Property
              </h3>
</div>
</a>
<div className="col-span-1 flex flex-col gap-4 h-48">
<a className="flex-1 relative rounded-lg overflow-hidden group" href="#">
<img alt="About" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/sLA5DUGYl41k5rKP5ePeal1hTE.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute bottom-4 left-4">
<h3 className="font-['IBM_Plex_Serif',serif] text-base text-white font-medium">
                  About
                </h3>
</div>
</a>
<a className="flex-1 relative rounded-lg overflow-hidden group" href="#">
<img alt="Careers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/tjJeTD3CCwdJlpfVK8XUDBzmbXA.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute bottom-4 left-4">
<h3 className="font-['IBM_Plex_Serif',serif] text-base text-white font-medium">
                  Careers
                </h3>
</div>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-12 mt-12 border-t border-white/10 text-xs text-[#7c6c6a]">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<span>© 2026 Residence.</span>
<span>·</span>
<a className="hover:text-white transition-colors" href="#">
              Designed &amp; Built in HTML
            </a>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<span>·</span>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
