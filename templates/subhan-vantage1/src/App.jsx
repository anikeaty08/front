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



      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
      });
    


  // --- TESTIMONIALS (Next/Prev + dots) ---
  (function () {
    const prevBtn = document.getElementById("tPrev");
    const nextBtn = document.getElementById("tNext");
    const avatarEl = document.getElementById("tAvatar");
    const quoteEl = document.getElementById("tQuote");
    const nameEl = document.getElementById("tName");
    const roleEl = document.getElementById("tRole");
    const dotsEl = document.getElementById("tDots");

    if (!prevBtn || !nextBtn || !avatarEl || !quoteEl || !nameEl || !roleEl || !dotsEl) return;

    const testimonials = [
      {
        avatar:
          "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
        quote:
          "The layout feels premium and effortless. Our conversion rate went up within the first week after switching.",
        name: "Ava Thompson",
        role: "Verified Buyer",
      },
      {
        avatar:
          "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg",
        quote:
          "Beautiful motion, clean hierarchy, and it loads fast. It finally looks like a modern brand, not a template.",
        name: "Noah Patel",
        role: "Store Owner",
      },
      {
        avatar:
          "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp",
        quote:
          "The product grids and collection cards are so easy to scan. Customers find what they want faster now.",
        name: "Mia Laurent",
        role: "Verified Buyer",
      },
      {
        avatar:
          "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
        quote:
          "It feels like Apple-level polish with ecommerce practicality. Smooth, minimal, and confident.",
        name: "Ethan Rivera",
        role: "Creative Director",
      },
    ];

    let index = 0;

    // Small fade transition (no dependencies)
    function animateSwap() {
      const targets = [avatarEl, quoteEl, nameEl, roleEl, dotsEl];
      targets.forEach((el) => {
        el.style.transition = "opacity 240ms ease, transform 240ms ease";
        el.style.opacity = "0";
        el.style.transform = "translateY(6px)";
      });

      window.setTimeout(() => {
        render();
        targets.forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });
      }, 220);
    }

    function renderDots() {
      dotsEl.innerHTML = "";
      testimonials.forEach((_, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", `Go to testimonial ${i + 1}`);
        b.className =
          "h-2.5 rounded-full transition-all duration-300 " +
          (i === index ? "w-10 bg-gray-900" : "w-2.5 bg-gray-300 hover:bg-gray-400");
        b.addEventListener("click", () => {
          if (i === index) return;
          index = i;
          animateSwap();
        });
        dotsEl.appendChild(b);
      });
    }

    function render() {
      const t = testimonials[index];
      avatarEl.src = t.avatar;
      avatarEl.alt = `${t.name} avatar`;
      quoteEl.textContent = t.quote;
      nameEl.textContent = t.name;
      roleEl.textContent = t.role;
      renderDots();

      // Lucide re-scan (safe to call; fixes any icon updates elsewhere too)
      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
      }
    }

    function next() {
      index = (index + 1) % testimonials.length;
      animateSwap();
    }
    function prev() {
      index = (index - 1 + testimonials.length) % testimonials.length;
      animateSwap();
    }

    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);

    // Optional: keyboard support when section is in view
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });

    // First paint
    render();

    // Start visible (so the first transition doesn’t flash)
    [avatarEl, quoteEl, nameEl, roleEl, dotsEl].forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-transparent">
<div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex-shrink-0">
<a className="text-xl font-semibold tracking-tight text-black flex items-center gap-1" href="#">
            Vantage
            <span className="opacity-40">_</span>
</a>
</div>

<div className="hidden md:flex items-center gap-10">
<a className="text-base font-normal text-gray-600 hover:text-black transition-colors" href="#">
            Shop
          </a>
<a className="text-base font-normal text-gray-600 hover:text-black transition-colors" href="#">
            Collections
          </a>
<a className="text-base font-normal text-gray-600 hover:text-black transition-colors" href="#">
            Blog
          </a>
<a className="text-base font-normal text-gray-600 hover:text-black transition-colors" href="#">
            Support
          </a>
</div>

<div className="flex items-center gap-5">
<button className="text-gray-600 hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<div className="relative">
<button className="text-gray-600 hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
</button>
<span className="absolute -top-1 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gray-100 text-[10px] font-medium text-gray-900">
              0
            </span>
</div>
</div>
</div>
</nav>

<main className="sm:px-6 max-w-[1440px] mr-auto ml-auto pr-4 pb-20 pl-4">

<div className="relative w-full rounded-[40px] sm:rounded-[60px] h-[700px] sm:h-[640px] overflow-hidden mt-4 shadow-[0_20px_60px_-15px_rgba(147,51,234,0.15)] ring-1 ring-black/5 isolate group">

<div className="absolute inset-0 z-0 bg-[#F3F0FF] overflow-hidden">

<div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-b from-purple-300 via-indigo-300 to-transparent blur-[120px] opacity-60 animate-float-slow mix-blend-multiply"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-violet-400 via-fuchsia-200 to-blue-200 blur-[100px] opacity-50 animate-float-medium mix-blend-multiply"></div>
<div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] rounded-full bg-purple-200 blur-[80px] opacity-40 animate-float-slow mix-blend-overlay"></div>

<div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] rounded-full bg-pink-300/30 blur-[60px] animate-float-medium mix-blend-multiply"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMDUiIGQ9Ik00NC43LC03Ni40QzU4LjksLTY5LjIsNzEuOCwtNTkuMSw4MS4zLC00LjVDOTQuNywxMC4yLDg2LjMsMjQuNyw3NS42LDM3LjJDNjQuOSw0OS43LDUxLjksNjAuMiwzNy42LDY3LjRDMjMuMyw3NC42LDcuNyw3OC41LC02LjgsNzYuM0MtMjEuMyw3NC4xLC0zNC43LDY1LjgsLTQ2LjgsNTUuMUMtNTguOSw0NC40LC02OS43LDMxLjMsLTc1LjEsMTYuOEMtODAuNSwyLjMsLTgwLjUsLTEzLjYsLTc0LjEsLTI3LjJDLTY3LjksLTQwLjgsLTU1LjMsLTUyLjEsLTQyLjMsLTYwLjFDLTI5LjIsLTY4LjEsLTE1LjcsLTcyLjgsMCwtNzZMMCwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwIDEwMCkiIC8+PC9zdmc+')] bg-cover opacity-30 mix-blend-soft-light animate-pulse"></div>
</div>

<div className="absolute top-6 right-6 sm:top-10 sm:right-10 z-20">
<a className="group flex items-center gap-2 bg-white/40 hover:bg-white/70 backdrop-blur-md border border-white/50 pl-5 pr-3 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md" href="#">
<span className="text-sm font-medium text-gray-800">Buy Template</span>
<span className="bg-white rounded-full p-1.5 group-hover:bg-gray-50 transition-colors">
<i className="w-3.5 h-3.5 text-black" data-lucide="arrow-up-right"></i>
</span>
</a>
</div>

<div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-8 sm:px-12 md:px-20 z-10 w-full h-full">

<div className="flex flex-col justify-center items-start max-w-2xl lg:max-w-xl z-20 pt-20 lg:pt-0">

<div className="animate-fade-in-up">
<div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/40 rounded-full px-4 py-1.5 mb-8 shadow-sm">
<i className="w-3.5 h-3.5 text-gray-900 fill-current" data-lucide="shopping-bag"></i>
<span className="text-xs font-medium text-gray-800 tracking-wide">
                  Powered by Shopify
                </span>
</div>
</div>

<h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl md:text-[5rem] leading-[1.05] font-semibold text-gray-900 tracking-tighter mb-6">
              The
              <span className="text-purple-600 relative inline-block">
                beautiful
                <span className="absolute inset-0 bg-purple-400/20 blur-xl -z-10 rounded-full"></span>
</span>
              way to sell anything online.
            </h1>

<p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg font-normal mb-10">
              Designed with precision, this template makes it easy to turn your
              website into a powerful ecommerce store.
            </p>

<div className="animate-fade-in-up delay-300">
<a className="group inline-flex items-center justify-between gap-4 bg-white text-gray-900 pl-6 pr-2 py-2 rounded-full font-medium text-base shadow-lg shadow-purple-900/5 transition-transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]" href="#">
<span>Shop Products</span>
<div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-gray-900" data-lucide="move-up-right"></i>
</div>
</a>
</div>
</div>

<div className="hidden lg:flex w-1/2 h-full relative items-center justify-center [perspective:1600px] z-10">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
<div className="w-[600px] h-[600px] rounded-full border border-white/30 animate-[spin_40s_linear_infinite] relative opacity-70">
<div className="absolute -top-1 left-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.9)]"></div>
</div>
</div>

<div className="relative w-[380px] h-[520px] animate-float-showcase group cursor-pointer [transform-style:preserve-3d]">

<div className="relative w-full h-full transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] [transform-style:preserve-3d] [transform:rotateY(-12deg)_rotateX(6deg)] group-hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1.02)]">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-[32px] opacity-60 -z-10 [transform:translateZ(-50px)_translateX(20px)_translateY(20px)] border border-white/40 blur-[1px]"></div>

<div className="absolute inset-0 bg-white/65 backdrop-blur-2xl rounded-[32px] border border-white/60 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden [transform:translateZ(0px)]">

<div className="h-12 border-b border-white/40 flex items-center justify-between px-5 bg-white/30">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] border border-black/5"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] border border-black/5"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#28C840] border border-black/5"></div>
</div>
<div className="px-3 py-1 rounded-full bg-white/50 border border-white/40 text-[10px] font-medium text-gray-500 flex items-center gap-1.5 shadow-sm">
<i className="w-2.5 h-2.5 text-gray-400" data-lucide="lock"></i>
                      vantage.store
                    </div>
</div>

<div className="p-5 flex-1 flex flex-col">

<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 border border-white/50 shadow-inner group-hover:shadow-md transition-all duration-500">
<img alt="Product Showcase" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/45211788-2848-430a-9e43-0a8eea33cea9_800w.jpg"/>

<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-gray-900 uppercase tracking-wider border border-white/60 shadow-sm">
                        New
                      </div>
</div>

<div className="mt-5 space-y-3">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-semibold text-gray-900 leading-tight">
                            Minimalist Chair
                          </h3>
<p className="text-sm text-gray-500 mt-1">
                            Interior Collection
                          </p>
</div>
<span className="text-base font-semibold text-gray-900">
                          $249
                        </span>
</div>
<button className="w-full py-2.5 mt-2 bg-black hover:bg-gray-800 text-white rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/10 active:scale-95 group/btn">
<span>Add to Cart</span>
<i className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-y-0.5" data-lucide="shopping-bag"></i>
</button>
</div>
</div>
</div>

<div className="absolute -left-10 bottom-24 bg-white/80 backdrop-blur-xl pl-3 pr-5 py-3 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] border border-white/60 flex items-center gap-3 [transform:translateZ(40px)] transition-transform duration-500 group-hover:[transform:translateZ(60px)]">
<div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 ring-4 ring-white/50">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold text-gray-900">
                      Order Placed
                    </span>
<span className="text-[10px] text-gray-500">
                      Just now from USA
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="sm:mt-24 mt-16 pr-4 pl-4">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-transparent reveal-on-scroll">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Most Popular
            </h2>
<p className="text-lg text-gray-500 mt-3 font-normal leading-relaxed">
              Showcase your most popular products, front and center.
            </p>
</div>
<div className="flex-shrink-0 mb-1">
<a className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:opacity-70 transition-opacity" href="#">
              View All
              <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group cursor-pointer reveal-on-scroll delay-100">
<div className="relative aspect-square bg-[#F7F5FF] rounded-[32px] overflow-hidden mb-6 p-10 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
<img alt="Retro Handheld Console" className="hover:scale-105 transition-transform duration-500 opacity-90 mix-blend-multiply w-full h-full object-contain drop-shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-5 right-5 w-12 h-12 bg-[#ECE5F5] rounded-full flex items-center justify-center text-gray-900 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:scale-110">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="space-y-1">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                Retro Handheld Console
              </h3>
<p className="text-base font-normal text-gray-700">Technology</p>
<p className="text-sm font-normal text-gray-500">USD $59.99</p>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-200">
<div className="relative aspect-square bg-[#F7F5FF] rounded-[32px] overflow-hidden mb-6 p-10 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
<img alt="Horizon Glow Sneakers" className="hover:scale-105 transition-transform duration-500 mix-blend-multiply w-full h-full object-contain drop-shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-5 right-5 w-12 h-12 bg-[#ECE5F5] rounded-full flex items-center justify-center text-gray-900 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:scale-110">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="space-y-1">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                Horizon Glow Sneakers
              </h3>
<p className="text-base font-normal text-gray-700">Footwear</p>
<p className="text-sm font-normal text-gray-500">USD $129.99</p>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-300">
<div className="relative aspect-square bg-[#F7F5FF] rounded-[32px] overflow-hidden mb-6 p-10 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
<img alt="Tropical Paradise Plant" className="hover:scale-105 transition-transform duration-500 mix-blend-darken w-full h-full object-contain drop-shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b4ea31d-51d9-4e24-9acc-575762bd29f5_1600w.png"/>
<div className="absolute bottom-5 right-5 w-12 h-12 bg-[#ECE5F5] rounded-full flex items-center justify-center text-gray-900 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:scale-110">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="space-y-1">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                Tropical Paradise Plant
              </h3>
<p className="text-base font-normal text-gray-700">Home</p>
<p className="text-sm font-normal text-gray-500">USD $39.99</p>
</div>
</div>
</div>
</div>

<div className="mt-24 sm:mt-32 px-4 sm:px-6">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
<div className="max-w-xl">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 leading-[1.05]">
              Curated Collections
            </h2>
<p className="text-lg text-gray-500 mt-4 font-normal leading-relaxed">
              Explore our thoughtfully designed categories, crafted for the
              modern lifestyle.
            </p>
</div>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 px-5 py-2.5 rounded-full transition-all" href="#">
            View All Categories
            <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">

<div className="lg:col-span-7 lg:h-full group overflow-hidden cursor-pointer h-[450px] rounded-[40px] relative reveal-on-scroll delay-100">

<img alt="Home Collection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de7035ff-dbf8-4c46-bd53-52791afc0c6a_1600w.webp"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70"></div>

<div className="flex flex-col sm:p-12 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium tracking-wider uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Featured Collection
                </div>
<h3 className="text-4xl sm:text-6xl font-semibold text-white tracking-tighter mb-2">
                  Home &amp; Living
                </h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-white/80 text-lg font-normal mt-2 max-w-md pt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-500">
                    Elevate your space with our premium furniture and decor
                    pieces designed for comfort.
                  </p>
</div>
</div>
</div>

<div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 -translate-y-4 translate-x-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500 ease-out">
<svg className="lucide lucide-arrow-up-right w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6 h-full">

<div className="relative flex-1 h-[300px] lg:h-auto group rounded-[40px] overflow-hidden cursor-pointer bg-gray-100 reveal-on-scroll delay-200">
<img alt="Footwear" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
<div className="flex flex-col bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9beda11a-9a5c-428e-b023-6ec58088d7dd_1600w.jpg)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-end">
<span className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-move-right w-4 h-4 text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 8L22 12L18 16"></path>
<path d="M2 12H22"></path>
</svg>
</span>
</div>
<div>
<span className="text-white/80 text-sm font-medium tracking-wide uppercase">
                    New Season
                  </span>
<h3 className="text-3xl font-semibold text-white tracking-tight mt-1">
                    Footwear
                  </h3>
</div>
</div>
</div>

<div className="relative flex-1 h-[300px] lg:h-auto group rounded-[40px] overflow-hidden cursor-pointer bg-gray-900 reveal-on-scroll delay-300">
<img alt="Technology" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>

<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/30 blur-[80px] rounded-full mix-blend-screen pointer-events-none group-hover:bg-purple-500/50 transition-colors duration-500"></div>
<div className="flex flex-col bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3046e3e4-bb36-42c1-ac27-082c80529321_1600w.jpg)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-end">
<span className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
<svg className="lucide lucide-zap w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</span>
</div>
<div className="">
<h3 className="text-3xl font-semibold text-white tracking-tight">
                    Technology
                  </h3>
<p className="text-white/60 text-sm mt-1 font-medium group-hover:text-white/90 transition-colors">
                    Digital &amp; Hardware
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="sm:px-6 mt-12 pr-4 pl-4">
<div className="md:h-[600px] overflow-hidden group cursor-pointer shadow-gray-200 reveal-on-scroll w-full h-[500px] rounded-[40px] relative shadow-2xl">

<img alt="Action Shot" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b4a707a-899c-483c-b51d-f520c0902492_3840w.jpg"/>

<div className="absolute bottom-0 left-0 w-full p-8 md:p-14">
<h2 className="text-4xl sm:text-5xl md:text-[4rem] leading-[1.05] font-semibold text-white tracking-tighter max-w-3xl">
              Showcase your products in action
            </h2>
</div>

<div className="absolute top-8 right-8 z-20">
<button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-105">
<svg className="w-4 h-4 text-black" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" width="4" x="6" y="4"></rect>
<rect height="16" width="4" x="14" y="4"></rect>
</svg>
</button>
</div>
</div>
</div>

<div className="mt-24 sm:mt-32 px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Highlight what makes you stand out
          </h2>
<p className="text-lg text-gray-500 mt-4 font-normal leading-relaxed">
            Use this section to show off the key features like these.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#F9F8FF] rounded-[32px] p-8 sm:p-10 flex flex-col items-start h-full reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-[#EFE9FA] rounded-full flex items-center justify-center mb-6">
<i className="w-5 h-5 text-gray-900 fill-black" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">
              Instant Digital Downloads
            </h3>
<p className="text-base text-gray-500 leading-relaxed">
              Access your digital product purchase immediately after checkout.
            </p>
</div>

<div className="bg-[#F9F8FF] rounded-[32px] p-8 sm:p-10 flex flex-col items-start h-full reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-[#EFE9FA] rounded-full flex items-center justify-center mb-6">
<div className="w-4 h-4 bg-gray-900 rotate-45 rounded-[1px]"></div>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">
              Premium Quality Materials
            </h3>
<p className="text-base text-gray-500 leading-relaxed">
              Products crafted with only the finest materials for long-lasting
              quality.
            </p>
</div>

<div className="bg-[#F9F8FF] rounded-[32px] p-8 sm:p-10 flex flex-col items-start h-full reveal-on-scroll delay-300">
<div className="w-12 h-12 bg-[#EFE9FA] rounded-full flex items-center justify-center mb-6">
<i className="w-5 h-5 text-gray-900 fill-black" data-lucide="fast-forward"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">
              Fast &amp; Secure Shipping
            </h3>
<p className="text-base text-gray-500 leading-relaxed">
              Fast and secure shipping with complete tracking on all physical
              product orders.
            </p>
</div>
</div>
</div>

<div className="mt-24 sm:mt-32 px-4 sm:px-6">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Explore the blog
            </h2>
<p className="text-lg text-gray-500 mt-3 font-normal leading-relaxed">
              Share insights, boost SEO, and build trust with your audience.
            </p>
</div>
<div className="flex-shrink-0 mb-1">
<a className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:opacity-70 transition-opacity" href="#">
              View Posts
              <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="group relative w-full bg-[#FAFAFF] rounded-[40px] overflow-hidden flex flex-col lg:flex-row min-h-[500px] mb-6 border border-gray-100/50 shadow-sm reveal-on-scroll delay-100">

<div className="relative w-full lg:w-[55%] min-h-[300px] lg:min-h-full overflow-hidden">

<div className="absolute top-6 left-6 z-20">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-xs font-semibold text-gray-900 tracking-wide border border-white/50 shadow-sm">
                Must Read
              </span>
</div>
<img alt="Abstract Gradient" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0fbcbd0e-ca12-4333-a147-a339a345e6fa_1600w.webp"/>
</div>

<div className="w-full lg:w-[45%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative bg-[#FAFAFF]">
<h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.05] font-semibold text-gray-900 tracking-tight mb-6">
              10 Creative Ways to Use Digital Backgrounds in Your Projects
            </h3>
<p className="text-lg text-gray-500 leading-relaxed mb-12 font-normal">
              Discover unique and inspiring ways to incorporate digital
              backgrounds into your designs, from websites to social media.
            </p>
<div className="mt-auto flex items-center justify-between w-full">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover ring-2 ring-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div>
<p className="text-sm font-semibold text-gray-900">
                    Written by Sarah Miller
                  </p>
<p className="text-xs text-gray-500 font-medium">
                    Graphic Designer
                  </p>
</div>
</div>
<div className="w-12 h-12 bg-[#F3F0FF] rounded-full flex items-center justify-center group-hover:bg-purple-100 group-hover:text-purple-900 transition-colors cursor-pointer">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group cursor-pointer reveal-on-scroll delay-100">
<div className="relative aspect-[4/3] bg-[#EBE9F5] rounded-[32px] overflow-hidden mb-5">
<div className="absolute top-6 left-6 z-20">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-gray-900 tracking-wide shadow-sm">
                  Productivity
                </span>
</div>
<img alt="Mobile" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f870fa0-1fa4-4845-bf04-6732d79259fa_1600w.webp"/>
</div>
<h4 className="text-xl font-semibold text-gray-900 tracking-tight leading-snug group-hover:text-gray-600 transition-colors">
              Mastering mobile productivity in 2024
            </h4>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-200">
<div className="relative aspect-[4/3] bg-[#EBE9F5] rounded-[32px] overflow-hidden mb-5">
<div className="absolute top-6 left-6 z-20">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/-sm">
                  Guides
                </span>
</div>
<img alt="Office" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/200577ff-3f6e-422c-8ade-a219fc9f50eb_1600w.webp"/>
</div>
<h4 className="text-xl font-semibold text-gray-900 tracking-tight leading-snug group-hover:text-gray-600 transition-colors">
              The ultimate guide to office ergonomics
            </h4>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-300">
<div className="relative aspect-[4/3] bg-[#EBE9F5] rounded-[32px] overflow-hidden mb-5">
<div className="absolute top-6 left-6 z-20">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-gray-900 tracking-wide shadow-sm">
                  Trends
                </span>
</div>
<img alt="Workspace" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/487671ad-0426-4ad1-b21a-1f74d3ae5c31_1600w.jpg"/>
</div>
<h4 className="text-xl font-semibold text-gray-900 tracking-tight leading-snug group-hover:text-gray-600 transition-colors">
              Top workspace trends to watch this year
            </h4>
</div>
</div>
</div>

<div className="sm:mt-32 mt-20">
<div className="relative w-full bg-[#FAFAFF] rounded-[40px] px-6 py-20 sm:py-28 overflow-hidden reveal-on-scroll" id="testimonial">

<div className="absolute top-8 right-8 flex gap-3 z-10">
<button aria-label="Previous testimonial" className="w-10 h-10 rounded-full bg-white/50 hover:bg-white border border-transparent hover:border-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-all duration-200" id="tPrev" type="button">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<button aria-label="Next testimonial" className="w-10 h-10 rounded-full bg-indigo-50 hover:bg-indigo-100 border border-indigo-100/50 flex items-center justify-center text-gray-900 transition-all duration-200" id="tNext" type="button">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="max-w-4xl mx-auto flex flex-col items-center text-center">

<div className="mb-10">
<img alt="Customer Avatar" className="w-20 h-20 rounded-full object-cover shadow-sm ring-4 ring-white" id="tAvatar" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/146e6ba9-12a4-43b3-a1a3-7b2340a34a70_320w.webp"/>
</div>

<h2 className="text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.05] font-semibold text-gray-900 tracking-tighter mb-10 max-w-3xl" id="tQuote">
        Showcase customer testimonials that build trust and inspire confidence in your products.
      </h2>

<div className="flex flex-col items-center gap-3 mb-16">
<div className="flex gap-1 text-black" id="tStars">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<span className="text-base text-gray-500 font-medium" id="tName">Your Customer</span>
<span className="text-xs text-gray-400 font-medium" id="tRole">Verified Buyer</span>
</div>

<div aria-label="Testimonial pagination" className="flex items-center gap-2 mb-10" id="tDots"></div>

<div className="w-full flex flex-col items-center">
<p className="text-sm text-gray-400 font-normal mb-8">
          Feature client logos to build trust and credibility for your brand:
        </p>
<div className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-80 grayscale">
<div className="h-6 flex items-center">
<span className="text-xl font-sans font-bold tracking-[0.2em] text-gray-800">MILANO</span>
</div>
<div className="h-6 flex items-center gap-2">
<svg className="w-6 h-6 fill-gray-900" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
</svg>
<span className="text-xl font-sans font-bold tracking-tight text-gray-900">Amsterdam</span>
</div>
<div className="h-6 flex items-center">
<span className="text-2xl font-serif font-bold text-gray-900">venice.</span>
</div>
<div className="h-8 flex items-center">
<svg className="text-gray-800" fill="none" height="32" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 40">
<path d="M10,25 Q20,10 30,25 T50,25 T70,20 T90,30" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="h-8 flex items-center">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-gray-400/50"></div>
<div className="w-6 h-6 rounded-t-full bg-gray-800"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="relative mt-24 sm:mt-32">

<div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-pink-500/20 rounded-[44px] sm:rounded-[64px] blur-2xl opacity-40"></div>

<footer className="relative bg-[#0A0A0B] rounded-[40px] sm:rounded-[60px] overflow-hidden text-white shadow-2xl ring-1 ring-white/10 reveal-on-scroll">

<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="px-8 py-16 sm:px-16 sm:py-24 relative z-10">
<div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">

<div className="max-w-sm">
<a className="text-2xl font-semibold tracking-tight text-white flex items-center gap-1 mb-6" href="#">
                  Vantage
                  <span className="text-gray-600">_</span>
</a>
<p className="text-gray-400 text-base leading-relaxed mb-8 font-normal">
                  Empowering your digital storefront with modern design, fluid
                  animations, and powerful features.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all text-white border border-white/5" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all text-white border border-white/5" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all text-white border border-white/5" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-10 flex-1">
<div className="">
<h4 className="font-medium text-white mb-6">Platform</h4>
<ul className="space-y-4 text-sm text-gray-400 font-normal">
<li className="">
<a className="hover:text-white transition-colors" href="#">
                        Templates
                      </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                        Pricing
                      </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                        Features
                      </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                        Integrations
                      </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-6">Company</h4>
<ul className="space-y-4 text-sm text-gray-400 font-normal">
<li>
<a className="hover:text-white transition-colors" href="#">
                        About Us
                      </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                        Careers
                      </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                        Blog
                      </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                        Contact
                      </a>
</li>
</ul>
</div>
<div className="col-span-2 sm:col-span-1">
<h4 className="font-medium text-white mb-6">Stay updated</h4>
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors" placeholder="email@domain.com" type="email"/>
<button className="absolute right-2 top-2 p-1.5 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors shadow-lg">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
<p className="text-sm text-gray-500 font-normal">
                © 2024 Vantage Template. All rights reserved.
              </p>
<div className="flex gap-8 text-sm text-gray-500 font-medium">
<a className="hover:text-white transition-colors" href="#">
                  Privacy Policy
                </a>
<a className="hover:text-white transition-colors" href="#">
                  Terms of Service
                </a>
</div>
</div>
</div>

<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-[0.02] select-none pointer-events-none whitespace-nowrap">
<span className="text-[12rem] sm:text-[18rem] font-bold tracking-tighter leading-none">
              Commerce
            </span>
</div>
</footer>
</div>
</main>





    </>
  );
}
