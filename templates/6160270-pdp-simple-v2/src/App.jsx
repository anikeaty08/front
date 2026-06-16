import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



            if (window.lucide) {
                window.lucide.createIcons();
            }
            
            (function() {
                const mainGallery = document.getElementById('main-gallery');
                const thumbGallery = document.getElementById('thumb-gallery');
                
                if(!mainGallery || !thumbGallery) return;

                const thumbs = thumbGallery.querySelectorAll('.thumb-btn');

                window.syncGallery = function(index) {
                    const targetSlide = mainGallery.children[index];
                    if(targetSlide) {
                        mainGallery.scrollTo({
                            left: targetSlide.offsetLeft,
                            behavior: 'smooth'
                        });
                    }
                    updateActiveThumb(index);
                };

                function updateActiveThumb(index) {
                    thumbs.forEach((thumb, i) => {
                        if (i === index) {
                            thumb.classList.add('border-[#1879C3]', 'ring-1', 'ring-[#1879C3]/20');
                            thumb.classList.remove('border-zinc-200');
                            
                            // Ensure active thumb is in view
                            const thumbRect = thumb.getBoundingClientRect();
                            const galleryRect = thumbGallery.getBoundingClientRect();
                            
                            if (thumbRect.left < galleryRect.left || thumbRect.right > galleryRect.right) {
                                const scrollLeft = thumb.offsetLeft - (thumbGallery.clientWidth / 2) + (thumb.clientWidth / 2);
                                thumbGallery.scrollTo({ left: scrollLeft, behavior: 'smooth' });
                            }
                        } else {
                            thumb.classList.remove('border-[#1879C3]', 'ring-1', 'ring-[#1879C3]/20');
                            thumb.classList.add('border-zinc-200');
                        }
                    });
                }

                let isScrolling;
                mainGallery.addEventListener('scroll', () => {
                    window.clearTimeout(isScrolling);
                    isScrolling = setTimeout(() => {
                        const scrollPos = mainGallery.scrollLeft;
                        const slideWidth = mainGallery.clientWidth;
                        const index = Math.round(scrollPos / slideWidth);
                        updateActiveThumb(index);
                    }, 50);
                });

                window.scrollThumbs = function(direction) {
                    const scrollAmount = thumbGallery.clientWidth * 0.8;
                    thumbGallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
                };

                window.scrollMain = function(direction) {
                    const scrollAmount = mainGallery.clientWidth;
                    mainGallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
                };
            })();
        


              setTimeout(() => {
                const s1 = document.getElementById('skel-1-aura-emmzdvmxo13k2pic0');
                const s2 = document.getElementById('skel-2-aura-emmzdvmxo13k2pic0');
                const c1 = document.getElementById('content-1-aura-emmzdvmxo13k2pic0');
                const c2 = document.getElementById('content-2-aura-emmzdvmxo13k2pic0');
                if(s1) s1.classList.add('hidden');
                if(s2) s2.classList.add('hidden');
                if(c1) c1.classList.remove('hidden');
                if(c2) c2.classList.remove('hidden');
              }, 5000);
            


            setTimeout(() => {
              const s1 = document.getElementById('skel-1-aura-emmzep8gt14kbguo5');
              const s2 = document.getElementById('skel-2-aura-emmzep8gt14kbguo5');
              const c1 = document.getElementById('content-1-aura-emmzep8gt14kbguo5');
              const c2 = document.getElementById('content-2-aura-emmzep8gt14kbguo5');

              if(s1) s1.classList.add('hidden');
              if(s2) s2.classList.add('hidden');

              if(c1) {
                c1.classList.remove('hidden');
                c1.classList.add('flex');
              }
              if(c2) {
                c2.classList.remove('hidden');
              }
            }, 5000);
          


            setTimeout(() => {
              const s1 = document.getElementById('skel-1-actions');
              const s2 = document.getElementById('skel-2-actions');
              const c1 = document.getElementById('content-1-actions');
              const c2 = document.getElementById('content-2-actions');
              if(s1) s1.classList.add('hidden');
              if(s2) s2.classList.add('hidden');
              if(c1) { c1.classList.remove('hidden'); c1.classList.add('flex'); }
              if(c2) { c2.classList.remove('hidden'); c2.classList.add('flex'); }
            }, 5000);
          
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="max-w-[1400px] mr-auto ml-auto pt-8 pr-6 pb-8 pl-6">

<nav className="block truncate sm:flex sm:gap-2 sm:overflow-x-auto sm:text-clip whitespace-nowrap sm:text-base [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden scroll-smooth text-sm text-zinc-500 w-full mb-8 sm:items-center">
<a className="hover:text-zinc-900 transition-colors shrink-0 align-middle" href="#">
        Other Products
      </a>
<iconify-icon className="text-zinc-300 text-lg shrink-0 mx-1 sm:mx-0 align-middle" icon="solar:alt-arrow-right-linear"></iconify-icon>
<a className="hover:text-zinc-900 transition-colors shrink-0 align-middle" href="#">
        Seals
      </a>
<iconify-icon className="text-zinc-300 text-lg shrink-0 mx-1 sm:mx-0 align-middle" icon="solar:alt-arrow-right-linear"></iconify-icon>
<a className="hover:text-zinc-900 transition-colors shrink-0 align-middle" href="#">
        Inch Sizes
      </a>
<iconify-icon className="text-zinc-300 text-lg shrink-0 mx-1 sm:mx-0 align-middle" icon="solar:alt-arrow-right-linear"></iconify-icon>
<a className="hover:text-zinc-900 transition-colors shrink-0 align-middle" href="#">
        Piston Rings
      </a>
<iconify-icon className="text-zinc-300 text-lg shrink-0 mx-1 sm:mx-0 align-middle" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-zinc-900 shrink-0 truncate max-w-[150px] sm:max-w-[200px] pr-4 sm:pr-0 inline-block align-middle">
        Cast Iron Piston Ring...
      </span>
</nav>
<div className="flex flex-col lg:flex-row gap-10 gap-x-10 gap-y-10">

<div className="lg:w-[520px] shrink-0 flex flex-col gap-6 w-full gap-x-6 gap-y-6">

<div className="aspect-square flex overflow-hidden group bg-white w-full rounded-sm relative items-center justify-center">
<div className="gallery-scroll flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden" id="main-gallery">

<div className="w-full h-full shrink-0 snap-center flex items-center justify-center">
<img alt="Piston Ring" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-contain mix-blend-multiply" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>

<div className="w-full h-full shrink-0 snap-center flex items-center justify-center">
<img alt="Technical Drawing" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-contain mix-blend-multiply" src="https://www.hydraulic-supply.com/media/catalog/product/cache/9123e6d3149b06cb93cf67e92fe7945d/d/w-21871-80371/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.jpeg?w=800&amp;q=80"/>
</div>

<div className="w-full h-full shrink-0 snap-center flex items-center justify-center relative">
<img alt="Application Detail 1" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>

<div className="w-full h-full shrink-0 snap-center flex items-center justify-center relative">
<img alt="Application Detail 2" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>

<div className="w-full h-full shrink-0 snap-center flex items-center justify-center relative">
<img alt="Application Detail 3" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>

<div className="w-full h-full shrink-0 snap-center flex items-center justify-center relative">
<img alt="Application Detail 4" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>

<div className="w-full h-full shrink-0 snap-center flex items-center justify-center relative">
<img alt="Application Detail 5" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>

<div className="w-full h-full shrink-0 snap-center flex items-center justify-center relative">
<img alt="Application Detail 6" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
</div>

<button aria-label="Previous Image" className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm border border-zinc-200 shadow-sm rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 hover:bg-white transition-all focus:outline-none opacity-0 group-hover:opacity-100 z-10" onclick="window.scrollMain(-1)">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>

<button aria-label="Next Image" className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm border border-zinc-200 shadow-sm rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 hover:bg-white transition-all focus:outline-none opacity-0 group-hover:opacity-100 z-10" onclick="window.scrollMain(1)">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>

<div className="relative w-full group/thumbs flex items-center">

<button aria-label="Previous Thumbnails" className="absolute -left-4 z-10 w-8 h-8 bg-white border border-zinc-200 shadow-sm rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-all focus:outline-none opacity-0 group-hover/thumbs:opacity-100" onclick="window.scrollThumbs(-1)">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>

<div className="w-full relative">
<div className="flex gap-4 overflow-x-auto snap-x scroll-smooth [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden w-full pt-1 pr-1 pb-1 pl-1 gap-x-4 gap-y-4" id="thumb-gallery">
<button className="thumb-btn border-[#1879C3] ring-1 ring-[#1879C3]/20 w-20 h-20 sm:w-24 sm:h-24 shrink-0 snap-start border rounded-sm bg-white p-2 flex items-center justify-center hover:border-zinc-300 transition-all relative" onclick="window.syncGallery(0)">
<img alt="Thumb 1" className="w-full h-full object-contain mix-blend-multiply" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</button>
<button className="thumb-btn border-zinc-200 w-20 h-20 sm:w-24 sm:h-24 shrink-0 snap-start border rounded-sm bg-white p-2 flex items-center justify-center hover:border-zinc-300 transition-all relative" onclick="window.syncGallery(1)">
<img alt="Thumb 2" className="w-full h-full object-contain mix-blend-multiply" src="https://www.hydraulic-supply.com/media/catalog/product/cache/9123e6d3149b06cb93cf67e92fe7945d/d/w-21871-80371/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.jpeg?w=800&amp;q=80"/>
</button>
<button className="thumb-btn border-zinc-200 w-20 h-20 sm:w-24 sm:h-24 shrink-0 snap-start border rounded-sm bg-white p-1 flex items-center justify-center hover:border-zinc-300 transition-all relative overflow-hidden" onclick="window.syncGallery(2)">
<img alt="Thumb 3" className="w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=400&amp;q=80"/>
</button>
<button className="thumb-btn border-zinc-200 w-20 h-20 sm:w-24 sm:h-24 shrink-0 snap-start border rounded-sm bg-white p-1 flex items-center justify-center hover:border-zinc-300 transition-all relative overflow-hidden" onclick="window.syncGallery(3)">
<img alt="Thumb 4" className="w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=400&amp;q=80"/>
</button>
<button className="thumb-btn border-zinc-200 w-20 h-20 sm:w-24 sm:h-24 shrink-0 snap-start border rounded-sm bg-white p-1 flex items-center justify-center hover:border-zinc-300 transition-all relative overflow-hidden" onclick="window.syncGallery(4)">
<img alt="Thumb 5" className="w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=400&amp;q=80"/>
</button>
<button className="thumb-btn border-zinc-200 w-20 h-20 sm:w-24 sm:h-24 shrink-0 snap-start border rounded-sm bg-white p-1 flex items-center justify-center hover:border-zinc-300 transition-all relative overflow-hidden" onclick="window.syncGallery(5)">
<img alt="Thumb 6" className="w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=400&amp;q=80"/>
</button>
<button className="thumb-btn border-zinc-200 w-20 h-20 sm:w-24 sm:h-24 shrink-0 snap-start border rounded-sm bg-white p-1 flex items-center justify-center hover:border-zinc-300 transition-all relative overflow-hidden" onclick="window.syncGallery(6)">
<img alt="Thumb 7" className="w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=400&amp;q=80"/>
</button>
<button className="thumb-btn border-zinc-200 w-20 h-20 sm:w-24 sm:h-24 shrink-0 snap-start border rounded-sm bg-white p-1 flex items-center justify-center hover:border-zinc-300 transition-all relative overflow-hidden" onclick="window.syncGallery(7)">
<img alt="Thumb 8" className="w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=400&amp;q=80"/>
</button>
</div>
<div className="absolute top-full left-0 w-full text-center mt-3 pointer-events-none">
<span className="text-xs text-zinc-500 font-medium">Note: Actual product model may vary from photo shown</span>
</div>
</div>

<button aria-label="Next Thumbnails" className="absolute -right-4 z-10 w-8 h-8 bg-white border border-zinc-200 shadow-sm rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-all focus:outline-none opacity-0 group-hover/thumbs:opacity-100" onclick="window.scrollThumbs(1)">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>

</div>

<div className="lg:w-[722px] shrink-0 flex flex-col w-full">

<div className="border-zinc-200 border-b mb-6 pb-6">
<div className="grid grid-cols-2 gap-6 w-full mb-1">
<div className="uppercase col-span-2 flex text-base text-zinc-900 tracking-wide justify-start">
<img alt="Hercules Sealing" className="w-[81px] object-contain max-h-[75%]" src="https://www.hydraulic-supply.com/media/akeneo_connector/reference_entities/records/l/o/logo_hercules_ecommerce_2636.png"/>
</div>
</div>
<h1 className="lg:text-4xl leading-[1.15] text-3xl font-medium text-zinc-900 tracking-tight mb-4">
            Cast Iron Piston Ring, 4.00 Inch OD, 0.187 Inch Width, 0.14 Inch Wall Thickness
          </h1>
<div className="flex flex-wrap text-base gap-x-6 gap-y-3 items-center">

<div className="flex gap-0.5 text-amber-400 gap-x-0.5 gap-y-0.5 items-center cursor-pointer group" onclick="event.preventDefault(); const section = Array.from(document.querySelectorAll('h2')).find(el =&gt; el.textContent.includes('Reviews')); if(section) section.parentElement.scrollIntoView({behavior: 'smooth', block: 'start'});">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<span className="text-zinc-500 ml-2 group-hover:text-[#1879C3] group-hover:underline decoration-zinc-300 underline-offset-4 decoration-1 transition-colors">0 Reviews</span>
<span className="text-zinc-300 mx-3">|</span>
<a className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 decoration-1 group-hover:text-[#1879C3] transition-colors" href="#reviews">
    Write a review
  </a>
</div>

<button className="flex gap-2 hover:text-[#1463a0] transition-colors group text-[#1879C3] gap-x-2 gap-y-2 items-center" onclick="event.preventDefault(); const section = Array.from(document.querySelectorAll('h2')).find(el =&gt; el.textContent.includes('Product Questions')); if(section) section.parentElement.scrollIntoView({behavior: 'smooth'});">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:chat-line-linear"></iconify-icon>
              Ask A Question
            </button>
</div>
</div>

<div className="mb-8">
<div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-y-2 gap-x-4 uppercase text-base text-zinc-500 tracking-wide mb-1">
<span className="">SKU: SPR-4002</span>
<span className="contents">
<span className="">APN: C1DK99</span>
<span className="">SPN: SPR-4002</span>
</span>
</div>
<div className="flex gap-2 gap-x-2 gap-y-2 items-baseline" data-skeleton-load="true">
<div className="h-10 w-28 bg-zinc-200 rounded-sm animate-pulse" id="skel-1-aura-emmzdvmxo13k2pic0"></div>
<div className="h-6 w-12 bg-zinc-200 rounded-sm animate-pulse" id="skel-2-aura-emmzdvmxo13k2pic0"></div>
<span className="hidden text-4xl font-normal text-zinc-900 tracking-tight" id="content-1-aura-emmzdvmxo13k2pic0">
              $11.24
            </span>
<span className="hidden text-lg font-light text-zinc-500" id="content-2-aura-emmzdvmxo13k2pic0">
              / EA
            </span>

</div>
</div>
<div className="flex gap-4 mb-8 gap-x-4 gap-y-4 items-start" data-skeleton-load="true">

<div className="shrink-0 bg-zinc-200 w-10 h-10 rounded-full animate-pulse" id="skel-1-aura-emmzep8gt14kbguo5"></div>
<div className="w-full flex flex-col gap-2 pt-1.5" id="skel-2-aura-emmzep8gt14kbguo5">
<div className="h-5 w-full sm:w-[350px] bg-zinc-200 rounded-sm animate-pulse"></div>
<div className="h-4 w-1/2 sm:w-[200px] bg-zinc-200 rounded-sm animate-pulse"></div>
</div>

<div className="hidden shrink-0 bg-zinc-50 w-10 h-10 border-zinc-200 border rounded-full items-center justify-center" id="content-1-aura-emmzep8gt14kbguo5">
<svg className="w-5 h-5 text-zinc-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
<path d="M15 18H9"></path>
<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
<circle cx="17" cy="18" r="2"></circle>
<circle cx="7" cy="18" r="2"></circle>
</svg>
</div>
<div className="hidden" id="content-2-aura-emmzep8gt14kbguo5">
<div className="flex flex-col sm:flex-row gap-1 sm:gap-3 sm:items-center items-start">
<div className="cursor-help group/tooltip inline-flex gap-1.5 text-base text-zinc-900 relative items-center" role="button">
                Lead Time: 7 Days
                <iconify-icon className="text-zinc-500 text-base" icon="lucide:info" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[220px] p-3 bg-white border border-zinc-200 text-sm font-medium text-zinc-900 text-center shadow-lg rounded-sm opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20 cursor-default">
                  Expected to ship within 7 days of ordering.
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-white border-t-[6px] border-x-transparent border-x-[6px] border-b-0 drop-shadow-sm"></div>
</div>
</div>
<div className="w-full sm:w-px h-px sm:h-4 bg-zinc-300 shrink-0"></div>
<div className="text-base text-zinc-700">Qty. Available 3,934</div>
<div className="w-full sm:w-px h-px sm:h-4 bg-zinc-300 shrink-0"></div>
<button className="hover:underline flex gap-1 text-base text-[#1879C3] items-center" onclick="document.getElementById('shipping-modal-emmzd').classList.remove('hidden'); if(window.lucide) { window.lucide.createIcons(); }">
                Shipping Information
                <div className="hidden fixed inset-0 z-[100] flex items-center justify-center bg-black/50 cursor-default no-underline hover:no-underline text-left" id="shipping-modal-emmzd" onclick="event.stopPropagation(); this.classList.add('hidden')">
<div className="bg-white w-full max-w-4xl shadow-xl flex flex-col max-h-[90vh] mx-4 rounded-sm" onclick="event.stopPropagation()">
<div className="bg-[#1a3668] text-white px-8 py-6 flex justify-between items-center rounded-t-sm">
<h2 className="text-3xl font-light tracking-tight text-white m-0 normal-case">
                        Shipping Information
                      </h2>
<div className="cursor-pointer hover:text-zinc-300 transition-colors p-1" onclick="document.getElementById('shipping-modal-emmzd').classList.add('hidden')">
<i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</div>
</div>
<div className="p-8 overflow-y-auto text-zinc-700 text-base space-y-6 normal-case tracking-normal">
<p className="leading-relaxed m-0">
                        If your order is placed by 2pm EST (Mon. - Fri., local
                        time) with the item in stock, qualifying items will be
                        shipped out the same day. Unless otherwise requested
                        by the buyer, all material will be economically
                        shipped via carriers of our choice with shipping,
                        handling and packaging charges prepaid and added to
                        the invoice.
                      </p>
<div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">
                          Lead Time
                        </h3>
<p className="leading-relaxed m-0 mb-4">
                          This is the estimated time in business days until a
                          product is available for shipment to you from our
                          warehouse.
                        </p>
<p className="leading-relaxed m-0">
                          If you place an order for an item that is currently
                          not in stock (has an estimated lead time on our
                          website), we will ship your order as soon as the
                          item is available in our warehouse. If you have
                          questions or require immediate assistance, please
                          call our customer support line
                          <a className="text-[#1879C3] hover:underline" href="tel:800-507-9651" onclick="event.stopPropagation()">
                            800-507-9651
                          </a>
                          or email us at
                          <a className="text-[#1879C3] hover:underline" href="mailto:sales@hydraulic-supply.com" onclick="event.stopPropagation()">
                            sales@hydraulic-supply.com
                          </a>
                          .
                        </p>
</div>
<div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">
                          In Stock - Ready To Ship
                        </h3>
<p className="leading-relaxed m-0">
                          Items leave the warehouse in less than 1 business
                          day (24 hours). If your order is placed by 2pm EST
                          (Mon. - Fri., local time) with the item in stock,
                          qualifying items will be shipped out the same day.
                        </p>
</div>
<div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">
                          Partial Quantity Availability
                        </h3>
<p className="leading-relaxed m-0">
                          If only a partial quantity of an item is available
                          for shipping, the delivery estimate will be based on
                          the available quantity. The remaining quantity will
                          be shipped once it is replenished.
                        </p>
</div>
<div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">
                          Shipping Insurance
                        </h3>
<p className="leading-relaxed m-0">
                          If you require insurance on your order please
                          contact our customer service team -
                          <a className="text-[#1879C3] hover:underline" href="tel:800-507-9651" onclick="event.stopPropagation()">
                            800-507-9651
                          </a>
                          ,
                          <a className="text-[#1879C3] hover:underline" href="mailto:sales@hydraulic-supply.com" onclick="event.stopPropagation()">
                            sales@hydraulic-supply.com
                          </a>
                          . We only insure shipments if specifically requested
                          by the buyer, with insurance charges prepaid and
                          added to the invoice.
                        </p>
</div>
</div>
</div>
</div>
</button>
</div>
<button aria-hidden="true" className="hidden" style={{display: 'none'}}></button>
<div className="text-sm text-zinc-500 mt-1">
              Need it Sooner:
              <span className="text-zinc-900">Call 800-507-9651</span>
</div>
</div>

</div>

<div className="flex gap-4 mb-10 gap-x-4 gap-y-4 items-end" data-skeleton-load="true">

<div className="flex flex-col gap-1.5" id="skel-1-actions">
<div className="h-6 w-16 bg-zinc-200 rounded-sm animate-pulse"></div>
<div className="w-20 h-12 bg-zinc-200 rounded-sm animate-pulse"></div>
</div>
<div className="w-[310px] h-12 bg-zinc-200 rounded-sm animate-pulse" id="skel-2-actions"></div>

<div className="hidden flex-col gap-1.5" id="content-1-actions">
<label className="text-base text-zinc-700" htmlFor="qty">Quantity</label>
<div className="relative">
<input className="w-20 h-12 border border-zinc-200 rounded-sm text-center text-lg text-zinc-900 focus:ring-1 focus:ring-[#1879C3] focus:border-[#1879C3] outline-none transition-shadow" id="qty" min="1" type="number" value="1"/>
</div>
</div>
<button className="hidden w-[310px] hover:bg-[#1463a0] transition-all gap-2 active:transform active:scale-[0.98] text-lg text-white bg-[#1879C3] h-12 rounded-sm gap-x-2 gap-y-2 items-center justify-center" id="content-2-actions">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear"></iconify-icon>
            Add to Cart
          </button>
<div className="flex h-10 mb-1 ml-auto items-center"></div>

</div>

<div className="flex flex-col gap-6 border-zinc-200 border-t pt-8">
<div className="flex items-center justify-between">
<h2 className="text-xl font-medium text-zinc-900 tracking-tight">
              Description &amp; Features
            </h2>
</div>
<div className="prose prose-zinc max-w-none text-zinc-600 leading-relaxed text-base">
<p className="text-lg text-zinc-900 mb-2">PISTON ORING</p>
<p className="">
              Designed for durability and precise fitment in high-pressure
              hydraulic applications. Manufactured to exact inch
              specifications ensuring optimal seal performance and longevity.
            </p>
</div>
</div>
</div>
</div>

<div className="flex flex-col mt-20 pt-2">

<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 items-start">

<div className="lg:col-span-3 relative">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-8">
            Specifications
          </h2>
<div className="w-full relative">
<div className="w-full relative overflow-hidden transition-[max-height] duration-500 ease-in-out" id="specs-content" style={{maxHeight: '400px'}}>
<dl className="flex flex-col divide-y divide-zinc-200 border-zinc-200 border rounded-sm gap-x-2 gap-y-2">

<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 hover:bg-zinc-50 transition-colors bg-white pt-3 pr-5 pb-3 pl-5 gap-x-2 gap-y-2">
<dt className="text-sm text-zinc-900 font-medium">Application</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">General purpose low and medium pressure hydraulics. Use H277 or H435 where shock hazards exist</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">D</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">1.46</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">Brand</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">Danfoss Power Solutions (II LLC Aeroquip)</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">Pack Size</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">1.00</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 hover:bg-zinc-50 transition-colors bg-white pt-3 pr-5 pb-3 pl-5 gap-x-2 gap-y-2">
<dt className="text-sm text-zinc-900 font-medium">UOM</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">EA</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 hover:bg-zinc-50 transition-colors bg-white pt-3 pr-5 pb-3 pl-5 gap-x-2 gap-y-2">
<dt className="text-sm text-zinc-900 font-medium">End Gender 1</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">13553</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">End Size 1</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">0.75</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">End Size 2</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">0.50</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">End Type 1</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">JIC 37</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">End Type 2</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">Line/Hose/Tube</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">Hex Size 2</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">0.87</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">Hose Size</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">-08</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">Mandrel Required</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">No</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">Supplier Part Number</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">1AA8FJ8</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">Thread 1</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">3/4-16</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">Thread Sealant</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">No</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">Torque Rating</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">44-48 LB/FT</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">Alternate Part Numbers</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">C1AQ62, FMC620-1023, MI-00302101, MINO-00015F50843</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">Product Weight</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">0.26 lbs</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">Operating Temperature</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">-40°F to +212°F</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">Max Operating Pressure</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">3000 PSI</dd>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-3 px-5 bg-white hover:bg-zinc-50 transition-colors">
<dt className="text-sm text-zinc-900 font-medium">Max Burst Pressure</dt>
<dd className="text-sm text-zinc-600 sm:col-span-2">12000 PSI</dd>
</div>
</dl>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none transition-opacity duration-300" id="specs-gradient"></div>
</div>
<div className="flex mt-4 justify-center w-full">
<button className="flex gap-2 hover:bg-zinc-50 hover:border-zinc-300 hover:text-[#1879C3] transition-all outline-none active:scale-[0.98] text-sm font-medium text-zinc-700 bg-white border-zinc-200 border rounded-sm pt-2.5 pr-6 pb-2.5 pl-6 shadow-sm gap-x-2 gap-y-2 items-center" onclick="const c = document.getElementById('specs-content'); const g = document.getElementById('specs-gradient'); const t = this.querySelector('span'); const i = this.querySelector('iconify-icon'); if (c.style.maxHeight === '400px') { c.style.maxHeight = '3000px'; g.classList.add('opacity-0'); t.textContent = 'See Less'; i.setAttribute('icon', 'solar:alt-arrow-up-linear'); } else { c.style.maxHeight = '400px'; g.classList.remove('opacity-0'); t.textContent = 'See More'; i.setAttribute('icon', 'solar:alt-arrow-down-linear'); }" type="button">
<span className="">See More Specs</span>
<iconify-icon className="text-base" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:col-span-1 bg-zinc-50 border border-zinc-200 rounded-sm p-6 sm:p-8">
<h2 className="text-xl font-medium text-zinc-900 tracking-tight mb-6">
            Related Documents
          </h2>
<div className="w-full">
<ul className="flex flex-col gap-5">
<li className="flex items-center gap-3 group">
<svg className="text-zinc-400 shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
<a className="text-base text-[#1879C3] hover:text-[#1463a0] hover:underline decoration-1 underline-offset-2 transition-colors" href="#">
                  Supplier Documentation Link
                </a>
</li>
<li className="flex items-center gap-3 group">
<svg className="text-red-500 shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<line x1="10" x2="8" y1="9" y2="9"></line>
</svg>
<a className="text-base text-[#1879C3] hover:text-[#1463a0] hover:underline decoration-1 underline-offset-2 transition-colors" href="#">
                  Catalog 1
                </a>
</li>
<li className="flex items-center gap-3 group">
<svg className="text-red-500 shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<line x1="10" x2="8" y1="9" y2="9"></line>
</svg>
<a className="text-base text-[#1879C3] hover:text-[#1463a0] hover:underline decoration-1 underline-offset-2 transition-colors" href="#">
                  Fluid Compatibility 1
                </a>
</li>
</ul>
</div>
</div>
</div>

<div className="border-zinc-200 border-t pt-16">

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 bg-zinc-50 border border-zinc-200 p-4 rounded-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#1879C3]/10 flex items-center justify-center text-[#1879C3] shrink-0">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m2 12 5.25 5 2.625-3M8 12l5.25 5L22 7"></path>
<path d="m16 7-5.25 5-2.625-3"></path>
</svg>
</div>
<div className="">
<span className="text-sm font-medium text-zinc-900 block">
                Stakeholder Presentation Tool
              </span>
<span className="text-xs text-zinc-500">
                Toggle between UI states to review designs
              </span>
</div>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="px-4 py-2 text-sm font-medium bg-white border border-zinc-200 rounded-sm text-zinc-700 hover:text-[#1879C3] hover:border-zinc-300 transition-all shadow-sm" onclick="document.getElementById('state-1').classList.remove('hidden'); document.getElementById('state-2').classList.add('hidden'); document.getElementById('state-2-5').classList.add('hidden');">
              Empty State
            </button>
<button className="hover:text-[#1879C3] hover:border-zinc-300 transition-all text-sm font-medium text-zinc-700 bg-white border-zinc-200 border rounded-sm pt-2 pr-4 pb-2 pl-4 shadow-sm" onclick="document.getElementById('state-1').classList.add('hidden'); document.getElementById('state-2').classList.remove('hidden'); document.getElementById('state-2-5').classList.add('hidden');">
              Populated Q&amp;A
            </button>
<button className="px-4 py-2 text-sm font-medium bg-white border border-zinc-200 rounded-sm text-zinc-700 hover:text-[#1879C3] hover:border-zinc-300 transition-all shadow-sm" onclick="document.getElementById('state-1').classList.add('hidden'); document.getElementById('state-2').classList.add('hidden'); document.getElementById('state-2-5').classList.remove('hidden');">
              Question Form
            </button>
</div>
</div>

<div className="">

<div className="block" id="state-1">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-8">
              Product Questions &amp; Answers
            </h2>
<div className="max-w-4xl bg-zinc-50 border border-zinc-200 rounded-sm p-10 text-center flex flex-col items-center justify-center">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-zinc-200 mb-5 shadow-sm">
<svg className="w-6 h-6 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
<path d="M12 17h.01"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">
                No Questions Yet
              </h3>
<p className="text-base text-zinc-500 mb-8 max-w-sm">
                Have a question about this product? Be the first to ask and
                our experts will provide you with an answer.
              </p>
<button className="bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-900 px-6 py-2.5 text-base rounded-sm shadow-sm transition-all" onclick="document.getElementById('state-1').classList.add('hidden'); document.getElementById('state-2').classList.add('hidden'); document.getElementById('state-2-5').classList.remove('hidden');">
                Ask a Question
              </button>
</div>
</div>

<div className="hidden" id="state-2">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight">
                Product Questions &amp; Answers
                <span className="text-lg text-zinc-500 font-normal ml-2">
                  (2)
                </span>
</h2>
<button className="bg-[#1879C3] hover:bg-[#1463a0] text-white px-6 py-2.5 text-base font-medium rounded-sm shadow-sm transition-all active:scale-[0.98]" onclick="document.getElementById('state-1').classList.add('hidden'); document.getElementById('state-2').classList.add('hidden'); document.getElementById('state-2-5').classList.remove('hidden');">
                Ask a Question
              </button>
</div>
<div className="border border-zinc-200 bg-white rounded-sm shadow-sm divide-y divide-zinc-200">

<div className="p-6">
<div className="flex items-start gap-4">
<button className="mt-0.5 flex-shrink-0 w-6 h-6 border border-zinc-300 rounded-sm flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1879C3] focus:ring-offset-1" onclick="this.parentElement.parentElement.querySelector('.answer-block').classList.toggle('hidden'); const icon = this.querySelector('i'); if(icon.getAttribute('data-lucide') === 'chevron-down') { icon.setAttribute('data-lucide', 'chevron-right'); } else { icon.setAttribute('data-lucide', 'chevron-down'); } lucide.createIcons();">
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="flex-grow">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1">
<div className="text-sm text-zinc-500">
                        Question by: Wayne T on Aug 11, 2025, 5:58 PM
                      </div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1.5 text-sm font-medium text-green-600">
<i className="w-4 h-4 fill-green-600 text-green-600" data-lucide="thumbs-up" strokeWidth="1.5"></i>
                          1
                        </button>
<button className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-4 h-4" data-lucide="thumbs-down" strokeWidth="1.5"></i>
                          0
                        </button>
</div>
</div>
<div className="text-base text-zinc-900 mb-6">
                      can this fitting work with both 1 wire and 2 wire braided hose or just one type
                    </div>
<div className="answer-block pl-4 sm:pl-6">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1">
<div className="text-sm text-zinc-500">
                          Answer by: Customer Support on Aug 13, 2025, 7:06 AM
                        </div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-4 h-4" data-lucide="thumbs-up" strokeWidth="1.5"></i>
                            0
                          </button>
<button className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-4 h-4" data-lucide="thumbs-down" strokeWidth="1.5"></i>
                            0
                          </button>
</div>
</div>
<div className="text-base text-zinc-700 leading-relaxed">
                        Both types work fine with this crimp fitting. The Global TTC design handles standard 1 wire braid and 2 wire braid steel hose equally well when you're working with -08 size hose. Just make sure your crimping die matches the fitting specs and you'll get a solid connection either way.
                      </div>
</div>
</div>
</div>
</div>

<div className="p-6">
<div className="flex items-start gap-4">
<button className="mt-0.5 flex-shrink-0 w-6 h-6 border border-zinc-300 rounded-sm flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1879C3] focus:ring-offset-1" onclick="this.parentElement.parentElement.querySelector('.answer-block').classList.toggle('hidden'); const icon = this.querySelector('i'); if(icon.getAttribute('data-lucide') === 'chevron-down') { icon.setAttribute('data-lucide', 'chevron-right'); } else { icon.setAttribute('data-lucide', 'chevron-down'); } lucide.createIcons();">
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="flex-grow">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1">
<div className="text-sm text-zinc-500">
                        Question by: Brent T on Nov 18, 2025, 9:03 AM
                      </div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-4 h-4" data-lucide="thumbs-up" strokeWidth="1.5"></i>
                          0
                        </button>
<button className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-4 h-4" data-lucide="thumbs-down" strokeWidth="1.5"></i>
                          0
                        </button>
</div>
</div>
<div className="text-base text-zinc-900 mb-6">
                      Will this fitting work with a standard -08 hose, or is there a specific kind I need to get?
                    </div>
<div className="answer-block pl-4 sm:pl-6">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1">
<div className="text-sm text-zinc-500">
                          Answer by: Customer Support on Nov 19, 2025, 3:52 PM
                        </div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1.5 text-sm font-medium text-green-600">
<i className="w-4 h-4 fill-green-600 text-green-600" data-lucide="thumbs-up" strokeWidth="1.5"></i>
                            1
                          </button>
<button className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-4 h-4" data-lucide="thumbs-down" strokeWidth="1.5"></i>
                            0
                          </button>
</div>
</div>
<div className="text-base text-zinc-700 leading-relaxed">
                        This crimp fitting is made for -08 hose, so you should be good to go with any standard hose of that size. Just double-check the specs on your hose to be sure it's compatible with a steel crimp fitting.
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden" id="state-2-5">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight">
                Product Questions &amp; Answers
                <span className="text-lg text-zinc-500 font-normal ml-2">
                  (2)
                </span>
</h2>
</div>
<div className="border border-zinc-200 rounded-sm p-6 sm:p-8 bg-zinc-50 mb-8">
<form className="space-y-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-zinc-900">
                    Name
                    <span className="text-red-500">*</span>
</label>
<input className="w-full h-11 border border-zinc-300 rounded-sm px-4 text-base focus:ring-1 focus:ring-[#1879C3] focus:border-[#1879C3] outline-none shadow-sm transition-shadow bg-white" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-zinc-900">
                    Email Address
                    <span className="text-red-500">*</span>
</label>
<input className="w-full h-11 border border-zinc-300 rounded-sm px-4 text-base focus:ring-1 focus:ring-[#1879C3] focus:border-[#1879C3] outline-none shadow-sm transition-shadow bg-white" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-zinc-900">
                    Question
                    <span className="text-red-500">*</span>
</label>
<textarea className="w-full h-32 border border-zinc-300 rounded-sm p-4 text-base focus:ring-1 focus:ring-[#1879C3] focus:border-[#1879C3] outline-none shadow-sm transition-shadow bg-white resize-y" required=""></textarea>
</div>
<div className="flex items-center pt-1">
<label className="flex items-center gap-2.5 cursor-pointer group w-fit">
<div className="relative flex items-center justify-center w-[18px] h-[18px]">
<input className="peer sr-only" type="checkbox"/>
<div className="w-[18px] h-[18px] bg-white border border-zinc-300 rounded-[3px] peer-checked:bg-[#1879C3] peer-checked:border-[#1879C3] group-hover:border-zinc-400 transition-colors"></div>
<svg className="absolute w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors">
                      Private Question
                    </span>
</label>
</div>
<div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
<button className="bg-[#1879C3] hover:bg-[#1463a0] text-white px-6 py-2.5 text-base font-medium rounded-sm shadow-sm transition-all active:scale-[0.98] w-full sm:w-auto" type="button">
                    Ask Question
                  </button>
<button className="bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 px-6 py-2.5 text-base font-medium rounded-sm shadow-sm transition-all active:scale-[0.98] w-full sm:w-auto" onclick="this.form.reset(); document.getElementById('state-1').classList.add('hidden'); document.getElementById('state-2').classList.remove('hidden'); document.getElementById('state-2-5').classList.add('hidden');" type="button">
                    Cancel
                  </button>
</div>
</form>
</div>

<div className="border border-zinc-200 bg-white rounded-sm shadow-sm divide-y divide-zinc-200">

<div className="p-6">
<div className="flex items-start gap-4">
<button className="mt-0.5 flex-shrink-0 w-6 h-6 border border-zinc-300 rounded-sm flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1879C3] focus:ring-offset-1" onclick="this.parentElement.parentElement.querySelector('.answer-block').classList.toggle('hidden'); const icon = this.querySelector('i'); if(icon.getAttribute('data-lucide') === 'chevron-down') { icon.setAttribute('data-lucide', 'chevron-right'); } else { icon.setAttribute('data-lucide', 'chevron-down'); } lucide.createIcons();">
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="flex-grow">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1">
<div className="text-sm text-zinc-500">
                        Question by: Wayne T on Aug 11, 2025, 5:58 PM
                      </div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1.5 text-sm font-medium text-green-600">
<i className="w-4 h-4 fill-green-600 text-green-600" data-lucide="thumbs-up" strokeWidth="1.5"></i>
                          1
                        </button>
<button className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-4 h-4" data-lucide="thumbs-down" strokeWidth="1.5"></i>
                          0
                        </button>
</div>
</div>
<div className="text-base text-zinc-900 mb-6">
                      can this fitting work with both 1 wire and 2 wire braided hose or just one type
                    </div>
<div className="answer-block pl-4 sm:pl-6">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1">
<div className="text-sm text-zinc-500">
                          Answer by: Customer Support on Aug 13, 2025, 7:06 AM
                        </div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-4 h-4" data-lucide="thumbs-up" strokeWidth="1.5"></i>
                            0
                          </button>
<button className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-4 h-4" data-lucide="thumbs-down" strokeWidth="1.5"></i>
                            0
                          </button>
</div>
</div>
<div className="text-base text-zinc-700 leading-relaxed">
                        Both types work fine with this crimp fitting. The Global TTC design handles standard 1 wire braid and 2 wire braid steel hose equally well when you're working with -08 size hose. Just make sure your crimping die matches the fitting specs and you'll get a solid connection either way.
                      </div>
</div>
</div>
</div>
</div>

<div className="p-6">
<div className="flex items-start gap-4">
<button className="mt-0.5 flex-shrink-0 w-6 h-6 border border-zinc-300 rounded-sm flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1879C3] focus:ring-offset-1" onclick="this.parentElement.parentElement.querySelector('.answer-block').classList.toggle('hidden'); const icon = this.querySelector('i'); if(icon.getAttribute('data-lucide') === 'chevron-down') { icon.setAttribute('data-lucide', 'chevron-right'); } else { icon.setAttribute('data-lucide', 'chevron-down'); } lucide.createIcons();">
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="flex-grow">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1">
<div className="text-sm text-zinc-500">
                        Question by: Brent T on Nov 18, 2025, 9:03 AM
                      </div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-4 h-4" data-lucide="thumbs-up" strokeWidth="1.5"></i>
                          0
                        </button>
<button className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-4 h-4" data-lucide="thumbs-down" strokeWidth="1.5"></i>
                          0
                        </button>
</div>
</div>
<div className="text-base text-zinc-900 mb-6">
                      Will this fitting work with a standard -08 hose, or is there a specific kind I need to get?
                    </div>
<div className="answer-block pl-4 sm:pl-6">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1">
<div className="text-sm text-zinc-500">
                          Answer by: Customer Support on Nov 19, 2025, 3:52 PM
                        </div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1.5 text-sm font-medium text-green-600">
<i className="w-4 h-4 fill-green-600 text-green-600" data-lucide="thumbs-up" strokeWidth="1.5"></i>
                            1
                          </button>
<button className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-4 h-4" data-lucide="thumbs-down" strokeWidth="1.5"></i>
                            0
                          </button>
</div>
</div>
<div className="text-base text-zinc-700 leading-relaxed">
                        This crimp fitting is made for -08 hose, so you should be good to go with any standard hose of that size. Just double-check the specs on your hose to be sure it's compatible with a steel crimp fitting.
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-zinc-200 border-t mt-16 pt-10">
<div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 gap-x-4 gap-y-4 justify-between">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight">
          Similar Products
        </h2>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="pl-9 pr-4 py-2 text-base border border-zinc-200 rounded-sm focus:outline-none focus:border-[#1879C3] focus:ring-1 focus:ring-[#1879C3] transition-shadow w-full sm:w-64 text-zinc-900" placeholder="Search similar..." type="text"/>
</div>
<div className="flex items-center gap-2">
<label className="text-base text-zinc-500 whitespace-nowrap" htmlFor="show-items">
              Show
            </label>
<div className="relative">
<select className="border border-zinc-200 rounded-sm py-1.5 pl-3 pr-8 focus:outline-none focus:border-[#1879C3] focus:ring-1 focus:ring-[#1879C3] appearance-none bg-white cursor-pointer text-base text-zinc-900" id="show-items">
<option selected="" value="10">10</option>
<option value="20">20</option>
<option value="50">50</option>
</select>
<iconify-icon className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<span className="text-base text-zinc-500 whitespace-nowrap">
              per page
            </span>
</div>
</div>
</div>
<div className="w-full overflow-x-auto border border-zinc-200 rounded-sm">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead className="">
<tr className="bg-zinc-50 border-b border-zinc-200">
<th className="uppercase text-sm text-zinc-500 tracking-wider w-[30%] pt-4 pr-5 pb-4 pl-5">Product</th>
<th className="py-4 px-5 text-sm text-zinc-500 uppercase tracking-wider">OD</th>
<th className="py-4 px-5 text-sm text-zinc-500 uppercase tracking-wider">Width</th>
<th className="py-4 px-5 text-sm text-zinc-500 uppercase tracking-wider">Thickness</th>
<th className="py-4 px-5 text-sm text-zinc-500 uppercase tracking-wider">Price</th>
<th className="py-4 px-5 text-sm text-zinc-500 uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-200 text-base">

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="py-4 px-5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shrink-0 p-1">
<img alt="SPR-4500" className="w-full h-full object-contain mix-blend-multiply" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
<div className="flex flex-col">
<a className="text-base text-zinc-900 group-hover:text-[#1879C3] transition-colors" href="#">SPR-4500</a>
<span className="text-sm text-zinc-500 truncate max-w-[180px]">Cast Iron Piston Ring</span>
</div>
</div>
</td>
<td className="py-4 px-5 text-zinc-600">4.500 in</td>
<td className="py-4 px-5 text-zinc-600">0.187 in</td>
<td className="py-4 px-5 text-zinc-600">0.140 in</td>
<td className="py-4 px-5 text-zinc-900 font-medium">$12.50</td>
<td className="py-4 px-5 text-right">
<button className="hover:bg-[#1463a0] flex transition-all focus:outline-none focus:ring-2 focus:ring-[#1879C3] focus:ring-offset-1 text-white bg-[#1879C3] w-9 h-9 rounded-sm ml-auto items-center justify-center">
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="py-4 px-5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shrink-0 p-1">
<img alt="SPR-3500" className="w-full h-full object-contain mix-blend-multiply" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
<div className="flex flex-col">
<a className="text-base text-zinc-900 group-hover:text-[#1879C3] transition-colors" href="#">SPR-3500</a>
<span className="text-sm text-zinc-500 truncate max-w-[180px]">Cast Iron Piston Ring</span>
</div>
</div>
</td>
<td className="py-4 px-5 text-zinc-600">3.500 in</td>
<td className="py-4 px-5 text-zinc-600">0.187 in</td>
<td className="py-4 px-5 text-zinc-600">0.140 in</td>
<td className="py-4 px-5 text-zinc-900 font-medium">$9.80</td>
<td className="py-4 px-5 text-right">
<button className="ml-auto w-9 h-9 rounded-sm bg-[#1879C3] text-white hover:bg-[#1463a0] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1879C3] focus:ring-offset-1">
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="py-4 px-5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shrink-0 p-1">
<img alt="SPR-3000" className="w-full h-full object-contain mix-blend-multiply" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
<div className="flex flex-col">
<a className="text-base text-zinc-900 group-hover:text-[#1879C3] transition-colors" href="#">SPR-3000</a>
<span className="text-sm text-zinc-500 truncate max-w-[180px]">Cast Iron Piston Ring</span>
</div>
</div>
</td>
<td className="py-4 px-5 text-zinc-600">3.000 in</td>
<td className="py-4 px-5 text-zinc-600">0.187 in</td>
<td className="py-4 px-5 text-zinc-600">0.140 in</td>
<td className="py-4 px-5 text-zinc-900 font-medium">$8.50</td>
<td className="py-4 px-5 text-right">
<button className="ml-auto w-9 h-9 rounded-sm bg-[#1879C3] text-white hover:bg-[#1463a0] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1879C3] focus:ring-offset-1">
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="py-4 px-5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shrink-0 p-1">
<img alt="SPR-2500" className="w-full h-full object-contain mix-blend-multiply" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
<div className="flex flex-col">
<a className="text-base text-zinc-900 group-hover:text-[#1879C3] transition-colors" href="#">SPR-2500</a>
<span className="text-sm text-zinc-500 truncate max-w-[180px]">Cast Iron Piston Ring</span>
</div>
</div>
</td>
<td className="py-4 px-5 text-zinc-600">2.500 in</td>
<td className="py-4 px-5 text-zinc-600">0.187 in</td>
<td className="py-4 px-5 text-zinc-600">0.140 in</td>
<td className="py-4 px-5 text-zinc-900 font-medium">$7.20</td>
<td className="py-4 px-5 text-right">
<button className="ml-auto w-9 h-9 rounded-sm bg-[#1879C3] text-white hover:bg-[#1463a0] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1879C3] focus:ring-offset-1">
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="py-4 px-5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shrink-0 p-1">
<img alt="SPR-2000" className="w-full h-full object-contain mix-blend-multiply" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
<div className="flex flex-col">
<a className="text-base text-zinc-900 group-hover:text-[#1879C3] transition-colors" href="#">SPR-2000</a>
<span className="text-sm text-zinc-500 truncate max-w-[180px]">Cast Iron Piston Ring</span>
</div>
</div>
</td>
<td className="py-4 px-5 text-zinc-600">2.000 in</td>
<td className="py-4 px-5 text-zinc-600">0.187 in</td>
<td className="py-4 px-5 text-zinc-600">0.140 in</td>
<td className="py-4 px-5 text-zinc-900 font-medium">$6.50</td>
<td className="py-4 px-5 text-right">
<button className="ml-auto w-9 h-9 rounded-sm bg-[#1879C3] text-white hover:bg-[#1463a0] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1879C3] focus:ring-offset-1">
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="py-4 px-5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shrink-0 p-1">
<img alt="SPR-5000" className="w-full h-full object-contain mix-blend-multiply" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
<div className="flex flex-col">
<a className="text-base text-zinc-900 group-hover:text-[#1879C3] transition-colors" href="#">SPR-5000</a>
<span className="text-sm text-zinc-500 truncate max-w-[180px]">Cast Iron Piston Ring</span>
</div>
</div>
</td>
<td className="py-4 px-5 text-zinc-600">5.000 in</td>
<td className="py-4 px-5 text-zinc-600">0.250 in</td>
<td className="py-4 px-5 text-zinc-600">0.180 in</td>
<td className="py-4 px-5 text-zinc-900 font-medium">$14.20</td>
<td className="py-4 px-5 text-right">
<button className="ml-auto w-9 h-9 rounded-sm bg-[#1879C3] text-white hover:bg-[#1463a0] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1879C3] focus:ring-offset-1">
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="py-4 px-5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shrink-0 p-1">
<img alt="SPR-5500" className="w-full h-full object-contain mix-blend-multiply" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
<div className="flex flex-col">
<a className="text-base text-zinc-900 group-hover:text-[#1879C3] transition-colors" href="#">SPR-5500</a>
<span className="text-sm text-zinc-500 truncate max-w-[180px]">Cast Iron Piston Ring</span>
</div>
</div>
</td>
<td className="py-4 px-5 text-zinc-600">5.500 in</td>
<td className="py-4 px-5 text-zinc-600">0.250 in</td>
<td className="py-4 px-5 text-zinc-600">0.180 in</td>
<td className="py-4 px-5 text-zinc-900 font-medium">$15.80</td>
<td className="py-4 px-5 text-right">
<button className="ml-auto w-9 h-9 rounded-sm bg-[#1879C3] text-white hover:bg-[#1463a0] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1879C3] focus:ring-offset-1">
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="py-4 px-5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shrink-0 p-1">
<img alt="SPR-6000" className="w-full h-full object-contain mix-blend-multiply" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
<div className="flex flex-col">
<a className="text-base text-zinc-900 group-hover:text-[#1879C3] transition-colors" href="#">SPR-6000</a>
<span className="text-sm text-zinc-500 truncate max-w-[180px]">Cast Iron Piston Ring</span>
</div>
</div>
</td>
<td className="py-4 px-5 text-zinc-600">6.000 in</td>
<td className="py-4 px-5 text-zinc-600">0.250 in</td>
<td className="py-4 px-5 text-zinc-600">0.180 in</td>
<td className="py-4 px-5 text-zinc-900 font-medium">$18.50</td>
<td className="py-4 px-5 text-right">
<button className="ml-auto w-9 h-9 rounded-sm bg-[#1879C3] text-white hover:bg-[#1463a0] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1879C3] focus:ring-offset-1">
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="py-4 px-5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shrink-0 p-1">
<img alt="SPR-1500" className="w-full h-full object-contain mix-blend-multiply" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
<div className="flex flex-col">
<a className="text-base text-zinc-900 group-hover:text-[#1879C3] transition-colors" href="#">SPR-1500</a>
<span className="text-sm text-zinc-500 truncate max-w-[180px]">Cast Iron Piston Ring</span>
</div>
</div>
</td>
<td className="py-4 px-5 text-zinc-600">1.500 in</td>
<td className="py-4 px-5 text-zinc-600">0.125 in</td>
<td className="py-4 px-5 text-zinc-600">0.090 in</td>
<td className="py-4 px-5 text-zinc-900 font-medium">$4.50</td>
<td className="py-4 px-5 text-right">
<button className="ml-auto w-9 h-9 rounded-sm bg-[#1879C3] text-white hover:bg-[#1463a0] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1879C3] focus:ring-offset-1">
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="py-4 px-5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shrink-0 p-1">
<img alt="SPR-1000" className="w-full h-full object-contain mix-blend-multiply" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
<div className="flex flex-col">
<a className="text-base text-zinc-900 group-hover:text-[#1879C3] transition-colors" href="#">SPR-1000</a>
<span className="text-sm text-zinc-500 truncate max-w-[180px]">Cast Iron Piston Ring</span>
</div>
</div>
</td>
<td className="py-4 px-5 text-zinc-600">1.000 in</td>
<td className="py-4 px-5 text-zinc-600">0.125 in</td>
<td className="py-4 px-5 text-zinc-600">0.090 in</td>
<td className="py-4 px-5 text-zinc-900 font-medium">$3.20</td>
<td className="py-4 px-5 text-right">
<button className="ml-auto w-9 h-9 rounded-sm bg-[#1879C3] text-white hover:bg-[#1463a0] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#1879C3] focus:ring-offset-1">
<iconify-icon className="text-xl" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4 border-t border-zinc-200 pt-6">
<div className="text-base text-zinc-500">
          Showing <span className="text-zinc-900">1</span> to <span className="text-zinc-900">10</span> of <span className="text-zinc-900">24</span> similar products
        </div>
<nav aria-label="Pagination" className="flex items-center gap-2">
<button className="w-9 h-9 flex items-center justify-center rounded-sm border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled="">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-sm border border-[#1879C3] bg-[#1879C3] text-white text-sm transition-colors">1</button>
<button className="w-9 h-9 flex items-center justify-center rounded-sm border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 text-sm transition-colors">2</button>
<button className="w-9 h-9 flex items-center justify-center rounded-sm border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 text-sm transition-colors">3</button>
<button className="w-9 h-9 flex items-center justify-center rounded-sm border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</nav>
</div>
</div>

<div className="border-zinc-200 border-t mt-20 pt-16">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight text-left mb-8">
        Customer Reviews
      </h2>
<div className="max-w-4xl mx-auto bg-zinc-50 border border-zinc-200 rounded-sm p-10 text-center flex flex-col items-center justify-center">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-zinc-200 mb-5 shadow-sm">
<svg className="w-6 h-6 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">
          No Reviews Yet
        </h3>
<p className="text-base text-zinc-500 mb-8 max-w-sm">
          Have an opinion on this product? Be the first to write a review and share your thoughts with others.
        </p>
<button className="bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-900 px-6 py-2.5 text-base rounded-sm shadow-sm transition-all outline-none">
          Write a Review
        </button>
</div>
</div>

<div className="border-zinc-200 border-t mt-20 mb-10 pt-16">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight">
          Customers Who Bought This Item Also Bought
        </h2>

<div className="hidden sm:flex gap-2 items-center">
<button className="flex hover:text-zinc-900 hover:border-zinc-300 transition-colors focus:outline-none text-zinc-500 bg-white w-10 h-10 border-zinc-200 border rounded-sm items-center justify-center" onclick="const p = this.closest('.border-t'); const c = p ? p.querySelector('.overflow-x-auto') : null; if(c) c.scrollBy({left: -304, behavior: 'smooth'});">
<iconify-icon className="text-xl" icon="lucide:chevron-left" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-10 h-10 border border-zinc-200 rounded-sm flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 bg-white transition-colors focus:outline-none" onclick="const p = this.closest('.border-t'); const c = p ? p.querySelector('.overflow-x-auto') : null; if(c) c.scrollBy({left: 304, behavior: 'smooth'});">
<iconify-icon className="text-xl" icon="lucide:chevron-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto -mx-6 sm:mx-0 sm:px-0 snap-x snap-mandatory [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pt-2 pr-6 pb-6 pl-6 gap-x-6 gap-y-6">

<div className="w-[260px] sm:w-[280px] shrink-0 snap-start flex flex-col group relative">
<div className="aspect-[4/3] bg-white w-full mb-5 relative">
<div className="absolute inset-4 flex items-center justify-center">
<img alt="Steel Adapter" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
</div>
<div className="flex flex-col flex-grow">
<a className="text-base text-zinc-900 hover:underline line-clamp-1 min-h-[24px] mb-1.5" href="#">
              Steel Adapter, 3/8-18 Male NPT ...
            </a>
<div className="text-sm text-zinc-500 uppercase min-h-[20px] mb-4">
              SKU: 2040-6-8S
            </div>
<div className="flex items-baseline gap-1 min-h-[28px] mb-4">
<span className="text-xl font-medium text-zinc-900 tracking-tight">
                $6.93
              </span>
<span className="text-sm text-zinc-500">/EA</span>
</div>
<div className="flex flex-col gap-1 min-h-[44px] mb-6">
<div className="flex items-center gap-1.5 text-sm text-zinc-900 font-medium">
                In Stock - Ready to Ship
                <div className="relative group/tooltip inline-flex items-center cursor-help">
<iconify-icon className="text-zinc-500 text-base" icon="lucide:info" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[220px] p-3 bg-white border border-zinc-200 text-sm font-medium text-zinc-900 text-center shadow-lg rounded-sm opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20">
                    Items leave the warehouse in less than 1 business day.
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-white border-t-[6px] border-x-transparent border-x-[6px] border-b-0 drop-shadow-sm"></div>
</div>
</div>
</div>
<div className="text-sm text-zinc-500">Qty. Available 23</div>
</div>
<button className="focus:outline-none text-base font-medium text-zinc-900 bg-white w-full border-zinc-200 border rounded-sm mt-auto pt-2.5 pb-2.5 flex items-center justify-center gap-2 transition-all hover:bg-[#1879C3] hover:border-[#1879C3] hover:text-white active:bg-[#1463a0] active:border-[#1463a0] active:scale-[0.98]">
<iconify-icon className="text-xl" icon="lucide:shopping-cart"></iconify-icon>
              Add to Cart
            </button>
</div>
</div>

<div className="w-[260px] sm:w-[280px] shrink-0 snap-start flex flex-col group relative">
<div className="w-full aspect-[4/3] mb-5 relative bg-white">
<div className="absolute inset-4 flex items-center justify-center">
<img alt="Steel Adapter" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
</div>
<div className="flex flex-col flex-grow">
<a className="text-base text-zinc-900 hover:underline line-clamp-1 min-h-[24px] mb-1.5" href="#">
              Steel Adapter, 1/2-14 Male NPT ...
            </a>
<div className="text-sm text-zinc-500 uppercase min-h-[20px] mb-4">
              SKU: 2040-8-12S
            </div>
<div className="flex items-baseline gap-1 min-h-[28px] mb-4">
<span className="text-xl font-medium text-zinc-900 tracking-tight">
                $11.02
              </span>
<span className="text-sm text-zinc-500">/EA</span>
</div>
<div className="flex flex-col gap-1 min-h-[44px] mb-6">
<div className="flex items-center gap-1.5 text-sm text-zinc-900 font-medium">
                In Stock - Ready to Ship
                <div className="relative group/tooltip inline-flex items-center cursor-help">
<iconify-icon className="text-zinc-500 text-base" icon="lucide:info" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[220px] p-3 bg-white border border-zinc-200 text-sm font-medium text-zinc-900 text-center shadow-lg rounded-sm opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20">
                    Items leave the warehouse in less than 1 business day.
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-white border-t-[6px] border-x-transparent border-x-[6px] border-b-0 drop-shadow-sm"></div>
</div>
</div>
</div>
<div className="text-sm text-zinc-500">Qty. Available 43</div>
</div>
<button className="focus:outline-none text-base font-medium text-zinc-900 bg-white w-full border-zinc-200 border rounded-sm mt-auto pt-2.5 pb-2.5 flex items-center justify-center gap-2 transition-all hover:bg-[#1879C3] hover:border-[#1879C3] hover:text-white active:bg-[#1463a0] active:border-[#1463a0] active:scale-[0.98]">
<iconify-icon className="text-xl" icon="lucide:shopping-cart"></iconify-icon>
              Add to Cart
            </button>
</div>
</div>

<div className="w-[260px] sm:w-[280px] shrink-0 snap-start flex flex-col group relative">
<div className="w-full aspect-[4/3] mb-5 relative bg-white">
<div className="flex flex-col text-sm font-medium text-zinc-400 bg-zinc-100/60 border-zinc-100 border absolute top-4 right-4 bottom-4 left-4 items-center justify-center">
<span className="text-4xl font-bold tracking-tighter text-zinc-300 mb-1">
                HSC
              </span>
<span className="text-center leading-tight">
                Product Image<br/>Not Available
              </span>
</div>
</div>
<div className="flex flex-col flex-grow">
<a className="text-base text-zinc-900 hover:underline line-clamp-1 min-h-[24px] mb-1.5" href="#">
              VICKERS 1PUL60P10S
            </a>
<div className="text-sm text-zinc-500 uppercase min-h-[20px] mb-4">
              SKU: 407AA00386A
            </div>
<div className="flex items-baseline gap-1 min-h-[28px] mb-4">
<span className="text-xl font-medium text-zinc-900 tracking-tight">
                $143.43
              </span>
<span className="text-sm text-zinc-500">/EA</span>
</div>
<div className="flex flex-col gap-1 min-h-[44px] mb-6">
<div className="flex items-center gap-1.5 text-sm text-zinc-900 font-medium">
                Lead Time: 30 Days
                <div className="relative group/tooltip inline-flex items-center cursor-help">
<iconify-icon className="text-zinc-500 text-base" icon="lucide:info" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[220px] p-3 bg-white border border-zinc-200 text-sm font-medium text-zinc-900 text-center shadow-lg rounded-sm opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20">
                    Expected to ship within 30 days of ordering.
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-white border-t-[6px] border-x-transparent border-x-[6px] border-b-0 drop-shadow-sm"></div>
</div>
</div>
</div>
<div className="text-sm text-zinc-500">
                Need it Sooner? Call <a className="text-[#1879C3] hover:underline" href="tel:8005079651">800-507-9651</a>
</div>
</div>
<button className="focus:outline-none text-base font-medium text-zinc-900 bg-white w-full border-zinc-200 border rounded-sm mt-auto pt-2.5 pb-2.5 flex items-center justify-center gap-2 transition-all hover:bg-[#1879C3] hover:border-[#1879C3] hover:text-white active:bg-[#1463a0] active:border-[#1463a0] active:scale-[0.98]">
<iconify-icon className="text-xl" icon="lucide:shopping-cart"></iconify-icon>
              Add to Cart
            </button>
</div>
</div>

<div className="w-[260px] sm:w-[280px] shrink-0 snap-start flex flex-col group relative">
<div className="w-full aspect-[4/3] mb-5 relative bg-white">
<div className="absolute inset-4 flex items-center justify-center">
<img alt="Air Clutch Assist Cylinder" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
</div>
<div className="flex flex-col flex-grow">
<a className="text-base text-zinc-900 hover:underline line-clamp-1 min-h-[24px] mb-1.5" href="#">
              AIR CLUTCH ASSIST Cylinder MA...
            </a>
<div className="text-sm text-zinc-500 uppercase min-h-[20px] mb-4">
              SKU: 1250SS-1265A
            </div>
<div className="flex items-baseline gap-1 min-h-[28px] mb-4">
<span className="text-xl font-medium text-zinc-900 tracking-tight">
                $405.30
              </span>
<span className="text-sm text-zinc-500">/EA</span>
</div>
<div className="flex flex-col gap-1 min-h-[44px] mb-6">
<div className="flex items-center gap-1.5 text-sm text-zinc-900 font-medium">
                In Stock - Ready to Ship
                <div className="relative group/tooltip inline-flex items-center cursor-help">
<iconify-icon className="text-zinc-500 text-base" icon="lucide:info" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[220px] p-3 bg-white border border-zinc-200 text-sm font-medium text-zinc-900 text-center shadow-lg rounded-sm opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20">
                    Items leave the warehouse in less than 1 business day.
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-white border-t-[6px] border-x-transparent border-x-[6px] border-b-0 drop-shadow-sm"></div>
</div>
</div>
</div>
<div className="text-sm text-zinc-500">Qty. Available 9</div>
</div>
<button className="focus:outline-none text-base font-medium text-zinc-900 bg-white w-full border-zinc-200 border rounded-sm mt-auto pt-2.5 pb-2.5 flex items-center justify-center gap-2 transition-all hover:bg-[#1879C3] hover:border-[#1879C3] hover:text-white active:bg-[#1463a0] active:border-[#1463a0] active:scale-[0.98]">
<iconify-icon className="text-xl" icon="lucide:shopping-cart"></iconify-icon>
              Add to Cart
            </button>
</div>
</div>

<div className="w-[260px] sm:w-[280px] shrink-0 snap-start flex flex-col group relative">
<div className="aspect-[4/3] bg-white w-full mb-5 relative">
<div className="absolute inset-4 flex items-center justify-center">
<img alt="Steel Adapter" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
</div>
<div className="flex flex-col flex-grow">
<a className="text-base text-zinc-900 hover:underline line-clamp-1 min-h-[24px] mb-1.5" href="#">
              Steel Adapter, 3/4-14 Male NPT ...
            </a>
<div className="text-sm text-zinc-500 uppercase min-h-[20px] mb-4">
              SKU: 2040-12-12S
            </div>
<div className="flex items-baseline gap-1 min-h-[28px] mb-4">
<span className="text-xl font-medium text-zinc-900 tracking-tight">
                $15.42
              </span>
<span className="text-sm text-zinc-500">/EA</span>
</div>
<div className="flex flex-col gap-1 min-h-[44px] mb-6">
<div className="flex items-center gap-1.5 text-sm text-zinc-900 font-medium">
                In Stock - Ready to Ship
                <div className="relative group/tooltip inline-flex items-center cursor-help">
<iconify-icon className="text-zinc-500 text-base" icon="lucide:info" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[220px] p-3 bg-white border border-zinc-200 text-sm font-medium text-zinc-900 text-center shadow-lg rounded-sm opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20">
                    Items leave the warehouse in less than 1 business day.
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-white border-t-[6px] border-x-transparent border-x-[6px] border-b-0 drop-shadow-sm"></div>
</div>
</div>
</div>
<div className="text-sm text-zinc-500">Qty. Available 12</div>
</div>
</div></div></div></div><div className="border-zinc-200 border-t mt-20 mb-10 pt-16">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight">Related Products</h2>

<div className="hidden sm:flex gap-2 items-center">
<button className="flex hover:text-zinc-900 hover:border-zinc-300 transition-colors focus:outline-none text-zinc-500 bg-white w-10 h-10 border-zinc-200 border rounded-sm items-center justify-center" onclick="const p = this.closest('.border-t'); const c = p ? p.querySelector('.overflow-x-auto') : null; if(c) c.scrollBy({left: -304, behavior: 'smooth'});">
<iconify-icon className="text-xl" icon="lucide:chevron-left" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-10 h-10 border border-zinc-200 rounded-sm flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 bg-white transition-colors focus:outline-none" onclick="const p = this.closest('.border-t'); const c = p ? p.querySelector('.overflow-x-auto') : null; if(c) c.scrollBy({left: 304, behavior: 'smooth'});">
<iconify-icon className="text-xl" icon="lucide:chevron-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto -mx-6 sm:mx-0 sm:px-0 snap-x snap-mandatory [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pt-2 pr-6 pb-6 pl-6 gap-x-6 gap-y-6">

<div className="w-[260px] sm:w-[280px] shrink-0 snap-start flex flex-col group relative">
<div className="aspect-[4/3] bg-white w-full mb-5 relative">
<div className="absolute inset-4 flex items-center justify-center">
<img alt="Steel Adapter" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
</div>
<div className="flex flex-col flex-grow">
<a className="text-base text-zinc-900 hover:underline line-clamp-1 min-h-[24px] mb-1.5" href="#">
              Steel Adapter, 3/8-18 Male NPT ...
            </a>
<div className="text-sm text-zinc-500 uppercase min-h-[20px] mb-4">
              SKU: 2040-6-8S
            </div>
<div className="flex items-baseline gap-1 min-h-[28px] mb-4">
<span className="text-xl font-medium text-zinc-900 tracking-tight">
                $6.93
              </span>
<span className="text-sm text-zinc-500">/EA</span>
</div>
<div className="flex flex-col gap-1 min-h-[44px] mb-6">
<div className="flex items-center gap-1.5 text-sm text-zinc-900 font-medium">
                In Stock - Ready to Ship
                <div className="relative group/tooltip inline-flex items-center cursor-help">
<iconify-icon className="text-zinc-500 text-base" icon="lucide:info" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[220px] p-3 bg-white border border-zinc-200 text-sm font-medium text-zinc-900 text-center shadow-lg rounded-sm opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20">
                    Items leave the warehouse in less than 1 business day.
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-white border-t-[6px] border-x-transparent border-x-[6px] border-b-0 drop-shadow-sm"></div>
</div>
</div>
</div>
<div className="text-sm text-zinc-500">Qty. Available 23</div>
</div>
<button className="focus:outline-none text-base font-medium text-zinc-900 bg-white w-full border-zinc-200 border rounded-sm mt-auto pt-2.5 pb-2.5 flex items-center justify-center gap-2 transition-all hover:bg-[#1879C3] hover:border-[#1879C3] hover:text-white active:bg-[#1463a0] active:border-[#1463a0] active:scale-[0.98]">
<iconify-icon className="text-xl" icon="lucide:shopping-cart"></iconify-icon>
              Add to Cart
            </button>
</div>
</div>

<div className="w-[260px] sm:w-[280px] shrink-0 snap-start flex flex-col group relative">
<div className="w-full aspect-[4/3] mb-5 relative bg-white">
<div className="absolute inset-4 flex items-center justify-center">
<img alt="Steel Adapter" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
</div>
<div className="flex flex-col flex-grow">
<a className="text-base text-zinc-900 hover:underline line-clamp-1 min-h-[24px] mb-1.5" href="#">
              Steel Adapter, 1/2-14 Male NPT ...
            </a>
<div className="text-sm text-zinc-500 uppercase min-h-[20px] mb-4">
              SKU: 2040-8-12S
            </div>
<div className="flex items-baseline gap-1 min-h-[28px] mb-4">
<span className="text-xl font-medium text-zinc-900 tracking-tight">
                $11.02
              </span>
<span className="text-sm text-zinc-500">/EA</span>
</div>
<div className="flex flex-col gap-1 min-h-[44px] mb-6">
<div className="flex items-center gap-1.5 text-sm text-zinc-900 font-medium">
                In Stock - Ready to Ship
                <div className="relative group/tooltip inline-flex items-center cursor-help">
<iconify-icon className="text-zinc-500 text-base" icon="lucide:info" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[220px] p-3 bg-white border border-zinc-200 text-sm font-medium text-zinc-900 text-center shadow-lg rounded-sm opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20">
                    Items leave the warehouse in less than 1 business day.
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-white border-t-[6px] border-x-transparent border-x-[6px] border-b-0 drop-shadow-sm"></div>
</div>
</div>
</div>
<div className="text-sm text-zinc-500">Qty. Available 43</div>
</div>
<button className="focus:outline-none text-base font-medium text-zinc-900 bg-white w-full border-zinc-200 border rounded-sm mt-auto pt-2.5 pb-2.5 flex items-center justify-center gap-2 transition-all hover:bg-[#1879C3] hover:border-[#1879C3] hover:text-white active:bg-[#1463a0] active:border-[#1463a0] active:scale-[0.98]">
<iconify-icon className="text-xl" icon="lucide:shopping-cart"></iconify-icon>
              Add to Cart
            </button>
</div>
</div>

<div className="w-[260px] sm:w-[280px] shrink-0 snap-start flex flex-col group relative">
<div className="w-full aspect-[4/3] mb-5 relative bg-white">
<div className="flex flex-col text-sm font-medium text-zinc-400 bg-zinc-100/60 border-zinc-100 border absolute top-4 right-4 bottom-4 left-4 items-center justify-center">
<span className="text-4xl font-bold tracking-tighter text-zinc-300 mb-1">
                HSC
              </span>
<span className="text-center leading-tight">
                Product Image<br/>Not Available
              </span>
</div>
</div>
<div className="flex flex-col flex-grow">
<a className="text-base text-zinc-900 hover:underline line-clamp-1 min-h-[24px] mb-1.5" href="#">
              VICKERS 1PUL60P10S
            </a>
<div className="text-sm text-zinc-500 uppercase min-h-[20px] mb-4">
              SKU: 407AA00386A
            </div>
<div className="flex items-baseline gap-1 min-h-[28px] mb-4">
<span className="text-xl font-medium text-zinc-900 tracking-tight">
                $143.43
              </span>
<span className="text-sm text-zinc-500">/EA</span>
</div>
<div className="flex flex-col gap-1 min-h-[44px] mb-6">
<div className="flex items-center gap-1.5 text-sm text-zinc-900 font-medium">
                Lead Time: 30 Days
                <div className="relative group/tooltip inline-flex items-center cursor-help">
<iconify-icon className="text-zinc-500 text-base" icon="lucide:info" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[220px] p-3 bg-white border border-zinc-200 text-sm font-medium text-zinc-900 text-center shadow-lg rounded-sm opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20">
                    Expected to ship within 30 days of ordering.
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-white border-t-[6px] border-x-transparent border-x-[6px] border-b-0 drop-shadow-sm"></div>
</div>
</div>
</div>
<div className="text-sm text-zinc-500">
                Need it Sooner? Call <a className="text-[#1879C3] hover:underline" href="tel:8005079651">800-507-9651</a>
</div>
</div>
<button className="focus:outline-none text-base font-medium text-zinc-900 bg-white w-full border-zinc-200 border rounded-sm mt-auto pt-2.5 pb-2.5 flex items-center justify-center gap-2 transition-all hover:bg-[#1879C3] hover:border-[#1879C3] hover:text-white active:bg-[#1463a0] active:border-[#1463a0] active:scale-[0.98]">
<iconify-icon className="text-xl" icon="lucide:shopping-cart"></iconify-icon>
              Add to Cart
            </button>
</div>
</div>

<div className="w-[260px] sm:w-[280px] shrink-0 snap-start flex flex-col group relative">
<div className="w-full aspect-[4/3] mb-5 relative bg-white">
<div className="absolute inset-4 flex items-center justify-center">
<img alt="Air Clutch Assist Cylinder" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
</div>
<div className="flex flex-col flex-grow">
<a className="text-base text-zinc-900 hover:underline line-clamp-1 min-h-[24px] mb-1.5" href="#">
              AIR CLUTCH ASSIST Cylinder MA...
            </a>
<div className="text-sm text-zinc-500 uppercase min-h-[20px] mb-4">
              SKU: 1250SS-1265A
            </div>
<div className="flex items-baseline gap-1 min-h-[28px] mb-4">
<span className="text-xl font-medium text-zinc-900 tracking-tight">
                $405.30
              </span>
<span className="text-sm text-zinc-500">/EA</span>
</div>
<div className="flex flex-col gap-1 min-h-[44px] mb-6">
<div className="flex items-center gap-1.5 text-sm text-zinc-900 font-medium">
                In Stock - Ready to Ship
                <div className="relative group/tooltip inline-flex items-center cursor-help">
<iconify-icon className="text-zinc-500 text-base" icon="lucide:info" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[220px] p-3 bg-white border border-zinc-200 text-sm font-medium text-zinc-900 text-center shadow-lg rounded-sm opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20">
                    Items leave the warehouse in less than 1 business day.
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-white border-t-[6px] border-x-transparent border-x-[6px] border-b-0 drop-shadow-sm"></div>
</div>
</div>
</div>
<div className="text-sm text-zinc-500">Qty. Available 9</div>
</div>
<button className="focus:outline-none text-base font-medium text-zinc-900 bg-white w-full border-zinc-200 border rounded-sm mt-auto pt-2.5 pb-2.5 flex items-center justify-center gap-2 transition-all hover:bg-[#1879C3] hover:border-[#1879C3] hover:text-white active:bg-[#1463a0] active:border-[#1463a0] active:scale-[0.98]">
<iconify-icon className="text-xl" icon="lucide:shopping-cart"></iconify-icon>
              Add to Cart
            </button>
</div>
</div>

<div className="w-[260px] sm:w-[280px] shrink-0 snap-start flex flex-col group relative">
<div className="aspect-[4/3] bg-white w-full mb-5 relative">
<div className="absolute inset-4 flex items-center justify-center">
<img alt="Steel Adapter" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/h/e-21871-82318/cast-iron-piston-ring-4-00-inch-od-0-187-inch-width-0-14-inch-wall-thickness_spr-4002.png"/>
</div>
</div>
<div className="flex flex-col flex-grow">
<a className="text-base text-zinc-900 hover:underline line-clamp-1 min-h-[24px] mb-1.5" href="#">
              Steel Adapter, 3/4-14 Male NPT ...
            </a>
<div className="text-sm text-zinc-500 uppercase min-h-[20px] mb-4">
              SKU: 2040-12-12S
            </div>
<div className="flex items-baseline gap-1 min-h-[28px] mb-4">
<span className="text-xl font-medium text-zinc-900 tracking-tight">
                $15.42
              </span>
<span className="text-sm text-zinc-500">/EA</span>
</div>
<div className="flex flex-col gap-1 min-h-[44px] mb-6">
<div className="flex items-center gap-1.5 text-sm text-zinc-900 font-medium">
                In Stock - Ready to Ship
                <div className="relative group/tooltip inline-flex items-center cursor-help">
<iconify-icon className="text-zinc-500 text-base" icon="lucide:info" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[220px] p-3 bg-white border border-zinc-200 text-sm font-medium text-zinc-900 text-center shadow-lg rounded-sm opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20">
                    Items leave the warehouse in less than 1 business day.
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-white border-t-[6px] border-x-transparent border-x-[6px] border-b-0 drop-shadow-sm"></div>
</div>
</div>
</div>
<div className="text-sm text-zinc-500">Qty. Available 12</div>
</div>
</div></div></div></div></main>
    </>
  );
}
