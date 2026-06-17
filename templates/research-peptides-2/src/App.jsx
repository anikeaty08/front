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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
let cartState = [];
const cartNavBtn = document.getElementById('cart-nav-btn');
const cartBadge = document.getElementById('cart-badge');
function addItemToCart(product, variant, size, price) {
cartState.push({ product, variant, size, price, qty: 1 });
const count = cartState.length;
cartBadge.innerText = count;
if (count > 0) cartNavBtn.classList.remove('hidden');
cartBadge.classList.add('scale-125');
setTimeout(() => cartBadge.classList.remove('scale-125'), 200);
}
});



document.addEventListener("DOMContentLoaded", () => {
const tiles = document.querySelectorAll('.confidence-tile');
if (tiles.length === 0) return;
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
observer.unobserve(entry.target);
tiles.forEach((tile, index) => {
setTimeout(() => {
tile.classList.add('is-highlighted');
setTimeout(() => tile.classList.remove('is-highlighted'), 1500);
}, index * 300);
});
}
});
}, { threshold: 0.6 });
observer.observe(tiles[0].parentElement);
});



document.addEventListener('DOMContentLoaded', () => {
const container = document.getElementById('every-batch-scroll-container');
const indicator = document.getElementById('every-batch-scroll-indicator');
if(container && indicator) {
container.addEventListener('scroll', () => {
if(container.scrollLeft > 10) indicator.classList.add('opacity-0');
else indicator.classList.remove('opacity-0');
}, {passive: true});
}
// FAQ Accordion Logic
document.querySelectorAll('.faq-btn').forEach(btn => {
btn.addEventListener('click', () => {
const content = btn.nextElementSibling;
const icon = btn.querySelector('iconify-icon');
const isExpanded = btn.getAttribute('aria-expanded') === 'true';
// Close all
document.querySelectorAll('.faq-content').forEach(c => {
c.style.maxHeight = null;
c.previousElementSibling.setAttribute('aria-expanded', 'false');
c.previousElementSibling.querySelector('iconify-icon').style.transform = 'rotate(0deg)';
});
if (!isExpanded) {
btn.setAttribute('aria-expanded', 'true');
content.style.maxHeight = content.scrollHeight + "px";
icon.style.transform = 'rotate(180deg)';
}
});
});
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
        // Desktop Hover Interactions for Product Tiles
        const productTiles = document.querySelectorAll('.product-tile');
        productTiles.forEach(tile => {
          tile.addEventListener('mouseenter', () => {
            tile.classList.add('is-active');
          });
          tile.addEventListener('mouseleave', () => {
            tile.classList.remove('is-active');
          });
        });

        // Simple Mobile Swipe Simulation for specific scroll containers
        const scrollContainers = document.querySelectorAll('#product-scroll-container, #every-batch-scroll-container');
        let isDown = false;
        let startX;
        let scrollLeft;

        scrollContainers.forEach(container => {
          if(!container) return;
          container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.classList.add('cursor-grabbing');
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
          });
          container.addEventListener('mouseleave', () => {
            isDown = false;
            container.classList.remove('cursor-grabbing');
          });
          container.addEventListener('mouseup', () => {
            isDown = false;
            container.classList.remove('cursor-grabbing');
          });
          container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
          });
        });
      });
    
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
      

<div className="w-full sticky top-0 z-50" id="nav-container">
<div className="w-full py-2 px-4 flex justify-center items-center text-center bg-[#f8f8fa] border-b border-gray-100">
<p className="text-xs md:text-sm font-normal text-[#292e4c]">
<span className="md:hidden">
            Need help? Text us:
            <a className="underline font-medium underline-offset-2 ml-1 text-[#017eff]" href="#">
              +1 (972) 919-0219
            </a>
</span>
<span className="hidden md:inline">
            Need help? Text us, and a team member will reply in mins.
            <a className="underline font-medium ml-1 underline-offset-2 hover:text-[#017eff] transition-colors text-[#017eff]" href="#">
              +1 (972) 919-0219
            </a>
</span>
</p>
</div>
<nav className="flex transition-all duration-300 border-black/[0.04] md:px-6 bg-white/70 w-full h-[40px] border-b pr-4 pl-6 backdrop-blur-xl items-center justify-between max-w-[1200px] mx-auto" id="nav-bar">
<a className="flex-shrink-0 hover:opacity-70 transition-opacity" href="#">
<img alt="Direct Peptides" className="w-auto h-[14px] scale-125" src="https://framerusercontent.com/images/Quu7jNUwfMYHDVnHrj0m4QMVlo4.svg"/>
</a>
<div className="hidden md:flex items-center gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<a className="text-xs font-medium text-gray-900 transition-colors" href="#">
            Home
          </a>
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Products
          </a>
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Blog
          </a>
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
            COA
          </a>
</div>
<div className="flex items-center gap-3">
<button className="md:hidden p-1 -ml-1 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<button className="relative p-1 -mr-1 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none hidden items-center justify-center" id="cart-nav-btn">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<div className="absolute -top-1 -right-1 bg-[#017eff] text-white text-xs leading-none h-[16px] w-[16px] rounded-full flex items-center justify-center font-bold border-2 border-white transition-transform duration-200" id="cart-badge">
              0
            </div>
</button>
</div>
</nav>
</div>

<div className="w-full bg-[#292e4c] overflow-hidden py-2">
<div className="max-w-[1200px] mx-auto relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
<div className="animate-marquee">
<div className="flex items-center gap-8 px-4 text-xs md:text-sm text-white/90 font-medium whitespace-nowrap">
<div className="flex items-center gap-2">
<iconify-icon className="text-base text-white/80" icon="solar:buildings-linear"></iconify-icon>
              Manufactured in USA
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-base text-white/80" icon="solar:test-tube-linear"></iconify-icon>
              Third-party batch tested
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-base text-white/80" icon="solar:box-minimalistic-linear"></iconify-icon>
              Fast discreet shipping
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-base text-white/80" icon="solar:chat-round-line-linear"></iconify-icon>
              24/7 dedicated support
            </div>
</div>
<div className="flex items-center gap-8 px-4 text-xs md:text-sm text-white/90 font-medium whitespace-nowrap">
<div className="flex items-center gap-2">
<iconify-icon className="text-base text-white/80" icon="solar:buildings-linear"></iconify-icon>
              Manufactured in USA
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-base text-white/80" icon="solar:test-tube-linear"></iconify-icon>
              Third-party batch tested
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-base text-white/80" icon="solar:box-minimalistic-linear"></iconify-icon>
              Fast discreet shipping
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-base text-white/80" icon="solar:chat-round-line-linear"></iconify-icon>
              24/7 dedicated support
            </div>
</div>
</div>
</div>
</div>

<main className="md:px-6 md:pt-6 md:pb-4 max-w-[1200px] mx-auto pt-2 px-4 pb-2">
<h1 className="text-3xl md:text-5xl font-semibold text-[#292e4c] tracking-tight font-heading mb-3 md:mb-5 leading-[1.05]">
<div className="h-[1.05em] overflow-hidden inline-block align-bottom relative">
<div className="animate-text-roll flex flex-col justify-start text-left">
<span className="block h-[1.05em] leading-[1.05em]">
              Laboratory grade
            </span>
<span className="block h-[1.05em] leading-[1.05em]">
              US Manufactured
            </span>
<span className="block h-[1.05em] leading-[1.05em]">Batch Tested</span>
<span className="block h-[1.05em] leading-[1.05em]">
              Laboratory grade
            </span>
<span className="block h-[1.05em] leading-[1.05em]">
              US Manufactured
            </span>
<span className="block h-[1.05em] leading-[1.05em]">
              Laboratory grade
            </span>
</div>
</div>
<br/>
        research peptides.
      </h1>

<div className="flex flex-col min-h-[300px] md:min-h-[340px] overflow-hidden bg-gradient-to-br from-[#017eff] to-[#0055cc] w-full rounded-[24px] md:rounded-[32px] p-5 md:p-10 relative shadow-lg border border-[#017eff]/20 mt-1 md:mt-0 mb-2 md:mb-0 md:pb-12">
<div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '50px'}}></div>
<div className="flex flex-col md:flex-row relative z-10 w-full flex-grow items-center">

<div className="w-full md:w-[35%] flex flex-col items-start relative z-20 mb-5 md:mb-0">
<h2 className="text-[28px] md:text-[44px] leading-[1.05] font-semibold text-white tracking-tight font-heading mb-4 md:mb-8 drop-shadow-sm">
              Compounded
              <br/>
<span className="text-white/80 font-medium">in the USA.</span>
</h2>
<a className="bg-white hover:bg-gray-50 text-[#017eff] font-semibold pl-4 pr-1.5 py-1.5 md:pl-6 md:pr-2 md:py-2 rounded-full text-[12px] md:text-[15px] flex items-center gap-2 md:gap-3 transition-all active:scale-[0.98] shadow-[0_8px_20px_rgba(0,0,0,0.15)] group w-fit" href="#">
              Explore Products
              <div className="bg-[#017eff]/10 rounded-full w-6 h-6 md:w-8 h-8 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
<iconify-icon className="text-sm md:text-lg text-[#017eff]" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>

<div className="w-[40%] md:hidden relative flex justify-end items-center min-h-[100px] pointer-events-none overflow-visible self-end mt-4">
<img alt="Vial" className="absolute right-[-15%] bottom-[-10%] h-[140%] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/064ad93f-4750-48ed-9c24-9177bc3f4335_800w.png"/>
</div>

<img alt="Vial" className="hidden md:block absolute md:left-[30%] bottom-[-15%] md:bottom-[-2%] h-[150%] md:h-auto md:w-[30%] md:max-w-[200px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] pointer-events-none z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/064ad93f-4750-48ed-9c24-9177bc3f4335_800w.png"/>

<div className="w-full md:w-[50%] ml-auto flex flex-col justify-center z-10 md:pl-4 h-full pt-2 md:pt-0">
<div className="flex flex-col gap-3 md:gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pointer-events-none">
<div className="animate-marquee-left flex gap-3 md:gap-4 px-2" style={{animationDuration: '45s'}}>
<div className="flex gap-3 md:gap-4">
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    BPC-157
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    Semaglutide
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    GHK-Cu
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    Tesamorelin
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    NAD+
                  </span>
</div>
<div className="flex gap-3 md:gap-4">
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    BPC-157
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    Semaglutide
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    GHK-Cu
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    Tesamorelin
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    NAD+
                  </span>
</div>
</div>
<div className="animate-marquee-right flex gap-3 md:gap-4 px-2" style={{animationDuration: '50s'}}>
<div className="flex gap-3 md:gap-4">
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    BPC-157 + TB-500
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    Tirzepatide
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    TB-500
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    Retatrutide
                  </span>
</div>
<div className="flex gap-3 md:gap-4">
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    BPC-157 + TB-500
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    Tirzepatide
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    TB-500
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    Retatrutide
                  </span>
</div>
</div>
<div className="animate-marquee-left flex gap-3 md:gap-4 px-2" style={{animationDuration: '40s'}}>
<div className="flex gap-3 md:gap-4">
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    CJC-1295 + Ipamorelin
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    Sermorelin
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    Ipamorelin
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    Semax
                  </span>
</div>
<div className="flex gap-3 md:gap-4">
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    CJC-1295 + Ipamorelin
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    Sermorelin
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    Ipamorelin
                  </span>
<span className="px-4 py-1.5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap">
                    Semax
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-4 md:mt-6 bg-white border border-gray-200/60 rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] w-full flex flex-col sm:flex-row items-center gap-4 md:gap-6 relative overflow-hidden group hover:border-[#017eff]/30 transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#017eff] rounded-l-2xl"></div>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-[14px] bg-[#017eff]/5 flex flex-shrink-0 items-center justify-center group-hover:bg-[#017eff]/10 transition-colors">
<iconify-icon className="text-2xl text-[#017eff]" icon="solar:shield-warning-bold-duotone"></iconify-icon>
</div>
<div className="flex-1 text-center sm:text-left">
<h4 className="text-[13px] md:text-[15px] font-semibold text-[#292e4c] tracking-tight mb-0.5">
            For Research Purposes
          </h4>
<p className="text-[12px] md:text-[13px] text-[#9394a1] leading-relaxed">
            These compounds are intended solely for laboratory research and are
            <span className="text-[#292e4c] font-medium">
              not for human or animal consumption
            </span>
            . By purchasing, you agree to handle these products in compliance
            with all applicable laws.
          </p>
</div>
</div>
</main>

<div className="max-w-[1200px] mx-auto px-4 md:px-6 space-y-8 md:space-y-10">

<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 relative z-10 w-full">
<div className="group relative overflow-hidden bg-white rounded-[20px] border border-gray-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(1,126,255,0.08)] hover:border-[#017eff]/30 transition-all duration-500 hover:-translate-y-1 flex flex-col p-4 md:p-6 min-h-[140px] md:min-h-[200px] confidence-tile">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#017eff] to-transparent group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100 z-10"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none z-0" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '32px'}}></div>
<div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-[#017eff]/10 to-transparent rounded-full blur-2xl group-hover:from-[#017eff]/20 transition-all duration-500 pointer-events-none z-0"></div>
<div className="relative z-10 w-10 h-10 md:w-11 md:h-11 rounded-[12px] md:rounded-[14px] bg-white border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#9394a1] group-hover:text-[#017eff] group-hover:border-[#017eff]/30 group-hover:shadow-[0_4px_12px_rgba(1,126,255,0.15)] group-hover:bg-[#017eff]/[0.02] transition-all duration-500">
<iconify-icon className="text-[20px] transition-transform duration-500 group-hover:scale-110" icon="solar:verified-check-linear"></iconify-icon>
</div>
<div className="relative z-10 mt-4">
<h3 className="text-[13px] md:text-[15px] font-semibold text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors duration-300">
              99%+ Verified Purity
            </h3>
<p className="text-[11px] md:text-[13px] text-[#9394a1] mt-1.5 leading-snug">
              Every batch HPLC and MS confirmed.
            </p>
</div>
<div className="hidden md:block mt-auto pt-5">
<div className="bg-[#f8f8fa] rounded-xl p-3 text-[11px] border border-gray-100 font-medium font-mono text-gray-600">
<div className="flex justify-between mb-1">
<span>Purity (HPLC)</span>
<span className="text-[#292e4c] font-bold">99.8%</span>
</div>
<div className="flex justify-between">
<span>Identity (MS)</span>
<span className="text-[#017eff] font-bold flex items-center gap-1">
<iconify-icon className="text-[13px]" icon="solar:check-circle-bold"></iconify-icon>
                  CONFIRMED
                </span>
</div>
</div>
</div>
</div>
<div className="group relative overflow-hidden bg-white rounded-[20px] border border-gray-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(1,126,255,0.08)] hover:border-[#017eff]/30 transition-all duration-500 hover:-translate-y-1 flex flex-col p-4 md:p-6 min-h-[140px] md:min-h-[200px]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#017eff] to-transparent group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100 z-10"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none z-0" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '32px'}}></div>
<div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-[#017eff]/10 to-transparent rounded-full blur-2xl group-hover:from-[#017eff]/20 transition-all duration-500 pointer-events-none z-0"></div>
<div className="relative z-10 w-10 h-10 md:w-11 md:h-11 rounded-[12px] md:rounded-[14px] bg-white border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#9394a1] group-hover:text-[#017eff] group-hover:border-[#017eff]/30 group-hover:shadow-[0_4px_12px_rgba(1,126,255,0.15)] group-hover:bg-[#017eff]/[0.02] transition-all duration-500">
<iconify-icon className="text-[20px] transition-transform duration-500 group-hover:scale-110" icon="solar:box-linear"></iconify-icon>
</div>
<div className="relative z-10 mt-4">
<h3 className="text-[13px] md:text-[15px] font-semibold text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors duration-300">
              Same-Day Dispatch
            </h3>
<p className="text-[11px] md:text-[13px] text-[#9394a1] mt-1.5 leading-snug">
              Orders placed by 1pm EST ship today.
            </p>
</div>
<div className="hidden md:block mt-auto pt-5">
<div className="bg-[#f8f8fa] rounded-xl p-3 text-[11px] border border-gray-100 font-medium font-mono text-gray-600">
<div className="flex justify-between mb-2">
<span>EST. DELIVERY</span>
<span className="text-[#292e4c] font-bold">Nov 14th</span>
</div>
<div className="flex items-center justify-between relative z-10 px-1">
<div className="absolute top-1/2 left-1 right-1 h-[2px] bg-gray-200 -z-10 -translate-y-1/2"></div>
<div className="absolute top-1/2 left-1 w-[66%] h-[2px] bg-[#017eff] -z-10 -translate-y-1/2"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#017eff] ring-2 ring-[#f8f8fa]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#017eff] ring-2 ring-[#f8f8fa]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#017eff] ring-2 ring-[#f8f8fa]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white border-2 border-gray-300"></div>
</div>
<div className="flex justify-between mt-1 text-[9px] text-gray-400">
<span>ORDER</span>
<span className="">MFG</span>
<span>QC</span>
<span>SHIP</span>
</div>
</div>
</div>
</div>
<div className="group relative overflow-hidden bg-white rounded-[20px] border border-gray-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(1,126,255,0.08)] hover:border-[#017eff]/30 transition-all duration-500 hover:-translate-y-1 flex flex-col p-4 md:p-6 min-h-[140px] md:min-h-[200px]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#017eff] to-transparent group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100 z-10"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none z-0" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '32px'}}></div>
<div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-[#017eff]/10 to-transparent rounded-full blur-2xl group-hover:from-[#017eff]/20 transition-all duration-500 pointer-events-none z-0"></div>
<div className="relative z-10 w-10 h-10 md:w-11 md:h-11 rounded-[12px] md:rounded-[14px] bg-white border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#9394a1] group-hover:text-[#017eff] group-hover:border-[#017eff]/30 group-hover:shadow-[0_4px_12px_rgba(1,126,255,0.15)] group-hover:bg-[#017eff]/[0.02] transition-all duration-500">
<iconify-icon className="text-[20px] transition-transform duration-500 group-hover:scale-110" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="relative z-10 mt-4">
<h3 className="text-[13px] md:text-[15px] font-semibold text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors duration-300">
              COA with Every Batch
            </h3>
<p className="text-[11px] md:text-[13px] text-[#9394a1] mt-1.5 leading-snug">
              Certificates of Analysis available on request.
            </p>
</div>
<div className="hidden md:block mt-auto pt-5">
<div className="bg-[#f8f8fa] rounded-xl p-3 text-[11px] border border-gray-100 font-medium font-mono text-gray-600">
<div className="flex justify-between mb-2 items-center">
<span className="flex items-center gap-1 text-[#292e4c]">
<iconify-icon className="text-[#017eff] text-[13px]" icon="solar:document-bold"></iconify-icon>
                  COA #8842-A
                </span>
<span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[9px] font-bold">
                  VERIFIED
                </span>
</div>
<div className="flex justify-between mt-1 text-gray-500">
<span>Compound</span>
<span>BPC-157</span>
</div>
<div className="flex justify-between mt-1 text-gray-500">
<span>Purity</span>
<span className="text-[#292e4c] font-bold">99.8%</span>
</div>
</div>
</div>
</div>
<div className="group relative overflow-hidden bg-white rounded-[20px] border border-gray-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(1,126,255,0.08)] hover:border-[#017eff]/30 transition-all duration-500 hover:-translate-y-1 flex flex-col p-4 md:p-6 min-h-[140px] md:min-h-[200px]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#017eff] to-transparent group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100 z-10"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none z-0" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '32px'}}></div>
<div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-[#017eff]/10 to-transparent rounded-full blur-2xl group-hover:from-[#017eff]/20 transition-all duration-500 pointer-events-none z-0"></div>
<div className="relative z-10 w-10 h-10 md:w-11 md:h-11 rounded-[12px] md:rounded-[14px] bg-white border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#9394a1] group-hover:text-[#017eff] group-hover:border-[#017eff]/30 group-hover:shadow-[0_4px_12px_rgba(1,126,255,0.15)] group-hover:bg-[#017eff]/[0.02] transition-all duration-500">
<iconify-icon className="text-[20px] transition-transform duration-500 group-hover:scale-110" icon="solar:flask-linear"></iconify-icon>
</div>
<div className="relative z-10 mt-4">
<h3 className="text-[13px] md:text-[15px] font-semibold text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors duration-300">
              US Compounded
            </h3>
<p className="text-[11px] md:text-[13px] text-[#9394a1] mt-1.5 leading-snug">
              Synthesized domestically. No outsourcing.
            </p>
</div>
<div className="hidden md:block mt-auto pt-5">
<div className="bg-[#f8f8fa] rounded-xl p-3 text-[11px] border border-gray-100 font-medium font-mono text-gray-600">
<div className="flex justify-between mb-1.5">
<span>FACILITY</span>
<span className="text-[#292e4c] font-bold">US-TX-01</span>
</div>
<div className="flex justify-between mb-1.5">
<span>Standard</span>
<span className="text-[#292e4c] font-bold">cGMP</span>
</div>
<div className="flex justify-between">
<span>Status</span>
<span className="text-emerald-600 font-bold flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-[pulse_2s_ease-in-out_infinite]"></div>
                  Active
                </span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full relative z-10 bg-[#fafafa] rounded-[24px] border border-gray-100/60 p-4 md:p-6 shadow-sm -mt-2">
<div className="flex items-center justify-between mb-4 md:mb-6">
<h2 className="md:text-2xl text-xl font-semibold text-[#292e4c] tracking-tight font-heading">
            Our Process.
          </h2>
<a className="bg-[#017eff] hover:bg-[#0066cc] text-white pl-4 pr-1 py-1 rounded-full text-[11px] md:text-[12px] md:py-1.5 md:pr-1.5 md:pl-5 font-medium flex items-center gap-2 transition-all active:scale-95 shadow-sm shadow-[#017eff]/20 shrink-0" href="./products">
            View Products
            <div className="bg-white/20 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
<iconify-icon className="text-sm text-white" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
<div className="absolute right-2 top-[55%] -translate-y-1/2 z-20 pointer-events-none transition-opacity duration-300 md:hidden" id="every-batch-scroll-indicator">
<div className="w-7 h-7 rounded-full bg-white/90 shadow-md flex items-center justify-center border border-gray-100">
<iconify-icon className="text-[#292e4c]" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="-mx-4 md:mx-0 px-4 md:px-0 flex md:grid md:grid-cols-3 gap-3 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 [mask-image:linear-gradient(to_right,black_85%,transparent_100%)] md:[mask-image:none] md:overflow-visible md:snap-none relative" id="every-batch-scroll-container">
<div className="hidden md:block absolute top-[70px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-gray-200 z-0"></div>
<div className="every-batch-tile shrink-0 snap-center w-[80vw] sm:w-[320px] md:w-auto h-[130px] md:h-auto md:min-h-[220px] rounded-[20px] overflow-hidden bg-white border border-gray-100/80 shadow-sm hover:shadow-md transition-all duration-400 ease-out flex flex-row md:flex-col group scale-100 opacity-100 relative z-10">
<div className="w-[38%] md:w-full h-full md:h-[140px] bg-[#f8f8fa] overflow-hidden shrink-0">
<img alt="Precision Synthesis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://framerusercontent.com/images/RXZqa2MimRE1Gek6LZBX1DlnU.png"/>
</div>
<div className="w-[62%] md:w-full p-4 md:p-5 flex flex-col justify-center md:justify-start">
<span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-[#017eff]/8 text-[#017eff] text-[9px] font-bold uppercase tracking-widest mb-1.5 md:mb-2">
                STEP 1
              </span>
<h3 className="text-sm md:text-base font-semibold text-[#292e4c] tracking-tight leading-tight">
                Precision Synthesis
              </h3>
<p className="text-[11px] md:text-xs text-[#9394a1] leading-snug mt-1 md:mt-2">
                Manufactured in a controlled U.S. facility under strict
                compounding standards.
              </p>
</div>
</div>
<div className="every-batch-tile shrink-0 snap-center w-[80vw] sm:w-[320px] md:w-auto h-[130px] md:h-auto md:min-h-[220px] rounded-[20px] overflow-hidden bg-white border border-gray-100/80 shadow-sm hover:shadow-md transition-all duration-400 ease-out flex flex-row md:flex-col group scale-[0.98] opacity-90 md:scale-100 md:opacity-100 relative z-10">
<div className="w-[38%] md:w-full h-full md:h-[140px] bg-[#f8f8fa] overflow-hidden shrink-0">
<img alt="Verified Purity" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://framerusercontent.com/images/pmcOgm8JFbBzpUOMTRczT3mKQ.png"/>
</div>
<div className="w-[62%] md:w-full p-4 md:p-5 flex flex-col justify-center md:justify-start">
<span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-[#017eff]/8 text-[#017eff] text-[9px] font-bold uppercase tracking-widest mb-1.5 md:mb-2">
                STEP 2
              </span>
<h3 className="text-sm md:text-base font-semibold text-[#292e4c] tracking-tight leading-tight">
                Verified Purity
              </h3>
<p className="text-[11px] md:text-xs text-[#9394a1] leading-snug mt-1 md:mt-2">
                Every batch third-party tested with HPLC and mass spectrometry.
              </p>
</div>
</div>
<div className="every-batch-tile shrink-0 snap-center w-[80vw] sm:w-[320px] md:w-auto h-[130px] md:h-auto md:min-h-[220px] rounded-[20px] overflow-hidden bg-white border border-gray-100/80 shadow-sm hover:shadow-md transition-all duration-400 ease-out flex flex-row md:flex-col group scale-[0.98] opacity-90 md:scale-100 md:opacity-100 relative z-10">
<div className="w-[38%] md:w-full h-full md:h-[140px] bg-[#f8f8fa] overflow-hidden shrink-0">
<img alt="Same-Day Fulfillment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://framerusercontent.com/images/jBZkkZAb0U5dnFrnusbZuscd0YQ.png"/>
</div>
<div className="w-[62%] md:w-full p-4 md:p-5 flex flex-col justify-center md:justify-start">
<span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-[#017eff]/8 text-[#017eff] text-[9px] font-bold uppercase tracking-widest mb-1.5 md:mb-2">
                STEP 3
              </span>
<h3 className="text-sm md:text-base font-semibold text-[#292e4c] tracking-tight leading-tight">
                Same-Day Fulfillment
              </h3>
<p className="text-[11px] md:text-xs text-[#9394a1] leading-snug mt-1 md:mt-2">
                Orders dispatched same-day from our U.S. facility.
              </p>
</div>
</div>
</div>
<div className="flex justify-center gap-1.5 mt-2 md:hidden" id="batch-dots">
<div className="w-4 h-1.5 rounded-full bg-[#017eff] transition-all duration-300" data-index="0"></div>
<div className="w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300" data-index="1"></div>
<div className="w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300" data-index="2"></div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-3 md:gap-4 relative z-10 w-full">
<div className="w-full md:w-1/2 md:rounded-[24px] overflow-hidden flex flex-row p-5 md:p-8 group cursor-pointer hover:shadow-lg hover:scale-[1.015] active:scale-[0.99] transition-all duration-300 bg-white h-[180px] md:h-auto md:min-h-[260px] border-gray-100/80 border rounded-2xl relative shadow-sm">
<div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '63px'}}></div>
<div className="relative z-20 flex flex-col items-start text-left w-[60%] justify-center">
<h2 className="text-xl md:text-3xl leading-[1.1] font-semibold text-[#292e4c] tracking-tight font-heading">
              Batch Produced,
              <br/>
<span className="text-[#017eff] font-medium whitespace-nowrap">
                Batch Tested
              </span>
</h2>
<a className="mt-3 md:mt-5 bg-[#017eff] hover:bg-[#0066cc] text-white pl-4 pr-1 py-1 md:py-1.5 md:pr-1.5 md:pl-5 rounded-full text-[11px] md:text-[13px] font-medium flex items-center gap-2 w-fit transition-all active:scale-95 shadow-sm shadow-[#017eff]/20 pointer-events-auto" href="#">
              View COAs
              <div className="bg-white/20 rounded-full w-5 h-5 md:w-7 md:h-7 flex items-center justify-center transition-transform hover:translate-x-0.5">
<iconify-icon className="text-sm text-white" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
<div className="absolute inset-y-0 right-[-3%] bottom-0 flex justify-end items-end z-10 pointer-events-none w-[40%] h-[90%] md:h-[100%]">
<img alt="Phone" className="w-full h-full object-cover object-top translate-y-[20%] transition-transform ease-out drop-shadow-xl duration-1000" src="https://framerusercontent.com/images/SPBQYXIBH1Ef7F7XbGwZfFxIgg.png"/>
</div>
</div>
<div className="w-full md:w-1/2 p-5 md:p-8 overflow-hidden flex flex-row items-center min-h-[160px] md:h-auto md:min-h-[260px] group bg-[#f4f5f7] border-gray-100/60 border rounded-[24px] relative shadow-sm">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '63px'}}></div>
<div className="relative z-20 w-[60%] flex flex-col items-start justify-center">
<h2 className="font-heading text-xl md:text-3xl font-semibold text-[#292e4c] tracking-tight leading-[1.1] mb-1.5 md:mb-3">
              No more guessing games.
            </h2>
<p className="text-xs md:text-sm text-[#9394a1] font-normal mb-3 md:mb-5">
              US-made, third-party batch tested.
            </p>
<a className="bg-[#017eff] hover:bg-[#0066cc] text-white pl-4 pr-1 py-1 md:py-1.5 md:pr-1.5 md:pl-5 rounded-full text-[12px] md:text-[13px] font-medium flex items-center gap-2 w-fit transition-all active:scale-95 shadow-sm shadow-[#017eff]/20" href="#">
              View Products
              <div className="bg-white/20 rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center transition-transform hover:translate-x-0.5">
<iconify-icon className="text-sm text-white" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
<div className="relative z-10 w-[40%] flex items-center justify-center">
<img alt="Chemical Compound" className="w-full max-w-[140px] md:max-w-[200px] h-auto object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.06)] transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://framerusercontent.com/images/7J0jBeVzjtC34NSerXOtD0nfY.png"/>
</div>
</div>
</div>

<div className="relative z-10 w-full">
<h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#292e4c] tracking-tight text-center mb-6">
          Featured Products
        </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full relative z-10">

<div className="product-tile w-full bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[220px] relative overflow-hidden flex flex-col items-start group shadow-sm hover:shadow-md transition-shadow">
<img alt="BPC-157" className="tile-img absolute right-[-5%] bottom-0 w-[55%] h-[80%] object-contain drop-shadow-xl z-0 group-hover:scale-105 transition-all duration-500 ease-out translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f47e4505-e9b0-4b0d-a364-55bd5fa09420_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                RECOVERY
              </span>
<h3 className="product-title font-heading text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                BPC-157
              </h3>
<p className="product-price text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $39
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-[#0066cc] transition-colors shadow-sm shadow-[#017eff]/20 w-fit">
                  Shop
                </button>
<div className="active-btns hidden gap-2 w-fit">
<button className="btn-buy w-auto bg-white text-[#017eff] px-4 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform active:scale-95">
                    Buy
                  </button>
<button className="btn-learn w-auto border border-white/40 text-white px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>
</div>

<div className="product-tile w-full bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[220px] relative overflow-hidden flex flex-col items-start group shadow-sm hover:shadow-md transition-shadow">
<img alt="BPC-157 + TB-500" className="tile-img absolute right-[-5%] bottom-0 w-[55%] h-[80%] object-contain drop-shadow-xl z-0 group-hover:scale-105 transition-all duration-500 ease-out translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/734bab1a-760b-4a00-8b49-33ce914a8b22_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                RECOVERY
              </span>
<h3 className="product-title font-heading text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                BPC-157 + TB-500
              </h3>
<p className="product-price text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $99
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-[#0066cc] transition-colors shadow-sm shadow-[#017eff]/20 w-fit">
                  Shop
                </button>
<div className="active-btns hidden gap-2 w-fit">
<button className="btn-buy w-auto bg-white text-[#017eff] px-4 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform active:scale-95">
                    Buy
                  </button>
<button className="btn-learn w-auto border border-white/40 text-white px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>
</div>

<div className="product-tile w-full bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[220px] relative overflow-hidden flex flex-col items-start group shadow-sm hover:shadow-md transition-shadow">
<img alt="CJC-1295 + Ipamorelin" className="tile-img absolute right-[-5%] bottom-0 w-[55%] h-[80%] object-contain drop-shadow-xl z-0 group-hover:scale-105 transition-all duration-500 ease-out translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/265f8568-f882-4024-a4b9-76c57ea663ba_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                GROWTH
              </span>
<h3 className="product-title font-heading text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                CJC-1295 + Ipamorelin
              </h3>
<p className="product-price text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $89
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-[#0066cc] transition-colors shadow-sm shadow-[#017eff]/20 w-fit">
                  Shop
                </button>
<div className="active-btns hidden gap-2 w-fit">
<button className="btn-buy w-auto bg-white text-[#017eff] px-4 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform active:scale-95">
                    Buy
                  </button>
<button className="btn-learn w-auto border border-white/40 text-white px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>
</div>

<div className="product-tile w-full bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[220px] relative overflow-hidden flex flex-col items-start group shadow-sm hover:shadow-md transition-shadow">
<img alt="Retatrutide" className="tile-img absolute right-[-5%] bottom-0 w-[55%] h-[80%] object-contain drop-shadow-xl z-0 group-hover:scale-105 transition-all duration-500 ease-out translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f47e4505-e9b0-4b0d-a364-55bd5fa09420_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                WEIGHT LOSS
              </span>
<h3 className="product-title font-heading text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                Retatrutide
              </h3>
<p className="product-price text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $139
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-[#0066cc] transition-colors shadow-sm shadow-[#017eff]/20 w-fit">
                  Shop
                </button>
<div className="active-btns hidden gap-2 w-fit">
<button className="btn-buy w-auto bg-white text-[#017eff] px-4 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform active:scale-95">
                    Buy
                  </button>
<button className="btn-learn w-auto border border-white/40 text-white px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>
</div>

<div className="product-tile w-full bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[220px] relative overflow-hidden flex flex-col items-start group shadow-sm hover:shadow-md transition-shadow">
<img alt="Tirzepatide" className="tile-img absolute right-[-5%] bottom-0 w-[55%] h-[80%] object-contain drop-shadow-xl z-0 group-hover:scale-105 transition-all duration-500 ease-out translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/734bab1a-760b-4a00-8b49-33ce914a8b22_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                WEIGHT LOSS
              </span>
<h3 className="product-title font-heading text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                Tirzepatide
              </h3>
<p className="product-price text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $99
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-[#0066cc] transition-colors shadow-sm shadow-[#017eff]/20 w-fit">
                  Shop
                </button>
<div className="active-btns hidden gap-2 w-fit">
<button className="btn-buy w-auto bg-white text-[#017eff] px-4 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform active:scale-95">
                    Buy
                  </button>
<button className="btn-learn w-auto border border-white/40 text-white px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>
</div>

<div className="product-tile w-full bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[220px] relative overflow-hidden flex flex-col items-start group shadow-sm hover:shadow-md transition-shadow">
<img alt="TB-500" className="tile-img absolute right-[-5%] bottom-0 w-[55%] h-[80%] object-contain drop-shadow-xl z-0 group-hover:scale-105 transition-all duration-500 ease-out translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/265f8568-f882-4024-a4b9-76c57ea663ba_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                RECOVERY
              </span>
<h3 className="product-title font-heading text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                TB-500
              </h3>
<p className="product-price text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $69
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-[#0066cc] transition-colors shadow-sm shadow-[#017eff]/20 w-fit">
                  Shop
                </button>
<div className="active-btns hidden gap-2 w-fit">
<button className="btn-buy w-auto bg-white text-[#017eff] px-4 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform active:scale-95">
                    Buy
                  </button>
<button className="btn-learn w-auto border border-white/40 text-white px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>
</div>

<div className="product-tile w-full bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[220px] relative overflow-hidden flex flex-col items-start group shadow-sm hover:shadow-md transition-shadow">
<img alt="GHK-Cu" className="tile-img absolute right-[-5%] bottom-0 w-[55%] h-[80%] object-contain drop-shadow-xl z-0 group-hover:scale-105 transition-all duration-500 ease-out translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f47e4505-e9b0-4b0d-a364-55bd5fa09420_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                SKIN &amp; HAIR
              </span>
<h3 className="product-title font-heading text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                GHK-Cu
              </h3>
<p className="product-price text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $49
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-[#0066cc] transition-colors shadow-sm shadow-[#017eff]/20 w-fit">
                  Shop
                </button>
<div className="active-btns hidden gap-2 w-fit">
<button className="btn-buy w-auto bg-white text-[#017eff] px-4 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform active:scale-95">
                    Buy
                  </button>
<button className="btn-learn w-auto border border-white/40 text-white px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>
</div>

<div className="product-tile w-full bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[220px] relative overflow-hidden flex flex-col items-start group shadow-sm hover:shadow-md transition-shadow">
<img alt="Semaglutide" className="tile-img absolute right-[-5%] bottom-0 w-[55%] h-[80%] object-contain drop-shadow-xl z-0 group-hover:scale-105 transition-all duration-500 ease-out translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/734bab1a-760b-4a00-8b49-33ce914a8b22_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                WEIGHT LOSS
              </span>
<h3 className="product-title font-heading text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                Semaglutide
              </h3>
<p className="product-price text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $79
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-[#0066cc] transition-colors shadow-sm shadow-[#017eff]/20 w-fit">
                  Shop
                </button>
<div className="active-btns hidden gap-2 w-fit">
<button className="btn-buy w-auto bg-white text-[#017eff] px-4 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform active:scale-95">
                    Buy
                  </button>
<button className="btn-learn w-auto border border-white/40 text-white px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="relative z-10 w-full bg-white rounded-[32px] border border-gray-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500 overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-12 mt-12">
<div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '40px'}}></div>
<div className="w-full md:w-[55%] flex flex-col items-center md:items-start z-20 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-[pulse_2s_ease-in-out_infinite]"></div>
<span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-emerald-600">
              Support Online 24/7
            </span>
</div>
<h2 className="font-heading text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#292e4c] tracking-tight mb-4 leading-[1.1]">
            Dedicated support,
            <br/>
<span className="text-[#017eff]">around the clock.</span>
</h2>
<p className="text-[#9394a1] text-sm md:text-base leading-relaxed mb-8 max-w-md">
            Need help verifying a COA? Tracking an order? Our US-based dedicated
            team is standing by to assist you immediately.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-[#292e4c] hover:bg-black text-white px-8 py-3.5 rounded-full text-[13px] md:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_8px_20px_rgba(41,46,76,0.2)] active:scale-95" href="sms:+19729190219">
<iconify-icon className="text-lg" icon="solar:chat-round-line-bold"></iconify-icon>
              Text Support Now
            </a>
<a className="w-full sm:w-auto text-[#017eff] hover:text-[#0055cc] px-6 py-3.5 rounded-full text-[13px] md:text-sm font-semibold flex items-center justify-center gap-2 transition-all bg-[#017eff]/5 hover:bg-[#017eff]/10 active:scale-95" href="tel:+19729190219">
<iconify-icon className="text-lg" icon="solar:phone-bold"></iconify-icon>
              +1 (972) 919-0219
            </a>
</div>
</div>
<div className="w-full md:w-[45%] relative mt-12 md:mt-0 flex justify-center md:justify-end z-10">
<div className="absolute inset-0 bg-gradient-to-tr from-[#017eff]/10 to-transparent rounded-full blur-3xl w-[120%] h-[120%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
<img alt="Support Chat" className="w-full max-w-[240px] md:max-w-[280px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] translate-y-4 md:translate-y-0 hover:scale-105 transition-transform duration-700" src="https://framerusercontent.com/images/SPBQYXIBH1Ef7F7XbGwZfFxIgg.png"/>
</div>
</div>
<div className="relative z-10 w-full mt-16 mb-8">
<div className="text-center mb-10 md:mb-12">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#017eff]/5 text-[#017eff] mb-4">
<iconify-icon className="text-2xl" icon="solar:question-circle-line-duotone"></iconify-icon>
</div>
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#292e4c] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
<p className="text-[#9394a1] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our sourcing, quality control,
            compounding standards, and shipping procedures.
          </p>
</div>
<div className="max-w-[800px] mx-auto space-y-3">
<div className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden hover:border-[#017eff]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300">
<button aria-expanded="false" className="faq-btn w-full flex items-center justify-between p-5 md:p-6 text-left">
<span className="font-semibold text-[#292e4c] text-[15px] md:text-[17px]">
                Are your products tested?
              </span>
<div className="w-8 h-8 rounded-full bg-[#f8f8fa] flex items-center justify-center shrink-0">
<iconify-icon className="text-[#292e4c] text-lg transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 bg-white">
<p className="px-5 md:px-6 pb-6 text-[#9394a1] text-sm md:text-[15px] leading-relaxed">
                Yes, every single batch is third-party tested using
                High-Performance Liquid Chromatography (HPLC) and Mass
                Spectrometry to ensure a minimum of 99% purity. Certificates of
                Analysis (COA) are available upon request.
              </p>
</div>
</div>
<div className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden hover:border-[#017eff]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300">
<button aria-expanded="false" className="faq-btn w-full flex items-center justify-between p-5 md:p-6 text-left">
<span className="font-semibold text-[#292e4c] text-[15px] md:text-[17px]">
                Where do you ship from?
              </span>
<div className="w-8 h-8 rounded-full bg-[#f8f8fa] flex items-center justify-center shrink-0">
<iconify-icon className="text-[#292e4c] text-lg transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 bg-white">
<p className="px-5 md:px-6 pb-6 text-[#9394a1] text-sm md:text-[15px] leading-relaxed">
                All orders ship directly from our controlled U.S. facility.
                Orders placed before 1 PM EST, Monday through Friday, are
                dispatched the exact same day for rapid delivery.
              </p>
</div>
</div>
<div className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden hover:border-[#017eff]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300">
<button aria-expanded="false" className="faq-btn w-full flex items-center justify-between p-5 md:p-6 text-left">
<span className="font-semibold text-[#292e4c] text-[15px] md:text-[17px]">
                Are these for human consumption?
              </span>
<div className="w-8 h-8 rounded-full bg-[#f8f8fa] flex items-center justify-center shrink-0">
<iconify-icon className="text-[#292e4c] text-lg transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 bg-white">
<p className="px-5 md:px-6 pb-6 text-[#9394a1] text-sm md:text-[15px] leading-relaxed">
                No. All compounds offered are strictly for laboratory research
                use only. They are not intended for human or animal consumption,
                nor for any diagnostic or therapeutic applications.
              </p>
</div>
</div>
<div className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden hover:border-[#017eff]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300">
<button aria-expanded="false" className="faq-btn w-full flex items-center justify-between p-5 md:p-6 text-left">
<span className="font-semibold text-[#292e4c] text-[15px] md:text-[17px]">
                How should I store these products?
              </span>
<div className="w-8 h-8 rounded-full bg-[#f8f8fa] flex items-center justify-center shrink-0">
<iconify-icon className="text-[#292e4c] text-lg transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 bg-white">
<p className="px-5 md:px-6 pb-6 text-[#9394a1] text-sm md:text-[15px] leading-relaxed">
                Lyophilized compounds should be stored away from extreme heat
                and direct light. Once reconstituted with bacteriostatic water,
                they must be refrigerated (36°F - 46°F) to maintain stability
                and efficacy.
              </p>
</div>
</div>
<div className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden hover:border-[#017eff]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300">
<button aria-expanded="false" className="faq-btn w-full flex items-center justify-between p-5 md:p-6 text-left">
<span className="font-semibold text-[#292e4c] text-[15px] md:text-[17px]">
                What payment methods do you accept?
              </span>
<div className="w-8 h-8 rounded-full bg-[#f8f8fa] flex items-center justify-center shrink-0">
<iconify-icon className="text-[#292e4c] text-lg transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 bg-white">
<p className="px-5 md:px-6 pb-6 text-[#9394a1] text-sm md:text-[15px] leading-relaxed">
                We accept all major credit cards (Visa, Mastercard, American
                Express, Discover) through our highly secure, encrypted payment
                gateway. We also support select cryptocurrency payments.
              </p>
</div>
</div>
</div>
</div>
<div className="md:mt-24 md:p-14 overflow-hidden group z-10 -translate-y-6 bg-gradient-to-br from-[#017eff] to-[#0055cc] w-full border-[#017eff]/20 border rounded-[32px] mt-16 mb-8 pt-8 pr-8 pb-8 pl-8 relative shadow-lg">
<div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '50px'}}></div>
<div className="absolute -right-[20%] -top-[20%] w-[60%] h-[140%] bg-gradient-to-bl from-white/20 via-white/5 to-transparent rounded-full blur-[100px] pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>
<div className="absolute -left-[10%] -bottom-[20%] w-[40%] h-[80%] bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md shadow-sm">
<iconify-icon className="text-white text-sm" icon="solar:medal-star-line-duotone"></iconify-icon>
<span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-white">
                Direct Peptides Standard
              </span>
</div>
<h2 className="text-3xl md:text-[44px] font-semibold text-white tracking-tight leading-[1.1] mb-6 font-heading drop-shadow-sm">
              One facility.
              <br/>
              One standard.
              <br/>
<span className="text-white/80 font-medium">Zero compromises.</span>
</h2>
<p className="text-[14px] md:text-[16px] text-white/80 leading-relaxed font-medium mb-8 max-w-md">
              We built Direct Peptides to solve the industry's biggest problem:
              inconsistency. Every single compound is synthesized in our U.S.
              facility, third-party tested, and dispatched with verifiable
              proof.
            </p>
<a className="inline-flex items-center gap-3 bg-white text-[#017eff] px-6 py-3.5 rounded-full text-[13px] md:text-[14px] font-semibold hover:bg-gray-50 transition-all hover:scale-[1.02] active:scale-95 shadow-[0_8px_20px_rgba(0,0,0,0.15)]" href="#">
              Explore Our Process
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="w-full lg:w-[55%] grid grid-cols-2 gap-4">
<div className="bg-white/10 border border-white/20 rounded-[24px] p-6 md:p-8 flex flex-col justify-center backdrop-blur-md hover:bg-white/20 hover:border-white/30 transition-all duration-300 group/card shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
<div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover/card:scale-110 group-hover/card:bg-white/30 transition-all duration-300">
<iconify-icon className="text-xl text-white" icon="solar:test-tube-line-duotone"></iconify-icon>
</div>
<span className="text-white font-semibold text-3xl md:text-4xl leading-none mb-2 tracking-tight drop-shadow-sm">
                99.8%
              </span>
<span className="text-white/80 text-[10px] md:text-xs uppercase tracking-widest font-semibold">
                Min. HPLC Purity
              </span>
</div>
<div className="bg-white/10 border border-white/20 rounded-[24px] p-6 md:p-8 flex flex-col justify-center backdrop-blur-md hover:bg-white/20 hover:border-white/30 transition-all duration-300 group/card shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
<div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover/card:scale-110 group-hover/card:bg-white/30 transition-all duration-300">
<iconify-icon className="text-xl text-white" icon="solar:shield-check-line-duotone"></iconify-icon>
</div>
<span className="text-white font-semibold text-3xl md:text-4xl leading-none mb-2 tracking-tight drop-shadow-sm">
                100%
              </span>
<span className="text-white/80 text-[10px] md:text-xs uppercase tracking-widest font-semibold">
                Batches Verified
              </span>
</div>
<div className="bg-white/10 border border-white/20 rounded-[24px] p-6 md:p-8 flex flex-col justify-center backdrop-blur-md hover:bg-white/20 hover:border-white/30 transition-all duration-300 group/card shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
<div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover/card:scale-110 group-hover/card:bg-white/30 transition-all duration-300">
<iconify-icon className="text-xl text-white" icon="solar:buildings-line-duotone"></iconify-icon>
</div>
<span className="text-white font-semibold text-3xl md:text-4xl leading-none mb-2 tracking-tight drop-shadow-sm">
                USA
              </span>
<span className="text-white/80 text-[10px] md:text-xs uppercase tracking-widest font-semibold">
                Compounded Base
              </span>
</div>
<div className="bg-white/10 border border-white/20 rounded-[24px] p-6 md:p-8 flex flex-col justify-center backdrop-blur-md hover:bg-white/20 hover:border-white/30 transition-all duration-300 group/card shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
<div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover/card:scale-110 group-hover/card:bg-white/30 transition-all duration-300">
<iconify-icon className="text-xl text-white" icon="solar:box-minimalistic-line-duotone"></iconify-icon>
</div>
<span className="text-white font-semibold text-3xl md:text-4xl leading-none mb-2 tracking-tight drop-shadow-sm">
                &lt;24h
              </span>
<span className="text-white/80 text-[10px] md:text-xs uppercase tracking-widest font-semibold">
                Order Fulfillment
              </span>
</div>
</div>
</div>
</div>
</div>

<footer className="bg-[#1a1d2e] mt-0 relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '60px'}}></div>
<div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 pt-16 pb-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
<div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
<a className="inline-block hover:opacity-80 transition-opacity mb-6" href="#">
<img alt="Direct Peptides" className="h-6 brightness-0 invert" src="https://framerusercontent.com/images/Quu7jNUwfMYHDVnHrj0m4QMVlo4.svg"/>
</a>
<p className="text-[13px] md:text-sm text-white/50 leading-relaxed max-w-sm mb-8">
              Premium U.S. compounded research peptides. Every batch HPLC tested
              and verified for absolute purity. No guessing.
            </p>
<div className="flex flex-col gap-4">
<a className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group text-sm font-medium" href="tel:+19729190219">
<div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#017eff]/20 border border-white/10 flex items-center justify-center transition-colors">
<iconify-icon className="text-[#017eff] text-lg" icon="solar:phone-bold"></iconify-icon>
</div>
                +1 (972) 919-0219
              </a>
<a className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group text-sm font-medium" href="mailto:support@directpeptides.com">
<div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#017eff]/20 border border-white/10 flex items-center justify-center transition-colors">
<iconify-icon className="text-[#017eff] text-lg" icon="solar:letter-bold"></iconify-icon>
</div>
                support@directpeptides.com
              </a>
</div>
</div>
<div className="md:col-span-3 flex flex-col items-center md:items-start md:pl-8">
<h4 className="text-white font-semibold tracking-wide text-sm mb-6">
              Explore
            </h4>
<nav className="flex flex-col gap-4 items-center md:items-start text-[13px] text-white/60 font-medium">
<a className="hover:text-white hover:translate-x-1 transition-transform" href="#">
                All Products
              </a>
<a className="hover:text-white hover:translate-x-1 transition-transform" href="#">
                New Arrivals
              </a>
<a className="hover:text-white hover:translate-x-1 transition-transform" href="#">
                Verify COA
              </a>
<a className="hover:text-white hover:translate-x-1 transition-transform" href="#">
                Knowledge Base
              </a>
</nav>
</div>
<div className="md:col-span-4 flex flex-col items-center md:items-start">
<h4 className="text-white font-semibold tracking-wide text-sm mb-6">
              Stay Updated
            </h4>
<p className="text-[12px] md:text-[13px] text-white/50 mb-5 text-center md:text-left leading-relaxed">
              Join our newsletter for research updates, new compound additions,
              and exclusive batch notifications.
            </p>
<form className="w-full flex flex-col sm:flex-row items-center gap-3">
<input className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-[13px] text-white placeholder-white/40 focus:outline-none focus:border-[#017eff]/50 focus:ring-1 focus:ring-[#017eff]/50 transition-all" placeholder="Email address" type="email"/>
<button className="w-full sm:w-auto bg-[#017eff] hover:bg-[#0055cc] text-white px-6 py-3 rounded-full text-[13px] font-semibold transition-colors shrink-0 shadow-[0_4px_14px_rgba(1,126,255,0.3)]" type="submit">
                Subscribe
              </button>
</form>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col items-center">
<div className="w-full bg-white/[0.02] rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
<h5 className="text-white/60 text-[11px] font-bold uppercase tracking-widest mb-3 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
<iconify-icon className="text-[#017eff] text-lg" icon="solar:danger-triangle-bold-duotone"></iconify-icon>
              Strictly Research Use Only
            </h5>
<p className="text-[11px] text-white/40 leading-relaxed text-center md:text-left">
              The products offered by Direct Peptides are strictly for
              laboratory research purposes only. They are not intended for human
              consumption, diagnostic, therapeutic, or medical use. The
              purchaser assumes all risks associated with the handling and use
              of these materials. We make no claims regarding the efficacy of
              these products for any specific application. Information provided
              is for educational purposes and should not replace professional
              medical advice.
            </p>
</div>
<div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-[12px] text-white/40 font-medium">
              © 2024 Direct Peptides. All rights reserved.
            </p>
<div className="flex flex-wrap justify-center items-center gap-6 text-white/40 text-[12px] font-medium">
<a className="hover:text-white transition-colors" href="#">
                Terms of Service
              </a>
<a className="hover:text-white transition-colors" href="#">
                Privacy Policy
              </a>
<a className="hover:text-white transition-colors" href="#">
                Refund Policy
              </a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
