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
<div className="flex h-20 max-w-[1440px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex-shrink-0">
<a className="flex items-center gap-1 text-xl font-semibold text-black tracking-tight" href="#">Dsi</a>
</div>

<div className="hidden md:flex items-center gap-10">
<a className="hover:text-black transition-colors text-base font-normal text-gray-600" href="#">Projets</a>
<a className="hover:text-black transition-colors text-base font-normal text-gray-600" href="#">Services</a>
<a className="hover:text-black transition-colors text-base font-normal text-gray-600" href="#">Maintenance</a>
</div>

<div className="flex items-center gap-5">
<button className="text-gray-600 hover:text-black transition-colors">
</button>
<div className="relative">
<button className="text-gray-600 hover:text-black transition-colors">
</button>
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
</div>

<div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-8 sm:px-12 md:px-20 z-10 w-full h-full">

<div className="flex flex-col lg:max-w-xl z-20 lg:pt-0 max-w-2xl pt-20 items-start justify-center">

<div className="animate-fade-in-up">
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






<div className="sm:mt-32 mt-20">
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
<li className="">
<a className="hover:text-white transition-colors" href="#">
                        Features
                      </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                        Integrations
                      </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-white mb-6">Company</h4>
<ul className="space-y-4 text-sm text-gray-400 font-normal">
<li className="">
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
<p className="text-sm font-normal text-gray-500">© 2026 Bnf. All rights reserved.</p>
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
