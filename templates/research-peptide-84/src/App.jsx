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
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {
        // Showcase Rotation Logic (Scroll-Driven)
        const products = [
          { id: 0, name: 'BPC-157', category: 'RECOVERY', price: 'from $39', match: 'BPC-157' },
          { id: 1, name: 'BPC-157 + TB-500', category: 'BLEND', price: 'from $99', match: 'BPC-157 + TB-500' },
          { id: 2, name: 'CJC-1295 + Ipamorelin', category: 'BLEND', price: 'from $89', match: 'CJC-1295 + Ipamorelin' },
          { id: 3, name: 'Tesamorelin', category: 'GROWTH', price: 'from $79', match: 'Tesamorelin' }
        ];

        let currentIndex = 0;
        let transitionTimeout;

        // Element caching
        const showcaseTile = document.getElementById('showcase-tile');
        const catEl = document.getElementById('showcase-category');
        const titleEl = document.getElementById('showcase-title');
        const priceEl = document.getElementById('showcase-price');
        const capsules = document.querySelectorAll('.capsule');

        const mutedClasses = ['bg-white/8', 'text-white/40', 'border-white/10'];
        const activeClasses = ['bg-white/20', 'text-white', 'border-white/30', 'shadow-[0_0_12px_rgba(255,255,255,0.15)]'];

        function setProduct(index) {
          if (currentIndex === index) return;

          clearTimeout(transitionTimeout);

          // Crossfade Images
          const currentImg = document.getElementById(`showcase-img-${currentIndex}`);
          const nextImg = document.getElementById(`showcase-img-${index}`);

          if(currentImg) {
              currentImg.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
              currentImg.classList.add('opacity-0', 'scale-[0.92]', 'translate-y-[8px]');
          }
          if(nextImg) {
              // Reset incoming starting position before transition
              nextImg.classList.remove('opacity-0', 'scale-[0.92]', 'translate-y-[8px]');
              nextImg.classList.add('scale-[1.06]', '-translate-y-[8px]');

              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  nextImg.classList.remove('scale-[1.06]', '-translate-y-[8px]');
                  nextImg.classList.add('opacity-100', 'scale-100', 'translate-y-0');
                });
              });
          }

          // Fade out text
          if(catEl && titleEl && priceEl) {
              catEl.classList.remove('opacity-100', 'translate-y-0');
              titleEl.classList.remove('opacity-100', 'translate-y-0');
              priceEl.classList.remove('opacity-100', 'translate-y-0');

              catEl.classList.add('opacity-0', '-translate-y-1');
              titleEl.classList.add('opacity-0', '-translate-y-1');
              priceEl.classList.add('opacity-0', '-translate-y-1');
          }

          const nextProd = products[index];

          // Update Capsules with delay
          setTimeout(() => {
            capsules.forEach(el => {
                if (el.dataset.product === nextProd.match) {
                    el.classList.remove(...mutedClasses);
                    el.classList.add(...activeClasses);
                } else {
                    el.classList.remove(...activeClasses);
                    el.classList.add(...mutedClasses);
                }
            });
          }, 200);

          currentIndex = index;

          // Fade in text with new content half-way through transition
          transitionTimeout = setTimeout(() => {
              if(catEl && titleEl && priceEl) {
                  catEl.innerText = nextProd.category;
                  titleEl.innerText = nextProd.name;
                  priceEl.innerText = nextProd.price;

                  catEl.classList.remove('opacity-0', '-translate-y-1');
                  titleEl.classList.remove('opacity-0', '-translate-y-1');
                  priceEl.classList.remove('opacity-0', '-translate-y-1');

                  catEl.classList.add('opacity-100', 'translate-y-0');
                  titleEl.classList.add('opacity-100', 'translate-y-0');
                  priceEl.classList.add('opacity-100', 'translate-y-0');
              }
          }, 400);
        }

        // Scroll listener tying vial index to viewport intersection progress
        if (showcaseTile) {
            window.addEventListener('scroll', () => {
                const rect = showcaseTile.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Track progress of the tile passing through the viewport
                let distanceScrolled = windowHeight - rect.top;
                let totalScrollDistance = windowHeight + rect.height;

                let progress = distanceScrolled / totalScrollDistance;
                // Clamp progress
                progress = Math.max(0, Math.min(0.999, progress));

                const totalCycles = 2.5;
                const totalSteps = totalCycles * products.length;
                let step = Math.floor(progress * totalSteps);
                let index = step % products.length;

                setProduct(index);
            }, { passive: true });

            // Initial trigger to sync on page load
            window.dispatchEvent(new Event('scroll'));
        }

        // --- Keep Cart State Logic available for future connections ---
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
        const everyBatchTiles = document.querySelectorAll('.every-batch-tile');
        const scrollContainer = document.getElementById('every-batch-scroll-container');
        if (everyBatchTiles.length > 0 && scrollContainer) {
          const batchObserverOptions = {
            root: scrollContainer,
            rootMargin: '0px -10% 0px -10%',
            threshold: 0.6
          };
          const batchObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.remove('scale-[0.98]', 'opacity-90');
                entry.target.classList.add('scale-100', 'opacity-100');
              } else {
                entry.target.classList.remove('scale-100', 'opacity-100');
                entry.target.classList.add('scale-[0.98]', 'opacity-90');
              }
            });
          }, batchObserverOptions);
          everyBatchTiles.forEach(tile => {
            tile.classList.add('scale-[0.98]', 'opacity-90');
            batchObserver.observe(tile);
          });
        }
      });
    


      document.addEventListener("DOMContentLoaded", () => {
        const container = document.getElementById('product-scroll-container');
        const tiles = document.querySelectorAll('.product-tile');

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              tiles.forEach(t => t.classList.remove('is-active'));
              entry.target.classList.add('is-active');
            }
          });
        }, { root: container, threshold: [0.5] });

        tiles.forEach(t => {
          observer.observe(t);
          t.addEventListener('mouseenter', () => {
            if(window.innerWidth >= 768) {
              tiles.forEach(tile => tile.classList.remove('is-active'));
              t.classList.add('is-active');
            }
          });
          t.addEventListener('mouseleave', () => {
            if(window.innerWidth >= 768 && !t.classList.contains('is-buying')) {
               t.classList.remove('is-active');
            }
          });
        });

        const bpcTile = document.querySelector('[data-product-id="bpc-157"]');
        if(bpcTile) {
          const btnBuy = bpcTile.querySelector('.btn-buy');
          const btnClose = bpcTile.querySelector('.close-buy-btn');
          const variantBtns = bpcTile.querySelectorAll('.variant-btn');
          const sizeBtns = bpcTile.querySelectorAll('.size-btn');
          const priceDisplay = bpcTile.querySelector('.price-display');
          const addToCartBtn = bpcTile.querySelector('.add-to-cart-btn');
          const btnText = addToCartBtn.querySelector('.btn-text');

          const pricing = {
            'Single Vial': { '5mg': '$39.00', '10mg': '$69.00' },
            'Pack of 10': { '5mg': '$349.00', '10mg': '$599.00' }
          };

          let currentVariant = 'Single Vial';
          let currentSize = '5mg';

          function updatePrice() { priceDisplay.innerText = pricing[currentVariant][currentSize]; }
          function updateToggles() {
            variantBtns.forEach(btn => {
              if(btn.dataset.variant === currentVariant) {
                btn.className = "variant-btn flex-1 whitespace-nowrap px-2.5 py-1 md:py-1.5 rounded-full text-[10px] md:text-[11px] font-semibold bg-white text-[#017eff] transition-colors shadow-sm";
              } else {
                btn.className = "variant-btn flex-1 whitespace-nowrap px-2.5 py-1 md:py-1.5 rounded-full text-[10px] md:text-[11px] font-semibold text-white/80 hover:text-white transition-colors";
              }
            });
            sizeBtns.forEach(btn => {
              if(btn.dataset.size === currentSize) {
                btn.className = "size-btn px-3 py-1 md:py-1.5 rounded-full border border-white text-[10px] md:text-[11px] font-semibold bg-white text-[#017eff] transition-colors shadow-sm";
              } else {
                btn.className = "size-btn px-3 py-1 md:py-1.5 rounded-full border border-white/40 text-[10px] md:text-[11px] font-semibold text-white/90 hover:bg-white/20 transition-colors";
              }
            });
          }

          variantBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
              currentVariant = e.target.dataset.variant;
              updateToggles(); updatePrice();
            });
          });

          sizeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
              currentSize = e.target.dataset.size;
              updateToggles(); updatePrice();
            });
          });

          btnBuy.addEventListener('click', (e) => {
            e.stopPropagation();
            bpcTile.classList.add('is-buying');
            bpcTile.classList.add('is-active');
          });

          btnClose.addEventListener('click', (e) => {
            e.stopPropagation();
            bpcTile.classList.remove('is-buying');
          });

          addToCartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            btnText.innerText = "Added ✓";

            const cartBadge = document.getElementById('cart-badge');
            const cartNavBtn = document.getElementById('cart-nav-btn');
            let count = parseInt(cartBadge.innerText) || 0;
            count++;
            cartBadge.innerText = count;
            cartNavBtn.classList.remove('hidden');
            cartNavBtn.classList.add('flex');
            cartBadge.classList.add('scale-125');
            setTimeout(() => cartBadge.classList.remove('scale-125'), 200);

            setTimeout(() => {
              btnText.innerText = "Add to Cart";
              bpcTile.classList.remove('is-buying');
            }, 1000);
          });
        }

        const dummyBtns = document.querySelectorAll('.btn-buy-dummy');
        const toast = document.getElementById('dummy-toast');
        dummyBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toast.classList.remove('opacity-0');
            toast.classList.add('opacity-100');
            setTimeout(() => {
              toast.classList.remove('opacity-100');
              toast.classList.add('opacity-0');
            }, 2000);
          });
        });
      });
    


      document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll('.faq-item').forEach(item => {
          item.querySelector('.faq-question').addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');
            const icon = item.querySelector('.faq-icon');

            document.querySelectorAll('.faq-item.is-open').forEach(openItem => {
              openItem.classList.remove('is-open');
              openItem.querySelector('.faq-answer').style.maxHeight = '0';
              openItem.querySelector('.faq-icon').classList.remove('rotate-180');
            });

            if (!isOpen) {
              item.classList.add('is-open');
              const answer = item.querySelector('.faq-answer');
              answer.style.maxHeight = answer.scrollHeight + 'px';
              icon.classList.add('rotate-180');
            }
          });
        });
      });
    


      document.addEventListener("DOMContentLoaded", () => {
        const prodTiles = document.querySelectorAll('.product-tile');
        const prodDotsContainer = document.getElementById('product-dots');
        if (prodDotsContainer && prodTiles.length > 0) {
          prodDotsContainer.innerHTML = '';
          prodTiles.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = i === 0 ? 'w-4 h-1.5 rounded-full bg-[#017eff] transition-all duration-300' : 'w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300';
            dot.dataset.index = i;
            prodDotsContainer.appendChild(dot);
          });
          const prodDots = prodDotsContainer.querySelectorAll('div');
          const prodObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if(entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                const index = Array.from(prodTiles).indexOf(entry.target);
                prodDots.forEach((dot, i) => {
                  dot.className = i === index ? 'w-4 h-1.5 rounded-full bg-[#017eff] transition-all duration-300' : 'w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300';
                });
              }
            });
          }, { root: document.getElementById('product-scroll-container'), threshold: 0.5 });
          prodTiles.forEach(t => prodObserver.observe(t));
        }

        const batchTiles = document.querySelectorAll('.every-batch-tile');
        const batchDotsContainer = document.getElementById('batch-dots');
        if (batchDotsContainer && batchTiles.length > 0) {
          batchDotsContainer.innerHTML = '';
          batchTiles.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = i === 0 ? 'w-4 h-1.5 rounded-full bg-[#017eff] transition-all duration-300' : 'w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300';
            dot.dataset.index = i;
            batchDotsContainer.appendChild(dot);
          });
          const batchDots = batchDotsContainer.querySelectorAll('div');
          const batchObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if(entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                const index = Array.from(batchTiles).indexOf(entry.target);
                batchDots.forEach((dot, i) => {
                  dot.className = i === index ? 'w-4 h-1.5 rounded-full bg-[#017eff] transition-all duration-300' : 'w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300';
                });
              }
            });
          }, { root: document.getElementById('every-batch-scroll-container'), threshold: 0.5 });
          batchTiles.forEach(t => batchObserver.observe(t));
        }
      });
    


document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('every-batch-scroll-container');
  if(container) {
    document.querySelectorAll('.process-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dir = parseInt(e.currentTarget.dataset.dir);
        const tile = container.querySelector('.every-batch-tile');
        if(tile) {
          const scrollAmount = (tile.offsetWidth + 16) * dir;
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      });
    });
  }
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
<nav className="flex transition-all duration-300 border-black/[0.04] md:px-6 bg-white/70 w-full h-[40px] border-b pr-4 pl-6 backdrop-blur-xl items-center justify-between" id="nav-bar">
<a className="flex-shrink-0 hover:opacity-70 transition-opacity" href="#">
<img alt="Direct Peptides" className="w-auto h-[14px] scale-125" src="https://framerusercontent.com/images/Quu7jNUwfMYHDVnHrj0m4QMVlo4.svg"/>
</a>
<div className="hidden md:flex items-center gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<a className="text-xs font-medium text-gray-900 transition-colors" href="#">
            Home
          </a>
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Privacy Policy
          </a>
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Terms of Service
          </a>
</div>
<div className="flex items-center gap-3">
<button className="md:hidden p-1 -ml-1 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none flex items-center justify-center">
<svg className="text-xl" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
<button className="relative p-1 -mr-1 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none hidden items-center justify-center" id="cart-nav-btn">
<svg className="text-xl" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
<path d="M3 6h18"></path>
<path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>
<div className="absolute -top-1 -right-1 bg-[#017eff] text-white text-xs leading-none h-[16px] w-[16px] rounded-full flex items-center justify-center font-bold border-2 border-white transition-transform duration-200" id="cart-badge">
              0
            </div>
</button>
</div>
</nav>
</div>

<div className="w-full bg-[#292e4c] overflow-hidden py-2">
<div className="max-w-[1400px] mx-auto relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
<div className="animate-marquee">
<div className="flex items-center gap-8 px-4 text-xs md:text-sm text-white/90 font-medium whitespace-nowrap">
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
              Manufactured in USA
            </div>
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2h6"></path>
<path d="M10 2v7.31L8.5 12h7L14 9.31V2"></path>
<path d="M8.5 12 4 19.5A2 2 0 0 0 5.5 22h13a2 2 0 0 0 1.5-2.5L15.5 12"></path>
</svg>
              Third-party batch tested
            </div>
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.29 7 12 12 20.71 7"></polyline>
<line x1="12" x2="12" y1="22" y2="12"></line>
</svg>
              Fast discreet shipping
            </div>
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
</svg>
              24/7 dedicated support
            </div>
</div>
<div className="flex items-center gap-8 px-4 text-xs md:text-sm text-white/90 font-medium whitespace-nowrap">
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
              Manufactured in USA
            </div>
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2h6"></path>
<path d="M10 2v7.31L8.5 12h7L14 9.31V2"></path>
<path d="M8.5 12 4 19.5A2 2 0 0 0 5.5 22h13a2 2 0 0 0 1.5-2.5L15.5 12"></path>
</svg>
              Third-party batch tested
            </div>
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.29 7 12 12 20.71 7"></polyline>
<line x1="12" x2="12" y1="22" y2="12"></line>
</svg>
              Fast discreet shipping
            </div>
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
</svg>
              24/7 dedicated support
            </div>
</div>
</div>
</div>
</div>

<main className="md:px-6 md:pt-6 md:pb-4 max-w-[1024px] mx-auto pt-2 px-4 pb-2">
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
<div className="flex flex-col">
<div className="w-full md:rounded-[24px] overflow-hidden flex flex-row p-5 md:p-8 group cursor-pointer hover:shadow-lg hover:scale-[1.015] active:scale-[0.99] transition-all duration-300 bg-white h-[180px] md:h-[220px] border-gray-100/80 border rounded-2xl relative shadow-sm">
<div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '63px'}}></div>
<div className="relative z-20 flex flex-col items-start text-left w-[60%] justify-center">
<h2 className="text-xl md:text-3xl leading-[1.1] font-semibold text-[#292e4c] tracking-tight font-heading">
              Compounded
              <br/>
<span className="text-[#017eff] font-medium whitespace-nowrap">
                in the USA
              </span>
</h2>
<a className="mt-3 md:mt-4 bg-[#017eff] hover:bg-[#0066cc] text-white pl-4 pr-1 py-1 rounded-full text-[11px] font-medium flex items-center gap-2 w-fit transition-all active:scale-95 shadow-sm shadow-[#017eff]/20 pointer-events-auto" href="#">
              View Products
              <div className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
<svg className="text-sm text-white" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>
</div>
<div className="absolute inset-y-0 right-[-3%] bottom-0 flex justify-end items-end z-10 pointer-events-none w-[40%] h-[90%]">
<img alt="Vial" className="w-full h-full object-contain object-bottom translate-y-[5%] md:group-hover:-translate-y-[2%] transition-transform ease-out drop-shadow-xl duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/064ad93f-4750-48ed-9c24-9177bc3f4335_800w.png"/>
</div>
</div>
</div>

<div className="mt-3 bg-gray-50 border border-gray-100/60 rounded-xl p-2 md:p-3 shadow-sm">
<p className="text-xs text-center text-[#9394a1] leading-tight">
<strong className="font-medium text-[#292e4c]">Research Use Only.</strong>
          All products are intended solely for laboratory research and are not
          for human or animal consumption. By purchasing, the buyer agrees to
          use these products in compliance with all applicable laws.
        </p>
</div>
</main>

<div className="max-w-[1024px] mx-auto px-4 md:px-6 space-y-8 md:space-y-10">

<div className="text-left relative z-20">

<div className="relative w-full rounded-[24px] overflow-hidden bg-[#017eff] border border-[#017eff]/30 shadow-sm min-h-[180px] md:min-h-[200px] flex flex-col justify-center py-4" id="showcase-tile">
<div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '50px'}}></div>


<div className="px-4 relative z-30 text-center mb-2">
<h2 className="md:text-2xl text-2xl font-semibold text-white tracking-tight font-heading">
              Explore our products
            </h2>
</div>

<div className="relative z-0 flex flex-col justify-center gap-3 md:gap-4 pointer-events-none overflow-hidden py-2 my-2 flex-grow">
<div className="animate-marquee-left flex gap-3 md:gap-4 px-2">
<div className="flex gap-3 md:gap-4">
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  BPC-157
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Semaglutide
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  GHK-Cu
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Tesamorelin
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  NAD+
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Selank
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  PT-141
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Hexarelin
                </span>
</div>
<div className="flex gap-3 md:gap-4">
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  BPC-157
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Semaglutide
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  GHK-Cu
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Tesamorelin
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  NAD+
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Selank
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  PT-141
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Hexarelin
                </span>
</div>
</div>
<div className="animate-marquee-right flex gap-3 md:gap-4 px-2" style={{animationDuration: '88s'}}>
<div className="flex gap-3 md:gap-4">
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  BPC-157 + TB-500
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Tirzepatide
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  TB-500
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Retatrutide
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  AOD-9604
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  MOTS-c
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Kisspeptin
                </span>
</div>
<div className="flex gap-3 md:gap-4">
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  BPC-157 + TB-500
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Tirzepatide
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  TB-500
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Retatrutide
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  AOD-9604
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  MOTS-c
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Kisspeptin
                </span>
</div>
</div>
<div className="animate-marquee-left flex gap-3 md:gap-4 px-2" style={{animationDuration: '80s'}}>
<div className="flex gap-3 md:gap-4">
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  CJC-1295 + Ipamorelin
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Sermorelin
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Ipamorelin
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Semax
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  GLOW
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  KLOW
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Oxytocin
                </span>
</div>
<div className="flex gap-3 md:gap-4">
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  CJC-1295 + Ipamorelin
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Sermorelin
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Ipamorelin
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Semax
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  GLOW
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  KLOW
                </span>
<span className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-white/15 text-white/80 border border-white/20 whitespace-nowrap">
                  Oxytocin
                </span>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col items-center justify-end px-4 pointer-events-none mt-2">
<a className="pointer-events-auto bg-white hover:bg-gray-50 text-[#017eff] font-semibold pl-5 pr-1.5 py-1.5 rounded-full text-sm flex items-center gap-3 transition-all active:scale-95 shadow-[0_4px_14px_rgba(0,0,0,0.1)] mx-auto" href="#">
              View Products
              <div className="bg-[#017eff]/15 rounded-full w-7 h-7 flex items-center justify-center transition-transform hover:translate-x-0.5">
<svg className="text-base text-[#017eff]" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 relative z-10 w-full">
<div className="group relative overflow-hidden bg-white rounded-[20px] border border-gray-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(1,126,255,0.08)] hover:border-[#017eff]/30 transition-all duration-500 hover:-translate-y-1 flex flex-col p-4 md:p-5 min-h-[140px] md:min-h-[150px] confidence-tile">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#017eff] to-transparent group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100 z-10"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none z-0" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '32px'}}></div>
<div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-[#017eff]/10 to-transparent rounded-full blur-2xl group-hover:from-[#017eff]/20 transition-all duration-500 pointer-events-none z-0"></div>
<div className="relative z-10 w-10 h-10 md:w-11 md:h-11 rounded-[12px] md:rounded-[14px] bg-white border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#9394a1] group-hover:text-[#017eff] group-hover:border-[#017eff]/30 group-hover:shadow-[0_4px_12px_rgba(1,126,255,0.15)] group-hover:bg-[#017eff]/[0.02] transition-all duration-500 mb-auto">
<svg className="transition-transform duration-500 group-hover:scale-110" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18h8"></path>
<path d="M3 22h18"></path>
<path d="M14 22a7 7 0 1 0 0-14h-1"></path>
<path d="M9 14h2"></path>
<path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
<path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
</svg>
</div>
<div className="relative z-10 mt-4">
<h3 className="text-[13px] md:text-[14px] font-semibold text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors duration-300">
              99%+ Verified Purity
            </h3>
<p className="text-[11px] md:text-[12px] text-[#9394a1] mt-1.5 leading-snug">
              Every batch HPLC and MS confirmed.
            </p>
</div>
</div>
<div className="group relative overflow-hidden bg-white rounded-[20px] border border-gray-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(1,126,255,0.08)] hover:border-[#017eff]/30 transition-all duration-500 hover:-translate-y-1 flex flex-col p-4 md:p-5 min-h-[140px] md:min-h-[150px]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#017eff] to-transparent group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100 z-10"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none z-0" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '32px'}}></div>
<div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-[#017eff]/10 to-transparent rounded-full blur-2xl group-hover:from-[#017eff]/20 transition-all duration-500 pointer-events-none z-0"></div>
<div className="relative z-10 w-10 h-10 md:w-11 md:h-11 rounded-[12px] md:rounded-[14px] bg-white border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#9394a1] group-hover:text-[#017eff] group-hover:border-[#017eff]/30 group-hover:shadow-[0_4px_12px_rgba(1,126,255,0.15)] group-hover:bg-[#017eff]/[0.02] transition-all duration-500 mb-auto">
<svg className="transition-transform duration-500 group-hover:scale-110" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<div className="relative z-10 mt-4">
<h3 className="text-[13px] md:text-[14px] font-semibold text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors duration-300">
              Same-Day Dispatch
            </h3>
<p className="text-[11px] md:text-[12px] text-[#9394a1] mt-1.5 leading-snug">
              Orders placed by 1pm EST ship today.
            </p>
</div>
</div>
<div className="group relative overflow-hidden bg-white rounded-[20rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(1,126,255,0.08)] hover:border-[#017eff]/30 transition-all duration-500 hover:-translate-y-1 flex flex-col p-4 md:p-5 min-h-[140px] md:min-h-[150px]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#017eff] to-transparent group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100 z-10"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none z-0" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '32px'}}></div>
<div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-[#017eff]/10 to-transparent rounded-full blur-2xl group-hover:from-[#017eff]/20 transition-all duration-500 pointer-events-none z-0"></div>
<div className="relative z-10 w-10 h-10 md:w-11 md:h-11 rounded-[12px] md:rounded-[14px] bg-white border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#9394a1] group-hover:text-[#017eff] group-hover:border-[#017eff]/30 group-hover:shadow-[0_4px_12px_rgba(1,126,255,0.15)] group-hover:bg-[#017eff]/[0.02] transition-all duration-500 mb-auto">
<svg className="transition-transform duration-500 group-hover:scale-110" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="m9 15 2 2 4-4"></path>
</svg>
</div>
<div className="relative z-10 mt-4">
<h3 className="text-[13px] md:text-[14px] font-semibold text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors duration-300">
              COA with Every Batch
            </h3>
<p className="text-[11px] md:text-[12px] text-[#9394a1] mt-1.5 leading-snug">
              Certificates of Analysis available on request.
            </p>
</div>
</div>
<div className="group relative overflow-hidden bg-white rounded-[20px] border border-gray-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(1,126,255,0.08)] hover:border-[#017eff]/30 transition-all duration-500 hover:-translate-y-1 flex flex-col p-4 md:p-5 min-h-[140px] md:min-h-[150px]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#017eff] to-transparent group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100 z-10"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none z-0" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '32px'}}></div>
<div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-[#017eff]/10 to-transparent rounded-full blur-2xl group-hover:from-[#017eff]/20 transition-all duration-500 pointer-events-none z-0"></div>
<div className="relative z-10 w-10 h-10 md:w-11 md:h-11 rounded-[12px] md:rounded-[14px] bg-white border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#9394a1] group-hover:text-[#017eff] group-hover:border-[#017eff]/30 group-hover:shadow-[0_4px_12px_rgba(1,126,255,0.15)] group-hover:bg-[#017eff]/[0.02] transition-all duration-500 mb-auto">
<svg className="transition-transform duration-500 group-hover:scale-110" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path>
<path d="M8.5 2h7"></path>
<path d="M14 9H10"></path>
</svg>
</div>
<div className="relative z-10 mt-4">
<h3 className="text-[13px] md:text-[14px] font-semibold text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors duration-300">
              US Compounded
            </h3>
<p className="text-[11px] md:text-[12px] text-[#9394a1] mt-1.5 leading-snug">
              Synthesized domestically. No outsourcing.
            </p>
</div>
</div>
</div>
<div className="w-full relative z-10 bg-[#fafafa] rounded-[24px] border border-gray-100/60 p-4 md:p-5 shadow-sm -mt-2">
<div className="flex items-center justify-between mb-4">
<h2 className="md:text-2xl text-xl font-semibold text-[#292e4c] tracking-tight font-heading">
            Our Process.
          </h2>
<a className="bg-[#017eff] hover:bg-[#0066cc] text-white pl-4 pr-1 py-1 rounded-full text-[11px] font-medium flex items-center gap-2 transition-all active:scale-95 shadow-sm shadow-[#017eff]/20 shrink-0" href="./products">
            View Products
            <div className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
<svg className="text-sm text-white" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>
</div>
<div className="-mx-4 md:-mx-5 px-4 md:px-5 flex gap-3 md:gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 [mask-image:linear-gradient(to_right,black_85%,transparent_100%)]" id="every-batch-scroll-container">
<div className="every-batch-tile shrink-0 snap-center w-[80vw] sm:w-[320px] md:w-[340px] h-[130px] md:h-[140px] rounded-[20px] overflow-hidden bg-white border border-gray-100/80 shadow-sm hover:shadow-md transition-all duration-400 ease-out flex flex-row group scale-100 opacity-100">
<div className="w-[38%] h-full bg-[#f8f8fa] overflow-hidden shrink-0">
<img alt="Precision Synthesis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://framerusercontent.com/images/RXZqa2MimRE1Gek6LZBX1DlnU.png"/>
</div>
<div className="w-[62%] p-4 md:p-5 flex flex-col justify-center"><div className="flex items-center justify-between mb-1.5 w-full"><span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-[#017eff]/8 text-[#017eff] text-[9px] font-bold uppercase tracking-widest">STEP 1</span><button aria-label="Next step" className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-200/80 hover:border-[#017eff]/40 hover:bg-[#017eff]/5 text-gray-400 hover:text-[#017eff] transition-all shadow-[0_2px_4px_rgba(0,0,0,0.02)] active:scale-95 process-btn group/btn" data-dir="1"><svg className="transition-transform group-hover/btn:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><path d="m9 18 6-6-6-6"></path></svg></button></div><h3 className="text-sm md:text-base font-semibold text-[#292e4c] tracking-tight leading-tight">Precision Synthesis</h3><p className="text-[11px] md:text-xs text-[#9394a1] leading-snug mt-1">Manufactured in a controlled U.S. facility under strict compounding standards.</p></div>
</div>
<div className="every-batch-tile shrink-0 snap-center w-[80vw] sm:w-[320px] md:w-[340px] h-[130px] md:h-[140px] rounded-[20px] overflow-hidden bg-white border border-gray-100/80 shadow-sm hover:shadow-md transition-all duration-400 ease-out flex flex-row group scale-[0.98] opacity-90">
<div className="w-[38%] h-full bg-[#f8f8fa] overflow-hidden shrink-0">
<img alt="Verified Purity" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://framerusercontent.com/images/pmcOgm8JFbBzpUOMTRczT3mKQ.png"/>
</div>
<div className="w-[62%] p-4 md:p-5 flex flex-col justify-center"><div className="flex items-center justify-between mb-1.5 w-full"><span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-[#017eff]/8 text-[#017eff] text-[9px] font-bold uppercase tracking-widest">STEP 2</span><div className="flex items-center gap-1.5"><button aria-label="Previous step" className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-200/80 hover:border-[#017eff]/40 hover:bg-[#017eff]/5 text-gray-400 hover:text-[#017eff] transition-all shadow-[0_2px_4px_rgba(0,0,0,0.02)] active:scale-95 process-btn group/btn" data-dir="-1"><svg className="transition-transform group-hover/btn:-translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><path d="m15 18-6-6 6-6"></path></svg></button><button aria-label="Next step" className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-200/80 hover:border-[#017eff]/40 hover:bg-[#017eff]/5 text-gray-400 hover:text-[#017eff] transition-all shadow-[0_2px_4px_rgba(0,0,0,0.02)] active:scale-95 process-btn group/btn" data-dir="1"><svg className="transition-transform group-hover/btn:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><path d="m9 18 6-6-6-6"></path></svg></button></div></div><h3 className="text-sm md:text-base font-semibold text-[#292e4c] tracking-tight leading-tight">Verified Purity</h3><p className="text-[11px] md:text-xs text-[#9394a1] leading-snug mt-1">Every batch third-party tested with HPLC and mass spectrometry.</p></div>
</div>
<div className="every-batch-tile shrink-0 snap-center w-[80vw] sm:w-[320px] md:w-[340px] h-[130px] md:h-[140px] rounded-[20px] overflow-hidden bg-white border border-gray-100/80 shadow-sm hover:shadow-md transition-all duration-400 ease-out flex flex-row group scale-[0.98] opacity-90">
<div className="w-[38%] h-full bg-[#f8f8fa] overflow-hidden shrink-0">
<img alt="Same-Day Fulfillment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://framerusercontent.com/images/jBZkkZAb0U5dnFrnusbZuscd0YQ.png"/>
</div>
<div className="w-[62%] p-4 md:p-5 flex flex-col justify-center"><div className="flex items-center justify-between mb-1.5 w-full"><span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-[#017eff]/8 text-[#017eff] text-[9px] font-bold uppercase tracking-widest">STEP 3</span><button aria-label="Previous step" className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-200/80 hover:border-[#017eff]/40 hover:bg-[#017eff]/5 text-gray-400 hover:text-[#017eff] transition-all shadow-[0_2px_4px_rgba(0,0,0,0.02)] active:scale-95 process-btn group/btn" data-dir="-1"><svg className="transition-transform group-hover/btn:-translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><path d="m15 18-6-6 6-6"></path></svg></button></div><h3 className="text-sm md:text-base font-semibold text-[#292e4c] tracking-tight leading-tight">Same-Day Fulfillment</h3><p className="text-[11px] md:text-xs text-[#9394a1] leading-snug mt-1">Orders dispatched same-day from our U.S. facility.</p></div>
</div>
</div>
<div className="flex justify-center gap-1.5 mt-2" id="batch-dots"><div className="w-4 h-1.5 rounded-full bg-[#017eff] transition-all duration-300" data-index="0"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300" data-index="1"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300" data-index="2"></div></div>
</div>
<div className="w-full md:rounded-[24px] overflow-hidden flex flex-row p-5 md:p-8 group cursor-pointer hover:shadow-lg hover:scale-[1.015] active:scale-[0.99] transition-all duration-300 bg-white h-[180px] md:h-[220px] border-gray-100/80 border rounded-2xl relative shadow-sm">
<div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '63px'}}></div>
<div className="relative z-20 flex flex-col items-start text-left w-[60%] justify-center">
<h2 className="text-xl md:text-3xl leading-[1.1] font-semibold text-[#292e4c] tracking-tight font-heading">
            Batch Produced,
            <br/>
<span className="text-[#017eff] font-medium whitespace-nowrap">
              Batch Tested
            </span>
</h2>
<a className="mt-3 md:mt-4 bg-[#017eff] hover:bg-[#0066cc] text-white pl-4 pr-1 py-1 rounded-full text-[11px] font-medium flex items-center gap-2 w-fit transition-all active:scale-95 shadow-sm shadow-[#017eff]/20 pointer-events-auto" href="#">
            View COAs
            <div className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
<svg className="text-sm text-white" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>
</div>
<div className="absolute inset-y-0 right-[-3%] bottom-0 flex justify-end items-end z-10 pointer-events-none w-[40%] h-[90%]">
<img alt="Phone" className="w-full h-full object-cover object-top translate-y-[20%] transition-transform ease-out drop-shadow-xl duration-1000" src="https://framerusercontent.com/images/SPBQYXIBH1Ef7F7XbGwZfFxIgg.png"/>
</div>
</div>
<div className="relative z-10 w-full">
<h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#292e4c] tracking-tight text-center mb-3">
          Featured Products
        </h2>
<div className="-mx-4 md:-mx-6 md:px-6 flex overflow-x-auto no-scrollbar snap-x snap-mandatory pr-4 pb-4 pt-2 pl-4 gap-x-4 gap-y-4" id="product-scroll-container">
<div className="product-tile shrink-0 snap-center w-[70vw] sm:w-[280px] bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[180px] md:h-[220px] relative overflow-hidden flex flex-col items-start group" data-product-id="bpc-157">
<img alt="BPC-157" className="tile-img group-hover:scale-105 transition-all duration-500 ease-out w-[55%] h-[80%] object-contain z-0 absolute right-[-5%] bottom-0 drop-shadow-xl translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f47e4505-e9b0-4b0d-a364-55bd5fa09420_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[10px] md:text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                RECOVERY
              </span>
<h3 className="product-title font-heading text-lg md:text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                BPC-157
              </h3>
<p className="product-price text-xs md:text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $39
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-medium hover:bg-[#0066cc] transition-colors shadow-sm shadow-[#017eff]/20 w-fit">
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
<div className="buy-view absolute inset-0 p-5 md:p-6 z-20 flex flex-col w-full opacity-0 pointer-events-none transition-opacity duration-300">
<div className="w-[75%] flex flex-col h-full items-start">
<h3 className="font-heading text-base md:text-lg font-bold text-white leading-tight mb-2 md:mb-3">
                  BPC-157
                </h3>
<div className="flex bg-black/20 rounded-full p-0.5 mb-2 md:mb-3 w-fit max-w-[180px] border border-white/10 backdrop-blur-sm">
<button className="variant-btn flex-1 whitespace-nowrap px-2.5 py-1 md:py-1.5 rounded-full text-[10px] md:text-[11px] font-semibold bg-white text-[#017eff] transition-colors shadow-sm" data-variant="Single Vial">
                    Single Vial
                  </button>
<button className="variant-btn flex-1 whitespace-nowrap px-2.5 py-1 md:py-1.5 rounded-full text-[10px] md:text-[11px] font-semibold text-white/80 hover:text-white transition-colors" data-variant="Pack of 10">
                    Pack of 10
                  </button>
</div>
<div className="flex gap-1.5 md:gap-2 mb-2 md:mb-3">
<button className="size-btn px-3 py-1 md:py-1.5 rounded-full border border-white text-[10px] md:text-[11px] font-semibold bg-white text-[#017eff] transition-colors shadow-sm" data-size="5mg">
                    5mg
                  </button>
<button className="size-btn px-3 py-1 md:py-1.5 rounded-full border border-white/40 text-[10px] md:text-[11px] font-semibold text-white/90 hover:bg-white/20 transition-colors" data-size="10mg">
                    10mg
                  </button>
</div>
<p className="price-display text-base md:text-lg font-semibold text-white mt-auto mb-2 md:mb-3 tracking-tight">
                  $39.00
                </p>
<button className="add-to-cart-btn max-w-[140px] w-full bg-white text-[#017eff] py-1 rounded-full text-[11px] font-semibold shadow-sm active:scale-95 transition-all flex justify-center items-center">
<span className="btn-text">Add to Cart</span>
</button>
</div>
</div>
<button className="close-buy-btn absolute top-3 md:top-4 right-3 md:right-4 z-30 opacity-0 pointer-events-none text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-full transition-all">
<svg className="text-xl md:text-2xl drop-shadow-md" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9-6 6"></path>
<path d="m9 9 6 6"></path>
</svg>
</button>
</div>
<div className="product-tile shrink-0 snap-center w-[70vw] sm:w-[280px] bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[180px] md:h-[220px] relative overflow-hidden flex flex-col items-start group">
<img alt="BPC-157 + TB-500" className="tile-img absolute right-[-5%] bottom-0 w-[55%] h-[80%] object-contain drop-shadow-xl z-0 group-hover:scale-105 transition-all duration-500 ease-out translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/734bab1a-760b-4a00-8b49-33ce914a8b22_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[10px] md:text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                RECOVERY
              </span>
<h3 className="product-title font-heading text-lg md:text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                BPC-157 + TB-500
              </h3>
<p className="product-price text-xs md:text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $99
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-medium hover:bg-[#0066cc] transition-colors shadow-sm shadow-[#017eff]/20 w-fit">
                  Shop
                </button>
<div className="active-btns hidden gap-2 w-fit">
<button className="btn-buy-dummy w-auto bg-white text-[#017eff] px-4 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform active:scale-95">
                    Buy
                  </button>
<button className="btn-learn w-auto border border-white/40 text-white px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>
</div>
<div className="product-tile shrink-0 snap-center w-[70vw] sm:w-[280px] bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[180px] md:h-[220px] relative overflow-hidden flex flex-col items-start group">
<img alt="CJC-1295 + Ipamorelin" className="tile-img absolute right-[-5%] bottom-0 w-[55%] h-[80%] object-contain drop-shadow-xl z-0 group-hover:scale-105 transition-all duration-500 ease-out translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/265f8568-f882-4024-a4b9-76c57ea663ba_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[10px] md:text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                GROWTH
              </span>
<h3 className="product-title font-heading text-lg md:text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                CJC-1295 + Ipamorelin
              </h3>
<p className="product-price text-xs md:text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $89
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[12px] md:sm shadow-[#017eff]/20 w-fit">
                  Shop
                </button>
<div className="active-btns hidden gap-2 w-fit">
<button className="btn-buy-dummy w-auto bg-white text-[#017eff] px-4 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform active:scale-95">
                    Buy
                  </button>
<button className="btn-learn w-auto border border-white/40 text-white px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>
</div>
<div className="product-tile shrink-0 snap-center w-[70vw] sm:w-[280px] bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[180px] md:h-[220px] relative overflow-hidden flex flex-col items-start group">
<img alt="Retatrutide" className="tile-img absolute right-[-5%] bottom-0 w-[55%] h-[80%] object-contain drop-shadow-xl z-0 group-hover:scale-105 transition-all duration-500 ease-out translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f47e4505-e9b0-4b0d-a364-55bd5fa09420_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[10px] md:text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                CAS: 2381089-83-2
              </span>
<h3 className="product-title font-heading text-lg md:text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                Retatrutide
              </h3>
<p className="product-price text-xs md:text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $139
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-medium hover:bg-[#0066cc] transition-colors shadow-sm shadow-[#017eff]/20 w-fit">
                  Shop
                </button>
<div className="active-btns hidden gap-2 w-fit">
<button className="btn-buy-dummy w-auto bg-white text-[#017eff] px-4 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform active:scale-95">
                    Buy
                  </button>
<button className="btn-learn w-auto border border-white/40 text-white px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>
</div>
<div className="product-tile shrink-0 snap-center w-[70vw] sm:w-[280px] bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[180px] md:h-[220px] relative overflow-hidden flex flex-col items-start group">
<img alt="Tirzepatide" className="tile-img absolute right-[-5%] bottom-0 w-[55%] h-[80%] object-contain drop-shadow-xl z-0 group-hover:scale-105 transition-all duration-500 ease-out translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/734bab1a-760b-4a00-8b49-33ce914a8b22_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[10px] md:text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                CAS: 2023788-19-2
              </span>
<h3 className="product-title font-heading text-lg md:text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                Tirzepatide
              </h3>
<p className="product-price text-xs md:text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $99
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-medium hover:bg-[#0066cc] transition-colors shadow-sm shadow-[#017eff]/20 w-fit">
                  Shop
                </button>
<div className="active-btns hidden gap-2 w-fit">
<button className="btn-buy-dummy w-auto bg-white text-[#017eff] px-4 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform active:scale-95">
                    Buy
                  </button>
<button className="btn-learn w-auto border border-white/40 text-white px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>
</div>
<div className="product-tile shrink-0 snap-center w-[70vw] sm:w-[280px] bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[180px] md:h-[220px] relative overflow-hidden flex flex-col items-start group">
<img alt="TB-500" className="tile-img absolute right-[-5%] bottom-0 w-[55%] h-[80%] object-contain drop-shadow-xl z-0 group-hover:scale-105 transition-all duration-500 ease-out translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/265f8568-f882-4024-a4b9-76c57ea663ba_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[10px] md:text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                RECOVERY
              </span>
<h3 className="product-title font-heading text-lg md:text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                TB-500
              </h3>
<p className="product-price text-xs md:text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $69
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-medium hover:bg-[#0066cc] transition-colors shadow-sm shadow-[#017eff]/20 w-fit">
                  Shop
                </button>
<div className="active-btns hidden gap-2 w-fit">
<button className="btn-buy-dummy w-auto bg-white text-[#017eff] px-4 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform active:scale-95">
                    Buy
                  </button>
<button className="btn-learn w-auto border border-white/40 text-white px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>
</div>
<div className="product-tile shrink-0 snap-center w-[70vw] sm:w-[280px] bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[180px] md:h-[220px] relative overflow-hidden flex flex-col items-start group">
<img alt="Tesamorelin" className="tile-img absolute right-[-5%] bottom-0 w-[55%] h-[80%] object-contain drop-shadow-xl z-0 group-hover:scale-105 transition-all duration-500 ease-out translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f47e4505-e9b0-4b0d-a364-55bd5fa09420_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[10px] md:text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                GROWTH
              </span>
<h3 className="product-title font-heading text-lg md:text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                Tesamorelin
              </h3>
<p className="product-price text-xs md:text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $79
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-medium hover:bg-[#0066cc] transition-colors shadow-sm shadow-[#017eff]/20 w-fit">
                  Shop
                </button>
<div className="active-btns hidden gap-2 w-fit">
<button className="btn-buy-dummy w-auto bg-white text-[#017eff] px-4 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform active:scale-95">
                    Buy
                  </button>
<button className="btn-learn w-auto border border-white/40 text-white px-4 py-1.5 rounded-full text-[12px] font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>
</div>
<div className="product-tile shrink-0 snap-center w-[70vw] sm:w-[280px] bg-[#fafafa] border border-gray-100/80 rounded-[24px] p-5 h-[180px] md:h-[220px] relative overflow-hidden flex flex-col items-start group">
<img alt="Sermorelin" className="tile-img absolute right-[-5%] bottom-0 w-[55%] h-[80%] object-contain drop-shadow-xl z-0 group-hover:scale-105 transition-all duration-500 ease-out translate-x-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/734bab1a-760b-4a00-8b49-33ce914a8b22_800w.png"/>
<div className="browse-view flex flex-col items-start h-full w-full z-10 transition-opacity duration-300">
<span className="cat-label text-[10px] md:text-[11px] font-bold tracking-wider text-[#017eff] uppercase mb-1 z-10">
                GROWTH
              </span>
<h3 className="product-title font-heading text-lg md:text-xl font-semibold text-[#292e4c] z-10 leading-tight">
                Sermorelin
              </h3>
<p className="product-price text-xs md:text-sm font-medium text-[#9394a1] z-10 mt-1">
                from $49
              </p>
<div className="mt-auto relative z-10 w-full">
<button className="default-btn bg-[#017eff] text-white px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-medium hover:bg-[#0066cc] transition-colors shadow-sm shadow-[#017eff]/20 w-fit">
                  Shop
                </button>
<div className="active-btns hidden gap-2 w-fit">
<button className="btn-buy-dummy w-auto bg-white text-[#017eff] px-4 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-transform active:scale-95">
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
<div className="flex justify-center gap-1.5 mt-3" id="product-dots"><div className="w-4 h-1.5 rounded-full bg-[#017eff] transition-all duration-300" data-index="0"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300" data-index="1"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300" data-index="2"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300" data-index="3"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300" data-index="4"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300" data-index="5"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300" data-index="6"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300" data-index="7"></div></div>
</div>
<div className="p-5 md:p-6 overflow-hidden flex flex-row items-center min-h-[160px] md:min-h-[180px] group bg-[#f4f5f7] border-gray-100/60 border rounded-[24px] relative shadow-sm">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '63px'}}></div>
<div className="relative z-20 w-[60%] flex flex-col items-start">
<h2 className="font-heading text-xl md:text-2xl font-semibold text-[#292e4c] tracking-tight leading-[1.1] mb-1.5">
            No more guessing games.
          </h2>
<p className="text-xs md:text-sm text-[#9394a1] font-normal mb-3">
            US-made, third-party batch tested.
          </p>
<a className="bg-[#017eff] hover:bg-[#0066cc] text-white pl-4 pr-1 py-1 rounded-full text-[12px] font-medium flex items-center gap-2 w-fit transition-all active:scale-95 shadow-sm shadow-[#017eff]/20" href="#">
            View Products
            <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center transition-transform hover:translate-x-0.5">
<svg className="text-sm text-white" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>
</div>
<div className="relative z-10 w-[40%] flex items-center justify-center">
<img alt="Chemical Compound" className="w-full max-w-[140px] md:max-w-[180px] h-auto object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.06)] transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://framerusercontent.com/images/7J0jBeVzjtC34NSerXOtD0nfY.png"/>
</div>
</div>


<div className="w-full rounded-[24px] overflow-hidden border border-gray-100/60 shadow-sm flex flex-col md:flex-row bg-white relative z-10">
<div className="md:w-[40%] md:h-auto overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#017eff] to-[#0055cc] w-full h-[140px] relative">
<div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '60px'}}></div>
<div className="absolute -bottom-4 md:-bottom-8 left-1/2 -translate-x-1/2 w-[65%] md:w-[90%] flex justify-center items-end opacity-90 pointer-events-none">
<img alt="Vial 1" className="w-[35%] object-contain drop-shadow-xl translate-x-4 scale-90 -rotate-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f47e4505-e9b0-4b0d-a364-55bd5fa09420_800w.png"/>
<img alt="Vial 2" className="w-[45%] object-contain drop-shadow-2xl z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/734bab1a-760b-4a00-8b49-33ce914a8b22_800w.png"/>
<img alt="Vial 3" className="w-[35%] object-contain drop-shadow-xl -translate-x-4 scale-90 rotate-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/265f8568-f882-4024-a4b9-76c57ea663ba_800w.png"/>
</div>
<div className="absolute top-4 right-4 z-20">
<div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm">
<div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse"></div>
<span className="text-white text-[11px] font-medium tracking-wide uppercase">
                Online now
              </span>
</div>
</div>
</div>
<div className="md:w-[60%] p-5 md:p-6 flex flex-col w-full justify-center">
<h2 className="text-2xl md:text-3xl font-semibold text-[#292e4c] tracking-tight font-heading leading-tight mb-1">
            Client support, 24/7.
          </h2>
<p className="text-sm md:text-base text-[#9394a1] leading-relaxed mb-3 max-w-[400px]">
            Our team is online around the clock to help with orders, product
            questions, and shipping.
          </p>
<div className="flex items-center justify-between gap-2 md:gap-4 mt-2">
<div>
<div className="flex items-center gap-2 mb-1">
<svg className="text-xl text-[#017eff]" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
<path d="M8 12h.01"></path>
<path d="M12 12h.01"></path>
<path d="M16 12h.01"></path>
</svg>
<span className="text-sm font-medium text-[#292e4c]">
                  Text us anytime
                </span>
</div>
<a className="text-[#017eff] font-semibold text-base md:text-lg tracking-tight hover:text-[#0055cc] transition-colors block" href="sms:+19729190219">
                +1 (972) 919-0219
              </a>
<p className="text-xs text-[#9394a1] font-medium mt-1">
                Typical response: under 5 minutes
              </p>
</div>
<a className="shrink-0 self-center bg-[#017eff] hover:bg-[#0066cc] text-white pl-4 pr-1.5 py-1.5 rounded-full text-xs md:text-sm font-medium flex items-center gap-2 transition-all active:scale-95 shadow-md shadow-[#017eff]/20" href="sms:+19729190219">
              Text Us Now
              <div className="bg-white/20 rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center transition-transform hover:translate-x-0.5">
<svg className="text-base text-white" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>
</div>
</div>
</div>
<div className="w-full pt-4 pb-4 md:pb-8 relative z-10">
<div className="bg-white rounded-[24px] border border-gray-100/80 shadow-sm p-5 md:p-6 overflow-hidden">
<h2 className="font-heading text-xl md:text-2xl font-semibold text-[#292e4c] tracking-tight mb-4 text-center">
            Frequently Asked Questions
          </h2>
<div className="space-y-0" id="faq-accordion">
<div className="faq-item border-b border-gray-100 last:border-0 group">
<div className="faq-question flex items-center justify-between py-3.5 px-1 cursor-pointer">
<span className="font-heading text-sm md:text-base font-medium text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors">
                  What are research peptides?
                </span>
<svg className="faq-icon text-base text-gray-400 group-hover:text-[#017eff] transition-transform duration-300" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="faq-answer overflow-hidden transition-[max-height] duration-300 ease-in-out" style={{maxHeight: '0'}}>
<p className="text-sm text-[#9394a1] leading-relaxed pt-2 pb-3 px-1">
                  Research peptides are synthetic amino acid chains used in
                  laboratory and scientific research settings. They are
                  manufactured for in vitro research purposes and are not
                  intended for human or animal consumption.
                </p>
</div>
</div>
<div className="faq-item border-b border-gray-100 last:border-0 group">
<div className="faq-question flex items-center justify-between py-3.5 px-1 cursor-pointer">
<span className="font-heading text-sm md:text-base font-medium text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors">
                  How do I verify my Certificate of Analysis?
                </span>
<svg className="faq-icon text-base text-gray-400 group-hover:text-[#017eff] transition-transform duration-300" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="faq-answer overflow-hidden transition-[max-height] duration-300 ease-in-out" style={{maxHeight: '0'}}>
<p className="text-sm text-[#9394a1] leading-relaxed pt-2 pb-3 px-1">
                  Every batch ships with a COA reference number. Visit our COA
                  page to search by product name or batch number and view full
                  analytical results including HPLC and mass spectrometry data.
                </p>
</div>
</div>
<div className="faq-item border-b border-gray-100 last:border-0 group">
<div className="faq-question flex items-center justify-between py-3.5 px-1 cursor-pointer">
<span className="font-heading text-sm md:text-base font-medium text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors">
                  What purity standards do you test for?
                </span>
<svg className="faq-icon text-base text-gray-400 group-hover:text-[#017eff] transition-transform duration-300" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="faq-answer overflow-hidden transition-[max-height] duration-300 ease-in-out" style={{maxHeight: '0'}}>
<p className="text-sm text-[#9394a1] leading-relaxed pt-2 pb-3 px-1">
                  All compounds are third-party tested to confirm ≥99% purity
                  via HPLC (High-Performance Liquid Chromatography) and verified
                  by mass spectrometry for molecular confirmation.
                </p>
</div>
</div>
<div className="faq-item border-b border-gray-100 last:border-0 group">
<div className="faq-question flex items-center justify-between py-3.5 px-1 cursor-pointer">
<span className="font-heading text-sm md:text-base font-medium text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors">
                  How fast do orders ship?
                </span>
<svg className="faq-icon text-base text-gray-400 group-hover:text-[#017eff] transition-transform duration-300" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="faq-answer overflow-hidden transition-[max-height] duration-300 ease-in-out" style={{maxHeight: '0'}}>
<p className="text-sm text-[#9394a1] leading-relaxed pt-2 pb-3 px-1">
                  Orders placed before 1pm EST Monday through Friday are
                  dispatched same day from our U.S. facility. Standard and
                  expedited shipping options are available at checkout.
                </p>
</div>
</div>
<div className="faq-item border-b border-gray-100 last:border-0 group">
<div className="faq-question flex items-center justify-between py-3.5 px-1 cursor-pointer">
<span className="font-heading text-sm md:text-base font-medium text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors">
                  Do you ship internationally?
                </span>
<svg className="faq-icon text-base text-gray-400 group-hover:text-[#017eff] transition-transform duration-300" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="faq-answer overflow-hidden transition-[max-height] duration-300 ease-in-out" style={{maxHeight: '0'}}>
<p className="text-sm text-[#9394a1] leading-relaxed pt-2 pb-3 px-1">
                  Currently we ship within the United States only. All orders
                  are dispatched from our domestic facility with tracking
                  provided.
                </p>
</div>
</div>
<div className="faq-item border-b border-gray-100 last:border-0 group">
<div className="faq-question flex items-center justify-between py-3.5 px-1 cursor-pointer">
<span className="font-heading text-sm md:text-base font-medium text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors">
                  What is your return policy?
                </span>
<svg className="faq-icon text-base text-gray-400 group-hover:text-[#017eff] transition-transform duration-300" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="faq-answer overflow-hidden transition-[max-height] duration-300 ease-in-out" style={{maxHeight: '0'}}>
<p className="text-sm text-[#9394a1] leading-relaxed pt-2 pb-3 px-1">
                  Due to the nature of research compounds, we cannot accept
                  returns on opened products. Unopened items may be returned
                  within 14 days of delivery. Contact our support team for
                  assistance.
                </p>
</div>
</div>
</div>
<div className="pt-5 mt-3 border-t border-gray-100 flex flex-col items-center text-center gap-3">
<p className="text-sm text-[#9394a1] font-medium">Ready to order?</p>
<a className="bg-[#017eff] hover:bg-[#0066cc] text-white pl-5 pr-1.5 py-1.5 rounded-full text-sm font-medium flex items-center gap-3 transition-all active:scale-95 shadow-md shadow-[#017eff]/20" href="./products">
              View Products
              <div className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center transition-transform hover:translate-x-0.5">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</a>
</div>
</div>
</div>
<div className="overflow-hidden min-h-[300px] flex flex-col md:flex-row bg-[#11131e] w-full rounded-[24px] mb-8 relative shadow-2xl -translate-y-6 border border-white/10 group">

<div className="absolute -top-[50%] -right-[20%] w-[80%] h-[150%] bg-gradient-to-b from-[#017eff]/15 to-transparent blur-[80px] pointer-events-none transition-opacity duration-1000 group-hover:opacity-100 opacity-60 rounded-full z-0"></div>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '32px'}}></div>

<div className="absolute inset-0 rounded-[24px] border border-white/[0.02] pointer-events-none z-30"></div>

<div className="relative z-20 flex flex-col items-start justify-center w-full md:w-[55%] p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
<div className="relative flex items-center justify-center w-2 h-2">
<div className="absolute w-2 h-2 rounded-full bg-[#017eff] opacity-50 animate-ping"></div>
<div className="relative w-1.5 h-17eff]"></div>
</div>
<span className="text-[10px] md:text-xs font-medium text-white/80 tracking-widest uppercase font-heading">Direct Peptides Excellence</span>
</div>
<h2 30"="" className="text-3xl md:text-5xl font-medium text-white tracking-br&gt; &lt;span class=" text-white="">Clinical precision.
    </h2>
<p className="text-sm md:text-base text-white/50 leading-relaxed font-normal max-w-[420px] mb-10">
      We bridge the gap between breakthrough science and laboratory execution. Engineered in US facilities, every compound undergoes rigorous HPLC and MS analysis to guarantee unprecedented batch-to-batch consistency.
    </p>
<a className="inline-flex items-center gap-3 group/btn cursor-pointer" href="./about">
<span className="text-[#017eff] font-medium text-sm transition-colors group-hover/btn:text-white">Discover our standard</span>
<div className="w-8 h-8 rounded-full bg-[#017eff]/10 flex items-center justify-center border border-[#017eff]/20 transition-all duration-300 group-hover/btn:bg-[#017eff] group-hover/btn:border-[#017eff] group-hover/btn:shadow-[0_0_15px_rgba(1,126,255,0.4)]">
<svg className="text-[#017eff] group-hover/btn:text-white transition-all transform group-hover/btn:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>

<div className="relative z-20 w-full md:w-[45%] flex flex-col p-4 md:p-6 gap-3 justify-center">



</div>
</div>
</div>


<div className="bg-[#1a1d2e] w-full rounded-t-3xl md:rounded-t-[40px]">
<div className="md:px-8 md:py-14 max-w-[1024px] mr-auto ml-auto pt-10 pr-6 pb-10 pl-6 bg-[#1a1d2e] rounded-t-3xl md:rounded-t-[40px] overflow-hidden">
<div className="mb-6">
<img alt="Logo" className="h-[20px] w-auto brightness-0 invert opacity-90" src="https://framerusercontent.com/images/Quu7jNUwfMYHDVnHrj0m4QMVlo4.svg"/>
</div>
<h3 className="font-heading text-xl md:text-2xl font-semibold text-white tracking-tight leading-tight mb-6">
          Verified compounds.
          <br/>
          Ready to ship.
        </h3>
<div className="mb-8">
<p className="text-sm text-white/40 mb-1">Need help? Text us anytime.</p>
<a className="text-base text-[#017eff] font-semibold hover:text-white transition-colors" href="sms:+19729190219">
            +1 (972) 919-0219
          </a>
</div>
<div className="border-t border-white/10 pt-6 mt-2">
<div className="flex flex-wrap gap-4 mb-4">
<a className="text-sm text-white/30 hover:text-white/60 transition-colors" href="#">
              Privacy Policy
            </a>
<span className="text-white/20">·</span>
<a className="text-sm text-white/30 hover:text-white/60 transition-colors" href="#">
              Terms of Service
            </a>
</div>
<p className="text-xs text-white/20 mb-6">
            © 2025 Direct Peptides. All rights reserved.
          </p>
<div className="space-y-4">
<p className="text-xs text-white/20 leading-relaxed text-left">
              All products from Direct Peptides are intended solely for
              laboratory research purposes and are not for human or animal
              consumption. These materials are for in vitro research only and
              must be handled by qualified professionals in controlled lab
              environments. By purchasing, the buyer agrees to use these
              products in compliance with all applicable laws and regulations.
            </p>
<p className="text-xs text-white/20 leading-relaxed text-left">
              The statements made on this website have not been evaluated by the
              U.S. Food and Drug Administration, the products offered are not
              intended to diagnose, treat, cure, or prevent any disease. Direct
              Peptides is not a compounding pharmacy or chemical compounding
              facility as defined under Section 503A of the Federal Food, Drug,
              and Cosmetic Act, and all products are sold strictly for research
              purposes only and are not for human or animal consumption.
            </p>
</div>
</div>
</div>
</div>


<div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#292e4c] text-white px-5 py-2.5 rounded-full text-[13px] font-medium opacity-0 pointer-events-none transition-opacity duration-300 z-[100] shadow-lg shadow-black/10 flex items-center gap-2" id="dummy-toast">
<svg className="text-lg" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
      Product coming soon
    </div>




    </>
  );
}
