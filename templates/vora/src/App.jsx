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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function() {
      const menuBtn = document.getElementById('header-menu');
      const closeBtn = document.getElementById('close-menu');
      const mobileOverlay = document.getElementById('mobile-menu-overlay');
      const mobileLinks = document.querySelectorAll('.mobile-link');
      
      let isMenuOpen = false;

      function toggleMenu() {
          isMenuOpen = !isMenuOpen;
          if (isMenuOpen) {
              mobileOverlay.classList.remove('opacity-0', 'pointer-events-none');
              mobileOverlay.classList.add('opacity-100', 'pointer-events-auto');
          } else {
              mobileOverlay.classList.add('opacity-0', 'pointer-events-none');
              mobileOverlay.classList.remove('opacity-100', 'pointer-events-auto');
          }
      }

      menuBtn.addEventListener('click', toggleMenu);
      closeBtn.addEventListener('click', toggleMenu);
      mobileLinks.forEach(link => link.addEventListener('click', () => {
          if(isMenuOpen) toggleMenu();
      }));
    })();
  


      (function () {
        const section = document.getElementById("features");
        if (!section) return;

        const contents = section.querySelectorAll(".scrolly-content");
        const images = section.querySelectorAll(".scrolly-image");

        function setStep(index) {
          contents.forEach((el, i) => {
            if (i === index) {
              el.classList.remove("opacity-0", "translate-y-8");
              el.classList.add("opacity-100", "translate-y-0");
            } else {
              el.classList.remove("opacity-100", "translate-y-0");
              el.classList.add("opacity-0", "translate-y-8");
            }
          });

          images.forEach((el, i) => {
            if (i === index) {
              el.classList.remove("opacity-0", "scale-105");
              el.classList.add("opacity-100", "scale-100");
            } else {
              el.classList.remove("opacity-100", "scale-100");
              el.classList.add("opacity-0", "scale-105");
            }
          });
        }

        function updateScroll() {
          const isDesktop = window.innerWidth >= 1024;
          if (!isDesktop) {
            setStep(0); // Lock to first step on mobile for layout simplicity
            return;
          }

          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const scrollableDistance = rect.height - windowHeight;

          if (scrollableDistance <= 0) {
            setStep(0);
            return;
          }

          let progress = -rect.top / scrollableDistance;
          progress = Math.max(0, Math.min(1, progress));

          let activeIndex = 0;
          if (progress < 0.33) activeIndex = 0;
          else if (progress < 0.66) activeIndex = 1;
          else activeIndex = 2;

          setStep(activeIndex);
        }

        window.addEventListener("scroll", updateScroll);
        window.addEventListener("resize", updateScroll);
        updateScroll(); 
      })();
    


  /*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'g00ykn-bj.myshopify.com',
        storefrontAccessToken: '64406108a972ae1d60d4c9e9997f05b6',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '15622790316416',
          node: document.getElementById('product-component-1773509307305'),
          moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "font-family": "Manrope, sans-serif",
                  "font-size": "14px",
                  "font-weight": "600",
                  "letter-spacing": "0.05em",
                  "text-transform": "uppercase",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  "padding-left": "32px",
                  "padding-right": "32px",
                  "color": "#ffffff",
                  "background-color": "#171717",
                  "border-radius": "9999px",
                  "width": "100%",
                  "transition": "all 0.3s ease",
                  ":hover": {
                    "background-color": "#262626"
                  }
                }
              },
              "contents": {
                "img": false,
                "title": false,
                "price": false,
                "button": true,
                "buttonWithQuantity": false,
                "options": true
              },
              "text": {
                "button": "Add to Cart"
              },
              "googleFonts": [
                "Manrope"
              ]
            },
            "option": {
              "styles": {
                "label": {
                  "font-family": "Manrope, sans-serif",
                  "font-size": "12px",
                  "font-weight": "700",
                  "letter-spacing": "0.05em",
                  "text-transform": "uppercase",
                  "color": "#171717"
                },
                "select": {
                  "font-family": "Manrope, sans-serif",
                  "border-radius": "8px"
                }
              },
              "googleFonts": [
                "Manrope"
              ]
            },
            "cart": {
              "styles": {
                "button": {
                  "font-family": "Manrope, sans-serif",
                  "background-color": "#171717",
                  "border-radius": "9999px",
                  ":hover": {
                    "background-color": "#262626"
                  }
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "googleFonts": [
                "Manrope"
              ]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "background-color": "#171717",
                  ":hover": {
                    "background-color": "#262626"
                  }
                }
              }
            }
          }
        });
      });
    }
  })();
  /*]]>*/
  


    // Reveal Animations
    document.addEventListener('DOMContentLoaded', function(){
      const observer = new IntersectionObserver(e => {
        e.forEach(t => {
          if(t.isIntersecting){
            t.target.classList.add('is-visible');
            observer.unobserve(t.target);
          }
        });
      }, {threshold: 0.1, rootMargin: '0px 0px -50px 0px'});
      document.querySelectorAll('.reveal-on-scroll').forEach(e => observer.observe(e));
    });

    // Sticky Header & Add to Cart
    (function() {
      const headerBg = document.getElementById('header-bg');
      const stickyAtc = document.getElementById('sticky-atc');
      const shopSection = document.getElementById('shop');

      function updateHeaderAndAtc() {
        const scrolled = window.scrollY > 20;
        
        // Header
        if (scrolled) {
          headerBg.className = 'absolute inset-0 w-full h-full -z-10 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm transition-all duration-500';
        } else {
          headerBg.className = 'absolute inset-0 w-full h-full -z-10 bg-transparent transition-all duration-500';
        }

        // Sticky ATC Logic
        if (!shopSection) return;
        const shopRect = shopSection.getBoundingClientRect();
        // Show sticky bar when user scrolls past 600px, but hide it when they are in the shop section
        if (window.scrollY > 600 && (shopRect.top > window.innerHeight || shopRect.bottom < 0)) {
          stickyAtc.classList.remove('translate-y-full');
        } else {
          stickyAtc.classList.add('translate-y-full');
        }
      }
      
      window.addEventListener('scroll', updateHeaderAndAtc);
      updateHeaderAndAtc();
    })();
  
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
      

<div className="fixed top-0 left-0 w-full h-10 bg-[#F2EAE3] border-b border-[#E8DCD1] z-40 flex items-center justify-center transition-transform duration-300" id="promo-banner">
<a className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity" href="#shop">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A3A3] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C98A8A]"></span>
</span>
<p className="text-xs font-medium tracking-wider text-[#4A4A4A] uppercase">
        Spring Sale <span className="hidden sm:inline mx-2 text-[#C98A8A]">|</span> 33% Off + Free Shipping
      </p>
</a>
</div>

<header className="fixed left-0 w-full z-30 transition-all duration-300 px-6 py-4 md:px-12 md:py-5 flex justify-between items-center top-10" id="site-header">
<div className="absolute inset-0 w-full h-full -z-10 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm transition-all duration-500" id="header-bg"></div>
<div className="flex items-center z-10 w-1/3">
<button className="md:hidden text-sm font-medium text-neutral-900 hover:opacity-70 transition-colors duration-300 uppercase tracking-widest z-10" id="header-menu" type="button">
        Menu
      </button>
<nav className="hidden md:flex items-center gap-8 z-10 text-xs font-medium text-neutral-600 transition-colors duration-300 uppercase tracking-widest" id="header-nav">
<a className="hover:text-black transition-colors whitespace-nowrap" href="#features">Features</a>
<a className="hover:text-black transition-colors whitespace-nowrap" href="#how-it-works">How to Use</a>
<a className="hover:text-black transition-colors whitespace-nowrap" href="#reviews">Reviews</a>
<a className="hover:text-black transition-colors whitespace-nowrap" href="#faq">FAQ</a>
</nav>
</div>
<div className="flex items-center justify-center z-10 w-1/3">
<a className="text-2xl font-bold tracking-tighter text-neutral-900 transition-colors duration-300 lowercase" href="#hero" id="header-logo">
        vora.
      </a>
</div>
<div className="flex items-center justify-end z-10 w-1/3">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-neutral-900 text-white text-xs font-medium rounded-full hover:bg-neutral-800 transition-colors tracking-widest uppercase whitespace-nowrap" href="#shop">
        Shop Now
      </a>
<a className="md:hidden" href="#shop">
<iconify-icon className="text-xl text-neutral-900" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</a>
</div>

<div className="fixed inset-0 bg-[#FCFBF8]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-all duration-500 z-[5] top-0" id="mobile-menu-overlay">
<button className="absolute top-6 left-6 text-sm font-medium uppercase tracking-widest text-neutral-900 z-20" id="close-menu">Close</button>
<a className="mobile-link text-3xl font-medium tracking-tight hover:text-[#C98A8A] transition-colors" href="#features">Features</a>
<a className="mobile-link text-3xl font-medium tracking-tight hover:text-[#C98A8A] transition-colors whitespace-nowrap" href="#how-it-works">How to Use</a>
<a className="mobile-link text-3xl font-medium tracking-tight hover:text-[#C98A8A] transition-colors" href="#reviews">Reviews</a>
<a className="mobile-link text-3xl font-medium tracking-tight hover:text-[#C98A8A] transition-colors" href="#faq">FAQ</a>
<a className="mobile-link mt-8 px-8 py-4 bg-neutral-900 text-white rounded-full text-sm font-medium tracking-widest uppercase" href="#shop">Shop Vora</a>
</div>
</header>


<section className="relative w-full min-h-[90vh] bg-[#F9F6F0] overflow-hidden flex flex-col pt-32 pb-20" id="hero">
<div className="flex-grow z-10 w-full h-full relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-12">

<div className="w-full lg:w-1/2 flex flex-col items-start pt-10 lg:pt-0">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-100 shadow-sm mb-8 reveal-on-scroll is-visible">
<div className="flex text-[#D4AF37] text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-wide text-neutral-800">10,000+ Happy Customers</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-neutral-900 leading-[1.1] mb-6 reveal-on-scroll reveal-delay-100 is-visible">
          Salon-smooth hair <br/><span className="text-[#C98A8A] italic font-serif">anywhere</span> in minutes.
        </h1>
<p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-10 max-w-md reveal-on-scroll reveal-delay-200 is-visible">
          Ditch the cords. Our portable, USB-rechargeable straightening comb delivers flawless, frizz-free styling at home, work, or on the go.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto reveal-on-scroll reveal-delay-300 is-visible">
<a className="w-full sm:w-auto bg-neutral-900 text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-900/20 text-center tracking-wide" href="#shop">
            Shop Now — Save 33%
          </a>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500 uppercase tracking-widest whitespace-nowrap">
<iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon>
            Free Shipping
          </div>
</div>
</div>

<div className="w-full lg:w-1/2 relative flex justify-center mt-10 lg:mt-0 reveal-on-scroll reveal-delay-200 is-visible">
<div className="relative w-full max-w-md aspect-[4/5] bg-[#F9F6F0]">
<img alt="Woman with beautiful straight hair" className="w-full h-full object-cover mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d269f326-e982-4ff8-a5cd-f2b82223304c_1600w.png"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6 md:px-12">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<span className="inline-block text-[#C98A8A] text-xs font-bold tracking-widest uppercase mb-4 whitespace-nowrap">
          The Problem
        </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 leading-tight">
          Traditional straighteners weren't made for modern life.
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-on-scroll reveal-delay-100">
<div className="bg-[#FCFBF8] p-8 rounded-2xl text-center border border-neutral-100">
<div className="w-12 h-12 mx-auto bg-neutral-100 rounded-full flex items-center justify-center mb-6 text-neutral-400">
<iconify-icon className="text-2xl" icon="solar:plug-circle-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 mb-2 whitespace-nowrap">Tangled Cords</h3>
<p className="text-sm text-neutral-500">Always searching for an outlet when you're in a rush.</p>
</div>
<div className="bg-[#FCFBF8] p-8 rounded-2xl text-center border border-neutral-100">
<div className="w-12 h-12 mx-auto bg-neutral-100 rounded-full flex items-center justify-center mb-6 text-neutral-400">
<iconify-icon className="text-2xl" icon="solar:suitcase-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 mb-2 whitespace-nowrap">Too Bulky</h3>
<p className="text-sm text-neutral-500">Takes up too much space in your handbag or luggage.</p>
</div>
<div className="bg-[#FCFBF8] p-8 rounded-2xl text-center border border-neutral-100">
<div className="w-12 h-12 mx-auto bg-neutral-100 rounded-full flex items-center justify-center mb-6 text-neutral-400">
<iconify-icon className="text-2xl" icon="solar:fire-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 mb-2 whitespace-nowrap">Heat Damage</h3>
<p className="text-sm text-neutral-500">Exposed flat iron plates that burn hair and hands.</p>
</div>
<div className="bg-[#FCFBF8] p-8 rounded-2xl text-center border border-neutral-100">
<div className="w-12 h-12 mx-auto bg-neutral-100 rounded-full flex items-center justify-center mb-6 text-neutral-400">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-neutral-900 mb-2 whitespace-nowrap">Time Consuming</h3>
<p className="text-sm text-neutral-500">Takes 20+ minutes just to touch up your look.</p>
</div>
</div>
</div>
</section>

<section className="relative bg-[#F9F6F0] lg:h-[300vh]" id="features">
<div className="w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden lg:sticky lg:top-0 lg:h-screen">

<div className="relative h-full w-full flex flex-col justify-center lg:order-1 bg-[#F9F6F0] border-r border-neutral-200 z-10 py-20 lg:py-0">

<div className="scrolly-content flex flex-col px-8 md:px-20 transition-all duration-700 ease-out lg:absolute lg:inset-0 lg:justify-center opacity-100 translate-y-0" data-step="1">
<span className="text-[#C98A8A] text-xs font-bold uppercase tracking-widest mb-6 block whitespace-nowrap">
            [ 01 — Portability ]
          </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-neutral-900">
            Cordless Freedom.
          </h2>
<div className="w-12 h-1 bg-neutral-900 mb-8 rounded-full"></div>
<p className="text-base leading-relaxed text-neutral-600 max-w-md">
            Engineered with a high-capacity rechargeable battery. Vora is compact enough to fit in your daily tote, giving you the power to transform your hair in the car, at the office, or right before a date.
          </p>
</div>

<div className="scrolly-content hidden lg:flex flex-col px-8 md:px-20 transition-all duration-700 ease-out absolute inset-0 justify-center opacity-0 translate-y-8" data-step="2">
<span className="text-[#C98A8A] text-xs font-bold uppercase tracking-widest mb-6 block whitespace-nowrap">
            [ 02 — Technology ]
          </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-neutral-900">
            Ceramic Even-Heat.
          </h2>
<div className="w-12 h-1 bg-neutral-900 mb-8 rounded-full"></div>
<p className="text-base leading-relaxed text-neutral-600 max-w-md">
            Our advanced ceramic plates heat up in just 30 seconds. The comb design ensures heat is distributed evenly through every strand, smoothing out frizz and adding a silky shine without the harsh damage of flat irons.
          </p>
</div>

<div className="scrolly-content hidden lg:flex flex-col px-8 md:px-20 transition-all duration-700 ease-out absolute inset-0 justify-center opacity-0 translate-y-8" data-step="3">
<span className="text-[#C98A8A] text-xs font-bold uppercase tracking-widest mb-6 block whitespace-nowrap">
            [ 03 — Safety ]
          </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-neutral-900">
            Anti-Scald Design.
          </h2>
<div className="w-12 h-1 bg-neutral-900 mb-8 rounded-full"></div>
<p className="text-base leading-relaxed text-neutral-600 max-w-md">
            We surrounded the heating plates with heat-resistant protective teeth. You can comfortably glide the comb right from your roots to your ends without ever worrying about burning your scalp or fingers.
          </p>
</div>
</div>

<div className="relative h-[400px] sm:h-[500px] lg:h-auto bg-[#F9F6F0] overflow-hidden lg:order-2">

<img alt="Portable Styling" className="scrolly-image absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-all duration-1000 opacity-100 scale-100" data-step="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4086676e-257b-4961-834c-8c18b4d52ecd_1600w.png"/>

<img alt="Ceramic Heating" className="scrolly-image absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-all duration-1000 opacity-0 scale-105 hidden lg:block" data-step="2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e769ea28-9161-44a7-8e0d-618968394ea1_1600w.png"/>

<img alt="Anti-Scald" className="scrolly-image mix-blend-multiply transition-all duration-1000 hidden lg:block opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 scale-105" data-step="3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86d7fa35-3945-4ac0-9428-d209e76afb99_1600w.png"/>
</div>
</div>

</section>

<section className="py-24 bg-white px-6 md:px-12 border-b border-neutral-100" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
          Flawless hair in 3 easy steps.
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-neutral-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center reveal-on-scroll reveal-delay-100">
<div className="w-24 h-24 rounded-full bg-[#FDF2F2] border-4 border-white shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-4xl text-[#C98A8A]" icon="solar:plug-circle-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 whitespace-nowrap">1. Charge &amp; Pack</h3>
<p className="text-sm text-neutral-500 max-w-xs">Charge fully via USB-C. Toss it in your bag—no bulky cords required.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center reveal-on-scroll reveal-delay-200">
<div className="w-24 h-24 rounded-full bg-[#FDF2F2] border-4 border-white shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-4xl text-[#C98A8A]" icon="solar:power-button-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 whitespace-nowrap">2. Heat Up</h3>
<p className="text-sm text-neutral-500 max-w-xs">Press the button and wait 30 seconds. Choose from 3 heat settings for your hair type.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center reveal-on-scroll reveal-delay-300">
<div className="w-24 h-24 rounded-full bg-[#FDF2F2] border-4 border-white shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-4xl text-[#C98A8A]" icon="solar:magic-stick-3-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 whitespace-nowrap">3. Simply Brush</h3>
<p className="text-sm text-neutral-500 max-w-xs">Brush slowly from root to tip. Watch frizz vanish and sleekness appear instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FCFBF8] px-6 md:px-12 border-b border-neutral-100" id="shop">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

<div className="flex flex-col gap-4 reveal-on-scroll">
<div className="w-full aspect-square bg-[#F9F6F0] rounded-2xl overflow-hidden relative">

<img alt="Vora Comb Silk White" className="w-full h-full object-cover mix-blend-multiply" id="main-product-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d269f326-e982-4ff8-a5cd-f2b82223304c_1600w.png"/>
<div className="absolute top-4 left-4 bg-[#D4AF37] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full whitespace-nowrap">
            Save 33%
          </div>
</div>
<div className="grid grid-cols-4 gap-4">
<button className="aspect-square bg-[#F9F6F0] rounded-xl overflow-hidden border-2 border-neutral-900 focus:outline-none">
<img alt="Thumbnail 1" className="w-full h-full object-cover mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d269f326-e982-4ff8-a5cd-f2b82223304c_320w.png"/>
</button>
<button className="aspect-square bg-[#F9F6F0] rounded-xl overflow-hidden border border-neutral-200 focus:outline-none hover:border-neutral-400 transition-colors">
<img alt="Thumbnail 2" className="w-full h-full object-cover mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4086676e-257b-4961-834c-8c18b4d52ecd_320w.png"/>
</button>
<button className="aspect-square bg-[#F9F6F0] rounded-xl overflow-hidden border border-neutral-200 focus:outline-none hover:border-neutral-400 transition-colors">
<img alt="Thumbnail 3" className="w-full h-full object-cover mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e769ea28-9161-44a7-8e0d-618968394ea1_320w.png"/>
</button>
<button className="aspect-square bg-[#F9F6F0] rounded-xl overflow-hidden border border-neutral-200 focus:outline-none hover:border-neutral-400 transition-colors">
<img alt="Thumbnail 4" className="w-full h-full object-cover mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/451e7d7c-3dac-4495-95e1-fe2b37ecfbb5_320w.png"/>
</button>
</div>
</div>

<div className="flex flex-col justify-center reveal-on-scroll reveal-delay-100">
<div className="flex items-center gap-2 mb-2">
<div className="flex text-[#D4AF37] text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-neutral-500 underline cursor-pointer whitespace-nowrap">4.9/5 (834 Reviews)</span>
</div>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">
          Vora™ Wireless Comb
        </h1>
<div className="flex items-end gap-3 mb-6">
<span className="text-2xl font-semibold text-neutral-900 whitespace-nowrap">£30.00</span>
<span className="text-lg text-neutral-400 line-through mb-0.5 whitespace-nowrap">£45.00</span>
</div>
<p className="text-sm text-neutral-600 leading-relaxed mb-8">
          Achieve salon-quality smoothness anytime, anywhere. This ultra-portable heated brush smooths frizz, straightens waves, and fits perfectly in your purse. Rechargeable via USB-C.
        </p>

<div className="flex flex-col gap-4 mb-8 w-full">
<div id="product-component-1773509307305"></div>
</div>

<div className="grid grid-cols-3 gap-2 text-center border-t border-neutral-100 pt-6">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-neutral-700" icon="solar:box-minimalistic-linear"></iconify-icon>
<span className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider whitespace-nowrap">Fast Shipping</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-neutral-700" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider whitespace-nowrap">30-Day Guarantee</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-neutral-700" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider whitespace-nowrap">Secure Checkout</span>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#FDF2F2]/50 pt-24 pb-32 relative" id="reviews">
<div className="px-6 md:px-12 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto relative items-end">

<div className="lg:col-span-4 flex flex-col h-full justify-start reveal-on-scroll">
<div className="mb-8">
<span className="text-xs font-bold text-[#C98A8A] uppercase tracking-widest mb-4 block whitespace-nowrap">
            [ Real Results ]
          </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">
            Don't just take our word for it.
          </h2>
<p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
            See why thousands of women have swapped their bulky flat irons for the freedom of Vora.
          </p>
</div>
</div>

<div className="lg:col-span-8 relative overflow-hidden" style={{maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}>
<div className="testimonial-track flex snap-x snap-mandatory pb-8 gap-x-6 reveal-on-scroll reveal-delay-200">

<div className="group testimonial-card min-w-[300px] md:min-w-[340px] bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm snap-center">
<div className="flex text-[#D4AF37] text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 leading-relaxed mb-6 font-medium">
              "A lifesaver for travel! I took this to Europe and it was so easy to charge with my phone bank. My hair looked perfectly sleek every day."
            </p>
<div className="flex justify-between items-center border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden">
<img alt="Sarah" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;q=80"/>
</div>
<span className="text-xs font-bold text-neutral-900 whitespace-nowrap">Sarah M.</span>
</div>
<span className="text-[10px] text-green-600 uppercase font-bold flex items-center gap-1 whitespace-nowrap">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> Verified
              </span>
</div>
</div>

<div className="group testimonial-card min-w-[300px] md:min-w-[340px] bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm snap-center">
<div className="flex text-[#D4AF37] text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 leading-relaxed mb-6 font-medium">
              "I keep this in my desk drawer at work. Takes 3 minutes to fix my hair before meetings. Heats up surprisingly fast for being wireless."
            </p>
<div className="flex justify-between items-center border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden">
<img alt="Jessica" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;q=80"/>
</div>
<span className="text-xs font-bold text-neutral-900 whitespace-nowrap">Jessica T.</span>
</div>
<span className="text-[10px] text-green-600 uppercase font-bold flex items-center gap-1 whitespace-nowrap">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> Verified
              </span>
</div>
</div>

<div className="group testimonial-card min-w-[300px] md:min-w-[340px] bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm snap-center">
<div className="flex text-[#D4AF37] text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 leading-relaxed mb-6 font-medium">
              "No more burnt fingers! The comb design is genius. It grabs the hair perfectly and smooths out my frizz instantly. Highly recommend."
            </p>
<div className="flex justify-between items-center border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden">
<img alt="Chloe" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&amp;q=80"/>
</div>
<span className="text-xs font-bold text-neutral-900 whitespace-nowrap">Chloe R.</span>
</div>
<span className="text-[10px] text-green-600 uppercase font-bold flex items-center gap-1 whitespace-nowrap">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> Verified
              </span>
</div>
</div>

<div className="group testimonial-card min-w-[300px] md:min-w-[340px] bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm snap-center">
<div className="flex text-[#D4AF37] text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 leading-relaxed mb-6 font-medium">
              "A lifesaver for travel! I took this to Europe and it was so easy to charge with my phone bank. My hair looked perfectly sleek every day."
            </p>
<div className="flex justify-between items-center border-t border-neutral-100 pt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden">
<img alt="Sarah" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;q=80"/>
</div>
<span className="text-xs font-bold text-neutral-900 whitespace-nowrap">Sarah M.</span>
</div>
<span className="text-[10px] text-green-600 uppercase font-bold flex items-center gap-1 whitespace-nowrap">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> Verified
              </span>
</div>
</div>
</div>
</div>
</div>
<style>
      .testimonial-track {
        width: max-content;
        animation: testimonial-scroll 25s linear infinite;
      }
      .testimonial-track:hover {
        animation-play-state: paused;
      }
      @keyframes testimonial-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
    </style>
</section>

<section className="py-24 bg-white px-6 md:px-12" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">
          Frequently Asked Questions
        </h2>
</div>
<div className="space-y-4 reveal-on-scroll reveal-delay-100">

<details className="group bg-[#FCFBF8] border border-neutral-100 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-neutral-900">
<h2 className="font-semibold text-sm">Will it work on my hair type?</h2>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 text-xl opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed">
            Yes! Vora features 3 adjustable heat settings allowing it to smooth fine, medium, and thick/wavy hair effectively without causing heat damage.
          </div>
</details>

<details className="group bg-[#FCFBF8] border border-neutral-100 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-neutral-900">
<h2 className="font-semibold text-sm">How long does the battery last?</h2>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 text-xl opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed">
            A full charge provides up to 45 minutes of continuous styling time depending on the heat setting. It fully recharges via USB-C in just 2 hours.
          </div>
</details>

<details className="group bg-[#FCFBF8] border border-neutral-100 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-neutral-900">
<h2 className="font-semibold text-sm">Is it safe to put in my bag right after use?</h2>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 text-xl opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed">
            Yes, the anti-scald teeth protect the hot ceramic plates from touching anything directly. We also include a heat-resistant travel sleeve with every order!
          </div>
</details>

<details className="group bg-[#FCFBF8] border border-neutral-100 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-neutral-900">
<h2 className="font-semibold text-sm">How long is shipping?</h2>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 text-xl opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed">
            All orders are processed within 24 hours. Standard free shipping takes 5-8 business days worldwide.
          </div>
</details>
</div>
</div>
</section>

<footer className="text-neutral-900 bg-[#F9F6F0] border-t border-neutral-200 pt-16">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-2">
<h2 className="text-3xl font-bold tracking-tighter text-neutral-900 lowercase mb-4">
          vora.
        </h2>
<p className="text-sm text-neutral-500 max-w-xs mb-6 leading-relaxed">
          Premium beauty tech designed for the modern, on-the-go woman. Say goodbye to cords and bad hair days.
        </p>
</div>

<div>
<h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-6 whitespace-nowrap">Shop</h3>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-600 hover:text-black transition-colors whitespace-nowrap" href="#shop">Vora™ Comb</a></li>
<li><a className="text-sm text-neutral-600 hover:text-black transition-colors whitespace-nowrap" href="#reviews">Reviews</a></li>
<li><a className="text-sm text-neutral-600 hover:text-black transition-colors whitespace-nowrap" href="#how-it-works">How to Use</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-6 whitespace-nowrap">Support</h3>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-600 hover:text-black transition-colors whitespace-nowrap" href="#faq">FAQ</a></li>
<li><a className="text-sm text-neutral-600 hover:text-black transition-colors whitespace-nowrap" href="#">Contact Us</a></li>
<li><a className="text-sm text-neutral-600 hover:text-black transition-colors whitespace-nowrap" href="#">Shipping &amp; Returns</a></li>
</ul>
</div>
</div>

<div className="border-t border-neutral-200 px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-neutral-500 font-medium tracking-widest uppercase">
<div className="whitespace-nowrap">
        © 2024 Vora Beauty. All rights reserved.
      </div>
<div className="flex gap-8">
<a className="hover:text-black transition-colors whitespace-nowrap" href="#">Privacy Policy</a>
<a className="hover:text-black transition-colors whitespace-nowrap" href="#">Terms of Service</a>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-neutral-200 p-4 transform transition-transform duration-500 z-40 flex justify-between items-center md:px-12 pb-6 md:pb-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]" id="sticky-atc">
<div className="hidden md:flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-[#F9F6F0] overflow-hidden">
<img alt="Vora Comb" className="w-full h-full object-cover mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8ca9cce-3296-4bda-b1b4-9fa951912eb6_320w.png"/>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900 whitespace-nowrap">Vora™ Wireless Comb</p>
<div className="flex items-center gap-2">
<div className="flex text-[#D4AF37] text-[10px]">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[10px] font-bold text-[#C98A8A] uppercase tracking-wider whitespace-nowrap">33% Off</p>
</div>
</div>
</div>
<a className="w-full md:w-auto bg-neutral-900 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-colors text-center tracking-wide flex justify-center items-center gap-2 shadow-lg shadow-neutral-900/20 whitespace-nowrap" href="#shop">
      Add to Cart — £30.00
    </a>
</div>



    </>
  );
}
