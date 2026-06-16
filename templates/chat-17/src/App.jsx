import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['DM Sans', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
colors: {
brand: {
black: '#0f0f0f',
red: '#D01B1B',
cream: '#F7F4EB',
accent: '#F4EBD0'
}
},
animation: {
'scroll': 'scroll 25s linear infinite',
'bounce-slow': 'bounce 3s infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
        
        // Simple scroll to anchor behavior
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="">








</main>

<header className="fixed z-50 flex pr-4 pl-4 top-4 right-0 left-0 justify-center">
<nav className="flex text-slate-950 bg-[#FFFFFF] w-full max-w-6xl rounded-2xl pt-4 pr-6 pb-4 pl-6 shadow-2xl items-center justify-between">
<a className="uppercase text-xl font-semibold text-slate-950 tracking-tighter font-display inline-flex items-center" href="#"><img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center w-auto h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b48589-b37b-4b3b-80c2-d4fead5bf7b3_800w.png"/></a>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#about">Story</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#menu">Menu</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#reviews">find
        us</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">catering</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">contact</a>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="uppercase transition-colors hover:bg-[#234220] shadow-orange-900/20 text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="#order">
        Order Online
      </a>
</div>
</nav>
</header><section className="sm:px-8 bg-white border-black/5 border-t pt-24 pr-4 pb-24 pl-4">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col text-center mt-20 mb-16 items-center">
<h2 className="sm:text-6xl text-5xl font-semibold uppercase text-[#234220] tracking-tight font-display mb-4">
        Our Locations
      </h2>
<p className="text-base text-slate-700 max-w-lg">
        Find your nearest Rollicious spot for freshly baked bánh mì and authentic Vietnamese flavours.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">

<div className="sm:p-10 flex flex-col hover:-translate-y-1 transition-transform duration-300 bg-[#F7F4EB] h-full border-black/5 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="flex items-center gap-4 mb-8">
<div className="flex shrink-0 text-[#E85424] bg-[#E85424]/10 w-12 h-12 rounded-full items-center justify-center">
<svg className="lucide lucide-store w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(232, 84, 36)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
<path className="" d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
<path className="" d="M2 7h20"></path>
<path className="" d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7">
</path>
</svg>
</div>
<h3 className="font-display text-2xl font-semibold uppercase text-[#234220] leading-tight">Main Retail<br/>Shop
          </h3>
</div>
<div className="flex-grow">
<p className="text-sm text-slate-700 leading-relaxed mb-4">
            270 Saint Asaph Street<br/>
            Christchurch Central City<br/>
            Christchurch 8011
          </p>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-black/5 rounded-full text-[10px] font-semibold uppercase tracking-widest text-slate-500 shadow-sm">
            AKA. The SQ Area
          </span>
</div>
<a className="mt-8 block text-center w-full py-4 border border-[#234220]/20 text-[#234220] bg-white rounded-full uppercase text-xs font-semibold tracking-wider hover:bg-[#234220] hover:text-white hover:border-[#234220] transition-colors shadow-sm" href="https://share.google/BVRzCs7KTNe9sbZFE">
          Get Directions
        </a>
</div>

<div className="sm:p-10 flex flex-col hover:-translate-y-1 transition-transform duration-300 bg-[#F7F4EB] h-full border-black/5 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="flex gap-4 mb-8 gap-x-4 gap-y-4 items-center">
<div className="w-12 h-12 rounded-full bg-[#234220]/10 flex items-center justify-center text-[#234220] shrink-0">
<svg className="lucide lucide-truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
<path d="M15 18H9"></path>
<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
<circle className="" cx="17" cy="18" r="2"></circle>
<circle cx="7" cy="18" r="2"></circle>
</svg>
</div>
<h3 className="font-display text-2xl font-semibold uppercase text-[#234220] leading-tight">The Arts<br/>Centre</h3>
</div>
<div className="flex-grow">
<p className="leading-relaxed text-sm text-slate-700 mb-4">
            30 Worcester Street<br/>
            Christchurch Central City<br/>
            Christchurch 8013
          </p>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-black/5 rounded-full text-[10px] font-semibold uppercase tracking-widest text-slate-500 shadow-sm">
            Food Truck Location
          </span>
</div>
<a className="block uppercase hover:bg-[#234220] hover:text-white hover:border-[#234220] transition-colors text-xs font-semibold text-[#234220] tracking-wider text-center bg-white w-full border-[#234220]/20 border rounded-full mt-8 pt-4 pb-4 shadow-sm" href="https://share.google/MqlXTtZypzVSXI7C1">
          Get Directions
        </a>
</div>

<div className="sm:p-10 flex flex-col hover:-translate-y-1 transition-transform duration-300 bg-[#F7F4EB] h-full border-black/5 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="flex gap-4 mb-8 gap-x-4 gap-y-4 items-center">
<div className="flex shrink-0 text-[#e85424] bg-[#e85424]/10 w-12 h-12 rounded-full items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-tree-deciduous w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="tree-deciduous" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" style={{color: 'rgb(232, 84, 36)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"></path><path d="M12 19v3"></path></svg>
</div>
<h3 className="uppercase leading-tight text-2xl font-semibold text-[#234220] font-display">Christchurch<br/>Football Club
          </h3>
</div>
<div className="flex-grow">
<p className="leading-relaxed text-sm text-slate-700 mb-4">
            250 Westminster Street<br/>
            Mairehau<br/>
            Christchurch 8013
          </p>
<span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-semibold text-slate-500 tracking-widest bg-white border-black/5 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm">Central Kitchen</span>
</div>
<a className="block uppercase hover:bg-[#234220] hover:text-white hover:border-[#234220] transition-colors text-xs font-semibold text-[#234220] tracking-wider text-center bg-white w-full border-[#234220]/20 border rounded-full mt-8 pt-4 pb-4 shadow-sm" href="https://share.google/BtBbtbfkau6V6XT5G">
          Get Directions
        </a>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 gap-x-6 gap-y-6">


<div className="sm:p-10 lg:col-span-2 bg-[#F7F4EB] w-full max-w-2xl border-black/5 border rounded-[2rem] mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 shadow-sm">
<h3 className="uppercase text-3xl font-semibold text-[#234220] font-display mb-8">Markets &amp; Events</h3>
<div className="space-y-8">

<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-[#F3D86D]/20 flex items-center justify-center text-[#E85424] shrink-0 border border-black/5">
<svg className="lucide lucide-tent" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 21 14 3"></path>
<path d="M20.5 21 10 3"></path>
<path d="M15.5 21 12 15l-3.5 6"></path>
<path d="M2 21h20"></path>
</svg>
</div>
<div className="pt-1">
<h4 className="text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">Weekly Markets</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                Find us every week serving up fresh flavours at the and the . Follow our socials for exact times.
              </p>
</div>
</div>

<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-[#E85424]/10 flex items-center justify-center text-[#E85424] shrink-0 border border-black/5">
<svg className="lucide lucide-party-popper" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5.8 11.3 2 22l10.7-3.79"></path>
<path d="M4 3h.01"></path>
<path d="M22 8h.01"></path>
<path d="M15 2h.01"></path>
<path d="M22 20h.01"></path>
<path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10">
</path>
<path d="m22 13-.82-.33c-.86-.35-1.85.2-2.04 1.11V14a2 2 0 0 1-2 2h-.4c-.9 0-1.7.6-1.8 1.5v0a2 2 0 0 1-2 2">
</path>
</svg>
</div>
<div className="pt-1">
<h4 className="text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">Festivals &amp; Pop-ups</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                We take our food truck on the road for one-off events and festivals throughout the year. Looking to hire
                us? Check out our <a className="hover:underline font-semibold text-[#E85424]" href="/catering-page">catering
                  page</a>.
              </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section><header className="fixed flex z-50 pr-4 pl-4 top-4 right-0 left-0 justify-center">
<nav className="flex text-slate-950 bg-[#FFFFFF] w-full max-w-6xl rounded-2xl pt-4 pr-6 pb-4 pl-6 shadow-2xl items-center justify-between">
<a className="uppercase inline-flex items-center text-xl font-semibold text-slate-950 tracking-tighter font-display" href="/homepage">
<img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center cursor-pointer w-auto h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b48589-b37b-4b3b-80c2-d4fead5bf7b3_800w.png"/>
</a>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#about">Story</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#menu">Menu</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#reviews">find
        us</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">catering</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">contact</a>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="uppercase transition-colors hover:bg-[#234220] shadow-orange-900/20 text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="#order">
        Order Online
      </a>
</div>
</nav>
</header><header className="fixed z-50 flex pr-4 pl-4 top-4 right-0 left-0 justify-center">
<nav className="flex text-slate-950 bg-[#FFFFFF] w-full max-w-6xl rounded-2xl pt-4 pr-6 pb-4 pl-6 shadow-2xl items-center justify-between">
<a className="uppercase text-xl font-semibold text-slate-950 tracking-tighter font-display inline-flex items-center" href="#"><img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center w-auto h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b48589-b37b-4b3b-80c2-d4fead5bf7b3_800w.png"/></a>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#about">Story</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#menu">Menu</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#reviews">find
        us</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">catering</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">contact</a>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="uppercase transition-colors hover:bg-[#234220] shadow-orange-900/20 text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="#order">
        Order Online
      </a>
</div>
</nav>
</header><header className="fixed flex z-50 pr-4 pl-4 top-4 right-0 left-0 justify-center">
<nav className="flex text-slate-950 bg-[#FFFFFF] w-full max-w-6xl rounded-2xl pt-4 pr-6 pb-4 pl-6 shadow-2xl items-center justify-between">
<a className="uppercase inline-flex items-center text-xl font-semibold text-slate-950 tracking-tighter font-display" href="/homepage">
<img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center cursor-pointer w-auto h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b48589-b37b-4b3b-80c2-d4fead5bf7b3_800w.png"/>
</a>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/story-page">Story</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/menu-page">Menu</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/find-us-page">find
  us</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/catering-page">catering</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/contact-page">contact</a><a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/feedback-review-page">Reviews</a>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="uppercase transition-colors hover:bg-[#234220] shadow-orange-900/20 text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="https://order.rollicious.co.nz/">
      Order Online
    </a>
</div>
</nav>
</header><section className="sm:px-8 bg-white border-black/5 border-t pt-24 pr-4 pb-24 pl-4" id="social-gallery">
<div className="max-w-7xl mr-auto ml-auto">

<div className="flex flex-col items-center text-center mb-16">
<a className="inline-flex items-center gap-2 hover:bg-[#F3D86D] transition-colors group bg-[#F7F4EB] border-black/5 border rounded-full mb-6 pt-2 pr-4 pb-2 pl-4 shadow-sm" href="https://www.instagram.com/rollicious_vietnamese/">
<svg className="lucide lucide-instagram text-[#E85424]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
<span className="uppercase text-xs font-semibold text-slate-900 tracking-wide">@rollicious_vietnamese</span>
</a>
<h2 className="sm:text-6xl text-5xl font-semibold uppercase text-[#234220] tracking-tight font-display mb-4">
        Follow Our Journey
      </h2>
<p className="text-base text-slate-700 max-w-lg">
        Share your fresh Rollicious moments with <span className="font-semibold text-[#E85424]">#RolliciousNZ</span>
</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

<a className="group aspect-square overflow-hidden block bg-gray-100 rounded-[2rem] relative shadow-sm" href="https://www.instagram.com/rollicious_vietnamese/">
<img alt="Banh Mi Platter" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6af9d9c1-eb48-45d5-a2a9-b9b74be3ad81_3840w.jpg"/>
<div className="group-hover:bg-[#234220]/40 transition-colors duration-300 flex bg-[#234220]/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<svg className="lucide lucide-instagram text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
</a>

<a className="group aspect-square overflow-hidden block bg-gray-100 rounded-[2rem] relative shadow-sm" href="https://www.instagram.com/rollicious_vietnamese/">
<img alt="Beef Banh Mi" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64824e9f-03bd-4d7c-b8ad-65660489d00f_3840w.jpg"/>
<div className="group-hover:bg-[#234220]/40 transition-colors duration-300 flex bg-[#234220]/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<svg className="lucide lucide-instagram text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
</a>

<a className="group aspect-square overflow-hidden block bg-gray-100 rounded-[2rem] relative shadow-sm" href="https://www.instagram.com/rollicious_vietnamese/">
<img alt="Noodle Salad" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/358674c7-1b4b-4090-b0ad-bbe34e260ac0_1600w.png"/>
<div className="group-hover:bg-[#234220]/40 transition-colors duration-300 flex bg-[#234220]/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<svg className="lucide lucide-instagram text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
</a>

<a className="group aspect-square overflow-hidden block bg-gray-100 rounded-[2rem] relative shadow-sm" href="https://www.instagram.com/rollicious_vietnamese/">
<img alt="Rice Paper Rolls" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3eda8517-d07d-430d-a2d9-3fcc54631239_1600w.png"/>
<div className="group-hover:bg-[#234220]/40 transition-colors duration-300 flex bg-[#234220]/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<svg className="lucide lucide-instagram text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
</a>

<a className="group aspect-square overflow-hidden block bg-gray-100 rounded-[2rem] relative shadow-sm" href="https://www.instagram.com/rollicious_vietnamese/">
<img alt="Vietnamese Iced Coffee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e11a377-e2ba-4ad5-9f8b-7a4f18965b5c_1600w.png"/>
<div className="group-hover:bg-[#234220]/40 transition-colors duration-300 flex bg-[#234220]/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<svg className="lucide lucide-instagram text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
</a>

<a className="group aspect-square overflow-hidden block bg-gray-100 rounded-[2rem] relative shadow-sm" href="https://www.instagram.com/rollicious_vietnamese/">
<img alt="Mango Tea" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a0a23a6-2302-4a1e-b648-91e90679a50f_1600w.png"/>
<div className="group-hover:bg-[#234220]/40 transition-colors duration-300 flex bg-[#234220]/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<svg className="lucide lucide-instagram text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
</a>
</div>
</div>
</section><footer className="text-white bg-[#f7f4eb] border-white/10 border-t pt-20 pb-10">
<div className="sm:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col md:flex-row gap-12 mb-20 gap-x-12 gap-y-12 justify-between items-center md:items-start text-center md:text-left">
<div className="max-w-sm flex flex-col items-center md:items-start">
<img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center text-center w-auto object-cover pt-4 pb-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6aaace39-7e06-49d7-b37b-924c6e273acf_320w.png"/>
<p className="leading-relaxed text-sm text-[#E85424]">Rollicious is a Christchurch-based Vietnamese brand
      specialising in
      authentic Northern-style bánh mì, with light, balanced flavours and bread baked fresh daily at 5am for that
      perfect crispy outside and fluffy inside.</p>
<div className="flex gap-4 mt-6 gap-x-4 gap-y-4 justify-center md:justify-start w-full">
<a className="transition-colors hover:text-brand-orange text-[#000000]" href="https://www.instagram.com/rollicious_vietnamese/"><svg aria-hidden="true" className="lucide lucide-instagram w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(232, 84, 36)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg></a>
<a className="transition-colors hover:text-brand-orange" href="https://www.facebook.com/RolliciousVietnamese/"><svg aria-hidden="true" className="lucide lucide-facebook w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(232, 84, 36)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg></a>
<a className="transition-colors hover:text-brand-orange" href="#"><svg aria-hidden="true" className="lucide lucide-twitter w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(232, 84, 36)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
</path>
</svg></a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-12">
<div className="flex flex-col items-center md:items-start">
<h4 className="uppercase text-brand-orange text-lg font-semibold text-[#E85424] tracking-wider font-display mb-4">
        information</h4>
<ul className="text-sm text-white/60 space-y-3">
<li className=""><a className="hover:text-[#E85424] transition-colors text-[#E85424]" href="/story-page">Our Story</a>
</li>
<li className=""><a className="hover:text-[#E85424] transition-colors text-[#E85424]" href="/menu-page">Our Menu</a>
</li>
<li className=""><a className="hover:text-[#E85424] transition-colors text-[#E85424]" href="https://order.rollicious.co.nz/">Order Online</a></li>
<li className="">
<a className="text-[#E85424] hover:text-[#E85424] transition-colors" href="/catering-page">
            Catering
          </a>
</li>
</ul>
</div>
<div className="flex flex-col items-center md:items-start">
<h4 className="uppercase text-brand-orange text-lg font-semibold text-[#E85424] tracking-wider font-display mb-4">
        Get in
        touch</h4>
<ul className="space-y-3 text-sm text-white/60">
<li className="transition-colors select-text text-[#E85424]">
          020 434 8989
        </li>
<li className="text-[#E85424] transition-colors select-text">
          hello@rollicious.co.nz
        </li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 uppercase text-xs text-[#E85424] tracking-widest border-white/10 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="">© Rollicious, 2026</p>
<div className="flex gap-6">
<a className="hover:text-[#234220]" href="/privacy-page">Privacy Policy</a>
<a className="hover:text-[#234220]" href="/terms-page">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
